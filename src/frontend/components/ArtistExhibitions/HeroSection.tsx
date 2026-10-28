"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { StudioBioData } from "@/frontend/types/ArtistExhibitions";
import { ArrowDownRight, Compass, ShieldCheck } from "lucide-react";
interface HeroSectionProps {
  bio?: StudioBioData | null;
  studioBio?: StudioBioData | null;
  onExploreTimeline?: () => void;
}
export default function HeroSection({
  bio,
  studioBio,
  onExploreTimeline
}: HeroSectionProps) {
  const currentBio = studioBio || bio;
  const artistName = currentBio?.artistName || "Julian Vane";
  const studioName = currentBio?.studioName || "Darkroom Atelier 04";
  const atelierLocation = currentBio?.atelierLocation || "Milan · Tokyo";
  const philosophyQuote = currentBio?.philosophyQuote || "Within negative space and delayed chemical reaction, architectural geometry surrenders its clinical weight to the quiet grain of silver halide.";
  const activeRepresentation = currentBio?.activeRepresentation || "Represented by Galleria Continua (San Gimignano / Paris) & Taka Ishii Gallery (Tokyo)";
  const handleScrollToTimeline = () => {
    if (onExploreTimeline) {
      onExploreTimeline();
      return;
    }
    const timelineElement = document.getElementById("exhibition-timeline-section");
    if (timelineElement) {
      timelineElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section data-controller-name="Atelier Hero and Philosophy" className="relative min-h-[82vh] w-full overflow-hidden bg-background border-b border-border" data-api-unique-id='herosection-r4f20596343bb25e5-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
      {/* Background Editorial Silver Gelatin Photo */}
      <EditableImg propKey="hero-darkroom-bg" needLargeImage keywords="analog darkroom artist silver gelatin medium format printmaker" description="Atmospheric fine art photography darkroom with master printer developing silver gelatin prints, architectural shadows and amber safe light nuances, minimal clean composition" className="absolute inset-0 h-full w-full object-cover" data-api-unique-id='herosection-rb69c4fa1c65e53c9-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection' />

      {/* Subtle tint overlay to keep high contrast while preserving editorial imagery */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" data-api-unique-id='herosection-r19eea90b6c2ea0ee-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection' />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex min-h-[82vh] flex-col justify-between py-12 lg:py-16" data-api-unique-id='herosection-r88d7c18414ec1af7-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
        {/* Top colophon bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6 text-xs text-muted-foreground uppercase tracking-widest font-mono" data-api-unique-id='herosection-r45bda28fec88ec10-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
          <div className="flex items-center gap-3" data-api-unique-id='herosection-rc50644ad00ee3933-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            <span className="inline-block h-2 w-2 rounded-full bg-primary" data-api-unique-id='herosection-r6282f5a71b181f3f-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection' />
            <span className="font-semibold text-foreground" data-api-unique-id='herosection-r6ff270094b98729f-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>{studioName}</span>
            <span className="text-border" data-api-unique-id='herosection-r9d17cb6744547379-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>/</span>
            <span data-api-unique-id='herosection-rcaf0d14497598f7c-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>{atelierLocation}</span>
          </div>
          <div className="flex items-center gap-2" data-api-unique-id='herosection-rb06c2c7887d1ecf1-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            <ShieldCheck className="h-3.5 w-3.5 text-primary" data-api-unique-id='herosection-r05299e784ffddb48-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection' />
            <span data-api-unique-id='herosection-r83796b2a42c06f85-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>Monograph Dossier · Silver Gelatin Archive</span>
          </div>
        </div>

        {/* Center Philosophy & Title */}
        <div className="max-w-4xl space-y-6 my-auto pt-8 pb-8" data-api-unique-id='herosection-r6c7763a8771fb367-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono tracking-wider" data-api-unique-id='herosection-r439e9e81f43873bc-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            <Compass className="h-3.5 w-3.5 text-primary" data-api-unique-id='herosection-r04e9b3a59958845a-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection' />
            <span data-api-unique-id='herosection-r8ef55ef931c9cc62-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>{artistName} Atelier Archive</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-foreground leading-[1.15]" data-api-unique-id='herosection-r7db8073d5a25e0bf-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            Between light, shadow, and architectural silence.
          </h1>

          <blockquote className="border-l-2 border-primary pl-5 sm:pl-6 text-base sm:text-lg lg:text-xl text-muted-foreground italic font-body max-w-3xl leading-relaxed" data-api-unique-id='herosection-r1a50841fc467449e-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            &ldquo;{philosophyQuote}&rdquo;
          </blockquote>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-muted-foreground" data-api-unique-id='herosection-r2f4c235bb6d59631-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            <div data-api-unique-id='herosection-rf73ea717343012e1-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
              <span className="text-foreground uppercase tracking-wider font-semibold" data-api-unique-id='herosection-rda618efae566f4ee-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>Representation:</span>{" "}
              <span data-api-unique-id='herosection-r87ee06feec16af6a-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>{activeRepresentation}</span>
            </div>
          </div>
        </div>

        {/* Bottom anchor action */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/80" data-api-unique-id='herosection-rdddcccc1e0a73f79-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
          <p className="text-xs font-mono text-muted-foreground tracking-wide" data-api-unique-id='herosection-r5428c4fd3f852bc6-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            PUBLIC EXHIBITIONS · BIENNIALS · INSTITUTIONAL CATALOGUES
          </p>
          <button type="button" onClick={handleScrollToTimeline} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='herosection-r8a3e4002277b12d9-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>
            <span data-api-unique-id='herosection-re9b07457e11ac79e-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection'>Explore Exhibition Index</span>
            <ArrowDownRight className="h-4 w-4" data-api-unique-id='herosection-r210da7337687ae7e-s2186223005' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/HeroSection' />
          </button>
        </div>
      </div>
    </section>;
}