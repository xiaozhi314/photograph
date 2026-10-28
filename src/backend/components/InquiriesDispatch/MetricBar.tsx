"use client";

import React from "react";
import { Inbox, Clock, MessageSquare, CheckCircle2, ArrowUpRight } from "lucide-react";
import type { InquiryMetricsDTO } from "@/backend/types/InquiriesDispatch";
interface MetricBarProps {
  metrics: InquiryMetricsDTO;
  selectedStatusFilter: string;
  onSelectStatusFilter: (status: string) => void;
}
export default function MetricBar({
  metrics,
  selectedStatusFilter,
  onSelectStatusFilter
}: MetricBarProps) {
  const cards = [{
    id: "ALL",
    label: "Total Commission Pipeline",
    count: metrics?.total ?? 0,
    subtext: "All-time inbound briefs logged",
    icon: Inbox,
    tone: "text-primary",
    activeBg: "border-primary ring-1 ring-primary/30"
  }, {
    id: "NEW",
    label: "Pending Unreviewed",
    count: metrics?.newCount ?? 0,
    subtext: "Needs curatorial triage & review",
    icon: Clock,
    tone: "text-warning",
    activeBg: "border-warning ring-1 ring-warning/30",
    highlightPill: "Action Required"
  }, {
    id: "IN_REVIEW",
    label: "Active Consultations",
    count: metrics?.inReviewCount ?? 0,
    subtext: "Drafting rate & production scope",
    icon: MessageSquare,
    tone: "text-info",
    activeBg: "border-info ring-1 ring-info/30"
  }, {
    id: "REPLIED",
    label: "Dispatched & Archived",
    count: metrics?.repliedCount ?? 0,
    subtext: `Avg turnaround ${metrics?.avgTurnaroundHours ?? 24}h`,
    icon: CheckCircle2,
    tone: "text-success",
    activeBg: "border-success ring-1 ring-success/30"
  }];
  return <div data-controller-name="Inquiry Queue Metrics" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 w-full min-w-0" data-api-unique-id='metricbar-rdf5c87c10cab1c62-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar'>
      {cards.map((card, index) => {
      const Icon = card.icon;
      const isSelected = selectedStatusFilter === card.id;
      return <button key={card.id} type="button" onClick={() => onSelectStatusFilter(card.id)} className={`flex flex-col text-left p-4 rounded-lg border bg-card text-card-foreground transition-all duration-200 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? card.activeBg : "border-border"}`} data-api-unique-id='metricbar-r2e0a4209c6573ea3-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1'>
            <div className="flex items-center justify-between gap-2 w-full min-w-0" data-api-unique-id='metricbar-r1dfd114ed829ad2e-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1'>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider truncate" data-api-unique-id='metricbar-rb04cbb87a92fec27-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1' data-api-bind-info={`cards-${index}-label`} data-api-map-var-name='card'>
                {card.label}
              </span>
              <div className="p-1.5 rounded bg-muted shrink-0" data-api-unique-id='metricbar-rd6f78b8f6cc778da-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1'>
                <Icon className={`w-4 h-4 ${card.tone}`} data-api-bind-info={`cards-${index}-icon`} data-api-map-var-name='card' data-api-unique-id='metricbar-r7eef5016aff8f344-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1' />
              </div>
            </div>

            <div className="mt-2 flex items-baseline justify-between gap-2 w-full min-w-0" data-api-unique-id='metricbar-r9c664ce8e9e80159-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1'>
              <span className="text-2xl font-bold tracking-tight text-foreground font-mono" data-api-unique-id='metricbar-r4f60e7e57ed3adcc-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1' data-api-bind-info={`cards-${index}-count`} data-api-map-var-name='card'>
                {card.count}
              </span>
              {card.highlightPill && card.count > 0 && <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-warning text-warning-foreground shrink-0 whitespace-nowrap" data-api-unique-id='metricbar-reffa2f11b39f0573-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1' data-api-bind-info={`cards-${index}-highlightPill`} data-api-map-var-name='card'>
                  {card.highlightPill}
                </span>}
            </div>

            <div className="mt-2 flex items-center justify-between gap-1 text-xs text-muted-foreground w-full min-w-0 pt-2 border-t border-border/40" data-api-unique-id='metricbar-rb15a910cfcef1252-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1'>
              <span className="truncate" data-api-unique-id='metricbar-r40bafa33efb5b196-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1' data-api-bind-info={`cards-${index}-subtext`} data-api-map-var-name='card'>{card.subtext}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-60" data-api-unique-id='metricbar-r93e5afa48b48a27f-s3407565141' data-api-unique-page-name='src/backend/components/InquiriesDispatch/MetricBar' data-api-in-loop='1' />
            </div>
          </button>;
    })}
    </div>;
}