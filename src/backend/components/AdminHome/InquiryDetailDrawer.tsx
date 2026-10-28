"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { InquiryItem, InquiryStatus } from "@/backend/types/AdminHome";
import { X, Calendar, DollarSign, MapPin, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InquiriesDispatch } from "@/backend/route-params";
interface InquiryDetailDrawerProps {
  inquiry: InquiryItem | null;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: InquiryStatus) => void;
  onSendReply?: (id: string, replyText: string) => void;
}
const statusOptions: Record<InquiryStatus, string> = {
  NEW: "New",
  IN_REVIEW: "In Review",
  REPLIED: "Replied"
};
export default function InquiryDetailDrawer({
  inquiry,
  onClose,
  onUpdateStatus,
  onSendReply
}: InquiryDetailDrawerProps) {
  const router = useRouter();
  if (!inquiry) return null;
  return <InquiryDetailDrawerContent key={inquiry.id} inquiry={inquiry} onClose={onClose} onUpdateStatus={onUpdateStatus} onSendReply={onSendReply} router={router} data-api-unique-id='inquirydetaildrawer-r17ff20896d1652fb-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />;
}
interface InquiryDetailDrawerContentProps {
  inquiry: InquiryItem;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: InquiryStatus) => void;
  onSendReply?: (id: string, replyText: string) => void;
  router: ReturnType<typeof useRouter>;
}
function InquiryDetailDrawerContent({
  inquiry,
  onClose,
  onUpdateStatus,
  onSendReply,
  router
}: InquiryDetailDrawerContentProps) {
  const [replyText, setReplyText] = useState(inquiry.curatorReply || "");
  const [isSending, setIsSending] = useState(false);
  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) {
      toast.error("Please enter consultation response notes before dispatching.");
      return;
    }
    setIsSending(true);
    if (onSendReply) {
      onSendReply(inquiry.id, replyText);
    } else {
      onUpdateStatus(inquiry.id, "REPLIED");
    }
    setReplyText("");
    setIsSending(false);
  };
  const handleMarkInReview = () => {
    onUpdateStatus(inquiry.id, "IN_REVIEW");
  };
  const handleOpenInQueue = () => {
    InquiriesDispatch.navigateToDetail(router, {
      inquiryId: inquiry.id
    });
  };
  return <div className="fixed inset-0 z-50 overflow-hidden bg-background/60 backdrop-blur-sm flex justify-end" data-api-unique-id='inquirydetaildrawer-r89c7427976cd9f85-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
      <div className="relative w-full max-w-lg bg-card text-card-foreground border-l border-border h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200" data-api-unique-id='inquirydetaildrawer-r0e2c445c345dc8af-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-border flex items-start justify-between gap-3 shrink-0" data-api-unique-id='inquirydetaildrawer-rf89d1b706dbe1dba-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
          <div data-api-unique-id='inquirydetaildrawer-r08355a77511d6613-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
            <div className="flex items-center gap-2" data-api-unique-id='inquirydetaildrawer-rc08e0567ccf6c871-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground" data-api-unique-id='inquirydetaildrawer-re60f60bfd5092ca4-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                Inquiry Dispatch Brief
              </span>
              <span className="font-mono text-xs px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground" data-api-unique-id='inquirydetaildrawer-r865741c9ef5c6fd4-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                {inquiry.id}
              </span>
            </div>
            <h3 className="text-lg font-serif font-semibold text-foreground mt-1" data-api-unique-id='inquirydetaildrawer-r0d3ce61d60772caf-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              {inquiry.clientName}
            </h3>
            <p className="text-xs text-muted-foreground font-mono" data-api-unique-id='inquirydetaildrawer-r895a02f50ef544e8-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              {inquiry.clientEmail}
              {inquiry.organization && ` • ${inquiry.organization}`}
            </p>
          </div>
          <div className="flex items-center gap-2" data-api-unique-id='inquirydetaildrawer-r9952b8e029823f55-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
            <button type="button" onClick={handleOpenInQueue} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-sm border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Open in Full Inquiries Queue" data-api-unique-id='inquirydetaildrawer-r4a66847f53f8ad5a-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <span data-api-unique-id='inquirydetaildrawer-r7ad0d0606dd06752-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Queue</span>
              <ExternalLink className="w-3 h-3" data-api-unique-id='inquirydetaildrawer-rb8769e363ff07b9c-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
            </button>
            <button type="button" onClick={onClose} aria-label="Close drawer" className="p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" data-api-unique-id='inquirydetaildrawer-r162c95e1c63ab7b8-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <X className="w-4 h-4" data-api-unique-id='inquirydetaildrawer-raf109c8c5ac9ca34-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-5" data-api-unique-id='inquirydetaildrawer-rcf85af038ebcc59e-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
          {/* Status & Project Quick Info */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-background border border-border/70 text-xs" data-api-unique-id='inquirydetaildrawer-r864e5b796938b795-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
            <div data-api-unique-id='inquirydetaildrawer-r8cf1843e8e790b5f-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <span className="text-muted-foreground block text-[11px] mb-1" data-api-unique-id='inquirydetaildrawer-rf32dadf62f8b856a-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Queue Status</span>
              <Select value={inquiry.status} onValueChange={val => onUpdateStatus(inquiry.id, val as InquiryStatus)} data-api-unique-id='inquirydetaildrawer-ra9f3783993fc8944-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                <SelectTrigger size="sm" className="w-full h-8 text-xs" data-api-unique-id='inquirydetaildrawer-rd58e41da8340f608-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                  <SelectValue placeholder="Status" data-api-unique-id='inquirydetaildrawer-r78d0836c6d30accf-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                    {statusOptions[inquiry.status]}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent data-api-unique-id='inquirydetaildrawer-rc2034cd960611441-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                  <SelectItem value="NEW" data-api-unique-id='inquirydetaildrawer-r01bdbe9b8480c7d7-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>New</SelectItem>
                  <SelectItem value="IN_REVIEW" data-api-unique-id='inquirydetaildrawer-rbc276e1d555c2b0d-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>In Review</SelectItem>
                  <SelectItem value="REPLIED" data-api-unique-id='inquirydetaildrawer-ra4c00bd134612967-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Replied</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div data-api-unique-id='inquirydetaildrawer-r0e4488ae4d877a9a-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <span className="text-muted-foreground block text-[11px] mb-1" data-api-unique-id='inquirydetaildrawer-r19484f73c5c049fd-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Project Scope</span>
              <span className="inline-flex items-center h-8 px-2.5 rounded-sm bg-muted text-foreground font-medium text-xs" data-api-unique-id='inquirydetaildrawer-raeb3cf1cc202f54d-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                {inquiry.projectType}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground" data-api-unique-id='inquirydetaildrawer-r353e7bbe4e85c0b4-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <DollarSign className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='inquirydetaildrawer-r9062572daef231f8-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
              <div className="min-w-0" data-api-unique-id='inquirydetaildrawer-r58547acc7eab62c3-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                <span className="block text-[10px] uppercase" data-api-unique-id='inquirydetaildrawer-r61d9acbd87ca7e63-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Budget</span>
                <span className="font-mono text-foreground font-medium truncate block" data-api-unique-id='inquirydetaildrawer-r912479bfd690bfcd-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                  {inquiry.budgetRange || inquiry.budgetTier || "Not specified"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground" data-api-unique-id='inquirydetaildrawer-r9c8298d46e3f23e7-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='inquirydetaildrawer-r904ef65f9c6631b4-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
              <div className="min-w-0" data-api-unique-id='inquirydetaildrawer-r191a93022fd308fe-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                <span className="block text-[10px] uppercase" data-api-unique-id='inquirydetaildrawer-rd9b622480d16c031-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Timeline</span>
                <span className="font-mono text-foreground font-medium truncate block" data-api-unique-id='inquirydetaildrawer-r51ac4ff0e496ed9c-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                  {inquiry.targetTimeline}
                </span>
              </div>
            </div>

            {inquiry.location && <div className="col-span-2 flex items-center gap-1.5 text-muted-foreground pt-1 border-t border-border/40" data-api-unique-id='inquirydetaildrawer-r06ab6728617de670-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" data-api-unique-id='inquirydetaildrawer-r217e97c0b33b2bcc-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
                <span className="text-xs text-foreground" data-api-unique-id='inquirydetaildrawer-r8bd33ba62f587d31-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>{inquiry.location}</span>
              </div>}
          </div>

          {/* Project Brief */}
          <div className="space-y-1.5" data-api-unique-id='inquirydetaildrawer-r31012ca0e413e9af-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground" data-api-unique-id='inquirydetaildrawer-r4ec176b1e9370989-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              Project Brief Synopsis
            </h4>
            <div className="p-3.5 rounded-sm bg-muted/50 border border-border/60 text-xs leading-relaxed text-foreground" data-api-unique-id='inquirydetaildrawer-re75fd3d038e97843-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              {inquiry.projectBrief}
            </div>
          </div>

          {/* Client Inbound Message */}
          {inquiry.clientMessage && <div className="space-y-1.5" data-api-unique-id='inquirydetaildrawer-r8287e603ccb33f8d-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground" data-api-unique-id='inquirydetaildrawer-red4d32c547f632b1-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                Original Commission Message
              </h4>
              <div className="p-3.5 rounded-sm bg-muted/30 border border-border/60 text-xs leading-relaxed text-foreground font-serif italic" data-api-unique-id='inquirydetaildrawer-r3fc13a9d5c3ab80f-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                &ldquo;{inquiry.clientMessage}&rdquo;
              </div>
            </div>}

          {/* Previous Response if Replying/Replied */}
          {inquiry.curatorReply && <div className="space-y-1.5" data-api-unique-id='inquirydetaildrawer-r0ca22c1fc4a6e3ab-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <div className="flex items-center justify-between" data-api-unique-id='inquirydetaildrawer-r4c5895dd54510985-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-800 flex items-center gap-1" data-api-unique-id='inquirydetaildrawer-r8573533ff3a7bb06-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" data-api-unique-id='inquirydetaildrawer-r7a2a849d32aafd81-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
                  Dispatched Consultation Notes
                </h4>
                {inquiry.repliedAt && <span className="text-[10px] font-mono text-muted-foreground" data-api-unique-id='inquirydetaildrawer-rd37ba724edad706c-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                    {inquiry.repliedAt}
                  </span>}
              </div>
              <div className="p-3.5 rounded-sm bg-emerald-50/60 border border-emerald-200 text-xs leading-relaxed text-emerald-950" data-api-unique-id='inquirydetaildrawer-r1b7193f1fe916723-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                {inquiry.curatorReply}
              </div>
            </div>}

          {/* Reply Consultation Composer */}
          <form onSubmit={handleSendReply} className="space-y-2.5 pt-2 border-t border-border/80" data-api-unique-id='inquirydetaildrawer-r118ad78b8edd7a9f-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
            <div className="flex items-center justify-between" data-api-unique-id='inquirydetaildrawer-re7de4559ac21f0a3-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              <label htmlFor="reply-message" className="text-xs uppercase tracking-wider font-semibold text-foreground" data-api-unique-id='inquirydetaildrawer-rf2789183ab143107-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                Studio Response Dispatch
              </label>
              <span className="text-[10px] font-mono text-muted-foreground" data-api-unique-id='inquirydetaildrawer-r5c9de94c5a65d145-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>Encrypted Channel</span>
            </div>
            <textarea id="reply-message" rows={4} value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Draft your curatorial availability, studio rate card, and gallery consultation schedule..." className="w-full text-xs p-3 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='inquirydetaildrawer-r8851fd3992830b17-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
            <div className="flex items-center justify-between gap-3" data-api-unique-id='inquirydetaildrawer-rc90a1e4cda4cde99-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
              {inquiry.status === "NEW" ? <button type="button" onClick={handleMarkInReview} className="text-xs px-3 py-1.5 rounded-sm border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" data-api-unique-id='inquirydetaildrawer-r2dedb2afab6811b3-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                  Mark as In Review
                </button> : <div data-api-unique-id='inquirydetaildrawer-rd94d201328981c82-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />}
              <button type="submit" disabled={isSending} className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors disabled:opacity-50" data-api-unique-id='inquirydetaildrawer-rfafbccd0dd2b0154-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>
                <Send className="w-3.5 h-3.5" data-api-unique-id='inquirydetaildrawer-rf9297fd76e6cd18f-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer' />
                <span data-api-unique-id='inquirydetaildrawer-re33a72d5690eecfe-s2838215728' data-api-unique-page-name='src/backend/components/AdminHome/InquiryDetailDrawer'>{isSending ? "Dispatching..." : "Dispatch Consultation Reply"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}