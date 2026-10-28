"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Compass, Sparkles, Droplets, ShieldCheck, ArrowRight } from "lucide-react";
import { CommissionBooking } from "@/frontend/route-params";
interface MethodologyStage {
  step: string;
  stageName: string;
  chemistryCode: string;
  duration: string;
  focus: string;
  deliverableItems: string[];
  protocolNote: string;
  icon: React.ElementType;
}
const METHODOLOGY_STAGES: MethodologyStage[] = [{
  step: "01",
  stageName: "Creative Consultation & Spatial Reconnaissance",
  chemistryCode: "PHASE-I / RECON",
  duration: "Week 1–2",
  focus: "Direct architectural study, lighting azimuth assessment, curatorial intent definition, and selection of emulsion chemistry suited to spatial materials.",
  deliverableItems: ["Curatorial scope agreement & lighting azimuth map", "Format & lens allocation plan (4x5 vs 6x7 medium format)", "Bespoke gelatin emulsion chemistry trial plan"],
  protocolNote: "Curatorial dialogue with Julian Vane in Milan or Tokyo atelier.",
  icon: Compass
}, {
  step: "02",
  stageName: "Location Production & Medium-Format Exposure",
  chemistryCode: "PHASE-II / EXPO",
  duration: "Week 3–5",
  focus: "Tethered large-format and medium-format sheet film exposure during optimal solar declination. Zero artificial speedlighting; natural shadow gradation.",
  deliverableItems: ["50–120 exposed sheet negatives on Ilford Delta 100 / HP5+", "Comprehensive exposure logbook with lux meter readings", "Immediate digital polaroid verification scans for stakeholders"],
  protocolNote: "Full on-site autonomy with dedicated studio darkroom assistant.",
  icon: Sparkles
}, {
  step: "03",
  stageName: "Darkroom Chemistry & Master Proofing",
  chemistryCode: "PHASE-III / CHEM",
  duration: "Week 6–8",
  focus: "Bespoke pyrocat-HD developer formulations, zone-system split-grade darkroom enlargements, and initial contact proof sheets on double-weight fiber paper.",
  deliverableItems: ["Complete 1:1 contact proof sheets with handwritten exposure notes", "Selection suite of 8x10 trial enlargements on warmtone baryta", "Chemical selenium toner density curve certifications"],
  protocolNote: "Direct client review session via physical proofing dispatch.",
  icon: Droplets
}, {
  step: "04",
  stageName: "Archival Master Delivery & Institutional Folio",
  chemistryCode: "PHASE-IV / ARCH",
  duration: "Week 9–11",
  focus: "Museum-grade conservation framing, 100-year acid-free archival storage solander boxes, high-fidelity 8000dpi Flextight scans, and global shipping.",
  deliverableItems: ["Signed silver gelatin fiber prints mounted to museum cotton rag", "Handmade linen solander folio box with embossed atelier seal", "Full 16-bit TIFF digital repository and institutional copyright deed"],
  protocolNote: "ISO 9706 archival permanence compliance certificate enclosed.",
  icon: ShieldCheck
}];
export default function MethodologyTimeline() {
  const router = useRouter();
  const handleOpenBrief = () => {
    CommissionBooking.navigateTo(router);
  };
  return <section data-controller-name="Methodology Timeline" className="py-16 md:py-24 border-t border-border" data-api-unique-id='methodologytimeline-r764c01bdf0375a8d-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='methodologytimeline-r982573f755f56823-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
        {/* Section Header - quiet editorial hierarchy */}
        <div className="max-w-3xl mb-14 md:mb-18" data-api-unique-id='methodologytimeline-r29778d001a2bc5d2-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
          <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-2" data-api-unique-id='methodologytimeline-r19b2da3c7e4b5416-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
            Craftsmanship Protocol
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground" data-api-unique-id='methodologytimeline-r8d39a4d3155e0028-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
            Four-Stage Darkroom Methodology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed" data-api-unique-id='methodologytimeline-r4fb510c409f7ea8a-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
            Every bespoke commission adheres to Julian Vane’s uncompromised analog workflow—from initial spatial azimuth study to museum-grade silver gelatin chemical immersion.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative" data-api-unique-id='methodologytimeline-rea99bd5125fbcac7-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
          {/* Central vertical spine on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-px bg-border pointer-events-none" data-api-unique-id='methodologytimeline-rd0f4d8ace714f9be-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' />

          <div className="space-y-12 lg:space-y-16" data-api-unique-id='methodologytimeline-re8a93ffcd115b8af-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
            {METHODOLOGY_STAGES.map((stage, index) => {
            const isEven = index % 2 === 1;
            const Icon = stage.icon;
            return <div key={stage.step} className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`} data-api-unique-id='methodologytimeline-rb662810ad4d605ff-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                  {/* Timeline Badge (Desktop Center Marker) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 w-10 h-10 rounded-full bg-card border-2 border-primary items-center justify-center text-xs font-bold font-mono text-primary shadow-sm" data-api-unique-id='methodologytimeline-r02bda3f2c4915ce8-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-step`} data-api-map-var-name='stage'>
                    {stage.step}
                  </div>

                  {/* Left Column (or Right on alternate) */}
                  <div className={`min-w-0 ${isEven ? "lg:col-span-5 lg:order-2 lg:text-left" : "lg:col-span-5 lg:order-1 lg:text-right"}`} data-api-unique-id='methodologytimeline-r6fa96fd34cdbce67-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                    <div className="space-y-2" data-api-unique-id='methodologytimeline-r70c7895b9031daed-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                      <div className={`inline-flex items-center gap-2 ${isEven ? "justify-start" : "lg:justify-end"}`} data-api-unique-id='methodologytimeline-r07295f63e9e44a58-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                        <span className="lg:hidden inline-flex w-7 h-7 rounded-full bg-primary text-primary-foreground items-center justify-center text-xs font-bold font-mono" data-api-unique-id='methodologytimeline-r2f247ac5001e44d1-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-step`} data-api-map-var-name='stage'>
                          {stage.step}
                        </span>
                        <span className="font-mono text-xs font-medium tracking-wider text-primary uppercase" data-api-unique-id='methodologytimeline-r003653e668e2e325-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-chemistryCode`} data-api-map-var-name='stage'>
                          {stage.chemistryCode}
                        </span>
                        <span className="text-xs text-muted-foreground" data-api-unique-id='methodologytimeline-rb7f41ceded71e6be-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>·</span>
                        <span className="text-xs font-medium text-foreground" data-api-unique-id='methodologytimeline-r8ca01a97af1ecdd7-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-duration`} data-api-map-var-name='stage'>
                          {stage.duration}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground tracking-tight" data-api-unique-id='methodologytimeline-r4e110a13dff60bad-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-stageName`} data-api-map-var-name='stage'>
                        {stage.stageName}
                      </h3>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1" data-api-unique-id='methodologytimeline-r8c4fb32a9ba81f57-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-focus`} data-api-map-var-name='stage'>
                        {stage.focus}
                      </p>

                      <p className="text-xs italic text-primary/80 pt-1" data-api-unique-id='methodologytimeline-ra1a1105e4824ad72-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-protocolNote`} data-api-map-var-name='stage'>
                        {stage.protocolNote}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for center alignment */}
                  <div className="hidden lg:block lg:col-span-2 lg:order-2" data-api-unique-id='methodologytimeline-r96a46f58e4a19620-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' />

                  {/* Right Column (Deliverables and Protocol Box) */}
                  <div className={`min-w-0 ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-3"}`} data-api-unique-id='methodologytimeline-r9d6336f3dad6125e-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                    <div className="bg-card text-card-foreground p-6 sm:p-7 rounded-xl border border-border space-y-4" data-api-unique-id='methodologytimeline-r2bd7788f86992b93-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                      <div className="flex items-center gap-3" data-api-unique-id='methodologytimeline-rc2105c071e9dab77-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                        <div className="w-8 h-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center shrink-0" data-api-unique-id='methodologytimeline-r8f8edf67a70c2d83-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                          <Icon className="w-4 h-4 text-primary" data-api-bind-info={`METHODOLOGY_STAGES-${index}-icon`} data-api-map-var-name='stage' data-api-unique-id='methodologytimeline-r0c136955b6f0a902-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' />
                        </div>
                        <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground" data-api-unique-id='methodologytimeline-r171f6cf7578f3c6f-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                          Concrete Stage Deliverables
                        </h4>
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground" data-api-unique-id='methodologytimeline-r5d02871492c6489c-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                        {stage.deliverableItems.map((item, index1) => <li key={index1} className="flex items-start gap-2.5" data-api-unique-id='methodologytimeline-r1a7ee40c1ede78cc-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1'>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" data-api-unique-id='methodologytimeline-r4c7736e8b082f268-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' />
                            <span className="leading-snug text-foreground/90" data-api-unique-id='methodologytimeline-r5783a8905a854607-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' data-api-in-loop='1' data-api-bind-info={`METHODOLOGY_STAGES-${index}-stage.deliverableItems-${index1}-$item`} data-api-map-var-name='item'>
                              {item}
                            </span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Bottom micro-anchor to inquiry brief */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4" data-api-unique-id='methodologytimeline-r0c17efeb310996f4-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
          <p className="text-sm text-muted-foreground text-center sm:text-left" data-api-unique-id='methodologytimeline-rd4caa94ce954e277-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
            Have multi-phase or institutional timing constraints? Bespoke parameters can be arranged during initial reconnaissance.
          </p>
          <button type="button" onClick={handleOpenBrief} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1 transition-colors shrink-0" data-api-unique-id='methodologytimeline-r9fbf09ad4c642a29-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>
            <span data-api-unique-id='methodologytimeline-rad06e99c222c7451-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline'>Open Custom Brief</span>
            <ArrowRight className="w-3.5 h-3.5" data-api-unique-id='methodologytimeline-rff04d7886757a05d-s3951649629' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/MethodologyTimeline' />
          </button>
        </div>
      </div>
    </section>;
}