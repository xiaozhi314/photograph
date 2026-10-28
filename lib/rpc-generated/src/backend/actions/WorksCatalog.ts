/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/WorksCatalog';
export type * from '../../../../../src/backend/types/WorksCatalog';

type Actions = typeof import('../../../../../src/backend/actions/WorksCatalog');
export const getWorksCatalogData = (...args: Parameters<Actions["getWorksCatalogData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getWorksCatalogData"]>>>("src.backend.actions.WorksCatalog.getWorksCatalogData", ...args);
export const savePhotographyWork = (...args: Parameters<Actions["savePhotographyWork"]>) => 
  rpcCall<Awaited<ReturnType<Actions["savePhotographyWork"]>>>("src.backend.actions.WorksCatalog.savePhotographyWork", ...args);
export const toggleFeaturedWork = (...args: Parameters<Actions["toggleFeaturedWork"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleFeaturedWork"]>>>("src.backend.actions.WorksCatalog.toggleFeaturedWork", ...args);
export const toggleArchivedWork = (...args: Parameters<Actions["toggleArchivedWork"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleArchivedWork"]>>>("src.backend.actions.WorksCatalog.toggleArchivedWork", ...args);
export const deletePhotographyWork = (...args: Parameters<Actions["deletePhotographyWork"]>) => 
  rpcCall<Awaited<ReturnType<Actions["deletePhotographyWork"]>>>("src.backend.actions.WorksCatalog.deletePhotographyWork", ...args);
export const savePhotoCategory = (...args: Parameters<Actions["savePhotoCategory"]>) => 
  rpcCall<Awaited<ReturnType<Actions["savePhotoCategory"]>>>("src.backend.actions.WorksCatalog.savePhotoCategory", ...args);
export const reorderPhotoCategories = (...args: Parameters<Actions["reorderPhotoCategories"]>) => 
  rpcCall<Awaited<ReturnType<Actions["reorderPhotoCategories"]>>>("src.backend.actions.WorksCatalog.reorderPhotoCategories", ...args);
export const reorderPhotographyWorks = (...args: Parameters<Actions["reorderPhotographyWorks"]>) => 
  rpcCall<Awaited<ReturnType<Actions["reorderPhotographyWorks"]>>>("src.backend.actions.WorksCatalog.reorderPhotographyWorks", ...args);
