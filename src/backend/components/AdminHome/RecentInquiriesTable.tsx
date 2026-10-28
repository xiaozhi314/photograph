"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { InquiryItem, InquiryStatus } from "@/backend/types/AdminHome";
import { InquiriesDispatch } from "@/backend/route-params";
import { ChevronRight } from "lucide-react";
interface RecentInquiriesTableProps {
  inquiries: InquiryItem[];
  selectedStatus?: InquiryStatus | "ALL";
  onSelectStatus?: (status: InquiryStatus | "ALL") => void;
  onOpenDrawer?: (item: InquiryItem) => void;
  onSelectInquiry?: (item: InquiryItem) => void;
  selectedInquiryId?: string;
  onViewAllInquiries?: () => void;
}
const statusBadgeClasses: Record<InquiryStatus, string> = {
  NEW: "bg-primary text-primary-foreground",
  IN_REVIEW: "bg-warning text-warning-foreground",
  REPLIED: "bg-success text-success-foreground"
};
const statusLabels: Record<InquiryStatus, string> = {
  NEW: "New",
  IN_REVIEW: "In Review",
  REPLIED: "Replied"
};
function formatInquiryDate(inquiry: InquiryItem): string {
  if (inquiry.inquiryDate) return inquiry.inquiryDate;
  if (!inquiry.createdAt) return "Recent";
  const d = inquiry.createdAt instanceof Date ? inquiry.createdAt : new Date(inquiry.createdAt);
  if (isNaN(d.getTime())) return "Recent";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}
export default function RecentInquiriesTable({
  inquiries = [],
  selectedStatus: propSelectedStatus,
  onSelectStatus: propOnSelectStatus,
  onOpenDrawer,
  onSelectInquiry,
  selectedInquiryId,
  onViewAllInquiries
}: RecentInquiriesTableProps) {
  const router = useRouter();
  const [internalStatus, setInternalStatus] = useState<InquiryStatus | "ALL">("ALL");
  const currentStatus = propSelectedStatus ?? internalStatus;
  const handleStatusChange = (st: InquiryStatus | "ALL") => {
    if (propOnSelectStatus) {
      propOnSelectStatus(st);
    } else {
      setInternalStatus(st);
    }
  };
  const handleRowClick = (item: InquiryItem) => {
    if (onSelectInquiry) {
      onSelectInquiry(item);
    } else if (onOpenDrawer) {
      onOpenDrawer(item);
    }
  };
  const handleViewAll = () => {
    if (onViewAllInquiries) {
      onViewAllInquiries();
    } else {
      InquiriesDispatch.navigateTo(router);
    }
  };
  const filteredInquiries = currentStatus === "ALL" ? inquiries : inquiries.filter(inq => inq.status === currentStatus);
  return <div data-controller-name="Recent Inquiries Ledger" className="bg-card text-card-foreground border border-border/80 rounded-sm p-4 sm:p-5 flex flex-col gap-4 min-w-0" data-api-unique-id='recentinquiriestable-r251e533b6e19e60d-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border/60 pb-3" data-api-unique-id='recentinquiriestable-r54e01225f9e33248-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
        <div data-api-unique-id='recentinquiriestable-r72377161e192cc37-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
          <h2 className="text-base sm:text-lg font-serif font-semibold tracking-tight text-foreground flex items-center gap-2" data-api-unique-id='recentinquiriestable-r49f0d7af8b3f833c-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
            <span data-api-unique-id='recentinquiriestable-r68a58aaf271766c4-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Commission Inquiries</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-muted text-muted-foreground font-normal" data-api-unique-id='recentinquiriestable-ra159b44bec694ee9-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
              {filteredInquiries.length} Active
            </span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5" data-api-unique-id='recentinquiriestable-rb354ef51a101731f-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
            Client briefs, budget tiers, and consultation scheduling queue
          </p>
        </div>

        {/* Filter Pills & View Queue Link */}
        <div className="flex items-center gap-2 flex-wrap" data-api-unique-id='recentinquiriestable-r0604cfd53dc1109d-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
          <div className="flex items-center gap-1.5 flex-wrap" data-api-unique-id='recentinquiriestable-r1c9d23cd07866bb6-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
            {(["ALL", "NEW", "IN_REVIEW", "REPLIED"] as const).map((st, index) => <button key={st} type="button" onClick={() => handleStatusChange(st)} className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${currentStatus === st ? "bg-primary text-primary-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='recentinquiriestable-r14d8e6bc7c931f56-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                {st === "ALL" ? "All Queue" : statusLabels[st as InquiryStatus]}
              </button>)}
          </div>

          <button type="button" onClick={handleViewAll} className="text-xs font-mono text-primary hover:underline hover:text-primary-hover flex items-center gap-1 shrink-0 ml-1" data-api-unique-id='recentinquiriestable-r2e703e82ece40b4b-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
            <span data-api-unique-id='recentinquiriestable-r8a7237b8afcb7621-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>View Inquiries Queue</span>
            <ChevronRight className="w-3.5 h-3.5" data-api-unique-id='recentinquiriestable-r013d1af60115089b-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' />
          </button>
        </div>
      </div>

      {/* Table with horizontal isolation wrapper */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto rounded-sm border border-border/70" data-api-unique-id='recentinquiriestable-r0269d920434c8d5e-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
        <table className="w-full min-w-[760px] text-left text-xs border-collapse" data-api-unique-id='recentinquiriestable-rf17385c5b2adca58-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
          <thead className="bg-muted text-muted-foreground font-medium uppercase tracking-wider text-[11px] border-b border-border/70" data-api-unique-id='recentinquiriestable-r200f0e82171cb755-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
            <tr data-api-unique-id='recentinquiriestable-rf3dfb852d5f45e79-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[160px]" data-api-unique-id='recentinquiriestable-rff8640491cf93fd3-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Client / Organization</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[110px]" data-api-unique-id='recentinquiriestable-raaa48f41772c583a-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Project Scope</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[90px]" data-api-unique-id='recentinquiriestable-r87fb064c5f835395-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Received</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[120px]" data-api-unique-id='recentinquiriestable-r784176f0ba6e3921-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Budget Tier</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[120px]" data-api-unique-id='recentinquiriestable-r928aaee9cd93bf88-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Target Timeline</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[90px]" data-api-unique-id='recentinquiriestable-r64ed31f9a9941d18-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Status</th>
              <th className="py-2.5 px-2 text-right whitespace-nowrap w-[60px]" data-api-unique-id='recentinquiriestable-r1519f4014dc94621-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 font-body" data-api-unique-id='recentinquiriestable-r69cb2f3cccf27e96-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
            {filteredInquiries.length === 0 ? <tr data-api-unique-id='recentinquiriestable-r8ab138147d23cae5-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
                <td colSpan={7} className="py-8 text-center text-muted-foreground" data-api-unique-id='recentinquiriestable-rf9dc1f26f82a5692-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
                  No commission inquiries currently match this filter state.
                </td>
              </tr> : filteredInquiries.map((inq, index) => {
            const isSelected = selectedInquiryId === inq.id;
            return <tr key={inq.id} onClick={() => handleRowClick(inq)} className={`cursor-pointer transition-colors ${isSelected ? "bg-secondary text-secondary-foreground font-medium" : "hover:bg-muted/60"}`} data-api-unique-id='recentinquiriestable-rb54e04ac12fb8d80-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                    <td className="py-3 px-3" data-api-unique-id='recentinquiriestable-r29c38667d0b31320-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                      <div className="font-medium text-foreground truncate max-w-[170px]" data-api-unique-id='recentinquiriestable-r175ec2c67e1b7058-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1' data-api-bind-info={`filteredInquiries-${index}-clientName`} data-api-map-var-name='inq'>
                        {inq.clientName}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-mono truncate max-w-[170px]" data-api-unique-id='recentinquiriestable-r82c582a220cb4a01-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1' data-api-bind-info={`filteredInquiries-${index}-clientEmail`} data-api-map-var-name='inq'>
                        {inq.organization ? `${inq.organization} · ` : ""}{inq.clientEmail}
                      </div>
                    </td>
                    <td className="py-3 px-3" data-api-unique-id='recentinquiriestable-r58a30983224303fa-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                      <span className="inline-flex px-2 py-0.5 rounded-sm bg-muted text-muted-foreground text-[11px] font-medium whitespace-nowrap" data-api-unique-id='recentinquiriestable-r8e7b8ebb384f3b69-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1' data-api-bind-info={`filteredInquiries-${index}-projectType`} data-api-map-var-name='inq'>
                        {inq.projectType}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-muted-foreground whitespace-nowrap font-mono text-[11px]" data-api-unique-id='recentinquiriestable-re44936ada1020665-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                      {formatInquiryDate(inq)}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap font-mono text-foreground font-medium" data-api-unique-id='recentinquiriestable-rbfe84c25f6464642-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                      {inq.budgetTier || inq.budgetRange || "—"}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap text-muted-foreground text-[11px]" data-api-unique-id='recentinquiriestable-ra412d76c0bdd8fff-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1' data-api-bind-info={`filteredInquiries-${index}-targetTimeline`} data-api-map-var-name='inq'>
                      {inq.targetTimeline}
                    </td>
                    <td className="py-3 px-3" data-api-unique-id='recentinquiriestable-rc2a71997712a9086-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap shrink-0 ${statusBadgeClasses[inq.status]}`} data-api-unique-id='recentinquiriestable-rf6054ed90f2e7b2c-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                        {statusLabels[inq.status]}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right" data-api-unique-id='recentinquiriestable-rd11175f7645dc088-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                      <button type="button" onClick={e => {
                  e.stopPropagation();
                  handleRowClick(inq);
                }} aria-label={`View brief for ${inq.clientName}`} className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center" data-api-unique-id='recentinquiriestable-r56f2d30223612af9-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1'>
                        <ChevronRight className="w-4 h-4" data-api-unique-id='recentinquiriestable-r8a6ae228759315cc-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable' data-api-in-loop='1' />
                      </button>
                    </td>
                  </tr>;
          })}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pt-1" data-api-unique-id='recentinquiriestable-rc66fdc4ec93c1cbd-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>
        <span data-api-unique-id='recentinquiriestable-r5a8aa08e92936f83-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Click any row for full brief, timeline &amp; curatorial response log</span>
        <span className="font-mono" data-api-unique-id='recentinquiriestable-r268f33e2190f24a9-s337976671' data-api-unique-page-name='src/backend/components/AdminHome/RecentInquiriesTable'>Encrypted Client Ledger v2.4</span>
      </div>
    </div>;
}