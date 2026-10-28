"use client";

import React, { useMemo } from "react";
import { ExhibitionRecordItem, ExhibitionType } from "@/frontend/types/ArtistExhibitions";
import { MapPin, Building2, Calendar, Film, Layers } from "lucide-react";
interface ExhibitionTimelineProps {
  exhibitions: ExhibitionRecordItem[];
  selectedType: ExhibitionType | "ALL" | string;
  onTypeChange: (type: ExhibitionType | "ALL") => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
}
const TYPE_CONFIG: Record<ExhibitionType, {
  label: string;
  badgeClass: string;
  filmCode: string;
}> = {
  SOLO_EXHIBITION: {
    label: "Solo Exhibition",
    badgeClass: "bg-primary text-primary-foreground",
    filmCode: "EXP-SOLO"
  },
  INSTITUTIONAL: {
    label: "Institutional",
    badgeClass: "bg-accent text-accent-foreground",
    filmCode: "ARCH-INST"
  },
  BIENNIAL: {
    label: "Biennial",
    badgeClass: "bg-info text-info-foreground",
    filmCode: "BIEN-INTL"
  },
  MONOGRAPH: {
    label: "Monograph Archive",
    badgeClass: "bg-secondary text-secondary-foreground",
    filmCode: "ED-MONO"
  }
};
export default function ExhibitionTimeline({
  exhibitions,
  selectedType,
  onTypeChange,
  selectedYear,
  onYearChange
}: ExhibitionTimelineProps) {
  // Extract distinct years sorted descending
  const years = useMemo(() => {
    const set = new Set<number>();
    exhibitions.forEach(e => set.add(e.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [exhibitions]);
  const filterTabs: Array<{
    id: ExhibitionType | "ALL";
    label: string;
  }> = [{
    id: "ALL",
    label: "All Formats"
  }, {
    id: "SOLO_EXHIBITION",
    label: "Solo Exhibitions"
  }, {
    id: "INSTITUTIONAL",
    label: "Institutional"
  }, {
    id: "BIENNIAL",
    label: "Biennials"
  }, {
    id: "MONOGRAPH",
    label: "Monographs"
  }];
  const filteredRecords = useMemo(() => {
    return exhibitions.filter(e => {
      const matchesType = selectedType === "ALL" || e.exhibitionType === selectedType;
      const matchesYear = selectedYear === "ALL" || String(e.year) === selectedYear;
      return matchesType && matchesYear;
    }).sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return a.sortOrder - b.sortOrder;
    });
  }, [exhibitions, selectedType, selectedYear]);
  return <section data-controller-name="Exhibition Timeline Archive" className="w-full border-t border-border bg-background py-20 text-foreground" data-api-unique-id='exhibitiontimeline-r73a9f39bdfdfd6cf-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='exhibitiontimeline-rccbd18a996fadc80-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
        {/* Section Header */}
        <div className="flex flex-col gap-3" data-api-unique-id='exhibitiontimeline-r221d838d580fbcdd-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary" data-api-unique-id='exhibitiontimeline-rc1dbccfef01af22e-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
            <Film className="h-4 w-4" data-api-unique-id='exhibitiontimeline-rc0105c1cf39494aa-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' />
            <span data-api-unique-id='exhibitiontimeline-rc16a07abd4cd1815-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>Curatorial Archive · 2017–2024</span>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl" data-api-unique-id='exhibitiontimeline-r906c5a08b38635f6-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
            Institutional Milestones & Biennials
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground" data-api-unique-id='exhibitiontimeline-r2276da5b6051eb8b-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
            A comprehensive record of solo museum retrospectives, architectural biennale
            commissions, and published photographic monographs documenting silver gelatin
            installations worldwide.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm lg:flex-row lg:items-center lg:justify-between" data-api-unique-id='exhibitiontimeline-re5454cee8a586f5d-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
          {/* Format Types Pill Filters */}
          <div className="flex min-w-0 flex-wrap items-center gap-2" data-api-unique-id='exhibitiontimeline-r804be101c5aab018-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
            <span className="mr-1 hidden items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:inline-flex" data-api-unique-id='exhibitiontimeline-rf6a2314c08002143-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
              <Layers className="h-3.5 w-3.5" data-api-unique-id='exhibitiontimeline-r0728b7372ef176a4-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' /> Format:
            </span>
            {filterTabs.map((tab, index) => {
            const isActive = selectedType === tab.id;
            return <button key={tab.id} type="button" onClick={() => onTypeChange(tab.id)} className={`inline-flex shrink-0 items-center rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${isActive ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='exhibitiontimeline-r3ba86295212893c2-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`filterTabs-${index}-label`} data-api-map-var-name='tab'>
                  {tab.label}
                </button>;
          })}
          </div>

          {/* Year Filter Pills */}
          <div className="flex min-w-0 flex-wrap items-center gap-1.5 border-t border-border/60 pt-3 lg:border-t-0 lg:pt-0" data-api-unique-id='exhibitiontimeline-ra4dc6024dd2b200a-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
            <span className="mr-1 hidden items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:inline-flex" data-api-unique-id='exhibitiontimeline-r376f010cd75c4908-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
              <Calendar className="h-3.5 w-3.5" data-api-unique-id='exhibitiontimeline-r7e83864c973e64a4-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' /> Year:
            </span>
            <button type="button" onClick={() => onYearChange("ALL")} className={`rounded-md px-2.5 py-1 font-mono text-xs transition-colors ${selectedYear === "ALL" ? "bg-foreground font-semibold text-background" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='exhibitiontimeline-r283e7155788044c0-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
              All
            </button>
            {years.map((year, index) => {
            const isYearActive = selectedYear === String(year);
            return <button key={year} type="button" onClick={() => onYearChange(String(year))} className={`rounded-md px-2.5 py-1 font-mono text-xs transition-colors ${isYearActive ? "bg-foreground font-semibold text-background" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='exhibitiontimeline-ra2aee802d280bbaf-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`years-${index}-$item`} data-api-map-var-name='year'>
                  {year}
                </button>;
          })}
          </div>
        </div>

        {/* Timeline Records */}
        <div className="mt-12 space-y-6" data-api-unique-id='exhibitiontimeline-r55ba9b409b170565-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
          {filteredRecords.length === 0 ? <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center" data-api-unique-id='exhibitiontimeline-rccc436e86a9ac786-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
              <Film className="h-8 w-8 text-muted-foreground/60" data-api-unique-id='exhibitiontimeline-rc16ba14ee3e205bf-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' />
              <p className="mt-3 font-serif text-lg font-medium text-foreground" data-api-unique-id='exhibitiontimeline-ra8bd0e5ec2180263-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
                No archival records match the selected criteria
              </p>
              <p className="mt-1 text-sm text-muted-foreground" data-api-unique-id='exhibitiontimeline-r23f07490200fddf4-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
                Try resetting the format filter or selecting all archival years.
              </p>
              <button type="button" onClick={() => {
            onTypeChange("ALL");
            onYearChange("ALL");
          }} className="mt-4 rounded-md bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-wider text-secondary-foreground transition-colors hover:brightness-95" data-api-unique-id='exhibitiontimeline-r3db3fc3fe7aaeada-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
                Reset All Filters
              </button>
            </div> : <div className="relative border-l border-border/80 pl-6 sm:pl-10" data-api-unique-id='exhibitiontimeline-rcca73518a6b2fadf-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline'>
              {filteredRecords.map((item, index) => {
            const config = TYPE_CONFIG[item.exhibitionType] || {
              label: item.exhibitionType,
              badgeClass: "bg-secondary text-secondary-foreground",
              filmCode: "FRAME-RAW"
            };
            return <article key={item.id} className="group relative mb-10 last:mb-0 transition-all" data-api-unique-id='exhibitiontimeline-rff4d0c054ca34425-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                    {/* Darkroom Film Sprocket / Dot Anchor on the timeline line */}
                    <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary ring-4 ring-primary/10 sm:-left-[47px]" data-api-unique-id='exhibitiontimeline-r75c983ba38e00361-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' />

                    {/* Timeline card row */}
                    <div className="grid grid-cols-1 gap-4 rounded-xl border border-border/70 bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md lg:grid-cols-12 lg:items-center" data-api-unique-id='exhibitiontimeline-r27f91f242e3866f3-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                      {/* Left: Film Frame Counter & Year Barcode Style */}
                      <div className="flex flex-row items-baseline gap-3 border-b border-border/50 pb-3 font-mono text-xs lg:col-span-3 lg:flex-col lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6" data-api-unique-id='exhibitiontimeline-r21cfca2618279892-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                        <div className="flex items-center gap-2" data-api-unique-id='exhibitiontimeline-rbdf2c7166749e34e-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                          <span className="font-semibold text-primary" data-api-unique-id='exhibitiontimeline-r5dcf1d9a39abef56-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>{`FRAME ${String(index + 1).padStart(2, "0")}`}</span>
                          <span className="text-muted-foreground/50" data-api-unique-id='exhibitiontimeline-r179707bf2e3a2cf7-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>/</span>
                          <span className="text-muted-foreground" data-api-unique-id='exhibitiontimeline-r9c6c31f2dd4d2e75-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>{config.filmCode}</span>
                        </div>
                        <div className="font-serif text-2xl font-bold tracking-tight text-foreground lg:text-3xl" data-api-unique-id='exhibitiontimeline-r7c585b1dfd2a0112-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`filteredRecords-${index}-year`} data-api-map-var-name='item'>
                          {item.year}
                        </div>
                        <span className="text-[11px] uppercase tracking-widest text-muted-foreground" data-api-unique-id='exhibitiontimeline-re7145a510f5de10e-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                          Silver Gelatin Archival
                        </span>
                      </div>

                      {/* Middle: Exhibition Monograph Title & Host Institution */}
                      <div className="min-w-0 lg:col-span-6 lg:px-4" data-api-unique-id='exhibitiontimeline-r1eb371e536a02d9e-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                        <div className="flex flex-wrap items-center gap-2" data-api-unique-id='exhibitiontimeline-r6328953bdaecf276-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                          <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wide ${config.badgeClass}`} data-api-unique-id='exhibitiontimeline-r8b81a1648b026530-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                            {config.label}
                          </span>
                        </div>

                        <h3 className="mt-2.5 font-serif text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors sm:text-2xl" data-api-unique-id='exhibitiontimeline-re613c8ebe67ad70b-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`filteredRecords-${index}-title`} data-api-map-var-name='item'>
                          {item.title}
                        </h3>

                        <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-muted-foreground" data-api-unique-id='exhibitiontimeline-rf46cf84897f6c142-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                          <span className="inline-flex items-center gap-1.5 font-medium text-foreground" data-api-unique-id='exhibitiontimeline-rc7ac526eb20985fa-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`filteredRecords-${index}-institution`} data-api-map-var-name='item'>
                            <Building2 className="h-3.5 w-3.5 text-primary" data-api-unique-id='exhibitiontimeline-rc84c690d8380e816-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' />
                            {item.institution}
                          </span>
                          <span className="inline-flex items-center gap-1.5" data-api-unique-id='exhibitiontimeline-r10ffe3139696e4ac-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`filteredRecords-${index}-city`} data-api-map-var-name='item'>
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" data-api-unique-id='exhibitiontimeline-rec9a2c7caaf5547a-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' />
                            {item.city}
                          </span>
                        </div>

                        {item.pressMention && <p className="mt-3 line-clamp-2 text-xs italic text-muted-foreground/90 border-l-2 border-border pl-2.5" data-api-unique-id='exhibitiontimeline-r94267a0a40651b1b-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1' data-api-bind-info={`filteredRecords-${index}-pressMention`} data-api-map-var-name='item'>
                            “{item.pressMention}”
                          </p>}
                      </div>

                      {/* Right: Archival Record Metadata & Action */}
                      <div className="flex flex-col items-start gap-2 pt-2 border-t border-border/50 lg:col-span-3 lg:items-end lg:border-t-0 lg:pt-0" data-api-unique-id='exhibitiontimeline-r33b8221cad41500f-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground" data-api-unique-id='exhibitiontimeline-rb1cc8baf9ee6a6d5-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                          Catalogue Ref: #{item.id.replace("exh-", "").toUpperCase()}
                        </div>
                        {item.externalUrl ? <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary" data-api-unique-id='exhibitiontimeline-rc04e6ba475086015-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                            <span data-api-unique-id='exhibitiontimeline-rf569b0de589eaf0f-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>Official Dossier</span>
                            <span className="text-[10px]" data-api-unique-id='exhibitiontimeline-r05af409abd94aaf1-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>↗</span>
                          </a> : <span className="inline-flex items-center rounded bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground" data-api-unique-id='exhibitiontimeline-r877588fee716c4f6-s826390489' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/ExhibitionTimeline' data-api-in-loop='1'>
                            Institution Catalog
                          </span>}
                      </div>
                    </div>
                  </article>;
          })}
            </div>}
        </div>
      </div>
    </section>;
}