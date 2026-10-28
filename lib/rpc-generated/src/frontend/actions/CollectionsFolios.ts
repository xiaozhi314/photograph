/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/CollectionsFolios';
export type * from '../../../../../src/frontend/types/CollectionsFolios';

type Actions = typeof import('../../../../../src/frontend/actions/CollectionsFolios');
export const getFoliosPageData = (...args: Parameters<Actions["getFoliosPageData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getFoliosPageData"]>>>("src.frontend.actions.CollectionsFolios.getFoliosPageData", ...args);
export const getWorksByCollectionId = (...args: Parameters<Actions["getWorksByCollectionId"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getWorksByCollectionId"]>>>("src.frontend.actions.CollectionsFolios.getWorksByCollectionId", ...args);
