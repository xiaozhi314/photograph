"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { PhotoCategory, PhotoCollection, CatalogFilterState } from "@/backend/types/WorksCatalog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export interface CatalogFilterBarProps {
  filters: CatalogFilterState;
  categories: PhotoCategory[];
  collections: PhotoCollection[];
  onSearchChange?: (query: string) => void;
  onCategoryChange?: (categoryId: string) => void;
  onCollectionChange?: (collectionId: string) => void;
  onAspectChange?: (aspectRatio: string) => void;
  onToggleFeaturedOnly?: (featuredOnly: boolean) => void;
  onToggleArchivedOnly?: (archivedOnly: boolean) => void;
  onResetFilters: () => void;
  totalResults?: number;
  onFilterChange?: (newFilters: Partial<CatalogFilterState>) => void;
}
export default function CatalogFilterBar({
  filters,
  categories,
  collections,
  onSearchChange,
  onCategoryChange,
  onCollectionChange,
  onAspectChange,
  onToggleFeaturedOnly,
  onToggleArchivedOnly,
  onResetFilters,
  totalResults,
  onFilterChange
}: CatalogFilterBarProps) {
  const [localSearch, setLocalSearch] = useState(filters.searchQuery);
  const isComposingRef = useRef(false);
  useEffect(() => {
    setLocalSearch(filters.searchQuery);
  }, [filters.searchQuery]);
  const handleSearchCommit = (value: string) => {
    if (onSearchChange) {
      onSearchChange(value);
    } else if (onFilterChange) {
      onFilterChange({
        searchQuery: value
      });
    }
  };
  const handleCategoryChange = (categoryId: string) => {
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    } else if (onFilterChange) {
      onFilterChange({
        categoryId
      });
    }
  };
  const handleCollectionChange = (collectionId: string) => {
    if (onCollectionChange) {
      onCollectionChange(collectionId);
    } else if (onFilterChange) {
      onFilterChange({
        collectionId
      });
    }
  };
  const handleAspectChange = (aspectRatio: string) => {
    if (onAspectChange) {
      onAspectChange(aspectRatio);
    } else if (onFilterChange) {
      onFilterChange({
        aspectRatio
      });
    }
  };
  const handleToggleFeatured = (featuredOnly: boolean) => {
    if (onToggleFeaturedOnly) {
      onToggleFeaturedOnly(featuredOnly);
    } else if (onFilterChange) {
      onFilterChange({
        featuredOnly
      });
    }
  };
  const handleToggleArchived = (archivedOnly: boolean) => {
    if (onToggleArchivedOnly) {
      onToggleArchivedOnly(archivedOnly);
    } else if (onFilterChange) {
      onFilterChange({
        archivedOnly
      });
    }
  };
  const handleClearSearch = () => {
    setLocalSearch("");
    handleSearchCommit("");
  };
  const hasActiveFilters = filters.searchQuery !== "" || filters.categoryId !== "ALL" || filters.collectionId !== "ALL" || filters.aspectRatio !== "ALL" || filters.featuredOnly || filters.archivedOnly;
  return <div data-controller-name="Catalog Filters" className="w-full rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm" data-api-unique-id='catalogfilterbar-re9ea04012bfb3ae6-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
      <div className="flex flex-col gap-3" data-api-unique-id='catalogfilterbar-ra873217dd7532be3-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
        {/* Top bar: Search + Selectors */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12" data-api-unique-id='catalogfilterbar-r1972922bdc137822-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
          {/* Universal Search Input */}
          <div className="relative sm:col-span-2 lg:col-span-4 min-w-0" data-api-unique-id='catalogfilterbar-r2a357879bd7a2436-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" data-api-unique-id='catalogfilterbar-rc6e6f403b13dd347-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
            <input type="text" value={localSearch} onChange={e => {
            const nextVal = e.target.value;
            setLocalSearch(nextVal);
            if (!isComposingRef.current) {
              handleSearchCommit(nextVal);
            }
          }} onCompositionStart={() => {
            isComposingRef.current = true;
          }} onCompositionEnd={e => {
            isComposingRef.current = false;
            const nextVal = e.currentTarget.value;
            setLocalSearch(nextVal);
            handleSearchCommit(nextVal);
          }} placeholder="Search title, series, location, year..." className="h-9 w-full min-w-0 rounded-md border border-input bg-background pl-9 pr-8 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1" data-api-unique-id='catalogfilterbar-r1dab34f80b08e510-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
            {localSearch && <button type="button" onClick={handleClearSearch} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground" aria-label="Clear search" data-api-unique-id='catalogfilterbar-r565db8f015150ed9-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <X className="h-3.5 w-3.5" data-api-unique-id='catalogfilterbar-rece3ce7bc0c25358-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
              </button>}
          </div>

          {/* Genre Category Selector */}
          <div className="lg:col-span-3 min-w-0" data-api-unique-id='catalogfilterbar-rc7e6fbdc1b5c6244-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
            <Select value={filters.categoryId} onValueChange={handleCategoryChange} data-api-unique-id='catalogfilterbar-r74d873b9d30c6f8a-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
              <SelectTrigger size="sm" className="h-9 w-full min-w-[140px] text-xs" data-api-unique-id='catalogfilterbar-r6a2c92883b34f727-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SelectValue placeholder="All Genres" data-api-unique-id='catalogfilterbar-r2705f000a904c7b4-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
              </SelectTrigger>
              <SelectContent data-api-unique-id='catalogfilterbar-r666b359fbfcd353a-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SelectItem value="ALL" className="text-xs" data-api-unique-id='catalogfilterbar-r1a77cd3a3fb879de-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                  All Genres & Categories
                </SelectItem>
                {categories.map((cat, index) => <SelectItem key={cat.id} value={cat.id} className="text-xs" data-api-unique-id='catalogfilterbar-rf983e3e56580fda8-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' data-api-in-loop='1' data-api-bind-info={`categories-${index}-name`} data-api-map-var-name='cat'>
                    {cat.name} ({cat.slug})
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Folio Collection Selector */}
          <div className="lg:col-span-3 min-w-0" data-api-unique-id='catalogfilterbar-rbd6ebe53922bc71a-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
            <Select value={filters.collectionId} onValueChange={handleCollectionChange} data-api-unique-id='catalogfilterbar-rca9e239697cab5f9-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
              <SelectTrigger size="sm" className="h-9 w-full min-w-[140px] text-xs" data-api-unique-id='catalogfilterbar-rca6556c3f8b2d17d-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SelectValue placeholder="All Folio Collections" data-api-unique-id='catalogfilterbar-r89b80a3870e77512-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
              </SelectTrigger>
              <SelectContent data-api-unique-id='catalogfilterbar-r79a23c50f0242c93-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SelectItem value="ALL" className="text-xs" data-api-unique-id='catalogfilterbar-r02b8a067e91af2aa-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                  All Folio Collections
                </SelectItem>
                {collections.map((col, index) => <SelectItem key={col.id} value={col.id} className="text-xs" data-api-unique-id='catalogfilterbar-r6fb69661f11af7a1-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' data-api-in-loop='1' data-api-bind-info={`collections-${index}-title`} data-api-map-var-name='col'>
                    {col.title} ({col.rollNumber})
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Aspect Ratio Selector */}
          <div className="lg:col-span-2 min-w-0" data-api-unique-id='catalogfilterbar-rd0f45bf4677c06ce-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
            <Select value={filters.aspectRatio} onValueChange={handleAspectChange} data-api-unique-id='catalogfilterbar-rac5bcc15cf617c9a-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
              <SelectTrigger size="sm" className="h-9 w-full min-w-[120px] text-xs" data-api-unique-id='catalogfilterbar-rbb7419b6a558470e-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SelectValue placeholder="All Formats" data-api-unique-id='catalogfilterbar-rf8f6e519e8d26430-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
              </SelectTrigger>
              <SelectContent data-api-unique-id='catalogfilterbar-r897876da78cab4a7-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SelectItem value="ALL" className="text-xs" data-api-unique-id='catalogfilterbar-r40895bbd95573be8-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                  All Formats
                </SelectItem>
                <SelectItem value="PORTRAIT" className="text-xs" data-api-unique-id='catalogfilterbar-r1d4b083ec51c66ae-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                  Portrait [4:5]
                </SelectItem>
                <SelectItem value="LANDSCAPE" className="text-xs" data-api-unique-id='catalogfilterbar-rc6ee934a26de3d6b-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                  Landscape [3:2]
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bottom bar: Boolean toggles + Summary count + Reset */}
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-t border-border pt-3 text-xs" data-api-unique-id='catalogfilterbar-rfaba726bb5a2b94f-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
          <div className="flex min-w-0 flex-wrap items-center gap-4" data-api-unique-id='catalogfilterbar-rca5b6cb0a7738a9e-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
            {/* Featured Switch */}
            <label className="inline-flex cursor-pointer select-none items-center gap-2" data-api-unique-id='catalogfilterbar-r76d107d9e7a6c452-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
              <input type="checkbox" checked={filters.featuredOnly} onChange={e => handleToggleFeatured(e.target.checked)} className="h-4 w-4 rounded border-border text-primary focus:ring-ring" data-api-unique-id='catalogfilterbar-r94114dbf73b1279d-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
              <span className="font-medium text-foreground" data-api-unique-id='catalogfilterbar-ra398c5a23c24903c-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>Featured Highlight Only</span>
            </label>

            {/* Archive Visibility Switch */}
            <label className="inline-flex cursor-pointer select-none items-center gap-2" data-api-unique-id='catalogfilterbar-r6285060bb5301fac-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
              <input type="checkbox" checked={filters.archivedOnly} onChange={e => handleToggleArchived(e.target.checked)} className="h-4 w-4 rounded border-border text-primary focus:ring-ring" data-api-unique-id='catalogfilterbar-r67b451d96edcb4da-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
              <span className="font-medium text-foreground" data-api-unique-id='catalogfilterbar-r5a01353b38f887b2-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>Archived Masters Only</span>
            </label>
          </div>

          <div className="flex items-center gap-3" data-api-unique-id='catalogfilterbar-rf599a05a9cb58305-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
            {typeof totalResults === "number" && <span className="text-muted-foreground" data-api-unique-id='catalogfilterbar-rb06a21ec6901b8a9-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                Showing <strong className="font-mono text-foreground" data-api-unique-id='catalogfilterbar-rc8f5a11f2901134b-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>{totalResults}</strong> master {totalResults === 1 ? "plate" : "plates"}
              </span>}

            {hasActiveFilters && <button type="button" onClick={onResetFilters} className="inline-flex items-center gap-1 rounded border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-secondary-foreground" data-api-unique-id='catalogfilterbar-r59c83d70ab1ca87a-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar'>
                <SlidersHorizontal className="h-3 w-3" data-api-unique-id='catalogfilterbar-r07fcd6b173e9d1ac-s1156058371' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogFilterBar' />
                Reset Filters
              </button>}
          </div>
        </div>
      </div>
    </div>;
}