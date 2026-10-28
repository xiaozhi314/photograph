"use client";

import React, { useState } from "react";
import EditableImg from "@/@base/EditableImg";
import type { ClientTestimonialItem } from "@/frontend/types/ServicesTestimonials";
import { Star, Award, ShieldCheck, Quote } from "lucide-react";
interface TestimonialsArchiveProps {
  testimonials?: ClientTestimonialItem[];
  isLoading?: boolean;
}
const SERVICE_FILTER_LABELS: Record<string, string> = {
  ALL: "All Critiques",
  EDITORIAL: "Editorial",
  PORTRAIT: "Portraiture",
  COMMERCIAL: "Commercial",
  ACQUISITION: "Acquisition"
};
const DEFAULT_TESTIMONIALS: ClientTestimonialItem[] = [{
  id: "default-1",
  clientId: null,
  clientName: "Dr. Helena Vance",
  clientTitle: "Senior Curator of Photography",
  organization: "Metropolitan Institute of Art",
  quote: "Julian Vane's master silver gelatin folios exhibit an optical density and tonal subtlety unmatched in contemporary practice. His chemistry respects both the medium and institutional permanence.",
  serviceType: "ACQUISITION",
  rating: 5,
  avatarImage: null,
  isFeatured: true,
  sortOrder: 1,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}, {
  id: "default-2",
  clientId: null,
  clientName: "Marcus Sterling",
  clientTitle: "Creative Director",
  organization: "Architectural Ephemera Press",
  quote: "For our monographic survey of brutalist sanctuaries, Julian captured shadow gradations that digital sensors simply collapse. A profound dialogue between medium-format film and brutalist concrete.",
  serviceType: "EDITORIAL",
  rating: 5,
  avatarImage: null,
  isFeatured: false,
  sortOrder: 2,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}, {
  id: "default-3",
  clientId: null,
  clientName: "Clara von Berg",
  clientTitle: "Principal Collector",
  organization: "Von Berg Fine Art Trust",
  quote: "Commissioning private editorial portraits on 4x5 large format felt less like a portrait sitting and more like a meditative artisanal act. The finished contact prints are heirlooms.",
  serviceType: "PORTRAIT",
  rating: 5,
  avatarImage: null,
  isFeatured: false,
  sortOrder: 3,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}];
export default function TestimonialsArchive({
  testimonials,
  isLoading
}: TestimonialsArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const effectiveTestimonials = testimonials && testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS;
  const filteredTestimonials = effectiveTestimonials.filter(t => {
    if (activeFilter === "ALL") return true;
    return t.serviceType === activeFilter;
  });
  const featured = filteredTestimonials.find(t => t.isFeatured) || filteredTestimonials[0];
  const regular = filteredTestimonials.filter(t => t.id !== featured?.id);
  return <section data-controller-name="Testimonials Archive" className="py-16 md:py-24 border-t border-border bg-card text-card-foreground" data-api-unique-id='testimonialsarchive-r803acadfbfbcb092-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='testimonialsarchive-r8dda499864bc4a36-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
        {/* Section Header */}
        <div className="max-w-3xl mb-12" data-api-unique-id='testimonialsarchive-rdf9b64984b65155b-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3" data-api-unique-id='testimonialsarchive-raa223213dc2d08c0-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
            Institutional Endorsements &amp; Critiques
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight" data-api-unique-id='testimonialsarchive-rfa90eff74b4d8af7-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
            Critical reflections on tonal permanence.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed" data-api-unique-id='testimonialsarchive-rdd0816debd74e469-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
            Words from curatorial directors, magazine publishers, and private collectors whose
            commissions and monograph acquisitions depend on uncompromised analog chemistry.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12" data-api-unique-id='testimonialsarchive-rf300719fcda31d9b-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
          {(["ALL", "EDITORIAL", "PORTRAIT", "COMMERCIAL", "ACQUISITION"] as const).map((key, index) => {
          const isSelected = activeFilter === key;
          return <button key={key} type="button" onClick={() => setActiveFilter(key)} className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isSelected ? "bg-primary text-primary-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='testimonialsarchive-rdcbe1e680838bf19-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                {SERVICE_FILTER_LABELS[key]}
              </button>;
        })}
        </div>

        {/* Lead Featured Critique */}
        {featured && <div className="mb-12 p-8 sm:p-12 bg-background text-foreground border border-border rounded-sm relative" data-api-unique-id='testimonialsarchive-rb6fe025323ee37ab-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
            <Quote className="w-16 h-16 text-primary/15 absolute top-6 right-6 pointer-events-none" data-api-unique-id='testimonialsarchive-r7600cf1fae0a08cb-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-api-unique-id='testimonialsarchive-r78cf5d73d5944124-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
              {/* Reviewer Meta */}
              <div className="lg:col-span-4 flex flex-col items-start gap-4" data-api-unique-id='testimonialsarchive-r304dc713db9c15d9-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 bg-muted shrink-0" data-api-unique-id='testimonialsarchive-r41655ba34abc2e7f-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                  <EditableImg propKey={`testimonial-avatar-${featured.id}`} src={featured.avatarImage || undefined} className="w-full h-full object-cover" data-api-unique-id='testimonialsarchive-r91dc542fdf56a4f1-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' />
                </div>

                <div data-api-unique-id='testimonialsarchive-ra1ba4bea6f6ffa16-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                  <h3 className="text-lg font-serif font-bold text-foreground" data-api-unique-id='testimonialsarchive-ra57d1acce5028bbb-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                    {featured.clientName}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5" data-api-unique-id='testimonialsarchive-rf7be03a1e93a9ae8-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                    {featured.clientTitle}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-1" data-api-unique-id='testimonialsarchive-r03f640afc90f842f-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                    {featured.organization}
                  </p>
                </div>

                <div className="flex items-center gap-1 mt-2" data-api-unique-id='testimonialsarchive-ree09d9df20f9b76e-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                  {[...Array(5)].map((_, index) => <Star key={index} className={`w-4 h-4 ${index < featured.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} data-api-unique-id='testimonialsarchive-r06efa7969cc397fa-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' />)}
                  <span className="text-xs font-semibold ml-2 text-foreground" data-api-unique-id='testimonialsarchive-r5ca502f35e4a7f9e-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                    {featured.rating}.0 / 5.0
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary text-secondary-foreground text-[11px] font-mono uppercase tracking-wider rounded-sm mt-2" data-api-unique-id='testimonialsarchive-rc981f71510806568-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" data-api-unique-id='testimonialsarchive-rcce982f7cf7a65a7-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' />
                  Verified Commission
                </div>
              </div>

              {/* Quote Body */}
              <div className="lg:col-span-8 flex flex-col justify-between h-full pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-8" data-api-unique-id='testimonialsarchive-r1f35a33df105e47c-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                <blockquote className="text-lg sm:text-xl font-serif italic text-foreground leading-relaxed" data-api-unique-id='testimonialsarchive-racce6f5b2c9a5134-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>}

        {/* Regular Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-api-unique-id='testimonialsarchive-ra6027900716fe8db-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive'>
          {regular.map((item, index) => <article key={item.id} className="p-6 sm:p-8 bg-background text-foreground border border-border rounded-sm flex flex-col justify-between transition-colors hover:border-primary/40" data-api-unique-id='testimonialsarchive-r52cfb0dd2f57832a-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
              <div data-api-unique-id='testimonialsarchive-r0f3806a1c52c78f0-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                <div className="flex items-start justify-between gap-4 mb-4" data-api-unique-id='testimonialsarchive-rd6444dfde5bd673d-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                  <div className="flex items-center gap-3" data-api-unique-id='testimonialsarchive-r603c4f020b834dbf-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-muted shrink-0" data-api-unique-id='testimonialsarchive-r9cf422ba9c362850-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                      <EditableImg propKey={`testimonial-avatar-${item.id}`} src={item.avatarImage || undefined} className="w-full h-full object-cover" data-api-unique-id='testimonialsarchive-r91518884c7ef7a1c-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' />
                    </div>
                    <div data-api-unique-id='testimonialsarchive-r41eaec80e0077adb-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                      <h4 className="text-base font-serif font-bold text-foreground" data-api-unique-id='testimonialsarchive-rf6b60cd945c4d5ba-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' data-api-bind-info={`regular-${index}-clientName`} data-api-map-var-name='item'>
                        {item.clientName}
                      </h4>
                      <p className="text-xs text-muted-foreground" data-api-unique-id='testimonialsarchive-ra82dab460adc6e01-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' data-api-bind-info={`regular-${index}-clientTitle`} data-api-map-var-name='item'>{item.clientTitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 shrink-0" data-api-unique-id='testimonialsarchive-r95c03c786bd852d7-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                    {[...Array(5)].map((_, index1) => <Star key={index1} className={`w-3.5 h-3.5 ${index1 < item.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} data-api-unique-id='testimonialsarchive-rd97f41090f157c61-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' />)}
                  </div>
                </div>

                <p className="text-xs font-semibold text-primary mb-3" data-api-unique-id='testimonialsarchive-r17f15899e04e3263-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' data-api-bind-info={`regular-${index}-organization`} data-api-map-var-name='item'>
                  {item.organization}
                </p>

                <p className="text-sm font-serif italic text-foreground/90 leading-relaxed mb-6" data-api-unique-id='testimonialsarchive-r12b066118c350c8d-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' data-api-bind-info={`regular-${index}-quote`} data-api-map-var-name='item'>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono" data-api-unique-id='testimonialsarchive-r35cbe4b13f181b58-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1'>
                <span className="inline-flex items-center gap-1 text-[11px]" data-api-unique-id='testimonialsarchive-re984adf842326f21-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' data-api-bind-info={`regular-${index}-serviceType`} data-api-map-var-name='item'>
                  <Award className="w-3.5 h-3.5 text-primary" data-api-unique-id='testimonialsarchive-rb6fe0f43e27a629a-s2286613064' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/TestimonialsArchive' data-api-in-loop='1' />
                  {item.serviceType}
                </span>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}