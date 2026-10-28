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
  return <section data-controller-name="Hero Section" className="relative w-full overflow-hidden bg-background" data-api-unique-id='hero-rb78f2c879852f0ad-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
      {/* Full-width arresting architectural photograph */}
      <div className="relative min-h-[82vh] sm:min-h-[88vh] w-full flex items-end" data-api-unique-id='hero-r551218216e357891-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
        <EditableImg propKey="hero-brutalist-light" src={generatedImagesByFilename["hero-brutalist-light"]} alt={`Brutalist architectural light and shadow by ${artistName}`} className="absolute inset-0 h-full w-full object-cover" data-api-unique-id='hero-rba70b36916798ad7-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />

        {/* Ambient Darkroom Scrim & Studio Vignette to guarantee high text-to-background contrast */}
        <div className="absolute inset-0 bg-neutral-950/60 transition-colors" data-api-unique-id='hero-r3dfa12a493d64b6e-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-neutral-950/30" data-api-unique-id='hero-rd9b1e159c6667543-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />

        {/* Seamless bottom transition into curated works section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent" data-api-unique-id='hero-rded38788719774f1-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />

        {/* Hero Frontstage Content */}
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-14 sm:pb-20 lg:pb-24" data-api-unique-id='hero-r2e93935c8601bd21-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8" data-api-unique-id='hero-r27d2965408d0d87d-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
            <div className="max-w-3xl space-y-5" data-api-unique-id='hero-r52df13497cb1d2db-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-widest uppercase font-mono text-neutral-300" data-api-unique-id='hero-r396b02a296a2d44f-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                <span className="font-semibold text-white tracking-wider" data-api-unique-id='hero-rea48d56d6f6d7a05-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>{studioName}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-500" data-api-unique-id='hero-ra2e6cf140b962482-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
                <span className="text-neutral-300" data-api-unique-id='hero-rf8d5757c952f44d5-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>Analog &amp; Architecture</span>
                <span className="h-1 w-1 rounded-full bg-neutral-500" data-api-unique-id='hero-r2d13278cc6e3997f-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
                <span className="text-neutral-300" data-api-unique-id='hero-r836f5bf8fa3eebc6-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>{atelierLocation}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-[1.08] text-balance drop-shadow-sm" data-api-unique-id='hero-rd4b89a1d5c7701bd-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                {quote}
              </h1>

              <p className="text-sm sm:text-base text-neutral-200 max-w-xl leading-relaxed font-light" data-api-unique-id='hero-r69f94de64f0fbff4-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                Documenting the interplay of monumental geometry, tactile surfaces, and contemplative human presence across silver gelatin plates and natural illumination.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4" data-api-unique-id='hero-r61bcafcc133f6e2a-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
              <button type="button" onClick={handleExplore} className="group inline-flex items-center gap-3 bg-white text-neutral-950 hover:bg-neutral-100 active:bg-neutral-200 transition-colors px-6 py-3.5 text-xs tracking-wider uppercase font-medium rounded-sm shadow-md cursor-pointer" data-api-unique-id='hero-r4ca40a92853968f0-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                <span data-api-unique-id='hero-r0d9d82959f17ae2d-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>View Curated Works</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" data-api-unique-id='hero-r9a687800c30c82bf-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
              </button>

              <button type="button" onClick={handleCommissionClick} className="inline-flex items-center gap-2 border border-white/30 bg-black/40 hover:bg-white/10 active:bg-white/15 text-white transition-colors px-5 py-3.5 text-xs tracking-wider uppercase font-medium rounded-sm backdrop-blur-md cursor-pointer shadow-sm" data-api-unique-id='hero-r8bceeb644968b083-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>
                <Compass className="w-3.5 h-3.5 text-neutral-300" data-api-unique-id='hero-r55f22af46d4e81a9-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero' />
                <span data-api-unique-id='hero-rc07cd5b3c2ee822f-s807183965' data-api-unique-page-name='src/frontend/components/FrontendHome/Hero'>Commission Studio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}