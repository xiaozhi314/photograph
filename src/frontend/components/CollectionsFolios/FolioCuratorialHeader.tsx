"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { PhotoCollectionItem } from "@/frontend/types/CollectionsFolios";
import { Aperture, Layers, BookOpen } from "lucide-react";
interface FolioCuratorialHeaderProps {
  folio?: PhotoCollectionItem | null;
  activeCollection?: PhotoCollectionItem | null;
}
export default function FolioCuratorialHeader({
  folio,
  activeCollection
}: FolioCuratorialHeaderProps) {
  const currentFolio = folio || activeCollection;
  if (!currentFolio) {
    return <section data-controller-name="Folio Curatorial Exhibition Header" className="relative w-full border-b border-border bg-background pt-8 pb-12 sm:pt-10 sm:pb-16" data-api-unique-id='foliocuratorialheader-r014c171525a87dee-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='foliocuratorialheader-rd400efc9000abe7e-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
          <div className="flex flex-col items-center justify-center py-16 text-center" data-api-unique-id='foliocuratorialheader-rce687273a1123601-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
            <Aperture className="h-8 w-8 text-muted-foreground/60 animate-pulse" data-api-unique-id='foliocuratorialheader-r5518ce44f5a63c0b-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader' />
            <p className="mt-3 text-sm font-mono tracking-wider text-muted-foreground uppercase" data-api-unique-id='foliocuratorialheader-r8dcc2833b3420855-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
              No Archival Folio Selected
            </p>
          </div>
        </div>
      </section>;
  }
  return <section data-controller-name="Folio Curatorial Exhibition Header" className="relative w-full border-b border-border bg-background pt-8 pb-12 sm:pt-10 sm:pb-16" data-api-unique-id='foliocuratorialheader-r87b619f9bb5422be-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='foliocuratorialheader-r5f72a87c030843c8-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12" data-api-unique-id='foliocuratorialheader-r2d8125a99fc64b13-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
          {/* Left Column: Master Plate Visual Anchor */}
          <div className="lg:col-span-7 min-w-0" data-api-unique-id='foliocuratorialheader-r0998ff92925fb7a3-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
            <div className="relative group overflow-hidden rounded-sm border border-border/80 bg-card p-3 sm:p-5 shadow-sm" data-api-unique-id='foliocuratorialheader-r56a7c7deb41b8adf-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
              {/* Traditional Darkroom Contact Edge Treatment */}
              <div className="mb-2.5 flex items-center justify-between border-b border-border/60 pb-2 text-[11px] font-mono tracking-wider text-muted-foreground uppercase" data-api-unique-id='foliocuratorialheader-ra73c520d5569ca39-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <span className="flex items-center gap-1.5" data-api-unique-id='foliocuratorialheader-rdf1a0601ce32cc75-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <Aperture className="h-3.5 w-3.5 text-primary" data-api-unique-id='foliocuratorialheader-r2ce7dfb5973e2b4d-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader' />
                  <span data-api-unique-id='foliocuratorialheader-rcc97837d02eab904-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>KODAK TRI-X · NEGATIVE PROOF</span>
                </span>
                <span data-api-unique-id='foliocuratorialheader-rb4236e65066bc055-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>{currentFolio.rollNumber} · FRAME 01</span>
              </div>

              {/* Masterplate Focus Visual */}
              <div className="relative aspect-[6/7] w-full overflow-hidden bg-muted/40" data-api-unique-id='foliocuratorialheader-rc4887e51637dc0f7-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <EditableImg propKey={`masterplate-hero-${currentFolio.id}`} src={currentFolio.coverImage || undefined} needLargeImage className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]" data-api-unique-id='foliocuratorialheader-r39cba4eba11856be-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader' />
              </div>

              {/* Bottom Colophon Strip on Matboard */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground" data-api-unique-id='foliocuratorialheader-rff655988f4689dc4-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <div className="flex items-center gap-2" data-api-unique-id='foliocuratorialheader-rf42389f7747e5a9b-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" data-api-unique-id='foliocuratorialheader-r5eeec4ae8b81daaf-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader' />
                  <span data-api-unique-id='foliocuratorialheader-rbecfec70c1f2aad5-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>MASTER TONAL PROOF</span>
                </div>
                <span data-api-unique-id='foliocuratorialheader-rdf9462a97a667066-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>ILFORD FB WARMTONE · HAND ENLARGED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Curatorial Essay & Technical Spec */}
          <div className="lg:col-span-5 min-w-0 flex flex-col justify-between" data-api-unique-id='foliocuratorialheader-r5a48d4d26674921b-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
            <div className="space-y-6" data-api-unique-id='foliocuratorialheader-rd1907fd2730944f8-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
              {/* Curatorial Header Stamp & Title */}
              <div className="space-y-3" data-api-unique-id='foliocuratorialheader-rf4dce6d23e326b95-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-primary" data-api-unique-id='foliocuratorialheader-rbc4ad5089821e6db-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <span className="border border-primary/30 px-2 py-0.5 tracking-widest uppercase" data-api-unique-id='foliocuratorialheader-r7f8d42928609f750-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                    {currentFolio.rollNumber}
                  </span>
                  <span className="text-muted-foreground" data-api-unique-id='foliocuratorialheader-r30a3606b60720984-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>·</span>
                  <span className="tracking-wider uppercase" data-api-unique-id='foliocuratorialheader-rbe3904c24a80ac37-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>{currentFolio.medium}</span>
                </div>

                <h1 className="text-3xl font-display font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl" data-api-unique-id='foliocuratorialheader-r51d522277bdee506-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  {currentFolio.title}
                </h1>
              </div>

              {/* Specifications Matrix */}
              <div className="grid grid-cols-2 gap-3 border-y border-border py-4 font-mono text-xs" data-api-unique-id='foliocuratorialheader-r1fe76688d918dd14-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <div data-api-unique-id='foliocuratorialheader-r5971b24894b32fff-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <div className="text-muted-foreground uppercase tracking-wider text-[11px]" data-api-unique-id='foliocuratorialheader-r57be68626c7e5041-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Orientation</div>
                  <div className="mt-0.5 font-medium text-foreground" data-api-unique-id='foliocuratorialheader-r123c47af956a9abd-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                    {currentFolio.aspect} ({currentFolio.aspectRatioClass || "aspect-[4/5]"})
                  </div>
                </div>
                <div data-api-unique-id='foliocuratorialheader-ra7e7d715dd82986a-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <div className="text-muted-foreground uppercase tracking-wider text-[11px]" data-api-unique-id='foliocuratorialheader-rcc9ad9f1b5e85005-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Archive Plates</div>
                  <div className="mt-0.5 font-medium text-foreground" data-api-unique-id='foliocuratorialheader-r2a68d1ab1e0329f8-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>{currentFolio.imageCount} Silver Prints</div>
                </div>
                <div data-api-unique-id='foliocuratorialheader-r8cbc55ae89988fdb-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <div className="text-muted-foreground uppercase tracking-wider text-[11px]" data-api-unique-id='foliocuratorialheader-rccce55b3683ac35b-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Equipment</div>
                  <div className="mt-0.5 font-medium text-foreground" data-api-unique-id='foliocuratorialheader-r32c7c2a9c87c93c2-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Mamiya RB67 Pro-SD</div>
                </div>
                <div data-api-unique-id='foliocuratorialheader-r0f0e0510e56c3fe1-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <div className="text-muted-foreground uppercase tracking-wider text-[11px]" data-api-unique-id='foliocuratorialheader-r70bd7e649776f8ae-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Chemistry</div>
                  <div className="mt-0.5 font-medium text-foreground" data-api-unique-id='foliocuratorialheader-r8f970f6b4ef0274c-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Rodinal 1:50 · 20°C</div>
                </div>
              </div>

              {/* Julian Vane's Exhibition Curatorial Statement */}
              <div className="space-y-3" data-api-unique-id='foliocuratorialheader-rea20f8f2e070d71d-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground" data-api-unique-id='foliocuratorialheader-rf6137e50453c9df5-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  <BookOpen className="h-3.5 w-3.5 text-primary" data-api-unique-id='foliocuratorialheader-rc20472b7cd77397c-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader' />
                  <span data-api-unique-id='foliocuratorialheader-r977962223669f490-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Curator Exhibition Note</span>
                </div>
                <blockquote className="border-l-2 border-primary/60 pl-4 text-base leading-relaxed text-foreground/90 italic font-serif" data-api-unique-id='foliocuratorialheader-r25ce4b9e41ce288a-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  &ldquo;{currentFolio.curatorNote}&rdquo;
                </blockquote>
                <p className="text-xs font-mono text-muted-foreground" data-api-unique-id='foliocuratorialheader-r5858bacd7e023ea2-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                  — Julian Vane, Studio Darkroom Archive, Milan
                </p>
              </div>
            </div>

            {/* Micro Colophon Seal */}
            <div className="mt-8 border-t border-border/60 pt-4 flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase tracking-wider" data-api-unique-id='foliocuratorialheader-rc16cfd9bf933f54e-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
              <span data-api-unique-id='foliocuratorialheader-r2adcb6b4f41f4d6c-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Standard Edition: 15 Archival Plates</span>
              <span className="flex items-center gap-1 text-primary" data-api-unique-id='foliocuratorialheader-r3f6f9dbd53a41a19-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>
                <Layers className="h-3 w-3" data-api-unique-id='foliocuratorialheader-rb21a3cc390700b9f-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader' />
                <span data-api-unique-id='foliocuratorialheader-r49d1fa0e5e3060ec-s1294720425' data-api-unique-page-name='src/frontend/components/CollectionsFolios/FolioCuratorialHeader'>Verified Studio Archive</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}