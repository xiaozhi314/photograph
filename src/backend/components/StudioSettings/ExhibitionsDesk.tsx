"use client";

import React, { useState } from "react";
import { ExhibitionRecordItem, ExhibitionType } from "@/backend/types/StudioSettings";
import { Building2, ExternalLink, Plus, Edit3, Trash2, MapPin, BookOpen, Award, X, Quote } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
interface ExhibitionsDeskProps {
  exhibitions: ExhibitionRecordItem[];
  onSaveExhibition: (exhibition: ExhibitionRecordItem) => void;
  onDeleteExhibition: (id: string) => void;
}
const EXHIBITION_TYPE_CONFIG: Record<ExhibitionType, {
  label: string;
  badgeClass: string;
  icon: typeof Award;
}> = {
  SOLO_EXHIBITION: {
    label: "Solo Exhibition",
    badgeClass: "bg-primary text-primary-foreground",
    icon: Award
  },
  INSTITUTIONAL: {
    label: "Institutional Retrospective",
    badgeClass: "bg-accent text-accent-foreground",
    icon: Building2
  },
  BIENNIAL: {
    label: "Biennial & Triennial",
    badgeClass: "bg-info text-info-foreground",
    icon: Award
  },
  MONOGRAPH: {
    label: "Monograph & Catalogue",
    badgeClass: "bg-secondary text-secondary-foreground",
    icon: BookOpen
  }
};
export default function ExhibitionsDesk({
  exhibitions,
  onSaveExhibition,
  onDeleteExhibition
}: ExhibitionsDeskProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingExhibition, setEditingExhibition] = useState<ExhibitionRecordItem | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [exhibitionType, setExhibitionType] = useState<ExhibitionType>("SOLO_EXHIBITION");
  const [pressMention, setPressMention] = useState("");
  const [externalUrl, setExternalUrl] = useState("");
  const [sortOrder, setSortOrder] = useState(1);
  const openCreateDrawer = () => {
    setEditingExhibition(null);
    setTitle("");
    setInstitution("");
    setCity("");
    setYear(new Date().getFullYear());
    setExhibitionType("SOLO_EXHIBITION");
    setPressMention("");
    setExternalUrl("");
    setSortOrder(exhibitions.length + 1);
    setIsDrawerOpen(true);
  };
  const openEditDrawer = (record: ExhibitionRecordItem) => {
    setEditingExhibition(record);
    setTitle(record.title);
    setInstitution(record.institution);
    setCity(record.city);
    setYear(record.year);
    setExhibitionType(record.exhibitionType);
    setPressMention(record.pressMention);
    setExternalUrl(record.externalUrl || "");
    setSortOrder(record.sortOrder);
    setIsDrawerOpen(true);
  };
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !institution.trim() || !city.trim()) {
      toast.error("Please fill in title, institution, and location");
      return;
    }
    const payload: ExhibitionRecordItem = {
      id: editingExhibition ? editingExhibition.id : `ex_${Date.now()}`,
      title: title.trim(),
      institution: institution.trim(),
      city: city.trim(),
      year: Number(year),
      exhibitionType,
      pressMention: pressMention.trim(),
      externalUrl: externalUrl.trim() || null,
      sortOrder: Number(sortOrder),
      createdAt: editingExhibition ? editingExhibition.createdAt : new Date(),
      updatedAt: new Date()
    };
    onSaveExhibition(payload);
    setIsDrawerOpen(false);
  };

  // Group by year descending, then sortOrder
  const sortedExhibitions = [...exhibitions].sort((a, b) => b.year - a.year || a.sortOrder - b.sortOrder);
  return <div data-controller-name="Exhibitions and Monographs Catalog" className="flex min-w-0 flex-col gap-5 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm" data-api-unique-id='exhibitionsdesk-r49a9e7a74da032ef-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
      {/* Header toolbar */}
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" data-api-unique-id='exhibitionsdesk-reb5d96617f9a6edf-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
        <div className="min-w-0" data-api-unique-id='exhibitionsdesk-r9b9708d15e4f65d1-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
          <div className="flex min-w-0 items-center gap-2" data-api-unique-id='exhibitionsdesk-r807c4ba0d34fb8dd-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
            <Building2 className="h-4 w-4 text-primary shrink-0" data-api-unique-id='exhibitionsdesk-ra0036d98edcc6499-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
            <h2 className="text-base font-semibold tracking-tight" data-api-unique-id='exhibitionsdesk-r86580fc55a328d67-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Institutional Exhibitions & Monograph Archives</h2>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground" data-api-unique-id='exhibitionsdesk-r8e9ac6f5885eee17-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
            Curatorial chronological record of museum surveys, architectural biennials, and catalog raisonné publications.
          </p>
        </div>
        <button type="button" onClick={openCreateDrawer} className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='exhibitionsdesk-rdf61bec7272203b5-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
          <Plus className="h-3.5 w-3.5" data-api-unique-id='exhibitionsdesk-rf4b111ffea3eeb2d-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
          <span data-api-unique-id='exhibitionsdesk-r008bbd696960e93d-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Add Exhibition Record</span>
        </button>
      </div>

      {/* Chronological Archive Rows */}
      <div className="flex min-w-0 flex-col divide-y divide-border rounded-md border border-border bg-background" data-api-unique-id='exhibitionsdesk-r656abaf250cf637b-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
        {sortedExhibitions.length === 0 ? <div className="p-8 text-center text-xs text-muted-foreground" data-api-unique-id='exhibitionsdesk-r8d34e8989fee4b62-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
            No institutional exhibitions or monograph publications cataloged yet.
          </div> : sortedExhibitions.map((record, index) => {
        const typeMeta = EXHIBITION_TYPE_CONFIG[record.exhibitionType] || EXHIBITION_TYPE_CONFIG.SOLO_EXHIBITION;
        const IconComp = typeMeta.icon;
        return <div key={record.id} className="flex min-w-0 flex-col gap-3 p-4 transition-colors hover:bg-muted/40 lg:flex-row lg:items-start lg:justify-between" data-api-unique-id='exhibitionsdesk-r613abb71719aa132-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                {/* Left timeline section */}
                <div className="flex min-w-0 flex-1 items-start gap-4" data-api-unique-id='exhibitionsdesk-r1ff8e43d7111c8d1-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                  {/* Year Marker */}
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-md border border-border bg-card px-2.5 py-1.5 text-center min-w-[56px]" data-api-unique-id='exhibitionsdesk-rd2b1094abb716cf0-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                    <span className="font-mono text-base font-bold text-primary tracking-tight" data-api-unique-id='exhibitionsdesk-r9db36f27d12990c9-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' data-api-bind-info={`sortedExhibitions-${index}-year`} data-api-map-var-name='record'>{record.year}</span>
                    <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider" data-api-unique-id='exhibitionsdesk-rc60fde3b71e44a97-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>ANNAL</span>
                  </div>

                  {/* Details */}
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5" data-api-unique-id='exhibitionsdesk-r4dcc6365fcac9064-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                    <div className="flex min-w-0 flex-wrap items-center gap-2" data-api-unique-id='exhibitionsdesk-r6d98c8a1962f398b-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                      <h3 className="text-sm font-semibold text-foreground tracking-tight break-words" data-api-unique-id='exhibitionsdesk-rd60f701a0452b5bb-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' data-api-bind-info={`sortedExhibitions-${index}-title`} data-api-map-var-name='record'>
                        {record.title}
                      </h3>
                      <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap ${typeMeta.badgeClass}`} data-api-unique-id='exhibitionsdesk-rc9b7d77ec5f590dd-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                        <IconComp className="h-3 w-3" data-api-unique-id='exhibitionsdesk-r8b009b2a68540279-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                        <span data-api-unique-id='exhibitionsdesk-rc5d97dbd62e76fe5-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>{typeMeta.label}</span>
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground" data-api-unique-id='exhibitionsdesk-rf788579299859291-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                      <span className="flex min-w-0 items-center gap-1 font-medium text-foreground" data-api-unique-id='exhibitionsdesk-r86be3091a8641c86-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                        <Building2 className="h-3.5 w-3.5 text-primary shrink-0" data-api-unique-id='exhibitionsdesk-r38d6eb6764f0e79e-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                        <span className="break-words" data-api-unique-id='exhibitionsdesk-r697a8c616c2c7988-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' data-api-bind-info={`sortedExhibitions-${index}-institution`} data-api-map-var-name='record'>{record.institution}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-1" data-api-unique-id='exhibitionsdesk-r0a4c424cf5857087-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                        <MapPin className="h-3.5 w-3.5 shrink-0" data-api-unique-id='exhibitionsdesk-rb0588c600cd0d9d0-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                        <span data-api-unique-id='exhibitionsdesk-ra379f213daa77ff8-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' data-api-bind-info={`sortedExhibitions-${index}-city`} data-api-map-var-name='record'>{record.city}</span>
                      </span>
                      {record.externalUrl && <a href={record.externalUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 text-primary hover:underline" data-api-unique-id='exhibitionsdesk-rfa1ad0fa614b56af-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                          <ExternalLink className="h-3 w-3" data-api-unique-id='exhibitionsdesk-r4756b066d662f28a-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                          <span data-api-unique-id='exhibitionsdesk-r2699081351e923fc-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>Curatorial Dossier</span>
                        </a>}
                    </div>

                    {/* Press / curatorial quote */}
                    {record.pressMention && <div className="mt-1 flex min-w-0 items-start gap-2 rounded-md bg-card p-2 text-xs text-card-foreground border border-border/80" data-api-unique-id='exhibitionsdesk-reecfdca7f1624058-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                        <Quote className="h-3.5 w-3.5 text-primary/70 shrink-0 mt-0.5" data-api-unique-id='exhibitionsdesk-r1b3385532825e2bb-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                        <p className="min-w-0 flex-1 italic text-muted-foreground break-words leading-relaxed" data-api-unique-id='exhibitionsdesk-r13bf85a6fb0990bb-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' data-api-bind-info={`sortedExhibitions-${index}-pressMention`} data-api-map-var-name='record'>
                          “{record.pressMention}”
                        </p>
                      </div>}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 items-center gap-1.5 self-end lg:self-start" data-api-unique-id='exhibitionsdesk-r0b2484547a508a9e-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                  <button type="button" onClick={() => openEditDrawer(record)} className="inline-flex shrink-0 items-center gap-1 rounded border border-border bg-card px-2.5 py-1 text-xs font-medium text-card-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-r6318d843f7954a9c-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                    <Edit3 className="h-3.5 w-3.5" data-api-unique-id='exhibitionsdesk-r3274dd0fc30258a9-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                    <span data-api-unique-id='exhibitionsdesk-r82bf5da21cfa8fca-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>Edit</span>
                  </button>
                  <button type="button" onClick={() => {
              if (confirm(`Remove exhibition record "${record.title}"?`)) {
                onDeleteExhibition(record.id);
              }
            }} className="inline-flex shrink-0 items-center justify-center rounded border border-border p-1 text-xs text-muted-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" title="Remove record" data-api-unique-id='exhibitionsdesk-rce89306da7894e4c-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1'>
                    <Trash2 className="h-3.5 w-3.5" data-api-unique-id='exhibitionsdesk-r438c6108ae49ecde-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' data-api-in-loop='1' />
                  </button>
                </div>
              </div>;
      })}
      </div>

      {/* Editor Drawer Modal */}
      {isDrawerOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs" data-api-unique-id='exhibitionsdesk-rf5c7c0aafae25b3b-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
          <div className="flex max-h-[calc(100dvh-4rem)] w-full max-w-lg min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-xl" data-api-unique-id='exhibitionsdesk-r3eeff1f3b1c67c46-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
            {/* Drawer Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3.5" data-api-unique-id='exhibitionsdesk-r667dab7afda738d7-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
              <div className="min-w-0" data-api-unique-id='exhibitionsdesk-r248bafb8bb1a0d64-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                <h3 className="text-sm font-semibold" data-api-unique-id='exhibitionsdesk-rbdcc478a3d5a98ac-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  {editingExhibition ? "Edit Exhibition & Monograph Record" : "Append Institutional Exhibition"}
                </h3>
                <p className="text-xs text-muted-foreground" data-api-unique-id='exhibitionsdesk-r1fa7fa3a1710b5e1-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Historical curatorial monograph archive</p>
              </div>
              <button type="button" onClick={() => setIsDrawerOpen(false)} className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground" data-api-unique-id='exhibitionsdesk-rd5386bbebe2508e6-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                <X className="h-4 w-4" data-api-unique-id='exhibitionsdesk-r49089601a5c1afbd-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
              </button>
            </div>

            {/* Drawer Form Body */}
            <form onSubmit={handleSave} className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5" data-api-unique-id='exhibitionsdesk-r70704c644e378b07-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
              <div className="flex flex-col gap-4" data-api-unique-id='exhibitionsdesk-r9cb7e7b46b2c5031-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                <div data-api-unique-id='exhibitionsdesk-rd7e72a99d14e9038-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-r23f288278e968ace-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    Exhibition or Publication Title *
                  </label>
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Silent Monoliths: Tokyo Brutalism Survey" required className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-raa222eccd5b214a3-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" data-api-unique-id='exhibitionsdesk-radfdc7d8176886b2-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  <div data-api-unique-id='exhibitionsdesk-rfae383345113991e-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-rdc75198cd75d1d98-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      Host Institution / Press *
                    </label>
                    <input type="text" value={institution} onChange={e => setInstitution(e.target.value)} placeholder="e.g., Mori Art Museum / Steidl" required className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-r446e9e456547445d-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                  </div>
                  <div data-api-unique-id='exhibitionsdesk-rbc74931a852f0a11-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-r2cf8fe3bf607aba8-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      City, Country *
                    </label>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="e.g., Tokyo, Japan" required className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-r768e9eeea33d0895-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" data-api-unique-id='exhibitionsdesk-r82a2c4f93db46e0f-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  <div data-api-unique-id='exhibitionsdesk-r4d248982fcc95c7b-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-r1902163b122759db-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      Year *
                    </label>
                    <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} min={1980} max={2035} required className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-refec14bd418e02ee-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                  </div>
                  <div data-api-unique-id='exhibitionsdesk-r3c66d320bc3a6951-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-r01dc1b2c93f60b77-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      Exhibition Type *
                    </label>
                    <Select key={editingExhibition ? editingExhibition.id : "new-exhibition"} value={exhibitionType} onValueChange={val => setExhibitionType(val as ExhibitionType)} data-api-unique-id='exhibitionsdesk-r6140c341e8e4b167-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      <SelectTrigger className="w-full h-8 text-xs" data-api-unique-id='exhibitionsdesk-raa0d1dacf8115001-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                        <SelectValue data-api-unique-id='exhibitionsdesk-r9b7d195e4b626ef6-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                          {EXHIBITION_TYPE_CONFIG[exhibitionType]?.label || "Solo Exhibition"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent data-api-unique-id='exhibitionsdesk-r71fe9c56119ce09d-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                        <SelectItem value="SOLO_EXHIBITION" data-api-unique-id='exhibitionsdesk-r3ab4db957f93f4c1-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Solo Exhibition</SelectItem>
                        <SelectItem value="INSTITUTIONAL" data-api-unique-id='exhibitionsdesk-r97b141dc72a49785-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Institutional Retrospective</SelectItem>
                        <SelectItem value="BIENNIAL" data-api-unique-id='exhibitionsdesk-r3f20928a5c14ce84-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Biennial & Triennial</SelectItem>
                        <SelectItem value="MONOGRAPH" data-api-unique-id='exhibitionsdesk-ra8ecefe5b2e6d651-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>Monograph & Catalogue</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div data-api-unique-id='exhibitionsdesk-rbc0403c846d15dc1-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-rb4d8a37db4a3aa46-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    Press Mention / Critical Citation
                  </label>
                  <textarea rows={2} value={pressMention} onChange={e => setPressMention(e.target.value)} placeholder="e.g., 'Vane’s medium-format silver prints render concrete geometries with tactile stillness.' — Artforum" className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" data-api-unique-id='exhibitionsdesk-r89f6b0520aaeafa3-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3" data-api-unique-id='exhibitionsdesk-r9f2b30a3baa0fdde-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  <div className="sm:col-span-2" data-api-unique-id='exhibitionsdesk-ra916390a8a20ba5c-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-r8a1ccec1f4c0eccd-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      External Dossier / Press URL
                    </label>
                    <input type="url" value={externalUrl} onChange={e => setExternalUrl(e.target.value)} placeholder="https://example-museum.org/exhibitions/vane" className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-r55403975b010d92d-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                  </div>
                  <div data-api-unique-id='exhibitionsdesk-r48c00287b9fa7ad5-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                    <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='exhibitionsdesk-r10a835e109fa35ba-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                      Sort Priority
                    </label>
                    <input type="number" value={sortOrder} onChange={e => setSortOrder(Number(e.target.value))} min={1} className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-r1ef402397f06aba3-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk' />
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="mt-6 flex shrink-0 items-center justify-end gap-2 border-t border-border pt-4" data-api-unique-id='exhibitionsdesk-r64f90b752b875717-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                <button type="button" onClick={() => setIsDrawerOpen(false)} className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground hover:bg-muted" data-api-unique-id='exhibitionsdesk-re69daa87d015fc88-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  Cancel
                </button>
                <button type="submit" className="rounded-md bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='exhibitionsdesk-r01b5c03c31059400-s1015691667' data-api-unique-page-name='src/backend/components/StudioSettings/ExhibitionsDesk'>
                  {editingExhibition ? "Update Record" : "Append Record"}
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}