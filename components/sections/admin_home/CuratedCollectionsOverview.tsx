"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/backend-admin_home";
import type { CollectionItem } from "@/backend/types/admin_home";
import { Eye, EyeOff, Film, Image as ImageIcon, Star } from "lucide-react";

interface CuratedCollectionsOverviewProps {
  collections: CollectionItem[];
  onToggleVisibility: (id: CollectionItem["id"]) => void;
  onToggleFeatured: (id: CollectionItem["id"]) => void;
}

export default function CuratedCollectionsOverview({
  collections,
  onToggleVisibility,
  onToggleFeatured,
}: CuratedCollectionsOverviewProps) {
  return (
    <div
      data-controller-name="Curated Collections Showcase"
      className="bg-card text-card-foreground border border-border/80 rounded-sm p-4 sm:p-5 flex flex-col gap-4 min-w-0"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div>
          <h2 className="text-base sm:text-lg font-serif font-semibold tracking-tight text-foreground flex items-center gap-2">
            <span>Curated Collections Gallery</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-muted text-muted-foreground font-normal">
              {collections.length} Folios
            </span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Exhibition-scale archival series with live public wall visibility toggles
          </p>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          Roll Format: 120 / 35mm Fine Rag
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {collections.map((col) => {
          const imageSrc = generatedImagesByFilename[col.id];
          return (
            <div
              key={col.id}
              className={`group border rounded-sm overflow-hidden flex flex-col transition-all ${
                col.isVisible
                  ? "border-border/80 bg-background"
                  : "border-border/40 bg-muted/40 opacity-75"
              }`}
            >
              <div className="relative w-full overflow-hidden bg-muted">
                <div
                  className={`w-full ${
                    col.aspect === "portrait"
                      ? "aspect-[4/5]"
                      : "aspect-[16/9]"
                  } relative`}
                >
                  <EditableImg
                    src={imageSrc}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-background/90 text-foreground shadow-sm">
                    <Film className="w-2.5 h-2.5 text-primary" />
                    {col.rollNumber}
                  </span>
                  {col.featuredOnHome && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-primary text-primary-foreground shadow-sm">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 right-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono bg-background/90 text-foreground shadow-sm">
                    <ImageIcon className="w-2.5 h-2.5" />
                    {col.imageCount} Plates
                  </span>
                </div>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1 gap-2.5 min-w-0">
                <div className="min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-semibold text-sm sm:text-base text-foreground truncate">
                      {col.title}
                    </h3>
                    <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                      {col.medium}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {col.curatorNote}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onToggleFeatured(col.id)}
                    className={`text-xs px-2 py-1 rounded-sm border transition-colors flex items-center gap-1 ${
                      col.featuredOnHome
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-border bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Star className="w-3 h-3" />
                    <span>{col.featuredOnHome ? "Pinned Home" : "Pin Home"}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {col.isVisible ? "Public Wall" : "Archived Vault"}
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={col.isVisible}
                      onClick={() => onToggleVisibility(col.id)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        col.isVisible ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          col.isVisible ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}