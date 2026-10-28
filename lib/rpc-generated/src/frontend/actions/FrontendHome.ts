/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/FrontendHome';
export type * from '../../../../../src/frontend/types/FrontendHome';

type Actions = typeof import('../../../../../src/frontend/actions/FrontendHome');
export const getHomeInitialData = (...args: Parameters<Actions["getHomeInitialData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getHomeInitialData"]>>>("src.frontend.actions.FrontendHome.getHomeInitialData", ...args);
export const submitCommissionInquiry = (...args: Parameters<Actions["submitCommissionInquiry"]>) => 
  rpcCall<Awaited<ReturnType<Actions["submitCommissionInquiry"]>>>("src.frontend.actions.FrontendHome.submitCommissionInquiry", ...args);
