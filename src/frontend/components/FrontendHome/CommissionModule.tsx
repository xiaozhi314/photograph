"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ServicePackage, ClientTestimonial, CommissionInquiryResult, ProjectType, CreateCommissionInquiryInput } from "@/frontend/types/FrontendHome";
import { submitCommissionInquiry } from "@/frontend/actions/FrontendHome";
import { useUserSession } from "@/tools/FrontendSession";
import { CommissionBooking, ClientLogin } from "@/frontend/route-params";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2, Clock, ShieldCheck, Star, LogIn, UserCheck } from "lucide-react";
interface CommissionModuleProps {
  servicePackages?: ServicePackage[];
  testimonials?: ClientTestimonial[];
}
const PROJECT_TYPE_OPTIONS: {
  label: string;
  value: ProjectType;
}[] = [{
  label: "Architectural Monograph (Editorial)",
  value: "EDITORIAL"
}, {
  label: "Bespoke Portraiture Session (Portrait)",
  value: "PORTRAIT"
}, {
  label: "Curated Commercial Campaign (Commercial)",
  value: "COMMERCIAL"
}, {
  label: "Private Print Acquisition (Acquisition)",
  value: "ACQUISITION"
}];
const BUDGET_OPTIONS: string[] = ["$5,000 – $10,000", "$10,000 – $25,000", "$25,000+", "Institutional / Grant-Funded"];
const DEFAULT_SERVICE_PACKAGES = [{
  id: "pkg-1",
  title: "Architectural Monograph",
  serviceType: "ARCHITECTURAL_MONOGRAPH" as const,
  basePrice: 12500,
  priceDisplay: "From $12,500",
  durationEstimate: "3–4 Weeks On-Site & Darkroom",
  deliverables: ["Full plate monograph archival portfolio", "10 hand-coated silver gelatin master prints", "High-res publication digital archives"],
  sortOrder: 1
}, {
  id: "pkg-2",
  title: "Editorial & Fine Portraiture",
  serviceType: "EDITORIAL_PORTRAITURE" as const,
  basePrice: 6500,
  priceDisplay: "From $6,500",
  durationEstimate: "2 Weeks Studio & Processing",
  deliverables: ["Large-format 8x10 film session", "Bespoke contact proofs and selenium toning", "Signed limited editions for publication"],
  sortOrder: 2
}, {
  id: "pkg-3",
  title: "Private Print Acquisition",
  serviceType: "PRINT_ACQUISITION" as const,
  basePrice: 4000,
  priceDisplay: "Inquire for Registry",
  durationEstimate: "Immediate / 10 Days Framing",
  deliverables: ["Archival museum rag framing", "Numbered certificate of authenticity", "White-glove international crate delivery"],
  sortOrder: 3
}];
const DEFAULT_TESTIMONIALS = [{
  id: "test-1",
  quote: "Julian captures architectural space not as concrete form, but as luminous sanctuary. The plates for our Milan civic monograph are timeless works of art.",
  clientName: "Matteo Bellini",
  clientTitle: "Senior Partner",
  organization: "Studio Bellini Architettura · Milan",
  rating: 5,
  serviceType: "EDITORIAL" as ProjectType,
  avatarImage: null
}, {
  id: "test-2",
  quote: "Working with Julian in his Kyoto darkroom revealed an uncompromising reverence for silver grain and paper weight. Exceptional mastery.",
  clientName: "Reiko Takahashi",
  clientTitle: "Curatorial Director",
  organization: "Gendai Photography Foundation · Tokyo",
  rating: 5,
  serviceType: "PORTRAIT" as ProjectType,
  avatarImage: null
}];
export default function CommissionModule({
  servicePackages = DEFAULT_SERVICE_PACKAGES,
  testimonials = DEFAULT_TESTIMONIALS
}: CommissionModuleProps) {
  const router = useRouter();
  const session = useUserSession();
  const isAuthenticated = Boolean(session.user_id && session.role === "CLIENT");
  const [formData, setFormData] = useState<CreateCommissionInquiryInput>({
    clientName: "",
    clientEmail: "",
    organization: "",
    projectType: "EDITORIAL",
    budgetTier: "$10,000 – $25,000",
    targetTimeline: "Q3 / Q4 2025",
    location: "Milan Studio / International",
    projectBrief: ""
  });
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill client details if authenticated session exists
  useEffect(() => {
    if (isAuthenticated) {
      setFormData(prev => ({
        ...prev,
        clientName: session.full_name || prev.clientName,
        clientEmail: session.email || prev.clientEmail
      }));
    }
  }, [isAuthenticated, session.full_name, session.email]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitCommissionInquiry({
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        organization: formData.organization || undefined,
        projectType: formData.projectType,
        budgetTier: formData.budgetTier,
        targetTimeline: formData.targetTimeline,
        location: formData.location || undefined,
        projectBrief: formData.projectBrief,
        servicePackageId: selectedPackageId
      });
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Commission folio received. Julian Vane Atelier will reply within 48h.");
    } catch {
      setIsSubmitting(false);
      toast.error("Failed to transmit commission inquiry. Please try again.");
    }
  };
  const handleReset = () => {
    setSubmitted(false);
    setSelectedPackageId(undefined);
    setFormData({
      clientName: isAuthenticated ? session.full_name : "",
      clientEmail: isAuthenticated ? session.email : "",
      organization: "",
      projectType: "EDITORIAL",
      budgetTier: "$10,000 – $25,000",
      targetTimeline: "Q3 / Q4 2025",
      location: "Milan Studio / International",
      projectBrief: ""
    });
  };
  const activePackages = servicePackages.length > 0 ? servicePackages : DEFAULT_SERVICE_PACKAGES;
  const activeTestimonials = testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS;
  return <section id="commissions" data-controller-name="Direct Commission & Inquiry" className="w-full bg-card text-card-foreground border-t border-border/80" data-api-unique-id='commissionmodule-rff0e90b118fe2637-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24" data-api-unique-id='commissionmodule-r391a7aa8cc03c554-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
        {/* Service Package Tiers overview */}
        <div className="mb-14" data-api-unique-id='commissionmodule-r7a156df0cf61045c-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4" data-api-unique-id='commissionmodule-r9b56334f5c403b05-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
            <div data-api-unique-id='commissionmodule-ra01df8725a6a6337-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-medium" data-api-unique-id='commissionmodule-r0ee74403bca44396-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Commission Frameworks
              </span>
              <h2 className="text-2xl sm:text-3xl font-display text-card-foreground tracking-tight mt-1" data-api-unique-id='commissionmodule-rc42bea57bb71199f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Studio Engagements &amp; Archival Retainers
              </h2>
            </div>
            <button type="button" onClick={() => CommissionBooking.navigateTo(router)} className="text-xs font-mono uppercase tracking-wider text-primary hover:underline self-start md:self-auto text-left" data-api-unique-id='commissionmodule-rfd0c8a52f0c23152-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
              Book Custom Commission [F06] →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-api-unique-id='commissionmodule-r7ac16b0d9477d682-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
            {activePackages.map((pkg, index) => <div key={pkg.id} className="p-6 rounded-sm bg-background border border-border/70 flex flex-col justify-between" data-api-unique-id='commissionmodule-rcf5ad9b80299bd75-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                <div data-api-unique-id='commissionmodule-r526c5d42cf6b3d4a-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1" data-api-unique-id='commissionmodule-r4df68ee90dea4a05-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                    {pkg.serviceType.replace(/_/g, " ")}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-foreground tracking-tight mb-2" data-api-unique-id='commissionmodule-re6a3502c79a0f011-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`activePackages-${index}-title`} data-api-map-var-name='pkg'>
                    {pkg.title}
                  </h3>
                  <p className="text-xl font-display text-primary font-semibold mb-2" data-api-unique-id='commissionmodule-rfd5c5163eb930b29-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`activePackages-${index}-priceDisplay`} data-api-map-var-name='pkg'>
                    {pkg.priceDisplay}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-1.5" data-api-unique-id='commissionmodule-rab4983ed1239a859-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='commissionmodule-rcd5d3a3ed643a2d4-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' />
                    <span data-api-unique-id='commissionmodule-rce79f682faab5ffc-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`activePackages-${index}-durationEstimate`} data-api-map-var-name='pkg'>{pkg.durationEstimate}</span>
                  </p>
                  <ul className="space-y-2 mb-6 border-t border-border/60 pt-4" data-api-unique-id='commissionmodule-r4db1cdd40c2fbc2b-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                    {pkg.deliverables.map((d, index1) => <li key={index1} className="text-xs text-muted-foreground flex items-start gap-2" data-api-unique-id='commissionmodule-r1fe6066f7a0088e9-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                        <span className="text-primary font-mono mt-0.5" data-api-unique-id='commissionmodule-rd1052f6200211bbb-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>•</span>
                        <span data-api-unique-id='commissionmodule-r71d0c912ffb7b53b-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`activePackages-${index}-pkg.deliverables-${index1}-$item`} data-api-map-var-name='d'>{d}</span>
                      </li>)}
                  </ul>
                </div>
                <button type="button" onClick={() => {
              setSelectedPackageId(pkg.id);
              let matchedType: ProjectType = "EDITORIAL";
              if (pkg.serviceType.includes("PORTRAIT")) matchedType = "PORTRAIT";else if (pkg.serviceType.includes("COMMERCIAL")) matchedType = "COMMERCIAL";else if (pkg.serviceType.includes("ACQUISITION")) matchedType = "ACQUISITION";
              setFormData(prev => ({
                ...prev,
                projectType: matchedType
              }));
              toast.info(`Selected ${pkg.title}. Fill out the folio below.`);
            }} className={`w-full text-center py-2 text-xs font-mono uppercase tracking-wider border rounded-sm transition-colors ${selectedPackageId === pkg.id ? "border-primary bg-primary text-primary-foreground" : "border-border/80 hover:bg-muted text-card-foreground"}`} data-api-unique-id='commissionmodule-rfcd8f94587ef53d1-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                  {selectedPackageId === pkg.id ? "Package Selected" : "Select Package"}
                </button>
              </div>)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" data-api-unique-id='commissionmodule-r0af14f09ff7752dc-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
          {/* Studio Representation, Testimonials & Practical Information */}
          <div className="lg:col-span-5 space-y-8" data-api-unique-id='commissionmodule-r2da6282981cb7383-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
            <div className="space-y-3" data-api-unique-id='commissionmodule-r080e038732bf5d65-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-medium" data-api-unique-id='commissionmodule-r84d99fb3fbd8a0c9-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Atelier &amp; Representation
              </span>
              <h2 className="text-3xl font-display text-card-foreground tracking-tight" data-api-unique-id='commissionmodule-rfdecda58790a6e31-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Direct Commissions &amp; Archival Inquiries
              </h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed" data-api-unique-id='commissionmodule-r16ed8b89803e5a4c-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Julian Vane accepts limited private monographs, institutional architectural documentations, and bespoke gallery print editions each quarter.
              </p>
            </div>

            {/* Representation Notes */}
            <div className="space-y-4 pt-4 border-t border-border/60" data-api-unique-id='commissionmodule-r45b56d0cde6626be-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
              <div className="space-y-1" data-api-unique-id='commissionmodule-r90a8e0c4ae9d1862-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground" data-api-unique-id='commissionmodule-re76f00838c736867-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Gallery Representation</span>
                <p className="text-sm font-medium text-card-foreground" data-api-unique-id='commissionmodule-r2a03e9a96e975cb6-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Galleria Chiaroscuro · Milan</p>
                <p className="text-xs text-muted-foreground" data-api-unique-id='commissionmodule-r947090dbe34fb2f8-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Via San Carpoforo 9, 20121 Milano</p>
              </div>

              <div className="space-y-1" data-api-unique-id='commissionmodule-r4f5b48e27a0ff63f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground" data-api-unique-id='commissionmodule-r8c331efd29019274-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Print Archive Agency</span>
                <p className="text-sm font-medium text-card-foreground" data-api-unique-id='commissionmodule-r133623975477ee4f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Nihonbashibashi Editions · Tokyo</p>
                <p className="text-xs text-muted-foreground" data-api-unique-id='commissionmodule-r6ed3eef5eeb6892d-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Chuo-ku, Tokyo 103-0027</p>
              </div>
            </div>

            {/* Featured Testimonials */}
            <div className="space-y-4 pt-4 border-t border-border/60" data-api-unique-id='commissionmodule-rc87673bef534ef64-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r769e59730a23db04-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Critical Accolades &amp; Client Words
              </span>
              {activeTestimonials.map((t, index) => <div key={t.id} className="p-4 rounded-sm bg-background/60 border border-border/60 space-y-2" data-api-unique-id='commissionmodule-re5cfb50117be8df6-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                  <div className="flex items-center gap-1 text-primary" data-api-unique-id='commissionmodule-r22bbd06b6bec1f83-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1'>
                    {Array.from({
                  length: t.rating || 5
                }).map((_, index1) => <Star key={index1} className="w-3.5 h-3.5 fill-primary text-primary" data-api-unique-id='commissionmodule-r3e876b98542a6cb4-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' />)}
                  </div>
                  <p className="text-xs italic text-card-foreground leading-relaxed" data-api-unique-id='commissionmodule-r90a260e0633bda9d-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`activeTestimonials-${index}-quote`} data-api-map-var-name='t'>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground" data-api-unique-id='commissionmodule-r6c8533fffc1c2700-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`activeTestimonials-${index}-clientName`} data-api-map-var-name='t'>
                    — {t.clientName}, {t.clientTitle} ({t.organization})
                  </p>
                </div>)}
            </div>

            {/* Practical Studio Hours & Dispatch */}
            <div className="p-4 rounded-sm bg-muted text-muted-foreground border border-border/60 space-y-2 text-xs font-mono" data-api-unique-id='commissionmodule-r3257ea32138a613e-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
              <div className="flex items-center gap-2 text-card-foreground" data-api-unique-id='commissionmodule-rab7a0a5eadbb5502-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                <Clock className="w-3.5 h-3.5 text-primary" data-api-unique-id='commissionmodule-r684605817d850e4d-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                <span data-api-unique-id='commissionmodule-r61c58c234c4de1c5-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Studio Dispatch Rhythm</span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground font-body" data-api-unique-id='commissionmodule-r18f0b9aa48fd83d8-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                Correspondence reviewed Tuesday through Friday. Darkroom printing runs take place every Monday and Saturday.
              </p>
            </div>
          </div>

          {/* Interactive Commission Inquiry Form */}
          <div className="lg:col-span-7 bg-background p-6 sm:p-8 lg:p-10 rounded-sm border border-border/80 shadow-sm" data-api-unique-id='commissionmodule-r52fa7b258d45a8a5-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
            {submitted ? <div className="py-12 text-center space-y-4" data-api-unique-id='commissionmodule-r11cc07730cb229ed-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success text-success-foreground mx-auto" data-api-unique-id='commissionmodule-r90e3bd4fbb885382-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <CheckCircle2 className="w-6 h-6" data-api-unique-id='commissionmodule-r52f6303efca4d8a4-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                </div>
                <h3 className="text-2xl font-display text-foreground tracking-tight" data-api-unique-id='commissionmodule-r1afa2428a5d94930-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  Inquiry Dispatched to Studio
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto font-body" data-api-unique-id='commissionmodule-r1b60c61b76981164-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  Thank you, <span className="font-medium text-foreground" data-api-unique-id='commissionmodule-rf260e1c530e4d180-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>{formData.clientName}</span>. Julian Vane and his studio representative will review your project parameters and respond within 48 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3" data-api-unique-id='commissionmodule-ra33403c8d5ec4823-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <button type="button" onClick={handleReset} className="border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground text-xs uppercase tracking-wider font-mono px-5 py-2.5 rounded-sm transition-colors" data-api-unique-id='commissionmodule-r5bf438977a4a44f2-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    Submit Another Inquiry
                  </button>
                  <button type="button" onClick={() => CommissionBooking.navigateTo(router)} className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-wider font-mono px-5 py-2.5 rounded-sm transition-colors" data-api-unique-id='commissionmodule-r9c0e358f8b239e06-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    View Commission Studio [F06]
                  </button>
                </div>
              </div> : <form onSubmit={handleSubmit} className="space-y-6" data-api-unique-id='commissionmodule-r227e772ce0c83877-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                <div className="space-y-1 border-b border-border/60 pb-4" data-api-unique-id='commissionmodule-r14713be0ba99e16d-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2" data-api-unique-id='commissionmodule-r661987f8ddceb7c4-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <h3 className="text-xl font-display text-foreground tracking-tight" data-api-unique-id='commissionmodule-re62bde9fd58eb5ef-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Commission Intake Folio
                    </h3>
                    {isAuthenticated ? <div className="inline-flex items-center gap-1.5 text-xs text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-sm border border-primary/20" data-api-unique-id='commissionmodule-r5752ae77a9c601c9-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                        <UserCheck className="w-3.5 h-3.5" data-api-unique-id='commissionmodule-ra38ef9a91a6b4710-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                        <span data-api-unique-id='commissionmodule-r4edd77b863bb5e38-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Client Verified · {session.full_name}</span>
                      </div> : <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono" data-api-unique-id='commissionmodule-r10f09b468723fa0f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                        <span data-api-unique-id='commissionmodule-raed68720d52255f5-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Existing client?</span>
                        <button type="button" onClick={() => ClientLogin.navigateTo(router)} className="text-primary hover:underline inline-flex items-center gap-1 font-medium" data-api-unique-id='commissionmodule-r26cbb2fb4976ce04-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                          <LogIn className="w-3 h-3" data-api-unique-id='commissionmodule-ra17559a8cef852b5-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                          <span data-api-unique-id='commissionmodule-r043ca676c74a0a7c-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Sign In</span>
                        </button>
                      </div>}
                  </div>
                  <p className="text-xs text-muted-foreground font-body" data-api-unique-id='commissionmodule-r49c1e5e9e5e7c044-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    Please detail the intended medium, scale, and architectural context. Durable inquiry stored with status NEW.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" data-api-unique-id='commissionmodule-r2733851e6bd5c4c6-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <div className="space-y-1.5" data-api-unique-id='commissionmodule-r91ea4da6287c2d7f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r5a96d19917825fc8-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Full Name *
                    </label>
                    <input type="text" required placeholder="e.g. Elena Rostova" value={formData.clientName} onChange={e => setFormData(prev => ({
                  ...prev,
                  clientName: e.target.value
                }))} className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60" data-api-unique-id='commissionmodule-rfcc3eb3808d8b045-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                  </div>

                  <div className="space-y-1.5" data-api-unique-id='commissionmodule-r9f494c26019013ea-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r23f8a328ecef5f39-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Direct Email *
                    </label>
                    <input type="email" required placeholder="e.g. client@studio.com" value={formData.clientEmail} onChange={e => setFormData(prev => ({
                  ...prev,
                  clientEmail: e.target.value
                }))} className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60" data-api-unique-id='commissionmodule-r6cbaf0dcd186e450-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" data-api-unique-id='commissionmodule-r2b85103b5805dd0c-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <div className="space-y-1.5" data-api-unique-id='commissionmodule-r231f6e4505a52385-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-rbbe9919a9ab04c9a-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Organization / Studio / Publication
                    </label>
                    <input type="text" placeholder="e.g. Atelier Kuma & Associates" value={formData.organization} onChange={e => setFormData(prev => ({
                  ...prev,
                  organization: e.target.value
                }))} className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60" data-api-unique-id='commissionmodule-r6edaed7db669438e-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                  </div>

                  <div className="space-y-1.5" data-api-unique-id='commissionmodule-ra63b1b0078a00f1b-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r5e41f05cdf31a8da-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Project Location / City
                    </label>
                    <input type="text" placeholder="e.g. Milan, Italy or Tokyo" value={formData.location} onChange={e => setFormData(prev => ({
                  ...prev,
                  location: e.target.value
                }))} className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60" data-api-unique-id='commissionmodule-rb5a7bf53dee5fd8c-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" data-api-unique-id='commissionmodule-r93edb84f0b48f5dd-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  {/* Service Type Selection with shadcn Select */}
                  <div className="space-y-1.5" data-api-unique-id='commissionmodule-r2659009b8e520d8b-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r58e4423101a8bfd5-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Commission Scope
                    </label>
                    <Select value={formData.projectType} onValueChange={(val: ProjectType) => setFormData(prev => ({
                  ...prev,
                  projectType: val
                }))} data-api-unique-id='commissionmodule-r39eafef507ff6b63-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      <SelectTrigger className="w-full bg-card border-border text-foreground text-sm h-10 rounded-sm" data-api-unique-id='commissionmodule-r9dad945ebbfb45ca-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                        <SelectValue placeholder="Select discipline" data-api-unique-id='commissionmodule-rd6e1142fe81c5df6-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                          {PROJECT_TYPE_OPTIONS.find(o => o.value === formData.projectType)?.label || "Select scope"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border-border" data-api-unique-id='commissionmodule-r5cb9b2e9cbef8b06-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                        {PROJECT_TYPE_OPTIONS.map((opt, index) => <SelectItem key={opt.value} value={opt.value} className="text-xs py-2" data-api-unique-id='commissionmodule-rc546359ce3b3d39f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`PROJECT_TYPE_OPTIONS-${index}-label`} data-api-map-var-name='opt'>
                            {opt.label}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget Tier Selection with shadcn Select */}
                  <div className="space-y-1.5" data-api-unique-id='commissionmodule-r5950f3a5a3225808-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r15ac3a9f705d727a-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Anticipated Budget Bracket
                    </label>
                    <Select value={formData.budgetTier} onValueChange={val => setFormData(prev => ({
                  ...prev,
                  budgetTier: val
                }))} data-api-unique-id='commissionmodule-r46799b88bde59abd-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      <SelectTrigger className="w-full bg-card border-border text-foreground text-sm h-10 rounded-sm" data-api-unique-id='commissionmodule-r9178a6a8f48e01c2-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                        <SelectValue placeholder="Select budget bracket" data-api-unique-id='commissionmodule-r7aaa11c3afc9ceac-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                          {formData.budgetTier}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border-border" data-api-unique-id='commissionmodule-rd4f8bc80825331fc-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                        {BUDGET_OPTIONS.map((b, index) => <SelectItem key={b} value={b} className="text-xs py-2" data-api-unique-id='commissionmodule-r90877320537a723f-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' data-api-in-loop='1' data-api-bind-info={`BUDGET_OPTIONS-${index}-$item`} data-api-map-var-name='b'>
                            {b}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5" data-api-unique-id='commissionmodule-r1e6fd6d0b81c0a83-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r53652c43e93ec42d-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    Target Completion Timeline
                  </label>
                  <input type="text" placeholder="e.g. Q3 / Q4 2025" value={formData.targetTimeline} onChange={e => setFormData(prev => ({
                ...prev,
                targetTimeline: e.target.value
              }))} className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60" data-api-unique-id='commissionmodule-r51d50ddc227e6189-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                </div>

                <div className="space-y-1.5" data-api-unique-id='commissionmodule-r7665db8391bcb5a0-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block" data-api-unique-id='commissionmodule-r4d094b526a7e3e18-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    Project Brief &amp; Architectural Context
                  </label>
                  <textarea rows={4} required placeholder="Describe site location, building materials, desired plate count, or archival printing specifications..." value={formData.projectBrief} onChange={e => setFormData(prev => ({
                ...prev,
                projectBrief: e.target.value
              }))} className="w-full bg-card border border-border text-foreground text-sm p-3.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60 resize-y" data-api-unique-id='commissionmodule-r37e939cc57412c9d-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2" data-api-unique-id='commissionmodule-r859d0f9bdab4299c-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono" data-api-unique-id='commissionmodule-r968077725d0086f6-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" data-api-unique-id='commissionmodule-r801d6f90f4c6a6dc-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                    <span data-api-unique-id='commissionmodule-r65aeb27bb55388ca-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>Non-disclosure &amp; archival provenance assured</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto" data-api-unique-id='commissionmodule-ra86e13c7507e1844-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                    <button type="button" onClick={() => CommissionBooking.navigateTo(router)} className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hidden sm:inline-block" data-api-unique-id='commissionmodule-r8af3a2010305f1c9-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      Full Booking Intake [F06]
                    </button>
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 disabled:opacity-50 disabled:pointer-events-none transition-colors px-6 py-3 text-xs uppercase tracking-wider font-mono font-medium rounded-sm shadow-sm" data-api-unique-id='commissionmodule-r2e94bfb0b3f7b794-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>
                      <span data-api-unique-id='commissionmodule-rd8771f89c0f7c804-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule'>{isSubmitting ? "Dispatching..." : "Transmit Commission Folio"}</span>
                      <Send className="w-3.5 h-3.5" data-api-unique-id='commissionmodule-re41fdf538ea045a6-s901236345' data-api-unique-page-name='src/frontend/components/FrontendHome/CommissionModule' />
                    </button>
                  </div>
                </div>
              </form>}
          </div>
        </div>
      </div>
    </section>;
}