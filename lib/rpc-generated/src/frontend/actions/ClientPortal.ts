/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/ClientPortal';
export type * from '../../../../../src/frontend/types/ClientPortal';

type Actions = typeof import('../../../../../src/frontend/actions/ClientPortal');
export const getClientPortalData = (...args: Parameters<Actions["getClientPortalData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getClientPortalData"]>>>("src.frontend.actions.ClientPortal.getClientPortalData", ...args);
export const updateInquiryClientMessage = (...args: Parameters<Actions["updateInquiryClientMessage"]>) => 
  rpcCall<Awaited<ReturnType<Actions["updateInquiryClientMessage"]>>>("src.frontend.actions.ClientPortal.updateInquiryClientMessage", ...args);
