"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { CommissionBooking, CollectionsFolios } from "@/frontend/route-params";
interface CommissionProvenanceCalloutProps {
  onDirectInquiry?: () => void;
}
export default function CommissionProvenanceCallout({
  onDirectInquiry
}: CommissionProvenanceCalloutProps) {
  const router = useRouter();
  const handleInitiateBrief = () => {
    if (onDirectInquiry) {
      onDirectInquiry();
    } else {
      CommissionBooking.navigateTo(router);
    }
  };
  const handleNavigateCollections = () => {
    CollectionsFolios.navigateTo(router);
  };
  return <section data-controller-name="Commission Provenance Callout" className="w-full border-t border-border/80 bg-card text-card-foreground transition-colors" data-api-unique-id='commissionprovenancecallout-r159c583d04003a72-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" data-api-unique-id='commissionprovenancecallout-r09568fa3513eec9e-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8" data-api-unique-id='commissionprovenancecallout-ra104b9c9971050cf-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
          {/* Provenance note */}
          <div className="space-y-3 min-w-0 flex-1" data-api-unique-id='commissionprovenancecallout-rcaf67b2326c20ba2-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-primary uppercase" data-api-unique-id='commissionprovenancecallout-r87eaf083e9fc029c-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
              <Sparkles className="w-3.5 h-3.5 shrink-0" data-api-unique-id='commissionprovenancecallout-rc27790a1407927ee-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout' />
              <span data-api-unique-id='commissionprovenancecallout-r1961783642f74b99-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>Archival Master & Private Folio Orders</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-foreground" data-api-unique-id='commissionprovenancecallout-r22672e2c5ba3f688-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
              Bespoke commissions & museum acquisition briefs.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl" data-api-unique-id='commissionprovenancecallout-r3e35019ed859f921-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
              Each physical plate is printed by hand using museum-grade silver gelatin emulsion on double-weight fiber paper, embossed with studio seal and accompanied by signed certificate of authenticity.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground" data-api-unique-id='commissionprovenancecallout-r7b1b1ffd5c4b144a-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
              <span className="flex items-center gap-1.5" data-api-unique-id='commissionprovenancecallout-r3ce7e914bc4edb84-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
                <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='commissionprovenancecallout-rb56e9f3d8bd0efc6-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout' />
                <span data-api-unique-id='commissionprovenancecallout-r285039c6076dee5f-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>Museum-Certified Provenance</span>
              </span>
              <span className="flex items-center gap-1.5" data-api-unique-id='commissionprovenancecallout-rbe4908de79c180af-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
                <Compass className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='commissionprovenancecallout-r8a01f7a47e415167-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout' />
                <span data-api-unique-id='commissionprovenancecallout-r9c5093b0ff6920dd-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>Worldwide Insured Courier</span>
              </span>
            </div>
          </div>

          {/* Action Link to Commission Studio [F06] & Collections [F03] */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0" data-api-unique-id='commissionprovenancecallout-r10cb3c5f2dd704ff-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
            <button type="button" onClick={handleInitiateBrief} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='commissionprovenancecallout-ra14238d3195fb359-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
              <span data-api-unique-id='commissionprovenancecallout-r4acf2fb417982eb6-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>Initiate Studio Brief</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" data-api-unique-id='commissionprovenancecallout-ra281862e87bfb61c-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout' />
            </button>
            <button type="button" onClick={handleNavigateCollections} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-foreground font-medium text-sm tracking-wide transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='commissionprovenancecallout-rcb5370d91e301fab-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>
              <span data-api-unique-id='commissionprovenancecallout-r4fa07cba64760ce4-s1364913493' data-api-unique-page-name='src/frontend/components/WorksPortfolio/CommissionProvenanceCallout'>Series Archives</span>
            </button>
          </div>
        </div>
      </div>
    </section>;
}