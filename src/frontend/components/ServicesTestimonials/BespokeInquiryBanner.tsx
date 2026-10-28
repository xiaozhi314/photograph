"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { CommissionBooking } from "@/frontend/route-params";
interface BespokeInquiryBannerProps {
  onOpenBrief?: () => void;
}
export default function BespokeInquiryBanner({
  onOpenBrief
}: BespokeInquiryBannerProps) {
  const router = useRouter();
  const handleOpenCustomBrief = () => {
    if (onOpenBrief) {
      onOpenBrief();
    }
    CommissionBooking.navigateTo(router);
  };
  return <section data-controller-name="Bespoke Commission Consultation" className="relative overflow-hidden rounded-3xl bg-accent text-accent-foreground p-8 sm:p-12 lg:p-16 border border-border/40 shadow-xl" data-api-unique-id='bespokeinquirybanner-r252eccff93cb7a6e-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
      {/* Subtle analog texture layer (within allowed container) */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.2),transparent_70%)]" aria-hidden="true" data-api-unique-id='bespokeinquirybanner-r2fcaa8468dc4ce2b-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner' />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6" data-api-unique-id='bespokeinquirybanner-r19a1053662246f7f-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/20 bg-accent-foreground/10 px-3.5 py-1 text-xs tracking-wider uppercase" data-api-unique-id='bespokeinquirybanner-r70a05ff40b7ca073-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
          <Compass className="w-3.5 h-3.5" data-api-unique-id='bespokeinquirybanner-r7895e297df8e2769-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner' />
          <span data-api-unique-id='bespokeinquirybanner-r50019d61243a4470-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>Tailored Architecture &amp; Archival Folios</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-tight" data-api-unique-id='bespokeinquirybanner-r20d1a966ed768ccb-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
          Commission a Bespoke Monograph or Survey
        </h2>

        <p className="text-base sm:text-lg text-accent-foreground/80 max-w-2xl leading-relaxed" data-api-unique-id='bespokeinquirybanner-r1ed56c70bd969f12-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
          For cross-border architectural surveys, private museum editions, or commercial brand campaigns outside standardized package scopes. Julian Vane accepts a limited count of eight bespoke commissions per calendar year.
        </p>

        {/* Technical assurances */}
        <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs tracking-wide text-accent-foreground/75" data-api-unique-id='bespokeinquirybanner-rd528cec167b37865-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
          <span className="inline-flex items-center gap-1.5" data-api-unique-id='bespokeinquirybanner-r47f2d22cd0458e7a-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
            <ShieldCheck className="w-4 h-4" data-api-unique-id='bespokeinquirybanner-rf1e77895fc790abc-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner' />
            Bespoke Silver Gelatin Darkroom Proofing
          </span>
          <span className="inline-flex items-center gap-1.5" data-api-unique-id='bespokeinquirybanner-r600f70b8a81fb512-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
            <ShieldCheck className="w-4 h-4" data-api-unique-id='bespokeinquirybanner-r4a3a2d09b889acf8-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner' />
            100% Archival Rag Fiber Masters
          </span>
          <span className="inline-flex items-center gap-1.5" data-api-unique-id='bespokeinquirybanner-reedf277ce206d350-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
            <ShieldCheck className="w-4 h-4" data-api-unique-id='bespokeinquirybanner-r745e7cdd96620ac6-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner' />
            Direct Atelier Consultation in Milan &amp; Tokyo
          </span>
        </div>

        {/* CTA group leading to F06 */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" data-api-unique-id='bespokeinquirybanner-rf6fcb6d14a1ff84b-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
          {/* Navigate to F06 without packageId */}
          <button type="button" onClick={handleOpenCustomBrief} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-accent shadow-md cursor-pointer" data-api-unique-id='bespokeinquirybanner-rd7608af71ad49b9a-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>
            <span data-api-unique-id='bespokeinquirybanner-r5de7ec3b34c2dacc-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner'>Inquire Custom Commission</span>
            <ArrowUpRight className="w-4 h-4" data-api-unique-id='bespokeinquirybanner-rbe4f4a748a405c69-s2501353460' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/BespokeInquiryBanner' />
          </button>
        </div>
      </div>
    </section>;
}