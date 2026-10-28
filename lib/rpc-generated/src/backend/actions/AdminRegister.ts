/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/AdminRegister';
export type * from '../../../../../src/backend/types/AdminRegister';

type Actions = typeof import('../../../../../src/backend/actions/AdminRegister');
export const registerCuratorAdmin = (...args: Parameters<Actions["registerCuratorAdmin"]>) => 
  rpcCall<Awaited<ReturnType<Actions["registerCuratorAdmin"]>>>("src.backend.actions.AdminRegister.registerCuratorAdmin", ...args);
