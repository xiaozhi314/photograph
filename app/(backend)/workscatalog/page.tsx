"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { toast } from "sonner";
import { useAdminSession } from "@/tools/BackendSession";
import { PhotoCategory, PhotoCollection, PhotographyWork, CatalogFilterState, WorkFormValues, SaveCategoryInput } from "@/backend/types/WorksCatalog";
import { getWorksCatalogData, savePhotographyWork, toggleFeaturedWork, toggleArchivedWork, deletePhotographyWork, savePhotoCategory, reorderPhotoCategories, reorderPhotographyWorks } from "@/backend/actions/WorksCatalog";
import CatalogHeader from "@/backend/components/WorksCatalog/CatalogHeader";
import CategoryPills from "@/backend/components/WorksCatalog/CategoryPills";
import CatalogFilterBar from "@/backend/components/WorksCatalog/CatalogFilterBar";
import MasterPlatesTable from "@/backend/components/WorksCatalog/MasterPlatesTable";
import PlateEditorDrawer from "@/backend/components/WorksCatalog/PlateEditorDrawer";
import CategoryModal from "@/backend/components/WorksCatalog/CategoryModal";

// Initial realistic curatorial categories as initial visible values
const INITIAL_CATEGORIES: PhotoCategory[] = [{
  id: "cat-arch-01",
  slug: "architecture",
  name: "Architecture & Structural Monoliths",
  description: "Brutalist lines, urban concrete textures, geometric negative spaces, and monumental shadows.",
  sortOrder: 1
}, {
  id: "cat-port-02",
  slug: "portraiture",
  name: "Fine Art Portraiture",
  description: "Intimate chiaroscuro character studies capturing human resonance and emotional quietude.",
  sortOrder: 2
}, {
  id: "cat-land-03",
  slug: "landscape",
  name: "Nordic & Alpine Landscapes",
  description: "Silent geological horizons, glacial mist, volcanic terrains, and vast solitude.",
  sortOrder: 3
}, {
  id: "cat-strt-04",
  slug: "street",
  name: "Street & Fleeting Moments",
  description: "Decisive monochrome human interactions within nocturnal metropolises.",
  sortOrder: 4
}, {
  id: "cat-still-05",
  slug: "still-life",
  name: "Botanical & Still-Life Studies",
  description: "Textural organic forms, withered flora, ceramics, and soft northern window illumination.",
  sortOrder: 5
}, {
  id: "cat-comm-06",
  slug: "commercial",
  name: "Editorial & Commercial Commissions",
  description: "High-craft studio commissions, editorial fashion, and tactile luxury materials.",
  sortOrder: 6
}];

// Initial realistic curated collections / folios
const INITIAL_COLLECTIONS: PhotoCollection[] = [{
  id: "col-01",
  title: "Reykjavik Winter Solitude",
  rollNumber: "FOLIO-ISL-24",
  medium: "Silver Gelatin Fiber Print",
  curatorNote: "Ten master plates capturing volcanic basalt plains during astronomical dusk.",
  aspect: "LANDSCAPE",
  aspectRatioClass: "aspect-[3/2]",
  coverImage: null,
  imageCount: 10,
  isVisible: true,
  featuredOnHome: true,
  sortOrder: 1
}, {
  id: "col-02",
  title: "Berlin Brutalist Echoes",
  rollNumber: "FOLIO-BER-23",
  medium: "Platinum Palladium Print",
  curatorNote: "Architectural monolithic facades of former cold war transit infrastructure.",
  aspect: "PORTRAIT",
  aspectRatioClass: "aspect-[4/5]",
  coverImage: null,
  imageCount: 14,
  isVisible: true,
  featuredOnHome: true,
  sortOrder: 2
}, {
  id: "col-03",
  title: "Kyoto Timber & Tea Shadows",
  rollNumber: "FOLIO-KYO-22",
  medium: "Carbon Pigment on Kozo Paper",
  curatorNote: "Meditative cedar interiors and filtered paper screen gradients.",
  aspect: "PORTRAIT",
  aspectRatioClass: "aspect-[4/5]",
  coverImage: null,
  imageCount: 8,
  isVisible: true,
  featuredOnHome: false,
  sortOrder: 3
}];

// Initial master plates catalog works
const INITIAL_WORKS: PhotographyWork[] = [{
  id: "work-01",
  title: "Basalt Monolith & Coastal Spray VII",
  categoryId: "cat-land-03",
  collectionId: "col-01",
  seriesName: "Nordic Solitude",
  location: "Snæfellsnes, Iceland",
  year: 2024,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 1/15 · Archival",
  aspectRatio: "PORTRAIT",
  statement: "Exploration of abyssal black basalt confronting the rhythmic surges of arctic breakers in dawn mist.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 1
}, {
  id: "work-02",
  title: "Flak Tower Concrete Angles IV",
  categoryId: "cat-arch-01",
  collectionId: "col-02",
  seriesName: "Brutalist Shadows",
  location: "Humboldthain, Berlin",
  year: 2023,
  medium: "Platinum Palladium on Cotton Rag",
  edition: "Ed. 2/10 · Signed",
  aspectRatio: "LANDSCAPE",
  statement: "Dense aggregate concrete absorbing cold overcast light, revealing micro-textures of wooden formwork.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 2
}, {
  id: "work-03",
  title: "Elder Tea Master in Raked Light",
  categoryId: "cat-port-02",
  collectionId: "col-03",
  seriesName: "Artisans of Kansai",
  location: "Uji, Kyoto, Japan",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 3/15 · 35mm Gelatin",
  aspectRatio: "PORTRAIT",
  statement: "Natural diagonal illumination sweeping across weathered hands preparing ceremonial matcha vessels.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 3
}, {
  id: "work-04",
  title: "Nocturnal Rain Crossing at Shinjuku",
  categoryId: "cat-strt-04",
  collectionId: null,
  seriesName: "Neon & Asphalt",
  location: "Tokyo, Japan",
  year: 2022,
  medium: "Archival Carbon Pigment Print",
  edition: "Ed. 5/25 · Unframed",
  aspectRatio: "LANDSCAPE",
  statement: "Specular wet pavement reflections and anonymous umbrella silhouetting through high-contrast grain.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 4
}, {
  id: "work-05",
  title: "Withered Magnolia Pod on Honed Slate",
  categoryId: "cat-still-05",
  collectionId: null,
  seriesName: "Ephemeral Botany",
  location: "Atelier Julian Vane, London",
  year: 2024,
  medium: "Gelatin Silver Contact Print",
  edition: "Ed. 1/7 · Studio Proof",
  aspectRatio: "PORTRAIT",
  statement: "Sculptural seed cavities cast in quiet window light against oiled charcoal slate.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 5
}, {
  id: "work-06",
  title: "Architectural Ceramic Vessel Study II",
  categoryId: "cat-comm-06",
  collectionId: null,
  seriesName: "Kuroda Studio Commission",
  location: "Geneva, Switzerland",
  year: 2024,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 4/12 · Archival Matted",
  aspectRatio: "PORTRAIT",
  statement: "Tension between raw unglazed stoneware curve and crisp linear geometry of marble plinths.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 6
}, {
  id: "work-07",
  title: "Glacial Calving Fjord in Twilight",
  categoryId: "cat-land-03",
  collectionId: "col-01",
  seriesName: "Nordic Solitude",
  location: "Jökulsárlón, Iceland",
  year: 2023,
  medium: "Platinum Palladium on Fabriano",
  edition: "Ed. 1/10 · Collector Edition",
  aspectRatio: "LANDSCAPE",
  statement: "Subdued cyan and silver tones in suspended stillness as ice blocks drift toward open sea.",
  imageUrl: "",
  isFeatured: false,
  isArchived: true,
  sortOrder: 7
}, {
  id: "work-08",
  title: "Glass Atrium Structural Tension VIII",
  categoryId: "cat-arch-01",
  collectionId: "col-02",
  seriesName: "Brutalist Shadows",
  location: "Rotterdam, Netherlands",
  year: 2022,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 2/15 · 35mm Gelatin",
  aspectRatio: "PORTRAIT",
  statement: "Steel cable trusses cutting sharp diagonals across high-contrast daylight cast on cast iron.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 8
}];
export default function WorksCatalogPage() {
  // Read session for curator admin authentication & identity context
  const {
    username,
    full_name,
    role
  } = useAdminSession();

  // Data states initialized with visible fallback records
  const [categories, setCategories] = useState<PhotoCategory[]>(INITIAL_CATEGORIES);
  const [collections, setCollections] = useState<PhotoCollection[]>(INITIAL_COLLECTIONS);
  const [works, setWorks] = useState<PhotographyWork[]>(INITIAL_WORKS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Filter states
  const [filters, setFilters] = useState<CatalogFilterState>({
    searchQuery: "",
    categoryId: "ALL",
    collectionId: "ALL",
    aspectRatio: "ALL",
    featuredOnly: false,
    archivedOnly: false
  });

  // Drawer & Modal states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingWork, setEditingWork] = useState<WorkFormValues | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<PhotoCategory | null>(null);

  // Fetch catalog data from backend Server Action
  const loadData = useCallback(async () => {
    try {
      const data = await getWorksCatalogData();
      if (data) {
        if (Array.isArray(data.categories) && data.categories.length > 0) {
          setCategories(data.categories);
        }
        if (Array.isArray(data.collections) && data.collections.length > 0) {
          setCollections(data.collections);
        }
        if (Array.isArray(data.works) && data.works.length > 0) {
          setWorks(data.works);
        }
      }
    } catch (error) {
      console.error("Failed to load catalog data:", error);
      toast.error("Could not load latest catalog data from server");
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Curatorial metrics counts
  const totalWorks = works.length;
  const featuredCount = works.filter(w => w.isFeatured).length;
  const activeCount = works.filter(w => !w.isArchived).length;
  const archivedCount = works.filter(w => w.isArchived).length;

  // Filter handlers
  const handleFilterChange = (newFilters: Partial<CatalogFilterState>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };
  const handleResetFilters = () => {
    setFilters({
      searchQuery: "",
      categoryId: "ALL",
      collectionId: "ALL",
      aspectRatio: "ALL",
      featuredOnly: false,
      archivedOnly: false
    });
    toast.info("Catalog filters reset to all archives");
  };
  const handleSelectGenrePill = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categoryId: prev.categoryId === categoryId ? "ALL" : categoryId
    }));
  };

  // Reorder categories mutation via reorderPhotoCategories
  const handleReorderCategories = async (id: string, direction: "up" | "down") => {
    const idx = categories.findIndex(c => c.id === id);
    if (idx === -1) return;
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= categories.length) return;
    const newCategories = [...categories];
    const [moved] = newCategories.splice(idx, 1);
    newCategories.splice(targetIdx, 0, moved);
    const reorderedIds = newCategories.map((c, index) => c.id);
    // Optimistic UI update
    setCategories(newCategories.map((cat, index) => ({
      ...cat,
      sortOrder: index + 1
    })));
    try {
      const updatedList = await reorderPhotoCategories(reorderedIds);
      if (Array.isArray(updatedList) && updatedList.length > 0) {
        setCategories(updatedList);
      }
      toast.success(`Category sequence reordered: "${moved.name}"`);
    } catch (err) {
      console.error("Failed to reorder categories:", err);
      toast.error("Failed to persist category sequence");
      loadData();
    }
  };

  // Work interactions: Toggle Featured via Action
  const handleToggleFeatured = async (id: string) => {
    const target = works.find(w => w.id === id);
    if (!target) return;
    const nextFeatured = !target.isFeatured;

    // Optimistic update
    setWorks(prev => prev.map((w, index) => w.id === id ? {
      ...w,
      isFeatured: nextFeatured
    } : w));
    try {
      await toggleFeaturedWork(id);
      toast.success(nextFeatured ? `"${target.title}" pinned to curated portfolio home wall` : `"${target.title}" unpinned from featured wall`);
    } catch (err) {
      console.error("Failed to toggle featured status:", err);
      toast.error("Failed to update featured flag on server");
      // Rollback
      setWorks(prev => prev.map((w, index) => w.id === id ? {
        ...w,
        isFeatured: !nextFeatured
      } : w));
    }
  };

  // Work interactions: Toggle Archive via Action
  const handleToggleArchive = async (id: string) => {
    const target = works.find(w => w.id === id);
    if (!target) return;
    const nextArchived = !target.isArchived;

    // Optimistic update
    setWorks(prev => prev.map((w, index) => w.id === id ? {
      ...w,
      isArchived: nextArchived
    } : w));
    try {
      await toggleArchivedWork(id);
      toast.success(nextArchived ? `"${target.title}" hidden from public exhibition wall (Archived)` : `"${target.title}" published to public exhibition wall`);
    } catch (err) {
      console.error("Failed to toggle archive status:", err);
      toast.error("Failed to update archive status on server");
      // Rollback
      setWorks(prev => prev.map((w, index) => w.id === id ? {
        ...w,
        isArchived: !nextArchived
      } : w));
    }
  };

  // Work interactions: Reorder works via Action
  const handleReorderWork = async (id: string, direction: "up" | "down") => {
    const idx = works.findIndex(w => w.id === id);
    if (idx === -1) return;
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= works.length) return;
    const newWorks = [...works];
    const [moved] = newWorks.splice(idx, 1);
    newWorks.splice(targetIdx, 0, moved);
    const reorderedIds = newWorks.map((w, index) => w.id);
    setWorks(newWorks.map((work, index) => ({
      ...work,
      sortOrder: index + 1
    })));
    try {
      await reorderPhotographyWorks(reorderedIds);
      toast.success(`Ledger sequencing updated for "${moved.title}"`);
    } catch (err) {
      console.error("Failed to reorder photography works:", err);
      toast.error("Failed to persist plate sequence order");
      loadData();
    }
  };

  // Work interactions: Delete work via Action
  const handleDeleteWork = async (id: string) => {
    const target = works.find(w => w.id === id);
    if (!target) return;
    const prevWorks = [...works];
    setWorks(prev => prev.filter(w => w.id !== id));
    try {
      await deletePhotographyWork(id);
      toast.success(`Archival plate "${target.title}" removed from catalog`);
    } catch (err) {
      console.error("Failed to delete photography work:", err);
      toast.error("Failed to remove plate from catalog");
      setWorks(prevWorks);
    }
  };
  const handleOpenNewWork = () => {
    setEditingWork(null);
    setIsDrawerOpen(true);
  };
  const handleEditWork = (work: PhotographyWork) => {
    setEditingWork({
      id: work.id,
      title: work.title,
      categoryId: work.categoryId,
      collectionId: work.collectionId || "none",
      seriesName: work.seriesName,
      location: work.location,
      year: work.year,
      medium: work.medium,
      edition: work.edition,
      aspectRatio: work.aspectRatio,
      statement: work.statement,
      imageUrl: work.imageUrl,
      sortOrder: work.sortOrder,
      isFeatured: work.isFeatured,
      isArchived: work.isArchived
    });
    setIsDrawerOpen(true);
  };

  // Save work mutation via Action
  const handleSaveWork = async (values: WorkFormValues) => {
    try {
      const payload: WorkFormValues = {
        ...values,
        collectionId: values.collectionId === "none" ? "" : values.collectionId
      };
      await savePhotographyWork(payload);
      toast.success(values.id ? `Plate metadata updated: "${values.title}"` : `New master plate committed to catalog: "${values.title}"`);
      setIsDrawerOpen(false);
      await loadData();
    } catch (err) {
      console.error("Failed to save master plate:", err);
      toast.error("Failed to commit master plate record");
    }
  };

  // Category interactions
  const handleOpenNewCategory = () => {
    setEditingCategory(null);
    setIsCategoryModalOpen(true);
  };
  const handleEditCategory = (cat: PhotoCategory) => {
    setEditingCategory(cat);
    setIsCategoryModalOpen(true);
  };

  // Save category mutation via Action
  const handleSaveCategory = async (categoryData: Partial<PhotoCategory>) => {
    try {
      const payload: SaveCategoryInput = {
        id: categoryData.id,
        name: categoryData.name || "Untitled Genre",
        slug: categoryData.slug || "new-genre",
        description: categoryData.description || null,
        sortOrder: categoryData.sortOrder ?? categories.length + 1
      };
      await savePhotoCategory(payload);
      toast.success(categoryData.id ? `Curatorial genre updated: "${categoryData.name}"` : `Curatorial genre registered: "${categoryData.name}"`);
      setIsCategoryModalOpen(false);
      await loadData();
    } catch (err) {
      console.error("Failed to save category:", err);
      toast.error("Failed to save curatorial category");
    }
  };

  // Filtered dataset
  const filteredWorks = useMemo(() => {
    return works.filter(work => {
      // Search query (title, series, location, year)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = work.title.toLowerCase().includes(query);
        const matchesSeries = work.seriesName.toLowerCase().includes(query);
        const matchesLocation = work.location.toLowerCase().includes(query);
        const matchesYear = String(work.year).includes(query);
        if (!matchesTitle && !matchesSeries && !matchesLocation && !matchesYear) {
          return false;
        }
      }

      // Genre category filter
      if (filters.categoryId !== "ALL" && work.categoryId !== filters.categoryId) {
        return false;
      }

      // Folio collection filter
      if (filters.collectionId !== "ALL") {
        if (filters.collectionId === "INDEPENDENT" && work.collectionId) {
          return false;
        }
        if (filters.collectionId !== "INDEPENDENT" && work.collectionId !== filters.collectionId) {
          return false;
        }
      }

      // Aspect Ratio
      if (filters.aspectRatio !== "ALL" && work.aspectRatio !== filters.aspectRatio) {
        return false;
      }

      // Featured only
      if (filters.featuredOnly && !work.isFeatured) {
        return false;
      }

      // Archived only
      if (filters.archivedOnly && !work.isArchived) {
        return false;
      }
      return true;
    });
  }, [works, filters]);
  return <div className="w-full max-w-full min-w-0 overflow-x-hidden p-4 lg:p-6 bg-background text-foreground space-y-6" data-api-unique-id='page-rd3db6c264e150acd-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page'>
      {/* 1. Header & Metric Statistics */}
      <CatalogHeader totalPlates={totalWorks} featuredCount={featuredCount} archivedCount={archivedCount} categoriesCount={categories.length} onOpenNewPlate={handleOpenNewWork} onOpenNewCategory={handleOpenNewCategory} data-api-unique-id='page-r2a308ebf5255e3fd-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page' />

      {/* 2. Curatorial Category Sequence & Genre Pills */}
      <CategoryPills categories={categories} activeCategoryId={filters.categoryId} onSelectCategory={handleSelectGenrePill} onEditCategory={handleEditCategory} onMoveCategoryOrder={handleReorderCategories} data-api-unique-id='page-r89d95c42af20f717-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page' />

      {/* 3. Comprehensive Multi-dimensional Filter Bar */}
      <CatalogFilterBar filters={filters} categories={categories} collections={collections} onFilterChange={handleFilterChange} onResetFilters={handleResetFilters} data-api-unique-id='page-r126e5661d7163b89-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page' />

      {/* 4. High-density Master Plates Inventory Data Table */}
      <MasterPlatesTable works={filteredWorks} categories={categories} collections={collections} onToggleFeatured={handleToggleFeatured} onToggleArchive={handleToggleArchive} onEditWork={handleEditWork} onDeleteWork={handleDeleteWork} onReorderWork={handleReorderWork} data-api-unique-id='page-r109f824aa24afa2e-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page' />

      {/* 5. 540px Slide-Over Drawer for Master Plate Editing */}
      <PlateEditorDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} onSubmit={handleSaveWork} categories={categories} collections={collections} initialValues={editingWork} data-api-unique-id='page-r82eebe1cca327fff-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page' />

      {/* 6. Modal Dialog for Category Editing & Creation */}
      <CategoryModal isOpen={isCategoryModalOpen} onClose={() => setIsCategoryModalOpen(false)} onSubmit={handleSaveCategory} initialCategory={editingCategory} data-api-unique-id='page-r4f0655f5705aacc1-s3749234646' data-api-unique-page-name='app/(backend)/workscatalog/page' />
    </div>;
}