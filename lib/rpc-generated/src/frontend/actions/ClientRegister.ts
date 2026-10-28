/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/ClientRegister';
export type * from '../../../../../src/frontend/types/ClientRegister';

type Actions = typeof import('../../../../../src/frontend/actions/ClientRegister');
export const registerClient = (...args: Parameters<Actions["registerClient"]>) => 
  rpcCall<Awaited<ReturnType<Actions["registerClient"]>>>("src.frontend.actions.ClientRegister.registerClient", ...args);
