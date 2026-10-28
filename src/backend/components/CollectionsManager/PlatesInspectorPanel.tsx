"use client";

import React, { useState } from "react";
import { X, Layers, MapPin, CheckCircle2, Maximize2, Film, Camera, Edit3 } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
import type { PhotoCollectionItem, PhotographyWorkPlate } from "@/backend/types/CollectionsManager";
interface PlatesInspectorPanelProps {
  collection: PhotoCollectionItem | null;
  plates: PhotographyWorkPlate[];
  onClose: () => void;
  onOpenEditFolio?: () => void;
  onQuickToggleWallVisible?: (id: string) => void;
}
export default function PlatesInspectorPanel({
  collection,
  plates,
  onClose,
  onOpenEditFolio,
  onQuickToggleWallVisible
}: PlatesInspectorPanelProps) {
  const [selectedPlate, setSelectedPlate] = useState<PhotographyWorkPlate | null>(null);
  if (!collection) return null;
  return <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" data-api-unique-id='platesinspectorpanel-r28cee490287239ed-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
      <div className="w-full max-w-4xl h-full bg-background text-foreground shadow-2xl flex flex-col border-l border-border overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="plates-inspector-title" data-api-unique-id='platesinspectorpanel-r9cc5722aaaae8274-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
        {/* Contact Sheet Desk Header */}
        <div className="shrink-0 px-6 py-4 border-b border-border bg-card text-card-foreground flex items-center justify-between" data-api-unique-id='platesinspectorpanel-r2b2369a0c98ff2ae-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
          <div className="flex items-center gap-3 min-w-0" data-api-unique-id='platesinspectorpanel-r4fed9de30d7c4b9c-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
            <div className="w-9 h-9 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 border border-border" data-api-unique-id='platesinspectorpanel-r9a96fbe1b0177ac6-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <Film className="w-5 h-5 text-primary" data-api-unique-id='platesinspectorpanel-re20890cca839acf7-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
            </div>
            <div className="min-w-0" data-api-unique-id='platesinspectorpanel-rfc65ce8a62397c84-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <div className="flex items-center gap-2" data-api-unique-id='platesinspectorpanel-r3b510529e329b04b-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border font-semibold" data-api-unique-id='platesinspectorpanel-rfb1779fbcb070194-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  {collection.rollNumber}
                </span>
                <span className="text-xs text-muted-foreground" data-api-unique-id='platesinspectorpanel-re20b17b7918bb0f3-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>Master Plates Index</span>
              </div>
              <h2 id="plates-inspector-title" className="text-lg font-semibold truncate text-foreground" data-api-unique-id='platesinspectorpanel-r47134dad7a8bbed3-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                {collection.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3" data-api-unique-id='platesinspectorpanel-r88165873da01dd51-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
            <div className="text-right hidden sm:block" data-api-unique-id='platesinspectorpanel-r2bdfe98ced575221-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <div className="text-xs font-mono font-medium text-foreground" data-api-unique-id='platesinspectorpanel-r25acb6005e79bfab-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                {plates.length} / {collection.imageCount} Proofed
              </div>
              <div className="text-[11px] text-muted-foreground" data-api-unique-id='platesinspectorpanel-r14ff26ea16e53f6b-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                {collection.medium}
              </div>
            </div>
            <button type="button" onClick={onClose} className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Close inspector" data-api-unique-id='platesinspectorpanel-rac7338cf26bd9799-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <X className="w-5 h-5" data-api-unique-id='platesinspectorpanel-r02789fc10d12df1f-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
            </button>
          </div>
        </div>

        {/* Darkroom Contact Sheet Main Body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-muted/20" data-api-unique-id='platesinspectorpanel-r0125b03ca78b0f2f-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-card p-4 rounded-lg border border-border text-card-foreground" data-api-unique-id='platesinspectorpanel-r338cdcef4587d38c-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
            <div data-api-unique-id='platesinspectorpanel-rac424bfd0d518ab3-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground" data-api-unique-id='platesinspectorpanel-re0ec558a5e4ac50f-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                Curatorial Statement & Verification
              </div>
              <p className="text-sm mt-1 text-foreground leading-relaxed" data-api-unique-id='platesinspectorpanel-rbdc926be378c89a5-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                {collection.curatorNote || "No darkroom calibration notes recorded for this emulsion sequence."}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0" data-api-unique-id='platesinspectorpanel-r3e2fbed8189f1235-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              {collection.isVisible ? <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" data-api-unique-id='platesinspectorpanel-rcab52a6604ad7768-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <CheckCircle2 className="w-3.5 h-3.5" data-api-unique-id='platesinspectorpanel-r8c59d34c09ce2e70-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
                  Public Wall Active
                </span> : <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20" data-api-unique-id='platesinspectorpanel-r919c5bab3b47b7e9-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  Archived / Pre-release
                </span>}
            </div>
          </div>

          {/* Plates Grid - Darkroom Lightbox Proofing Grid */}
          <div className="space-y-4" data-api-unique-id='platesinspectorpanel-r2374da08b3cce46c-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
            <div className="flex items-center justify-between" data-api-unique-id='platesinspectorpanel-r21f75fba15c1d5d1-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <h3 className="text-sm font-semibold tracking-wide text-foreground flex items-center gap-2" data-api-unique-id='platesinspectorpanel-rf1e8cb89e5f2bd4f-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                <Layers className="w-4 h-4 text-primary" data-api-unique-id='platesinspectorpanel-rf0aa49b8c3ae0cfc-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
                Linked Master Plate Negatives ({plates.length})
              </h3>
              <span className="text-xs text-muted-foreground" data-api-unique-id='platesinspectorpanel-rc9e1e290fc135c90-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                Click plate to inspect silver gelatin & edition details
              </span>
            </div>

            {plates.length === 0 ? <div className="text-center py-16 bg-card rounded-lg border border-dashed border-border p-6 text-card-foreground" data-api-unique-id='platesinspectorpanel-rabbdc2a722feb029-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                <Camera className="w-10 h-10 mx-auto text-muted-foreground mb-3 opacity-60" data-api-unique-id='platesinspectorpanel-r90975bef312816c2-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
                <h4 className="text-sm font-medium text-foreground" data-api-unique-id='platesinspectorpanel-r9e5bc9737822720b-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>No Master Plates Linked</h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto" data-api-unique-id='platesinspectorpanel-r23325927303c6d52-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  Master photography works assigned to collection ID {collection.id} will display here in lightbox contact sheet view.
                </p>
              </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-api-unique-id='platesinspectorpanel-r55e34f4d4bda0369-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                {plates.map((plate, index) => {
              const isSelected = selectedPlate?.id === plate.id;
              return <article key={plate.id} onClick={() => setSelectedPlate(plate)} className={`group cursor-pointer rounded-lg border transition-all duration-150 overflow-hidden bg-card text-card-foreground flex flex-col ${isSelected ? "border-primary shadow-md" : "border-border hover:border-border/80 hover:shadow-sm"}`} data-api-unique-id='platesinspectorpanel-r7332edd364bc9859-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                      {/* Negative Proof Image Header */}
                      <div className="relative aspect-[4/3] bg-muted overflow-hidden border-b border-border" data-api-unique-id='platesinspectorpanel-ra0e09c075bd44569-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                        <EditableImg propKey={`plate-thumb-${plate.id}`} src={plate.imageUrl} alt={plate.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" data-api-unique-id='platesinspectorpanel-r96803af23c1009c5-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' />
                        <div className="absolute top-2 left-2 flex items-center gap-1.5" data-api-unique-id='platesinspectorpanel-r918fdba1cd7d7f07-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-white backdrop-blur-xs font-semibold" data-api-unique-id='platesinspectorpanel-r9dc14974ee7c3789-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                            #{String(index + 1).padStart(2, "0")}
                          </span>
                          {plate.isFeatured && <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-primary text-primary-foreground font-semibold" data-api-unique-id='platesinspectorpanel-re0afdee1cf58585c-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                              KEY
                            </span>}
                        </div>
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" data-api-unique-id='platesinspectorpanel-rf139cf41a98c2197-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                          <span className="p-1 rounded bg-black/60 text-white backdrop-blur-xs inline-flex" data-api-unique-id='platesinspectorpanel-r5590575584bddee1-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                            <Maximize2 className="w-3.5 h-3.5" data-api-unique-id='platesinspectorpanel-rd4b79f2398697563-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' />
                          </span>
                        </div>
                      </div>

                      {/* Plate Metadata Details */}
                      <div className="p-3.5 flex-1 flex flex-col justify-between text-xs min-w-0" data-api-unique-id='platesinspectorpanel-ra0c752c49bbf427b-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                        <div data-api-unique-id='platesinspectorpanel-r2b6aa6a78020ed43-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                          <div className="flex items-start justify-between gap-1 mb-1" data-api-unique-id='platesinspectorpanel-r1394e6bb9919fa13-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                            <h4 className="font-semibold text-foreground truncate min-w-0 flex-1" title={plate.title} data-api-unique-id='platesinspectorpanel-r62c9dacb69038c2f-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' data-api-bind-info={`plates-${index}-title`} data-api-map-var-name='plate'>
                              {plate.title}
                            </h4>
                            <span className="font-mono text-muted-foreground shrink-0" data-api-unique-id='platesinspectorpanel-r3f0ce5de60291099-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' data-api-bind-info={`plates-${index}-year`} data-api-map-var-name='plate'>
                              {plate.year}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-muted-foreground text-[11px] mb-2 truncate" data-api-unique-id='platesinspectorpanel-r282c4ef0451ffe36-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                            <MapPin className="w-3 h-3 shrink-0" data-api-unique-id='platesinspectorpanel-r7d703a63abf59bda-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' />
                            <span className="truncate" data-api-unique-id='platesinspectorpanel-ra7aab019ceaf98e2-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>{plate.location || "Studio Archive"}</span>
                          </div>

                          <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed" data-api-unique-id='platesinspectorpanel-rac9e563d4681e253-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' data-api-bind-info={`plates-${index}-statement`} data-api-map-var-name='plate'>
                            {plate.statement}
                          </p>
                        </div>

                        <div className="pt-2.5 mt-2.5 border-t border-border flex items-center justify-between text-[11px] font-mono" data-api-unique-id='platesinspectorpanel-rea856d2b5cb0e3ed-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1'>
                          <span className="text-muted-foreground truncate max-w-[120px]" data-api-unique-id='platesinspectorpanel-r2b94e3a59738fab9-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' data-api-bind-info={`plates-${index}-edition`} data-api-map-var-name='plate'>
                            {plate.edition}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground" data-api-unique-id='platesinspectorpanel-rcc81ef2ef4d04ad0-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' data-api-in-loop='1' data-api-bind-info={`plates-${index}-aspectRatio`} data-api-map-var-name='plate'>
                            {plate.aspectRatio}
                          </span>
                        </div>
                      </div>
                    </article>;
            })}
              </div>}
          </div>

          {/* Selected Plate Detail Inspector Modal / Expand View */}
          {selectedPlate && <div className="mt-6 p-4 rounded-lg bg-card border border-border text-card-foreground" data-api-unique-id='platesinspectorpanel-red23d64ef4bf2d87-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              <div className="flex items-center justify-between pb-3 border-b border-border" data-api-unique-id='platesinspectorpanel-rddc5f693dd779dbf-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                <div className="flex items-center gap-2" data-api-unique-id='platesinspectorpanel-r1326cf6666d9dea0-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <span className="w-2 h-2 rounded-full bg-primary" data-api-unique-id='platesinspectorpanel-r86c518dfd6f5c5a2-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
                  <h4 className="text-sm font-semibold text-foreground" data-api-unique-id='platesinspectorpanel-r77c3ae2a385fd8dd-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                    Master Plate Detail: {selectedPlate.title}
                  </h4>
                </div>
                <button type="button" onClick={() => setSelectedPlate(null)} className="text-xs text-muted-foreground hover:text-foreground p-1 transition-colors" data-api-unique-id='platesinspectorpanel-ra5fa28c1396abc09-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  Close Inspection
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs" data-api-unique-id='platesinspectorpanel-r232b630872db87fb-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                <div data-api-unique-id='platesinspectorpanel-r8d5da3de5cbf1b94-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <span className="text-muted-foreground block text-[11px] uppercase tracking-wider mb-1" data-api-unique-id='platesinspectorpanel-r4472101bebd1dbff-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                    Archival Medium & Process
                  </span>
                  <div className="font-medium text-foreground" data-api-unique-id='platesinspectorpanel-r65eeaad3d5b9ba7c-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>{selectedPlate.medium}</div>
                </div>
                <div data-api-unique-id='platesinspectorpanel-r666bf882141083ec-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <span className="text-muted-foreground block text-[11px] uppercase tracking-wider mb-1" data-api-unique-id='platesinspectorpanel-r61c40089bd64220f-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                    Print Edition Limit
                  </span>
                  <div className="font-mono text-foreground" data-api-unique-id='platesinspectorpanel-rb3b31a22a3da912e-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>{selectedPlate.edition}</div>
                </div>
                <div data-api-unique-id='platesinspectorpanel-r7cd91150f52c7091-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <span className="text-muted-foreground block text-[11px] uppercase tracking-wider mb-1" data-api-unique-id='platesinspectorpanel-rcefeb43785bb6962-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                    Capture Provenance / Location
                  </span>
                  <div className="text-foreground" data-api-unique-id='platesinspectorpanel-r53d838eb72d01b19-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>{selectedPlate.location} ({selectedPlate.year})</div>
                </div>
                <div data-api-unique-id='platesinspectorpanel-r146f814cbed72217-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <span className="text-muted-foreground block text-[11px] uppercase tracking-wider mb-1" data-api-unique-id='platesinspectorpanel-r52990db1a48d67a4-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                    Series Association
                  </span>
                  <div className="text-foreground font-medium" data-api-unique-id='platesinspectorpanel-rcad21b132e9e85d9-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>{selectedPlate.seriesName}</div>
                </div>
                <div className="md:col-span-2 pt-2 border-t border-border" data-api-unique-id='platesinspectorpanel-r56998ac5ecde058b-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                  <span className="text-muted-foreground block text-[11px] uppercase tracking-wider mb-1" data-api-unique-id='platesinspectorpanel-r0a3d0dce26e0eed5-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                    Artist Monograph Statement
                  </span>
                  <p className="text-foreground leading-relaxed" data-api-unique-id='platesinspectorpanel-r1f67b251ab04fffa-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>{selectedPlate.statement}</p>
                </div>
              </div>
            </div>}
        </div>

        {/* Inspector Footer Actions */}
        <div className="shrink-0 px-6 py-3.5 border-t border-border bg-card text-card-foreground flex items-center justify-between" data-api-unique-id='platesinspectorpanel-r104e9186eb99e7e8-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
          <div className="text-xs text-muted-foreground flex items-center gap-2" data-api-unique-id='platesinspectorpanel-rbef1d13d1d6bf83b-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
            <span data-api-unique-id='platesinspectorpanel-r5065782e7eafbdd5-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>Series ID:</span>
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-[11px] text-foreground" data-api-unique-id='platesinspectorpanel-r13fcb3ab86a6bfc0-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              {collection.id}
            </code>
          </div>

          <div className="flex items-center gap-3" data-api-unique-id='platesinspectorpanel-r96807b1eb222be5d-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
            {onOpenEditFolio && <button type="button" onClick={onOpenEditFolio} className="px-3 py-1.5 rounded-md text-xs font-medium border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors inline-flex items-center gap-1.5" data-api-unique-id='platesinspectorpanel-r8bbf608535db7347-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                <Edit3 className="w-3.5 h-3.5" data-api-unique-id='platesinspectorpanel-r4cb1d88fee6a305a-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel' />
                Edit Folio
              </button>}
            {onQuickToggleWallVisible && <button type="button" onClick={() => onQuickToggleWallVisible(collection.id)} className="px-3 py-1.5 rounded-md text-xs font-medium border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors" data-api-unique-id='platesinspectorpanel-r41f29dbbda2a37f5-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
                {collection.isVisible ? "Take Off Public Wall" : "Publish to Public Wall"}
              </button>}
            <button type="button" onClick={onClose} className="px-4 py-1.5 rounded-md text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" data-api-unique-id='platesinspectorpanel-r090df76532b3dde6-s3072012207' data-api-unique-page-name='src/backend/components/CollectionsManager/PlatesInspectorPanel'>
              Done Proofing
            </button>
          </div>
        </div>
      </div>
    </div>;
}