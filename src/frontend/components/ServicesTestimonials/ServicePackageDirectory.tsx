"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Clock, Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
import { CommissionBooking } from "@/frontend/route-params";
import type { ServicePackageItem, ServiceType } from "@/frontend/types/ServicesTestimonials";
export interface ServicePackageDirectoryProps {
  packages?: ServicePackageItem[];
  isLoading?: boolean;
  onSelectPackage?: (pkg: ServicePackageItem) => void;
}
const DEFAULT_PACKAGES: ServicePackageItem[] = [{
  id: "pkg-arch-monograph",
  title: "Institutional Architectural Monograph",
  serviceType: "ARCHITECTURAL_MONOGRAPH",
  basePrice: 9400,
  priceDisplay: "$9,400 Starting Investment",
  durationEstimate: "4–6 Weeks On-Site & Darkroom Processing",
  deliverables: ["12 Hand-printed fiber-based silver gelatin master prints (16×20 in)", "Medium-format digital raw scans (100MP Hasselblad / Phase One)", "Complete set of archival contact proof sheets with exposure notes", "Perpetual editorial and institutional monograph publishing license", "Bespoke linen presentation folio case with embossed studio colophon"],
  isActive: true,
  sortOrder: 1,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}, {
  id: "pkg-editorial-portraiture",
  title: "Executive & Cultural Editorial Portraiture",
  serviceType: "EDITORIAL_PORTRAITURE",
  basePrice: 4200,
  priceDisplay: "$4,200 Investment",
  durationEstimate: "2–3 Weeks Studio & Chemical Developing",
  deliverables: ["6 Fiber-base archival silver gelatin exhibition prints (11×14 in)", "High-resolution digital master scans with tonal grading", "Full digital contact sheets containing all 120 film exposures", "Worldwide editorial, press, and institutional print release rights"],
  isActive: true,
  sortOrder: 2,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}, {
  id: "pkg-commercial-campaign",
  title: "Maison & Brand Commercial Campaign",
  serviceType: "COMMERCIAL_CAMPAIGN",
  basePrice: 12800,
  priceDisplay: "$12,800 Starting Base",
  durationEstimate: "3–5 Weeks Production & Master Proofing",
  deliverables: ["Comprehensive medium-format campaign visual suite (Digital + Analog)", "Archival gallery-grade print set (20×24 in) for brand archives", "Full global multi-channel commercial license including out-of-home", "On-set darkroom test prints and chemistry log documentation"],
  isActive: true,
  sortOrder: 3,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}, {
  id: "pkg-print-acquisition",
  title: "Archival Silver Gelatin Acquisition",
  serviceType: "PRINT_ACQUISITION",
  basePrice: 3100,
  priceDisplay: "$3,100 Per Edition Tier",
  durationEstimate: "10–14 Business Days Chemistry & Matting",
  deliverables: ["Numbered silver gelatin master print from Julian Vane's personal catalog", "Museum-grade cotton rag matting with acid-free backing board", "Signed and stamped Atelier Certificate of Authenticity", "Permanent institutional provenance registry entry in atelier archives"],
  isActive: true,
  sortOrder: 4,
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-01-01T00:00:00Z")
}];
const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  ARCHITECTURAL_MONOGRAPH: "Architectural Monograph",
  EDITORIAL_PORTRAITURE: "Editorial Portraiture",
  COMMERCIAL_CAMPAIGN: "Commercial Campaign",
  PRINT_ACQUISITION: "Print Acquisition"
};
const PACKAGE_HIGHLIGHTS: Record<string, string> = {
  ARCHITECTURAL_MONOGRAPH: "Flagship Studio Tier · Museum Acquisition Grade",
  EDITORIAL_PORTRAITURE: "120 Rollfilm & Hand-developed Selenium Chemistry",
  COMMERCIAL_CAMPAIGN: "Dual Medium-Format Analog & 100MP Scan Suite",
  PRINT_ACQUISITION: "Limited to 7 Certified Editions Worldwide"
};
export default function ServicePackageDirectory({
  packages,
  onSelectPackage
}: ServicePackageDirectoryProps) {
  const router = useRouter();
  const [filterType, setFilterType] = useState<string>("ALL");
  const resolvedPackages = packages && packages.length > 0 ? packages : DEFAULT_PACKAGES;
  const activePackages = resolvedPackages.filter(pkg => pkg.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
  const filteredPackages = filterType === "ALL" ? activePackages : activePackages.filter(p => p.serviceType === filterType);
  const featuredPackage = activePackages[0];
  const secondaryPackages = activePackages.slice(1);
  const handleBookPackage = (pkg: ServicePackageItem) => {
    onSelectPackage?.(pkg);
    CommissionBooking.navigateToPackage(router, {
      packageId: pkg.id
    });
  };
  return <section data-controller-name="Commission Packages Directory" id="packages-directory" className="py-16 sm:py-20 lg:py-24 border-b border-border" data-api-unique-id='servicepackagedirectory-rb06f3e47569d314c-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='servicepackagedirectory-rc0279730907e3a8c-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-api-unique-id='servicepackagedirectory-r71dec7dca955f4d2-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
          <div className="space-y-3 max-w-2xl" data-api-unique-id='servicepackagedirectory-re8ebe6253ef5a50f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
            <div className="flex items-center gap-2" data-api-unique-id='servicepackagedirectory-r2661fefad522fc62-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" data-api-unique-id='servicepackagedirectory-r94f44928a3d3b400-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium" data-api-unique-id='servicepackagedirectory-rbbbafefcaaa66b88-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                Standardized Commission Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight" data-api-unique-id='servicepackagedirectory-rc98088970791f40a-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              Commission Packages
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-api-unique-id='servicepackagedirectory-ra2fa5b3bdfe87846-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              Every package is grounded in Julian Vane’s uncompromised chemistry standards. Select an established tier to proceed directly with your package inquiry or retain bespoke specifications.
            </p>
          </div>

          {/* Quick filter chips */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto" data-api-unique-id='servicepackagedirectory-r175a519f9160e888-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
            <button type="button" onClick={() => setFilterType("ALL")} className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filterType === "ALL" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='servicepackagedirectory-ra3e90910226bdf34-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              All Packages ({activePackages.length})
            </button>
            <button type="button" onClick={() => setFilterType("ARCHITECTURAL_MONOGRAPH")} className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filterType === "ARCHITECTURAL_MONOGRAPH" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='servicepackagedirectory-r5b2794d15f9936f5-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              Architectural
            </button>
            <button type="button" onClick={() => setFilterType("EDITORIAL_PORTRAITURE")} className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filterType === "EDITORIAL_PORTRAITURE" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='servicepackagedirectory-reb393a4d3c4b9fd7-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              Portraiture
            </button>
            <button type="button" onClick={() => setFilterType("COMMERCIAL_CAMPAIGN")} className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filterType === "COMMERCIAL_CAMPAIGN" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='servicepackagedirectory-r5bc69dfeedce47b0-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              Commercial
            </button>
            <button type="button" onClick={() => setFilterType("PRINT_ACQUISITION")} className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filterType === "PRINT_ACQUISITION" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='servicepackagedirectory-rb43623baaa2b80ed-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              Acquisitions
            </button>
          </div>
        </div>

        {/* Magazine Collage Layout (When viewing ALL or featuring top tier) */}
        {filterType === "ALL" ? <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-api-unique-id='servicepackagedirectory-r93a6e193f8fc77b0-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
            {/* Featured Spotlight Tier (Left / Top: 7 cols) */}
            {featuredPackage && <article className="lg:col-span-7 flex flex-col rounded-2xl bg-card text-card-foreground border border-primary/20 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 relative justify-between" data-api-unique-id='servicepackagedirectory-r76580b31d26ea15f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                {/* Visual badge & Title section */}
                <div className="space-y-6" data-api-unique-id='servicepackagedirectory-rd177ce07e1b0213e-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                  <div className="flex flex-wrap items-center justify-between gap-3" data-api-unique-id='servicepackagedirectory-r01d9f936d26e3877-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground" data-api-unique-id='servicepackagedirectory-re0e9eec0b3c1d116-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      <Sparkles className="w-3.5 h-3.5" data-api-unique-id='servicepackagedirectory-rbcc2e17bc4dfe919-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' />
                      {PACKAGE_HIGHLIGHTS[featuredPackage.serviceType] || "Studio Flagship Tier"}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground" data-api-unique-id='servicepackagedirectory-r3c2d01a741a9f498-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      Tier 01 · {SERVICE_TYPE_LABELS[featuredPackage.serviceType]}
                    </span>
                  </div>

                  <div data-api-unique-id='servicepackagedirectory-r75f384b6d4c1a174-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-card-foreground" data-api-unique-id='servicepackagedirectory-r5d834eb82e0f673d-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      {featuredPackage.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-baseline gap-3" data-api-unique-id='servicepackagedirectory-rf3b91cb8e9889694-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      <span className="text-2xl sm:text-3xl font-display font-semibold text-primary" data-api-unique-id='servicepackagedirectory-rc540aa6f40f2f80d-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                        {featuredPackage.priceDisplay}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground" data-api-unique-id='servicepackagedirectory-r56ca1ae4e823147e-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                        Standard Commission Baseline
                      </span>
                    </div>
                  </div>

                  {/* Supporting visual of darkroom folio/medium-format print */}
                  <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-border" data-api-unique-id='servicepackagedirectory-rfb0e758c0b56468f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    <EditableImg propKey="package-monograph-spotlight" keywords="fine art archival book monograph medium format photography exhibition print" description="Large architectural monograph photographic portfolio linen bound with medium-format analog silver gelatin prints on wooden curator table" className="w-full h-full object-cover" data-api-unique-id='servicepackagedirectory-r242d3683c7c36077-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' />
                    <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md text-[11px] font-medium text-foreground flex items-center gap-1.5 border border-border" data-api-unique-id='servicepackagedirectory-r22517e15a57e4ee4-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" data-api-unique-id='servicepackagedirectory-r8b0f96daf59851fb-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' />
                      Museum-Grade Archival Linen Presentation
                    </div>
                  </div>

                  {/* Turnaround Estimate */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground border-y border-border py-3" data-api-unique-id='servicepackagedirectory-r2219bdead6b3b91a-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    <Clock className="w-4 h-4 text-primary shrink-0" data-api-unique-id='servicepackagedirectory-r4970dd7ae1cd911f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' />
                    <span data-api-unique-id='servicepackagedirectory-rb9cbcad5ddbce27b-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>Estimated Timeline: <strong className="font-medium text-foreground" data-api-unique-id='servicepackagedirectory-rf9befcb004108d2b-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>{featuredPackage.durationEstimate}</strong></span>
                  </div>

                  {/* Deliverables Scope */}
                  <div data-api-unique-id='servicepackagedirectory-r76525f26b517d647-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3" data-api-unique-id='servicepackagedirectory-rf146277576c0797a-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      Included Scope & Deliverables
                    </h4>
                    <ul className="space-y-2.5" data-api-unique-id='servicepackagedirectory-rb8a3bcd312f698ae-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                      {featuredPackage.deliverables.map((item, index) => <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-card-foreground leading-relaxed" data-api-unique-id='servicepackagedirectory-r4578c0c220c6348f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" data-api-unique-id='servicepackagedirectory-r0a2faa468d702f2b-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                          <span data-api-unique-id='servicepackagedirectory-re69b561ff580f537-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`featuredPackage.deliverables-${index}-$item`} data-api-map-var-name='item'>{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4" data-api-unique-id='servicepackagedirectory-rf47fb066da242c98-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                  <div className="text-xs text-muted-foreground" data-api-unique-id='servicepackagedirectory-rb7f654105b294b81-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    Includes initial 60-min curatorial consultation & physical contact proof viewing.
                  </div>
                  <button type="button" onClick={() => handleBookPackage(featuredPackage)} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors shrink-0 shadow-sm" data-api-unique-id='servicepackagedirectory-r4ea79040791e9e72-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
                    <span data-api-unique-id='servicepackagedirectory-r5993255054260a6f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>Commission This Tier</span>
                    <ArrowUpRight className="w-4 h-4" data-api-unique-id='servicepackagedirectory-r0235ce608febcfd7-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' />
                  </button>
                </div>
              </article>}

            {/* Secondary Packages Stack (Right: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6" data-api-unique-id='servicepackagedirectory-r6d35362bbd6f6d4a-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
              {secondaryPackages.map((pkg, index) => <article key={pkg.id} className="rounded-2xl bg-card text-card-foreground border border-border p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 transition-colors" data-api-unique-id='servicepackagedirectory-re24c899d1a88551c-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                  <div className="space-y-4" data-api-unique-id='servicepackagedirectory-r7963b733052b52ce-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <div className="flex items-center justify-between gap-2" data-api-unique-id='servicepackagedirectory-rff354f8e37c16c73-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      <span className="text-[11px] uppercase tracking-wider text-primary font-semibold" data-api-unique-id='servicepackagedirectory-r74401862b459eeb2-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                        Tier 0{index + 2} · {SERVICE_TYPE_LABELS[pkg.serviceType]}
                      </span>
                      {PACKAGE_HIGHLIGHTS[pkg.serviceType] && <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium" data-api-unique-id='servicepackagedirectory-r6582e1b32d1972ea-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                          {PACKAGE_HIGHLIGHTS[pkg.serviceType]}
                        </span>}
                    </div>

                    <div data-api-unique-id='servicepackagedirectory-r65d1550f6e708209-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      <h3 className="text-lg sm:text-xl font-display font-medium text-card-foreground" data-api-unique-id='servicepackagedirectory-rf24297c435984196-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`secondaryPackages-${index}-title`} data-api-map-var-name='pkg'>
                        {pkg.title}
                      </h3>
                      <div className="mt-1.5 flex items-baseline gap-2" data-api-unique-id='servicepackagedirectory-r2e2f0cba867fad7a-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                        <span className="text-lg sm:text-xl font-display font-semibold text-foreground" data-api-unique-id='servicepackagedirectory-r29805d9a7e4bf716-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`secondaryPackages-${index}-priceDisplay`} data-api-map-var-name='pkg'>
                          {pkg.priceDisplay}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground" data-api-unique-id='servicepackagedirectory-r20efceb5d2b90fbe-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='servicepackagedirectory-rd10307ecf4808ce7-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                      <span data-api-unique-id='servicepackagedirectory-rd57ca306abde034f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`secondaryPackages-${index}-durationEstimate`} data-api-map-var-name='pkg'>{pkg.durationEstimate}</span>
                    </div>

                    {/* Deliverables snippet */}
                    <div className="border-t border-border/70 pt-3" data-api-unique-id='servicepackagedirectory-r70092e79003f6707-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      <ul className="space-y-1.5" data-api-unique-id='servicepackagedirectory-r624ab68ac5c648dd-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                        {pkg.deliverables.slice(0, 3).map((del, index1) => <li key={index1} className="flex items-start gap-2 text-xs text-card-foreground/90 leading-tight" data-api-unique-id='servicepackagedirectory-ra8db60cabe9f91ae-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" data-api-unique-id='servicepackagedirectory-r6b49a52ecce81e9b-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                            <span className="line-clamp-1" data-api-unique-id='servicepackagedirectory-r24db3d25d58ccc95-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`secondaryPackages-${index}-pkg.deliverables-${index1}-$item`} data-api-map-var-name='del'>{del}</span>
                          </li>)}
                        {pkg.deliverables.length > 3 && <li className="text-[11px] text-muted-foreground italic pl-5" data-api-unique-id='servicepackagedirectory-rb44bc904f7a6c0eb-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                            + {pkg.deliverables.length - 3} additional archival deliverables
                          </li>}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-3" data-api-unique-id='servicepackagedirectory-rd2adea28da0dea5e-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <span className="text-xs text-muted-foreground" data-api-unique-id='servicepackagedirectory-r81dc6cf0ba0cf591-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      Role-neutral instant booking
                    </span>
                    <button type="button" onClick={() => handleBookPackage(pkg)} className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors shrink-0" data-api-unique-id='servicepackagedirectory-r3627422a3911c197-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      <span data-api-unique-id='servicepackagedirectory-r1aa18f4c3d4fbdb9-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>Book Package</span>
                      <ArrowUpRight className="w-3.5 h-3.5" data-api-unique-id='servicepackagedirectory-r20239db90fec2460-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                    </button>
                  </div>
                </article>)}
            </div>
          </div> : (/* Filtered Grid View */
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-api-unique-id='servicepackagedirectory-r878d47680114958c-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory'>
            {filteredPackages.map((pkg, index) => <article key={pkg.id} className="rounded-2xl bg-card text-card-foreground border border-border p-6 flex flex-col justify-between hover:border-primary/50 transition-colors" data-api-unique-id='servicepackagedirectory-rd65d0c0b2a41aa03-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                <div className="space-y-4" data-api-unique-id='servicepackagedirectory-r0ca03dde03ca9a12-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                  <div className="flex items-center justify-between gap-2" data-api-unique-id='servicepackagedirectory-rebc94cbf87279fda-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <span className="text-xs uppercase tracking-wider text-primary font-medium" data-api-unique-id='servicepackagedirectory-r877faaa40b1b1f21-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      {SERVICE_TYPE_LABELS[pkg.serviceType]}
                    </span>
                    {PACKAGE_HIGHLIGHTS[pkg.serviceType] && <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium" data-api-unique-id='servicepackagedirectory-r56a14338d29f5a54-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                        {PACKAGE_HIGHLIGHTS[pkg.serviceType]}
                      </span>}
                  </div>

                  <div data-api-unique-id='servicepackagedirectory-r5c17427dd4477e53-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <h3 className="text-xl font-display font-medium text-card-foreground" data-api-unique-id='servicepackagedirectory-r4f6efb9c6f631b88-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-title`} data-api-map-var-name='pkg'>
                      {pkg.title}
                    </h3>
                    <p className="mt-2 text-xl font-display font-semibold text-primary" data-api-unique-id='servicepackagedirectory-r8cb4d48fb7a0a3d2-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-priceDisplay`} data-api-map-var-name='pkg'>
                      {pkg.priceDisplay}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground border-y border-border py-2.5" data-api-unique-id='servicepackagedirectory-r6adb261e890329c4-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='servicepackagedirectory-r177b52a283bf4971-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                    <span data-api-unique-id='servicepackagedirectory-rc389f3618efd343b-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-durationEstimate`} data-api-map-var-name='pkg'>{pkg.durationEstimate}</span>
                  </div>

                  <div className="space-y-2" data-api-unique-id='servicepackagedirectory-r1238f5f98de69449-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold" data-api-unique-id='servicepackagedirectory-r27c8df28d3bcfa92-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      Deliverables
                    </p>
                    <ul className="space-y-1.5" data-api-unique-id='servicepackagedirectory-r7952f5ebbed2760f-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                      {pkg.deliverables.map((del, index1) => <li key={index1} className="flex items-start gap-2 text-xs text-card-foreground" data-api-unique-id='servicepackagedirectory-r9da60ea910828dc3-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" data-api-unique-id='servicepackagedirectory-rca9a3d088b92eb6c-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                          <span data-api-unique-id='servicepackagedirectory-r1b46c444a1bc4f44-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-pkg.deliverables-${index1}-$item`} data-api-map-var-name='del'>{del}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border" data-api-unique-id='servicepackagedirectory-r1ff68e7dd0c1bbce-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                  <button type="button" onClick={() => handleBookPackage(pkg)} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" data-api-unique-id='servicepackagedirectory-r65723c2a061aa486-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>
                    <span data-api-unique-id='servicepackagedirectory-r5982f953a024e114-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1'>Book Package</span>
                    <ArrowUpRight className="w-4 h-4" data-api-unique-id='servicepackagedirectory-rc56662ea45594648-s2839212152' data-api-unique-page-name='src/frontend/components/ServicesTestimonials/ServicePackageDirectory' data-api-in-loop='1' />
                  </button>
                </div>
              </article>)}
          </div>)}
      </div>
    </section>;
}