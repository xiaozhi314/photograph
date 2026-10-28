/* Auto-generated */
import { rpcCall } from '@/tools/rpc-client';
import type * as Types from '../../../../../src/frontend/types/WorksPortfolio';
export type * from '../../../../../src/frontend/types/WorksPortfolio';

type Actions = typeof import('../../../../../src/frontend/actions/WorksPortfolio');
export const getPortfolioData = (...args: Parameters<Actions["getPortfolioData"]>) => 
  rpcCall<Awaited<ReturnType<Actions["getPortfolioData"]>>>("src.frontend.actions.WorksPortfolio.getPortfolioData", ...args);
