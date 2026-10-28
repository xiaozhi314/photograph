"use client";

import React, { useState, useEffect } from "react";
import { FolderPlus, Hash } from "lucide-react";
import { PhotoCategory, SaveCategoryInput } from "@/backend/types/WorksCatalog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (category: SaveCategoryInput) => void;
  initialCategory?: PhotoCategory | null;
  editingCategory?: PhotoCategory | null;
}
export default function CategoryModal({
  isOpen,
  onClose,
  onSubmit,
  initialCategory,
  editingCategory
}: CategoryModalProps) {
  const currentCategory = initialCategory ?? editingCategory ?? null;
  const isEditing = Boolean(currentCategory?.id);
  const [name, setName] = useState(currentCategory?.name || "");
  const [slug, setSlug] = useState(currentCategory?.slug || "");
  const [description, setDescription] = useState(currentCategory?.description || "");
  const [sortOrder, setSortOrder] = useState<number>(currentCategory?.sortOrder ?? 1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  useEffect(() => {
    if (currentCategory) {
      setName(currentCategory.name || "");
      setSlug(currentCategory.slug || "");
      setDescription(currentCategory.description || "");
      setSortOrder(typeof currentCategory.sortOrder === "number" ? currentCategory.sortOrder : 1);
    } else {
      setName("");
      setSlug("");
      setDescription("");
      setSortOrder(1);
    }
    setErrors({});
  }, [currentCategory, isOpen]);
  const handleNameChange = (val: string) => {
    setName(val);
    if (!isEditing && (!slug || slug === name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""))) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  };
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Category display name is required";
    if (!slug.trim()) errs.slug = "URL slug identifier is required";
    if (sortOrder < 1) errs.sortOrder = "Sort order must be at least 1";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: currentCategory?.id,
      name: name.trim(),
      slug: slug.trim().toLowerCase(),
      description: description.trim() || null,
      sortOrder: Number(sortOrder)
    });
  };
  return <Dialog open={isOpen} onOpenChange={open => {
    if (!open) onClose();
  }} data-api-unique-id='categorymodal-r58fd97b77b7bab7b-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
      <DialogContent className="max-h-[calc(100dvh-4rem)] overflow-y-auto sm:max-w-lg p-6 bg-card text-card-foreground border-border" data-api-unique-id='categorymodal-rd3726d03f3c94dd5-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
        <DialogHeader className="space-y-1" data-api-unique-id='categorymodal-r719bfb71e7cc1cb5-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
          <div className="flex items-center gap-2" data-api-unique-id='categorymodal-r82f162ab65beeab0-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            <FolderPlus className="w-5 h-5 text-primary shrink-0" data-api-unique-id='categorymodal-rd22a0d012ee29907-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal' />
            <DialogTitle className="text-base font-semibold text-foreground" data-api-unique-id='categorymodal-r1cded5ff40b3f795-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              {isEditing ? "Modify Curatorial Genre Category" : "Define Curatorial Genre Category"}
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-muted-foreground" data-api-unique-id='categorymodal-rcb7984c57d574ced-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            Configure photo classification taxonomies, public portfolio URL slugs, and aesthetic statements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2" data-api-unique-id='categorymodal-r97d71bf185456206-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
          {/* Category Display Name */}
          <div data-api-unique-id='categorymodal-r206b33484236b17e-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='categorymodal-r14b78bcf38827b90-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              Genre Display Name <span className="text-destructive" data-api-unique-id='categorymodal-r1d0f622ae4afd848-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>*</span>
            </label>
            <input type="text" value={name} onChange={e => handleNameChange(e.target.value)} placeholder="e.g. Architectural Monoliths" className={`w-full px-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.name ? "border-destructive" : "border-input"}`} data-api-unique-id='categorymodal-r51d153264722e3e7-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal' />
            {errors.name && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='categorymodal-r5f2687aba9c0230e-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>{errors.name}</p>}
          </div>

          {/* Slug Identifier */}
          <div data-api-unique-id='categorymodal-r7129cd354a48925d-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='categorymodal-rca21226ef457398b-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              URL Slug Identifier <span className="text-destructive" data-api-unique-id='categorymodal-r88b48c8d306e75db-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>*</span>
            </label>
            <div className="relative" data-api-unique-id='categorymodal-rfd837c60019971f9-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              <span className="absolute left-3 top-2 text-xs text-muted-foreground font-mono" data-api-unique-id='categorymodal-r6d2df1ad6a7d48ae-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>/genre/</span>
              <input type="text" value={slug} onChange={e => setSlug(e.target.value)} placeholder="architecture" className={`w-full pl-16 pr-3 py-2 text-xs rounded border bg-background text-foreground font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.slug ? "border-destructive" : "border-input"}`} data-api-unique-id='categorymodal-rc4c6adfc237efb67-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal' />
            </div>
            {errors.slug && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='categorymodal-r57b3792e978add1c-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>{errors.slug}</p>}
            <p className="text-[10px] text-muted-foreground mt-1" data-api-unique-id='categorymodal-r60103e2e615fdc20-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              Used in public routing, canonical SEO tags, and portfolio folio routing.
            </p>
          </div>

          {/* Numeric Sort Order */}
          <div data-api-unique-id='categorymodal-r3d3ad7748e6a6cbc-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='categorymodal-rb65e35ea3077e42d-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              Sequence Sort Order <span className="text-destructive" data-api-unique-id='categorymodal-r6ab9947eee8fa97e-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>*</span>
            </label>
            <div className="relative" data-api-unique-id='categorymodal-r4db4539f4f77cbbd-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              <Hash className="w-3.5 h-3.5 absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='categorymodal-rcb0fe3d97ce83b18-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal' />
              <input type="number" value={sortOrder} onChange={e => setSortOrder(Number(e.target.value))} min={1} max={999} className={`w-full pl-8 pr-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.sortOrder ? "border-destructive" : "border-input"}`} data-api-unique-id='categorymodal-r3f79047e3df6fca8-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal' />
            </div>
            {errors.sortOrder && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='categorymodal-rc9ad2277b4053fed-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>{errors.sortOrder}</p>}
            <p className="text-[10px] text-muted-foreground mt-1" data-api-unique-id='categorymodal-r85f3ee44189558a1-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              Lower numbers appear first on the category filter bar and public exhibitions.
            </p>
          </div>

          {/* Curatorial Aesthetic Statement / Description */}
          <div data-api-unique-id='categorymodal-r68798006804433c2-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='categorymodal-rb0e815668ba2f5f3-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              Curatorial Aesthetic Statement & Scope
            </label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} placeholder="e.g. Studies in structural brutalism, shadow geometry, and urban tectonics rendered via medium format monochrome..." className="w-full px-3 py-2 text-xs rounded border border-input bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring leading-relaxed" data-api-unique-id='categorymodal-ra0b93355c6b3edb0-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal' />
          </div>

          {/* Dialog Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-border" data-api-unique-id='categorymodal-r7a75b08a98d3019a-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
            <button type="button" onClick={onClose} className="px-3.5 py-2 text-xs font-medium rounded border border-border text-foreground hover:bg-muted transition-colors" data-api-unique-id='categorymodal-r8aa7e1f700170248-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold rounded bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm" data-api-unique-id='categorymodal-r06530a7846531ef3-s966360159' data-api-unique-page-name='src/backend/components/WorksCatalog/CategoryModal'>
              {isEditing ? "Save Changes" : "Commit Genre Category"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
}