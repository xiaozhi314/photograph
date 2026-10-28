"use client";

import React from "react";
import type { OverviewStat } from "@/backend/types/AdminHome";
interface OverviewStatsRibbonProps {
  stats: OverviewStat[];
}
export default function OverviewStatsRibbon({
  stats
}: OverviewStatsRibbonProps) {
  return <div data-controller-name="Overview Stats Ribbon" className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4" data-api-unique-id='overviewstatsribbon-r7a4e5fb0f70319f5-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon'>
      {stats.map((stat, index) => <div key={stat.label} className="bg-card text-card-foreground border border-border/80 rounded-sm p-3.5 sm:p-4 transition-all hover:border-border min-w-0" data-api-unique-id='overviewstatsribbon-r430092d61948e571-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon' data-api-in-loop='1'>
          <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='overviewstatsribbon-rd37484f7341a5b90-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon' data-api-in-loop='1'>
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium truncate" data-api-unique-id='overviewstatsribbon-rfb7a2679cb6d0aa3-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon' data-api-in-loop='1' data-api-bind-info={`stats-${index}-label`} data-api-map-var-name='stat'>
              {stat.label}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground shrink-0 whitespace-nowrap" data-api-unique-id='overviewstatsribbon-rc60c3d8629c0b92e-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon' data-api-in-loop='1' data-api-bind-info={`stats-${index}-badge`} data-api-map-var-name='stat'>
              {stat.badge}
            </span>
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif tracking-tight font-semibold text-foreground" data-api-unique-id='overviewstatsribbon-r389dbe7f444c42db-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon' data-api-in-loop='1' data-api-bind-info={`stats-${index}-value`} data-api-map-var-name='stat'>
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-muted-foreground truncate" data-api-unique-id='overviewstatsribbon-r75f6ed8304aeada1-s2210035539' data-api-unique-page-name='src/backend/components/AdminHome/OverviewStatsRibbon' data-api-in-loop='1' data-api-bind-info={`stats-${index}-subtext`} data-api-map-var-name='stat'>
            {stat.subtext}
          </div>
        </div>)}
    </div>;
}