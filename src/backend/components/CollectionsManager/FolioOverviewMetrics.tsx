"use client";

import React from "react";
import { FolderKanban, Eye, Sparkles, Layers, Plus } from "lucide-react";
import { CollectionsOverviewStats } from "@/backend/types/CollectionsManager";
interface FolioOverviewMetricsProps {
  stats: CollectionsOverviewStats;
  onNewFolioClick?: () => void;
  onOpenNewFolioDrawer?: () => void;
}
export default function FolioOverviewMetrics({
  stats,
  onNewFolioClick,
  onOpenNewFolioDrawer
}: FolioOverviewMetricsProps) {
  const handleCreateClick = () => {
    if (onNewFolioClick) {
      onNewFolioClick();
    } else if (onOpenNewFolioDrawer) {
      onOpenNewFolioDrawer();
    }
  };
  return <section data-controller-name="Folio Curatorial Operations Overview" className="w-full flex flex-col gap-4" data-api-unique-id='foliooverviewmetrics-rfdd8109f1212a523-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
      {/* Top Header Row with Title and Primary Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1 border-b border-border" data-api-unique-id='foliooverviewmetrics-r80c7cb2f1e3926f0-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
        <div className="min-w-0" data-api-unique-id='foliooverviewmetrics-rdaff53c08b39150e-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground" data-api-unique-id='foliooverviewmetrics-r06abd832e114a90f-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            Collections & Folios Management
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5" data-api-unique-id='foliooverviewmetrics-rc4d7c6ceb456e88a-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            Negative index catalog, curatorial plate counts, wall visibility, and homepage highlight switches
          </p>
        </div>
        <div className="shrink-0" data-api-unique-id='foliooverviewmetrics-r4a88897e5f5a048d-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
          <button type="button" onClick={handleCreateClick} className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-primary text-primary-foreground text-xs sm:text-sm font-medium shadow-sm hover:bg-primary/90 active:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='foliooverviewmetrics-r64ed08eadf209b62-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <Plus className="w-4 h-4" data-api-unique-id='foliooverviewmetrics-rebdc8595fb5b1435-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics' />
            <span data-api-unique-id='foliooverviewmetrics-raf25923ad5475ddd-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>New Series Folio</span>
          </button>
        </div>
      </div>

      {/* 4-KPI Metric Cards Grid: max 2 cols on mobile/tablet, 3-4 cols only on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5" data-api-unique-id='foliooverviewmetrics-r436ca93398236bd2-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
        {/* Metric 1: Total Collections */}
        <div className="bg-card text-card-foreground p-3.5 rounded-lg border border-border flex flex-col justify-between shadow-sm min-w-0" data-api-unique-id='foliooverviewmetrics-r530e14b1f4cb75f2-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
          <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='foliooverviewmetrics-r1c6b7d7acc23d9c4-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-xs font-medium text-muted-foreground truncate" data-api-unique-id='foliooverviewmetrics-r65f85c64911939d4-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Total Series Folios
            </span>
            <span className="p-1.5 rounded-md bg-secondary text-secondary-foreground shrink-0" data-api-unique-id='foliooverviewmetrics-r69b38ea6f24b14ff-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              <FolderKanban className="w-4 h-4 text-primary" data-api-unique-id='foliooverviewmetrics-r0bba7380c6e48e35-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics' />
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2" data-api-unique-id='foliooverviewmetrics-r9187c4849f77d48d-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-2xl font-bold font-mono tracking-tight text-card-foreground" data-api-unique-id='foliooverviewmetrics-r749548bc8ba96188-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              {stats?.totalCollections ?? 0}
            </span>
            <span className="text-[11px] text-muted-foreground" data-api-unique-id='foliooverviewmetrics-r4039a007b4759c02-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>archived series</span>
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground border-t border-border/60 pt-2 flex items-center justify-between" data-api-unique-id='foliooverviewmetrics-r4861f499e2482e61-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span data-api-unique-id='foliooverviewmetrics-r1b6e616e696c4ffa-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>Roll index cataloged</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-secondary text-secondary-foreground" data-api-unique-id='foliooverviewmetrics-r6bc3cd28df35b683-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Indexed
            </span>
          </div>
        </div>

        {/* Metric 2: Wall Visibility */}
        <div className="bg-card text-card-foreground p-3.5 rounded-lg border border-border flex flex-col justify-between shadow-sm min-w-0" data-api-unique-id='foliooverviewmetrics-r618684b77779227c-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
          <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='foliooverviewmetrics-rd85c37525a082fe6-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-xs font-medium text-muted-foreground truncate" data-api-unique-id='foliooverviewmetrics-r2d08ddc1ed9cbcf1-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Public Wall Visible
            </span>
            <span className="p-1.5 rounded-md bg-secondary text-secondary-foreground shrink-0" data-api-unique-id='foliooverviewmetrics-ra51f103279c7a315-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" data-api-unique-id='foliooverviewmetrics-r1c438b362571df6d-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics' />
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2" data-api-unique-id='foliooverviewmetrics-r885ce219e2b85cff-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-2xl font-bold font-mono tracking-tight text-card-foreground" data-api-unique-id='foliooverviewmetrics-r37f903e798a1a739-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              {stats?.visibleOnWallCount ?? 0}
            </span>
            <span className="text-[11px] text-muted-foreground" data-api-unique-id='foliooverviewmetrics-r184b6a3004167497-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              / {stats?.totalCollections ?? 0} on wall
            </span>
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground border-t border-border/60 pt-2 flex items-center justify-between" data-api-unique-id='foliooverviewmetrics-r1ed82657a127bae4-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span data-api-unique-id='foliooverviewmetrics-rd122071ef7ec8841-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>Public gallery route</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" data-api-unique-id='foliooverviewmetrics-r67733b611922f611-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Active Sync
            </span>
          </div>
        </div>

        {/* Metric 3: Featured on Home */}
        <div className="bg-card text-card-foreground p-3.5 rounded-lg border border-border flex flex-col justify-between shadow-sm min-w-0" data-api-unique-id='foliooverviewmetrics-rafd6b318a32978e6-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
          <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='foliooverviewmetrics-re54559daf3d187dc-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-xs font-medium text-muted-foreground truncate" data-api-unique-id='foliooverviewmetrics-r44561c0c41175205-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Pinned on Homepage
            </span>
            <span className="p-1.5 rounded-md bg-secondary text-secondary-foreground shrink-0" data-api-unique-id='foliooverviewmetrics-rf7d8ad469327ad30-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              <Sparkles className="w-4 h-4 text-amber-500" data-api-unique-id='foliooverviewmetrics-r0658c8d3b973c177-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics' />
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2" data-api-unique-id='foliooverviewmetrics-r92521e850a233a16-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-2xl font-bold font-mono tracking-tight text-card-foreground" data-api-unique-id='foliooverviewmetrics-r35eb7be5ac2ad6a4-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              {stats?.featuredOnHomeCount ?? 0}
            </span>
            <span className="text-[11px] text-muted-foreground" data-api-unique-id='foliooverviewmetrics-rcccefbbffabe075f-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>curated highlights</span>
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground border-t border-border/60 pt-2 flex items-center justify-between" data-api-unique-id='foliooverviewmetrics-r5896a6ddd1f7e575-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span data-api-unique-id='foliooverviewmetrics-r7778318b03a98aca-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>Portfolio hero reel</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-500" data-api-unique-id='foliooverviewmetrics-rd72722a1b08df403-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Featured
            </span>
          </div>
        </div>

        {/* Metric 4: Total Master Plates */}
        <div className="bg-card text-card-foreground p-3.5 rounded-lg border border-border flex flex-col justify-between shadow-sm min-w-0" data-api-unique-id='foliooverviewmetrics-reaa641544c90bcbe-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
          <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='foliooverviewmetrics-r4fb30018b99b16c2-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-xs font-medium text-muted-foreground truncate" data-api-unique-id='foliooverviewmetrics-r35a0eba5d34087d1-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Master Plates Cataloged
            </span>
            <span className="p-1.5 rounded-md bg-secondary text-secondary-foreground shrink-0" data-api-unique-id='foliooverviewmetrics-r0ef240072f09aa00-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              <Layers className="w-4 h-4 text-sky-500" data-api-unique-id='foliooverviewmetrics-rf6ff8a72cd770923-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics' />
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2" data-api-unique-id='foliooverviewmetrics-rfddb18d7a55fe594-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span className="text-2xl font-bold font-mono tracking-tight text-card-foreground" data-api-unique-id='foliooverviewmetrics-r85f5f4b09c3fecb7-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              {stats?.totalCatalogedPlates ?? 0}
            </span>
            <span className="text-[11px] text-muted-foreground" data-api-unique-id='foliooverviewmetrics-rb3975939df8c561f-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>silver gelatin works</span>
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground border-t border-border/60 pt-2 flex items-center justify-between" data-api-unique-id='foliooverviewmetrics-rbb58c7b5c05439f7-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
            <span data-api-unique-id='foliooverviewmetrics-rabd86632cf480213-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>Cross-referenced DB</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-500" data-api-unique-id='foliooverviewmetrics-rb4751a558a9da03a-s2368030385' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioOverviewMetrics'>
              Verified
            </span>
          </div>
        </div>
      </div>
    </section>;
}