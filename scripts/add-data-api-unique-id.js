#!/usr/bin/env node
/**
 * Adds `data-api-unique-id` attributes to all JSX elements inside .tsx files.
 * Supports both single file and directory input.
 *
 * Usage:
 *   - Single file: node scripts/add-data-api-unique-id.js <file.tsx>
 *   - Directory:   node scripts/add-data-api-unique-id.js <target-directory>
 *   - Multiple:    node scripts/add-data-api-unique-id.js <path1>,<path2>,...
 */
const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const crypto = require('node:crypto');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const UNIQUE_ATTR_NAME = 'data-api-unique-id';
const PAGE_ATTR_NAME = 'data-api-unique-page-name';
const IN_LOOP_ATTR_NAME = 'data-api-in-loop';

function toSafeBase(name) {
  const safeBase = name.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
  return safeBase || 'component';
}

function exitWithError(message) {
  console.error(message);
  process.exit(1);
}

function parseTsx(code, filename) {
  return parser.parse(code, {
    sourceType: 'module',
    sourceFilename: filename,
    plugins: ['typescript', 'jsx'],
  });
}

function getElementName(node) {
  if (t.isJSXIdentifier(node)) {
    return node.name;
  }
  if (t.isJSXMemberExpression(node)) {
    const objectName = getElementName(node.object);
    const propertyName = getElementName(node.property);
    if (objectName && propertyName) {
      return `${objectName}.${propertyName}`;
    }
    return propertyName || objectName || null;
  }
  if (t.isJSXNamespacedName(node)) {
    return `${node.namespace.name}:${node.name.name}`;
  }
  return null;
}

function shouldSkipElementName(name) {
  if (!name) return true;
  if (name === 'React.Fragment' || name === 'Fragment') return true;
  return false;
}

/**
 * 仅在属性不存在时插入字符串属性；**不覆盖已有属性**。
 * 返回 true 表示实际插入了属性；false 表示未插入（属性已存在）。
 */
function addStringAttributeIfMissing(node, attrName, value) {
  const existingIndex = node.attributes.findIndex(
    (attr) =>
      t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name) && attr.name.name === attrName
  );
  if (existingIndex !== -1) {
    // 已存在：不进行覆盖或修改
    return false;
  }
  const attribute = t.jsxAttribute(t.jsxIdentifier(attrName), t.stringLiteral(value));
  const spreadIndex = node.attributes.findIndex((attr) => t.isJSXSpreadAttribute(attr));
  if (spreadIndex === -1) {
    node.attributes.push(attribute);
  } else {
    node.attributes.splice(spreadIndex, 0, attribute);
  }
  return true;
}

/**
 * 创建 id 生成器（基于文件 path）
 * 生成格式： <safeBase>-r<randomHex>-s<stableNumber>
 *
 * - stableNumber: 基于文件路径的确定性哈希（十进制），在同一文件路径上不会变
 * - randomHex: 每次调用都会生成短的随机 hex，以避免使用行列号
 *
 * 同一调用位置如果发生重复（极少），会追加 -<count> 做为后缀（保证唯一）。
 */
function createIdGenerator(filePath, baseName) {
  const safeBase = toSafeBase(baseName);

  // 生成一个稳定的数值（不会随行号变化），基于文件路径
  const hash = crypto.createHash('md5').update(path.resolve(filePath)).digest('hex');
  // 取前 8 字节 hex，并转为十进制（足够稳定且长度合理）
  const stableNumber = parseInt(hash.slice(0, 8), 16);

  const locationCounts = new Map();
  let fallbackCounter = 0;

  return (elementName) => {
    // 随机段：使用 8 字节随机 hex
    const randomHex = crypto.randomBytes(8).toString('hex');

    // 基本 id
    let idBase = `${safeBase}-r${randomHex}-s${stableNumber}`;

    // 若同一 base 被反复生成（极小概率），使用计数后缀确保唯一
    const nextCount = (locationCounts.get(idBase) || 0) + 1;
    locationCounts.set(idBase, nextCount);
    if (nextCount > 1) {
      idBase = `${idBase}-${nextCount}`;
    }

    return idBase;
  };
}

/**
 * 检查给定的路径是否在 .map() 调用的回调函数内
 */
function isInsideMapCallback(pathNode) {
  let current = pathNode;
  
  while (current) {
    const parent = current.parentPath;
    if (!parent) break;
    
    // 检查父节点是否是 CallExpression
    if (parent.isCallExpression()) {
      const callee = parent.node.callee;
      
      // 检查是否是 .map() 调用
      if (t.isMemberExpression(callee) && 
          t.isIdentifier(callee.property) && 
          callee.property.name === 'map') {
        
        // 检查当前节点是否在 .map() 的回调函数参数中
        const args = parent.node.arguments;
        if (args.length > 0) {
          const callback = args[0];
          
          // 检查回调是箭头函数或普通函数
          if ((t.isArrowFunctionExpression(callback) || t.isFunctionExpression(callback))) {
            // 检查当前路径是否在这个回调函数内
            let checkPath = pathNode;
            while (checkPath && checkPath !== parent) {
              if (checkPath.node === callback) {
                return true;
              }
              checkPath = checkPath.parentPath;
            }
          }
        }
      }
    }
    
    current = parent;
  }
  
  return false;
}

function addUniqueIdsToFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  let ast;

  try {
    ast = parseTsx(source, filePath);
  } catch (parseError) {
    throw new Error(`Failed to parse ${filePath}: ${parseError.message}`);
  }

  let added = 0;
  const baseName = path.basename(filePath, path.extname(filePath));

  // 生成相对于项目根目录的相对路径作为 pageName
  // 项目根目录是 aigcode-demo，脚本的执行位置也是项目根目录
  const relativePath = path.relative(process.cwd(), filePath)
    .replace(/\\/g, '/') // 统一使用正斜杠
    .replace(/\.(tsx?|jsx?)$/, ''); // 移除文件扩展名

  const pageName = relativePath;

  // id 生成器基于文件路径和文件名（用于 stable 部分）
  const generateId = createIdGenerator(filePath, baseName);

  traverse(ast, {
    JSXOpeningElement(pathNode) {
      const { node } = pathNode;
      const elementName = getElementName(node.name);
      if (shouldSkipElementName(elementName)) {
        return;
      }

      // 如果元素已经存在 data-api-unique-id，则**不**覆盖（跳过生成）
      const hasUniqueAttr = node.attributes.some(
        (attr) =>
          t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name) && attr.name.name === UNIQUE_ATTR_NAME
      );

      // 生成 id 仅当需要添加时
      let nextId = null;
      if (!hasUniqueAttr) {
        nextId = generateId(elementName);
        const attribute = t.jsxAttribute(t.jsxIdentifier(UNIQUE_ATTR_NAME), t.stringLiteral(nextId));
        const spreadIndex = node.attributes.findIndex((attr) => t.isJSXSpreadAttribute(attr));
        if (spreadIndex === -1) {
          node.attributes.push(attribute);
        } else {
          node.attributes.splice(spreadIndex, 0, attribute);
        }
        added += 1;
      }

      // data-api-unique-page-name：仅在不存在时添加（不覆盖已有值）
      if (addStringAttributeIfMissing(node, PAGE_ATTR_NAME, pageName)) {
        added += 1;
      }

      // 如果在 map() 回调中，添加 data-api-in-loop="1"（仅在不存在时添加）
      const isInLoop = isInsideMapCallback(pathNode);
      if (isInLoop) {
        if (addStringAttributeIfMissing(node, IN_LOOP_ATTR_NAME, '1')) {
          added += 1;
        }
      }
    },
  });

  if (added === 0) {
    return { modified: false, content: source };
  }

  const { code } = generate(ast, { 
    retainLines: false,
    jsescOption: { quotes: 'double', minimal: true }
  }, source);
  return { modified: true, content: code };
}

function processDirectory(resolvedDir) {
  const entries = fs.readdirSync(resolvedDir, { withFileTypes: true });
  const tsxFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.tsx'))
    .map((entry) => path.join(resolvedDir, entry.name));

  if (tsxFiles.length === 0) {
    console.log(`No .tsx files found in ${resolvedDir}`);
    return;
  }

  tsxFiles.forEach((file) => {
    try {
      const result = addUniqueIdsToFile(file);
      if (result.modified) {
        // 验证生成的代码是否可以被解析
        try {
          parseTsx(result.content, file);
          fs.writeFileSync(file, result.content);
          console.log(`Updated ${file}`);
        } catch (validateError) {
          console.error(`Generated invalid code for ${file}, skipping write:`, validateError.message);
        }
      } else {
        console.log(`Skipped ${file} (no changes needed)`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

/**
 * 处理单个文件
 * @param {string} filePath - 文件的绝对路径
 */
function processSingleFile(filePath) {
  // 检查是否为 .tsx 文件
  if (!filePath.endsWith('.tsx')) {
    console.log(`Skipped ${filePath} (not a .tsx file)`);
    return;
  }

  try {
    const result = addUniqueIdsToFile(filePath);
    if (result.modified) {
      // 验证生成的代码是否可以被解析
      try {
        parseTsx(result.content, filePath);
        fs.writeFileSync(filePath, result.content);
        console.log(`Updated ${filePath}`);
        } catch (validateError) {
          console.error(`Generated invalid code for ${filePath}, skipping write:`, validateError.message);
          process.exitCode = 1;
        }
    } else {
      console.log(`Skipped ${filePath} (no changes needed)`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    process.exitCode = 1;
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    exitWithError('Please provide target file or directory paths (comma-separated or space-separated).');
  }

  const rawTargets = args
    .join(',')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (rawTargets.length === 0) {
    exitWithError('No valid paths provided.');
  }

  rawTargets.forEach((targetPath) => {
    const resolvedPath = path.isAbsolute(targetPath)
      ? targetPath
      : path.resolve(process.cwd(), targetPath);

    // 检查路径是否存在，不存在则跳过
    if (!fs.existsSync(resolvedPath)) {
      console.warn(`Path not found, skipping: ${resolvedPath}`);
      return;
    }

    const stat = fs.statSync(resolvedPath);

    if (stat.isFile()) {
      // 单文件处理
      processSingleFile(resolvedPath);
    } else if (stat.isDirectory()) {
      // 目录处理（保持原有行为）
      processDirectoryRecursive(resolvedPath);
    } else {
      exitWithError(`Invalid path type: ${resolvedPath}`);
    }
  });
}

/**
 * 递归遍历目录，并排除 ui/
 */
function processDirectoryRecursive(dir) {
  const dirName = path.basename(dir);

  // 排除 ui 文件夹
  if (dirName === 'ui') return;

  // ⭐ 调用你原来的目录处理逻辑
  processDirectory(dir);

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectoryRecursive(fullPath);
    }
  }
}

main();
