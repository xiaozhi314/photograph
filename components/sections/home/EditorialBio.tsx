"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/frontend-home";
import { Award, Compass, BookOpen } from "lucide-react";

export default function EditorialBio() {
  const awards = [
    {
      year: "2024",
      name: "International Architectural Photography Prize",
      organization: "Fondazione Architettura Milano",
      note: "Gold Medal for Brutalist Sanctuaries Series",
    },
    {
      year: "2023",
      name: "Tokyo Monograph Heritage Fellowship",
      organization: "National Museum of Modern Art, Tokyo",
      note: "Special Juror Citation for Analog Preservation",
    },
    {
      year: "2021",
      name: "Prix de la Photographie Silencieuse",
      organization: "Rencontres d'Arles",
      note: "Selected Folio in Modernist Chiaroscuro",
    },
  ];

  const editorialClients = [
    "Architectural Digest",
    "Domus",
    "The New Yorker",
    "A+U Architecture",
    "Cereal Magazine",
    "Apartamento",
    "Phaidon Press",
    "Casabella",
  ];

  return (
    <section
      id="profile-bio"
      data-controller-name="Photographer Editorial Bio"
      className="w-full bg-card text-card-foreground border-t border-border/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Darkroom Process Portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden rounded-sm border border-border/80 bg-background">
              <div className="aspect-[4/5] w-full">
                <EditableImg
                  src={generatedImagesByFilename["photographer-darkroom-bio"]}
                  alt="Julian Vane examining prints in analog darkroom"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Caption pill */}
              <div className="p-3 bg-card border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Darkroom Atelier 04</span>
                <span>Silver Gelatin Batch 89/120</span>
              </div>
            </div>

            <div className="p-5 rounded-sm bg-muted text-muted-foreground border border-border/60 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-medium block">
                Philosophy of Negative Space
              </span>
              <p className="text-xs leading-relaxed font-body">
                &ldquo;A building or a face is never truly captured by saturation. Truth lives in the unlit margin, where geometry yields to silence and time ceases its insistence.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Philosophy & Selected Accolades */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Compass className="w-3.5 h-3.5" />
                <span>Biography &amp; Praxis</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display tracking-tight text-card-foreground leading-tight">
                Julian Vane is an architectural documentarian and fine art portraitist working between Milan and Tokyo.
              </h2>

              <div className="space-y-4 text-sm text-muted-foreground font-body leading-relaxed pt-2">
                <p>
                  Trained in classical architectural draftsmanship at Politecnico di Milano before apprenticing under Japanese darkroom masters in Kyoto, Vane approaches the photographic frame as a structural elevation. His practice interrogates modernism, monumental silence, and the tactile qualities of raw limestone, poured concrete, and handwoven textiles.
                </p>
                <p>
                  Every commission is executed with bespoke silver halide workflows, large-format mechanical field cameras, and archival printmaking standards suited for institutional monographs and private museum collections.
                </p>
              </div>
            </div>

            {/* Selected Accolades List */}
            <div className="space-y-4 pt-4 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-card-foreground font-medium">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span>Selected Honors &amp; Recognitions</span>
              </div>

              <div className="divide-y divide-border/60">
                {awards.map((award) => (
                  <div key={award.name} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-card-foreground">{award.name}</p>
                      <p className="text-xs text-muted-foreground">{award.organization} — {award.note}</p>
                    </div>
                    <span className="text-xs font-mono text-primary font-medium shrink-0">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Client Roll */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Selected Editorial Commissions &amp; Press</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {editorialClients.map((client) => (
                  <span
                    key={client}
                    className="text-xs px-2.5 py-1 rounded-sm border border-border/80 bg-background text-foreground font-body"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}