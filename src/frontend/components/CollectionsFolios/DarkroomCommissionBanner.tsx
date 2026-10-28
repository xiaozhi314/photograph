"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { CommissionBooking } from "@/frontend/route-params";
interface DarkroomCommissionBannerProps {
  currentMedium?: string;
}
export default function DarkroomCommissionBanner({
  currentMedium = "Silver Gelatin / Medium Format"
}: DarkroomCommissionBannerProps) {
  const router = useRouter();
  const handleNavigateCommission = () => {
    CommissionBooking.navigateTo(router);
  };
  return <section data-controller-name="Darkroom Commission Banner" className="w-full bg-accent text-accent-foreground rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden border border-accent/60 shadow-xl" data-api-unique-id='darkroomcommissionbanner-rc9d6edcfd5e65956-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
      {/* Subtle silver grain ambient texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" data-api-unique-id='darkroomcommissionbanner-r3d5cb4c134928d2b-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner' />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" data-api-unique-id='darkroomcommissionbanner-r4382d6e444866e02-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
        <div className="lg:col-span-8 min-w-0 space-y-6" data-api-unique-id='darkroomcommissionbanner-r745fc41f098d21a4-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
          <div className="flex flex-wrap items-center gap-3" data-api-unique-id='darkroomcommissionbanner-r6f4bec524dc8be40-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs tracking-wider uppercase bg-accent-foreground/10 text-accent-foreground font-mono" data-api-unique-id='darkroomcommissionbanner-r0cc3f6a61491c187-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              <ShieldCheck className="w-3.5 h-3.5" data-api-unique-id='darkroomcommissionbanner-rbaafeaf81a9805ed-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner' />
              Atelier Archival Standard
            </span>
            <span className="text-xs font-mono text-accent-foreground/75 tracking-wider uppercase" data-api-unique-id='darkroomcommissionbanner-rebfc784198a7e07e-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              {currentMedium}
            </span>
          </div>

          <div className="space-y-3" data-api-unique-id='darkroomcommissionbanner-r47d41f36033e4d2e-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight font-medium" data-api-unique-id='darkroomcommissionbanner-rdcc2065c178068d6-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              Acquire or Commission in this Medium
            </h2>
            <p className="text-accent-foreground/80 text-sm sm:text-base leading-relaxed max-w-2xl font-serif" data-api-unique-id='darkroomcommissionbanner-rc8984cf7862a663e-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              Master plates are hand-enlarged upon Baryta fiber paper
              using archival silver gelatin chemistries. Limited editions are individually estate-stamped,
              numbered, and certified. Private commissions adopting this lighting regimen are welcomed for seasonal residency dates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" data-api-unique-id='darkroomcommissionbanner-r41d1d0426cda5b52-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10" data-api-unique-id='darkroomcommissionbanner-r99d83a5d74ed0f97-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              <Compass className="w-4 h-4 mt-0.5 text-accent-foreground/80 shrink-0" data-api-unique-id='darkroomcommissionbanner-rd536a1733efd6899-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner' />
              <div className="text-xs space-y-1" data-api-unique-id='darkroomcommissionbanner-r0bba7c985090c31f-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
                <p className="font-semibold text-accent-foreground" data-api-unique-id='darkroomcommissionbanner-rf895b49acbac7cde-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>Fiber Paper Wash & Selenium Tone</p>
                <p className="text-accent-foreground/70" data-api-unique-id='darkroomcommissionbanner-rd3065ffa67eb6439-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
                  120-minute archival wash with double-hypo clearing for 100+ year permanence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-accent-foreground/5 border border-accent-foreground/10" data-api-unique-id='darkroomcommissionbanner-r07f6b0b33452bbf0-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              <ShieldCheck className="w-4 h-4 mt-0.5 text-accent-foreground/80 shrink-0" data-api-unique-id='darkroomcommissionbanner-r3731327271c06bd0-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner' />
              <div className="text-xs space-y-1" data-api-unique-id='darkroomcommissionbanner-ref43ac625c9861a4-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
                <p className="font-semibold text-accent-foreground" data-api-unique-id='darkroomcommissionbanner-r559b1849d5058267-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>Museum Acid-Free Mounting</p>
                <p className="text-accent-foreground/70" data-api-unique-id='darkroomcommissionbanner-r45ceaf3e80660b33-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
                  Hand-cut 4-ply rag conservation mats with certified provenance certificate and seal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 min-w-0 flex flex-col items-start lg:items-end justify-center space-y-4" data-api-unique-id='darkroomcommissionbanner-r1f124b39cd954325-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
          <div className="w-full lg:max-w-xs space-y-3 text-left lg:text-right" data-api-unique-id='darkroomcommissionbanner-rd80d425534d85b83-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
            <p className="text-xs font-mono tracking-wider text-accent-foreground/70 uppercase" data-api-unique-id='darkroomcommissionbanner-ra6d1ee75c9b9f447-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              Medium Context
            </p>
            <p className="text-sm font-medium text-accent-foreground" data-api-unique-id='darkroomcommissionbanner-recf2b0786d9b8761-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
              {currentMedium}
            </p>
          </div>

          <button type="button" onClick={handleNavigateCommission} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium tracking-wide shadow-md hover:bg-primary-hover active:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer" data-api-unique-id='darkroomcommissionbanner-re8d7b668bbe76734-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
            <span data-api-unique-id='darkroomcommissionbanner-r76ee8b10fd3ef676-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>Commission Work in this Medium</span>
            <ArrowRight className="w-4 h-4" data-api-unique-id='darkroomcommissionbanner-r6d29b99d1a8839d1-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner' />
          </button>
          <span className="text-[11px] font-mono text-accent-foreground/60 tracking-wider" data-api-unique-id='darkroomcommissionbanner-rff334a55b2bb6035-s4270296686' data-api-unique-page-name='src/frontend/components/CollectionsFolios/DarkroomCommissionBanner'>
            Curatorial Consultation · Global Shipment
          </span>
        </div>
      </div>
    </section>;
}