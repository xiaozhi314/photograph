"use client";

import React, { useState } from "react";
import type { InquiryItem, InquiryStatus } from "@/backend/types/admin_home";
import { X, Calendar, DollarSign, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InquiryDetailDrawerProps {
  inquiry: InquiryItem | null;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: InquiryStatus) => void;
}

const statusOptions: Record<InquiryStatus, string> = {
  NEW: "New",
  IN_REVIEW: "In Review",
  REPLIED: "Replied",
};

export default function InquiryDetailDrawer({
  inquiry,
  onClose,
  onUpdateStatus,
}: InquiryDetailDrawerProps) {
  if (!inquiry) return null;

  const [replyText, setReplyText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) {
      toast.error("Please enter a response message before submitting.");
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      onUpdateStatus(inquiry.id, "REPLIED");
      toast.success(`Curatorial consultation dispatch sent to ${inquiry.clientEmail}`);
      setReplyText("");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-background/60 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-lg bg-card text-card-foreground border-l border-border h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-border flex items-start justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Inquiry Dispatch Brief
              </span>
              <span className="font-mono text-xs px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground">
                {inquiry.id}
              </span>
            </div>
            <h3 className="text-lg font-serif font-semibold text-foreground mt-1">
              {inquiry.clientName}
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              {inquiry.clientEmail}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-5">
          {/* Status & Project Quick Info */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-sm bg-background border border-border/70 text-xs">
            <div>
              <span className="text-muted-foreground block text-[11px] mb-1">Queue Status</span>
              <Select
                value={inquiry.status}
                onValueChange={(val) => onUpdateStatus(inquiry.id, val as InquiryStatus)}
              >
                <SelectTrigger size="sm" className="w-full h-8 text-xs">
                  <SelectValue placeholder="Status">
                    {statusOptions[inquiry.status]}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NEW">New</SelectItem>
                  <SelectItem value="IN_REVIEW">In Review</SelectItem>
                  <SelectItem value="REPLIED">Replied</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <span className="text-muted-foreground block text-[11px] mb-1">Project Scope</span>
              <span className="inline-flex items-center h-8 px-2.5 rounded-sm bg-muted text-foreground font-medium text-xs">
                {inquiry.projectType}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <DollarSign className="w-3.5 h-3.5 text-primary shrink-0" />
              <div>
                <span className="block text-[10px] uppercase">Budget</span>
                <span className="font-mono text-foreground font-medium">{inquiry.budgetRange}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <div>
                <span className="block text-[10px] uppercase">Timeline</span>
                <span className="font-mono text-foreground font-medium">{inquiry.targetTimeline}</span>
              </div>
            </div>
          </div>

          {/* Project Brief */}
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
              Project Brief Synopsis
            </h4>
            <div className="p-3.5 rounded-sm bg-muted/50 border border-border/60 text-xs leading-relaxed text-foreground">
              {inquiry.projectBrief}
            </div>
          </div>

          {/* Client Inbound Message */}
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
              Original Commission Message
            </h4>
            <div className="p-3.5 rounded-sm bg-muted/30 border border-border/60 text-xs leading-relaxed text-foreground font-serif italic">
              &ldquo;{inquiry.clientMessage}&rdquo;
            </div>
          </div>

          {/* Reply Consultation Composer */}
          <form onSubmit={handleSendReply} className="space-y-2.5 pt-2 border-t border-border/80">
            <div className="flex items-center justify-between">
              <label htmlFor="reply-message" className="text-xs uppercase tracking-wider font-semibold text-foreground">
                Studio Response Dispatch
              </label>
              <span className="text-[10px] font-mono text-muted-foreground">Encrypted Channel</span>
            </div>
            <textarea
              id="reply-message"
              rows={4}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Draft your curatorial availability, studio rate card, and gallery consultation schedule..."
              className="w-full text-xs p-3 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onUpdateStatus(inquiry.id, "IN_REVIEW");
                  toast.success("Inquiry moved to In Review queue");
                }}
                className="text-xs px-3 py-1.5 rounded-sm border border-border hover:bg-muted text-muted-foreground transition-colors"
              >
                Mark In Review
              </button>
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSending ? "Dispatching..." : "Send Consultation"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}