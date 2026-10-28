"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Clock, ExternalLink, ShieldCheck, MailCheck, FileText } from "lucide-react";
import { CommissionInquiryItem, InquiryStatus } from "@/frontend/types/CommissionBooking";
import { ClientPortal } from "@/frontend/route-params";
interface InquiryHistoryAsideProps {
  inquiries: CommissionInquiryItem[];
}
const STATUS_CONFIG: Record<InquiryStatus, {
  label: string;
  badgeClass: string;
  desc: string;
}> = {
  NEW: {
    label: "NEW",
    badgeClass: "bg-secondary text-secondary-foreground border border-border",
    desc: "Awaiting archival review"
  },
  IN_REVIEW: {
    label: "IN REVIEW",
    badgeClass: "bg-warning text-warning-foreground",
    desc: "Curator evaluating plate requirements"
  },
  REPLIED: {
    label: "REPLIED",
    badgeClass: "bg-success text-success-foreground",
    desc: "Proposal dispatched to portal"
  }
};
function formatInquiryDate(dateVal: Date | string | undefined | null): string {
  if (!dateVal) return "";
  if (dateVal instanceof Date) {
    return dateVal.toISOString().slice(0, 10);
  }
  if (typeof dateVal === "string") {
    if (dateVal.includes("T")) {
      return dateVal.slice(0, 10);
    }
    return dateVal;
  }
  return "";
}
export default function InquiryHistoryAside({
  inquiries
}: InquiryHistoryAsideProps) {
  const router = useRouter();
  const handleNavigateToPortal = () => {
    ClientPortal.navigateTo(router);
  };
  return <aside className="space-y-6" data-controller-name="Inquiry Portfolio Ledger" data-api-unique-id='inquiryhistoryaside-re43b1cf047b184f2-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
      {/* 48-72h Studio Dispatch Commitment Notice */}
      <div className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm" data-api-unique-id='inquiryhistoryaside-r3c54faef27b38ec7-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
        <div className="flex items-start gap-3" data-api-unique-id='inquiryhistoryaside-r7f2e9226c25bff95-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" data-api-unique-id='inquiryhistoryaside-r567e107aafee91df-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <Clock className="h-5 w-5" data-api-unique-id='inquiryhistoryaside-r2e0793672ea53705-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' />
          </div>
          <div className="min-w-0 flex-1 space-y-1" data-api-unique-id='inquiryhistoryaside-r9f43e5ad1c186b9f-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <h4 className="text-sm font-semibold tracking-tight" data-api-unique-id='inquiryhistoryaside-r053eca344a34af9d-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>Studio Response Protocol</h4>
            <p className="text-xs leading-relaxed text-muted-foreground" data-api-unique-id='inquiryhistoryaside-rd4c38cb1fc1d968d-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
              Formal consultation evaluations dispatch within 48–72 studio hours. Julian Vane Atelier reviews medium format production windows and darkroom chemistry schedules for each dossier.
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/80 pt-3 text-xs" data-api-unique-id='inquiryhistoryaside-r53157c7cf5817de3-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground" data-api-unique-id='inquiryhistoryaside-r99833e8caa5a4992-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <ShieldCheck className="h-3.5 w-3.5 text-primary" data-api-unique-id='inquiryhistoryaside-re1ea16768108f642-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' />
            Curatorial Confidentiality
          </span>
          <button type="button" onClick={handleNavigateToPortal} className="group inline-flex items-center gap-1 font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='inquiryhistoryaside-ra84e1b063ef7e96d-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <span data-api-unique-id='inquiryhistoryaside-r9920356d224036b2-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>Client Portal</span>
            <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" data-api-unique-id='inquiryhistoryaside-r017525b80825c243-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' />
          </button>
        </div>
      </div>

      {/* Historical Commission Inquiries Overview List */}
      <div className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm space-y-4" data-api-unique-id='inquiryhistoryaside-rb0761887038603a4-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
        <div className="flex items-center justify-between border-b border-border/80 pb-3" data-api-unique-id='inquiryhistoryaside-r730256230e79abd2-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
          <div data-api-unique-id='inquiryhistoryaside-rf6d67e5e97388511-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <h3 className="text-sm font-semibold tracking-tight" data-api-unique-id='inquiryhistoryaside-r8455bae8076769fc-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>Recent Commission Dispatches</h3>
            <p className="text-xs text-muted-foreground" data-api-unique-id='inquiryhistoryaside-r288a335abe254827-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>Past portfolio requests on file</p>
          </div>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground" data-api-unique-id='inquiryhistoryaside-r3cdccf8b6e1a3bf9-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            {inquiries.length} filed
          </span>
        </div>

        {inquiries.length === 0 ? <div className="py-8 text-center" data-api-unique-id='inquiryhistoryaside-rd974aa5da138c961-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <FileText className="mx-auto h-8 w-8 text-muted-foreground/60" data-api-unique-id='inquiryhistoryaside-r26e2f9072852a05e-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' />
            <p className="mt-2 text-xs text-muted-foreground" data-api-unique-id='inquiryhistoryaside-rbfe9ae1591b6b3c1-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>No prior commission inquiries submitted.</p>
          </div> : <div className="space-y-3" data-api-unique-id='inquiryhistoryaside-r8139b62f74f6344a-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            {inquiries.map((item, index) => {
          const statusMeta = STATUS_CONFIG[item.status] || STATUS_CONFIG.NEW;
          return <article key={item.id} className="rounded-lg border border-border/70 bg-background/50 p-3.5 transition-colors hover:border-border" data-api-unique-id='inquiryhistoryaside-rfb46fd6096878069-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                  <div className="flex items-center justify-between gap-2" data-api-unique-id='inquiryhistoryaside-rac317c2726b70acc-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                    <span className="font-mono text-[11px] font-medium text-muted-foreground" data-api-unique-id='inquiryhistoryaside-rdc3187f2971ef38a-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                      Ref #{item.id.slice(0, 8).toUpperCase()}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider ${statusMeta.badgeClass}`} data-api-unique-id='inquiryhistoryaside-rb7e29518e4853052-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                      {statusMeta.label}
                    </span>
                  </div>

                  <div className="mt-2" data-api-unique-id='inquiryhistoryaside-r9650c3c29f4738bf-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                    <p className="text-xs font-semibold capitalize text-foreground" data-api-unique-id='inquiryhistoryaside-ra401d70f409d7684-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                      {item.projectType.toLowerCase()} Commission
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground" data-api-unique-id='inquiryhistoryaside-rc145cc25deee0b8a-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-projectBrief`} data-api-map-var-name='item'>
                      {item.projectBrief}
                    </p>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center justify-between gap-y-1 border-t border-border/50 pt-2 text-[11px] text-muted-foreground" data-api-unique-id='inquiryhistoryaside-r8d5a435885604fb5-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                    <span data-api-unique-id='inquiryhistoryaside-r40969cfe07646398-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-targetTimeline`} data-api-map-var-name='item'>Target: {item.targetTimeline}</span>
                    <span className="font-mono" data-api-unique-id='inquiryhistoryaside-rf87d2f4f77c55bb6-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>{formatInquiryDate(item.createdAt)}</span>
                  </div>

                  {item.curatorReply && <div className="mt-2.5 rounded border border-primary/20 bg-primary/5 p-2 text-xs" data-api-unique-id='inquiryhistoryaside-r231a847258d6bed1-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                      <div className="flex items-center gap-1 font-medium text-primary" data-api-unique-id='inquiryhistoryaside-rb495bc4f26582c8f-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>
                        <MailCheck className="h-3.5 w-3.5" data-api-unique-id='inquiryhistoryaside-r0b4bbf3a7175b60f-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1' />
                        <span data-api-unique-id='inquiryhistoryaside-r5f51993caf0b0964-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1'>Curator Note</span>
                      </div>
                      <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2" data-api-unique-id='inquiryhistoryaside-r4afec27da4d4a96d-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-curatorReply`} data-api-map-var-name='item'>
                        {item.curatorReply}
                      </p>
                    </div>}
                </article>;
        })}
          </div>}

        <div className="pt-2" data-api-unique-id='inquiryhistoryaside-rf9ff635dc64589a9-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
          <button type="button" onClick={handleNavigateToPortal} className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary py-2 text-xs font-medium text-secondary-foreground transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='inquiryhistoryaside-r658f8d0943e5872d-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>
            <span data-api-unique-id='inquiryhistoryaside-ra4d7d16dd0d78069-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside'>Open Client Portal (F07)</span>
            <ExternalLink className="h-3.5 w-3.5" data-api-unique-id='inquiryhistoryaside-reb179fa537df77ed-s1848036764' data-api-unique-page-name='src/frontend/components/CommissionBooking/InquiryHistoryAside' />
          </button>
        </div>
      </div>
    </aside>;
}