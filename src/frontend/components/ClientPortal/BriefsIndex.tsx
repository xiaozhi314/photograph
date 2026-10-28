"use client";

import React from "react";
import { CommissionInquiryItem, ProjectType, BriefStatus } from "@/frontend/types/ClientPortal";
import { Search, MapPin, Calendar, Clock, CheckCircle2, FolderGit2 } from "lucide-react";
interface BriefsIndexProps {
  briefs: CommissionInquiryItem[];
  selectedBriefId?: string | null;
  selectedId?: string | null;
  onSelectBrief: (id: string) => void;
  typeFilter: string;
  onTypeFilterChange: (type: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
}
const PROJECT_TYPE_OPTIONS: {
  label: string;
  value: string;
}[] = [{
  label: "All Projects",
  value: "ALL"
}, {
  label: "Editorial",
  value: "EDITORIAL"
}, {
  label: "Portrait",
  value: "PORTRAIT"
}, {
  label: "Commercial",
  value: "COMMERCIAL"
}, {
  label: "Acquisition",
  value: "ACQUISITION"
}];
const STATUS_OPTIONS: {
  label: string;
  value: string;
}[] = [{
  label: "All Status",
  value: "ALL"
}, {
  label: "New Docket",
  value: "NEW"
}, {
  label: "In Review",
  value: "IN_REVIEW"
}, {
  label: "Dispatched",
  value: "REPLIED"
}];
export default function BriefsIndex({
  briefs = [],
  selectedBriefId,
  selectedId,
  onSelectBrief,
  typeFilter,
  onTypeFilterChange,
  statusFilter,
  onStatusFilterChange
}: BriefsIndexProps) {
  const activeSelectedId = selectedBriefId ?? selectedId ?? null;
  const filteredBriefs = briefs.filter(item => {
    const matchesType = typeFilter === "ALL" || item.projectType === typeFilter;
    const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
    return matchesType && matchesStatus;
  });
  const getStatusBadge = (status: BriefStatus) => {
    switch (status) {
      case "NEW":
        return <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary whitespace-nowrap" data-api-unique-id='briefsindex-r1230dc9bccd9391c-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" data-api-unique-id='briefsindex-r2592d3f484f2def9-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' />
            New Docket
          </span>;
      case "IN_REVIEW":
        return <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-0.5 text-xs font-medium text-warning whitespace-nowrap" data-api-unique-id='briefsindex-rd29bf0578937f5be-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            <Clock className="h-3 w-3" data-api-unique-id='briefsindex-rd87bd5d5c26b5472-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' />
            In Review
          </span>;
      case "REPLIED":
        return <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success whitespace-nowrap" data-api-unique-id='briefsindex-rd10a633531e150f8-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            <CheckCircle2 className="h-3 w-3" data-api-unique-id='briefsindex-rb778ed11a5c55703-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' />
            Dispatched
          </span>;
      default:
        return null;
    }
  };
  const getProjectTypeLabel = (type: ProjectType) => {
    switch (type) {
      case "EDITORIAL":
        return "Editorial Assignment";
      case "PORTRAIT":
        return "Fine Art Portraiture";
      case "COMMERCIAL":
        return "Commercial Campaign";
      case "ACQUISITION":
        return "Monograph & Print";
      default:
        return type;
    }
  };
  return <div data-controller-name="Commission Inquiries Index" className="flex h-full min-h-0 flex-col rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm" data-api-unique-id='briefsindex-rf96d9b07139a61df-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
      {/* Top Filter and Controls */}
      <div className="space-y-3.5 border-b border-border/80 pb-4" data-api-unique-id='briefsindex-rd1976f308b3426e4-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
        <div className="flex items-center justify-between" data-api-unique-id='briefsindex-r63566aa31fa6205d-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
          <div className="flex items-center gap-2" data-api-unique-id='briefsindex-r8ff669e2efe5421d-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            <FolderGit2 className="h-4 w-4 text-primary" data-api-unique-id='briefsindex-r6c093d3ba8f8dfa1-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' />
            <h2 className="text-sm font-semibold tracking-wide text-card-foreground" data-api-unique-id='briefsindex-re5c3c756f759b55d-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
              Commission Registry
            </h2>
          </div>
          <span className="text-xs font-medium text-muted-foreground" data-api-unique-id='briefsindex-r566b93663a98d5e4-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            {filteredBriefs.length} of {briefs.length} records
          </span>
        </div>

        {/* Project Type Filter Chips */}
        <div className="flex flex-wrap gap-1.5" data-api-unique-id='briefsindex-r9998658ab359ddc1-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
          {PROJECT_TYPE_OPTIONS.map((opt, index) => {
          const isSelected = typeFilter === opt.value;
          return <button key={opt.value} type="button" onClick={() => onTypeFilterChange(opt.value)} className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "bg-primary text-primary-foreground" : "border border-border/70 bg-muted/60 text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='briefsindex-raa2c87e3b3f862da-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' data-api-bind-info={`PROJECT_TYPE_OPTIONS-${index}-label`} data-api-map-var-name='opt'>
                {opt.label}
              </button>;
        })}
        </div>

        {/* Status Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1" data-api-unique-id='briefsindex-rbc58754602703814-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
          <span className="mr-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground" data-api-unique-id='briefsindex-rfc80e025ef1aaf87-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            Status:
          </span>
          {STATUS_OPTIONS.map((opt, index) => {
          const isSelected = statusFilter === opt.value;
          return <button key={opt.value} type="button" onClick={() => onStatusFilterChange(opt.value)} className={`rounded px-2 py-0.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "bg-secondary text-secondary-foreground font-semibold border border-border" : "text-muted-foreground hover:text-card-foreground"}`} data-api-unique-id='briefsindex-rcff4498187283e5c-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' data-api-bind-info={`STATUS_OPTIONS-${index}-label`} data-api-map-var-name='opt'>
                {opt.label}
              </button>;
        })}
        </div>
      </div>

      {/* Scrollable Records List */}
      <div className="mt-3 flex-1 min-h-0 space-y-2.5 overflow-y-auto pr-1" data-api-unique-id='briefsindex-r35555b4b0095b811-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
        {filteredBriefs.length === 0 ? <div className="flex h-48 flex-col items-center justify-center rounded-lg border border-dashed border-border/70 p-6 text-center text-muted-foreground" data-api-unique-id='briefsindex-re7900f3d636a7cf5-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
            <Search className="mb-2 h-6 w-6 text-muted-foreground/60" data-api-unique-id='briefsindex-rabde74bb3170cb68-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' />
            <p className="text-sm font-medium" data-api-unique-id='briefsindex-r556eda7aa3564e6d-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>No commission briefs match criteria</p>
            <p className="mt-1 text-xs text-muted-foreground/80" data-api-unique-id='briefsindex-r56e92f9609d4fdd3-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex'>
              Clear filters to view all submitted archival requests.
            </p>
          </div> : filteredBriefs.map((brief, index) => {
        const isSelected = brief.id === activeSelectedId;
        return <div key={brief.id} role="button" tabIndex={0} onClick={() => onSelectBrief(brief.id)} onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelectBrief(brief.id);
          }
        }} className={`group relative flex cursor-pointer flex-col gap-2 rounded-lg border p-3.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "border-primary bg-primary/5 shadow-sm" : "border-border/80 bg-background/50 hover:border-primary/50 hover:bg-muted/40"}`} data-api-unique-id='briefsindex-r48807e98c48ed16d-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                {/* Header row: Status + Project Type */}
                <div className="flex items-center justify-between gap-2" data-api-unique-id='briefsindex-r2e14d09c65c8831c-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                  <span className="text-xs font-semibold text-card-foreground" data-api-unique-id='briefsindex-rbb7c7f21cf34ae10-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                    {getProjectTypeLabel(brief.projectType)}
                  </span>
                  {getStatusBadge(brief.status)}
                </div>

                {/* Service Package Title or Bespoke Tag */}
                <div className="text-sm font-medium text-primary" data-api-unique-id='briefsindex-rde4f4fca7d7c2bb8-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                  {brief.servicePackage?.title || "Bespoke Open Commission"}
                </div>

                {/* Brief synopsis snippet */}
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground" data-api-unique-id='briefsindex-r61ed7ce7a437d354-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' data-api-bind-info={`filteredBriefs-${index}-projectBrief`} data-api-map-var-name='brief'>
                  {brief.projectBrief}
                </p>

                {/* Metadata strip: Budget, Timeline, Location */}
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground" data-api-unique-id='briefsindex-recb3a1cd9f7aaf63-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                  <div className="flex items-center gap-1" data-api-unique-id='briefsindex-r1004f4bfa262096a-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                    <span className="font-semibold text-card-foreground" data-api-unique-id='briefsindex-rd4d84f0c1e59e0f7-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>Tier:</span>
                    <span data-api-unique-id='briefsindex-reac0ff2a1a259f21-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' data-api-bind-info={`filteredBriefs-${index}-budgetTier`} data-api-map-var-name='brief'>{brief.budgetTier}</span>
                  </div>
                  {brief.location && <div className="flex items-center gap-1" data-api-unique-id='briefsindex-r7086e8ed67ce734b-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                      <MapPin className="h-3 w-3 shrink-0" data-api-unique-id='briefsindex-rb0e58449b38e5f45-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' />
                      <span className="truncate max-w-[120px]" data-api-unique-id='briefsindex-rd4da2089257edb2d-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' data-api-bind-info={`filteredBriefs-${index}-location`} data-api-map-var-name='brief'>{brief.location}</span>
                    </div>}
                  <div className="flex items-center gap-1" data-api-unique-id='briefsindex-ra1aeb95523737a96-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1'>
                    <Calendar className="h-3 w-3 shrink-0" data-api-unique-id='briefsindex-r9750b009c38963df-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' />
                    <span data-api-unique-id='briefsindex-r92cc6cd9e3d38472-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' data-api-bind-info={`filteredBriefs-${index}-targetTimeline`} data-api-map-var-name='brief'>{brief.targetTimeline}</span>
                  </div>
                </div>

                {/* Active indicator bar */}
                {isSelected && <div className="absolute inset-y-0 left-0 w-1 rounded-l-lg bg-primary" data-api-unique-id='briefsindex-r0be79bd9a8e36792-s3341914713' data-api-unique-page-name='src/frontend/components/ClientPortal/BriefsIndex' data-api-in-loop='1' />}
              </div>;
      })}
      </div>
    </div>;
}