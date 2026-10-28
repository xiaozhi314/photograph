/**
 * Third-party credentials and URLs.
 * Payment/auth preview values are injected by enable_thirdparty_integration.
 * Payment/auth deploy values use *_DEPLOY constants and platform project Secret configuration.
 * AI uses one active text config and one active image config in every environment.
 * Runtime resolution: server/thirdparty/secret-resolver.ts.
 */
// === Project Configuration ===
export const PROJECT_ID = "PROJ_1eff6fa0";
export const FRONTEND_URL = "{{VITE_GENERATED_PROJECT_URL}}";
export const BACKEND_URL = "{{VITE_GENERATED_PROJECT_BACKEND_URL}}";
export const THIRD_PARTY_AI_ENABLED = false;

/** 平台统计用稳定父项目 ID；快照预览目录 PROJ_xxx_snap_* 归一化为 PROJ_xxx。 */
export function canonicalStatsProjectId(projectId: string = PROJECT_ID): string {
  const match = projectId.match(/^(PROJ_[a-f0-9]+)_snap_\d{8}_\d{6}_\d+$/i);
  return match ? match[1] : projectId;
}

// === Session (preview / platform test) ===
export const THIRD_PARTY_SESSION_SECRET = "{{THIRD_PARTY_SESSION_SECRET}}";
export const THIRD_PARTY_SESSION_SECRET_DEPLOY = "";

// === Google OAuth (preview / platform test) ===
export const THIRD_PARTY_GOOGLE_CLIENT_ID = "{{THIRD_PARTY_GOOGLE_CLIENT_ID}}";
export const THIRD_PARTY_GOOGLE_CLIENT_SECRET = "{{THIRD_PARTY_GOOGLE_CLIENT_SECRET}}";
export const THIRD_PARTY_GOOGLE_CALLBACK_URL = `${BACKEND_URL}/api/auth/google/callback`;
// Deploy-only: user-provided; empty until configured
export const THIRD_PARTY_GOOGLE_CLIENT_ID_DEPLOY = "";
export const THIRD_PARTY_GOOGLE_CLIENT_SECRET_DEPLOY = "";

// === Stripe (preview / platform test) ===
export const THIRD_PARTY_STRIPE_SECRET_KEY = "{{THIRD_PARTY_STRIPE_SECRET_KEY}}";
export const STRIPE_TEST_CARD_NUMBER = "{{STRIPE_TEST_CARD_NUMBER}}";
export const THIRD_PARTY_STRIPE_SECRET_KEY_DEPLOY = "";

// === Alipay (preview / platform test) ===
export const THIRD_PARTY_ALIPAY_APP_ID = "{{THIRD_PARTY_ALIPAY_APP_ID}}";
export const THIRD_PARTY_ALIPAY_PRIVATE_KEY = "{{THIRD_PARTY_ALIPAY_PRIVATE_KEY}}";
export const THIRD_PARTY_ALIPAY_PUBLIC_KEY = "{{THIRD_PARTY_ALIPAY_PUBLIC_KEY}}";
export const THIRD_PARTY_ALIPAY_GATEWAY = "{{THIRD_PARTY_ALIPAY_GATEWAY}}";
export const ALIPAY_TEST_CARD_NUMBER = "{{ALIPAY_TEST_CARD_NUMBER}}";
export const ALIPAY_TEST_PAYMENT_PASSWORD = "{{ALIPAY_TEST_PAYMENT_PASSWORD}}";
export const THIRD_PARTY_ALIPAY_APP_ID_DEPLOY = "";
export const THIRD_PARTY_ALIPAY_PRIVATE_KEY_DEPLOY = "";
export const THIRD_PARTY_ALIPAY_PUBLIC_KEY_DEPLOY = "";
export const THIRD_PARTY_ALIPAY_GATEWAY_DEPLOY = "";

// === Clink (preview / platform test) ===
export const THIRD_PARTY_CLINK_API_KEY = "{{THIRD_PARTY_CLINK_API_KEY}}";
export const THIRD_PARTY_CLINK_API_BASE_URL = "{{THIRD_PARTY_CLINK_API_BASE_URL}}";
export const THIRD_PARTY_CLINK_PUBLISHABLE_KEY = "{{THIRD_PARTY_CLINK_PUBLISHABLE_KEY}}";
export const THIRD_PARTY_CLINK_WEBHOOK_SIGNING_KEY = "{{THIRD_PARTY_CLINK_WEBHOOK_SIGNING_KEY}}";
export const CLINK_TEST_CARD_NUMBER = "{{CLINK_TEST_CARD_NUMBER}}";
export const THIRD_PARTY_CLINK_API_KEY_DEPLOY = "";
export const THIRD_PARTY_CLINK_API_BASE_URL_DEPLOY = "";
export const THIRD_PARTY_CLINK_PUBLISHABLE_KEY_DEPLOY = "";
export const THIRD_PARTY_CLINK_WEBHOOK_SIGNING_KEY_DEPLOY = "";

// === NOWPayments (preview / platform test) ===
export const THIRD_PARTY_NOWPAYMENTS_API_KEY = "{{THIRD_PARTY_NOWPAYMENTS_API_KEY}}";
export const THIRD_PARTY_NOWPAYMENTS_IPN_SECRET = "{{THIRD_PARTY_NOWPAYMENTS_IPN_SECRET}}";
export const THIRD_PARTY_NOWPAYMENTS_API_BASE_URL = "{{THIRD_PARTY_NOWPAYMENTS_API_BASE_URL}}";
export const THIRD_PARTY_NOWPAYMENTS_API_KEY_DEPLOY = "";
export const THIRD_PARTY_NOWPAYMENTS_IPN_SECRET_DEPLOY = "";
export const THIRD_PARTY_NOWPAYMENTS_API_BASE_URL_DEPLOY = "";

// === AI Model API (single active config: platform default or user override) ===
export const THIRD_PARTY_AI_API_KEY = "";
export const THIRD_PARTY_AI_BASE_URL = "{{THIRD_PARTY_AI_BASE_URL}}";
export const THIRD_PARTY_AI_DEFAULT_MODEL = "{{THIRD_PARTY_AI_DEFAULT_MODEL}}";

// === AI Image (single active config: platform default or user override) ===
export const THIRD_PARTY_AI_IMAGE_API_KEY = "";
export const THIRD_PARTY_AI_IMAGE_BASE_URL = "{{THIRD_PARTY_AI_IMAGE_BASE_URL}}";
export const THIRD_PARTY_AI_IMAGE_DEFAULT_MODEL = "{{THIRD_PARTY_AI_IMAGE_DEFAULT_MODEL}}";
