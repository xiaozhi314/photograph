"use client";

import React from "react";
import { Sparkles, Layers, Award, MessageSquareQuote, Clock, ArrowDown } from "lucide-react";
interface OverviewBannerProps {
  activePackagesCount: number;
  totalExhibitionsCount: number;
  curatedTestimonialsCount: number;
  featuredTestimonialsCount: number;
  archiveTimestamp: string;
}
export default function OverviewBanner({
  activePackagesCount,
  totalExhibitionsCount,
  curatedTestimonialsCount,
  featuredTestimonialsCount,
  archiveTimestamp
}: OverviewBannerProps) {
  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return <header data-controller-name="Curatorial Overview Banner" className="w-full min-w-0 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm transition-colors" data-api-unique-id='overviewbanner-raefdf5044a456bfd-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
      <div className="flex min-w-0 flex-col gap-4" data-api-unique-id='overviewbanner-r9b3a91db9db1caf0-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
        {/* Title and Desk Identification */}
        <div className="flex min-w-0 flex-col gap-2" data-api-unique-id='overviewbanner-rec7b96006f84aed5-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
          <div className="flex min-w-0 flex-wrap items-center gap-2" data-api-unique-id='overviewbanner-r29478f9abf0f5bf0-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground" data-api-unique-id='overviewbanner-rebfa49958de9ad9a-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <Sparkles className="h-3 w-3" data-api-unique-id='overviewbanner-r4ba19b1292bb7e67-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
              Atelier Desk 04
            </span>
            <span className="inline-flex shrink-0 items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground" data-api-unique-id='overviewbanner-rca178dac150cda83-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              Julian Vane Curatorial Archive
            </span>
          </div>
          <div className="min-w-0" data-api-unique-id='overviewbanner-r0eec8c1d9e639d16-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <h1 className="text-xl font-bold tracking-tight text-card-foreground sm:text-2xl font-serif" data-api-unique-id='overviewbanner-rf0973a6170dec6e9-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              Studio Services & Accolades
            </h1>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm" data-api-unique-id='overviewbanner-r86a9417405ede988-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              Configure atelier biographical credentials, client commission tiers, institutional museum exhibitions, and client testimonials.
            </p>
          </div>
        </div>

        {/* Quick jump navigation triggers to desks */}
        <div className="flex min-w-0 flex-wrap items-center gap-2 border-t border-border pt-3" data-api-unique-id='overviewbanner-r1ed8954ca3c9454a-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
          <button type="button" onClick={() => scrollToSection("packages-desk")} className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='overviewbanner-rc4b3384c2e06c9be-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <ArrowDown className="h-3.5 w-3.5" data-api-unique-id='overviewbanner-r2f9e4e87de15293a-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            <span data-api-unique-id='overviewbanner-rd258195b7fa72acc-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>Commission Packages</span>
          </button>
          <button type="button" onClick={() => scrollToSection("exhibitions-desk")} className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='overviewbanner-ra6e3d694f6433c54-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <ArrowDown className="h-3.5 w-3.5" data-api-unique-id='overviewbanner-r91665b3cdbab8a1c-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            <span data-api-unique-id='overviewbanner-ra8b161a2e3191286-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>Exhibition Archives</span>
          </button>
          <button type="button" onClick={() => scrollToSection("testimonials-desk")} className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='overviewbanner-r20b346b5a67d7429-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <ArrowDown className="h-3.5 w-3.5" data-api-unique-id='overviewbanner-r3bbc5bba7d36450f-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            <span data-api-unique-id='overviewbanner-r913d4337a9befc4b-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>Client Endorsements</span>
          </button>
          <button type="button" onClick={() => scrollToSection("studio-bio-desk")} className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ml-auto" data-api-unique-id='overviewbanner-rc1caced1209fae14-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <ArrowDown className="h-3.5 w-3.5" data-api-unique-id='overviewbanner-r70ff4ffc03297c9b-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            <span data-api-unique-id='overviewbanner-r2911cf0806653278-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>Studio Bio</span>
          </button>
        </div>

        {/* 4 Compact Metric Tiles (L2/L3 responsive: 1 col, sm: 2 cols, xl: 4 cols) */}
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4" data-api-unique-id='overviewbanner-rd148e2063c48de44-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
          {/* Active Services */}
          <div className="flex min-w-0 flex-col gap-1 rounded-md border border-border bg-muted p-3 text-muted-foreground" data-api-unique-id='overviewbanner-r957a8735434d2e86-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='overviewbanner-rfb27d211c5252bf5-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='overviewbanner-re3556cd1d7487e15-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                Active Services
              </span>
              <Layers className="h-3.5 w-3.5 shrink-0 text-primary" data-api-unique-id='overviewbanner-rd80566d0eea7ba2c-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            </div>
            <div className="flex items-baseline gap-2 min-w-0" data-api-unique-id='overviewbanner-rb8a064bb30af4ebb-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="font-mono text-2xl font-bold text-card-foreground" data-api-unique-id='overviewbanner-r3cf601c6debb965c-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                {activePackagesCount}
              </span>
              <span className="text-xs text-muted-foreground" data-api-unique-id='overviewbanner-rf438a2e7420ff504-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>Tiers Bookable</span>
            </div>
          </div>

          {/* Total Institutional Exhibitions */}
          <div className="flex min-w-0 flex-col gap-1 rounded-md border border-border bg-muted p-3 text-muted-foreground" data-api-unique-id='overviewbanner-r57234bcb86cfbeed-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='overviewbanner-rda21f5799684dfc6-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='overviewbanner-r264a14bbeba99219-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                Exhibition Archives
              </span>
              <Award className="h-3.5 w-3.5 shrink-0 text-primary" data-api-unique-id='overviewbanner-re76ac057e44fe5ec-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            </div>
            <div className="flex items-baseline gap-2 min-w-0" data-api-unique-id='overviewbanner-r76587129e54473e7-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="font-mono text-2xl font-bold text-card-foreground" data-api-unique-id='overviewbanner-raca98c0236e4b84d-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                {totalExhibitionsCount}
              </span>
              <span className="text-xs text-muted-foreground" data-api-unique-id='overviewbanner-r5812cefc1244a952-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>Solo & Monographs</span>
            </div>
          </div>

          {/* Curated Client Endorsements */}
          <div className="flex min-w-0 flex-col gap-1 rounded-md border border-border bg-muted p-3 text-muted-foreground" data-api-unique-id='overviewbanner-rd40f66c3e18e509c-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='overviewbanner-re082ba6105f8aa78-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='overviewbanner-r9285247c09ef9ca9-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                Endorsements
              </span>
              <MessageSquareQuote className="h-3.5 w-3.5 shrink-0 text-primary" data-api-unique-id='overviewbanner-r902c7915907e8996-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            </div>
            <div className="flex items-baseline gap-2 min-w-0" data-api-unique-id='overviewbanner-rd66e31171cb4e64d-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="font-mono text-2xl font-bold text-card-foreground" data-api-unique-id='overviewbanner-ra9dabe3f1f8cdb0e-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                {curatedTestimonialsCount}
              </span>
              <span className="text-xs text-muted-foreground" data-api-unique-id='overviewbanner-r48ecc75aa8814207-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                ({featuredTestimonialsCount} Featured in Ribbon)
              </span>
            </div>
          </div>

          {/* Sync Time / Status */}
          <div className="flex min-w-0 flex-col gap-1 rounded-md border border-border bg-muted p-3 text-muted-foreground" data-api-unique-id='overviewbanner-rcb3101b3d8bea67d-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
            <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='overviewbanner-rcce6365c23e1e022-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='overviewbanner-rb4202e061e3714ca-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                Archive Synchronized
              </span>
              <Clock className="h-3.5 w-3.5 shrink-0 text-primary" data-api-unique-id='overviewbanner-r09697b3ab3ca6ea7-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner' />
            </div>
            <div className="flex items-baseline gap-2 min-w-0" data-api-unique-id='overviewbanner-r22473bed593b1b2d-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
              <span className="font-mono text-sm font-semibold text-card-foreground truncate" data-api-unique-id='overviewbanner-r618368ae2d9b7ea6-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                {archiveTimestamp}
              </span>
              <span className="inline-flex shrink-0 items-center rounded-full bg-success px-1.5 py-0.5 text-[10px] font-bold text-success-foreground" data-api-unique-id='overviewbanner-rfbed6b8ba847e0b0-s2231774316' data-api-unique-page-name='src/backend/components/StudioSettings/OverviewBanner'>
                VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>;
}