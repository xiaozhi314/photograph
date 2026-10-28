/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/ClientLogin';
export type * from '../../../../../src/frontend/types/ClientLogin';

type Actions = typeof import('../../../../../src/frontend/actions/ClientLogin');
export const authenticateClient = (...args: Parameters<Actions["authenticateClient"]>) => 
  rpcCall<Awaited<ReturnType<Actions["authenticateClient"]>>>("src.frontend.actions.ClientLogin.authenticateClient", ...args);
