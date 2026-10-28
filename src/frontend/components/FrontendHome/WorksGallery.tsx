"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EditableImg from "@/@base/EditableImg";
import type { PhotographyWork, WorkCategory } from "@/frontend/types/FrontendHome";
import { WorksPortfolio, CollectionsFolios } from "@/frontend/route-params";
import { Eye, MapPin, Calendar, Layers, ArrowUpRight } from "lucide-react";
interface WorksGalleryProps {
  works: PhotographyWork[];
  activeCategory?: WorkCategory;
  onCategoryChange?: (category: WorkCategory) => void;
  onSelectWork: (work: PhotographyWork) => void;
}
const CATEGORIES: {
  id: WorkCategory;
  label: string;
}[] = [{
  id: "all",
  label: "All Collections"
}, {
  id: "architecture",
  label: "Architecture"
}, {
  id: "portraiture",
  label: "Portraiture"
}, {
  id: "still-life",
  label: "Still Life"
}];
export default function WorksGallery({
  works,
  activeCategory: controlledCategory,
  onCategoryChange: controlledCategoryChange,
  onSelectWork
}: WorksGalleryProps) {
  const router = useRouter();
  const [internalCategory, setInternalCategory] = useState<WorkCategory>("all");
  const activeCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;
  const handleCategoryClick = (category: WorkCategory) => {
    if (controlledCategoryChange) {
      controlledCategoryChange(category);
    } else {
      setInternalCategory(category);
    }
  };
  const handleSeriesClick = (e: React.MouseEvent, collectionId: string | null | undefined) => {
    e.stopPropagation();
    if (collectionId) {
      CollectionsFolios.navigateToFolio(router, {
        collectionId
      });
    } else {
      CollectionsFolios.navigateTo(router);
    }
  };
  const handleExploreAllWorks = () => {
    WorksPortfolio.navigateTo(router);
  };
  const filteredWorks = works.filter(work => {
    if (activeCategory === "all") return true;
    const cat = (work.categorySlug || work.category || "").toLowerCase();
    return cat === activeCategory.toLowerCase();
  });
  return <section id="curated-works" data-controller-name="Curated Works Gallery" className="w-full bg-background border-t border-border/80" data-api-unique-id='worksgallery-rb9a63f8be5e91939-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24" data-api-unique-id='worksgallery-r0588a1ec99daebe1-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
        {/* Curatorial Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/60" data-api-unique-id='worksgallery-raf2c72a6d3b644c1-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
          <div className="space-y-2" data-api-unique-id='worksgallery-re9e56469519b9259-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
            <h2 className="text-2xl sm:text-3xl font-display text-foreground tracking-tight" data-api-unique-id='worksgallery-r1ba80898c404e1a8-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
              Curated Folio &amp; Selected Plates
            </h2>
            <p className="text-sm text-muted-foreground max-w-md font-body" data-api-unique-id='worksgallery-r3180a24c5fb77a32-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
              Representative cycles captured on medium-format monochrome negative and analog gelatin silver emulsion.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-muted rounded-sm border border-border/60" data-api-unique-id='worksgallery-r136b6fa536514525-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
            {CATEGORIES.map((cat, index) => {
            const isActive = activeCategory === cat.id;
            return <button key={cat.id} type="button" onClick={() => handleCategoryClick(cat.id)} className={`text-xs px-3.5 py-1.5 transition-colors font-medium rounded-sm ${isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/80"}`} data-api-unique-id='worksgallery-r75b90bfaeedfd2e8-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' data-api-bind-info={`CATEGORIES-${index}-label`} data-api-map-var-name='cat'>
                  {cat.label}
                </button>;
          })}
          </div>
        </div>

        {/* Gallery Grid: Editorial Diptych and Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-10" data-api-unique-id='worksgallery-r4aa7dfb055e0402f-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
          {filteredWorks.map((work, index) => {
          const isWide = work.aspectRatio === "LANDSCAPE";
          const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";
          return <article key={work.id} className={`group min-w-0 flex flex-col justify-between ${colSpan}`} data-api-unique-id='worksgallery-r7f5d5a23fd6647b0-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                {/* Image Container with Museum Frame */}
                <div onClick={() => onSelectWork(work)} className="relative cursor-pointer overflow-hidden rounded-sm border border-border/80 bg-card transition-all duration-300 hover:border-primary/60 group-hover:shadow-md" data-api-unique-id='worksgallery-rcfeeaf99c134f02f-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                  <div className={`w-full overflow-hidden ${isWide ? "aspect-[16/10]" : "aspect-[4/5]"}`} data-api-unique-id='worksgallery-r4dcbc64b4280514a-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                    <EditableImg propKey={`work-plate-${work.id}`} src={work.imageUrl} alt={work.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" data-api-unique-id='worksgallery-r3d9ad7540e268c35-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />
                  </div>

                  {/* Curatorial Overlay Reveal on Hover */}
                  <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" data-api-unique-id='worksgallery-rd75b2a50a790d9be-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />

                  {/* Museum Vitrine Plate Tag (Top Right) */}
                  {work.edition && <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm border border-border/80 text-card-foreground px-2 py-0.5 text-[10px] tracking-widest uppercase font-mono rounded-xs" data-api-unique-id='worksgallery-r3e8cc253b7ccb664-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' data-api-bind-info={`filteredWorks-${index}-edition`} data-api-map-var-name='work'>
                      {work.edition}
                    </div>}

                  {/* Lightbox Quick Action on Hover */}
                  <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-xs px-2.5 py-1 rounded-sm opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1.5 shadow-sm" data-api-unique-id='worksgallery-re457394bae518ca2-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                    <Eye className="w-3.5 h-3.5" data-api-unique-id='worksgallery-rb860f2e71778ce8b-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />
                    <span data-api-unique-id='worksgallery-r00215a7afe9566df-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>Inspect Plate</span>
                  </div>
                </div>

                {/* Vitrine Label & Meta Underneath */}
                <div className="pt-4 space-y-2 border-b border-border/40 pb-4" data-api-unique-id='worksgallery-r77ee9e97d7b1dfba-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                  <div className="flex items-start justify-between gap-3" data-api-unique-id='worksgallery-r6f6a2fdf3688be6e-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                    <h3 onClick={() => onSelectWork(work)} className="font-display text-lg text-foreground cursor-pointer hover:text-primary transition-colors tracking-tight" data-api-unique-id='worksgallery-r0fd123d401fe0277-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' data-api-bind-info={`filteredWorks-${index}-title`} data-api-map-var-name='work'>
                      {work.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0" data-api-unique-id='worksgallery-r71b13962d503ae2b-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                      № {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Series Navigation Link Tag */}
                  {(work.series || work.seriesName) && <div className="flex items-center gap-2" data-api-unique-id='worksgallery-r2f7cc552a96d9289-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                      <button type="button" onClick={e => handleSeriesClick(e, work.collectionId)} className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-hover font-mono underline decoration-border hover:decoration-primary transition-colors cursor-pointer text-left" title="Inspect full collection folio" data-api-unique-id='worksgallery-rdfd83c07ae33c2d9-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                        <span data-api-unique-id='worksgallery-r3d417f8d39bffc05-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>Series: {work.series || work.seriesName}</span>
                        <ArrowUpRight className="w-3 h-3" data-api-unique-id='worksgallery-rc4b42a04dbe05042-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />
                      </button>
                    </div>}

                  {work.statement && <p className="text-xs text-muted-foreground font-body line-clamp-1" data-api-unique-id='worksgallery-reb27974e46622957-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' data-api-bind-info={`filteredWorks-${index}-statement`} data-api-map-var-name='work'>
                      {work.statement}
                    </p>}

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono" data-api-unique-id='worksgallery-ra09c7a6ae0535a59-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                    {work.location && <span className="inline-flex items-center gap-1" data-api-unique-id='worksgallery-r11706f716d38d592-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                        <MapPin className="w-3 h-3 text-primary" data-api-unique-id='worksgallery-r6278d13ea30d6123-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />
                        <span data-api-unique-id='worksgallery-re54569b6c8f4e30c-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' data-api-bind-info={`filteredWorks-${index}-location`} data-api-map-var-name='work'>{work.location}</span>
                      </span>}
                    {work.year !== undefined && work.year !== null && <span className="inline-flex items-center gap-1" data-api-unique-id='worksgallery-r516b23a3d7ec6876-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                        <Calendar className="w-3 h-3 text-muted-foreground" data-api-unique-id='worksgallery-r1a1ae7cce8ef6da4-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />
                        <span data-api-unique-id='worksgallery-r69215585ae106bc6-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>{String(work.year)}</span>
                      </span>}
                    {work.medium && <span className="inline-flex items-center gap-1" data-api-unique-id='worksgallery-r6849ca1ee10971da-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1'>
                        <Layers className="w-3 h-3 text-muted-foreground" data-api-unique-id='worksgallery-r2da5d77adc6d59c6-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' />
                        <span data-api-unique-id='worksgallery-r378a801e24edeb12-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' data-api-in-loop='1' data-api-bind-info={`filteredWorks-${index}-medium`} data-api-map-var-name='work'>{work.medium}</span>
                      </span>}
                  </div>
                </div>
              </article>;
        })}
        </div>

        {/* View All Works CTA */}
        <div className="pt-14 sm:pt-16 flex flex-col items-center justify-center text-center space-y-4" data-api-unique-id='worksgallery-r8eb82313de2fafa6-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest" data-api-unique-id='worksgallery-r536a42378a9b4b22-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
            Complete Archive &amp; Contact Sheets
          </p>
          <button type="button" onClick={handleExploreAllWorks} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foreground text-background text-xs font-medium tracking-wide uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground shadow-sm rounded-sm cursor-pointer" data-api-unique-id='worksgallery-r3b7016e7a7a3c61a-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>
            <span data-api-unique-id='worksgallery-red2cfa0b60e5a37a-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery'>Explore Complete Portfolio Works (F02)</span>
            <ArrowUpRight className="w-4 h-4" data-api-unique-id='worksgallery-rc1a896bdd804aea4-s80754811' data-api-unique-page-name='src/frontend/components/FrontendHome/WorksGallery' />
          </button>
        </div>
      </div>
    </section>;
}