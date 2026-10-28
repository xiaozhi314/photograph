/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/backend/types/StudioSettings';
export type * from '../../../../../src/backend/types/StudioSettings';

type Actions = typeof import('../../../../../src/backend/actions/StudioSettings');
export const getStudioSettingsData = (...args: Parameters<Actions["getStudioSettingsData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getStudioSettingsData"]>>>("src.backend.actions.StudioSettings.getStudioSettingsData", ...args);
export const updateStudioBio = (...args: Parameters<Actions["updateStudioBio"]>) => 
  rpcCall<Awaited<ReturnType<Actions["updateStudioBio"]>>>("src.backend.actions.StudioSettings.updateStudioBio", ...args);
export const upsertServicePackage = (...args: Parameters<Actions["upsertServicePackage"]>) => 
  rpcCall<Awaited<ReturnType<Actions["upsertServicePackage"]>>>("src.backend.actions.StudioSettings.upsertServicePackage", ...args);
export const toggleServicePackageActive = (...args: Parameters<Actions["toggleServicePackageActive"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleServicePackageActive"]>>>("src.backend.actions.StudioSettings.toggleServicePackageActive", ...args);
export const deleteServicePackage = (...args: Parameters<Actions["deleteServicePackage"]>) => 
  rpcCall<Awaited<ReturnType<Actions["deleteServicePackage"]>>>("src.backend.actions.StudioSettings.deleteServicePackage", ...args);
export const upsertExhibitionRecord = (...args: Parameters<Actions["upsertExhibitionRecord"]>) => 
  rpcCall<Awaited<ReturnType<Actions["upsertExhibitionRecord"]>>>("src.backend.actions.StudioSettings.upsertExhibitionRecord", ...args);
export const deleteExhibitionRecord = (...args: Parameters<Actions["deleteExhibitionRecord"]>) => 
  rpcCall<Awaited<ReturnType<Actions["deleteExhibitionRecord"]>>>("src.backend.actions.StudioSettings.deleteExhibitionRecord", ...args);
export const upsertClientTestimonial = (...args: Parameters<Actions["upsertClientTestimonial"]>) => 
  rpcCall<Awaited<ReturnType<Actions["upsertClientTestimonial"]>>>("src.backend.actions.StudioSettings.upsertClientTestimonial", ...args);
export const toggleTestimonialFeatured = (...args: Parameters<Actions["toggleTestimonialFeatured"]>) => 
  rpcCall<Awaited<ReturnType<Actions["toggleTestimonialFeatured"]>>>("src.backend.actions.StudioSettings.toggleTestimonialFeatured", ...args);
export const deleteClientTestimonial = (...args: Parameters<Actions["deleteClientTestimonial"]>) => 
  rpcCall<Awaited<ReturnType<Actions["deleteClientTestimonial"]>>>("src.backend.actions.StudioSettings.deleteClientTestimonial", ...args);
