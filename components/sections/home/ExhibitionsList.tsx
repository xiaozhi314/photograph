"use client";

import React from "react";
import type { ExhibitionRecord } from "@/frontend/types/home";
import { ArrowUpRight } from "lucide-react";

interface ExhibitionsListProps {
  exhibitions: ExhibitionRecord[];
}

export default function ExhibitionsList({ exhibitions }: ExhibitionsListProps) {
  return (
    <section
      id="exhibitions"
      data-controller-name="Exhibitions & Press"
      className="w-full bg-background border-t border-border/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border/60">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              Exhibitions &amp; Publications
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-foreground tracking-tight">
              Institutional Showcases &amp; Critical Press
            </h2>
          </div>
          <p className="text-xs font-mono text-muted-foreground md:text-right">
            Curated archive 2021 — 2024 · Archival monographs cataloged
          </p>
        </div>

        {/* Clean Line Chronology */}
        <div className="divide-y divide-border/60">
          {exhibitions.map((exhibit) => (
            <article
              key={exhibit.id}
              className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors hover:bg-card/40 px-2 sm:px-4 rounded-sm"
            >
              {/* Year Column */}
              <div className="md:col-span-2">
                <span className="text-3xl sm:text-4xl font-display font-light text-primary group-hover:text-primary transition-colors tracking-tight">
                  {exhibit.year}
                </span>
                <span className="block text-[11px] font-mono uppercase text-muted-foreground mt-1">
                  {exhibit.type}
                </span>
              </div>

              {/* Title & Institution */}
              <div className="md:col-span-6 space-y-1">
                <h3 className="text-lg sm:text-xl font-display text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {exhibit.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {exhibit.institution} · <span className="text-foreground">{exhibit.city}</span>
                </p>
              </div>

              {/* Critical Press Mention Quote */}
              <div className="md:col-span-4 flex items-center justify-between gap-3 text-xs text-muted-foreground font-body italic border-l border-border/60 pl-4 py-1">
                <span>&ldquo;{exhibit.pressMention}&rdquo;</span>
                <ArrowUpRight className="w-4 h-4 text-border group-hover:text-primary shrink-0 transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}