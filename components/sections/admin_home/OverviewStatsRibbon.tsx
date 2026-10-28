"use client";

import React from "react";
import type { OverviewStat } from "@/backend/types/admin_home";

interface OverviewStatsRibbonProps {
  stats: OverviewStat[];
}

export default function OverviewStatsRibbon({ stats }: OverviewStatsRibbonProps) {
  return (
    <div
      data-controller-name="Overview Stats Ribbon"
      className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card text-card-foreground border border-border/80 rounded-sm p-3.5 sm:p-4 transition-all hover:border-border min-w-0"
        >
          <div className="flex items-center justify-between gap-2 min-w-0">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium truncate">
              {stat.label}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground shrink-0 whitespace-nowrap">
              {stat.badge}
            </span>
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif tracking-tight font-semibold text-foreground">
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-muted-foreground truncate">
            {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}