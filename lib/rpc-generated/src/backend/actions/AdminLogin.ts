/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/AdminLogin';
export type * from '../../../../../src/backend/types/AdminLogin';

type Actions = typeof import('../../../../../src/backend/actions/AdminLogin');
export const loginCuratorAdmin = (...args: Parameters<Actions["loginCuratorAdmin"]>) => 
  rpcCall<Awaited<ReturnType<Actions["loginCuratorAdmin"]>>>("src.backend.actions.AdminLogin.loginCuratorAdmin", ...args);
