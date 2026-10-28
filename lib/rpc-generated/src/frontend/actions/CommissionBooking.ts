/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/CommissionBooking';
export type * from '../../../../../src/frontend/types/CommissionBooking';

type Actions = typeof import('../../../../../src/frontend/actions/CommissionBooking');
export const getCommissionBookingInitData = (...args: Parameters<Actions["getCommissionBookingInitData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getCommissionBookingInitData"]>>>("src.frontend.actions.CommissionBooking.getCommissionBookingInitData", ...args);
export const createCommissionInquiry = (...args: Parameters<Actions["createCommissionInquiry"]>) => 
  rpcCall<Awaited<ReturnType<Actions["createCommissionInquiry"]>>>("src.frontend.actions.CommissionBooking.createCommissionInquiry", ...args);
