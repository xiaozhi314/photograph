/**
 * Type declarations for @/thirdparty/* path aliases.
 * These modules live in server/thirdparty/ which is excluded from the main tsconfig.
 * This declaration file allows action files to import from @/thirdparty/* without TSC errors.
 */

// Google Auth Provider
declare module '@/thirdparty/auth/google' {
    export interface ThirdPartyUser {
        id: string;
        displayName: string;
        email: string;
        photos?: { value: string }[];
        provider: string;
        _json?: any;
        [key: string]: any;
    }

    export interface ThirdPartyAuthProvider {
        getAuthUrl(successRedirectUrl: string, failedRedirectUrl?: string): string;
        getAuthUser(authToken?: string): Promise<ThirdPartyUser | null>;
    }

    export function getAuthProvider(name?: string): ThirdPartyAuthProvider;
    export const provider: ThirdPartyAuthProvider;
    export const GOOGLE_CALLBACK_URL: string;
}

// Stripe Payment Provider
declare module '@/thirdparty/payment/stripe' {
    export interface CreatePaymentParams {
        amount: number | string;
        userId: string | number;
        successUrl: string;
        cancelUrl: string;
        productName?: string;
        currency?: string;
        [key: string]: any;
    }

    export interface PaymentResult {
        url: string | null;
        sessionId?: string;
        outTradeNo: string;
        [key: string]: any;
    }

    export interface PaymentSessionInfo {
        sessionId: string;
        status: 'paid' | 'unpaid' | 'canceled' | 'failed' | string;
        amountTotal?: number;
        currency?: string;
        metadata?: any;
        raw?: any;
    }

    export interface ThirdPartyPaymentProvider {
        createPaymentSession(params: CreatePaymentParams): Promise<PaymentResult>;
        getPaymentSession(sessionId: string): Promise<PaymentSessionInfo | null>;
    }

    export function getPaymentProvider(name?: string): ThirdPartyPaymentProvider;
    export const provider: ThirdPartyPaymentProvider;
}

// Alipay Payment Provider
declare module '@/thirdparty/payment/alipay' {
    export interface CreatePaymentParams {
        amount: number | string;
        userId: string | number;
        successUrl: string;
        cancelUrl: string;
        productName?: string;
        currency?: string;
        [key: string]: any;
    }

    export interface PaymentResult {
        url: string | null;
        sessionId?: string;
        outTradeNo: string;
        [key: string]: any;
    }

    export interface PaymentSessionInfo {
        sessionId: string;
        status: 'paid' | 'unpaid' | 'canceled' | 'failed' | string;
        amountTotal?: number;
        currency?: string;
        metadata?: any;
        raw?: any;
    }

    export interface ThirdPartyPaymentProvider {
        createPaymentSession(params: CreatePaymentParams): Promise<PaymentResult>;
        getPaymentSession(sessionId: string): Promise<PaymentSessionInfo | null>;
    }

    export function getPaymentProvider(name?: string): ThirdPartyPaymentProvider;
    export const provider: ThirdPartyPaymentProvider;
}

// Clink Payment Provider
declare module '@/thirdparty/payment/clink' {
    export interface CreatePaymentParams {
        amount: number | string;
        userId: string | number;
        customerEmail?: string;
        successUrl: string;
        cancelUrl: string;
        productName?: string;
        currency?: string;
        [key: string]: any;
    }

    export interface PaymentResult {
        url: string | null;
        sessionId?: string;
        outTradeNo: string;
        [key: string]: any;
    }

    export interface PaymentSessionInfo {
        sessionId: string;
        status: 'paid' | 'unpaid' | 'canceled' | 'failed' | string;
        amountTotal?: number;
        currency?: string;
        metadata?: any;
        raw?: any;
    }

    export interface ThirdPartyPaymentProvider {
        createPaymentSession(params: CreatePaymentParams): Promise<PaymentResult>;
        getPaymentSession(sessionId: string): Promise<PaymentSessionInfo | null>;
    }

    export function getPaymentProvider(name?: string): ThirdPartyPaymentProvider;
    export const provider: ThirdPartyPaymentProvider;
}

// NOWPayments Hosted Invoice Provider
declare module '@/thirdparty/payment/nowpayments' {
    export interface CreatePaymentParams {
        amount: number | string;
        userId: string | number;
        orderId: string;
        ipnCallbackUrl: string;
        successUrl: string;
        cancelUrl: string;
        productName?: string;
        currency?: string;
        payCurrency?: string;
        /** Optional CNY-per-USD override; CNY defaults to 1 USD = 7 CNY. */
        nowPaymentsCnyPerUsd?: number;
        [key: string]: any;
    }

    export interface PaymentResult {
        url: string | null;
        sessionId?: string;
        invoiceId?: string;
        paymentId?: string;
        outTradeNo: string;
        [key: string]: any;
    }

    export interface PaymentSessionInfo {
        sessionId: string;
        status: 'paid' | 'unpaid' | 'canceled' | 'failed' | string;
        amountTotal?: number;
        currency?: string;
        metadata?: any;
        raw?: any;
    }

    export interface ThirdPartyPaymentProvider {
        createPaymentSession(params: CreatePaymentParams): Promise<PaymentResult>;
        getPaymentSession(sessionId: string): Promise<PaymentSessionInfo | null>;
        verifyWebhook?(rawBody: string, signature: string): boolean;
    }

    export function getPaymentProvider(name?: string): ThirdPartyPaymentProvider;
    export type NowPaymentsCredentialMode = 'preview' | 'deploy';
    export interface NowPaymentsIpnEvent {
        invoiceId: string | null;
        paymentId: string | null;
        orderId: string | null;
        rawStatus: string;
        status: PaymentSessionInfo['status'];
    }
    export interface NowPaymentsPricePair {
        sourceAmount: number;
        sourceCurrency: string;
        providerPriceAmount: number;
        providerPriceCurrency: string;
        cnyPerUsd: number | null;
    }
    export function verifyNowPaymentsIpn(rawBody: string, signature: string, mode?: NowPaymentsCredentialMode): boolean;
    export function parseVerifiedNowPaymentsIpn(rawBody: string, signature: string, mode?: NowPaymentsCredentialMode): NowPaymentsIpnEvent;
    export function resolveNowPaymentsPricePair(amount: number | string, currency: string | undefined, cnyPerUsd?: number): NowPaymentsPricePair;
    export function getNowPaymentsSession(paymentId: string, mode?: NowPaymentsCredentialMode): Promise<PaymentSessionInfo | null>;
    export const provider: ThirdPartyPaymentProvider;
}

// Barrel re-export (for backward compat, though direct imports are preferred)
declare module '@/thirdparty' {
    export function getAuthProvider(name: 'google'): import('@/thirdparty/auth/google').ThirdPartyAuthProvider;
    export function getPaymentProvider(name: 'stripe' | 'alipay' | 'clink' | 'nowpayments'): import('@/thirdparty/payment/stripe').ThirdPartyPaymentProvider;
}

// AI Provider (Vercel AI SDK Core through host-managed OneHub)
declare module '@/thirdparty/ai/openai-compat' {
    export interface AIProviderUsage {
        inputTokens?: number;
        outputTokens?: number;
        totalTokens?: number;
    }
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
        generateText(params: AITextInput): Promise<{ text: string; usage?: AIProviderUsage }>;
        streamText(params: AITextInput & { abortSignal?: AbortSignal }): {
            textStream: AsyncIterable<string>;
            text: PromiseLike<string>;
            usage: Promise<AIProviderUsage>;
            finishReason: PromiseLike<string>;
        };
        generateStructured<T>(params: AITextInput & {
            schema: unknown;
        }): Promise<{ object: T; usage?: AIProviderUsage }>;
        streamStructured<T>(params: AITextInput & {
            schema: unknown;
        }): {
            partialOutputStream: AsyncIterable<unknown>;
            output: PromiseLike<T>;
            usage: PromiseLike<AIProviderUsage>;
            finishReason: PromiseLike<string>;
        };
        generateImage(params: AIImageInput): Promise<{ url: string; mediaType: string }>;
    }

    export function getAIProvider(): ThirdPartyAIProvider;
    export const provider: ThirdPartyAIProvider;
}

declare module '@/thirdparty/ai/actions' {
    export interface AIActionRuntime { abortSignal?: AbortSignal; }
    export type AICapability = 'ai.text.generate' | 'ai.text.structured' | 'ai.chat' | 'ai.image.generate';
    export interface AIActionUsage {
        inputTokens?: number;
        outputTokens?: number;
        totalTokens?: number;
    }
    export interface AICommitExecution<TResult, TCommitData = undefined> {
        result: TResult;
        usage?: AIActionUsage;
        finishReason?: string;
        commitData?: TCommitData;
    }
    export function defineAISyncAction<TArgs extends unknown[], TResult, TCommitData = undefined>(spec: {
        requirementId: string;
        capability: AICapability;
        output: 'text' | 'structured' | 'image';
        access: 'authenticated' | 'public';
        execute: (businessArgs: TArgs, runtime: AIActionRuntime) => Promise<{
            result: TResult;
            usage?: AIActionUsage;
            finishReason?: string;
            commitData?: TCommitData;
        }>;
        commit?: (execution: AICommitExecution<TResult, TCommitData>, businessArgs: TArgs) => Promise<void>;
    }): (...args: TArgs) => Promise<unknown>;
    export function defineAIStreamAction<TArgs extends unknown[], TResult, TChunk, TCommitData = undefined>(spec: {
        requirementId: string;
        capability: Exclude<AICapability, 'ai.image.generate'>;
        output: 'text' | 'structured';
        access: 'authenticated' | 'public';
        execute: (businessArgs: TArgs, runtime: AIActionRuntime) => {
            stream: AsyncIterable<TChunk>;
            result: PromiseLike<TResult>;
            usage: PromiseLike<AIActionUsage>;
            finishReason?: PromiseLike<string>;
            commitData?: TCommitData | PromiseLike<TCommitData>;
        } | Promise<{
            stream: AsyncIterable<TChunk>;
            result: PromiseLike<TResult>;
            usage: PromiseLike<AIActionUsage>;
            finishReason?: PromiseLike<string>;
            commitData?: TCommitData | PromiseLike<TCommitData>;
        }>;
        commit?: (execution: AICommitExecution<TResult, TCommitData>, businessArgs: TArgs) => Promise<void>;
    }): (...args: TArgs) => Promise<unknown>;
}

declare module '@/thirdparty/ai/context' {
    export type AIKnowledgePolicy =
        | 'context_only_ask'
        | 'context_only_disclose'
        | 'allow_general_disclose';
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
    export interface AIExtractedTextFile {
        name: string;
        mediaType: string;
        text: string;
    }
    export interface AITextFileExtraction {
        documents: AIExtractedTextFile[];
        meta: {
            fileCount: number;
            textFileCount: number;
            documentCount: number;
            inputBytes: number;
            extractedChars: number;
            parseDurationMs: number;
            fileTypes: string[];
        };
    }
    export class AIContextRequiredError extends Error {
        readonly aiCode: 'AI_INVALID_INPUT';
        readonly sourceId: string;
    }
    export const AI_CONTEXT_RECORD_LIMIT: 20;
    /** Text requiredness is a server Action policy; requirementId is only a tracing identifier. */
    export function prepareAIRequest(input: {
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
        messages: import('@/thirdparty/ai/openai-compat').ChatMessage[];
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
    export function prepareAIImageRequest(input: {
        requirementId: string;
        /** Server-built application rules; never copy a client instruction here. */
        instruction?: string;
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
    export function extractAITextFiles(input: {
        files?: AIInputFile[];
        policy: AIInputFilePolicy;
        abortSignal?: AbortSignal;
    }): Promise<AITextFileExtraction>;
}
