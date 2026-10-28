"use client";

import React, { useState } from "react";
import type { CommissionInquiryState } from "@/frontend/types/home";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2, Clock, MapPin, Mail, ShieldCheck } from "lucide-react";

const SERVICE_OPTIONS: CommissionInquiryState["serviceType"][] = [
  "Architectural Monograph",
  "Editorial Portraiture",
  "Curated Still Life / Commercial Campaign",
  "Private Print Acquisition",
];

const BUDGET_OPTIONS: CommissionInquiryState["budgetTier"][] = [
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Institutional / Grant-Funded",
];

export default function CommissionModule() {
  const [formData, setFormData] = useState<CommissionInquiryState>({
    fullName: "",
    email: "",
    organization: "",
    serviceType: "Architectural Monograph",
    budgetTier: "$10,000 – $25,000",
    projectScope: "",
    timeline: "Q3 / Q4 2025",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      toast.error("Please provide both your name and an email address for studio correspondence.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Inquiry received. Studio correspondence dispatched within 48 business hours.");
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      serviceType: "Architectural Monograph",
      budgetTier: "$10,000 – $25,000",
      projectScope: "",
      timeline: "Q3 / Q4 2025",
    });
  };

  return (
    <section
      id="commissions"
      data-controller-name="Direct Commission & Inquiry"
      className="w-full bg-card text-card-foreground border-t border-border/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Studio Representation & Practical Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-medium">
                Atelier &amp; Representation
              </span>
              <h2 className="text-3xl font-display text-card-foreground tracking-tight">
                Direct Commissions &amp; Archival Inquiries
              </h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Julian Vane accepts limited private monographs, institutional architectural documentations, and bespoke gallery print editions each quarter.
              </p>
            </div>

            {/* Representation Notes */}
            <div className="space-y-4 pt-4 border-t border-border/60">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Gallery Representation</span>
                <p className="text-sm font-medium text-card-foreground">Galleria Chiaroscuro · Milan</p>
                <p className="text-xs text-muted-foreground">Via San Carpoforo 9, 20121 Milano</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Print Archive Agency</span>
                <p className="text-sm font-medium text-card-foreground">Nihonbashibashi Editions · Tokyo</p>
                <p className="text-xs text-muted-foreground">Chuo-ku, Tokyo 103-0027</p>
              </div>
            </div>

            {/* Practical Studio Hours & Dispatch */}
            <div className="p-4 rounded-sm bg-muted text-muted-foreground border border-border/60 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-card-foreground">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Studio Dispatch Rhythm</span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground font-body">
                Correspondence reviewed Tuesday through Friday. Darkroom printing runs take place every Monday and Saturday.
              </p>
            </div>
          </div>

          {/* Interactive Commission Inquiry Form */}
          <div className="lg:col-span-7 bg-background p-6 sm:p-8 lg:p-10 rounded-sm border border-border/80 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success text-success-foreground mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display text-foreground tracking-tight">
                  Inquiry Dispatched to Studio
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto font-body">
                  Thank you, <span className="font-medium text-foreground">{formData.fullName}</span>. Julian Vane and his studio representative will review your project parameters and respond within 48 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground text-xs uppercase tracking-wider font-mono px-5 py-2.5 rounded-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1 border-b border-border/60 pb-4">
                  <h3 className="text-xl font-display text-foreground tracking-tight">
                    Commission Intake Folio
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    Please detail the intended medium, scale, and architectural context.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                    Organization / Studio / Publication
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Atelier Kuma &amp; Associates"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-card border border-border text-foreground text-sm px-3.5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Type Selection with shadcn Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                      Commission Scope
                    </label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(val) =>
                        setFormData({
                          ...formData,
                          serviceType: val as CommissionInquiryState["serviceType"],
                        })
                      }
                    >
                      <SelectTrigger className="w-full bg-card border-border text-foreground text-sm h-10 rounded-sm">
                        <SelectValue placeholder="Select discipline" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border-border">
                        {SERVICE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt} className="text-xs py-2">
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget Tier Selection with shadcn Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                      Anticipated Budget Bracket
                    </label>
                    <Select
                      value={formData.budgetTier}
                      onValueChange={(val) =>
                        setFormData({
                          ...formData,
                          budgetTier: val as CommissionInquiryState["budgetTier"],
                        })
                      }
                    >
                      <SelectTrigger className="w-full bg-card border-border text-foreground text-sm h-10 rounded-sm">
                        <SelectValue placeholder="Select budget bracket" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground border-border">
                        {BUDGET_OPTIONS.map((b) => (
                          <SelectItem key={b} value={b} className="text-xs py-2">
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                    Project Brief &amp; Architectural Context
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe site location, building materials, desired plate count, or archival printing specifications..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-card border border-border text-foreground text-sm p-3.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors placeholder:text-muted-foreground/60 resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>Non-disclosure &amp; archival provenance assured</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 disabled:opacity-50 disabled:pointer-events-none transition-colors px-6 py-3 text-xs uppercase tracking-wider font-mono font-medium rounded-sm shadow-sm"
                  >
                    <span>{isSubmitting ? "Dispatching..." : "Transmit Commission Folio"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}