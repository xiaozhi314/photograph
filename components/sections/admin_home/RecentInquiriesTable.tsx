"use client";

import React from "react";
import type { InquiryItem, InquiryStatus } from "@/backend/types/admin_home";
import { Filter, Calendar, Mail, DollarSign, ChevronRight, MessageSquareText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RecentInquiriesTableProps {
  inquiries: InquiryItem[];
  selectedStatus: InquiryStatus | "ALL";
  onSelectStatus: (status: InquiryStatus | "ALL") => void;
  onOpenDrawer: (item: InquiryItem) => void;
  selectedInquiryId?: string;
}

const statusBadgeClasses: Record<InquiryStatus, string> = {
  NEW: "bg-primary text-primary-foreground",
  IN_REVIEW: "bg-warning text-warning-foreground",
  REPLIED: "bg-success text-success-foreground",
};

const statusLabels: Record<InquiryStatus, string> = {
  NEW: "New",
  IN_REVIEW: "In Review",
  REPLIED: "Replied",
};

export default function RecentInquiriesTable({
  inquiries,
  selectedStatus,
  onSelectStatus,
  onOpenDrawer,
  selectedInquiryId,
}: RecentInquiriesTableProps) {
  const filteredInquiries =
    selectedStatus === "ALL"
      ? inquiries
      : inquiries.filter((inq) => inq.status === selectedStatus);

  return (
    <div
      data-controller-name="Recent Inquiries Ledger"
      className="bg-card text-card-foreground border border-border/80 rounded-sm p-4 sm:p-5 flex flex-col gap-4 min-w-0"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div>
          <h2 className="text-base sm:text-lg font-serif font-semibold tracking-tight text-foreground flex items-center gap-2">
            <span>Commission Inquiries</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-muted text-muted-foreground font-normal">
              {filteredInquiries.length} Active
            </span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Client briefs, budget tiers, and consultation scheduling queue
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {(["ALL", "NEW", "IN_REVIEW", "REPLIED"] as const).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => onSelectStatus(st)}
              className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                selectedStatus === st
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {st === "ALL" ? "All Queue" : statusLabels[st as InquiryStatus]}
            </button>
          ))}
        </div>
      </div>

      {/* Table with horizontal isolation wrapper */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto rounded-sm border border-border/70">
        <table className="w-full min-w-[640px] text-left text-xs border-collapse">
          <thead className="bg-muted text-muted-foreground font-medium uppercase tracking-wider text-[11px] border-b border-border/70">
            <tr>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[140px]">Client / Representative</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[100px]">Project Scope</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[90px]">Received</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[110px]">Budget Tier</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[90px]">Status</th>
              <th className="py-2.5 px-2 text-right whitespace-nowrap w-[60px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 font-body">
            {filteredInquiries.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-muted-foreground">
                  No commission inquiries currently match this filter state.
                </td>
              </tr>
            ) : (
              filteredInquiries.map((inq) => {
                const isSelected = selectedInquiryId === inq.id;
                return (
                  <tr
                    key={inq.id}
                    onClick={() => onOpenDrawer(inq)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-secondary text-secondary-foreground font-medium"
                        : "hover:bg-muted/60"
                    }`}
                  >
                    <td className="py-3 px-3">
                      <div className="font-medium text-foreground truncate max-w-[150px]">
                        {inq.clientName}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-mono truncate max-w-[150px]">
                        {inq.clientEmail}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex px-2 py-0.5 rounded-sm bg-muted text-muted-foreground text-[11px] font-medium whitespace-nowrap">
                        {inq.projectType}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-muted-foreground whitespace-nowrap font-mono text-[11px]">
                      {inq.inquiryDate}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap font-mono text-foreground font-medium">
                      {inq.budgetRange}
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap shrink-0 ${
                          statusBadgeClasses[inq.status]
                        }`}
                      >
                        {statusLabels[inq.status]}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button
                        type="button"
                        aria-label={`View brief for ${inq.clientName}`}
                        className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-muted-foreground flex items-center justify-between pt-1">
        <span>Click any row for full brief, timeline & curatorial response log</span>
        <span className="font-mono">Encrypted Client Ledger v2.4</span>
      </div>
    </div>
  );
}