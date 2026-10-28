/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/AdminHome';
export type * from '../../../../../src/backend/types/AdminHome';

type Actions = typeof import('../../../../../src/backend/actions/AdminHome');
export const getAdminHomeOverview = (...args: Parameters<Actions["getAdminHomeOverview"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getAdminHomeOverview"]>>>("src.backend.actions.AdminHome.getAdminHomeOverview", ...args);
export const toggleCollectionVisibility = (...args: Parameters<Actions["toggleCollectionVisibility"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleCollectionVisibility"]>>>("src.backend.actions.AdminHome.toggleCollectionVisibility", ...args);
export const toggleCollectionFeatured = (...args: Parameters<Actions["toggleCollectionFeatured"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleCollectionFeatured"]>>>("src.backend.actions.AdminHome.toggleCollectionFeatured", ...args);
export const createPhotoCollection = (...args: Parameters<Actions["createPhotoCollection"]>) => 
  rpcCall<Awaited<ReturnType<Actions["createPhotoCollection"]>>>("src.backend.actions.AdminHome.createPhotoCollection", ...args);
export const updateInquiryStatus = (...args: Parameters<Actions["updateInquiryStatus"]>) => 
  rpcCall<Awaited<ReturnType<Actions["updateInquiryStatus"]>>>("src.backend.actions.AdminHome.updateInquiryStatus", ...args);
export const sendInquiryReply = (...args: Parameters<Actions["sendInquiryReply"]>) => 
  rpcCall<Awaited<ReturnType<Actions["sendInquiryReply"]>>>("src.backend.actions.AdminHome.sendInquiryReply", ...args);
