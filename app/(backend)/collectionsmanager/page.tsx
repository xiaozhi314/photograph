"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { PhotoCollectionItem, PhotographyWorkPlate, SaveCollectionInput } from "@/backend/types/CollectionsManager";
import { getCollectionsManagerData, toggleCollectionVisibility, toggleCollectionFeatured, saveCollectionFolio } from "@/backend/actions/CollectionsManager";
import FolioOverviewMetrics from "@/backend/components/CollectionsManager/FolioOverviewMetrics";
import FolioCatalogTable from "@/backend/components/CollectionsManager/FolioCatalogTable";
import FolioEditorDrawer from "@/backend/components/CollectionsManager/FolioEditorDrawer";
import PlatesInspectorPanel from "@/backend/components/CollectionsManager/PlatesInspectorPanel";
import { useAdminSession } from "@/tools/BackendSession";
import { toast } from "sonner";

// Initial UI-phase fallback data aligning with PhotoCollection and PhotographyWork vocabulary
const INITIAL_COLLECTIONS: PhotoCollectionItem[] = [{
  id: "col-001",
  title: "Solitude in Basalt & Sea Fog",
  rollNumber: "Roll No. 042",
  medium: "120 Medium Format / Portra 160",
  curatorNote: "Tonal study of northern basalt columns exposed at twilight. Developed in D-76 at 20°C for 9.5 minutes. Warm sepia split toning on double-weight fiber paper.",
  aspect: "PORTRAIT",
  aspectRatioClass: "aspect-[4/5]",
  coverImage: null,
  imageCount: 14,
  isVisible: true,
  featuredOnHome: true,
  sortOrder: 10,
  createdAt: new Date("2024-01-12T08:30:00Z"),
  updatedAt: new Date("2024-03-01T14:20:00Z")
}, {
  id: "col-002",
  title: "Nocturne: Tokyo Neon & Wet Asphalt",
  rollNumber: "Roll No. 058",
  medium: "35mm Tri-X 400 pushed to 1600 / Rodinal",
  curatorNote: "High-contrast grain structure captured along Shinjuku backstreets after midnight downpour. Hand-printed on Ilford Galerie Warmtone glossy bromide sheets.",
  aspect: "LANDSCAPE",
  aspectRatioClass: "aspect-[3/2]",
  coverImage: null,
  imageCount: 18,
  isVisible: true,
  featuredOnHome: true,
  sortOrder: 20,
  createdAt: new Date("2024-01-20T11:15:00Z"),
  updatedAt: new Date("2024-03-04T09:45:00Z")
}, {
  id: "col-003",
  title: "Terracotta Shadows & Tuscan Cypress",
  rollNumber: "Roll No. 063",
  medium: "Large Format 4x5 Kodak Ektar 100",
  curatorNote: "Raking morning illumination across Val d'Orcia agricultural contours. Front standard tilt applied for infinite plane of sharp focus.",
  aspect: "LANDSCAPE",
  aspectRatioClass: "aspect-[4/5]",
  coverImage: null,
  imageCount: 12,
  isVisible: true,
  featuredOnHome: false,
  sortOrder: 30,
  createdAt: new Date("2024-02-05T16:00:00Z"),
  updatedAt: new Date("2024-03-08T18:10:00Z")
}, {
  id: "col-004",
  title: "Atelier Still Lifes & Dried Flora",
  rollNumber: "Roll No. 071",
  medium: "120 Ilford HP5+ / Pyrocat-HD Stand",
  curatorNote: "Delicate micro-contrast gradation of botanical specimens under north-facing frosted atelier skylight. Platinum-palladium contact print edition.",
  aspect: "PORTRAIT",
  aspectRatioClass: "aspect-[1/1]",
  coverImage: null,
  imageCount: 9,
  isVisible: false,
  featuredOnHome: false,
  sortOrder: 40,
  createdAt: new Date("2024-02-18T10:40:00Z"),
  updatedAt: new Date("2024-03-10T11:20:00Z")
}, {
  id: "col-005",
  title: "High Alpine Glacial Silt & Moraine Textures of the Bernese Oberland Ridge",
  rollNumber: "Roll No. 088-ALP",
  medium: "6x7 Medium Format / Fujifilm Pro 400H / ECN-2 Cross Processing",
  curatorNote: "Extreme tonal breadth study across terminal moraines and crevasses in late autumn. Archival pigment print with mineral carbon black pigment inks.",
  aspect: "LANDSCAPE",
  aspectRatioClass: "aspect-[3/2]",
  coverImage: null,
  imageCount: 22,
  isVisible: true,
  featuredOnHome: false,
  sortOrder: 50,
  createdAt: new Date("2024-02-28T07:15:00Z"),
  updatedAt: new Date("2024-03-11T16:05:00Z")
}];
const INITIAL_PLATES: PhotographyWorkPlate[] = [{
  id: "plt-101",
  title: "Basalt Column III: The Low Tide Monolith",
  categoryId: "cat-landscape",
  collectionId: "col-001",
  seriesName: "Solitude in Basalt & Sea Fog",
  location: "Reynisfjara Coast, Vík",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Edition of 5 + 2 AP",
  aspectRatio: "PORTRAIT",
  statement: "Plate captured at astronomical twilight with 30-second bulb exposure under dense North Atlantic sea spray.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 1,
  createdAt: new Date("2024-01-12T08:35:00Z"),
  updatedAt: new Date("2024-01-12T08:35:00Z")
}, {
  id: "plt-102",
  title: "Basalt Column VII: Receding Breaker",
  categoryId: "cat-landscape",
  collectionId: "col-001",
  seriesName: "Solitude in Basalt & Sea Fog",
  location: "Dyrhólaey Peninsula",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Edition of 5 + 2 AP",
  aspectRatio: "PORTRAIT",
  statement: "Tidal backwash creating fine foam striations against hexagonal volcanic rock columns.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 2,
  createdAt: new Date("2024-01-12T08:40:00Z"),
  updatedAt: new Date("2024-01-12T08:40:00Z")
}, {
  id: "plt-103",
  title: "Basalt Column IX: Archival Plate Proof",
  categoryId: "cat-landscape",
  collectionId: "col-001",
  seriesName: "Solitude in Basalt & Sea Fog",
  location: "Black Sand Lagoon",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Edition of 5 + 2 AP",
  aspectRatio: "LANDSCAPE",
  statement: "Full tonal master plate with deep shadow density calibrated for gallery illumination.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 3,
  createdAt: new Date("2024-01-12T08:45:00Z"),
  updatedAt: new Date("2024-01-12T08:45:00Z")
}, {
  id: "plt-201",
  title: "Kabukicho Crossing: Midnight Rain Streamers",
  categoryId: "cat-street",
  collectionId: "col-002",
  seriesName: "Nocturne: Tokyo Neon & Wet Asphalt",
  location: "Shinjuku, Tokyo",
  year: 2023,
  medium: "Ilford Galerie Bromide Print",
  edition: "Edition of 8 + 1 AP",
  aspectRatio: "LANDSCAPE",
  statement: "Pushed 35mm grain rendering sodium vapor reflections through pedestrian umbrellas.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 1,
  createdAt: new Date("2024-01-20T11:20:00Z"),
  updatedAt: new Date("2024-01-20T11:20:00Z")
}, {
  id: "plt-202",
  title: "Omoide Yokocho Steam Vent #4",
  categoryId: "cat-street",
  collectionId: "col-002",
  seriesName: "Nocturne: Tokyo Neon & Wet Asphalt",
  location: "Memory Lane, Tokyo",
  year: 2023,
  medium: "Ilford Galerie Bromide Print",
  edition: "Edition of 8 + 1 AP",
  aspectRatio: "PORTRAIT",
  statement: "Backlit kitchen exhaust steam drifting past wooden counter stools and lantern glow.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 2,
  createdAt: new Date("2024-01-20T11:25:00Z"),
  updatedAt: new Date("2024-01-20T11:25:00Z")
}, {
  id: "plt-301",
  title: "Pienza Ridge Road at 06:15",
  categoryId: "cat-landscape",
  collectionId: "col-003",
  seriesName: "Terracotta Shadows & Tuscan Cypress",
  location: "Val d'Orcia, Tuscany",
  year: 2022,
  medium: "Chromogenic C-Type Print",
  edition: "Edition of 3 + 1 AP",
  aspectRatio: "LANDSCAPE",
  statement: "Warm raking golden hour shadow cast by solitary sentinel cypress trees along chalk roadway.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 1,
  createdAt: new Date("2024-02-05T16:05:00Z"),
  updatedAt: new Date("2024-02-05T16:05:00Z")
}, {
  id: "plt-401",
  title: "Echinops & Dry Fennel Stem Study",
  categoryId: "cat-still-life",
  collectionId: "col-004",
  seriesName: "Atelier Still Lifes & Dried Flora",
  location: "Julian Vane Studio, Berlin",
  year: 2024,
  medium: "Platinum-Palladium Print",
  edition: "Unique Master Plate 1/1",
  aspectRatio: "PORTRAIT",
  statement: "Hand-coated Japanese Gampi vellum paper with hand-drawn charcoal boundary margins.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 1,
  createdAt: new Date("2024-02-18T10:45:00Z"),
  updatedAt: new Date("2024-02-18T10:45:00Z")
}, {
  id: "plt-501",
  title: "Aletsch Silt Band VI: The Crevasse Lip",
  categoryId: "cat-landscape",
  collectionId: "col-005",
  seriesName: "High Alpine Glacial Silt & Moraine Textures of the Bernese Oberland Ridge",
  location: "Jungfrau Region, Switzerland",
  year: 2023,
  medium: "Archival Pigment on Hahnemühle Photo Rag",
  edition: "Edition of 5 + 2 AP",
  aspectRatio: "LANDSCAPE",
  statement: "Fine micro-striations of crushed granite sediment suspended in centuries-old turquoise ice.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 1,
  createdAt: new Date("2024-02-28T07:20:00Z"),
  updatedAt: new Date("2024-02-28T07:20:00Z")
}];
export default function CollectionsManagerPage() {
  const session = useAdminSession();
  const [collections, setCollections] = useState<PhotoCollectionItem[]>(INITIAL_COLLECTIONS);
  const [plates, setPlates] = useState<PhotographyWorkPlate[]>(INITIAL_PLATES);
  const [serverStats, setServerStats] = useState<{
    totalCollections: number;
    visibleOnWallCount: number;
    featuredOnHomeCount: number;
    totalCatalogedPlates: number;
  } | null>(null);

  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingCollection, setEditingCollection] = useState<PhotoCollectionItem | null>(null);

  // Inspector panel state
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>("col-001");

  // Fetch backend data on mount
  const refreshData = useCallback(async () => {
    try {
      const data = await getCollectionsManagerData();
      if (data) {
        if (data.collections && data.collections.length > 0) {
          setCollections(data.collections);
          // Retain valid selected collection id or fallback to first collection
          setSelectedCollectionId(prev => {
            if (prev && data.collections.some(c => c.id === prev)) {
              return prev;
            }
            return data.collections[0]?.id || null;
          });
        }
        if (data.plates && data.plates.length > 0) {
          setPlates(data.plates);
        }
        if (data.stats) {
          setServerStats(data.stats);
        }
      }
    } catch (error) {
      console.error("Failed to load collections manager data:", error);
    }
  }, []);
  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Selected collection object
  const activeCollection = useMemo(() => {
    return collections.find(c => c.id === selectedCollectionId) || null;
  }, [collections, selectedCollectionId]);

  // Linked plates for selected collection
  const linkedPlates = useMemo(() => {
    if (!selectedCollectionId) return [];
    return plates.filter(p => p.collectionId === selectedCollectionId);
  }, [plates, selectedCollectionId]);

  // Dynamic or server-backed overview stats
  const stats = useMemo(() => {
    if (serverStats) {
      return serverStats;
    }
    return {
      totalCollections: collections.length,
      visibleOnWallCount: collections.filter(c => c.isVisible).length,
      featuredOnHomeCount: collections.filter(c => c.featuredOnHome).length,
      totalCatalogedPlates: plates.length
    };
  }, [serverStats, collections, plates]);

  // Handlers
  const handleToggleVisible = async (id: string) => {
    const targetItem = collections.find(c => c.id === id);
    if (!targetItem) return;
    const nextVal = !targetItem.isVisible;

    // Optimistic UI update
    setCollections(prev => prev.map((item, index) => item.id === id ? {
      ...item,
      isVisible: nextVal,
      updatedAt: new Date()
    } : item));
    try {
      const updated = await toggleCollectionVisibility(id, nextVal);
      if (updated) {
        setCollections(prev => prev.map((item, index) => item.id === id ? updated : item));
        toast.success(updated.isVisible ? `Folio published: ${updated.rollNumber} is now live on public wall` : `Folio hidden: ${updated.rollNumber} withdrawn from public wall`);
      }
    } catch (error) {
      // Revert optimistic update
      setCollections(prev => prev.map((item, index) => item.id === id ? {
        ...item,
        isVisible: !nextVal
      } : item));
      toast.error("Failed to update folio wall visibility");
    }
  };
  const handleToggleFeatured = async (id: string) => {
    const targetItem = collections.find(c => c.id === id);
    if (!targetItem) return;
    const nextVal = !targetItem.featuredOnHome;

    // Optimistic UI update
    setCollections(prev => prev.map((item, index) => item.id === id ? {
      ...item,
      featuredOnHome: nextVal,
      updatedAt: new Date()
    } : item));
    try {
      const updated = await toggleCollectionFeatured(id, nextVal);
      if (updated) {
        setCollections(prev => prev.map((item, index) => item.id === id ? updated : item));
        toast.success(updated.featuredOnHome ? `Pinned to Home: ${updated.rollNumber} highlighted on showcase` : `Unpinned from Home: ${updated.rollNumber} removed from showcase`);
      }
    } catch (error) {
      // Revert optimistic update
      setCollections(prev => prev.map((item, index) => item.id === id ? {
        ...item,
        featuredOnHome: !nextVal
      } : item));
      toast.error("Failed to toggle home feature pin");
    }
  };
  const handleOpenCreateDrawer = () => {
    setEditingCollection(null);
    setIsDrawerOpen(true);
  };
  const handleOpenEditDrawer = (collection: PhotoCollectionItem) => {
    setEditingCollection(collection);
    setIsDrawerOpen(true);
  };
  const handleSaveFolio = async (folioData: Partial<PhotoCollectionItem>) => {
    const isEdit = Boolean(editingCollection?.id);
    const input: SaveCollectionInput = {
      id: editingCollection?.id,
      title: folioData.title || (isEdit && editingCollection ? editingCollection.title : "Untitled Master Series"),
      rollNumber: folioData.rollNumber || (isEdit && editingCollection ? editingCollection.rollNumber : `Roll No. 0${collections.length + 1}`),
      medium: folioData.medium || (isEdit && editingCollection ? editingCollection.medium : "120 Medium Format / Kodak Portra 400"),
      curatorNote: folioData.curatorNote !== undefined ? folioData.curatorNote : editingCollection?.curatorNote || "",
      aspect: folioData.aspect || editingCollection?.aspect || "PORTRAIT",
      aspectRatioClass: folioData.aspectRatioClass || editingCollection?.aspectRatioClass || "aspect-[4/5]",
      coverImage: folioData.coverImage !== undefined ? folioData.coverImage : editingCollection?.coverImage ?? null,
      imageCount: typeof folioData.imageCount === "number" ? folioData.imageCount : editingCollection?.imageCount ?? 0,
      isVisible: folioData.isVisible !== undefined ? folioData.isVisible : editingCollection?.isVisible ?? true,
      featuredOnHome: folioData.featuredOnHome !== undefined ? folioData.featuredOnHome : editingCollection?.featuredOnHome ?? false,
      sortOrder: typeof folioData.sortOrder === "number" ? folioData.sortOrder : editingCollection?.sortOrder ?? (collections.length + 1) * 10
    };
    try {
      const saved = await saveCollectionFolio(input);
      if (saved) {
        if (isEdit) {
          setCollections(prev => prev.map((c, index) => c.id === saved.id ? saved : c));
          toast.success(`Folio updated: ${saved.title}`);
        } else {
          setCollections(prev => [saved, ...prev]);
          setSelectedCollectionId(saved.id);
          toast.success(`New folio cataloged: ${saved.rollNumber}`);
        }
      }
      setIsDrawerOpen(false);
      // Refresh to ensure aggregate counts stay aligned
      refreshData();
    } catch (error) {
      console.error("Failed to save folio:", error);
      toast.error(isEdit ? "Failed to update folio" : "Failed to catalog new folio");
    }
  };
  const handleSelectCollectionForInspection = (id: string) => {
    setSelectedCollectionId(id);
  };
  return <div className="w-full max-w-full min-w-0 overflow-x-hidden p-4 lg:p-6 bg-background text-foreground flex flex-col gap-6" data-api-unique-id='page-r12f1f279093c6d8b-s842237460' data-api-unique-page-name='app/(backend)/collectionsmanager/page'>
      {/* Curation Desk Header & Metrics */}
      <FolioOverviewMetrics stats={stats} onNewFolioClick={handleOpenCreateDrawer} data-api-unique-id='page-ra9f89e358e755fdc-s842237460' data-api-unique-page-name='app/(backend)/collectionsmanager/page' />

      {/* Main Administrative Catalog Table of Photographic Series Folios */}
      <FolioCatalogTable collections={collections} selectedCollectionId={selectedCollectionId} onToggleVisible={handleToggleVisible} onToggleFeatured={handleToggleFeatured} onEditFolio={handleOpenEditDrawer} onInspectPlates={handleSelectCollectionForInspection} data-api-unique-id='page-r57ac404cc2969ace-s842237460' data-api-unique-page-name='app/(backend)/collectionsmanager/page' />

      {/* Series Plates Inspector Panel: Contact Sheet verification for active collection */}
      <PlatesInspectorPanel collection={activeCollection} plates={linkedPlates} onClose={() => setSelectedCollectionId(null)} onOpenEditFolio={() => {
      if (activeCollection) {
        handleOpenEditDrawer(activeCollection);
      }
    }} data-api-unique-id='page-r582b044b999924f1-s842237460' data-api-unique-page-name='app/(backend)/collectionsmanager/page' />

      {/* Slide-over Drawer for Creating/Updating Photographic Series Folio */}
      <FolioEditorDrawer isOpen={isDrawerOpen} initialData={editingCollection} onClose={() => setIsDrawerOpen(false)} onSave={handleSaveFolio} data-api-unique-id='page-r3d405e2f50210457-s842237460' data-api-unique-page-name='app/(backend)/collectionsmanager/page' />
    </div>;
}