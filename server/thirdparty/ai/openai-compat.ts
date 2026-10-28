import type { ThirdPartyAIProvider } from '../ai-definitions';

function notEnabled(): never {
    throw new Error('AI capability is not enabled for this project version');
}

/**
 * Compile-safe placeholder for projects that have not enabled AI.
 * The enable flow replaces this file with the managed Vercel AI SDK Core implementation.
 */
export const provider: ThirdPartyAIProvider = {
    generateText: async () => notEnabled(),
    streamText: () => notEnabled(),
    generateStructured: async () => notEnabled(),
    streamStructured: () => notEnabled(),
    generateImage: async () => notEnabled(),
};

export function getAIProvider(): ThirdPartyAIProvider {
    return provider;
}
