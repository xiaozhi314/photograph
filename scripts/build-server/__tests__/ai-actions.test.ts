import { describe, expect, it } from 'vitest';

import {
  defineAISyncAction,
  defineAIStreamAction,
} from '../../../../../thirdparty/ai-sdk6/ai-actions';

describe('managed AI action contract', () => {
  it('marks sync actions and gives commit final execution data without exposing commitData', async () => {
    const committed: unknown[] = [];
    const action = defineAISyncAction<
      [],
      string,
      { latencyMs: number }
    >({
      requirementId: 'copywriting',
      capability: 'ai.text.generate',
      output: 'text',
      access: 'authenticated',
      execute: async () => ({
        result: 'final',
        usage: { totalTokens: 3 },
        finishReason: 'stop',
        commitData: { latencyMs: 42 },
      }),
      commit: async execution => { committed.push(execution); },
    });

    const result = await action();

    expect(action.__webcreatorAI.delivery).toBe('sync');
    expect(result.result).toBe('final');
    expect(result.committed).toBe(true);
    expect(result).not.toHaveProperty('commitData');
    expect(committed).toEqual([{
      result: 'final',
      usage: { totalTokens: 3 },
      finishReason: 'stop',
      commitData: { latencyMs: 42 },
    }]);
  });

  it('marks stream actions and resolves final execution data only at commit', async () => {
    const committed: unknown[] = [];
    async function* chunks() { yield 'a'; yield 'b'; }
    const action = defineAIStreamAction<
      [],
      string,
      string,
      { conversationId: string }
    >({
      requirementId: 'chat',
      capability: 'ai.chat',
      output: 'text',
      access: 'authenticated',
      execute: () => ({
        stream: chunks(),
        result: Promise.resolve('ab'),
        usage: Promise.resolve({ totalTokens: 2 }),
        finishReason: Promise.resolve('stop'),
        commitData: Promise.resolve({ conversationId: 'conv_1' }),
      }),
      commit: async execution => { committed.push(execution); },
    });

    const handle = await action();
    const partials: string[] = [];
    for await (const chunk of handle.stream) partials.push(chunk);

    expect(action.__webcreatorAI.delivery).toBe('stream');
    expect(partials).toEqual(['a', 'b']);
    expect(committed).toEqual([]);
    expect(handle).not.toHaveProperty('commitData');
    await handle.commit?.(await handle.result);
    expect(committed).toEqual([{
      result: 'ab',
      usage: { totalTokens: 2 },
      finishReason: 'stop',
      commitData: { conversationId: 'conv_1' },
    }]);
  });

  it('allows stream actions to load server context before starting the model stream', async () => {
    async function* chunks() { yield 'grounded'; }
    const action = defineAIStreamAction({
      requirementId: 'grounded-chat',
      capability: 'ai.chat',
      output: 'text',
      access: 'authenticated',
      execute: async () => {
        await Promise.resolve();
        return {
          stream: chunks(),
          result: Promise.resolve('grounded'),
          usage: Promise.resolve({}),
        };
      },
    });

    const handle = await action();

    expect(handle.__webcreatorAIStreamExecution).toBe(1);
    expect(await handle.result).toBe('grounded');
  });
});
