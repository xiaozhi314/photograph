"use client";

import React from "react";
import { useRouter } from "next/navigation";
import EditableImg from "@/@base/EditableImg";
import { ArrowDown, Sparkles } from "lucide-react";
import { CommissionBooking } from "@/frontend/route-params";
interface ServicesHeroProps {
  onScrollToPackages?: () => void;
  onOpenConsultation?: () => void;
}
export default function ServicesHero({
  onScrollToPackages,
  onOpenConsultation
}: ServicesHeroProps) {
  const router = useRouter();
  const handleScrollDown = () => {
    if (onScrollToPackages) {
      onScrollToPackages();
    } else {
      const el = document.getElementById("service-packages") || document.getElementById("packages-matrix");
      if (el) {
        el.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  const handleOpenConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      CommissionBooking.navigateTo(router);
    }
  };
  return <section data-controller-name="Services Hero Statement" className="relative min-h-[76vh] w-full overflow-hidden bg-background text-foreground border-b border-border" data-api-unique-id='serviceshero-r2de0f4047a21b6e5-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
      {/* Editorial full-bleed master visual with authentic analog craft */}
      <div className="absolute inset-0 z-0" data-api-unique-id='serviceshero-r95798900c3e92e8e-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
        <EditableImg propKey="services-hero-master" needLargeImage keywords="large format darkroom silver gelatin printmaking photography monochrome" description="Julian Vane large-format darkroom craftsmanship, silver gelatin contact proofing tray under safelight, tactile analog texture and museum fine art printmaking" className="w-full h-full object-cover" data-api-unique-id='serviceshero-r30604c020930848b-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero' />
        {/* Subtle tonal grain gradient strictly <= 5% per contract */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" data-api-unique-id='serviceshero-r9c8e43a5ec28a418-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero' />
      </div>

      {/* Front-stage Content Container with editorial backdrop plate for high contrast readability */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[76vh] flex flex-col justify-end pb-12 sm:pb-16 pt-28" data-api-unique-id='serviceshero-rb4f8da9e168ce562-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
        <div className="max-w-3xl bg-background/95 backdrop-blur-md p-6 sm:p-10 border border-border shadow-soft rounded-none" data-api-unique-id='serviceshero-rbfe1a713d4b36241-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
          <div className="flex items-center gap-3 text-primary text-xs uppercase tracking-widest font-medium mb-3" data-api-unique-id='serviceshero-r4e52ff47af50c71b-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" data-api-unique-id='serviceshero-r28651c965491f2a1-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero' />
            <span data-api-unique-id='serviceshero-rc6ff28140e7fa1b6-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>Studio Commission Protocol · Silver Gelatin & Medium Format</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.15] mb-4" data-api-unique-id='serviceshero-rf49af30697e503a7-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
            Silver Gelatin Craft
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl font-light" data-api-unique-id='serviceshero-r38dff9c632d7b766-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
            Julian Vane conducts analog large-format darkroom chemistry alongside high-fidelity 100MP medium-format digital scans. 
            From institutional architectural monographs to museum-grade silver acquisitions, every commission is calibrated for archival permanence.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 border-t border-border/80" data-api-unique-id='serviceshero-r5c5b6f6016f2af96-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
            <button type="button" onClick={handleScrollDown} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors" data-api-unique-id='serviceshero-r6493c3d32b211463-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
              <span data-api-unique-id='serviceshero-r09df4f24cf48d8fb-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>Explore Commission Tiers</span>
              <ArrowDown className="w-4 h-4" data-api-unique-id='serviceshero-rca9c4bb738faa48d-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero' />
            </button>

            <button type="button" onClick={handleOpenConsultation} className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-card-foreground text-sm font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='serviceshero-r118cad576bda023f-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
              <Sparkles className="w-4 h-4 text-primary" data-api-unique-id='serviceshero-ra221ace0246a2f65-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero' />
              <span data-api-unique-id='serviceshero-r907c96803744416a-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>Inquire Open Brief</span>
            </button>

            <div className="sm:ml-auto flex items-center gap-3 text-xs text-muted-foreground pt-1 sm:pt-0" data-api-unique-id='serviceshero-r510e93c4b38c779e-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>
              <span className="font-mono text-foreground font-medium" data-api-unique-id='serviceshero-r207bf3e4639d24e5-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>100% Archival Fiber</span>
              <span data-api-unique-id='serviceshero-r31fafd04624baf0c-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>·</span>
              <span data-api-unique-id='serviceshero-rf063493df351c1fe-s4170767313' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicesHero'>Standardised Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}