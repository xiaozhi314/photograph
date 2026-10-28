"use client";

import React, { useState, useEffect, useMemo } from "react";
import CuratorialHeader from "@/frontend/components/WorksPortfolio/CuratorialHeader";
import MasonryPlateWall from "@/frontend/components/WorksPortfolio/MasonryPlateWall";
import PlateInspectionLightbox from "@/frontend/components/WorksPortfolio/PlateInspectionLightbox";
import CommissionProvenanceCallout from "@/frontend/components/WorksPortfolio/CommissionProvenanceCallout";
import { getPortfolioData } from "@/frontend/actions/WorksPortfolio";
import { PhotoCategoryItem, PhotographyWorkItem } from "@/frontend/types/WorksPortfolio";
const INITIAL_CATEGORIES: PhotoCategoryItem[] = [{
  id: "cat-arch",
  slug: "architecture",
  name: "Architecture",
  sortOrder: 1,
  worksCount: 2,
  description: null
}, {
  id: "cat-port",
  slug: "portraiture",
  name: "Portraiture",
  sortOrder: 2,
  worksCount: 2,
  description: null
}, {
  id: "cat-land",
  slug: "landscape",
  name: "Landscape",
  sortOrder: 3,
  worksCount: 2,
  description: null
}, {
  id: "cat-street",
  slug: "street",
  name: "Street",
  sortOrder: 4,
  worksCount: 2,
  description: null
}, {
  id: "cat-still",
  slug: "still-life",
  name: "Still-Life",
  sortOrder: 5,
  worksCount: 2,
  description: null
}, {
  id: "cat-comm",
  slug: "commercial",
  name: "Commercial",
  sortOrder: 6,
  worksCount: 2,
  description: null
}];
const INITIAL_WORKS: PhotographyWorkItem[] = [{
  id: "work-1",
  title: "Brutalist Monolith at Dusk",
  categoryId: "cat-arch",
  categorySlug: "architecture",
  categoryName: "Architecture",
  collectionId: "col-brutal",
  collection: {
    id: "col-brutal",
    title: "Monolithic Geometries",
    rollNumber: "FOLIO-09",
    medium: "Silver Gelatin Fiber Print",
    curatorNote: "Study of structural weight and raw cast-concrete surfaces along the industrial basin.",
    aspect: "PORTRAIT",
    aspectRatioClass: "aspect-[4/5]",
    coverImage: null,
    imageCount: 14
  },
  seriesName: "Monolithic Geometries",
  location: "Milan, Italy",
  year: 2023,
  medium: "Silver Gelatin Fiber Print on Baryta Paper",
  edition: "Ed. 1/15",
  aspectRatio: "PORTRAIT",
  statement: "Exposed through a 4x5 large format field camera on Ilford FP4 Plus. The shadow gradation captures the cooling texture of pre-stressed concrete against deep twilight sky.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 1
}, {
  id: "work-2",
  title: "Alpine Silt Basin & Receding Glacial Tongue",
  categoryId: "cat-land",
  categorySlug: "landscape",
  categoryName: "Landscape",
  collectionId: "col-alpine",
  collection: {
    id: "col-alpine",
    title: "Glacial Horizons",
    rollNumber: "FOLIO-04",
    medium: "Selenium-Toned Silver Print",
    curatorNote: "Chronicle of high-altitude erosion textures and mineral sediments under diffuse overcast light.",
    aspect: "LANDSCAPE",
    aspectRatioClass: "aspect-[16/10]",
    coverImage: null,
    imageCount: 18
  },
  seriesName: "Glacial Horizons",
  location: "Engadin, Switzerland",
  year: 2022,
  medium: "Selenium-Toned Gelatin Silver Print",
  edition: "Ed. 3/10",
  aspectRatio: "LANDSCAPE",
  statement: "Captured along the Morteratsch drainage basin on medium-format 6x7 roll film. Hand-processed with pyrogallol developer to retain fragile cloud highlights and slate textures.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 2
}, {
  id: "work-3",
  title: "Portrait of Master Weaver in Raw Indigo Linen",
  categoryId: "cat-port",
  categorySlug: "portraiture",
  categoryName: "Portraiture",
  collectionId: "col-artisans",
  collection: {
    id: "col-artisans",
    title: "Studio of Solitude",
    rollNumber: "FOLIO-02",
    medium: "Warm-Tone Platinum Palladium Print",
    curatorNote: "Intimate character studies of hereditary textile craftsmen lit exclusively by northern window daylight.",
    aspect: "PORTRAIT",
    aspectRatioClass: "aspect-[4/5]",
    coverImage: null,
    imageCount: 12
  },
  seriesName: "Studio of Solitude",
  location: "Kyoto, Japan",
  year: 2024,
  medium: "Platinum Palladium Print on Gampi Washi",
  edition: "Ed. 2/8",
  aspectRatio: "PORTRAIT",
  statement: "Printed by contact on handmade Japanese washi sensitized with platinum salts. The tonality transitions imperceptibly from deep indigo shadows to luminous skin highlights.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 3
}, {
  id: "work-4",
  title: "Rain Veil Crossing at Shinjuku Junction",
  categoryId: "cat-street",
  categorySlug: "street",
  categoryName: "Street",
  collectionId: null,
  collection: null,
  seriesName: "Ephemeral Metro",
  location: "Tokyo, Japan",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 4/25",
  aspectRatio: "LANDSCAPE",
  statement: "Shot with a mechanical rangefinder through steady autumn downpour. Reflections on asphalt form an obsidian mirror echoing neon silhouettes in deep grain.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 4
}, {
  id: "work-5",
  title: "Quarry Marble Core with Carving Chisel",
  categoryId: "cat-still",
  categorySlug: "still-life",
  categoryName: "Still-Life",
  collectionId: null,
  collection: null,
  seriesName: "Mineral Remains",
  location: "Carrara, Italy",
  year: 2021,
  medium: "Warm-Tone Silver Gelatin Print",
  edition: "Ed. 1/12",
  aspectRatio: "PORTRAIT",
  statement: "Arranged in the stonecutter's atelier using pure angled morning sun. Highlights on the crystalline fracture lines reveal microscopic mineral veins.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 5
}, {
  id: "work-6",
  title: "Ceramicist Vessels in Wood-Fired Ochre",
  categoryId: "cat-comm",
  categorySlug: "commercial",
  categoryName: "Commercial",
  collectionId: null,
  collection: null,
  seriesName: "Form & Vessel",
  location: "Copenhagen, Denmark",
  year: 2024,
  medium: "Archival Pigment Print on Cotton Rag",
  edition: "Ed. 2/20",
  aspectRatio: "LANDSCAPE",
  statement: "Commissioned for an architectural tableware catalogue. Calibrated natural illumination emphasizes raw clay slip glaze without artificial sheen.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 6
}, {
  id: "work-7",
  title: "Cantilevered Atrium of Spiral Shadow",
  categoryId: "cat-arch",
  categorySlug: "architecture",
  categoryName: "Architecture",
  collectionId: "col-brutal",
  collection: {
    id: "col-brutal",
    title: "Monolithic Geometries",
    rollNumber: "FOLIO-09",
    medium: "Silver Gelatin Fiber Print",
    curatorNote: "Study of structural weight and raw cast-concrete surfaces along the industrial basin.",
    aspect: "PORTRAIT",
    aspectRatioClass: "aspect-[4/5]",
    coverImage: null,
    imageCount: 14
  },
  seriesName: "Monolithic Geometries",
  location: "Basel, Switzerland",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 5/15",
  aspectRatio: "PORTRAIT",
  statement: "A geometric investigation into ascending helical stairwells. Long exposure smooths atmospheric vibration, yielding razor-sharp concrete balustrades.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 7
}, {
  id: "work-8",
  title: "Elder Botanist at the Herbarium Specimen Desk",
  categoryId: "cat-port",
  categorySlug: "portraiture",
  categoryName: "Portraiture",
  collectionId: "col-artisans",
  collection: {
    id: "col-artisans",
    title: "Studio of Solitude",
    rollNumber: "FOLIO-02",
    medium: "Warm-Tone Platinum Palladium Print",
    curatorNote: "Intimate character studies of hereditary textile craftsmen lit exclusively by northern window daylight.",
    aspect: "LANDSCAPE",
    aspectRatioClass: "aspect-[16/10]",
    coverImage: null,
    imageCount: 12
  },
  seriesName: "Studio of Solitude",
  location: "Oxford, United Kingdom",
  year: 2022,
  medium: "Platinum Palladium Print",
  edition: "Ed. 1/8",
  aspectRatio: "LANDSCAPE",
  statement: "The botanist examines dried alpine lichens under a brass magnifying loupe. Printed on heavy Hahnemühle rag to ground the historical resonance of the archival room.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 8
}, {
  id: "work-9",
  title: "Granite Fissure under Arctic Twilight",
  categoryId: "cat-land",
  categorySlug: "landscape",
  categoryName: "Landscape",
  collectionId: "col-alpine",
  collection: {
    id: "col-alpine",
    title: "Glacial Horizons",
    rollNumber: "FOLIO-04",
    medium: "Selenium-Toned Silver Print",
    curatorNote: "Chronicle of high-altitude erosion textures and mineral sediments under diffuse overcast light.",
    aspect: "PORTRAIT",
    aspectRatioClass: "aspect-[4/5]",
    coverImage: null,
    imageCount: 18
  },
  seriesName: "Glacial Horizons",
  location: "Lofoten, Norway",
  year: 2024,
  medium: "Selenium-Toned Silver Gelatin Print",
  edition: "Ed. 3/10",
  aspectRatio: "PORTRAIT",
  statement: "Glacial sea spray frozen into basalt fissures at sub-zero temperatures. Exposure held for forty seconds on Tri-X professional sheet film.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 9
}, {
  id: "work-10",
  title: "Solitary Commuter on the Overground Viaduct",
  categoryId: "cat-street",
  categorySlug: "street",
  categoryName: "Street",
  collectionId: null,
  collection: null,
  seriesName: "Ephemeral Metro",
  location: "Berlin, Germany",
  year: 2023,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 6/25",
  aspectRatio: "PORTRAIT",
  statement: "Winter dawn sunlight slicing through curved steel railway arches. The fleeting silhouette anchors an otherwise abstract grid of industrial trusses.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 10
}, {
  id: "work-11",
  title: "Dried Poppy Seedheads in Hand-Blown Flacon",
  categoryId: "cat-still",
  categorySlug: "still-life",
  categoryName: "Still-Life",
  collectionId: null,
  collection: null,
  seriesName: "Mineral Remains",
  location: "Aix-en-Provence, France",
  year: 2022,
  medium: "Palladium Contact Print",
  edition: "Ed. 4/12",
  aspectRatio: "LANDSCAPE",
  statement: "Botanical relics harvested after summer drought, positioned inside imperfect Venetian glass. The tactile paper grain evokes antique botanical lithography.",
  imageUrl: "",
  isFeatured: false,
  isArchived: false,
  sortOrder: 11
}, {
  id: "work-12",
  title: "Precision Horology Movement with Exposed Escapement",
  categoryId: "cat-comm",
  categorySlug: "commercial",
  categoryName: "Commercial",
  collectionId: null,
  collection: null,
  seriesName: "Form & Vessel",
  location: "Geneva, Switzerland",
  year: 2024,
  medium: "Archival Pigment Print on Baryta Rag",
  edition: "Ed. 1/15",
  aspectRatio: "PORTRAIT",
  statement: "Commissioned campaign for an independent watchmaker atelier. Macro 1:1 reproduction of hand-beveled bridges and blued steel screws.",
  imageUrl: "",
  isFeatured: true,
  isArchived: false,
  sortOrder: 12
}];
export default function WorksPortfolioPage() {
  const [categories, setCategories] = useState<PhotoCategoryItem[]>(INITIAL_CATEGORIES);
  const [works, setWorks] = useState<PhotographyWorkItem[]>(INITIAL_WORKS);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>("all");
  const [inspectingWork, setInspectingWork] = useState<PhotographyWorkItem | null>(null);
  useEffect(() => {
    let mounted = true;
    async function loadPortfolio() {
      try {
        const data = await getPortfolioData();
        if (mounted && data) {
          if (Array.isArray(data.categories) && data.categories.length > 0) {
            setCategories(data.categories);
          }
          if (Array.isArray(data.works) && data.works.length > 0) {
            setWorks(data.works);
          }
        }
      } catch {
        // Keep initial curated works and categories on fetch failure
      }
    }
    loadPortfolio();
    return () => {
      mounted = false;
    };
  }, []);
  const filteredWorks = useMemo(() => {
    if (selectedCategorySlug === "all") {
      return works.filter(w => !w.isArchived);
    }
    return works.filter(w => !w.isArchived && w.categorySlug === selectedCategorySlug);
  }, [works, selectedCategorySlug]);
  const handleSelectWork = (work: PhotographyWorkItem) => {
    setInspectingWork(work);
  };
  const handleCloseInspection = () => {
    setInspectingWork(null);
  };
  return <div className="min-h-screen bg-background text-foreground flex flex-col" data-api-unique-id='page-r9e4ffa0ed8087839-s1821259124' data-api-unique-page-name='app/(frontend)/worksportfolio/page'>
      <main className="flex-1 w-full flex flex-col" data-api-unique-id='page-r128961dcaac22663-s1821259124' data-api-unique-page-name='app/(frontend)/worksportfolio/page'>
        {/* Curatorial Header with Categories */}
        <CuratorialHeader categories={categories} works={works} selectedCategorySlug={selectedCategorySlug} activeSlug={selectedCategorySlug} onSelectCategory={setSelectedCategorySlug} totalWorksCount={works.length} data-api-unique-id='page-r2e42bc4287cb1988-s1821259124' data-api-unique-page-name='app/(frontend)/worksportfolio/page' />

        {/* Masonry Master Plate Wall */}
        <MasonryPlateWall works={filteredWorks} selectedCategorySlug={selectedCategorySlug} onSelectWork={handleSelectWork} data-api-unique-id='page-r193540e1f2156bb8-s1821259124' data-api-unique-page-name='app/(frontend)/worksportfolio/page' />

        {/* Commission & Studio Provenance Callout */}
        <CommissionProvenanceCallout data-api-unique-id='page-rcbd993f3a3ab19e6-s1821259124' data-api-unique-page-name='app/(frontend)/worksportfolio/page' />
      </main>

      {/* Archival Lightbox Inspection Overlay */}
      <PlateInspectionLightbox work={inspectingWork} onClose={handleCloseInspection} data-api-unique-id='page-r980d9a78b47e325c-s1821259124' data-api-unique-page-name='app/(frontend)/worksportfolio/page' />
    </div>;
}