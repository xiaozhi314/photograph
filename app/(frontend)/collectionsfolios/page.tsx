"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getFoliosPageData, getWorksByCollectionId } from "@/frontend/actions/CollectionsFolios";
import type { PhotoCollectionItem, PhotographyWorkItem } from "@/frontend/types/CollectionsFolios";
import { CollectionsFolios } from "@/frontend/route-params";
import FolioCuratorialHeader from "@/frontend/components/CollectionsFolios/FolioCuratorialHeader";
import RollSelectorStrip from "@/frontend/components/CollectionsFolios/RollSelectorStrip";
import MasterPlatesCatalog from "@/frontend/components/CollectionsFolios/MasterPlatesCatalog";
import PlateLightboxModal from "@/frontend/components/CollectionsFolios/PlateLightboxModal";
import DarkroomCommissionBanner from "@/frontend/components/CollectionsFolios/DarkroomCommissionBanner";
export default function CollectionsFoliosPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCollectionId = CollectionsFolios.getParams(searchParams).collectionId;
  const [collections, setCollections] = useState<PhotoCollectionItem[]>([]);
  const [activeCollection, setActiveCollection] = useState<PhotoCollectionItem | null>(null);
  const [works, setWorks] = useState<PhotographyWorkItem[]>([]);
  const [selectedPlateForLightbox, setSelectedPlateForLightbox] = useState<PhotographyWorkItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  // Load initial folios page data
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await getFoliosPageData(initialCollectionId || undefined);
        if (isMounted) {
          setCollections(data.collections);
          setActiveCollection(data.activeCollection);
          setWorks(data.works);
        }
      } catch (err) {
        console.error("Failed to load folios page data:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [initialCollectionId]);

  // Handle switching active series folio
  const handleSelectFolio = async (collectionId: string) => {
    if (activeCollection?.id === collectionId) return;
    const matchedCollection = collections.find(c => c.id === collectionId) || null;
    setActiveCollection(matchedCollection);

    // Update URL query parameters seamlessly
    CollectionsFolios.navigateToFolio(router, {
      collectionId
    });

    // Fetch master plates associated with the newly selected collection
    startTransition(async () => {
      try {
        const newWorks = await getWorksByCollectionId(collectionId);
        setWorks(newWorks);
      } catch (err) {
        console.error("Failed to fetch works for collection:", collectionId, err);
      }
    });
  };
  const handleInspectPlate = (work: PhotographyWorkItem) => {
    setSelectedPlateForLightbox(work);
  };
  const handleCloseLightbox = () => {
    setSelectedPlateForLightbox(null);
  };
  return <div className="min-h-screen bg-background text-foreground flex flex-col" data-api-unique-id='page-r2bbac8cda1d6b3a6-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page'>
      {/* Folio Curatorial Header */}
      <FolioCuratorialHeader activeCollection={activeCollection} data-api-unique-id='page-rb6ec0928a1fafb5d-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page' />

      {/* Horizontal Film Roll Selector Strip */}
      <RollSelectorStrip collections={collections} activeId={activeCollection?.id} onSelectFolio={handleSelectFolio} data-api-unique-id='page-rcf5152adda1bbe18-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page' />

      {/* Master Photography Plates Catalog */}
      <main className="flex-1 relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" data-api-unique-id='page-rd93e52e47dd7ff39-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page'>
        {isPending && <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] z-10 flex items-center justify-center transition-opacity" data-api-unique-id='page-r860a3d1d8dab8185-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page'>
            <span className="font-mono text-xs uppercase tracking-widest text-primary bg-card px-4 py-2 border border-border shadow-md" data-api-unique-id='page-r1a1b607a9ec70f62-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page'>
              Retrieving Archival Plates...
            </span>
          </div>}
        {activeCollection && <MasterPlatesCatalog collection={activeCollection} plates={works} onSelectPlate={handleInspectPlate} data-api-unique-id='page-rcb264eb937c69c32-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page' />}
      </main>

      {/* Darkroom Studio Acquisition & Custom Commission Prompt */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16" data-api-unique-id='page-rb82fb67ea768fc22-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page'>
        <DarkroomCommissionBanner currentMedium={activeCollection?.medium} data-api-unique-id='page-r9d6224cb933650b0-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page' />
      </div>

      {/* Medium-Format Grain & Tonal Inspection Lightbox Modal */}
      <PlateLightboxModal plate={selectedPlateForLightbox} isOpen={Boolean(selectedPlateForLightbox)} onClose={handleCloseLightbox} data-api-unique-id='page-rbdcf1e082ef26fd2-s3659166145' data-api-unique-page-name='app/(frontend)/collectionsfolios/page' />
    </div>;
}