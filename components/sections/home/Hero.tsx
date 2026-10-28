"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/frontend-home";
import { ArrowDownRight } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Full-width arresting architectural photograph */}
      <div className="relative min-h-[82vh] sm:min-h-[88vh] w-full flex items-end">
        <EditableImg
          src={generatedImagesByFilename["hero-brutalist-light"]}
          alt="Brutalist architectural light and shadow by Julian Vane"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Minimal museum vignette on photography bottom edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Hero Frontstage Content */}
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-12 sm:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-muted-foreground">
                <span>Julian Vane</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Fine Art &amp; Architecture</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Milan · Tokyo</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-foreground leading-[1.08] text-balance">
                Sculpting light, quiet as stone
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground font-body max-w-xl leading-relaxed">
                Documenting the interplay of monumental geometry, tactile surfaces, and contemplative human presence across silver gelatin and natural illumination.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors px-6 py-3.5 text-xs tracking-wider uppercase font-medium rounded-sm shadow-sm"
              >
                <span>View Curated Works</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}