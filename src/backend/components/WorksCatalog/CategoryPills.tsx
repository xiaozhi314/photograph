"use client";

import React from "react";
import { FolderGit2, ArrowUpDown, ChevronUp, ChevronDown, Plus } from "lucide-react";
import { PhotoCategory } from "@/backend/types/WorksCatalog";
interface CategoryPillsProps {
  categories: PhotoCategory[];
  activeCategoryId?: string;
  selectedCategoryId?: string; // support both parent naming variants
  onSelectCategory: (id: string) => void;
  onEditCategory: (cat: PhotoCategory) => void;
  onOpenNewCategory?: () => void;
  onReorderCategory?: (id: string, direction: "up" | "down") => void;
  onReorderCategories?: (categoryIds: string[]) => void;
  onMoveCategoryOrder?: (id: string, direction: "up" | "down") => void;
}
export default function CategoryPills({
  categories,
  activeCategoryId,
  selectedCategoryId,
  onSelectCategory,
  onEditCategory,
  onOpenNewCategory,
  onReorderCategory,
  onReorderCategories,
  onMoveCategoryOrder
}: CategoryPillsProps) {
  const currentActiveId = activeCategoryId ?? selectedCategoryId ?? "ALL";
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
  const handleMoveOrder = (catId: string, direction: "up" | "down") => {
    if (onReorderCategories) {
      const idx = sortedCategories.findIndex(c => c.id === catId);
      if (idx === -1) return;
      const targetIdx = direction === "up" ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= sortedCategories.length) return;
      const newOrder = [...sortedCategories];
      const [moved] = newOrder.splice(idx, 1);
      newOrder.splice(targetIdx, 0, moved);
      onReorderCategories(newOrder.map((c, index) => c.id));
      return;
    }
    if (onReorderCategory) {
      onReorderCategory(catId, direction);
      return;
    }
    if (onMoveCategoryOrder) {
      onMoveCategoryOrder(catId, direction);
    }
  };
  return <div data-controller-name="Category Classification Bar" className="flex min-w-0 flex-col gap-2 rounded-lg border border-border bg-card p-3 text-card-foreground shadow-sm" data-api-unique-id='categorypills-r50a5f56edb086027-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 text-xs" data-api-unique-id='categorypills-rbac548415006b199-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
        <div className="flex min-w-0 items-center gap-2" data-api-unique-id='categorypills-r209ce497ac780f70-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
          <FolderGit2 className="h-4 w-4 shrink-0 text-primary" data-api-unique-id='categorypills-r02af9b7a163953f8-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' />
          <span className="font-medium text-foreground" data-api-unique-id='categorypills-r96165a984e4ac495-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>Curated Genre Taxonomies</span>
          <span className="text-muted-foreground" data-api-unique-id='categorypills-rba11dfb01980c0ca-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>({categories.length} active genres)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground" data-api-unique-id='categorypills-r525655b796049559-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
          {onOpenNewCategory ? <button type="button" onClick={onOpenNewCategory} className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" data-api-unique-id='categorypills-r5357a6baf853af6e-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
              <Plus className="h-3 w-3" data-api-unique-id='categorypills-r6b7f5e74fb27799b-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' />
              <span data-api-unique-id='categorypills-r3e8b9a41ca3011ed-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>New Genre</span>
            </button> : null}
          <div className="flex items-center gap-1.5" data-api-unique-id='categorypills-r7b365e489eb3e9be-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
            <ArrowUpDown className="h-3.5 w-3.5 shrink-0" data-api-unique-id='categorypills-r92e08343628c168b-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' />
            <span data-api-unique-id='categorypills-r9db73d158f3557eb-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>Quick Portfolio Sequencing</span>
          </div>
        </div>
      </div>

      <div className="flex min-w-0 max-w-full flex-wrap items-center gap-2 pt-1" data-api-unique-id='categorypills-r9c90739f645bdd1f-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
        <button type="button" onClick={() => onSelectCategory("ALL")} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${currentActiveId === "ALL" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='categorypills-r91903eee76241914-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
          <span data-api-unique-id='categorypills-r73a1c11f5bcb38de-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>All Genres</span>
          <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${currentActiveId === "ALL" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-secondary text-secondary-foreground"}`} data-api-unique-id='categorypills-rba62683161b34a99-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills'>
            All
          </span>
        </button>

        {sortedCategories.map((cat, index) => {
        const isSelected = currentActiveId === cat.id;
        return <div key={cat.id} className={`inline-flex shrink-0 items-center gap-1 rounded-full border border-border p-0.5 text-xs font-medium transition-colors ${isSelected ? "border-primary bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:border-border hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='categorypills-r3bacd305577a7069-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1'>
              <button type="button" onClick={() => onSelectCategory(cat.id)} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" data-api-unique-id='categorypills-r7e3b5ab2c00558ca-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1'>
                <span data-api-unique-id='categorypills-rfd7c731320d674e8-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1' data-api-bind-info={`sortedCategories-${index}-name`} data-api-map-var-name='cat'>{cat.name}</span>
                <span className={`rounded px-1 text-[10px] font-mono ${isSelected ? "bg-primary-foreground/20 text-primary-foreground" : "bg-background text-muted-foreground"}`} data-api-unique-id='categorypills-r6829f8886195d2c2-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1' data-api-bind-info={`sortedCategories-${index}-sortOrder`} data-api-map-var-name='cat'>
                  #{cat.sortOrder}
                </span>
              </button>

              <div className="flex items-center gap-0.5 pr-1" data-api-unique-id='categorypills-rc60cca4845d9ab5b-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1'>
                <button type="button" title="Move sequence up" disabled={index === 0} onClick={e => {
              e.stopPropagation();
              handleMoveOrder(cat.id, "up");
            }} className={`rounded p-0.5 transition-colors disabled:opacity-30 disabled:pointer-events-none ${isSelected ? "hover:bg-primary-foreground/20 text-primary-foreground" : "hover:bg-background text-muted-foreground"}`} data-api-unique-id='categorypills-rc05256cf294da07d-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1'>
                  <ChevronUp className="h-3 w-3" data-api-unique-id='categorypills-r7b6445e9fbfe74c5-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1' />
                </button>
                <button type="button" title="Move sequence down" disabled={index === sortedCategories.length - 1} onClick={e => {
              e.stopPropagation();
              handleMoveOrder(cat.id, "down");
            }} className={`rounded p-0.5 transition-colors disabled:opacity-30 disabled:pointer-events-none ${isSelected ? "hover:bg-primary-foreground/20 text-primary-foreground" : "hover:bg-background text-muted-foreground"}`} data-api-unique-id='categorypills-rdef32255830f4246-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1'>
                  <ChevronDown className="h-3 w-3" data-api-unique-id='categorypills-r8e966d8fc02e1752-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1' />
                </button>
                <button type="button" title="Edit category details" onClick={e => {
              e.stopPropagation();
              onEditCategory(cat);
            }} className={`rounded px-1.5 py-0.5 text-[10px] underline decoration-dotted transition-colors ${isSelected ? "hover:bg-primary-foreground/20 text-primary-foreground" : "hover:bg-background text-muted-foreground hover:text-foreground"}`} data-api-unique-id='categorypills-r7512bf4d591adb0d-s3262172285' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryPills' data-api-in-loop='1'>
                  Edit
                </button>
              </div>
            </div>;
      })}
      </div>
    </div>;
}