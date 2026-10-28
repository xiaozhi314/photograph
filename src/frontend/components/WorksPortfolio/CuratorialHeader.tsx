"use client";

import React from "react";
import type { PhotoCategoryItem, PhotographyWorkItem } from "@/frontend/types/WorksPortfolio";
interface CuratorialHeaderProps {
  categories: PhotoCategoryItem[];
  works?: PhotographyWorkItem[];
  selectedCategorySlug?: string;
  activeSlug?: string;
  onSelectCategory: (slug: string) => void;
  totalWorksCount?: number;
}
export default function CuratorialHeader({
  categories,
  works = [],
  selectedCategorySlug,
  activeSlug,
  onSelectCategory,
  totalWorksCount
}: CuratorialHeaderProps) {
  const currentActiveSlug = selectedCategorySlug ?? activeSlug ?? "all";
  const activeWorks = works.filter(w => !w.isArchived);
  const totalCount = totalWorksCount ?? (works.length > 0 ? activeWorks.length : 0);
  const getCategoryCount = (cat: PhotoCategoryItem) => {
    if (typeof cat.worksCount === "number") {
      return cat.worksCount;
    }
    if (works.length > 0) {
      return activeWorks.filter(w => w.categorySlug === cat.slug || w.categoryId === cat.id).length;
    }
    return 0;
  };
  return <header className="w-full space-y-8 pt-8 sm:pt-12" data-api-unique-id='curatorialheader-rfa1a01e08c7c0954-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
      {/* Editorial Title & Philosophical Statement */}
      <div className="space-y-4 max-w-3xl" data-api-unique-id='curatorialheader-r4bfc769700e5ffef-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground" data-api-unique-id='curatorialheader-rcddd0c01873fa298-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
          Capturing the Fragile Geometry of Time.
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" data-api-unique-id='curatorialheader-re0b29e150d1f53f7-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
          Silver gelatin and medium format archival impressions by Julian Vane.
        </p>
      </div>

      {/* Horizontal genre filter tabs */}
      <div className="w-full border-b border-border pb-4" data-api-unique-id='curatorialheader-r0d09d7b4487e8b70-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1" data-api-unique-id='curatorialheader-r60524460588a8256-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
          {/* Default 'All Plates' tab */}
          <button type="button" onClick={() => onSelectCategory("all")} className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${currentActiveSlug === "all" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='curatorialheader-r2add3ace2b77e6ed-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
            <span data-api-unique-id='curatorialheader-r6b04e98044a9397c-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>All Plates</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${currentActiveSlug === "all" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-background text-muted-foreground"}`} data-api-unique-id='curatorialheader-r289f53a7a0ce0ed0-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader'>
              {totalCount}
            </span>
          </button>

          {/* Dynamic categories queried from photo_category */}
          {categories.map((cat, index) => {
          const isActive = currentActiveSlug === cat.slug;
          const count = getCategoryCount(cat);
          return <button key={cat.id || cat.slug} type="button" onClick={() => onSelectCategory(cat.slug)} className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isActive ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='curatorialheader-r82da781f808bdc17-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader' data-api-in-loop='1'>
                <span data-api-unique-id='curatorialheader-r28c237757d1359f4-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader' data-api-in-loop='1' data-api-bind-info={`categories-${index}-name`} data-api-map-var-name='cat'>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-background text-muted-foreground"}`} data-api-unique-id='curatorialheader-r164ceb960cddfddd-s752297241' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CuratorialHeader' data-api-in-loop='1'>
                  {count}
                </span>
              </button>;
        })}
        </div>
      </div>
    </header>;
}