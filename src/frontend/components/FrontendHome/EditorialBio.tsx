"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/frontend-home";
import { Award, Compass, BookOpen, Building2 } from "lucide-react";
import type { StudioBio } from "@/frontend/types/FrontendHome";
interface EditorialBioProps {
  studioBio?: StudioBio | null;
}
export default function EditorialBio({
  studioBio
}: EditorialBioProps) {
  const awards = [{
    year: "2024",
    name: "International Architectural Photography Prize",
    organization: "Fondazione Architettura Milano",
    note: "Gold Medal for Brutalist Sanctuaries Series"
  }, {
    year: "2023",
    name: "Tokyo Monograph Heritage Fellowship",
    organization: "National Museum of Modern Art, Tokyo",
    note: "Special Juror Citation for Analog Preservation"
  }, {
    year: "2021",
    name: "Prix de la Photographie Silencieuse",
    organization: "Rencontres d'Arles",
    note: "Selected Folio in Modernist Chiaroscuro"
  }];
  const editorialClients = ["Architectural Digest", "Domus", "The New Yorker", "A+U Architecture", "Cereal Magazine", "Apartamento", "Phaidon Press", "Casabella"];
  const portraitSrc = studioBio?.portraitImage || generatedImagesByFilename["photographer-darkroom-bio"];
  const artistName = studioBio?.artistName || "Julian Vane";
  const studioName = studioBio?.studioName || "Julian Vane Studio";
  const atelierLocation = studioBio?.atelierLocation || "Milan & Tokyo";
  const philosophyQuote = studioBio?.philosophyQuote || "A building or a face is never truly captured by saturation. Truth lives in the unlit margin, where geometry yields to silence and time ceases its insistence.";
  const bioStatement = studioBio?.bioStatement || "Trained in classical architectural draftsmanship at Politecnico di Milano before apprenticing under Japanese darkroom masters in Kyoto, Vane approaches the photographic frame as a structural elevation. His practice interrogates modernism, monumental silence, and the tactile qualities of raw limestone, poured concrete, and handwoven textiles.";
  const activeRepresentation = studioBio?.activeRepresentation || "Galleria Lia Rumma (Milan) & Taka Ishii Gallery (Tokyo)";
  return <section id="profile-bio" data-controller-name="Photographer Editorial Bio" className="w-full bg-card text-card-foreground border-t border-border/80" data-api-unique-id='editorialbio-r8eb4a6ac1ca6b9ad-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24" data-api-unique-id='editorialbio-r12e5151f915c24a7-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" data-api-unique-id='editorialbio-rbede3645cdb6f284-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
          {/* Left Column: Darkroom Process Portrait */}
          <div className="lg:col-span-5 space-y-4" data-api-unique-id='editorialbio-r67baa29ac562f545-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
            <div className="relative overflow-hidden rounded-sm border border-border/80 bg-background" data-api-unique-id='editorialbio-rbd533075a6441f03-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
              <div className="aspect-[4/5] w-full" data-api-unique-id='editorialbio-r8cb37285c5575f26-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <EditableImg propKey="photographer-darkroom-bio" src={portraitSrc} alt={`${artistName} examining prints in analog darkroom`} className="h-full w-full object-cover" data-api-unique-id='editorialbio-r60262faf586a3f1e-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' />
              </div>

              {/* Caption pill */}
              <div className="p-3 bg-card border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground" data-api-unique-id='editorialbio-r9f76cd5e216c80df-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <span data-api-unique-id='editorialbio-r5f512f9d78c6156f-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>{studioName}</span>
                <span data-api-unique-id='editorialbio-r1aba7cff007c9966-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>{atelierLocation}</span>
              </div>
            </div>

            <div className="p-5 rounded-sm bg-muted text-muted-foreground border border-border/60 space-y-2" data-api-unique-id='editorialbio-rb1ac12815914a59d-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-medium block" data-api-unique-id='editorialbio-rdc6564f02696412a-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                Philosophy of Negative Space
              </span>
              <p className="text-xs leading-relaxed font-body" data-api-unique-id='editorialbio-rda2de234f3dc6f47-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                &ldquo;{philosophyQuote}&rdquo;
              </p>
            </div>

            {/* Gallery Representation */}
            {activeRepresentation && <div className="p-4 rounded-sm border border-border/60 bg-card space-y-1" data-api-unique-id='editorialbio-r9583996448c08566-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground" data-api-unique-id='editorialbio-r861c57af1f0c6271-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                  <Building2 className="w-3.5 h-3.5 text-primary" data-api-unique-id='editorialbio-r0f3fe748426ae4ff-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' />
                  <span data-api-unique-id='editorialbio-rc5bb4a7af375a20f-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>Gallery Representation</span>
                </div>
                <p className="text-xs text-foreground font-body" data-api-unique-id='editorialbio-rf027ebc1288ca4b0-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                  {activeRepresentation}
                </p>
              </div>}
          </div>

          {/* Right Column: Bio Narrative, Philosophy & Selected Accolades */}
          <div className="lg:col-span-7 space-y-8" data-api-unique-id='editorialbio-rfa8f97f3f96baca1-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
            <div className="space-y-4" data-api-unique-id='editorialbio-r6c9841bf93664c23-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary" data-api-unique-id='editorialbio-r8b7fb971b500946c-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <Compass className="w-3.5 h-3.5" data-api-unique-id='editorialbio-rd1776c9594869e90-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' />
                <span data-api-unique-id='editorialbio-r8e114d700e73c552-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>Biography &amp; Praxis</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display tracking-tight text-card-foreground leading-tight" data-api-unique-id='editorialbio-r43ed7bcc70c73ccc-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                {artistName} is an architectural documentarian and fine art portraitist working between {atelierLocation}.
              </h2>

              <div className="space-y-4 text-sm text-muted-foreground font-body leading-relaxed pt-2" data-api-unique-id='editorialbio-r38f25d4c38712f71-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <p data-api-unique-id='editorialbio-ra746e253aee35a9d-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>{bioStatement}</p>
                <p data-api-unique-id='editorialbio-re86c1b0c85f96b7c-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                  Every commission is executed with bespoke silver halide workflows, large-format mechanical field cameras, and archival printmaking standards suited for institutional monographs and private museum collections.
                </p>
              </div>
            </div>

            {/* Selected Accolades List */}
            <div className="space-y-4 pt-4 border-t border-border/60" data-api-unique-id='editorialbio-rb3cdaf6cfd6bbf95-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-card-foreground font-medium" data-api-unique-id='editorialbio-rdacb2dccabe5afd6-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <Award className="w-3.5 h-3.5 text-primary" data-api-unique-id='editorialbio-rf8baf95da3167968-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' />
                <span data-api-unique-id='editorialbio-rbdfd962dbc52f6ed-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>Selected Honors &amp; Recognitions</span>
              </div>

              <div className="divide-y divide-border/60" data-api-unique-id='editorialbio-r1a645dae9103cb8f-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                {awards.map((award, index) => <div key={award.name} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4" data-api-unique-id='editorialbio-r12b8d97fe0fb45c0-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' data-api-in-loop='1'>
                    <div className="space-y-0.5" data-api-unique-id='editorialbio-r7c2ef7d0092dca58-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' data-api-in-loop='1'>
                      <p className="text-sm font-medium text-card-foreground" data-api-unique-id='editorialbio-r8226d49f783184e4-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' data-api-in-loop='1' data-api-bind-info={`awards-${index}-name`} data-api-map-var-name='award'>{award.name}</p>
                      <p className="text-xs text-muted-foreground" data-api-unique-id='editorialbio-re34bec2ebc73ed59-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' data-api-in-loop='1' data-api-bind-info={`awards-${index}-organization`} data-api-map-var-name='award'>{award.organization} — {award.note}</p>
                    </div>
                    <span className="text-xs font-mono text-primary font-medium shrink-0" data-api-unique-id='editorialbio-rebd424c094a3dad6-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' data-api-in-loop='1' data-api-bind-info={`awards-${index}-year`} data-api-map-var-name='award'>{award.year}</span>
                  </div>)}
              </div>
            </div>

            {/* Editorial Client Roll */}
            <div className="space-y-3 pt-2" data-api-unique-id='editorialbio-r109b067386be7e04-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground" data-api-unique-id='editorialbio-rc9f9268ef191e5ca-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                <BookOpen className="w-3.5 h-3.5" data-api-unique-id='editorialbio-r6e3825c67f847852-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' />
                <span data-api-unique-id='editorialbio-r15437d12a2c02373-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>Selected Editorial Commissions &amp; Press</span>
              </div>
              <div className="flex flex-wrap gap-2" data-api-unique-id='editorialbio-r7476fccb24f0074d-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio'>
                {editorialClients.map((client, index) => <span key={client} className="text-xs px-2.5 py-1 rounded-sm border border-border/80 bg-background text-foreground font-body" data-api-unique-id='editorialbio-rdc3d03e2215fe5d3-s1400931969' data-api-unique-page-name='src/frontend/components/FrontendHome/EditorialBio' data-api-in-loop='1' data-api-bind-info={`editorialClients-${index}-$item`} data-api-map-var-name='client'>
                    {client}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}