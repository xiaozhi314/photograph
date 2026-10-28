"use client";

import React, { useState } from "react";
import { ExhibitionRecordItem } from "@/frontend/types/ArtistExhibitions";
import { ChevronDown, ExternalLink, BookOpen, Quote } from "lucide-react";
interface PressMonographShowcaseProps {
  exhibitions: ExhibitionRecordItem[];
}
export default function PressMonographShowcase({
  exhibitions
}: PressMonographShowcaseProps) {
  // Pre-expand first two press items dynamically or by fallback ID
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "exh-2024-venice": true,
    "exh-2023-mori": true
  });
  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter exhibition records that contain rich press mentions or monograph reviews
  const pressItems = exhibitions.filter(item => item.pressMention && item.pressMention.trim().length > 0);
  return <section data-controller-name="Press and Monograph Showcase" className="border-t border-border bg-card text-card-foreground py-20 lg:py-28" data-api-unique-id='pressmonographshowcase-r7966a505762ece1d-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='pressmonographshowcase-r699976868710b2d3-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" data-api-unique-id='pressmonographshowcase-re42d22975571dffa-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
          {/* Left Column: Calm Editorial Lead & Philosophy */}
          <div className="lg:col-span-5 min-w-0" data-api-unique-id='pressmonographshowcase-rd48a1e819cfc4fa5-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
            <div className="space-y-6 lg:sticky lg:top-24" data-api-unique-id='pressmonographshowcase-rccdf86f343ffdd78-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-mono" data-api-unique-id='pressmonographshowcase-rfbc958be12e6a08e-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                <BookOpen className="w-3.5 h-3.5 text-primary" data-api-unique-id='pressmonographshowcase-r2c9030c83dbb9c56-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' />
                <span data-api-unique-id='pressmonographshowcase-r0617b62e1db6c33e-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>Critical Exegesis & Catalogues</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-card-foreground leading-tight" data-api-unique-id='pressmonographshowcase-rd28e93d2e4ed6ca0-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                Academic critiques, archival catalogues, and monograph reviews.
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base font-serif" data-api-unique-id='pressmonographshowcase-r10e7b3f133cb3e26-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                A curated survey of peer-reviewed critical commentary on Julian
                Vane’s analog fiber prints. From the architectural discourse of{" "}
                <em data-api-unique-id='pressmonographshowcase-r1c6a431f030ffad9-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>Domus</em> and <em data-api-unique-id='pressmonographshowcase-r02a7271afca053bf-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>Casabella</em> to museum catalog essays by
                the curators of the Mori Art Museum and Venice Architecture
                Biennale.
              </p>

              <div className="p-6 rounded-lg bg-background text-foreground border border-border space-y-3" data-api-unique-id='pressmonographshowcase-r4f4553d2cf2b26d7-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                <Quote className="w-5 h-5 text-primary opacity-60" data-api-unique-id='pressmonographshowcase-rc0c7a7a875bbde9d-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' />
                <p className="text-sm italic font-serif leading-relaxed" data-api-unique-id='pressmonographshowcase-r72d6d7f142ee8fd9-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                  &ldquo;Vane’s medium-format silver gelatin exposures treat concrete
                  and light as co-equal building blocks. His monographs are
                  essential pedagogical objects for contemporary spatial
                  study.&rdquo;
                </p>
                <div className="pt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground" data-api-unique-id='pressmonographshowcase-r56beeb40d5445730-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                  — Prof. Roberto C. Varisco, <em data-api-unique-id='pressmonographshowcase-re6888baba6504ab4-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>Milan Polytecnico Press</em>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-muted-foreground" data-api-unique-id='pressmonographshowcase-r1f7d5ecf2f00aa2b-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
                Edition Documentation · Darkroom Atelier 04 Archives
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Cards for Critical Press Excerpts */}
          <div className="lg:col-span-7 min-w-0 space-y-4" data-api-unique-id='pressmonographshowcase-r0a8957fadcb71170-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase'>
            {pressItems.map((item, index) => {
            const isExpanded = !!expandedIds[item.id];
            return <article key={item.id} className="rounded-xl border border-border bg-background text-foreground transition-all duration-200 overflow-hidden" data-api-unique-id='pressmonographshowcase-r01f63c98419a90bc-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                  <button type="button" onClick={() => toggleExpand(item.id)} aria-expanded={isExpanded} className="w-full text-left p-6 flex items-start justify-between gap-4 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='pressmonographshowcase-r7ccd78942522ef4c-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                    <div className="min-w-0 flex-1 space-y-1.5" data-api-unique-id='pressmonographshowcase-ra7f2199a3dd8321b-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground" data-api-unique-id='pressmonographshowcase-r4637a383c5950133-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                        <span className="text-primary font-semibold" data-api-unique-id='pressmonographshowcase-r66c59163e44ff05b-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                          [PUB 0{index + 1}]
                        </span>
                        <span data-api-unique-id='pressmonographshowcase-r0699d3ef1c3d609b-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>·</span>
                        <span data-api-unique-id='pressmonographshowcase-r71b0d9d4ecac16b2-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' data-api-bind-info={`pressItems-${index}-year`} data-api-map-var-name='item'>{item.year}</span>
                        <span data-api-unique-id='pressmonographshowcase-r9ff847937826e83a-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>·</span>
                        <span className="uppercase" data-api-unique-id='pressmonographshowcase-r8e363dcad78f4c4f-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' data-api-bind-info={`pressItems-${index}-institution`} data-api-map-var-name='item'>{item.institution}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium text-foreground tracking-tight" data-api-unique-id='pressmonographshowcase-rbcf9e7df14037e34-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' data-api-bind-info={`pressItems-${index}-title`} data-api-map-var-name='item'>
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground" data-api-unique-id='pressmonographshowcase-ra0321693699a0fbd-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' data-api-bind-info={`pressItems-${index}-city`} data-api-map-var-name='item'>
                        Location: {item.city}
                      </p>
                    </div>

                    <div className={`shrink-0 p-2 rounded-full border border-border text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180 bg-muted" : "bg-card"}`} data-api-unique-id='pressmonographshowcase-r0f1916311d6b3cbc-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                      <ChevronDown className="w-4 h-4" data-api-unique-id='pressmonographshowcase-r8da68b12eb2f6d60-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' />
                    </div>
                  </button>

                  {isExpanded && <div className="px-6 pb-6 pt-2 border-t border-border/60 bg-muted/20 space-y-4 animate-in fade-in duration-200" data-api-unique-id='pressmonographshowcase-r00517ab497715c35-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                      <div className="space-y-2" data-api-unique-id='pressmonographshowcase-r23716c8a1d33b24d-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                        <div className="text-xs font-mono uppercase tracking-wider text-primary" data-api-unique-id='pressmonographshowcase-rc27458b7b1676219-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                          Curatorial Review & Press Mention
                        </div>
                        <blockquote className="text-sm sm:text-base font-serif italic text-foreground leading-relaxed pl-3 border-l-2 border-primary" data-api-unique-id='pressmonographshowcase-rc8e6e3838934ce75-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' data-api-bind-info={`pressItems-${index}-pressMention`} data-api-map-var-name='item'>
                          &ldquo;{item.pressMention}&rdquo;
                        </blockquote>
                      </div>

                      <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 text-xs" data-api-unique-id='pressmonographshowcase-r97689ab85d934c00-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                        <div className="text-muted-foreground font-mono" data-api-unique-id='pressmonographshowcase-rd3b5756227e1ef7b-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                          Format:{" "}
                          <span className="text-foreground" data-api-unique-id='pressmonographshowcase-r5a709b3d8c9c0be0-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                            {item.exhibitionType.replace("_", " ")}
                          </span>
                        </div>

                        {item.externalUrl && <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='pressmonographshowcase-r33d38cd07e1084a3-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>
                            <span data-api-unique-id='pressmonographshowcase-rab4f92bf4c0c4dbb-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1'>Open Monograph Archive</span>
                            <ExternalLink className="w-3.5 h-3.5" data-api-unique-id='pressmonographshowcase-re214de4bb4e52371-s1586234615' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/PressMonographShowcase' data-api-in-loop='1' />
                          </a>}
                      </div>
                    </div>}
                </article>;
          })}
          </div>
        </div>
      </div>
    </section>;
}