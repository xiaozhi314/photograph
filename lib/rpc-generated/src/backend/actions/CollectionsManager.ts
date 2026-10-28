/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/CollectionsManager';
export type * from '../../../../../src/backend/types/CollectionsManager';

type Actions = typeof import('../../../../../src/backend/actions/CollectionsManager');
export const getCollectionsManagerData = (...args: Parameters<Actions["getCollectionsManagerData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getCollectionsManagerData"]>>>("src.backend.actions.CollectionsManager.getCollectionsManagerData", ...args);
export const toggleCollectionVisibility = (...args: Parameters<Actions["toggleCollectionVisibility"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleCollectionVisibility"]>>>("src.backend.actions.CollectionsManager.toggleCollectionVisibility", ...args);
export const toggleCollectionFeatured = (...args: Parameters<Actions["toggleCollectionFeatured"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleCollectionFeatured"]>>>("src.backend.actions.CollectionsManager.toggleCollectionFeatured", ...args);
export const saveCollectionFolio = (...args: Parameters<Actions["saveCollectionFolio"]>) => 
  rpcCall<Awaited<ReturnType<Actions["saveCollectionFolio"]>>>("src.backend.actions.CollectionsManager.saveCollectionFolio", ...args);
