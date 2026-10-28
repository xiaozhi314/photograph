"use client";

import React from "react";
import { CommissionInquiryDTO, InquiryStatus, ProjectType } from "@/backend/types/InquiriesDispatch";
import { FileText, Building, Mail, MapPin, Calendar, DollarSign, PackageCheck, CheckCircle2, Clock, Sparkles } from "lucide-react";
interface DossierViewProps {
  inquiry: CommissionInquiryDTO | null;
  onAdvanceToReview?: (id: string) => void;
}
const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  EDITORIAL: "Editorial Monograph",
  PORTRAIT: "Archival Portraiture",
  COMMERCIAL: "Commercial & Campaign",
  ACQUISITION: "Print & Folio Acquisition"
};
const STATUS_CONFIG: Record<InquiryStatus, {
  label: string;
  bg: string;
  icon: React.ElementType;
}> = {
  NEW: {
    label: "Awaiting Curator Review",
    bg: "bg-warning text-warning-foreground",
    icon: Sparkles
  },
  IN_REVIEW: {
    label: "Active Consultation",
    bg: "bg-info text-info-foreground",
    icon: Clock
  },
  REPLIED: {
    label: "Dispatch Archived",
    bg: "bg-success text-success-foreground",
    icon: CheckCircle2
  }
};
export default function DossierView({
  inquiry,
  onAdvanceToReview
}: DossierViewProps) {
  if (!inquiry) {
    return <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center text-card-foreground" data-api-unique-id='dossierview-rc7535ede5ba5d3d9-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
        <FileText className="mb-3 h-10 w-10 text-muted-foreground" data-api-unique-id='dossierview-rcfa39cded5d25dff-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
        <h4 className="font-serif text-base font-medium" data-api-unique-id='dossierview-rba4f0857282c964d-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          No Commission Brief Selected
        </h4>
        <p className="mt-1 max-w-sm text-xs text-muted-foreground" data-api-unique-id='dossierview-r5c17bb7d5f94ac0d-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          Select an inquiry from the queue table on the left to inspect the
          client profile, project specifications, and package guidance.
        </p>
      </div>;
  }
  const statusMeta = STATUS_CONFIG[inquiry.status];
  const StatusIcon = statusMeta.icon;
  return <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 text-card-foreground" data-api-unique-id='dossierview-rbf3d1a22255dcbcb-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
      {/* Dossier Header */}
      <div className="flex flex-col gap-2 border-b border-border pb-4" data-api-unique-id='dossierview-r0e8faba0670678dc-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2" data-api-unique-id='dossierview-rf1bf445b0a4705a4-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <div className="flex min-w-0 items-center gap-2" data-api-unique-id='dossierview-r1c54bd82a921a6ce-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground" data-api-unique-id='dossierview-r997508ae37fb23f6-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              Brief Dossier Ref:
            </span>
            <span className="font-mono text-xs font-semibold text-primary" data-api-unique-id='dossierview-r05870cd922583b48-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              #{inquiry.id.slice(-8).toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2" data-api-unique-id='dossierview-r8fea5c67b3e1703c-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 ${statusMeta.bg}`} data-api-unique-id='dossierview-r4c7b61d1c4c3b11d-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              <StatusIcon className="h-3 w-3" data-api-unique-id='dossierview-r9d1b4a9a969e0f43-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
              {statusMeta.label}
            </span>

            {inquiry.status === "NEW" && onAdvanceToReview && <button type="button" onClick={() => onAdvanceToReview(inquiry.id)} className="inline-flex items-center gap-1 rounded bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='dossierview-r0eac01b783caec85-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
                <Clock className="h-3 w-3" data-api-unique-id='dossierview-r0e3cdd03e8dfaf74-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
                Mark In Review
              </button>}
          </div>
        </div>

        <div data-api-unique-id='dossierview-r5146ff315c5ebac2-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground" data-api-unique-id='dossierview-r1106ead83308831a-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            {inquiry.clientName}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground" data-api-unique-id='dossierview-r012a5ee87dfcf178-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            {inquiry.organization && <span className="flex items-center gap-1" data-api-unique-id='dossierview-r72f4e07b5e9c26d1-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
                <Building className="h-3.5 w-3.5 shrink-0" data-api-unique-id='dossierview-r0327d65e3ffee311-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
                {inquiry.organization}
              </span>}
            <span className="flex items-center gap-1" data-api-unique-id='dossierview-rb402cef010c83743-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              <Mail className="h-3.5 w-3.5 shrink-0" data-api-unique-id='dossierview-rc547677bbe78917f-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
              <span className="break-all" data-api-unique-id='dossierview-rf864b83c14971469-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>{inquiry.clientEmail}</span>
            </span>
            <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground" data-api-unique-id='dossierview-r40853e749e9c7249-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              {PROJECT_TYPE_LABELS[inquiry.projectType]}
            </span>
          </div>
        </div>
      </div>

      {/* Logistics & Scope Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3" data-api-unique-id='dossierview-r15975d7139700937-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
        <div className="rounded-md border border-border bg-muted p-2.5 text-muted-foreground" data-api-unique-id='dossierview-rec79decc257340b0-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider" data-api-unique-id='dossierview-r3ef04e246358d827-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" data-api-unique-id='dossierview-r7833c0872e008a41-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
            Location
          </div>
          <div className="mt-1 text-xs font-semibold text-foreground truncate" data-api-unique-id='dossierview-rbe80bfa99c667a3f-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            {inquiry.location || "Location Flexible / Studio"}
          </div>
        </div>

        <div className="rounded-md border border-border bg-muted p-2.5 text-muted-foreground" data-api-unique-id='dossierview-r691f40da9b986c21-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider" data-api-unique-id='dossierview-r66904a4f5376633c-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <Calendar className="h-3.5 w-3.5 text-primary shrink-0" data-api-unique-id='dossierview-r63370a4c675433c0-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
            Target Timeline
          </div>
          <div className="mt-1 text-xs font-semibold text-foreground truncate" data-api-unique-id='dossierview-r3ab3aa310a968022-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            {inquiry.targetTimeline}
          </div>
        </div>

        <div className="rounded-md border border-border bg-muted p-2.5 text-muted-foreground" data-api-unique-id='dossierview-rcf11f31ca3ca73c6-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider" data-api-unique-id='dossierview-r618e21b852347e3c-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <DollarSign className="h-3.5 w-3.5 text-primary shrink-0" data-api-unique-id='dossierview-r6b10dfd8fe0d397f-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
            Budget Tier
          </div>
          <div className="mt-1 text-xs font-semibold text-foreground truncate" data-api-unique-id='dossierview-r5e8b3a71c2dff1db-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            {inquiry.budgetTier}
          </div>
        </div>
      </div>

      {/* Project Brief Section */}
      <div className="flex flex-col gap-1.5" data-api-unique-id='dossierview-r9233847a5301c9be-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='dossierview-rb8b888e18d17246b-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          Project Specification & Curatorial Brief
        </span>
        <div className="rounded-md border border-border bg-background p-3 text-xs leading-relaxed text-foreground whitespace-pre-line" data-api-unique-id='dossierview-r14760cb2bb443713-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          {inquiry.projectBrief}
        </div>
      </div>

      {/* Additional Client Message if present */}
      {inquiry.clientMessage && <div className="flex flex-col gap-1.5" data-api-unique-id='dossierview-r3b71d0dc6cee7d6d-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='dossierview-r265ed9c3646d2179-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            Client Logistics Notes
          </span>
          <div className="rounded-md border border-border bg-muted p-3 text-xs italic leading-relaxed text-muted-foreground" data-api-unique-id='dossierview-rf8ec32d50a99b696-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            &ldquo;{inquiry.clientMessage}&rdquo;
          </div>
        </div>}

      {/* Associated Studio Package Reference */}
      <div className="rounded-md border border-primary/20 bg-primary/10 p-3.5 text-foreground" data-api-unique-id='dossierview-r6f0f9b1a3fc1a6ef-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
        <div className="flex items-center justify-between gap-2 border-b border-primary/10 pb-2" data-api-unique-id='dossierview-r3860dc1f6d242dc4-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <div className="flex items-center gap-2" data-api-unique-id='dossierview-re031616e4ad185b2-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <PackageCheck className="h-4 w-4 text-primary shrink-0" data-api-unique-id='dossierview-r93de38b4b70a4cce-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
            <span className="text-xs font-semibold text-primary" data-api-unique-id='dossierview-r7b12a5f4809999f9-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              Associated Service Package:
            </span>
            <span className="text-xs font-bold text-foreground" data-api-unique-id='dossierview-r2443175ea9015d32-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              {inquiry.servicePackage ? inquiry.servicePackage.title : "Custom Open Curatorial Brief"}
            </span>
          </div>

          {inquiry.servicePackage && <span className="font-mono text-xs font-bold text-primary" data-api-unique-id='dossierview-ra3d29402691d2e90-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              {inquiry.servicePackage.priceDisplay}
            </span>}
        </div>

        {inquiry.servicePackage ? <div className="mt-2.5 flex flex-col gap-1.5 text-xs" data-api-unique-id='dossierview-re2635c8ee3c84f60-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            <div className="text-[11px] text-muted-foreground" data-api-unique-id='dossierview-r895bac74b4c2ba7c-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              Estimated Duration: {inquiry.servicePackage.durationEstimate}
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1" data-api-unique-id='dossierview-r19aa2e5066c0fd23-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
              {inquiry.servicePackage.deliverables.map((item, index) => <span key={index} className="rounded border border-border bg-card px-2 py-0.5 text-[11px] text-card-foreground" data-api-unique-id='dossierview-rd3e481478db64e07-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' data-api-in-loop='1' data-api-bind-info={`inquiry.servicePackage.deliverables-${index}-$item`} data-api-map-var-name='item'>
                  {item}
                </span>)}
            </div>
          </div> : <p className="mt-2 text-xs text-muted-foreground" data-api-unique-id='dossierview-re0b98ada0d58bfcb-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            No fixed package was selected by the client. Bespoke pricing and
            bespoke equipment manifest to be calculated by curator in the
            workbench below.
          </p>}
      </div>

      {/* Archival Dispatch Banner if REPLIED */}
      {inquiry.status === "REPLIED" && inquiry.repliedAt && <div className="flex items-center gap-2 rounded border border-success/30 bg-success/10 px-3 py-2 text-xs text-foreground" data-api-unique-id='dossierview-rf18cccccf291938b-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
          <CheckCircle2 className="h-4 w-4 text-success shrink-0" data-api-unique-id='dossierview-r5d4c7eddf33bd0bf-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView' />
          <span data-api-unique-id='dossierview-r1d2a961d1ab35ab8-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
            Dispatch signed and issued on{" "}
            <strong className="font-mono" data-api-unique-id='dossierview-rad22e4a1d15c5a15-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>{inquiry.repliedAt}</strong>
            {inquiry.repliedByName && <>
                {" "}
                by curator{" "}
                <strong className="font-medium" data-api-unique-id='dossierview-rb1cb3cdfd647fe92-s280892252' data-api-unique-page-name='src/backend/components/InquiriesDispatch/DossierView'>
                  {inquiry.repliedByName}
                </strong>
              </>}
            . Dossier is locked against further editing.
          </span>
        </div>}
    </div>;
}