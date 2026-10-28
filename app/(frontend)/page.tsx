"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/frontend/components/FrontendHome/Hero";
import WorksGallery from "@/frontend/components/FrontendHome/WorksGallery";
import EditorialBio from "@/frontend/components/FrontendHome/EditorialBio";
import ExhibitionsList from "@/frontend/components/FrontendHome/ExhibitionsList";
import CommissionModule from "@/frontend/components/FrontendHome/CommissionModule";
import LightboxModal from "@/frontend/components/FrontendHome/LightboxModal";
import { getHomeInitialData } from "@/frontend/actions/FrontendHome";
import type { PhotographyWork, ExhibitionRecord, ServicePackage, ClientTestimonial, StudioBio, WorkCategory } from "@/frontend/types/FrontendHome";
const INITIAL_WORKS: PhotographyWork[] = [{
  id: "work-arch-01",
  categoryId: "cat-arch",
  categorySlug: "architecture",
  categoryName: "Architecture",
  collectionId: "col-brutalist-01",
  title: "Monolith of Silence I",
  category: "architecture",
  series: "Brutalist Sanctuaries",
  seriesName: "Brutalist Sanctuaries",
  location: "Gallaratese, Milan",
  year: 2024,
  medium: "Silver Gelatin Fiber Print",
  edition: "Ed. 1/15 · 35mm Gelatin",
  aspectRatio: "PORTRAIT",
  statement: "Study on concrete planar intersection under oblique equinox sunlight. Crafted through multi-grade gelatin darkroom balance.",
  imageUrl: "",
  isFeatured: true,
  sortOrder: 1
}, {
  id: "work-arch-02",
  categoryId: "cat-arch",
  categorySlug: "architecture",
  categoryName: "Architecture",
  collectionId: "col-enclaves-02",
  title: "Pavilion on Still Waters",
  category: "architecture",
  series: "Reflective Enclaves",
  seriesName: "Reflective Enclaves",
  location: "Kanazawa, Japan",
  year: 2023,
  medium: "Archival Pigment on Kozo Paper",
  edition: "Ed. 3/10 · 4x5 Large Format",
  aspectRatio: "LANDSCAPE",
  statement: "Horizontal balance between cedar woodwork and twilight water reflection, capturing the negative space of courtyard silence.",
  imageUrl: "",
  isFeatured: true,
  sortOrder: 2
}, {
  id: "work-port-01",
  categoryId: "cat-port",
  categorySlug: "portraiture",
  categoryName: "Portraiture",
  collectionId: "col-anatomies-03",
  title: "The Sculptor at Work",
  category: "portraiture",
  series: "Anatomies of Craft",
  seriesName: "Anatomies of Craft",
  location: "Carrara, Italy",
  year: 2024,
  medium: "Platinum Palladium Contact Print",
  edition: "Ed. 2/8 · 8x10 Deardorff",
  aspectRatio: "PORTRAIT",
  statement: "Subtle daylight falling over artisan hands and uncarved Statuario marble, honoring tactile heritage across stone and fiber.",
  imageUrl: "",
  isFeatured: false,
  sortOrder: 3
}, {
  id: "work-port-02",
  categoryId: "cat-port",
  categorySlug: "portraiture",
  categoryName: "Portraiture",
  collectionId: "col-resemblance-04",
  title: "Chiaroscuro and Linen",
  category: "portraiture",
  series: "Silent Resemblance",
  seriesName: "Silent Resemblance",
  location: "Kyoto Atelier",
  year: 2023,
  medium: "Silver Gelatin Monochrome",
  edition: "Ed. 4/12 · Hasselblad 500C/M",
  aspectRatio: "LANDSCAPE",
  statement: "An editorial interrogation of drape, negative space, and quiet human posture under diffused Japanese rice-screen illumination.",
  imageUrl: "",
  isFeatured: false,
  sortOrder: 4
}, {
  id: "work-still-01",
  categoryId: "cat-still",
  categorySlug: "still-life",
  categoryName: "Still Life",
  collectionId: "col-mineral-05",
  title: "Eucalyptus and Stoneware Vessels",
  category: "still-life",
  series: "Mineral Solitude",
  seriesName: "Mineral Solitude",
  location: "Studio Milan",
  year: 2024,
  medium: "Hand-coated Cyanotype & Toned Silver",
  edition: "Ed. 1/6 · Studio Plate",
  aspectRatio: "PORTRAIT",
  statement: "Raw clay pottery juxtaposed with botanical specimen under northern skylight, testing tonal depth across matte mineral slips.",
  imageUrl: "",
  isFeatured: false,
  sortOrder: 5
}, {
  id: "work-still-02",
  categoryId: "cat-still",
  categorySlug: "still-life",
  categoryName: "Still Life",
  collectionId: "col-mineral-05",
  title: "Geometry of Raw Brass & Marble",
  category: "still-life",
  series: "Mineral Solitude",
  seriesName: "Mineral Solitude",
  location: "Studio Tokyo",
  year: 2023,
  medium: "Gelatin Silver Print on Heavy Rag",
  edition: "Ed. 5/15 · Studio Plate",
  aspectRatio: "LANDSCAPE",
  statement: "Tactile study of weight, friction, and metallic patina on raw Japanese cedar, bathed in late-afternoon directional shadows.",
  imageUrl: "",
  isFeatured: false,
  sortOrder: 6
}];
const INITIAL_EXHIBITIONS: ExhibitionRecord[] = [{
  id: "exh-2024-milan",
  year: 2024,
  title: "Brutalist Silence: Monographic Elevations",
  institution: "Galleria d'Arte Moderna (GAM)",
  city: "Milan, Italy",
  type: "Solo Exhibition",
  exhibitionType: "SOLO_EXHIBITION",
  pressMention: "Vane strips post-war architecture of its aggressive aura, restoring it to tactile prayer and monumental serenity.",
  externalUrl: "https://www.gam-milano.com/archive/julian-vane-monographs",
  sortOrder: 1
}, {
  id: "exh-2023-tokyo",
  year: 2023,
  title: "Shadows in the Wood Grain",
  institution: "The National Art Center",
  city: "Tokyo, Japan",
  type: "Institutional",
  exhibitionType: "INSTITUTIONAL",
  pressMention: "A sublime synthesis of European structural rigor and Japanese wabi-sabi light, rendered through master darkroom craft.",
  externalUrl: "https://www.nact.jp/exhibitions/vane-shadows-wood",
  sortOrder: 2
}, {
  id: "exh-2022-arles",
  year: 2022,
  title: "Rencontres de la Photographie: Plate Dialogues",
  institution: "Atelier de la Mécanique",
  city: "Arles, France",
  type: "Biennial",
  exhibitionType: "BIENNIAL",
  pressMention: "Uncompromising darkroom craftsmanship in a landscape dominated by transient pixels. A triumph of analogue permanence.",
  externalUrl: "https://www.rencontres-arles.com/archive/2022/vane",
  sortOrder: 3
}, {
  id: "exh-2021-london",
  year: 2021,
  title: "The Architecture of the Portrait",
  institution: "Serpentine Gallery Pavilion",
  city: "London, UK",
  type: "Solo Exhibition",
  exhibitionType: "SOLO_EXHIBITION",
  pressMention: "Quiet monumentalism where person and building share identical gravitational dignity and psychological depth.",
  externalUrl: "https://www.serpentinegalleries.org/exhibitions/architecture-of-portrait",
  sortOrder: 4
}];
export default function HomePage() {
  const [works, setWorks] = useState<PhotographyWork[]>(INITIAL_WORKS);
  const [exhibitions, setExhibitions] = useState<ExhibitionRecord[]>(INITIAL_EXHIBITIONS);
  const [studioBio, setStudioBio] = useState<StudioBio | null>(null);
  const [servicePackages, setServicePackages] = useState<ServicePackage[]>([]);
  const [testimonials, setTestimonials] = useState<ClientTestimonial[]>([]);
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("all");
  const [selectedWork, setSelectedWork] = useState<PhotographyWork | null>(null);
  useEffect(() => {
    let mounted = true;
    getHomeInitialData().then(data => {
      if (!mounted || !data) return;
      if (data.studioBio) {
        setStudioBio(data.studioBio);
      }
      if (Array.isArray(data.curatedWorks) && data.curatedWorks.length > 0) {
        setWorks(data.curatedWorks);
      }
      if (Array.isArray(data.exhibitions) && data.exhibitions.length > 0) {
        setExhibitions(data.exhibitions);
      }
      if (Array.isArray(data.servicePackages) && data.servicePackages.length > 0) {
        setServicePackages(data.servicePackages);
      }
      if (Array.isArray(data.testimonials) && data.testimonials.length > 0) {
        setTestimonials(data.testimonials);
      }
    }).catch(() => {
      // Keep initial prototype content upon network or retrieval failure
    });
    return () => {
      mounted = false;
    };
  }, []);
  const handleOpenLightbox = (work: PhotographyWork) => {
    setSelectedWork(work);
  };
  const handleCloseLightbox = () => {
    setSelectedWork(null);
  };
  const handleExploreClick = () => {
    const el = document.getElementById("works-gallery");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen bg-[#faf8f5] text-[#141312]" data-api-unique-id='page-ra96a4b2a312e6958-s1152954868' data-api-unique-page-name='app/(frontend)/page'>
      {/* 1. Hero Statement Section */}
      <Hero onExploreClick={handleExploreClick} studioBio={studioBio} data-api-unique-id='page-r373b006b71ec961a-s1152954868' data-api-unique-page-name='app/(frontend)/page' />

      {/* 2. Curated Master Plates Gallery */}
      <div id="works-gallery" data-api-unique-id='page-rf50074ed33cc42a1-s1152954868' data-api-unique-page-name='app/(frontend)/page'>
        <WorksGallery works={works} activeCategory={activeCategory} onCategoryChange={setActiveCategory} onSelectWork={handleOpenLightbox} data-api-unique-id='page-rc1ad1d2cd3303c40-s1152954868' data-api-unique-page-name='app/(frontend)/page' />
      </div>

      {/* 3. Editorial Artist Profile & Darkroom Narrative */}
      <EditorialBio studioBio={studioBio} data-api-unique-id='page-r289e9d9087c8422d-s1152954868' data-api-unique-page-name='app/(frontend)/page' />

      {/* 4. Institutional Exhibition History */}
      <ExhibitionsList exhibitions={exhibitions} data-api-unique-id='page-ra5090aee5bd46d59-s1152954868' data-api-unique-page-name='app/(frontend)/page' />

      {/* 5. Direct Commission Intake Module */}
      <CommissionModule servicePackages={servicePackages.length > 0 ? servicePackages : undefined} testimonials={testimonials.length > 0 ? testimonials : undefined} data-api-unique-id='page-r6c9bd1f216d058bd-s1152954868' data-api-unique-page-name='app/(frontend)/page' />

      {/* 6. Curatorial Inspection Lightbox Overlay */}
      <LightboxModal work={selectedWork} onClose={handleCloseLightbox} data-api-unique-id='page-rc8fd802dd75b24c5-s1152954868' data-api-unique-page-name='app/(frontend)/page' />
    </div>;
}