"use client";

import React from "react";
import { Search, SlidersHorizontal, MapPin, Mail } from "lucide-react";
import { CommissionInquiryDTO, InquiryStatus, ProjectType } from "@/backend/types/InquiriesDispatch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
interface InquiriesTableProps {
  inquiries: CommissionInquiryDTO[];
  selectedId: string | null;
  onSelectInquiry: (inquiry: CommissionInquiryDTO) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  projectTypeFilter: string;
  onProjectTypeFilterChange: (type: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}
const PROJECT_TYPE_BADGES: Record<ProjectType, {
  label: string;
  class: string;
}> = {
  EDITORIAL: {
    label: "EDITORIAL",
    class: "bg-info/10 text-info border border-info/20"
  },
  PORTRAIT: {
    label: "PORTRAIT",
    class: "bg-primary/10 text-primary border border-primary/20"
  },
  COMMERCIAL: {
    label: "COMMERCIAL",
    class: "bg-accent/10 text-accent border border-accent/20"
  },
  ACQUISITION: {
    label: "ACQUISITION",
    class: "bg-warning/10 text-warning border border-warning/20"
  }
};
const STATUS_BADGES: Record<InquiryStatus, {
  label: string;
  class: string;
}> = {
  NEW: {
    label: "NEW",
    class: "bg-destructive text-destructive-foreground"
  },
  IN_REVIEW: {
    label: "IN REVIEW",
    class: "bg-warning text-warning-foreground"
  },
  REPLIED: {
    label: "DISPATCHED",
    class: "bg-success text-success-foreground"
  }
};
export default function InquiriesTable({
  inquiries,
  selectedId,
  onSelectInquiry,
  statusFilter,
  onStatusFilterChange,
  projectTypeFilter,
  onProjectTypeFilterChange,
  searchQuery,
  onSearchQueryChange
}: InquiriesTableProps) {
  return <div data-controller-name="Inquiries Queue Table" className="flex flex-col h-full min-h-0 bg-card text-card-foreground border border-border rounded-lg shadow-sm overflow-hidden" data-api-unique-id='inquiriestable-rb0806297b7271bbc-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
      {/* Filtering and Search Header */}
      <div className="p-3.5 border-b border-border bg-card flex flex-col gap-2.5 shrink-0" data-api-unique-id='inquiriestable-rf4c50e2a4da1b416-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
        <div className="flex items-center justify-between gap-2" data-api-unique-id='inquiriestable-r8a230c715b4775a7-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
          <div className="flex items-center gap-2" data-api-unique-id='inquiriestable-rcb691d370dedc5c8-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
            <span className="text-xs font-semibold tracking-wide uppercase text-foreground" data-api-unique-id='inquiriestable-ra942a29821d18a36-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
              Inbound Pipeline
            </span>
            <span className="px-1.5 py-0.5 text-[11px] font-mono rounded bg-secondary text-secondary-foreground font-medium" data-api-unique-id='inquiriestable-rb30b4650203c9a6a-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
              {inquiries.length} {inquiries.length === 1 ? "Record" : "Records"}
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground font-mono" data-api-unique-id='inquiriestable-r5295134477cd23d1-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
            Chronological Dispatch
          </span>
        </div>

        {/* Search Input */}
        <div className="relative w-full" data-api-unique-id='inquiriestable-ra073abddf510fe2e-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" data-api-unique-id='inquiriestable-rec1ebbd6c8ac029f-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' />
          <Input value={searchQuery} onChange={e => onSearchQueryChange(e.target.value)} placeholder="Search client, email, org, or brief..." className="h-8 pl-8 text-xs bg-background border-border text-foreground placeholder:text-muted-foreground w-full rounded-md focus-visible:ring-1 focus-visible:ring-ring" data-api-unique-id='inquiriestable-rd69c43173430b210-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' />
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-2 gap-2" data-api-unique-id='inquiriestable-rcd9beb3fd2547507-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
          <div className="flex flex-col gap-1" data-api-unique-id='inquiriestable-r66bfee312dced638-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase" data-api-unique-id='inquiriestable-rca07aab20883e674-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
              Queue Status
            </span>
            <Select value={statusFilter} onValueChange={onStatusFilterChange} data-api-unique-id='inquiriestable-r969aae39d54e55a6-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
              <SelectTrigger size="sm" className="h-7 text-xs bg-background border-border text-foreground w-full" data-api-unique-id='inquiriestable-r640ff567563c362e-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
                <SelectValue placeholder="All Statuses" data-api-unique-id='inquiriestable-r3021b58600ae86c1-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' />
              </SelectTrigger>
              <SelectContent data-api-unique-id='inquiriestable-r7cb661a288e7b9ad-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
                <SelectItem value="ALL" data-api-unique-id='inquiriestable-r8bbd1887e3927395-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>All Statuses</SelectItem>
                <SelectItem value="NEW" data-api-unique-id='inquiriestable-r1dac39c81632c3c1-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>New (Unreviewed)</SelectItem>
                <SelectItem value="IN_REVIEW" data-api-unique-id='inquiriestable-rfc337d4a58b58ac0-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>In Review (Active)</SelectItem>
                <SelectItem value="REPLIED" data-api-unique-id='inquiriestable-rbd3d3f4717a1ffe6-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>Replied (Dispatched)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1" data-api-unique-id='inquiriestable-reb845bd140b20245-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase" data-api-unique-id='inquiriestable-rab352b4343dd4824-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
              Project Genre
            </span>
            <Select value={projectTypeFilter} onValueChange={onProjectTypeFilterChange} data-api-unique-id='inquiriestable-ra021aea18fad44cb-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
              <SelectTrigger size="sm" className="h-7 text-xs bg-background border-border text-foreground w-full" data-api-unique-id='inquiriestable-rbe75709324e4fe22-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
                <SelectValue placeholder="All Genres" data-api-unique-id='inquiriestable-r203499c79308db23-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' />
              </SelectTrigger>
              <SelectContent data-api-unique-id='inquiriestable-r33300f4f2114ecab-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
                <SelectItem value="ALL" data-api-unique-id='inquiriestable-r661f00ffecc677e9-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>All Genres</SelectItem>
                <SelectItem value="EDITORIAL" data-api-unique-id='inquiriestable-r9005150bbf4de292-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>Editorial</SelectItem>
                <SelectItem value="PORTRAIT" data-api-unique-id='inquiriestable-ref387f0c88ccde96-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>Portrait</SelectItem>
                <SelectItem value="COMMERCIAL" data-api-unique-id='inquiriestable-r92f6d07196f39136-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>Commercial</SelectItem>
                <SelectItem value="ACQUISITION" data-api-unique-id='inquiriestable-r361c4326512eeee2-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>Acquisition</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Interactive Table Container with Local Horizontal Scroll Containment */}
      <div className="flex-1 min-h-0 overflow-y-auto" data-api-unique-id='inquiriestable-r494f0d6af3544208-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
        {inquiries.length === 0 ? <div className="p-8 text-center flex flex-col items-center justify-center h-48 gap-2" data-api-unique-id='inquiriestable-r2ec6aa95814e0049-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
            <SlidersHorizontal className="h-6 w-6 text-muted-foreground opacity-50" data-api-unique-id='inquiriestable-r9c0502278a0453f4-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' />
            <p className="text-xs text-muted-foreground" data-api-unique-id='inquiriestable-rc9869ae796a97bbe-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>No commission inquiries match current filters.</p>
          </div> : <div className="divide-y divide-border" data-api-unique-id='inquiriestable-r16e8aeab356fc37d-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable'>
            {inquiries.map((inquiry, index) => {
          const isSelected = inquiry.id === selectedId;
          const statusCfg = STATUS_BADGES[inquiry.status] || {
            label: inquiry.status,
            class: "bg-muted text-muted-foreground"
          };
          const projectCfg = PROJECT_TYPE_BADGES[inquiry.projectType] || {
            label: inquiry.projectType,
            class: "bg-muted text-muted-foreground"
          };
          const createdDate = typeof inquiry.createdAt === "string" ? new Date(inquiry.createdAt) : inquiry.createdAt;
          return <div key={inquiry.id} onClick={() => onSelectInquiry(inquiry)} className={`p-3 cursor-pointer transition-colors flex flex-col gap-2 border-l-2 text-left ${isSelected ? "bg-secondary/40 border-l-primary" : "border-l-transparent hover:bg-muted/40"}`} data-api-unique-id='inquiriestable-ra0fec320cd54315e-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                  {/* Top Line: Client & Badges */}
                  <div className="flex items-start justify-between gap-2 min-w-0" data-api-unique-id='inquiriestable-r29beeeb083c99b58-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                    <div className="min-w-0 flex-1" data-api-unique-id='inquiriestable-rfbf68c4bf5fb5b36-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                      <div className="flex items-center gap-1.5 min-w-0" data-api-unique-id='inquiriestable-r4e832b84c1d4f68a-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                        <span className="text-xs font-semibold text-foreground truncate" data-api-unique-id='inquiriestable-r1eb07f4112ccde05-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-clientName`} data-api-map-var-name='inquiry'>
                          {inquiry.clientName}
                        </span>
                        {inquiry.organization && <span className="text-[11px] text-muted-foreground truncate hidden sm:inline" data-api-unique-id='inquiriestable-r15d478b1996e8c91-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-organization`} data-api-map-var-name='inquiry'>
                            · {inquiry.organization}
                          </span>}
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate flex items-center gap-1" data-api-unique-id='inquiriestable-r8b8fe6314b7f3549-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                        <Mail className="h-2.5 w-2.5 shrink-0" data-api-unique-id='inquiriestable-rf25eb841258ecfac-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' />
                        <span className="truncate" data-api-unique-id='inquiriestable-r7288bf180db183a8-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-clientEmail`} data-api-map-var-name='inquiry'>{inquiry.clientEmail}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0" data-api-unique-id='inquiriestable-rf03f0a2a708539e7-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                      <span className={`inline-flex shrink-0 whitespace-nowrap items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${projectCfg.class}`} data-api-unique-id='inquiriestable-re5fb47936473e765-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                        {projectCfg.label}
                      </span>
                      <span className={`inline-flex shrink-0 whitespace-nowrap items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider ${statusCfg.class}`} data-api-unique-id='inquiriestable-r31d3ec7cd9d54521-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                        {statusCfg.label}
                      </span>
                    </div>
                  </div>

                  {/* Package & Brief Snippet */}
                  <div className="min-w-0" data-api-unique-id='inquiriestable-r812d495474e1a29d-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                    <div className="flex items-center gap-1 text-[11px] text-accent font-medium truncate" data-api-unique-id='inquiriestable-rfed1d73ed1e164e3-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                      <span data-api-unique-id='inquiriestable-r9c49ba0f698131c1-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>Tier:</span>
                      <span className="truncate text-foreground font-semibold" data-api-unique-id='inquiriestable-rdffb9b0ad75df673-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                        {inquiry.servicePackage ? inquiry.servicePackage.title : "Custom Open Brief"}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5 leading-snug" data-api-unique-id='inquiriestable-r5e0ed2879013e742-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-projectBrief`} data-api-map-var-name='inquiry'>
                      {inquiry.projectBrief}
                    </p>
                  </div>

                  {/* Metadata Row: Budget, Timeline & Timestamp */}
                  <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-muted-foreground pt-1 border-t border-border/60" data-api-unique-id='inquiriestable-radda14052c844bae-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                    <div className="flex items-center gap-2 min-w-0 truncate" data-api-unique-id='inquiriestable-r904a19a78edc562c-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                      <span className="text-foreground font-medium shrink-0" data-api-unique-id='inquiriestable-rf79572d698340f0e-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-budgetTier`} data-api-map-var-name='inquiry'>
                        {inquiry.budgetTier}
                      </span>
                      {inquiry.location && <span className="flex items-center gap-0.5 truncate" data-api-unique-id='inquiriestable-r6d4a311291f8b8a4-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                          <MapPin className="h-2.5 w-2.5 shrink-0" data-api-unique-id='inquiriestable-r7cc467a1edc95c20-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' />
                          <span className="truncate" data-api-unique-id='inquiriestable-r39b5b6f34220e881-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1' data-api-bind-info={`inquiries-${index}-location`} data-api-map-var-name='inquiry'>{inquiry.location}</span>
                        </span>}
                    </div>
                    <span className="shrink-0 whitespace-nowrap" data-api-unique-id='inquiriestable-r434073c1aa0f6836-s2935855701' data-api-unique-page-name='src/backend/components/InquiriesDispatch/InquiriesTable' data-api-in-loop='1'>
                      {createdDate ? createdDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                }) : ""}
                    </span>
                  </div>
                </div>;
        })}
          </div>}
      </div>
    </div>;
}