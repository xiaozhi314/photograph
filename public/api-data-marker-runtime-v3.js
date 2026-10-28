/* eslint-disable no-console */
/**
 * API Data Marker Runtime v3
 * 适配 Server Action 接口
 * 请求格式: { actionName: "src.actions.PageName.functionName", args: { json: [...] } }
 * 响应格式: 直接返回数据
 * 
 * 通过构建时生成的 data-from-mapping.json 来确定字段与数据库的映射关系
 */

const API_SERVICE_NAME_ATTR = 'data-api-service-name';
const API_KEY_ATTR = 'data-api-key';
const API_PARENT_KEY_ATTR = 'data-api-parent-key';
const SERVICE_NAME_PREFIX = 'entities';
const DEBUG_LOCAL_STORAGE_KEY = 'api-data-marker-debug';
const RPC_PATH_PATTERN = /\/rpc\//;

// 动态获取 basePath，支持 PROJ_xxx 格式
function getBasePath() {
  if (typeof window === 'undefined') return '';
  const match = window.location.pathname.match(/^(\/PROJ_[a-zA-Z0-9_]+)/);
  return match ? match[1] : '';
}

function getDataFromMappingUrl() {
  const basePath = getBasePath();
  return `${basePath}/data-from-mapping.json`;
}

let debugEnabled = false;
let dataFromMapping = null; // 缓存映射数据
let mappingLoadPromise = null; // 防止重复加载

class RequestContext {
  constructor(url, method, actionName, pageName, funcName) {
    this.url = url;
    this.method = method;
    this.actionName = actionName; // 完整 action 名称: src.actions.PageName.funcName
    this.pageName = pageName;     // 页面名称
    this.funcName = funcName;     // 函数名称
  }
}

class DataFieldMetadata {
  constructor(path, recordKey, url, method, actionName, fieldName, dataApiServiceName, dataFrom) {
    this.path = path;
    this.recordKey = recordKey;
    this.url = url;
    this.method = method;
    this.actionName = actionName;
    this.fieldName = fieldName;
    this.dataApiServiceName = dataApiServiceName;
    this.dataFrom = dataFrom; // 原始 data-from 值
  }
}

class TraversalContext {
  constructor(path, recordKey, recordId) {
    this.path = path;
    this.recordKey = recordKey;
    this.recordId = recordId;
  }
}

const valueIndex = new Map();
const sortedMetadataCache = new Map();
const apiCallTimestamps = new Map();
let annotationScheduled = false;
let annotationTimer = null;

const MAX_INDEX_SIZE = 10000;
const MAX_ENTRIES_PER_VALUE = 50;

const scheduleMicrotask =
  typeof queueMicrotask === 'function'
    ? queueMicrotask
    : (cb) => {
        Promise.resolve()
          .then(cb)
          .catch((error) => {
            console.error('[api-data-marker] Failed to execute microtask', error);
          });
      };

function resolveDebugEnabled() {
  try {
    const globalFlag =
      typeof window !== 'undefined' && window.__API_DATA_MARKER_DEBUG__;
    const localFlag =
      typeof window !== 'undefined' &&
      window.localStorage &&
      window.localStorage.getItem(DEBUG_LOCAL_STORAGE_KEY);
    const searchFlag =
      typeof window !== 'undefined' &&
      typeof window.location !== 'undefined' &&
      new URLSearchParams(window.location.search).get('apiDataDebug');

    return Boolean(
      globalFlag ||
        (typeof localFlag === 'string' && localFlag !== '0' && localFlag.toLowerCase() !== 'false') ||
        (typeof searchFlag === 'string' &&
          searchFlag !== '0' &&
          searchFlag.toLowerCase() !== 'false')
    );
  } catch {
    return false;
  }
}

function debugLog(message, payload) {
  if (!debugEnabled) return;
  if (payload === undefined) {
    console.log(`[api-data-marker-v3][debug] ${message}`);
  } else {
    console.log(`[api-data-marker-v3][debug] ${message}`, payload);
  }
}

let originalFetchRef = null;

// ===== 加载 data-from 映射 =====

async function loadDataFromMapping() {
  if (dataFromMapping !== null) {
    return dataFromMapping;
  }
  
  if (mappingLoadPromise) {
    return mappingLoadPromise;
  }
  
  mappingLoadPromise = (async () => {
    try {
      const mappingUrl = getDataFromMappingUrl();
      debugLog('loadDataFromMapping: fetching', { url: mappingUrl });
      const response = await (originalFetchRef || fetch)(mappingUrl);
      if (response.ok) {
        dataFromMapping = await response.json();
        debugLog('loadDataFromMapping: loaded mapping', { 
          actionCount: Object.keys(dataFromMapping).length 
        });
      } else {
        dataFromMapping = {};
        debugLog('loadDataFromMapping: mapping file not found, using empty mapping');
      }
    } catch (err) {
      dataFromMapping = {};
      debugLog('loadDataFromMapping: failed to load mapping', { error: err.message });
    }
    return dataFromMapping;
  })();
  
  return mappingLoadPromise;
}

function getFieldMapping(actionName) {
  if (!dataFromMapping) return null;
  return dataFromMapping[actionName] || null;
}

// ===== 工具函数 =====

function normalizeValue(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (typeof value === 'number') return String(value);
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    if (trimmed.length > 512) return null;
    return trimmed;
  }
  return null;
}

function formatPath(path) {
  return path
    .map((segment, index) => {
      if (segment.startsWith('[')) {
        return segment;
      }
      return index === 0 ? segment : `.${segment}`;
    })
    .join('');
}

function normalizeServiceNamePart(value) {
  if (value === undefined || value === null) {
    return 'unknown';
  }
  const normalized = String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return normalized || 'unknown';
}

// 从 data-from 值构建 service name
// data-from 格式: table-column-pk_column (如 bill-id-id)
function buildServiceNameFromDataFrom(dataFrom) {
  if (!dataFrom) return null;
  const parts = dataFrom.split('-');
  if (parts.length < 2) return null;
  const tableName = normalizeServiceNamePart(parts[0]);
  const columnName = normalizeServiceNamePart(parts[1]);
  return `${SERVICE_NAME_PREFIX}-${tableName}-${columnName}`;
}

function isCurrentServiceName(value) {
  return Boolean(value && value.startsWith(`${SERVICE_NAME_PREFIX}-`));
}

function hasCurrentMarker(el) {
  return isCurrentServiceName(el.getAttribute(API_SERVICE_NAME_ATTR));
}

function clearLegacyAttributes(el) {
  let removed = false;
  const serviceAttrValue = el.getAttribute(API_SERVICE_NAME_ATTR);
  const hasValidService = isCurrentServiceName(serviceAttrValue);

  for (const attribute of Array.from(el.attributes)) {
    if (!attribute.name.startsWith('data-api-')) continue;

    if (attribute.name === API_SERVICE_NAME_ATTR) {
      if (!isCurrentServiceName(attribute.value)) {
        el.removeAttribute(attribute.name);
        removed = true;
      }
      continue;
    }

    if (attribute.name === API_KEY_ATTR && hasValidService) {
      continue;
    }

    if (attribute.name === 'data-api-unique-id' ||
        attribute.name === 'data-api-unique-page-name' ||
        attribute.name === 'data-api-bind-info' ||
        attribute.name === 'data-api-map-var-name' ||
        attribute.name === API_PARENT_KEY_ATTR ||
        attribute.name === 'data-api-exclude-tracking' ||
        attribute.name === 'data-api-in-loop') {
      continue;
    }

    el.removeAttribute(attribute.name);
    removed = true;
  }

  if (removed) {
    debugLog('clearLegacyAttributes: removed old markers', {
      tagName: el.tagName,
    });
  }
}

function cleanupIndex() {
  if (valueIndex.size <= MAX_INDEX_SIZE) return;

  const entries = Array.from(valueIndex.entries());
  entries.sort((a, b) => a[1].length - b[1].length);

  const toRemove = entries.slice(0, entries.length - MAX_INDEX_SIZE);
  toRemove.forEach(([key]) => {
    valueIndex.delete(key);
    sortedMetadataCache.delete(key);
  });

  debugLog('cleanupIndex: removed old entries', { removed: toRemove.length });
}

// ===== 数据索引与遍历 =====

// 将路径数组转换为映射查找的 key
// 例如: ['list', '[0]', 'id'] -> 'list.id'
function pathToMappingKey(pathArray) {
  return pathArray
    .filter(segment => !segment.startsWith('['))
    .join('.');
}

function registerValue(rawValue, ctx, request, fieldMapping) {
  const normalized = normalizeValue(rawValue);
  if (!normalized) return;

  const pathString = formatPath(ctx.path);
  if (!pathString) return;

  // 查找 data-from 映射
  const mappingKey = pathToMappingKey(ctx.path);
  const dataFrom = fieldMapping ? fieldMapping[mappingKey] : null;
  
  if (!dataFrom) {
    debugLog('registerValue: no data-from mapping for field', {
      path: pathString,
      mappingKey,
      actionName: request.actionName,
    });
    return;
  }

  const dataApiServiceName = buildServiceNameFromDataFrom(dataFrom);
  if (!dataApiServiceName) return;

  const apiKey = `${request.url}:${request.method}:${request.actionName}`;
  const timestamp = Date.now();
  apiCallTimestamps.set(apiKey, timestamp);

  const recordKey = ctx.recordId !== undefined ? ctx.recordId : ctx.recordKey;

  const metadata = new DataFieldMetadata(
    pathString,
    recordKey,
    request.url,
    request.method,
    request.actionName,
    mappingKey.split('.').pop(),
    dataApiServiceName,
    dataFrom
  );

  const registerMetadata = (value, isPartOfList = false) => {
    const existing = valueIndex.get(value) || [];

    if (existing.length >= MAX_ENTRIES_PER_VALUE) {
      existing.shift();
    }

    existing.push(metadata);
    valueIndex.set(value, existing);
    sortedMetadataCache.delete(value);

    if (isPartOfList) {
      debugLog('registerValue: indexed split part', {
        part: value.slice(0, 120),
        originalValue: normalized.slice(0, 120),
        path: metadata.path,
        dataFrom,
      });
    }
  };

  registerMetadata(normalized);

  // 处理 | 分隔的列表值
  if (normalized.includes('|')) {
    const parts = normalized.split('|').map(part => part.trim()).filter(Boolean);
    const looksLikeUrlList = parts.some(part =>
      part.startsWith('http://') || part.startsWith('https://')
    );

    if (looksLikeUrlList || (parts.length >= 2 && parts.length <= 10)) {
      parts.forEach(part => {
        const partNormalized = normalizeValue(part);
        if (partNormalized && partNormalized.length >= 2) {
          registerMetadata(partNormalized, true);
        }
      });
    }
  }

  if (valueIndex.size > MAX_INDEX_SIZE) {
    cleanupIndex();
  }

  debugLog('registerValue: indexed value', {
    value: normalized.slice(0, 120),
    path: metadata.path,
    dataFrom,
    serviceName: dataApiServiceName,
    recordKey: metadata.recordKey,
  });
}

/**
 * 从 fieldMapping 中查找当前对象的主键字段值。
 * data-from 格式: table-column-pk_column
 * 当 column === pk_column 时，该字段就是主键。
 * 例如 mapping "list.venue_id" -> "venue-id-id"，column=id, pk=id，
 * 说明 venue_id 字段存储的是主键值。
 */
function findPrimaryKeyFromMapping(obj, currentPath, fieldMapping) {
  if (!fieldMapping || typeof obj !== 'object' || obj === null) return undefined;
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val !== 'string' && typeof val !== 'number') continue;
    const candidatePath = [...currentPath, key].filter(s => !s.startsWith('[')).join('.');
    const dataFrom = fieldMapping[candidatePath];
    if (!dataFrom) continue;
    const parts = dataFrom.split('-');
    // parts: [table, column, pk_column]
    if (parts.length >= 3 && parts[1] === parts[2]) {
      return val;
    }
  }
  return undefined;
}

function traverseData(value, ctx, request, fieldMapping, seen) {
  if (value === null || value === undefined) {
    return;
  }

  const valueType = typeof value;

  if (valueType === 'string' || valueType === 'number' || valueType === 'boolean') {
    registerValue(value, ctx, request, fieldMapping);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      let itemRecordId = ctx.recordId;
      if (item && typeof item === 'object') {
        if ('id' in item) {
          itemRecordId = item.id;
        } else {
          // 回退：通过 fieldMapping 查找主键字段
          const pkFromMapping = findPrimaryKeyFromMapping(
            item,
            [...ctx.path, `[${index}]`],
            fieldMapping
          );
          if (pkFromMapping !== undefined) {
            itemRecordId = pkFromMapping;
          }
        }
      }

      traverseData(
        item,
        {
          path: [...ctx.path, `[${index}]`],
          recordKey: ctx.recordKey,
          recordId: itemRecordId,
        },
        request,
        fieldMapping,
        seen
      );
    });
    return;
  }

  if (valueType === 'object') {
    const objectValue = value;

    if (seen.has(objectValue)) {
      return;
    }
    seen.add(objectValue);

    // 优先用 id，其次用 fieldMapping 推断主键
    let currentRecordId;
    let potentialKey;

    if (typeof objectValue.id === 'string' || typeof objectValue.id === 'number') {
      currentRecordId = objectValue.id;
      potentialKey = objectValue.id;
    } else {
      const pkFromMapping = findPrimaryKeyFromMapping(objectValue, ctx.path, fieldMapping);
      if (pkFromMapping !== undefined) {
        currentRecordId = pkFromMapping;
        potentialKey = pkFromMapping;
      } else {
        currentRecordId = ctx.recordId;
        potentialKey = (typeof objectValue.key === 'string' || typeof objectValue.key === 'number')
          ? objectValue.key
          : undefined;
      }
    }

    Object.entries(objectValue).forEach(([key, childValue]) => {
      let nextRecordId = currentRecordId;
      if (childValue && typeof childValue === 'object' && !Array.isArray(childValue)) {
        if ('id' in childValue) {
          nextRecordId = childValue.id;
        } else {
          const childPk = findPrimaryKeyFromMapping(childValue, [...ctx.path, key], fieldMapping);
          if (childPk !== undefined) {
            nextRecordId = childPk;
          }
        }
      }

      traverseData(
        childValue,
        {
          path: [...ctx.path, key],
          recordKey: potentialKey ?? ctx.recordKey,
          recordId: nextRecordId,
        },
        request,
        fieldMapping,
        seen
      );
    });
  }
}

async function processApiResponse(payload, request) {
  if (payload === null || payload === undefined) return;

  // 确保映射已加载
  await loadDataFromMapping();
  
  const fieldMapping = getFieldMapping(request.actionName);
  if (!fieldMapping) {
    debugLog('processApiResponse: no field mapping for action', {
      actionName: request.actionName,
    });
    return;
  }

  const seen = new WeakSet();

  // 如果响应被包裹在 json 对象中，解包它
  // 响应格式可能是 { json: { ... }, meta: {...} } 或直接 { ... }
  let actualPayload = payload;
  if (payload && typeof payload === 'object' && 'json' in payload) {
    actualPayload = payload.json;
    debugLog('processApiResponse: unwrapped json wrapper', {
      actionName: request.actionName,
    });
  }

  debugLog('processApiResponse: payload received', {
    url: request.url,
    method: request.method,
    actionName: request.actionName,
    fieldCount: Object.keys(fieldMapping).length,
  });

  traverseData(
    actualPayload,
    {
      path: [],
      recordId: undefined,
    },
    request,
    fieldMapping,
    seen
  );

  scheduleAnnotation();
}

// ===== 元数据匹配与评分 =====

function getApiTimestamp(metadata) {
  const apiKey = `${metadata.url}:${metadata.method}:${metadata.actionName}`;
  return apiCallTimestamps.get(apiKey) || 0;
}

function calculateMatchScore(metadata) {
  let score = 0;

  const pathDepth = metadata.path.split('.').length;
  score += pathDepth * 100;

  // 优先选用有 recordKey 的条目（防止重复加载脚本导致的无 key 条目胜出）
  if (metadata.recordKey !== undefined) {
    score += 10000;
  }

  const timestamp = getApiTimestamp(metadata);
  if (timestamp > 0) {
    const timeDiff = Date.now() - timestamp;
    if (timeDiff < 5 * 60 * 1000) {
      score += Math.max(0, 500 - timeDiff / 1000);
    }
  }
  return score;
}

function getMetadataForValue(value) {
  const candidates = valueIndex.get(value);
  if (!candidates || candidates.length === 0) return null;

  if (candidates.length === 1) {
    return candidates[0];
  }

  let sorted = sortedMetadataCache.get(value);
  if (!sorted) {
    sorted = [...candidates].sort((a, b) => {
      const scoreA = calculateMatchScore(a);
      const scoreB = calculateMatchScore(b);

      if (scoreB !== scoreA) {
        return scoreB - scoreA;
      }

      const aDetail = a.path.split('.').length;
      const bDetail = b.path.split('.').length;
      return bDetail - aDetail;
    });

    sortedMetadataCache.set(value, sorted);
  }

  return sorted[0];
}

// ===== DOM 标记 =====

function applyMetadataToElement(el, metadata) {
  const existingServiceName = el.getAttribute(API_SERVICE_NAME_ATTR);
  const parentKey = el.getAttribute(API_PARENT_KEY_ATTR);
  const recordKey = metadata.recordKey !== undefined ? metadata.recordKey : parentKey;
  // 已有完整的 service-name + key，跳过
  if (isCurrentServiceName(existingServiceName) && el.hasAttribute(API_KEY_ATTR)) {
    return;
  }
  // 已有 service-name 但没有 key，且新 metadata 也没有 key，跳过
  if (isCurrentServiceName(existingServiceName) && recordKey === undefined) {
    return;
  }

  clearLegacyAttributes(el);

  if (metadata.dataApiServiceName && metadata.dataApiServiceName.trim() !== '') {
    el.setAttribute(API_SERVICE_NAME_ATTR, metadata.dataApiServiceName);
    if (recordKey !== undefined) {
      el.setAttribute(API_KEY_ATTR, String(recordKey));
      el.removeAttribute(API_PARENT_KEY_ATTR);
    }

    debugLog('applyMetadataToElement: element tagged', {
      tagName: el.tagName,
      text: el.textContent ? el.textContent.slice(0, 80) : undefined,
      serviceName: metadata.dataApiServiceName,
      dataFrom: metadata.dataFrom,
      recordKey,
    });
  } else {
    el.setAttribute('data-api-exclude-tracking', 'false');
    debugLog('applyMetadataToElement: no valid service name, marked as excluded', {
      tagName: el.tagName,
      text: el.textContent ? el.textContent.slice(0, 80) : undefined,
    });
  }
}

function annotateTextElement(el) {
  if (el.children.length > 0) return;

  const textContent = el.textContent?.trim();
  if (!textContent) return;
  if (textContent.length < 2) return;

  const metadata = getMetadataForValue(textContent);
  if (!metadata) {
    debugLog('annotateTextElement: no metadata match', {
      text: textContent.slice(0, 120),
      tagName: el.tagName,
    });
    return;
  }

  applyMetadataToElement(el, metadata);
}

function annotateImageElement(el) {
  if (!(el instanceof HTMLImageElement)) return;

  if (el.getAttribute('data-api-exclude-tracking') === 'true') {
    debugLog('annotateImageElement: already excluded from tracking', {
      src: el.currentSrc || el.getAttribute('src') || ''
    });
    return;
  }

  if (hasCurrentMarker(el) && el.hasAttribute(API_KEY_ATTR)) {
    debugLog('annotateImageElement: already fully tagged', {
      serviceName: el.getAttribute(API_SERVICE_NAME_ATTR)
    });
    return;
  }

  const src = el.currentSrc || el.getAttribute('src') || '';
  const normalized = normalizeValue(src);

  if (!normalized) {
    el.setAttribute('data-api-exclude-tracking', 'false');
    debugLog('annotateImageElement: invalid src, marked as excluded', { src });
    return;
  }

  const metadata = getMetadataForValue(normalized);

  if (metadata) {
    applyMetadataToElement(el, metadata);
    debugLog('annotateImageElement: exact match found, tagged', {
      src: normalized.slice(0, 120),
      serviceName: metadata.dataApiServiceName,
      path: metadata.path,
    });
  } else {
    el.setAttribute('data-api-exclude-tracking', 'false');
    debugLog('annotateImageElement: no match found, marked as excluded', {
      src: normalized.slice(0, 120)
    });
  }
}

function annotateElement(el) {
  clearLegacyAttributes(el);

  // 只有同时有 service-name 和 key 才算完整标注
  if (hasCurrentMarker(el) && el.hasAttribute(API_KEY_ATTR)) {
    debugLog('annotateElement: already fully tagged (service + key)', {
      tagName: el.tagName,
    });
    return;
  }
  // 有 service-name 但缺 key 仍然尝试补标注
  if (hasCurrentMarker(el)) {
    debugLog('annotateElement: has service-name but missing key, retrying', {
      tagName: el.tagName,
    });
  }
  annotateImageElement(el);
  annotateTextElement(el);
}

// ===== DOM 遍历与批处理 =====

const BATCH_SIZE = 50;
const BATCH_DELAY_MS = 0;

function walkAndAnnotate(root) {
  const treeWalker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node) => {
        if (!(node instanceof HTMLElement)) return NodeFilter.FILTER_REJECT;
        // 只有同时有 service-name 和 key 才跳过
        return (hasCurrentMarker(node) && node.hasAttribute(API_KEY_ATTR)) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
      },
    },
  );

  function processBatch() {
    let processed = 0;
    let current = treeWalker.currentNode;

    if (!current || current === root) {
      current = treeWalker.nextNode();
    }

    while (current && processed < BATCH_SIZE) {
      annotateElement(current);
      current = treeWalker.nextNode();
      processed++;
    }

    if (current) {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(processBatch, { timeout: 1000 });
      } else {
        setTimeout(processBatch, BATCH_DELAY_MS);
      }
    }
  }

  processBatch();
}

function annotateFromMutation(mutation) {
  if (mutation.type === 'childList') {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        annotateElement(node);
        walkAndAnnotate(node);
        debugLog('annotateFromMutation: HTMLElement added', {
          tagName: node.tagName,
          id: node.id,
          className: node.className,
        });
      } else if (node instanceof Text && node.parentElement) {
        annotateElement(node.parentElement);
        debugLog('annotateFromMutation: Text node added', {
          parentTag: node.parentElement.tagName,
        });
      }
    });
  } else if (mutation.type === 'characterData') {
    const parent = mutation.target.parentElement;
    if (parent) {
      annotateElement(parent);
      debugLog('annotateFromMutation: characterData changed', {
        parentTag: parent.tagName,
        snippet: parent.textContent ? parent.textContent.slice(0, 80) : '',
      });
    }
  } else if (mutation.type === 'attributes' && mutation.target instanceof HTMLElement) {
    annotateElement(mutation.target);
    debugLog('annotateFromMutation: attribute changed', {
      tagName: mutation.target.tagName,
      attributeName: mutation.attributeName,
    });
  }
}

let mutationBatchTimer = null;
const MUTATION_BATCH_DELAY_MS = 150;
const pendingMutations = [];

function observeDomForChanges() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  debugLog('observeDomForChanges: MutationObserver attached');

  const observer = new MutationObserver((mutations) => {
    pendingMutations.push(...mutations);

    if (mutationBatchTimer) {
      clearTimeout(mutationBatchTimer);
    }

    mutationBatchTimer = setTimeout(() => {
      const uniqueTargets = new Set();
      pendingMutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement || (node instanceof Text && node.parentElement)) {
              uniqueTargets.add(node instanceof HTMLElement ? node : node.parentElement);
            }
          });
        } else if (mutation.target instanceof HTMLElement) {
          uniqueTargets.add(mutation.target);
        }
      });

      pendingMutations.forEach((mutation) => annotateFromMutation(mutation));
      pendingMutations.length = 0;
      mutationBatchTimer = null;

      scheduleAnnotation();
    }, MUTATION_BATCH_DELAY_MS);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['src', 'href', 'value', 'text', 'content'],
  });

  document.addEventListener('DOMContentLoaded', () => {
    scheduleAnnotation();
  });
}

const ANNOTATION_DEBOUNCE_MS = 100;

function scheduleAnnotation() {
  if (annotationTimer) {
    clearTimeout(annotationTimer);
    annotationTimer = null;
  }

  if (annotationScheduled) return;

  annotationScheduled = true;
  debugLog('scheduleAnnotation: queued microtask');

  annotationTimer = setTimeout(() => {
    annotationScheduled = false;
    annotationTimer = null;

    if (typeof document !== 'undefined' && document.body) {
      walkAndAnnotate(document.body);
      debugLog('scheduleAnnotation: running annotation sweep');
    }
  }, ANNOTATION_DEBOUNCE_MS);
}

// ===== 请求解析 =====

function parseRequestBody(body) {
  if (!body) return null;

  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }

  if (body instanceof URLSearchParams) {
    return Object.fromEntries(body.entries());
  }

  if (body instanceof FormData) {
    const params = {};
    body.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }

  return null;
}

// 检测是否是 RPC/Server Action 请求
function isRpcRequest(url) {
  return RPC_PATH_PATTERN.test(url);
}

// 从 actionName 解析页面名和函数名
// actionName 格式: src.actions.PageName.functionName
function parseActionName(actionName) {
  if (!actionName || typeof actionName !== 'string') {
    return { pageName: null, funcName: null };
  }
  
  const parts = actionName.split('.');
  if (parts.length < 4) {
    return { pageName: null, funcName: null };
  }
  
  // src.actions.PageName.functionName
  const funcName = parts[parts.length - 1];
  const pageName = parts[parts.length - 2];
  
  return { pageName, funcName };
}

function extractRequestContext(input, init) {
  let url;
  let method;

  if (input instanceof Request) {
    url = input.url;
    method = (input.method || init?.method || 'GET').toUpperCase();
  } else {
    url = typeof input === 'string' ? input : input.toString();
    method = init?.method ? init.method.toUpperCase() : 'GET';
  }

  const bodyPayload = parseRequestBody(init?.body ?? null);

  // 检测是否是 RPC 请求
  if (isRpcRequest(url) && bodyPayload) {
    const actionName = bodyPayload.actionName;
    const { pageName, funcName } = parseActionName(actionName);
    
    return new RequestContext(
      url,
      method,
      actionName,
      pageName,
      funcName
    );
  }

  return new RequestContext(url, method, null, null, null);
}

// ===== Fetch 包装 =====

function wrapFetch() {
  if (typeof window === 'undefined' || typeof window.fetch !== 'function') return;

  debugLog('wrapFetch: overriding global fetch');

  const originalFetch = window.fetch.bind(window);
  originalFetchRef = originalFetch;

  window.fetch = async (input, init) => {
    const requestContext = extractRequestContext(input, init);

    // 只处理有 actionName 的 RPC 请求
    if (!requestContext.actionName) {
      return originalFetch(input, init);
    }

    debugLog('fetch: RPC request started', {
      url: requestContext.url,
      method: requestContext.method,
      actionName: requestContext.actionName,
      pageName: requestContext.pageName,
      funcName: requestContext.funcName,
    });

    try {
      const response = await originalFetch(input, init);

      try {
        const cloned = response.clone();
        cloned
          .json()
          .then((payload) => {
            processApiResponse(payload, requestContext);
          })
          .catch(() => {
            debugLog('fetch: response not JSON', {
              url: requestContext.url,
              method: requestContext.method,
            });
          });
      } catch (cloneError) {
        console.warn('[api-data-marker-v3] Failed to inspect response', cloneError);
        debugLog('fetch: failed to clone response', {
          url: requestContext.url,
          error: cloneError,
        });
      }

      return response;
    } catch (fetchError) {
      debugLog('fetch: request threw error', {
        url: requestContext.url,
        error: fetchError,
      });
      throw fetchError;
    }
  };

  window.__API_DATA_MARKER_FETCH_WRAPPED__ = true;
  window.__API_DATA_MARKER_ORIGINAL_FETCH__ = originalFetch;
}

// ===== 全局 API =====

function cloneMetadata(metadata) {
  return { ...metadata };
}

function getIndexSnapshot() {
  return Array.from(valueIndex.entries()).map(([value, entries]) => ({
    value,
    entries: entries.map((entry) => cloneMetadata(entry)),
  }));
}

function clearSortCache() {
  sortedMetadataCache.clear();
  debugLog('clearSortCache: cleared sorted metadata cache');
}

function installGlobalIntrospection() {
  if (typeof window === 'undefined') return;

  const api = {
    version: 'v3',
    isActive: () => true,
    isDebugEnabled: () => debugEnabled,
    enableDebug: () => {
      window.toggleApiDataMarkerDebug?.(true);
    },
    disableDebug: () => {
      window.toggleApiDataMarkerDebug?.(false);
    },
    getIndexSnapshot: () => getIndexSnapshot(),
    getEntriesForValue: (value) => {
      const entries = valueIndex.get(value);
      return entries ? entries.map((entry) => cloneMetadata(entry)) : [];
    },
    clearSortCache: () => {
      clearSortCache();
    },
    getIndexStats: () => {
      let totalEntries = 0;
      valueIndex.forEach((entries) => {
        totalEntries += entries.length;
      });
      return {
        totalValues: valueIndex.size,
        totalEntries,
        cacheSize: sortedMetadataCache.size,
      };
    },
    // 获取已加载的 data-from 映射
    getDataFromMapping: () => dataFromMapping,
    // 重新加载映射
    reloadMapping: async () => {
      dataFromMapping = null;
      mappingLoadPromise = null;
      return loadDataFromMapping();
    },
  };

  window.__API_DATA_MARKER_ACTIVE__ = true;
  window.__API_DATA_MARKER_VERSION__ = 'v3';
  window.apiDataMarker = api;

  if (!window.toggleApiDataMarkerDebug) {
    window.toggleApiDataMarkerDebug = (enabled) => {
      try {
        if (enabled) {
          window.localStorage?.setItem(DEBUG_LOCAL_STORAGE_KEY, '1');
        } else {
          window.localStorage?.removeItem(DEBUG_LOCAL_STORAGE_KEY);
        }
      } catch (error) {
        console.warn('[api-data-marker-v3] Failed to toggle debug flag', error);
      }
      debugEnabled = resolveDebugEnabled();
      debugLog('toggleApiDataMarkerDebug: debug flag updated', { debugEnabled });
    };
  }
}

// ===== 启动 =====

function bootstrap() {
  // 防止重复初始化（脚本可能被多次加载）
  if (window.__API_DATA_MARKER_BOOTSTRAPPED__) {
    return;
  }
  window.__API_DATA_MARKER_BOOTSTRAPPED__ = true;

  debugEnabled = resolveDebugEnabled();
  debugLog('bootstrap: starting runtime v3 (server action mode)', { debugEnabled });

  // 预加载映射文件
  loadDataFromMapping();

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
      if (event.key === DEBUG_LOCAL_STORAGE_KEY) {
        debugEnabled = resolveDebugEnabled();
        debugLog('storage event: debug flag changed', { debugEnabled });
      }
    });

    let lastPathname = window.location.pathname;
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      const newPathname = window.location.pathname;
      if (newPathname !== lastPathname) {
        lastPathname = newPathname;
        clearSortCache();
        debugLog('bootstrap: pathname changed, cleared cache', { newPathname });
      }
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      const newPathname = window.location.pathname;
      if (newPathname !== lastPathname) {
        lastPathname = newPathname;
        clearSortCache();
        debugLog('bootstrap: pathname changed, cleared cache', { newPathname });
      }
    };

    window.addEventListener('popstate', () => {
      const newPathname = window.location.pathname;
      if (newPathname !== lastPathname) {
        lastPathname = newPathname;
        clearSortCache();
        debugLog('bootstrap: pathname changed via popstate, cleared cache', { newPathname });
      }
    });
  }

  wrapFetch();
  installGlobalIntrospection();
  observeDomForChanges();
  scheduleAnnotation();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
  } else {
    bootstrap();
  }
}
