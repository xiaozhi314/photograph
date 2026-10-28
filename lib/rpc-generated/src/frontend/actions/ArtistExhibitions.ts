/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/ArtistExhibitions';
export type * from '../../../../../src/frontend/types/ArtistExhibitions';

type Actions = typeof import('../../../../../src/frontend/actions/ArtistExhibitions');
export const getArtistExhibitionsData = (...args: Parameters<Actions["getArtistExhibitionsData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getArtistExhibitionsData"]>>>("src.frontend.actions.ArtistExhibitions.getArtistExhibitionsData", ...args);
