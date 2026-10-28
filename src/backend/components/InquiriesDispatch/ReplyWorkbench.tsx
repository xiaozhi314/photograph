"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Lock, Calendar, DollarSign, Camera, ExternalLink, CheckCircle2, FileCheck2, Sparkles } from "lucide-react";
import { CommissionInquiryDTO } from "@/backend/types/InquiriesDispatch";
import { StudioSettings } from "@/backend/route-params";
import { toast } from "sonner";
interface ReplyWorkbenchProps {
  inquiry: CommissionInquiryDTO;
  onDispatchReply: (replyText: string) => void;
  onNavigateToPackageRates?: () => void;
}
export default function ReplyWorkbench({
  inquiry,
  onDispatchReply,
  onNavigateToPackageRates
}: ReplyWorkbenchProps) {
  const router = useRouter();
  const isReplied = inquiry.status === "REPLIED";
  const [availabilitySchedule, setAvailabilitySchedule] = useState("Target Studio Shoot: Window opens within 14 business days. On-location scouting preliminaries confirmed for week 2.");
  const [rateQuote, setRateQuote] = useState(inquiry.servicePackage ? `${inquiry.servicePackage.priceDisplay} (Custom archive grade proofing + digital master licensing included)` : `${inquiry.budgetTier} - Tailored commissioning fee including post-production suite`);
  const [equipmentSpecs, setEquipmentSpecs] = useState("Hasselblad H6D-100c medium format back, Profoto B10X continuous & strobe system, archival gelatin silver or pigment print proofs.");
  const [curatorialNote, setCuratorialNote] = useState(`Dear ${inquiry.clientName},\n\nThank you for reaching out regarding this ${inquiry.projectType.toLowerCase()} commission. Julian Vane Atelier has carefully assessed your timeline and location requirements. We are pleased to confirm studio availability and would welcome scheduling our primary creative briefing.`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!curatorialNote.trim()) {
      toast.error("Please provide consultation response notes before dispatching.");
      return;
    }
    setIsSubmitting(true);
    const compiledReply = `[CURATORIAL DISPATCH NOTICE]\n\n${curatorialNote.trim()}\n\n---\n• Production Schedule: ${availabilitySchedule}\n• Estimated Rate / Investment: ${rateQuote}\n• Technical Specifications: ${equipmentSpecs}`;
    try {
      onDispatchReply(compiledReply);
    } catch {
      toast.error("Failed to initiate dispatch. Please retry.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleTemplateInsert = (type: "standard" | "urgent") => {
    if (type === "standard") {
      setAvailabilitySchedule("Two-week lead time confirmed. Atelier pre-production call scheduled.");
      toast.info("Standard production schedule inserted.");
    } else {
      setAvailabilitySchedule("Expedited dispatch track prioritized. Studio darkroom slot held for 48h.");
      toast.info("Expedited dispatch template inserted.");
    }
  };
  const handleReviewRates = () => {
    if (onNavigateToPackageRates) {
      onNavigateToPackageRates();
    } else {
      StudioSettings.navigateTo(router);
    }
  };
  return <div data-controller-name="Curator Consultation Workbench" className="bg-card text-card-foreground border border-border rounded-lg shadow-sm flex flex-col min-w-0" data-api-unique-id='replyworkbench-ra0c41964a789e56a-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
      {/* Workbench Header */}
      <div className="p-4 border-b border-border flex flex-col gap-2" data-api-unique-id='replyworkbench-r3ad461a64d8b9ccf-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
        <div className="flex items-center justify-between gap-2 min-w-0" data-api-unique-id='replyworkbench-rb446738c219c43b2-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
          <div className="flex items-center gap-2 min-w-0" data-api-unique-id='replyworkbench-r955831941de62c41-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
            {isReplied ? <div className="p-1.5 rounded bg-muted text-foreground shrink-0" data-api-unique-id='replyworkbench-rec735d74fc88c9b3-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <Lock className="w-4 h-4 text-primary" data-api-unique-id='replyworkbench-r9627a6328de88ca0-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              </div> : <div className="p-1.5 rounded bg-primary text-primary-foreground shrink-0" data-api-unique-id='replyworkbench-rf82d20cbad73f638-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <Send className="w-4 h-4" data-api-unique-id='replyworkbench-ra142d2e8606b27fb-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              </div>}
            <div className="min-w-0" data-api-unique-id='replyworkbench-r9ec1d5bdf794c363-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <h3 className="text-sm font-semibold text-card-foreground truncate" data-api-unique-id='replyworkbench-re6aeff0af3b6bd53-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                {isReplied ? "Archived Dispatch Voucher" : "Curator Consultation Workbench"}
              </h3>
              <p className="text-xs text-muted-foreground truncate" data-api-unique-id='replyworkbench-rcc30bb7931575a7a-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                {isReplied ? "Read-only dispatch record certified by atelier administration" : "Draft formal availability, fee schedule, and gear specifications"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0" data-api-unique-id='replyworkbench-r6af10d9adabf15c4-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
            {/* Quick link to B07 Studio Services */}
            <button type="button" onClick={handleReviewRates} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded border border-border bg-card text-card-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" title="Inspect standard tiers & deliverables in Studio Services (B07)" data-api-unique-id='replyworkbench-rf8e928c91f02ad3e-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <ExternalLink className="w-3.5 h-3.5 text-primary" data-api-unique-id='replyworkbench-rd9a9f5bb8a756c99-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              <span data-api-unique-id='replyworkbench-r7a5800ce50b28914-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>Review Rates</span>
              <span className="font-mono text-[10px] text-muted-foreground" data-api-unique-id='replyworkbench-rcec2f644c090be97-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>[B07]</span>
            </button>
          </div>
        </div>
      </div>

      {/* Workbench Content */}
      <div className="p-4 flex-1" data-api-unique-id='replyworkbench-ra45cfd00adae64e7-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
        {isReplied ? (/* READ-ONLY LOCKED DISPATCH LOG */
      <div className="space-y-4" data-api-unique-id='replyworkbench-rfb806114ae3e9b45-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
            <div className="bg-muted p-3.5 rounded-md border border-border flex items-start gap-3" data-api-unique-id='replyworkbench-r54e2ca85721ed38f-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <FileCheck2 className="w-5 h-5 text-success shrink-0 mt-0.5" data-api-unique-id='replyworkbench-r506db4eb4e55d140-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              <div className="text-xs space-y-1 min-w-0 flex-1" data-api-unique-id='replyworkbench-rb782d354f95b8e69-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <div className="flex flex-wrap items-center justify-between gap-2" data-api-unique-id='replyworkbench-r1ad5cecafa595670-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  <span className="font-semibold text-foreground" data-api-unique-id='replyworkbench-rf5d5f4624ebf9ede-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                    Consultation Dispatched & Locked
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground" data-api-unique-id='replyworkbench-r36a5284debcfa525-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                    {inquiry.repliedAt || "Dispatch Recorded"}
                  </span>
                </div>
                <p className="text-muted-foreground" data-api-unique-id='replyworkbench-re7419c44ab4e0609-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  Certified by:{" "}
                  <strong className="text-foreground" data-api-unique-id='replyworkbench-rde0af0190d3b1b37-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                    {inquiry.repliedByName || "Julian Vane (Curator Admin)"}
                  </strong>
                </p>
              </div>
            </div>

            <div className="space-y-1.5" data-api-unique-id='replyworkbench-r04365df8d9431662-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider" data-api-unique-id='replyworkbench-recbe1f54e43591e1-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                Certified Response Body
              </label>
              <div className="p-4 rounded-md bg-secondary text-secondary-foreground border border-border text-xs whitespace-pre-wrap font-mono leading-relaxed max-h-[340px] overflow-y-auto" data-api-unique-id='replyworkbench-r9082ba0affcdf28d-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                {inquiry.curatorReply || "No formal reply body recorded in archive log for this entry."}
              </div>
            </div>

            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 pt-2 border-t border-border" data-api-unique-id='replyworkbench-ra6a43f96c627e97e-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" data-api-unique-id='replyworkbench-rd653892507adf163-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              <span data-api-unique-id='replyworkbench-r61b8ab3b2ecb5f6d-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                Immutable legal proof: This consultation voucher has been sealed and dispatched to the
                client.
              </span>
            </div>
          </div>) : (/* ACTIVE DRAFTING WORKBENCH */
      <form onSubmit={handleDispatch} className="space-y-4" data-api-unique-id='replyworkbench-r4af07d9d8d304589-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
            {/* Template helpers */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded bg-muted border border-border text-xs" data-api-unique-id='replyworkbench-r26cfe31167dd26de-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <span className="text-muted-foreground flex items-center gap-1" data-api-unique-id='replyworkbench-r48002122ed9f6be9-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <Sparkles className="w-3.5 h-3.5 text-primary" data-api-unique-id='replyworkbench-r6c4fe535b0c8fae5-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
                <span data-api-unique-id='replyworkbench-ra0e9a27a5b64459d-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>Atelier Presets:</span>
              </span>
              <div className="flex items-center gap-1.5" data-api-unique-id='replyworkbench-r1d0b25dac5217804-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <button type="button" onClick={() => handleTemplateInsert("standard")} className="px-2 py-1 rounded bg-card text-card-foreground border border-border hover:bg-secondary text-[11px] font-medium transition-colors" data-api-unique-id='replyworkbench-r0dc6106dd5f7a9a1-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  Standard 14d Lead
                </button>
                <button type="button" onClick={() => handleTemplateInsert("urgent")} className="px-2 py-1 rounded bg-card text-card-foreground border border-border hover:bg-secondary text-[11px] font-medium transition-colors" data-api-unique-id='replyworkbench-ra5247513d236e998-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  Expedited Track
                </button>
              </div>
            </div>

            {/* Note Textarea */}
            <div className="space-y-1.5" data-api-unique-id='replyworkbench-rc9c1557e1f33f5ca-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <label className="text-xs font-medium text-card-foreground flex items-center justify-between" data-api-unique-id='replyworkbench-r76feeb7c57479edf-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <span data-api-unique-id='replyworkbench-rb1c682a4c1d1766d-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>Formal Curatorial Note to Client</span>
                <span className="text-[11px] text-muted-foreground font-normal" data-api-unique-id='replyworkbench-r4cdb2567dfd44b7e-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  Plaintext & schedule memo
                </span>
              </label>
              <textarea rows={4} value={curatorialNote} onChange={e => setCuratorialNote(e.target.value)} required className="w-full text-xs rounded-md border border-input bg-card text-card-foreground p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring leading-relaxed resize-y" placeholder="Compose consultation dispatch message..." data-api-unique-id='replyworkbench-rf929aad0be71872d-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-1 gap-3" data-api-unique-id='replyworkbench-r5f660a97948f67da-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              {/* Production Schedule */}
              <div className="space-y-1" data-api-unique-id='replyworkbench-r907e90b91ae020e0-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <label className="text-xs font-medium text-card-foreground flex items-center gap-1" data-api-unique-id='replyworkbench-r26a9eca4c9bf5450-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  <Calendar className="w-3.5 h-3.5 text-primary" data-api-unique-id='replyworkbench-r72518035bb5b20c0-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
                  <span data-api-unique-id='replyworkbench-rab4156d754e86189-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>Production Schedule & Availability</span>
                </label>
                <input type="text" value={availabilitySchedule} onChange={e => setAvailabilitySchedule(e.target.value)} className="w-full text-xs rounded-md border border-input bg-card text-card-foreground px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='replyworkbench-r794d5778e1a2659a-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              </div>

              {/* Rate Quote */}
              <div className="space-y-1" data-api-unique-id='replyworkbench-r11d6d7547fb4eedd-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <label className="text-xs font-medium text-card-foreground flex items-center gap-1" data-api-unique-id='replyworkbench-r37e511579a873c07-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  <DollarSign className="w-3.5 h-3.5 text-primary" data-api-unique-id='replyworkbench-reb5ece1c8a79e034-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
                  <span data-api-unique-id='replyworkbench-r3d1c9797c4b2bb7a-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>Custom Quote & Payment Structure</span>
                </label>
                <input type="text" value={rateQuote} onChange={e => setRateQuote(e.target.value)} className="w-full text-xs rounded-md border border-input bg-card text-card-foreground px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='replyworkbench-rae46e45401e1b953-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              </div>

              {/* Equipment Specifications */}
              <div className="space-y-1" data-api-unique-id='replyworkbench-re36d47f094d5a764-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <label className="text-xs font-medium text-card-foreground flex items-center gap-1" data-api-unique-id='replyworkbench-rbdc6b575f63e72a2-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                  <Camera className="w-3.5 h-3.5 text-primary" data-api-unique-id='replyworkbench-r26f11b73140d681f-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
                  <span data-api-unique-id='replyworkbench-r42795c3ab2486513-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>Equipment & Medium Format Configuration</span>
                </label>
                <input type="text" value={equipmentSpecs} onChange={e => setEquipmentSpecs(e.target.value)} className="w-full text-xs rounded-md border border-input bg-card text-card-foreground px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='replyworkbench-r994f8ebc4ba79e5e-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-border" data-api-unique-id='replyworkbench-rde53cef405ec207f-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
              <span className="text-[11px] text-muted-foreground" data-api-unique-id='replyworkbench-rb7ee4cd9b77437cd-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                Dispatched messages will seal this inquiry in REPLIED status.
              </span>
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 transition-colors shadow-sm shrink-0" data-api-unique-id='replyworkbench-r4ba861e92cd7f0cd-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>
                <Send className="w-3.5 h-3.5" data-api-unique-id='replyworkbench-r4c45f40bdb380681-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench' />
                <span data-api-unique-id='replyworkbench-r7a2d58335cee4181-s2278849897' data-api-unique-page-name='src/backend/components/InquiriesDispatch/ReplyWorkbench'>{isSubmitting ? "Dispatching..." : "Dispatch Response"}</span>
              </button>
            </div>
          </form>)}
      </div>
    </div>;
}