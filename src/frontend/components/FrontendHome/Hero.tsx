"use client";

import React from "react";
import { useRouter } from "next/navigation";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/frontend-home";
import { ArrowDownRight, Compass } from "lucide-react";
import type { StudioBio } from "@/frontend/types/FrontendHome";
import { WorksPortfolio, CommissionBooking } from "@/frontend/route-params";
interface HeroProps {
  onExploreClick?: () => void;
  studioBio?: StudioBio | null;
}
export default function Hero({
  onExploreClick,
  studioBio
}: HeroProps) {
  const router = useRouter();
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      WorksPortfolio.navigateTo(router);
    }
  };
  const handleCommissionClick = () => {
    CommissionBooking.navigateTo(router);
  };
  const studioName = studioBio?.studioName || "Julian Vane Atelier";
  const atelierLocation = studioBio?.atelierLocation || "Milan · Tokyo";
  const artistName = studioBio?.artistName || "Julian Vane";
  const quote = studioBio?.philosophyQuote || "Sculpting light, quiet as stone";
  return <section data-controller-name="Hero Section" className="relative w-full overflow-hidden bg-background" data-api-unique-id='hero-rc461e090bd4e5790-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
      {/* Full-width arresting architectural photograph */}
      <div className="relative min-h-[82vh] sm:min-h-[88vh] w-full flex items-end" data-api-unique-id='hero-r4e6ce1f5272b4337-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
        <EditableImg propKey="hero-brutalist-light" src={generatedImagesByFilename["hero-brutalist-light"]} alt={`Brutalist architectural light and shadow by ${artistName}`} className="absolute inset-0 h-full w-full object-cover" data-api-unique-id='hero-re09afc0b257c757c-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />

        {/* Minimal museum vignette on photography bottom edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/40 to-transparent" data-api-unique-id='hero-ra4e7d85a1aed1ffb-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />

        {/* Hero Frontstage Content */}
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-12 sm:pb-16 lg:pb-20" data-api-unique-id='hero-re6b7a915357eb6b6-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8" data-api-unique-id='hero-r66eb5df9ea30cae7-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
            <div className="max-w-3xl space-y-4" data-api-unique-id='hero-r087b97f433d6281b-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-widest uppercase font-mono text-muted-foreground" data-api-unique-id='hero-r7eea5e73ee1c6b20-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                <span className="font-semibold text-foreground/80" data-api-unique-id='hero-r2a7b6c7ef299de25-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>{studioName}</span>
                <span className="h-1 w-1 rounded-full bg-border" data-api-unique-id='hero-r2426dc8d071441c7-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
                <span data-api-unique-id='hero-r06e77a742ab2d101-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>Analog &amp; Architecture</span>
                <span className="h-1 w-1 rounded-full bg-border" data-api-unique-id='hero-r47b9c26aca1a34e1-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
                <span data-api-unique-id='hero-r83b62e0ed465cdde-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>{atelierLocation}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-foreground leading-[1.08] text-balance" data-api-unique-id='hero-rab301cfc98a9ac7a-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                {quote}
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed" data-api-unique-id='hero-re9ba80e63979507a-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                Documenting the interplay of monumental geometry, tactile surfaces, and contemplative human presence across silver gelatin plates and natural illumination.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4" data-api-unique-id='hero-rfe1de514df3609b3-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
              <button type="button" onClick={handleExplore} className="group inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors px-6 py-3.5 text-xs tracking-wider uppercase font-medium rounded-sm shadow-sm cursor-pointer" data-api-unique-id='hero-rf05eaf8ec832ea3b-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                <span data-api-unique-id='hero-r616e0121963c322f-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>View Curated Works</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" data-api-unique-id='hero-r424b805d0a910f1f-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
              </button>

              <button type="button" onClick={handleCommissionClick} className="inline-flex items-center gap-2 border border-border/80 bg-background/80 hover:bg-muted text-foreground transition-colors px-5 py-3.5 text-xs tracking-wider uppercase font-medium rounded-sm backdrop-blur-sm cursor-pointer" data-api-unique-id='hero-r1500c76e568322dc-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                <Compass className="w-3.5 h-3.5 text-muted-foreground" data-api-unique-id='hero-rca3cb705b14fad7f-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
                <span data-api-unique-id='hero-r1efdf2aefc098553-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>Commission Studio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}