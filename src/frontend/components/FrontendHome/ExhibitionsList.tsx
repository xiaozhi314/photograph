"use client";

import React from "react";
import type { ExhibitionRecord } from "@/frontend/types/FrontendHome";
import { ArrowUpRight } from "lucide-react";
interface ExhibitionsListProps {
  exhibitions: ExhibitionRecord[];
}
export default function ExhibitionsList({
  exhibitions
}: ExhibitionsListProps) {
  return <section id="exhibitions" data-controller-name="Exhibitions & Press" className="w-full bg-background border-t border-border/80" data-api-unique-id='exhibitionslist-rdcad3e0b4fc45c05-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24" data-api-unique-id='exhibitionslist-rd5c473ead6017118-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border/60" data-api-unique-id='exhibitionslist-rd9e54333044d4728-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
          <div className="space-y-2" data-api-unique-id='exhibitionslist-rf3b61f9b2d0784a6-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
            <div className="text-xs font-mono uppercase tracking-widest text-primary" data-api-unique-id='exhibitionslist-ra910529b257c5b70-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
              Exhibitions &amp; Publications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-foreground tracking-tight" data-api-unique-id='exhibitionslist-r5598b0e3009a8351-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
              Institutional Showcases &amp; Critical Press
            </h2>
          </div>
          <p className="text-xs font-mono text-muted-foreground md:text-right" data-api-unique-id='exhibitionslist-r50822a12b66275f3-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
            Curated archive 2021 — 2024 · Archival monographs cataloged
          </p>
        </div>

        {/* Clean Line Chronology */}
        <div className="divide-y divide-border/60" data-api-unique-id='exhibitionslist-rfd924768fe46ecf3-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList'>
          {exhibitions.map((exhibit, index) => <article key={exhibit.id} className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors hover:bg-card/40 px-2 sm:px-4 rounded-sm" data-api-unique-id='exhibitionslist-r7be39b2ffd0d6821-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1'>
              {/* Year Column */}
              <div className="md:col-span-2" data-api-unique-id='exhibitionslist-r2077230a4a88ddcd-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1'>
                <span className="text-3xl sm:text-4xl font-display font-light text-primary group-hover:text-primary transition-colors tracking-tight" data-api-unique-id='exhibitionslist-ra99fd5edef1530e0-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' data-api-bind-info={`exhibitions-${index}-year`} data-api-map-var-name='exhibit'>
                  {exhibit.year}
                </span>
                <span className="block text-[11px] font-mono uppercase text-muted-foreground mt-1" data-api-unique-id='exhibitionslist-rdb9f65a50baf6fd4-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1'>
                  {exhibit.type || (exhibit.exhibitionType ? exhibit.exhibitionType.replace("_", " ") : "Exhibition")}
                </span>
              </div>

              {/* Title & Institution */}
              <div className="md:col-span-6 space-y-1" data-api-unique-id='exhibitionslist-ra37a26930b0f36de-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1'>
                <h3 className="text-lg sm:text-xl font-display text-foreground group-hover:text-primary transition-colors tracking-tight" data-api-unique-id='exhibitionslist-r4c9a5a0d4216b35b-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' data-api-bind-info={`exhibitions-${index}-title`} data-api-map-var-name='exhibit'>
                  {exhibit.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body" data-api-unique-id='exhibitionslist-r6884d8a39fe3fa85-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' data-api-bind-info={`exhibitions-${index}-institution`} data-api-map-var-name='exhibit'>
                  {exhibit.institution} · <span className="text-foreground" data-api-unique-id='exhibitionslist-r084455936c9bdc88-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' data-api-bind-info={`exhibitions-${index}-city`} data-api-map-var-name='exhibit'>{exhibit.city}</span>
                </p>
              </div>

              {/* Critical Press Mention Quote */}
              <div className="md:col-span-4 flex items-center justify-between gap-3 text-xs text-muted-foreground font-body italic border-l border-border/60 pl-4 py-1" data-api-unique-id='exhibitionslist-r1f3bf470819bd63f-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1'>
                <span data-api-unique-id='exhibitionslist-rb72b05b5e812b0e7-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' data-api-bind-info={`exhibitions-${index}-pressMention`} data-api-map-var-name='exhibit'>&ldquo;{exhibit.pressMention}&rdquo;</span>
                {exhibit.externalUrl ? <a href={exhibit.externalUrl} target="_blank" rel="noreferrer" className="p-1 hover:text-primary text-border transition-colors shrink-0" aria-label={`View catalog archive for ${exhibit.title}`} data-api-unique-id='exhibitionslist-re58613556478372a-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1'>
                    <ArrowUpRight className="w-4 h-4 group-hover:text-primary shrink-0 transition-colors" data-api-unique-id='exhibitionslist-r77ac95b493b240d5-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' />
                  </a> : <ArrowUpRight className="w-4 h-4 text-border group-hover:text-primary shrink-0 transition-colors" data-api-unique-id='exhibitionslist-r5a8f86570a20418c-s770240078' data-api-unique-page-name='src/frontend/components/FrontendHome/ExhibitionsList' data-api-in-loop='1' />}
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}