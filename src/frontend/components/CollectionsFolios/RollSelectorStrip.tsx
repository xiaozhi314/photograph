"use client";

import React from "react";
import type { PhotoCollectionItem } from "@/frontend/types/CollectionsFolios";
import { Sparkles, Film, Compass } from "lucide-react";
interface RollSelectorStripProps {
  folios?: PhotoCollectionItem[];
  collections?: PhotoCollectionItem[];
  activeFolioId?: string;
  activeId?: string;
  onSelectFolio: (id: string) => void;
}
export default function RollSelectorStrip({
  folios,
  collections,
  activeFolioId,
  activeId,
  onSelectFolio
}: RollSelectorStripProps) {
  // Support both props naming for data flow compatibility
  const list = collections || folios || [];
  const currentActiveId = activeId ?? activeFolioId ?? "";

  // Sort by sortOrder ascending as required by curatorial archive rules
  const sortedFolios = [...list].sort((a, b) => a.sortOrder - b.sortOrder);
  return <div data-controller-name="Roll Selector Strip" className="w-full border-y border-border bg-card/60 backdrop-blur-sm" data-api-unique-id='rollselectorstrip-r60bdf54dbf50d7a5-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='rollselectorstrip-r4db12e25cace1e61-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>
        <div className="flex items-center justify-between py-3 border-b border-border/40 text-xs text-muted-foreground uppercase tracking-widest font-mono" data-api-unique-id='rollselectorstrip-r64e5bcd054011b4b-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>
          <div className="flex items-center gap-2" data-api-unique-id='rollselectorstrip-r6aaff6227c032e5b-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>
            <Film className="w-3.5 h-3.5 text-primary" data-api-unique-id='rollselectorstrip-re47652313d37b5b5-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' />
            <span data-api-unique-id='rollselectorstrip-r1cd7c928419e7b9d-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>Curatorial Archive Rolls ({sortedFolios.length})</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground/80" data-api-unique-id='rollselectorstrip-r1dd5f00a02ac9936-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>
            <Compass className="w-3 h-3 text-primary" data-api-unique-id='rollselectorstrip-rbd4741f5d13b544b-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' />
            <span data-api-unique-id='rollselectorstrip-r5fbf2d8fb648edb6-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>Select roll to examine plates & darkroom logs</span>
          </div>
        </div>

        {/* Scrollable Roll Selector Cards */}
        <div className="flex items-stretch gap-3 overflow-x-auto py-3.5 no-scrollbar scroll-smooth" data-api-unique-id='rollselectorstrip-r6c78ff7c6469e19c-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip'>
          {sortedFolios.map((folio, index) => {
          const isActive = folio.id === currentActiveId;
          return <button key={folio.id} type="button" onClick={() => onSelectFolio(folio.id)} aria-pressed={isActive} className={`group flex-shrink-0 text-left transition-all duration-200 rounded-sm border p-3.5 min-w-[240px] sm:min-w-[260px] flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isActive ? "bg-card border-primary ring-1 ring-primary/40 shadow-sm" : "bg-card/40 border-border/80 hover:border-border hover:bg-card"}`} data-api-unique-id='rollselectorstrip-r07b76d80ffac8d6c-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                <div data-api-unique-id='rollselectorstrip-r8826e1d5cf04a4b0-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                  <div className="flex items-center justify-between gap-2 mb-1.5" data-api-unique-id='rollselectorstrip-r567b8940f8b92747-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                    <span className={`font-mono text-xs font-semibold tracking-wider ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`} data-api-unique-id='rollselectorstrip-r70c1a9dd601cf474-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1' data-api-bind-info={`sortedFolios-${index}-rollNumber`} data-api-map-var-name='folio'>
                      {folio.rollNumber}
                    </span>
                    <div className="flex items-center gap-1.5" data-api-unique-id='rollselectorstrip-r8d32d935503f0ce2-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                      {folio.featuredOnHome && <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded-xs bg-primary/10 text-primary uppercase font-medium" data-api-unique-id='rollselectorstrip-rba3ea6d3b4011e15-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                          <Sparkles className="w-2.5 h-2.5" data-api-unique-id='rollselectorstrip-r420684bf0a039712-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1' />
                          <span data-api-unique-id='rollselectorstrip-r907ac162b0b38b56-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>Featured</span>
                        </span>}
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-xs bg-muted text-muted-foreground border border-border/60" data-api-unique-id='rollselectorstrip-r66246f3ddd96a869-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                        {folio.aspect === "PORTRAIT" ? "6x7" : "6x6"}
                      </span>
                    </div>
                  </div>

                  <h3 className={`font-serif text-sm font-medium leading-snug line-clamp-1 transition-colors ${isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`} data-api-unique-id='rollselectorstrip-rf2971d5206602bd3-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1' data-api-bind-info={`sortedFolios-${index}-title`} data-api-map-var-name='folio'>
                    {folio.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground" data-api-unique-id='rollselectorstrip-rb360871291e5c6b8-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                  <span className="truncate max-w-[170px]" title={folio.medium} data-api-unique-id='rollselectorstrip-re30b516ebebe1a29-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1'>
                    {folio.medium.split("/")[0]?.trim() || folio.medium}
                  </span>
                  <span className="font-mono text-[10px] font-medium text-foreground/70 shrink-0" data-api-unique-id='rollselectorstrip-r3a8239835b34dc09-s2839542631' data-api-unique-page-name='src/frontend/components/CollectionsFolios/RollSelectorStrip' data-api-in-loop='1' data-api-bind-info={`sortedFolios-${index}-imageCount`} data-api-map-var-name='folio'>
                    {folio.imageCount} plates
                  </span>
                </div>
              </button>;
        })}
        </div>
      </div>
    </div>;
}