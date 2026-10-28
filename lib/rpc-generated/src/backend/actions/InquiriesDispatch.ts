/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/InquiriesDispatch';
export type * from '../../../../../src/backend/types/InquiriesDispatch';

type Actions = typeof import('../../../../../src/backend/actions/InquiriesDispatch');
export const getInquiriesQueue = (...args: Parameters<Actions["getInquiriesQueue"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getInquiriesQueue"]>>>("src.backend.actions.InquiriesDispatch.getInquiriesQueue", ...args);
export const openInquiryReview = (...args: Parameters<Actions["openInquiryReview"]>) => 
  rpcCall<Awaited<ReturnType<Actions["openInquiryReview"]>>>("src.backend.actions.InquiriesDispatch.openInquiryReview", ...args);
export const dispatchConsultationReply = (...args: Parameters<Actions["dispatchConsultationReply"]>) => 
  rpcCall<Awaited<ReturnType<Actions["dispatchConsultationReply"]>>>("src.backend.actions.InquiriesDispatch.dispatchConsultationReply", ...args);
