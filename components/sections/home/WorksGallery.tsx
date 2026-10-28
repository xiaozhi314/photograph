"use client";

import React, { useState } from "react";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/frontend-home";
import type { PhotographyWork, WorkCategory } from "@/frontend/types/home";
import { Eye, MapPin, Calendar, Layers } from "lucide-react";

interface WorksGalleryProps {
  works: PhotographyWork[];
  activeCategory: WorkCategory;
  onCategoryChange: (category: WorkCategory) => void;
  onSelectWork: (work: PhotographyWork) => void;
}

const CATEGORIES: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All Collections" },
  { id: "architecture", label: "Architecture" },
  { id: "portraiture", label: "Portraiture" },
  { id: "still-life", label: "Still Life" },
];

export default function WorksGallery({
  works,
  activeCategory,
  onCategoryChange,
  onSelectWork,
}: WorksGalleryProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredWorks = works.filter((work) => {
    if (activeCategory === "all") return true;
    return work.category === activeCategory;
  });

  return (
    <section
      id="curated-works"
      data-controller-name="Curated Works Gallery"
      className="w-full bg-background border-t border-border/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24">
        {/* Curatorial Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/60">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display text-foreground tracking-tight">
              Curated Folio &amp; Selected Plates
            </h2>
            <p className="text-sm text-muted-foreground max-w-md font-body">
              Representative cycles captured on medium-format monochrome negative and analog gelatin silver emulsion.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-muted rounded-sm border border-border/60">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onCategoryChange(cat.id)}
                  className={`text-xs px-3.5 py-1.5 transition-colors font-medium rounded-sm ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid: Editorial Diptych and Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-10">
          {filteredWorks.map((work, idx) => {
            // Curate intentional rhythmic spans across the grid (4:5 portrait vs 16:9 landscape diptych)
            const isWide = work.aspectRatio === "landscape";
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <article
                key={work.id}
                className={`group min-w-0 flex flex-col justify-between ${colSpan}`}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container with Museum Frame */}
                <div
                  onClick={() => onSelectWork(work)}
                  className="relative cursor-pointer overflow-hidden rounded-sm border border-border/80 bg-card transition-all duration-300 hover:border-primary/60 group-hover:shadow-md"
                >
                  <div
                    className={`w-full overflow-hidden ${
                      isWide ? "aspect-[16/10]" : "aspect-[4/5]"
                    }`}
                  >
                    <EditableImg
                      src={generatedImagesByFilename[work.id]}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Curatorial Overlay Reveal on Hover */}
                  <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                  {/* Museum Vitrine Plate Tag (Top Right) */}
                  <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm border border-border/80 text-card-foreground px-2 py-0.5 text-[10px] tracking-widest uppercase font-mono rounded-xs">
                    {work.edition}
                  </div>

                  {/* Lightbox Quick Action on Hover */}
                  <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-xs px-2.5 py-1 rounded-sm opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1.5 shadow-sm">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Plate</span>
                  </div>
                </div>

                {/* Vitrine Label & Meta Underneath */}
                <div className="pt-4 space-y-2 border-b border-border/40 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      onClick={() => onSelectWork(work)}
                      className="font-display text-lg text-foreground cursor-pointer hover:text-primary transition-colors tracking-tight"
                    >
                      {work.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">
                      № {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground font-body line-clamp-1">
                    {work.statement}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{work.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span>{work.year}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Layers className="w-3 h-3 text-muted-foreground" />
                      <span>{work.medium}</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}