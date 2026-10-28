"use client";

import React, { useState, useEffect } from "react";
import { CommissionInquiryItem, InquiryStatus } from "@/frontend/types/ClientPortal";
import { FileText, MapPin, Calendar, DollarSign, Package, Sparkles, CheckCircle2, Edit3, Save, Stamp, ShieldCheck, UserCheck, Layers } from "lucide-react";
import { toast } from "sonner";
interface InspectorPaneProps {
  brief: CommissionInquiryItem | null;
  onUpdateClientMessage: (briefId: string, newMessage: string) => Promise<void> | void;
}
export default function InspectorPane({
  brief,
  onUpdateClientMessage
}: InspectorPaneProps) {
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [editedNote, setEditedNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    if (brief) {
      setEditedNote(brief.clientMessage || "");
      setIsEditingNotes(false);
    }
  }, [brief?.id, brief?.clientMessage]);
  if (!brief) {
    return <div data-controller-name="Inquiry Brief Inspector" className="h-full rounded-xl border border-border bg-card p-12 text-card-foreground flex flex-col items-center justify-center text-center" data-api-unique-id='inspectorpane-r1cdc87692260615d-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-4" data-api-unique-id='inspectorpane-r2a0475456366080a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <FileText className="h-8 w-8" data-api-unique-id='inspectorpane-r5ee8a5d14a036a6e-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
        </div>
        <h3 className="font-serif text-xl font-medium text-card-foreground mb-2" data-api-unique-id='inspectorpane-rf4145124a4c5df85-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          Select a Commission Brief
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm" data-api-unique-id='inspectorpane-rdc1a9ef2caf9d4bf-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          Select any commission dossier from the archive index on the left to examine client specifications, delivery parameters, and studio dispatches.
        </p>
      </div>;
  }
  const handleSaveMessage = async () => {
    try {
      setIsSaving(true);
      await onUpdateClientMessage(brief.id, editedNote);
      setIsEditingNotes(false);
      toast.success("Supplementary project notes updated successfully");
    } catch {
      toast.error("Failed to update supplementary notes");
    } finally {
      setIsSaving(false);
    }
  };
  const getStatusBadge = (status: InquiryStatus) => {
    switch (status) {
      case "NEW":
        return {
          label: "Registered / Intake Pending",
          className: "bg-muted text-muted-foreground border-border"
        };
      case "IN_REVIEW":
        return {
          label: "Darkroom Curation In Progress",
          className: "bg-primary text-primary-foreground border-primary"
        };
      case "REPLIED":
        return {
          label: "Studio Dispatch Issued",
          className: "bg-success text-success-foreground border-success"
        };
    }
  };
  const statusBadge = getStatusBadge(brief.status);
  const formatCreationDate = (dateVal: Date | string) => {
    if (!dateVal) return "";
    const d = typeof dateVal === "string" ? new Date(dateVal) : dateVal;
    return isNaN(d.getTime()) ? String(dateVal) : d.toISOString().split("T")[0];
  };
  return <div data-controller-name="Inquiry Brief Inspector" className="h-full rounded-xl border border-border bg-card text-card-foreground flex flex-col min-h-0 overflow-hidden shadow-sm" data-api-unique-id='inspectorpane-r5d27f6d4397fb4ba-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
      {/* Inspector Top Bar / Dossier Identity */}
      <div className="p-5 border-b border-border bg-muted/30 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" data-api-unique-id='inspectorpane-rfbb57d286775ddf0-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
        <div className="min-w-0" data-api-unique-id='inspectorpane-r2956f04bb225ba8c-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <div className="flex items-center gap-2 mb-1" data-api-unique-id='inspectorpane-ra6f79917fb7b6511-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold" data-api-unique-id='inspectorpane-r1aa702cfbc174560-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              Archival Record #{brief.id.slice(-6).toUpperCase()}
            </span>
            <span className="text-border" data-api-unique-id='inspectorpane-r732ff4b0e239baf3-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>·</span>
            <span className="font-mono text-xs text-muted-foreground" data-api-unique-id='inspectorpane-r484e1ae52b6c215e-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              Lodged {formatCreationDate(brief.createdAt)}
            </span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-card-foreground truncate" data-api-unique-id='inspectorpane-rf5cc267621108b9a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            {brief.projectBrief ? brief.projectBrief.slice(0, 60) + (brief.projectBrief.length > 60 ? "..." : "") : "Untitled Commission"}
          </h2>
        </div>

        <div className="shrink-0 flex items-center gap-2" data-api-unique-id='inspectorpane-r7ed1e188a40005f6-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${statusBadge.className}`} data-api-unique-id='inspectorpane-rec6751b148d638d2-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <span className="h-1.5 w-1.5 rounded-full bg-current" data-api-unique-id='inspectorpane-r43ff3cd16792e99d-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
            {statusBadge.label}
          </span>
        </div>
      </div>

      {/* Main Inspector Scrollable Canvas */}
      <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-6 space-y-6" data-api-unique-id='inspectorpane-rf8c2e7ee012825dd-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
        {/* Specification Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" data-api-unique-id='inspectorpane-rf8d5374cce8f6da1-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <div className="p-3.5 rounded-lg border border-border bg-secondary/30" data-api-unique-id='inspectorpane-r1bdf7114c44fdaed-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1" data-api-unique-id='inspectorpane-rccba5fbc1e3ead6e-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <Package className="h-3.5 w-3.5 text-primary" data-api-unique-id='inspectorpane-r53e8f1069c5e50b0-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <span data-api-unique-id='inspectorpane-r490c58f8b7ad6e52-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>Project Type</span>
            </div>
            <p className="font-medium text-sm text-card-foreground" data-api-unique-id='inspectorpane-r8c9cc93355cc97b4-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              {brief.projectType}
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-secondary/30" data-api-unique-id='inspectorpane-rb5f3b05d3efd16f0-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1" data-api-unique-id='inspectorpane-r7c6f185dbf293f9b-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <DollarSign className="h-3.5 w-3.5 text-primary" data-api-unique-id='inspectorpane-rbd7a5602e98c3e15-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <span data-api-unique-id='inspectorpane-r614beeb2011aade5-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>Budget Tier</span>
            </div>
            <p className="font-medium text-sm text-card-foreground" data-api-unique-id='inspectorpane-r01349c1a11411996-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              {brief.budgetTier}
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-secondary/30" data-api-unique-id='inspectorpane-r4495066233eea6da-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1" data-api-unique-id='inspectorpane-rdcd6c006372a0605-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <Calendar className="h-3.5 w-3.5 text-primary" data-api-unique-id='inspectorpane-rd7f35788ad7b1f5a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <span data-api-unique-id='inspectorpane-r0f49c73053d69d9c-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>Delivery Timeline</span>
            </div>
            <p className="font-medium text-sm text-card-foreground" data-api-unique-id='inspectorpane-r1799f3ba9d613f75-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              {brief.targetTimeline}
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-secondary/30" data-api-unique-id='inspectorpane-r0f5c82d34b6c898b-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-1" data-api-unique-id='inspectorpane-r7111d3943b46520c-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <MapPin className="h-3.5 w-3.5 text-primary" data-api-unique-id='inspectorpane-r1c0bd607e015bd01-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <span data-api-unique-id='inspectorpane-r5afe79567c783e8b-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>Shoot Location</span>
            </div>
            <p className="font-medium text-sm text-card-foreground truncate" data-api-unique-id='inspectorpane-r5d15612160429f62-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              {brief.location || "Location TBD"}
            </p>
          </div>
        </div>

        {/* Linked Service Package & Scope Deliverables */}
        <div className="p-4 sm:p-5 rounded-lg border border-border bg-muted/20" data-api-unique-id='inspectorpane-rc9986fb147448901-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <div className="flex items-center justify-between mb-3" data-api-unique-id='inspectorpane-r63f6fd7ca2bcdf78-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <div className="flex items-center gap-2" data-api-unique-id='inspectorpane-r68b173c27f6f7b24-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <Layers className="h-4 w-4 text-primary" data-api-unique-id='inspectorpane-re856de320de63a75-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <h4 className="font-serif text-base font-medium text-card-foreground" data-api-unique-id='inspectorpane-r063ca4372548f4fc-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                Service Package Tier
              </h4>
            </div>
            {brief.servicePackage && <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-primary/10 text-primary font-medium" data-api-unique-id='inspectorpane-rd154a76b15297bd1-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                {brief.servicePackage.priceDisplay}
              </span>}
          </div>

          <p className="text-sm font-medium text-card-foreground mb-3" data-api-unique-id='inspectorpane-re80a303c82bd2a2a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            {brief.servicePackage ? brief.servicePackage.title : "Bespoke Open Commission"}
          </p>

          {brief.servicePackage?.deliverables && brief.servicePackage.deliverables.length > 0 ? <div className="mt-3 pt-3 border-t border-border" data-api-unique-id='inspectorpane-r795367bbaa7cc16f-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <span className="text-xs font-mono text-muted-foreground block mb-2 uppercase tracking-wider" data-api-unique-id='inspectorpane-r7171acc2f6408574-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                Committed Atelier Deliverables
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" data-api-unique-id='inspectorpane-rae58f0d4315a4dbf-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                {brief.servicePackage.deliverables.map((deliv, index) => <li key={index} className="flex items-start gap-2 text-xs text-card-foreground" data-api-unique-id='inspectorpane-rea758d998ef48566-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' data-api-in-loop='1'>
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" data-api-unique-id='inspectorpane-r437e3e37a894fbd0-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' data-api-in-loop='1' />
                    <span data-api-unique-id='inspectorpane-r45c7471bac0767f9-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' data-api-in-loop='1' data-api-bind-info={`brief.servicePackage.deliverables-${index}-$item`} data-api-map-var-name='deliv'>{deliv}</span>
                  </li>)}
              </ul>
            </div> : <p className="text-xs text-muted-foreground" data-api-unique-id='inspectorpane-r1889ee3828990131-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              Custom scope defined via direct darkroom curation dialogue.
            </p>}
        </div>

        {/* Project Statement & Full Brief */}
        <div className="space-y-2" data-api-unique-id='inspectorpane-r7be4b82a3b41ec91-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <div className="flex items-center gap-2" data-api-unique-id='inspectorpane-r8622ef3c479826de-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <FileText className="h-4 w-4 text-primary" data-api-unique-id='inspectorpane-r7fbf434ceacde0e0-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
            <h4 className="font-serif text-base font-medium text-card-foreground" data-api-unique-id='inspectorpane-r6639bd68e062224d-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              Original Commission Scope
            </h4>
          </div>
          <div className="p-4 rounded-lg border border-border bg-background text-foreground text-sm leading-relaxed whitespace-pre-wrap font-sans" data-api-unique-id='inspectorpane-r518892488517db39-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            {brief.projectBrief}
          </div>
        </div>

        {/* Client Supplementary Message / Context (With Inline Editor for NEW briefs) */}
        <div className="space-y-2" data-api-unique-id='inspectorpane-r2404430666cd43e8-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
          <div className="flex items-center justify-between" data-api-unique-id='inspectorpane-rb4642905a3cb708c-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <div className="flex items-center gap-2" data-api-unique-id='inspectorpane-r97cab71d38b677fc-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <Edit3 className="h-4 w-4 text-primary" data-api-unique-id='inspectorpane-rf4f48eab5c1c3df5-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <h4 className="font-serif text-base font-medium text-card-foreground" data-api-unique-id='inspectorpane-r037de9829e7f063c-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                Client Project Notes & Context
              </h4>
            </div>

            {brief.status === "NEW" && !isEditingNotes && <button type="button" onClick={() => setIsEditingNotes(true)} className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors" data-api-unique-id='inspectorpane-rc0ee15918851415b-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                <Edit3 className="h-3.5 w-3.5" data-api-unique-id='inspectorpane-ra0eec6228608dff8-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
                <span data-api-unique-id='inspectorpane-r77338aba0a8307b3-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>Amend Notes</span>
              </button>}
          </div>

          {isEditingNotes ? <div className="p-4 rounded-lg border border-primary/40 bg-background space-y-3" data-api-unique-id='inspectorpane-r6bdc1d2dc8edccf2-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <textarea value={editedNote} onChange={e => setEditedNote(e.target.value)} placeholder="Add supplementary contextual notes, logistical constraints, or reference artists for the curator..." rows={4} className="w-full text-sm text-foreground bg-transparent border-0 focus:ring-0 p-0 resize-none outline-none" data-api-unique-id='inspectorpane-r4c789ac006f64d45-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-border" data-api-unique-id='inspectorpane-rcef44011daf15db4-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                <button type="button" onClick={() => {
              setEditedNote(brief.clientMessage || "");
              setIsEditingNotes(false);
            }} className="px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:bg-muted transition-colors" data-api-unique-id='inspectorpane-rc86ec2ad7d3773da-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  Cancel
                </button>
                <button type="button" disabled={isSaving} onClick={handleSaveMessage} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors disabled:opacity-50" data-api-unique-id='inspectorpane-rc70ebafff036f336-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  <Save className="h-3.5 w-3.5" data-api-unique-id='inspectorpane-rc77ec1d28ff73751-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
                  <span data-api-unique-id='inspectorpane-rb8f6a60ae635156f-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>{isSaving ? "Saving..." : "Save Context Notes"}</span>
                </button>
              </div>
            </div> : <div className="p-4 rounded-lg border border-border bg-secondary/10 text-sm text-card-foreground leading-relaxed" data-api-unique-id='inspectorpane-r49716ffc33256ac6-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              {brief.clientMessage ? <p className="whitespace-pre-wrap" data-api-unique-id='inspectorpane-rb5219e22bb4e6a48-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>{brief.clientMessage}</p> : <p className="text-xs text-muted-foreground italic" data-api-unique-id='inspectorpane-r52153147ebccf357-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  No supplementary notes provided.
                  {brief.status === "NEW" && " Click 'Amend Notes' to append details prior to curatorial review."}
                </p>}
            </div>}
        </div>

        {/* Official Studio Curator Dispatch (Rendered if REPLIED) */}
        {brief.status === "REPLIED" && <div className="relative rounded-lg border-2 border-primary/20 bg-muted/40 p-5 sm:p-6 overflow-hidden" data-api-unique-id='inspectorpane-r7907bb2af233e213-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            {/* Watermark colophon texture */}
            <div className="absolute right-4 top-4 opacity-10 pointer-events-none" data-api-unique-id='inspectorpane-rddad32034ea771a1-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <Stamp className="h-28 w-28 text-primary" data-api-unique-id='inspectorpane-r69efac8ea5fda83d-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
            </div>

            <div className="relative space-y-4" data-api-unique-id='inspectorpane-r58eae07287e847f9-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/80 pb-3" data-api-unique-id='inspectorpane-rc0be26b15702f61b-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                <div className="flex items-center gap-2" data-api-unique-id='inspectorpane-r5ced969760d2a663-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary" data-api-unique-id='inspectorpane-re9f0683a7c8a61d7-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                    <ShieldCheck className="h-4 w-4" data-api-unique-id='inspectorpane-rfc43985d639d8fad-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
                  </div>
                  <div data-api-unique-id='inspectorpane-r50a6cf7cce0fea5a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                    <h4 className="font-serif text-base font-semibold text-card-foreground" data-api-unique-id='inspectorpane-rfa832da80b43ef06-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                      Julian Vane Studio Official Dispatch
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground" data-api-unique-id='inspectorpane-rb3cc82c8f6268285-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                      Curatorial Consultation Docket
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right" data-api-unique-id='inspectorpane-ra6565247d4106426-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  <span className="font-mono text-xs text-muted-foreground block" data-api-unique-id='inspectorpane-r022d0365d7c3fcc1-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                    Dispatched On
                  </span>
                  <span className="font-mono text-xs font-medium text-card-foreground" data-api-unique-id='inspectorpane-r2280e7a6130992be-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                    {brief.repliedAt || "Studio Date Recorded"}
                  </span>
                </div>
              </div>

              {/* Curator Dispatch Letter Body */}
              <div className="text-sm text-card-foreground leading-relaxed space-y-3 font-serif bg-card/60 p-4 rounded border border-border/60" data-api-unique-id='inspectorpane-rbba2a45160436c10-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                <p className="whitespace-pre-wrap" data-api-unique-id='inspectorpane-r04afb1cd44d8118a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  {brief.curatorReply || "The atelier has reviewed the project proposal and prepared bespoke logistical parameters."}
                </p>
              </div>

              {/* Colophon Sign-off & Seal */}
              <div className="flex items-center justify-between pt-2" data-api-unique-id='inspectorpane-re00c691aabbf867b-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                <div className="flex items-center gap-2" data-api-unique-id='inspectorpane-r240a537549b74640-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  <UserCheck className="h-4 w-4 text-primary" data-api-unique-id='inspectorpane-r9ff3f986a072bea7-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
                  <span className="text-xs font-medium text-card-foreground" data-api-unique-id='inspectorpane-r0fe5ed2e85f35851-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                    {brief.repliedByName || "Julian Vane, Principal Curation Director"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-primary uppercase tracking-wider" data-api-unique-id='inspectorpane-ra959499c62e4eda4-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                  <Sparkles className="h-3.5 w-3.5" data-api-unique-id='inspectorpane-r1b19b7516e30e855-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
                  <span data-api-unique-id='inspectorpane-r36676fabe01a1f9e-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>Sealed & Verified</span>
                </div>
              </div>
            </div>
          </div>}

        {/* In-Review Status Note */}
        {brief.status === "IN_REVIEW" && <div className="p-4 rounded-lg border border-primary/30 bg-primary/5 flex items-start gap-3 text-xs text-card-foreground" data-api-unique-id='inspectorpane-r0c81587a00377d89-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
            <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" data-api-unique-id='inspectorpane-r1a5c0cf0fe6ce294-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane' />
            <div data-api-unique-id='inspectorpane-re11c988855ad229a-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
              <p className="font-semibold text-primary mb-1" data-api-unique-id='inspectorpane-rce3a49beb516c0b1-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                Atelier Review In Progress
              </p>
              <p className="text-muted-foreground leading-normal" data-api-unique-id='inspectorpane-rb787f5de342b2294-s1838028392' data-api-unique-page-name='src/frontend/components/ClientPortal/InspectorPane'>
                This commission is currently under technical and schedule evaluation by Julian Vane Studio. An official consultation response and delivery roadmap will be appended to this record upon approval.
              </p>
            </div>
          </div>}
      </div>
    </div>;
}