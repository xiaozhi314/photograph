import * as path from 'path';
import * as fs from 'fs';
import * as lockfile from 'proper-lockfile';

// ─── Types ───────────────────────────────────────────────────────────

export interface EntryGeneratorOptions {
  projectId: string;
  outDir: string;
  /** 项目根目录（用于计算 moduleName） */
  projectRoot: string;
  /** 文件锁路径 */
  lockFile?: string;
}

export interface EntryGeneratorResult {
  success: boolean;
  outputFile: string;
  /** 包含的 action 文件列表 */
  actionFiles: string[];
  errors?: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────

/**
 * Scan the outDir for action .js files, excluding special files:
 * - _common.js
 * - PROJ_*.js (entry files)
 * - .lock files
 * - _common_entry.ts (temp file)
 */
export function scanActionFiles(absOutDir: string): string[] {
  if (!fs.existsSync(absOutDir)) {
    return [];
  }

  return fs.readdirSync(absOutDir).filter((file) => {
    // Must be a .js file
    if (!file.endsWith('.js')) return false;
    // Exclude _common.js
    if (file === '_common.js') return false;
    // Exclude PROJ_*.js entry files
    if (file.startsWith('PROJ_')) return false;
    // Exclude .lock files (shouldn't match .js but be safe)
    if (file.endsWith('.lock')) return false;
    return true;
  }).sort();
}

/**
 * Extract moduleName from an action filename.
 * e.g. "src.backend.actions.Register.js" → "src.backend.actions.Register"
 */
export function extractModuleName(filename: string): string {
  return filename.replace(/\.js$/, '');
}

/**
 * Generate the content of PROJ_{projectId}.js entry file.
 */
function generateEntryContent(
  projectId: string,
  actionFiles: string[],
): string {
  const moduleNames = actionFiles.map(extractModuleName);

  // Build the registry object entries
  const registryEntries = moduleNames
    .map((mod) => `  '${mod}': require('./${mod}'),`)
    .join('\n');

  return `// PROJ_${projectId}.js (generated)
const express = require('express');
const common = require('./_common');
const { UnauthorizedError, ForbiddenError, runWithAuth: baseRunWithAuth } = common.BaseActionFun;
const serializer = common.serializer;

const router = express.Router();
const actions = new Map();

// Dynamic require for each action
const registry = {
${registryEntries}
};

// Register actions
for (const [moduleName, mod] of Object.entries(registry)) {
  if (typeof mod.registerProjectRoutes === 'function') {
    mod.registerProjectRoutes(router);
  }
  for (const [fnName, fn] of Object.entries(mod)) {
    if (fnName !== 'registerProjectRoutes' && typeof fn === 'function') {
      actions.set(\`\${moduleName}.\${fnName}\`, fn);
    }
  }
}

// Auth module selection
// 注意：app/(backend)/ 目录下的 action 生成的 actionName 格式为 "app.backend.xxx"，
// 必须优先匹配 .backend.，否则会被 startsWith('app.') 错误路由到 appAuth
function getAuthModule(actionName) {
  if (actionName.includes('.frontend.') || actionName.startsWith('frontend.')) return common.frontendAuth;
  if (actionName.includes('.backend.') || actionName.startsWith('backend.')) return common.backendAuth;
  if (actionName.includes('.app.') || actionName.startsWith('app.')) return common.appAuth;
  return common.backendAuth;
}

async function continueActionWithAuth(actionName, authContext, callback) {
  const authModule = getAuthModule(actionName);
  const runWithAuth = authModule.runWithAuth || baseRunWithAuth;
  return runWithAuth(authContext, callback);
}

async function runActionWithAuth(req, actionName, fn, args, extraArgs = [], requireAuthenticated = false) {
  const authModule = getAuthModule(actionName);
  const { parseToken } = authModule;
  const token = req.headers.authorization?.replace('Bearer ', '');
  const authContext = token ? await parseToken(token) : null;
  if (requireAuthenticated && !authContext) throw new UnauthorizedError();
  const result = await continueActionWithAuth(
    actionName,
    authContext,
    () => fn(...(serializer.deserialize(args)), ...extraArgs),
  );
  return { result, authContext };
}

function aiMarker(fn) { return fn?.__webcreatorAI; }
function validateAIAction(fn, delivery) {
  const marker = aiMarker(fn);
  const outputByCapability = {
    'ai.text.generate': 'text', 'ai.chat': 'text',
    'ai.text.structured': 'structured', 'ai.image.generate': 'image',
  };
  const expectedOutput = outputByCapability[marker?.capability];
  if (marker?.version !== 1 || marker?.family !== 'ai'
    || marker?.delivery !== delivery || !expectedOutput
    || marker.output !== expectedOutput
    || !['public', 'authenticated'].includes(marker.access)
    || (expectedOutput === 'image' && delivery !== 'sync')) {
    throw Object.assign(new Error('Invalid AI action transport contract'), {
      aiCode: 'AI_DELIVERY_MISMATCH',
    });
  }
  return marker;
}
function aiErrorPayload(error, code = 'AI_INTERNAL') {
  const invalidOutput = error?.name === 'AI_NoObjectGeneratedError';
  if (invalidOutput && code === 'AI_INTERNAL') code = 'AI_INVALID_OUTPUT';
  return {
    code: code !== 'AI_INTERNAL'
      ? code
      : error?.name === 'AbortError'
        ? 'AI_ABORTED'
        : code,
    message: code === 'AI_INVALID_OUTPUT' ? 'AI response did not match the required output format' : error?.message || 'AI action failed',
    retryable: code.includes('TIMEOUT') || code === 'AI_GATEWAY_ERROR',
  };
}
function writeAIEvent(res, event, payload) {
  res.write('event: ' + event + '\\ndata: ' + JSON.stringify(serializer.serialize(payload)) + '\\n\\n');
}

router.post('/ai/sync', async (req, res) => {
  const abortController = new AbortController();
  const abort = () => abortController.abort(req.signal?.reason);
  req.signal?.addEventListener('abort', abort, { once: true });
  res.on?.('close', () => {
    if (!res.writableEnded) abort();
  });
  try {
    const { actionName, args } = req.body;
    const fn = actions.get(actionName);
    if (!fn) return res.status(404).json(aiErrorPayload(null, 'AI_ACTION_NOT_FOUND'));
    let marker;
    try { marker = validateAIAction(fn, 'sync'); }
    catch (error) { return res.status(400).json(aiErrorPayload(error, error.aiCode)); }
    const { result } = await runActionWithAuth(
      req, actionName, fn, args, [abortController.signal], marker.access === 'authenticated');
    if (result?.__webcreatorAIExecution !== 1) throw new Error('Invalid managed AI sync result');
    res.json(serializer.serialize({
      ok: true,
      result: result.result,
      usage: result.usage,
      finishReason: result.finishReason,
      committed: result.committed,
      traceId: req.headers['x-runtime-trace-id'],
    }));
  } catch (error) {
    const status = error instanceof UnauthorizedError || error?.name === 'UnauthorizedError'
      ? 401 : error instanceof ForbiddenError || error?.name === 'ForbiddenError' ? 403
        : error?.aiCode === 'AI_INVALID_INPUT' || error?.aiCode?.startsWith('AI_INPUT_') ? 400 : 500;
    res.status(status).json(aiErrorPayload(
      error, status >= 500 ? error?.aiCode || 'AI_INTERNAL' : status === 400 ? error.aiCode : 'AI_UNAUTHORIZED'));
  } finally {
    req.signal?.removeEventListener('abort', abort);
  }
});

router.post('/ai/stream', async (req, res) => {
  const abortController = new AbortController();
  let timeoutCode = '';
  let progressTimer;
  let heartbeat;
  const abort = () => abortController.abort(req.signal?.reason);
  req.signal?.addEventListener('abort', abort, { once: true });
  res.on?.('close', () => {
    if (!res.writableEnded) abort();
  });
  try {
    const { actionName, args } = req.body;
    const fn = actions.get(actionName);
    if (!fn) return res.status(404).json(aiErrorPayload(null, 'AI_ACTION_NOT_FOUND'));
    let marker;
    try { marker = validateAIAction(fn, 'stream'); }
    catch (error) { return res.status(400).json(aiErrorPayload(error, error.aiCode)); }
    res.setHeader('content-type', 'text/event-stream; charset=utf-8');
    res.setHeader('cache-control', 'no-cache, no-transform');
    res.setHeader('x-accel-buffering', 'no');
    const { result, authContext } = await runActionWithAuth(
      req, actionName, fn, args, [abortController.signal], marker.access === 'authenticated');
    if (result?.__webcreatorAIStreamExecution !== 1 || !result?.stream) {
      throw new Error('Invalid managed AI stream result');
    }
    await continueActionWithAuth(actionName, authContext, async () => {
      writeAIEvent(res, 'start', {
        type: 'start', protocol: 1, output: result.output,
        traceId: req.headers['x-runtime-trace-id'] || '',
      });
      heartbeat = setInterval(() => {
        if (!res.destroyed && !res.writableEnded) {
          res.write(': heartbeat\\n\\n');
        }
      }, 15000);
      const iterator = result.stream[Symbol.asyncIterator]();
      let timeoutPhase = 'AI_FIRST_TOKEN_TIMEOUT';
      while (true) {
        const waitStartedAt = Date.now();
        const step = await Promise.race([
          iterator.next(),
          new Promise((_resolve, reject) => {
            const checkProgress = () => {
              const lastOutputAt = Math.max(waitStartedAt, result.progress?.lastOutputAt || 0);
              const remaining = 30000 - (Date.now() - lastOutputAt);
              if (remaining > 0) {
                progressTimer = setTimeout(checkProgress, remaining);
                return;
              }
              timeoutCode = result.progress?.lastOutputAt ? 'AI_IDLE_TIMEOUT' : timeoutPhase;
              abortController.abort();
              reject(Object.assign(new Error('AI stream progress timeout'), { aiCode: timeoutCode }));
            };
            progressTimer = setTimeout(checkProgress, 30000);
          }),
        ]);
        if (progressTimer) clearTimeout(progressTimer);
        if (step.done) break;
        const chunk = step.value;
        writeAIEvent(res, result.output === 'structured' ? 'partial' : 'text',
          result.output === 'structured'
            ? { type: 'partial', value: chunk }
            : { type: 'text', text: String(chunk || '') });
        timeoutPhase = 'AI_IDLE_TIMEOUT';
      }
      if (abortController.signal.aborted) {
        throw Object.assign(new DOMException('AI stream aborted', 'AbortError'), { aiCode: timeoutCode });
      }
      const finalResult = await result.result;
      if (abortController.signal.aborted) throw new DOMException('AI stream aborted', 'AbortError');
      if (result.commit) await result.commit(finalResult);
      writeAIEvent(res, 'finish', {
        type: 'finish', result: finalResult, usage: await result.usage,
        finishReason: result.finishReason ? await result.finishReason : undefined,
        committed: Boolean(result.commit),
      });
      res.end();
    });
  } catch (error) {
    if (res.destroyed || res.writableEnded) return;
    const status = error instanceof UnauthorizedError || error?.name === 'UnauthorizedError'
      ? 401 : error instanceof ForbiddenError || error?.name === 'ForbiddenError' ? 403
        : error?.aiCode === 'AI_INVALID_INPUT' || error?.aiCode?.startsWith('AI_INPUT_') ? 400 : 500;
    if (!res.headersSent) {
      res.status(status);
      res.setHeader('content-type', 'text/event-stream; charset=utf-8');
      res.setHeader('cache-control', 'no-cache, no-transform');
    }
    writeAIEvent(res, 'error', aiErrorPayload(
      error, error?.aiCode || timeoutCode || abortController.signal.reason?.aiCode
        || (error?.name === 'AbortError' ? 'AI_ABORTED' : 'AI_INTERNAL')));
    res.end();
  } finally {
    if (progressTimer) clearTimeout(progressTimer);
    if (heartbeat) clearInterval(heartbeat);
    req.signal?.removeEventListener('abort', abort);
  }
});

// RPC route (preserving existing bundled-entry.ts logic)
router.post('/', async (req, res) => {
  try {
    const { actionName, args } = req.body;
    const fn = actions.get(actionName);
    if (!fn) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    if (aiMarker(fn)?.family === 'ai') {
      res.status(400).json({ error: 'AI actions require /ai/sync or /ai/stream' });
      return;
    }

    const { result, authContext } = await runActionWithAuth(req, actionName, fn, args);

    if (authContext && authContext.role) {
      const roleValue = Array.isArray(authContext.role)
        ? JSON.stringify(authContext.role)
        : String(authContext.role);
      res.setHeader('X-Auth-Role', roleValue);
    }

    res.json(serializer.serialize(result));
  } catch (e) {
    if (e instanceof UnauthorizedError || e.name === 'UnauthorizedError') {
      res.status(401).json({ error: e.message || '请登录' });
      return;
    }
    if (e instanceof ForbiddenError || e.name === 'ForbiddenError') {
      res.status(403).json({ error: e.message || '权限不足' });
      return;
    }
    console.error('RPC Error:', e);
    res.status(500).json({ error: e?.message ?? 'Unknown error' });
  }
});

const PROJECT_ID = 'PROJ_${projectId}';
module.exports = { path: \`/rpc/\${PROJECT_ID}\`, router };
`;
}

// ─── generateEntry ───────────────────────────────────────────────────

/**
 * 生成入口文件 PROJ_xxx.js（带文件锁）
 *
 * 1. Acquire file lock on .entry-gen.lock
 * 2. Scan outDir for action .js files
 * 3. Generate PROJ_{projectId}.js content
 * 4. Write to outDir/PROJ_{projectId}.js
 * 5. Release lock
 */
export async function generateEntry(
  options: EntryGeneratorOptions
): Promise<EntryGeneratorResult> {
  const { projectId, outDir, projectRoot } = options;
  const absOutDir = path.resolve(projectRoot, outDir);
  const outputFile = path.join(absOutDir, `PROJ_${projectId}.js`);

  // Ensure output directory exists
  fs.mkdirSync(absOutDir, { recursive: true });

  // Lock file path
  const lockPath = options.lockFile || path.join(absOutDir, '.entry-gen.lock');
  // Ensure lock file exists (proper-lockfile requires the file to exist)
  fs.writeFileSync(lockPath, '', { flag: 'a' });

  let release: (() => Promise<void>) | null = null;

  try {
    release = await lockfile.lock(lockPath, {
      stale: 10000,
      retries: { retries: 5, minTimeout: 200 },
    });

    // Scan for action files
    const actionFiles = scanActionFiles(absOutDir);

    // Generate entry content
    const content = generateEntryContent(
      projectId,
      actionFiles,
    );

    // Write the entry file
    fs.writeFileSync(outputFile, content, 'utf-8');

    return {
      success: true,
      outputFile,
      actionFiles,
    };
  } catch (err: any) {
    const message = err.message ?? String(err);

    // Check if it's a lock timeout error
    if (message.includes('lock') || message.includes('ELOCKED')) {
      return {
        success: false,
        outputFile,
        actionFiles: [],
        errors: [`Lock timeout: ${message}. Please retry.`],
      };
    }

    return {
      success: false,
      outputFile,
      actionFiles: [],
      errors: [message],
    };
  } finally {
    if (release) {
      await release();
    }
  }
}
