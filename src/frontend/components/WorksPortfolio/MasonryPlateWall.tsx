"use client";

import React, { useState } from "react";
import EditableImg from "@/@base/EditableImg";
import { PhotographyWorkItem } from "@/frontend/types/WorksPortfolio";
import { Maximize2, Compass } from "lucide-react";
interface MasonryPlateWallProps {
  works: PhotographyWorkItem[];
  selectedCategorySlug?: string;
  onSelectWork: (work: PhotographyWorkItem) => void;
}
export default function MasonryPlateWall({
  works,
  selectedCategorySlug,
  onSelectWork
}: MasonryPlateWallProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  if (works.length === 0) {
    return <div className="w-full py-24 text-center" data-api-unique-id='masonryplatewall-r3c6818d3b69021bf-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall'>
        <p className="text-base text-muted-foreground font-light" data-api-unique-id='masonryplatewall-re298e24e3ea7cef8-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall'>
          No plates currently cataloged under this archival genre.
        </p>
      </div>;
  }
  return <div className="w-full" data-api-unique-id='masonryplatewall-r4a547dd9153c6103-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall'>
      {/* Dynamic multi-column masonry wall */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 [column-fill:_balance]" data-api-unique-id='masonryplatewall-r5fbbef1a6452d792-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall'>
        {works.map((work, index) => {
        const isLandscape = work.aspectRatio === "LANDSCAPE";
        const isHovered = hoveredId === work.id;
        return <div key={work.id} className="break-inside-avoid mb-6 sm:mb-8 group" onMouseEnter={() => setHoveredId(work.id)} onMouseLeave={() => setHoveredId(null)} data-api-unique-id='masonryplatewall-r0778d5979f1b7231-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
              <article onClick={() => onSelectWork(work)} className="cursor-pointer relative overflow-hidden rounded-sm border border-border bg-card text-card-foreground shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" tabIndex={0} role="button" aria-label={`Inspect photographic plate: ${work.title}, ${work.year}`} onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectWork(work);
            }
          }} data-api-unique-id='masonryplatewall-re97c57f9cf8f268c-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                {/* Plate Presentation Mount / Mat Board */}
                <div className="p-3 sm:p-4 bg-card" data-api-unique-id='masonryplatewall-rd28c1baae5515bb7-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                  {/* Photo Frame Container with Natural Aspect Ratio */}
                  <div className={`relative w-full overflow-hidden bg-muted/60 ${isLandscape ? "aspect-[16/10]" : "aspect-[4/5]"}`} data-api-unique-id='masonryplatewall-rdce4e937e607de4f-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                    <EditableImg src={work.imageUrl || undefined} propKey={`portfolio-plate-${work.id}`} needLargeImage={index < 3} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" alt={work.title} data-api-unique-id='masonryplatewall-rb3a3b55241168f3a-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' />

                    {/* Darkroom Edge Film Annotation Notch */}
                    <div className="absolute top-2.5 left-2.5 pointer-events-none flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity" data-api-unique-id='masonryplatewall-r4852784e97288709-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                      <span className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-xs bg-black/60 text-white backdrop-blur-xs" data-api-unique-id='masonryplatewall-r7a6b6939476b82ea-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                        {work.aspectRatio === "LANDSCAPE" ? "6×7 EXP" : "4×5 SHEET"}
                      </span>
                      {work.isFeatured && <span className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-xs bg-primary text-primary-foreground" data-api-unique-id='masonryplatewall-r0b3ea745831f36d4-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                          Folio Master
                        </span>}
                    </div>

                    {/* Inspection Hover Overlay Trigger Button */}
                    <div className={`absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`} data-api-unique-id='masonryplatewall-rd60dcb6aca3e160f-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-background/95 text-foreground text-xs font-mono uppercase tracking-widest shadow-md" data-api-unique-id='masonryplatewall-rb62582c2031b4571-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                        <Maximize2 className="w-3.5 h-3.5 text-primary" data-api-unique-id='masonryplatewall-r4733d76edea4b0b8-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' />
                        Inspect Plate
                      </span>
                    </div>
                  </div>

                  {/* Archival Provenance Plate Label (Museum Cartouche) */}
                  <div className="mt-3.5 pt-3 border-t border-border/70 flex flex-col gap-1.5 min-w-0" data-api-unique-id='masonryplatewall-r6639dacec03c39ea-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                    <div className="flex items-baseline justify-between gap-2 min-w-0" data-api-unique-id='masonryplatewall-raa0ca311c13d0bb4-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                      <h2 className="font-serif text-base sm:text-lg font-medium tracking-tight text-card-foreground truncate" data-api-unique-id='masonryplatewall-r2ff0e884dfff7687-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' data-api-bind-info={`works-${index}-title`} data-api-map-var-name='work'>
                        {work.title}
                      </h2>
                      <span className="font-mono text-xs text-muted-foreground shrink-0" data-api-unique-id='masonryplatewall-r048a1f12cbd2447e-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' data-api-bind-info={`works-${index}-year`} data-api-map-var-name='work'>
                        {work.year}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground font-mono" data-api-unique-id='masonryplatewall-r0a25fc8362487d5b-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                      <span className="truncate max-w-[65%] flex items-center gap-1" data-api-unique-id='masonryplatewall-r0e1125faf00b460c-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' data-api-bind-info={`works-${index}-location`} data-api-map-var-name='work'>
                        <Compass className="w-3 h-3 shrink-0 text-primary" data-api-unique-id='masonryplatewall-rb1107af709bcbf9a-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' />
                        {work.location}
                      </span>
                      <span className="text-border shrink-0" data-api-unique-id='masonryplatewall-r16493f441db5f6c9-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>/</span>
                      <span className="truncate shrink-0" data-api-unique-id='masonryplatewall-r1cafed5b722c8e2c-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' data-api-bind-info={`works-${index}-seriesName`} data-api-map-var-name='work'>{work.seriesName}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-muted-foreground/90 font-mono" data-api-unique-id='masonryplatewall-r7d66acefe59161e7-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1'>
                      <span className="truncate" data-api-unique-id='masonryplatewall-r562bbd035d32d3f9-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' data-api-bind-info={`works-${index}-medium`} data-api-map-var-name='work'>{work.medium}</span>
                      <span className="shrink-0 text-primary font-medium" data-api-unique-id='masonryplatewall-r663422141ed759a9-s1508768467' data-api-unique-page-name='src/frontend/components/WorksPortfolio/MasonryPlateWall' data-api-in-loop='1' data-api-bind-info={`works-${index}-edition`} data-api-map-var-name='work'>{work.edition}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>;
      })}
      </div>
    </div>;
}