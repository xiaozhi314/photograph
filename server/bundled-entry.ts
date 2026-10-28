import express from 'express';
import serializer from '../src/utils/serializer';
import { registry } from './registry';
import { setupThirdPartyAuth } from './thirdparty/auth';
import { authContext } from './thirdparty/context';
import { THIRD_PARTY_SESSION_SECRET } from './thirdparty/common';
// 错误类和 runWithAuth 从 BaseActionFun 统一导入作为 fallback
import { UnauthorizedError, ForbiddenError, runWithAuth as baseRunWithAuth } from '../src/@base/BaseActionFun';

// 同时 import 前后台和 app 的 auth-context
// 不要改这里的路径，代码里有强匹配的替换逻辑！start
import * as frontendAuth from '../src/frontend/action_utils';
import * as backendAuth from '../src/backend/action_utils';
import * as appAuth from '../src/app/action_utils';

const router = express.Router();

console.log("[bundled-entry] Module Loaded! Router initialized.");

// CORS Middleware removed - handled by Global Runtime
// router.use((req, res, next) => { ... });

// 1. Third Party Auth Strategy & Routes (Pluggable Setup)
setupThirdPartyAuth(router);


// Helper to deserialize args
const deserialize = (args: any) => serializer.deserialize(args);
const serialize = (result: any) => serializer.serialize(result);

// Helper to parse cookies
function parseCookies(header: string | undefined): Record<string, string> {
    const list: Record<string, string> = {};
    if (!header) return list;
    header.split(';').forEach(cookie => {
        const parts = cookie.split('=');
        const name = parts.shift()?.trim();
        if (name) {
             const value = parts.join('=');
             list[name] = decodeURIComponent(value.trim());
        }
    });
    return list;
}

type AnyFn = (...args: any[]) => any;
const actions = new Map<string, AnyFn>();
const AI_FIRST_TOKEN_TIMEOUT_MS = 30_000;
const AI_IDLE_TIMEOUT_MS = 30_000;

// Populate actions map
for (const [moduleName, mod] of Object.entries(registry)) {
  for (const [name, fn] of Object.entries(mod)) {
    if (typeof fn === 'function') {
      // e.g. "app.backend.dashboard.actions.getStats"
      actions.set(`${moduleName}.${name}`, fn as AnyFn);
    }
  }
}

// 根据 actionName 判断使用哪个 auth-context
function getAuthModule(actionName: string) {
  // actionName 格式: "src.frontend.actions.xxx" 或 "src.backend.actions.xxx" 或 "src.app.actions.xxx"
  // 注意：app/(backend)/ 目录下的 action 生成的 actionName 格式为 "app.backend.xxx"，
  // 必须优先匹配 .backend.，否则会被 startsWith('app.') 错误路由到 appAuth
  if (actionName.includes('.frontend.') || actionName.startsWith('frontend.')) {
    return frontendAuth;
  }
  if (actionName.includes('.backend.') || actionName.startsWith('backend.')) {
    return backendAuth;
  }
  if (actionName.includes('.app.') || actionName.startsWith('app.')) {
    return appAuth;
  }
  return backendAuth;
}

async function continueActionWithRequestContext(
  req: any,
  actionName: string,
  authCtx: any,
  callback: () => unknown,
) {
  const authModule = getAuthModule(actionName);
  const runWithAuth = (authModule as any).runWithAuth || baseRunWithAuth;
  const cookies = parseCookies(req.headers.cookie);
  const headers = req.headers as Record<string, string>;
  return authContext.run({ cookies, headers }, async () => {
    return runWithAuth(authCtx, callback);
  });
}

async function runActionWithRequestContext(
  req: any,
  actionName: string,
  fn: AnyFn,
  args: unknown,
  extraArgs: unknown[] = [],
  requireAuthenticated = false,
) {
  const authModule = getAuthModule(actionName);
  const { parseToken } = authModule;
  const token = req.headers.authorization?.replace('Bearer ', '');
  const authCtx = token ? await parseToken(token) : null;
  if (requireAuthenticated && !authCtx) throw new UnauthorizedError();
  const result = await continueActionWithRequestContext(
    req,
    actionName,
    authCtx,
    () => fn(...(deserialize(args) as any[]), ...extraArgs),
  );
  return { result, authCtx };
}

function aiMarker(fn: AnyFn): any {
  return (fn as any).__webcreatorAI;
}

function validateAIAction(fn: AnyFn, delivery: 'sync' | 'stream'): any {
  const marker = aiMarker(fn);
  const outputByCapability = {
    'ai.text.generate': 'text', 'ai.chat': 'text',
    'ai.text.structured': 'structured', 'ai.image.generate': 'image',
  } as Record<string, string>;
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

function aiErrorPayload(error: any, code = 'AI_INTERNAL') {
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

function writeAIEvent(res: any, event: string, payload: unknown) {
  res.write(`event: ${event}\ndata: ${JSON.stringify(serialize(payload))}\n\n`);
}

router.post('/ai/sync', async (req: any, res: any) => {
  const abortController = new AbortController();
  const abort = () => abortController.abort(req.signal?.reason);
  req.signal?.addEventListener('abort', abort, { once: true });
  res.on?.('close', () => {
    if (!res.writableEnded) abort();
  });
  try {
    const { actionName, args } = req.body;
    const fn = actions.get(actionName);
    if (!fn) {
      res.status(404).json(aiErrorPayload(null, 'AI_ACTION_NOT_FOUND'));
      return;
    }
    let marker;
    try { marker = validateAIAction(fn, 'sync'); }
    catch (error: any) { return res.status(400).json(aiErrorPayload(error, error.aiCode)); }
    const { result } = await runActionWithRequestContext(
      req, actionName, fn, args, [abortController.signal], marker.access === 'authenticated'
    );
    if (result?.__webcreatorAIExecution !== 1) throw new Error('Invalid managed AI sync result');
    res.json(serialize({
      ok: true,
      result: result.result,
      usage: result.usage,
      finishReason: result.finishReason,
      committed: result.committed,
      traceId: req.headers['x-runtime-trace-id'],
    }));
  } catch (error: any) {
    const status = error instanceof UnauthorizedError || error?.name === 'UnauthorizedError'
      ? 401
      : error instanceof ForbiddenError || error?.name === 'ForbiddenError'
        ? 403
        : error?.aiCode === 'AI_INVALID_INPUT' || error?.aiCode?.startsWith('AI_INPUT_')
          ? 400
        : 500;
    res.status(status).json(aiErrorPayload(
      error,
      status >= 500 ? error?.aiCode || 'AI_INTERNAL' : status === 400 ? error.aiCode : 'AI_UNAUTHORIZED',
    ));
  } finally {
    req.signal?.removeEventListener('abort', abort);
  }
});

router.post('/ai/stream', async (req: any, res: any) => {
  const abortController = new AbortController();
  let timeoutCode = '';
  let progressTimer: ReturnType<typeof setTimeout> | undefined;
  let heartbeat: ReturnType<typeof setInterval> | undefined;
  const abort = () => abortController.abort(req.signal?.reason);
  req.signal?.addEventListener('abort', abort, { once: true });
  res.on?.('close', () => {
    if (!res.writableEnded) abort();
  });
  try {
    const { actionName, args } = req.body;
    const fn = actions.get(actionName);
    if (!fn) {
      res.status(404).json(aiErrorPayload(null, 'AI_ACTION_NOT_FOUND'));
      return;
    }
    let marker;
    try { marker = validateAIAction(fn, 'stream'); }
    catch (error: any) { return res.status(400).json(aiErrorPayload(error, error.aiCode)); }
    res.setHeader('content-type', 'text/event-stream; charset=utf-8');
    res.setHeader('cache-control', 'no-cache, no-transform');
    res.setHeader('x-accel-buffering', 'no');
    const { result, authCtx } = await runActionWithRequestContext(
      req, actionName, fn, args, [abortController.signal], marker.access === 'authenticated'
    );
    if (result?.__webcreatorAIStreamExecution !== 1 || !result?.stream) {
      throw new Error('Invalid managed AI stream result');
    }
    await continueActionWithRequestContext(req, actionName, authCtx, async () => {
      writeAIEvent(res, 'start', {
        type: 'start',
        protocol: 1,
        output: result.output,
        traceId: req.headers['x-runtime-trace-id'] || '',
      });
      heartbeat = setInterval(() => {
        if (!res.destroyed && !res.writableEnded) {
          res.write(': heartbeat\n\n');
        }
      }, 15_000);
      const iterator = result.stream[Symbol.asyncIterator]();
      let timeoutPhase = 'AI_FIRST_TOKEN_TIMEOUT';
      while (true) {
        const waitStartedAt = Date.now();
        const step = await Promise.race([
          iterator.next(),
          new Promise<never>((_resolve, reject) => {
            const checkProgress = () => {
              const lastOutputAt = Math.max(waitStartedAt, result.progress?.lastOutputAt || 0);
              const timeoutMs = timeoutPhase === 'AI_FIRST_TOKEN_TIMEOUT' && !result.progress?.lastOutputAt
                ? AI_FIRST_TOKEN_TIMEOUT_MS : AI_IDLE_TIMEOUT_MS;
              const remaining = timeoutMs - (Date.now() - lastOutputAt);
              if (remaining > 0) {
                progressTimer = setTimeout(checkProgress, remaining);
                return;
              }
              timeoutCode = result.progress?.lastOutputAt ? 'AI_IDLE_TIMEOUT' : timeoutPhase;
              abortController.abort();
              reject(Object.assign(new Error('AI stream progress timeout'), { aiCode: timeoutCode }));
            };
            progressTimer = setTimeout(checkProgress, timeoutPhase === 'AI_FIRST_TOKEN_TIMEOUT'
              ? AI_FIRST_TOKEN_TIMEOUT_MS
              : AI_IDLE_TIMEOUT_MS);
          }),
        ]);
        if (progressTimer) clearTimeout(progressTimer);
        if (step.done) break;
        const chunk = step.value;
        writeAIEvent(
          res,
          result.output === 'structured' ? 'partial' : 'text',
          result.output === 'structured'
            ? { type: 'partial', value: chunk }
            : { type: 'text', text: String(chunk || '') },
        );
        timeoutPhase = 'AI_IDLE_TIMEOUT';
      }
      if (abortController.signal.aborted) {
        throw Object.assign(new DOMException('AI stream aborted', 'AbortError'), { aiCode: timeoutCode });
      }
      const finalResult = await result.result;
      if (abortController.signal.aborted) throw new DOMException('AI stream aborted', 'AbortError');
      if (result.commit) await result.commit(finalResult);
      writeAIEvent(res, 'finish', {
        type: 'finish',
        result: finalResult,
        usage: await result.usage,
        finishReason: result.finishReason ? await result.finishReason : undefined,
        committed: Boolean(result.commit),
      });
      res.end();
    });
  } catch (error: any) {
    if (res.destroyed || res.writableEnded) return;
    const status = error instanceof UnauthorizedError || error?.name === 'UnauthorizedError'
      ? 401
      : error instanceof ForbiddenError || error?.name === 'ForbiddenError'
        ? 403
        : error?.aiCode === 'AI_INVALID_INPUT' || error?.aiCode?.startsWith('AI_INPUT_')
          ? 400
        : 500;
    if (!res.headersSent) {
      res.status(status);
      res.setHeader('content-type', 'text/event-stream; charset=utf-8');
      res.setHeader('cache-control', 'no-cache, no-transform');
    }
    writeAIEvent(res, 'error', aiErrorPayload(
      error,
      error?.aiCode
        || timeoutCode
        || (abortController.signal.reason as any)?.aiCode
        || (error?.name === 'AbortError' ? 'AI_ABORTED' : 'AI_INTERNAL'),
    ));
    res.end();
  } finally {
    if (progressTimer) clearTimeout(progressTimer);
    if (heartbeat) clearInterval(heartbeat);
    req.signal?.removeEventListener('abort', abort);
  }
});

// RPC Endpoint
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

    const { result, authCtx } = await runActionWithRequestContext(req, actionName, fn, args);

    // 如果有 authCtx，通过响应头返回最新的 role（从数据库读取的）
    // 前端可以用这个来同步 session，解决角色变更后前端 session 不同步的问题
    if (authCtx && authCtx.role) {
      // 支持单角色(string)和多角色(array)
      const roleValue = Array.isArray(authCtx.role) 
        ? JSON.stringify(authCtx.role) 
        : String(authCtx.role);
      res.setHeader('X-Auth-Role', roleValue);
    }

    res.json(serialize(result));
  } catch (e: any) {
    // 统一错误处理 - 使用 BaseActionFun 的错误类
    if (e instanceof UnauthorizedError || e.name === 'UnauthorizedError') {
      res.status(401).json({ error: e.message || '请登录' });
      return;
    }
    if (e instanceof ForbiddenError || e.name === 'ForbiddenError') {
      res.status(403).json({ error: e.message || '权限不足' });
      return;
    }
    // 不要改这里的路径，代码里有强匹配的替换逻辑！end
    console.error('RPC Error:', e);
    res.status(500).json({ error: e?.message ?? 'Unknown error' });
  }
});

const PROJECT_ID = 'PROJ_47bdb6f4';

// Export for the backend proxy loader
export const path = `/rpc/${PROJECT_ID}`;
export { router };
