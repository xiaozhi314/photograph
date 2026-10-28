"use client";

import React from "react";
import { Plus, FolderPlus, Layers, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
interface CatalogHeaderProps {
  totalPlates: number;
  featuredCount: number;
  archivedCount: number;
  categoriesCount: number;
  onOpenNewPlate: () => void;
  onOpenNewCategory: () => void;
}
export default function CatalogHeader({
  totalPlates,
  featuredCount,
  archivedCount,
  categoriesCount,
  onOpenNewPlate,
  onOpenNewCategory
}: CatalogHeaderProps) {
  return <header className="flex min-w-0 flex-col gap-4 border-b border-border pb-5" data-api-unique-id='catalogheader-rb4bc9472412ff9fc-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" data-api-unique-id='catalogheader-r8d569e61ef4f30b8-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
        <div className="min-w-0 space-y-1" data-api-unique-id='catalogheader-rf63737db5a3dbf51-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
          <div className="flex items-center gap-2" data-api-unique-id='catalogheader-raa2bcdb4871883cf-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground" data-api-unique-id='catalogheader-r713d7c5eb56d1ec5-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
              Master Plates & Works Catalog
            </h1>
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground" data-api-unique-id='catalogheader-r98cefac2adbfe2b3-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
              Archive Atelier
            </span>
          </div>
          <p className="text-sm text-muted-foreground" data-api-unique-id='catalogheader-r838c81152b95e8ad-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
            Curatorial desk for registered gelatin silver master plates, folios, and fine art editions.
          </p>
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-2" data-api-unique-id='catalogheader-r17032f69993ebbfe-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
          <Button type="button" variant="outline" onClick={onOpenNewCategory} className="border-border bg-card text-card-foreground hover:bg-muted" data-api-unique-id='catalogheader-r8fb8c92d7ee1f12a-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
            <FolderPlus className="mr-2 h-4 w-4 text-primary" data-api-unique-id='catalogheader-r057f5850b428c3ff-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader' />
            New Category
          </Button>

          <Button type="button" onClick={onOpenNewPlate} className="bg-primary text-primary-foreground hover:bg-primary/90" data-api-unique-id='catalogheader-r583e9a5aa5c8c4ca-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
            <Plus className="mr-2 h-4 w-4" data-api-unique-id='catalogheader-r9db1d3d3963127c6-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader' />
            Register Master Plate
          </Button>
        </div>
      </div>

      {/* Overview Stat Strip */}
      <div className="flex min-w-0 flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground" data-api-unique-id='catalogheader-r3d15c554422eae54-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-card-foreground" data-api-unique-id='catalogheader-re5c8300648a4bea7-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
          <Layers className="h-3.5 w-3.5 text-primary" data-api-unique-id='catalogheader-rde742a62346dfb8e-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader' />
          <span className="font-semibold text-foreground" data-api-unique-id='catalogheader-ra954fc1b7ce8276a-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>{totalPlates}</span> Master Plates
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-card-foreground" data-api-unique-id='catalogheader-r4586f2e67c4263bb-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
          <Star className="h-3.5 w-3.5 text-amber-600" data-api-unique-id='catalogheader-rb17297b77d98ff26-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader' />
          <span className="font-semibold text-foreground" data-api-unique-id='catalogheader-rdbe39ef7996c6a7c-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>{featuredCount}</span> Featured on Portfolio
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-card-foreground" data-api-unique-id='catalogheader-rdeb1eb58898f9ad9-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
          <Eye className="h-3.5 w-3.5 text-muted-foreground" data-api-unique-id='catalogheader-r6f3e26bfc838a23c-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader' />
          <span className="font-semibold text-foreground" data-api-unique-id='catalogheader-rfe1806a31e4b6783-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>{archivedCount}</span> Archived
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-card-foreground" data-api-unique-id='catalogheader-r8ed686aa0743f796-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" data-api-unique-id='catalogheader-r7394fe6da2053016-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader' />
          <span className="font-semibold text-foreground" data-api-unique-id='catalogheader-r8ea85a609a7d29ae-s12017922' data-api-unique-page-name='src/backend/components/WorksCatalog/CatalogHeader'>{categoriesCount}</span> Curated Genres
        </span>
      </div>
    </header>;
}