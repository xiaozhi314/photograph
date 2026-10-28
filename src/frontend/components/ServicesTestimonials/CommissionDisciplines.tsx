"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Camera, Layers, Check } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
import type { DisciplineItem } from "@/frontend/types/ServicesTestimonials";
const DISCIPLINES: DisciplineItem[] = [{
  id: "disc-arch",
  number: "01",
  title: "Architectural Monograph",
  serviceType: "ARCHITECTURAL_MONOGRAPH",
  mediumFormatSpec: "Large Format 4x5 Sheet Film & 100MP Hasselblad",
  chemistryStandard: "Selenium Toned Fiber-Base Silver Gelatin",
  summary: "Commissioned architectural surveys documenting brutalist, modernist, and heritage built forms with perspective-control bellows optics and precision shadow density.",
  typicalTurnaround: "6 to 8 Weeks",
  deliverableHighlights: ["Clothbound folio case containing 12 signed 16x20 contact-quality prints", "Comprehensive archival master digital raw repository (16-bit TIFF)", "Unrestricted editorial & institutional monograph publishing license"]
}, {
  id: "disc-port",
  number: "02",
  title: "Editorial Portraiture",
  serviceType: "EDITORIAL_PORTRAITURE",
  mediumFormatSpec: "Medium Format 120 Roll Film (Kodak Tri-X / Ilford HP5)",
  chemistryStandard: "Split-Bath Pyro Developer · Warmtone Darkroom",
  summary: "Intimate sitting sessions for cultural directors, authors, and artists, capturing psychological gravitas with natural diffused daylight and silver negative grading.",
  typicalTurnaround: "3 to 4 Weeks",
  deliverableHighlights: ["Hand-developed silver gelatin contact sheets with grease pencil markings", "Three exhibition-grade 11x14 fiber prints on Ilford Galerie paper", "Worldwide editorial cover & feature press dissemination pack"]
}, {
  id: "disc-comm",
  number: "03",
  title: "Commercial Campaign",
  serviceType: "COMMERCIAL_CAMPAIGN",
  mediumFormatSpec: "Fujifilm GFX 100 II & Custom Analog Optical Benches",
  chemistryStandard: "Hybrid Analog Scanning & Film Emulsion Calibration",
  summary: "Narrative visual direction for haute horlogerie, atelier luxury brands, and design houses seeking tangible tactile depth unattainable through standard digital optics.",
  typicalTurnaround: "4 to 6 Weeks",
  deliverableHighlights: ["Hero brand campaign visual suite with 30 calibrated master assets", "Full global commercial broadcast and out-of-home advertising clearance", "Physical limited-edition campaign proof book for executive archives"]
}, {
  id: "disc-acq",
  number: "04",
  title: "Print Acquisition",
  serviceType: "PRINT_ACQUISITION",
  mediumFormatSpec: "Vintage Deardorff 8x10 & Custom Horizontal Enlarger",
  chemistryStandard: "Double-Weight Warmtone Baryta & Archival Wash",
  summary: "Museum-standard acquisitions and private collector editions. Each print is handmade by Julian Vane in the darkroom, selenium treated for 100+ year archival permanence.",
  typicalTurnaround: "2 to 3 Weeks",
  deliverableHighlights: ["Signed and numbered limited edition silver gelatin contact or enlargement", "Acid-free museum rag matting with blind embossed studio monogram", "Notarized certificate of provenance and darkroom chemistry dossier"]
}];
export default function CommissionDisciplines() {
  const [activeTab, setActiveTab] = useState<string>("disc-arch");
  const selected = DISCIPLINES.find(d => d.id === activeTab) || DISCIPLINES[0];
  return <section data-controller-name="Commission Disciplines Overview" className="border-b border-border bg-card py-20 text-card-foreground" data-api-unique-id='commissiondisciplines-r1d1c845faac73750-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='commissiondisciplines-r9ca58712564727a1-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
        {/* Header Strip */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end" data-api-unique-id='commissiondisciplines-rb096590d2c40b1f0-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
          <div className="space-y-3 lg:col-span-8" data-api-unique-id='commissiondisciplines-r21a69687c07b8d6c-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary" data-api-unique-id='commissiondisciplines-rb72cb44031b73ce9-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              Photographic Practice & Optical Standards
            </span>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-card-foreground sm:text-4xl lg:text-5xl" data-api-unique-id='commissiondisciplines-r984ba4310c711ed7-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              Four Core Commission Disciplines
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg" data-api-unique-id='commissiondisciplines-ra2756746d360dbcc-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              Every assignment balances the slow, tactile deliberation of large-format darkroom
              chemistry with the surgical clarity of ultra-high-resolution medium format scans.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right" data-api-unique-id='commissiondisciplines-rf580da0c96b4f888-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
            <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-left" data-api-unique-id='commissiondisciplines-r6536e6c243031210-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              <Camera className="h-5 w-5 shrink-0 text-primary" data-api-unique-id='commissiondisciplines-r7aabbc7668b6e04c-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' />
              <div className="min-w-0" data-api-unique-id='commissiondisciplines-r73e7a9ab00e59c9b-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='commissiondisciplines-rbed763e191943077-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  Analog Chemistry Protocol
                </p>
                <p className="truncate text-sm font-semibold text-foreground" data-api-unique-id='commissiondisciplines-r272d6382bff099f6-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  ISO 100–400 Fiber Gelatin · Pyro HD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selector for Quick Focus */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4" data-api-unique-id='commissiondisciplines-r6886adac3aebd1f2-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
          {DISCIPLINES.map((item, index) => {
          const isActive = item.id === activeTab;
          return <button key={item.id} type="button" onClick={() => setActiveTab(item.id)} className={`flex flex-col items-start rounded-lg border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? "border-primary bg-background shadow-sm" : "border-border bg-card hover:bg-muted text-card-foreground"}`} data-api-unique-id='commissiondisciplines-rc4726820a50eca34-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1'>
                <span className="font-mono text-xs font-medium text-primary" data-api-unique-id='commissiondisciplines-r056b995c4ace56db-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1' data-api-bind-info={`DISCIPLINES-${index}-number`} data-api-map-var-name='item'>{item.number}</span>
                <span className="mt-1 font-serif text-base font-semibold text-card-foreground" data-api-unique-id='commissiondisciplines-rca63208778229ae3-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1' data-api-bind-info={`DISCIPLINES-${index}-title`} data-api-map-var-name='item'>
                  {item.title}
                </span>
                <span className="mt-2 text-xs text-muted-foreground" data-api-unique-id='commissiondisciplines-r551eb8b2f3d68f72-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1' data-api-bind-info={`DISCIPLINES-${index}-typicalTurnaround`} data-api-map-var-name='item'>{item.typicalTurnaround}</span>
              </button>;
        })}
        </div>

        {/* Detailed Spec Feature Grid */}
        <div className="grid grid-cols-1 gap-10 rounded-xl border border-border bg-background p-6 lg:grid-cols-12 lg:p-10" data-api-unique-id='commissiondisciplines-r7ad8ebc7c6d439d9-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
          {/* Left Column: Visual Material Anchor */}
          <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-border lg:col-span-5" data-api-unique-id='commissiondisciplines-r0dbcde82ee4503d3-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
            <EditableImg propKey={`discipline-spec-${selected.id}`} keywords="large format camera bellows analog film darkroom lens studio monochrome" description="Detailed view of optical bellows, vintage medium format camera equipment, darkroom chemistry bottles and silver prints in studio" className="h-full w-full object-cover" data-api-unique-id='commissiondisciplines-rd7719174aa626c21-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' />
            <div className="absolute bottom-3 left-3 right-3 rounded-md border border-border bg-background/95 p-3 backdrop-blur-sm" data-api-unique-id='commissiondisciplines-rff7a93008c725a04-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              <p className="text-xs font-mono uppercase text-muted-foreground" data-api-unique-id='commissiondisciplines-r6c6a32cc5c295f2f-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>Optical Bench Setup</p>
              <p className="text-sm font-semibold text-foreground" data-api-unique-id='commissiondisciplines-r2c0b17bbc5f689bf-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>{selected.mediumFormatSpec}</p>
            </div>
          </div>

          {/* Right Column: Technical & Delivery Dossier */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7" data-api-unique-id='commissiondisciplines-rbd7a53a8a96c35e5-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
            <div className="space-y-4" data-api-unique-id='commissiondisciplines-r4fb3bcd96364df53-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              <div className="flex flex-wrap items-center gap-3" data-api-unique-id='commissiondisciplines-r971699c0e9745d6b-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                <span className="font-mono text-sm font-bold text-primary" data-api-unique-id='commissiondisciplines-redb103c64d79a3aa-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>{selected.number}</span>
                <span className="inline-flex rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground" data-api-unique-id='commissiondisciplines-ref1fc57572d96f4b-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  {selected.serviceType.replace("_", " ")}
                </span>
                <span className="text-xs text-muted-foreground" data-api-unique-id='commissiondisciplines-rdc0e091c1638d310-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  Turnaround: {selected.typicalTurnaround}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-normal text-foreground sm:text-3xl" data-api-unique-id='commissiondisciplines-r376d604102ed6285-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                {selected.title}
              </h3>

              <p className="text-base leading-relaxed text-muted-foreground" data-api-unique-id='commissiondisciplines-rcbaaee9808b711c0-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>{selected.summary}</p>

              {/* Chemistry & Film Spec Strip */}
              <div className="grid grid-cols-1 gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-2" data-api-unique-id='commissiondisciplines-ra233c8ad19507674-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                <div className="space-y-1" data-api-unique-id='commissiondisciplines-r463cd887463fdf57-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  <p className="text-xs font-mono uppercase text-muted-foreground" data-api-unique-id='commissiondisciplines-r8f625d5625177dfa-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                    Medium & Sensor Standard
                  </p>
                  <p className="text-sm font-medium text-card-foreground" data-api-unique-id='commissiondisciplines-r89c8c7a96db4c5ef-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                    {selected.mediumFormatSpec}
                  </p>
                </div>
                <div className="space-y-1" data-api-unique-id='commissiondisciplines-rd0b9dfe434ca3a18-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  <p className="text-xs font-mono uppercase text-muted-foreground" data-api-unique-id='commissiondisciplines-r3d1c5bf4d13fc419-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                    Darkroom Treatment
                  </p>
                  <p className="text-sm font-medium text-card-foreground" data-api-unique-id='commissiondisciplines-ra2383de63f5f8216-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                    {selected.chemistryStandard}
                  </p>
                </div>
              </div>

              {/* Scope Deliverables */}
              <div className="space-y-2 pt-2" data-api-unique-id='commissiondisciplines-r82011fa67abae29f-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground" data-api-unique-id='commissiondisciplines-rd7b35f79dd935901-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  Included Master Deliverables
                </p>
                <ul className="space-y-2" data-api-unique-id='commissiondisciplines-rcfd9e9af5767ad18-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                  {selected.deliverableHighlights.map((deliv, index) => <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground" data-api-unique-id='commissiondisciplines-r324cd9053bb77134-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1'>
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" data-api-unique-id='commissiondisciplines-r3406030fb7d4cdb8-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1' />
                      <span data-api-unique-id='commissiondisciplines-r05e527f21802ddb1-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' data-api-in-loop='1' data-api-bind-info={`selected.deliverableHighlights-${index}-$item`} data-api-map-var-name='deliv'>{deliv}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4" data-api-unique-id='commissiondisciplines-r6047c15d24e9efdd-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
              <div className="flex items-center gap-2 text-xs text-muted-foreground" data-api-unique-id='commissiondisciplines-r82a37ab7d0922266-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                <Layers className="h-4 w-4 text-primary" data-api-unique-id='commissiondisciplines-rbd23852672b130e2-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' />
                <span data-api-unique-id='commissiondisciplines-red7915d955ad39e3-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>Museum-grade silver gelatin or raw capture archive included</span>
              </div>
              <Link href="#packages-directory" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='commissiondisciplines-r35bf317846e496c6-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>
                <span data-api-unique-id='commissiondisciplines-r3d8bd49b00ecf865-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines'>View Standard Tier Packages</span>
                <ArrowUpRight className="h-4 w-4" data-api-unique-id='commissiondisciplines-rd060d4a559e25ade-s181263523' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/CommissionDisciplines' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
}