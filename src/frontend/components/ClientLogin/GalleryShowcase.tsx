"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { projectLogo } from "@/lib/generated-images/project-logo";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
export default function GalleryShowcase() {
  return <div data-controller-name="Client Gallery Showcase" className="relative flex h-full min-h-[580px] w-full flex-col justify-between overflow-hidden bg-accent text-accent-foreground p-8 sm:p-12 lg:p-16" data-api-unique-id='galleryshowcase-r4b369841731cff11-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
      {/* Background Archival Fine Art Photo */}
      <div className="absolute inset-0 z-0" data-api-unique-id='galleryshowcase-r80a4fd749b4e1981-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
        <EditableImg propKey="client-login-hero-artwork" needLargeImage keywords="fine art monochrome architecture photography silver gelatin darkroom" description="High-contrast silver gelatin black and white medium format architectural photography, dramatic shadows, archival museum quality tone" className="h-full w-full object-cover opacity-80" data-api-unique-id='galleryshowcase-rfcd1c8811eb126d0-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase' />
        {/* Subtle vignette gradient for readability of fine typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-accent/70 pointer-events-none" data-api-unique-id='galleryshowcase-rb8e816de54ffb925-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase' />
      </div>

      {/* Top Colophon and Brand Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-accent-foreground/20 pb-6" data-api-unique-id='galleryshowcase-rb7960cb3df596a46-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
        <Link href="/" className="flex items-center gap-3 group" data-api-unique-id='galleryshowcase-r9de3865f18b29ff9-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          <div className="relative h-10 w-10 overflow-hidden rounded border border-accent-foreground/30 bg-accent/30 p-1" data-api-unique-id='galleryshowcase-r6f39dcb1c1b8124a-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
            <Image src={projectLogo} alt="Julian Vane Atelier Logo" width={36} height={36} className="h-full w-full object-contain" data-api-unique-id='galleryshowcase-rec5ac276cbe9fdc6-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase' />
          </div>
          <div data-api-unique-id='galleryshowcase-rceeeccb8b7f5c00d-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
            <span className="font-serif tracking-widest uppercase text-sm font-semibold block text-accent-foreground" data-api-unique-id='galleryshowcase-ra3379a038aa4b3d1-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
              Julian Vane Atelier
            </span>
            <span className="text-[11px] tracking-widest uppercase text-accent-foreground/70 block" data-api-unique-id='galleryshowcase-rb70857e252fe57a9-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
              Darkroom Archives · Milan · Tokyo
            </span>
          </div>
        </Link>

        <div className="hidden sm:flex items-center gap-2 rounded-full border border-accent-foreground/30 bg-accent/40 px-3 py-1 text-[11px] uppercase tracking-wider text-accent-foreground" data-api-unique-id='galleryshowcase-r899640e081eb5b0a-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          <ShieldCheck className="h-3.5 w-3.5 text-accent-foreground" data-api-unique-id='galleryshowcase-r46a714fd7672b2d9-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase' />
          <span data-api-unique-id='galleryshowcase-r217079c9f04fc476-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Restricted Vault</span>
        </div>
      </div>

      {/* Atmospheric Editorial Quote / Statement in Lower-Middle */}
      <div className="relative z-10 my-auto py-12 max-w-xl" data-api-unique-id='galleryshowcase-rcdadc9bf239e2a4b-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
        <div className="inline-flex items-center gap-2 mb-4 text-xs tracking-widest uppercase text-accent-foreground/80 font-mono" data-api-unique-id='galleryshowcase-r59bb24c36e8fe20c-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          <Sparkles className="h-3.5 w-3.5" data-api-unique-id='galleryshowcase-r5b80fb02b046b9e5-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase' />
          <span data-api-unique-id='galleryshowcase-r9e07e00299147aea-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Curatorial Archive Edition · 400 ISO</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-accent-foreground" data-api-unique-id='galleryshowcase-r2895c43faaebe138-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          Preserving the tactile integrity of analog light.
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-accent-foreground/85 font-light" data-api-unique-id='galleryshowcase-rd6dcbacf29058719-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          Welcome to Julian Vane Studio’s dedicated client portal. Access customized commission
          briefs, evaluate silver gelatin contact sheets, track curatorial dispatch schedules, and
          acquire licensed master deliverables.
        </p>

        {/* Archival Specification Ledger */}
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-accent-foreground/20 pt-6 font-mono text-xs text-accent-foreground/80" data-api-unique-id='galleryshowcase-rc184cb78dacb627f-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          <div data-api-unique-id='galleryshowcase-rc818a8abc4cd4887-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
            <span className="block text-[10px] text-accent-foreground/60 uppercase" data-api-unique-id='galleryshowcase-r2ff90e693d4bfce0-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Emulsion</span>
            <span className="font-medium text-accent-foreground" data-api-unique-id='galleryshowcase-rbffa1a659699a2c0-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Baryta Silver Gelatin</span>
          </div>
          <div data-api-unique-id='galleryshowcase-r472700208fe648a7-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
            <span className="block text-[10px] text-accent-foreground/60 uppercase" data-api-unique-id='galleryshowcase-r38418dc6a4a2703e-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Format</span>
            <span className="font-medium text-accent-foreground" data-api-unique-id='galleryshowcase-re40d1b8f56f5afbe-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>4x5 Large & 6x7 MF</span>
          </div>
          <div data-api-unique-id='galleryshowcase-rb4f5dffc8ee06fb0-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
            <span className="block text-[10px] text-accent-foreground/60 uppercase" data-api-unique-id='galleryshowcase-rb63bc4b4f4eb885e-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Dispatch</span>
            <span className="font-medium text-accent-foreground" data-api-unique-id='galleryshowcase-r4325772e4b9a9196-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>Insured Fine Art Courier</span>
          </div>
        </div>
      </div>

      {/* Bottom Embossed Stamp / Seal */}
      <div className="relative z-10 flex flex-wrap items-center justify-between border-t border-accent-foreground/20 pt-6 text-xs text-accent-foreground/75" data-api-unique-id='galleryshowcase-r843f0b977e2455f8-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
        <div className="flex items-center gap-2" data-api-unique-id='galleryshowcase-r39ad4cdc13dfebfa-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          <Award className="h-4 w-4 text-accent-foreground" data-api-unique-id='galleryshowcase-r6fe1b58c4df19477-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase' />
          <span className="font-mono text-[11px] tracking-wider uppercase" data-api-unique-id='galleryshowcase-r1487c40bc40fde90-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
            Julian Vane Studio · Client Private Vault
          </span>
        </div>
        <div className="font-mono text-[11px] text-accent-foreground/70" data-api-unique-id='galleryshowcase-rc77643d0e39d1cae-s1023913014' data-api-unique-page-name='src/frontend/components/ClientLogin/GalleryShowcase'>
          SECURE PROTOCOL · TLS 1.3
        </div>
      </div>
    </div>;
}