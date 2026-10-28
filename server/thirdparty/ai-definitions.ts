/**
 * Stable business-facing AI façade.
 * The implementation uses Vercel AI SDK Core through the host-managed OneHub gateway.
 * Model, provider, base URL, API key, and providerOptions are intentionally absent.
 */

export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string | Array<
        | { type: 'text'; text: string }
        | { type: 'image'; image: string }
    >;
}

export type AITextInput = ({
    prompt: string;
    messages?: never;
} | {
    prompt?: never;
    messages: ChatMessage[];
}) & {
    system?: string;
    abortSignal?: AbortSignal;
    safePromptPreview?: string;
};

export interface AIImageInput {
    prompt: string | { text?: string; images: string[] };
    size?: `${number}x${number}`;
    abortSignal?: AbortSignal;
    safePromptPreview?: string;
}

export interface ThirdPartyAIProvider {
    generateText(params: AITextInput): Promise<{ text: string; usage?: unknown }>;
    streamText(params: AITextInput & { abortSignal?: AbortSignal }): {
        textStream: AsyncIterable<string>;
        text: PromiseLike<string>;
        usage: Promise<unknown>;
        finishReason: PromiseLike<string>;
    };
    generateStructured<T>(params: AITextInput & {
        schema: unknown;
    }): Promise<{ object: T; usage?: unknown }>;
    streamStructured<T>(params: AITextInput & {
        schema: unknown;
    }): {
        partialOutputStream: AsyncIterable<unknown>;
        output: PromiseLike<T>;
        usage: PromiseLike<unknown>;
        finishReason: PromiseLike<string>;
    };
    generateImage(params: AIImageInput): Promise<{ url: string; mediaType: string }>;
}

export type GetAIProvider = () => ThirdPartyAIProvider;

export type AIKnowledgePolicy =
    | 'context_only_ask'
    | 'context_only_disclose'
    | 'allow_general_disclose';

/**
 * Server-resolved facts. prepareAIRequest treats null, undefined, [], and blank strings
 * as missing: optional sources become unavailable; required sources reject.
 * available/unavailable describes data presence, not authentication, permissions, or query success.
 * Express request authentication state in server-built instruction; keep entity facts in sources.
 * For an optional query that succeeds with no rows, unavailableReason can explain that empty result.
 */
export interface AIResolvedContextSource {
    id: string;
    required: boolean;
    data?: unknown;
    unavailableReason?: string;
    fieldCount?: number;
}

export interface AIContextHistoryMessage {
    role: 'user' | 'assistant';
    content: string;
}

export interface AIInputFile {
    name: string;
    mediaType: string;
    size: number;
    dataBase64: string;
}

export interface AIInputFilePolicy {
    mode: 'none' | 'optional' | 'required';
    kinds: Array<'image' | 'text' | 'document'>;
    maxCount: number;
}

export declare class AIContextRequiredError extends Error {
    readonly aiCode: 'AI_INVALID_INPUT';
    readonly sourceId: string;
}

export declare const AI_CONTEXT_RECORD_LIMIT: 20;

/** Text requiredness is a server Action policy; requirementId is only a tracing identifier. */
export declare function prepareAIRequest(input: {
    requirementId: string;
    instruction: string;
    userText?: string;
    /** Server Action policy; defaults to true. Set false for file/entity-only or optional text input. */
    userTextRequired?: boolean;
    history?: unknown[];
    sources?: AIResolvedContextSource[];
    inputFiles?: AIInputFile[];
    inputFilePolicy?: AIInputFilePolicy;
    knowledgePolicy: AIKnowledgePolicy;
    abortSignal?: AbortSignal;
}): Promise<{
    system: string;
    messages: ChatMessage[];
    safePromptPreview: string;
    contextMeta: {
        requirementId: string;
        factsChars: number;
        historyTurns: number;
        truncated: boolean;
        knowledgePolicy: AIKnowledgePolicy;
        fileCount: number;
        imageCount: number;
        textFileCount: number;
        documentCount: number;
        inputBytes: number;
        extractedChars: number;
        parseDurationMs: number;
        fileTypes: string[];
    };
}>;

export declare function prepareAIImageRequest(input: {
    requirementId: string;
    prompt: string;
    inputFiles?: AIInputFile[];
    inputFilePolicy?: AIInputFilePolicy;
    abortSignal?: AbortSignal;
}): Promise<{
    prompt: string | { text?: string; images: string[] };
    safePromptPreview: string;
    contextMeta: {
        requirementId: string;
        fileCount: number;
        imageCount: number;
        inputBytes: number;
        parseDurationMs: number;
        fileTypes: string[];
    };
}>;
