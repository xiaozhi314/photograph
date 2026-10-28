"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Mail, Building2, Phone, Plus, FileText, Clock, CheckCircle2 } from "lucide-react";
import type { ClientProfile } from "@/frontend/types/ClientPortal";
import { CommissionBooking } from "@/frontend/route-params";
interface CollectorHeaderProps {
  profile: ClientProfile;
  totalCount?: number;
  inReviewCount?: number;
  repliedCount?: number;
  metrics?: {
    total: number;
    inReview: number;
    replied: number;
  };
}
export default function CollectorHeader({
  profile,
  totalCount,
  inReviewCount,
  repliedCount,
  metrics
}: CollectorHeaderProps) {
  const router = useRouter();
  const total = totalCount ?? metrics?.total ?? 0;
  const inReview = inReviewCount ?? metrics?.inReview ?? 0;
  const replied = repliedCount ?? metrics?.replied ?? 0;
  const handleNavigateToCommission = () => {
    CommissionBooking.navigateTo(router);
  };
  return <header data-controller-name="Collector Profile & Engagement Metrics Bar" className="w-full bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm" data-api-unique-id='collectorheader-re97d4d7208deb90c-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6" data-api-unique-id='collectorheader-r15684c0ab91e5a9d-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
        {/* Left: Collector identity credentials */}
        <div className="flex items-start sm:items-center gap-4 min-w-0" data-api-unique-id='collectorheader-ra11e5ce0e44cbbe1-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
          <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden bg-secondary border border-border flex items-center justify-center text-primary font-medium" data-api-unique-id='collectorheader-r0ae574327dde59cf-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
            {profile.avatarUrl ?
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.avatarUrl} alt={profile.fullName} className="h-full w-full object-cover" data-api-unique-id='collectorheader-rb284f6e79fc08adc-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' /> : <span className="text-xl font-serif" data-api-unique-id='collectorheader-rbf958fce3145a317-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                {profile.fullName.slice(0, 1).toUpperCase()}
              </span>}
          </div>

          <div className="min-w-0 flex-1" data-api-unique-id='collectorheader-rca80521190a90215-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
            <div className="flex flex-wrap items-center gap-2" data-api-unique-id='collectorheader-r022c0cf5be73da85-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
              <h1 className="text-xl sm:text-2xl font-serif font-medium tracking-tight truncate" data-api-unique-id='collectorheader-rac8e974597123460-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                {profile.fullName}
              </h1>
              <span className="inline-flex shrink-0 items-center px-2 py-0.5 rounded-full text-xs font-mono bg-secondary text-secondary-foreground" data-api-unique-id='collectorheader-rf06f1925ca54029c-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                Client Archive
              </span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground" data-api-unique-id='collectorheader-raa5e663fc288b92c-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
              {profile.organization && <span className="inline-flex items-center gap-1 min-w-0" data-api-unique-id='collectorheader-r67c120f8d4624164-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                  <Building2 className="h-3.5 w-3.5 shrink-0" data-api-unique-id='collectorheader-r5fcb87637446ad03-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
                  <span className="truncate" data-api-unique-id='collectorheader-r85cfdea8e5514c16-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>{profile.organization}</span>
                </span>}
              <span className="inline-flex items-center gap-1 min-w-0" data-api-unique-id='collectorheader-r40963b1d7b6c598c-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                <Mail className="h-3.5 w-3.5 shrink-0" data-api-unique-id='collectorheader-r1b039d33dcfe302f-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
                <span className="truncate" data-api-unique-id='collectorheader-r0e5f2ae20749c69c-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>{profile.email}</span>
              </span>
              {profile.phone && <span className="inline-flex items-center gap-1 min-w-0" data-api-unique-id='collectorheader-r291d09bc437053e9-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                  <Phone className="h-3.5 w-3.5 shrink-0" data-api-unique-id='collectorheader-reec880d218fadda6-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
                  <span className="truncate" data-api-unique-id='collectorheader-r6814647339982f4a-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>{profile.phone}</span>
                </span>}
            </div>
          </div>
        </div>

        {/* Right: Metrics readout + CTA */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-5 pt-4 lg:pt-0 border-t lg:border-t-0 border-border" data-api-unique-id='collectorheader-rcbaf6b83e8710f0a-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-left" data-api-unique-id='collectorheader-rfde746d3fd1c855a-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
            <div className="min-w-0" data-api-unique-id='collectorheader-r18f1321f454f7b35-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground" data-api-unique-id='collectorheader-r1eb6113cb3331aa8-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                <FileText className="h-3 w-3 shrink-0" data-api-unique-id='collectorheader-rbe725d98bacdbf7f-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
                <span data-api-unique-id='collectorheader-ra66fc8a1367a03b5-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>Briefs</span>
              </div>
              <p className="mt-0.5 text-lg sm:text-xl font-mono font-medium" data-api-unique-id='collectorheader-red358e9f8c5e9b9e-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>{total}</p>
            </div>

            <div className="min-w-0" data-api-unique-id='collectorheader-reaa0ae1cde84b124-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground" data-api-unique-id='collectorheader-reb05a2a124287a15-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                <Clock className="h-3 w-3 shrink-0 text-warning" data-api-unique-id='collectorheader-r29f6e098e2beced0-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
                <span data-api-unique-id='collectorheader-rde4c08329a59498e-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>In Review</span>
              </div>
              <p className="mt-0.5 text-lg sm:text-xl font-mono font-medium" data-api-unique-id='collectorheader-r741cf2eaefa94c37-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>{inReview}</p>
            </div>

            <div className="min-w-0" data-api-unique-id='collectorheader-rf1b4621257349d35-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground" data-api-unique-id='collectorheader-ra62b1b7745aca441-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
                <CheckCircle2 className="h-3 w-3 shrink-0 text-success" data-api-unique-id='collectorheader-r40366bcb3634905b-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
                <span data-api-unique-id='collectorheader-r4d6429ce1dde9f1a-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>Dispatches</span>
              </div>
              <p className="mt-0.5 text-lg sm:text-xl font-mono font-medium" data-api-unique-id='collectorheader-re6791cf1b9188ae2-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>{replied}</p>
            </div>
          </div>

          <div className="shrink-0" data-api-unique-id='collectorheader-rd12e2a35ef72bdae-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
            <button type="button" onClick={handleNavigateToCommission} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='collectorheader-rc0635045360f6e9b-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>
              <Plus className="h-4 w-4" data-api-unique-id='collectorheader-r936f470701cfc43d-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader' />
              <span data-api-unique-id='collectorheader-r1a45af6f9803c88f-s3705754023' data-api-unique-page-name='src/frontend/components/ClientPortal/CollectorHeader'>Submit Another Commission Brief</span>
            </button>
          </div>
        </div>
      </div>
    </header>;
}