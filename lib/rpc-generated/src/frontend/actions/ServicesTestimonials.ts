/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/ServicesTestimonials';
export type * from '../../../../../src/frontend/types/ServicesTestimonials';

type Actions = typeof import('../../../../../src/frontend/actions/ServicesTestimonials');
export const getActiveServicePackages = (...args: Parameters<Actions["getActiveServicePackages"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getActiveServicePackages"]>>>("src.frontend.actions.ServicesTestimonials.getActiveServicePackages", ...args);
export const getClientTestimonials = (...args: Parameters<Actions["getClientTestimonials"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getClientTestimonials"]>>>("src.frontend.actions.ServicesTestimonials.getClientTestimonials", ...args);
export const getServicesTestimonialsPageData = (...args: Parameters<Actions["getServicesTestimonialsPageData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getServicesTestimonialsPageData"]>>>("src.frontend.actions.ServicesTestimonials.getServicesTestimonialsPageData", ...args);
