"use client";

import React, { useState } from "react";
import Hero from "@/frontend/components/home/Hero";
import WorksGallery from "@/frontend/components/home/WorksGallery";
import EditorialBio from "@/frontend/components/home/EditorialBio";
import ExhibitionsList from "@/frontend/components/home/ExhibitionsList";
import CommissionModule from "@/frontend/components/home/CommissionModule";
import LightboxModal from "@/frontend/components/home/LightboxModal";
import type { PhotographyWork, WorkCategory, ExhibitionRecord } from "@/frontend/types/home";

const CURATED_WORKS: PhotographyWork[] = [
  {
    id: "work-arch-01",
    title: "Monolith of Silence I",
    category: "architecture",
    series: "Brutalist Sanctuaries",
    location: "Gallaratese, Milan",
    year: "2024",
    medium: "Silver Gelatin Fiber Print",
    edition: "Ed. 1/15 · 35mm Gelatin",
    aspectRatio: "portrait",
    statement: "Study on concrete planar intersection under oblique equinox sunlight.",
  },
  {
    id: "work-arch-02",
    title: "Pavilion on Still Waters",
    category: "architecture",
    series: "Reflective Enclaves",
    location: "Kanazawa, Japan",
    year: "2023",
    medium: "Archival Pigment on Kozo Paper",
    edition: "Ed. 3/10 · 4x5 Large Format",
    aspectRatio: "landscape",
    statement: "Horizontal balance between cedar woodwork and twilight water reflection.",
  },
  {
    id: "work-port-01",
    title: "The Sculptor at Work",
    category: "portraiture",
    series: "Anatomies of Craft",
    location: "Carrara, Italy",
    year: "2024",
    medium: "Platinum Palladium Contact Print",
    edition: "Ed. 2/8 · 8x10 Deardorff",
    aspectRatio: "portrait",
    statement: "Subtle daylight falling over artisan hands and uncarved Statuario marble.",
  },
  {
    id: "work-port-02",
    title: "Chiaroscuro and Linen",
    category: "portraiture",
    series: "Silent Resemblance",
    location: "Kyoto Atelier",
    year: "2023",
    medium: "Silver Gelatin Monochrome",
    edition: "Ed. 4/12 · Hasselblad 500C/M",
    aspectRatio: "landscape",
    statement: "An editorial interrogation of drape, negative space, and quiet human posture.",
  },
  {
    id: "work-still-01",
    title: "Eucalyptus and Stoneware Vessels",
    category: "still-life",
    series: "Mineral Solitude",
    location: "Studio Milan",
    year: "2024",
    medium: "Hand-coated Cyanotype & Toned Silver",
    edition: "Ed. 1/6 · Studio Plate",
    aspectRatio: "portrait",
    statement: "Raw clay pottery juxtaposed with botanical specimen under northern skylight.",
  },
  {
    id: "work-still-02",
    title: "Geometry of Raw Brass & Marble",
    category: "still-life",
    series: "Mineral Solitude",
    location: "Studio Tokyo",
    year: "2023",
    medium: "Gelatin Silver Print on Heavy Rag",
    edition: "Ed. 5/15 · Studio Plate",
    aspectRatio: "landscape",
    statement: "Tactile study of weight, friction, and metallic patina on raw Japanese cedar.",
  },
];

const EXHIBITIONS: ExhibitionRecord[] = [
  {
    id: "exh-2024-milan",
    year: "2024",
    title: "Brutalist Silence: Monographic Elevations",
    institution: "Galleria d'Arte Moderna (GAM)",
    city: "Milan, Italy",
    type: "Solo Exhibition",
    pressMention: "Vane strips post-war architecture of its aggressive aura, restoring it to tactile prayer.",
  },
  {
    id: "exh-2023-tokyo",
    year: "2023",
    title: "Shadows in the Wood Grain",
    institution: "The National Art Center",
    city: "Tokyo, Japan",
    type: "Institutional",
    pressMention: "A sublime synthesis of European structural rigor and Japanese wabi-sabi light.",
  },
  {
    id: "exh-2022-arles",
    year: "2022",
    title: "Rencontres de la Photographie: Plate Dialogues",
    institution: "Atelier de la Mécanique",
    city: "Arles, France",
    type: "Biennial",
    pressMention: "Uncompromising darkroom craftsmanship in a landscape dominated by transient pixels.",
  },
  {
    id: "exh-2021-london",
    year: "2021",
    title: "The Architecture of the Portrait",
    institution: "Serpentine Gallery Pavilion",
    city: "London, UK",
    type: "Solo Exhibition",
    pressMention: "Quiet monumentalism where person and building share identical gravitational dignity.",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("all");
  const [selectedWork, setSelectedWork] = useState<PhotographyWork | null>(null);

  const handleExploreClick = () => {
    const el = document.getElementById("curated-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col">
      {/* 1. Hero visual marquee */}
      <Hero onExploreClick={handleExploreClick} />

      {/* 2. Curated Works Gallery & Category Filter */}
      <WorksGallery
        works={CURATED_WORKS}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onSelectWork={(work) => setSelectedWork(work)}
      />

      {/* 3. Photographer Profile & Editorial Bio */}
      <EditorialBio />

      {/* 4. Exhibition & Press Highlights */}
      <ExhibitionsList exhibitions={EXHIBITIONS} />

      {/* 5. Direct Commission & Inquiry Module */}
      <CommissionModule />

      {/* Lightbox inspection modal */}
      <LightboxModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
}