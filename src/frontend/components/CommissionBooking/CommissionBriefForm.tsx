"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { ProjectType, ServicePackageItem, ClientProfile, CreateCommissionInquiryInput } from "@/frontend/types/CommissionBooking";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
interface CommissionBriefFormProps {
  selectedPackage: ServicePackageItem | null;
  clientProfile: ClientProfile | null;
  isSubmitting?: boolean;
  onSubmitBrief: (input: CreateCommissionInquiryInput) => Promise<void> | void;
}
const PROJECT_TYPE_OPTIONS: {
  value: ProjectType;
  label: string;
  note: string;
}[] = [{
  value: "EDITORIAL",
  label: "Editorial Feature",
  note: "Archival publications & monographs"
}, {
  value: "PORTRAIT",
  label: "Portraiture Folio",
  note: "Analog master studio & on-site sittings"
}, {
  value: "COMMERCIAL",
  label: "Commercial Campaign",
  note: "Brand identity, haute horlogerie & couture"
}, {
  value: "ACQUISITION",
  label: "Print Acquisition",
  note: "Gallery silver gelatin portfolio editions"
}];
const BUDGET_TIER_OPTIONS: string[] = ["€6,000 – €9,000 (Studio Sittings & Proofs)", "€9,000 – €14,000 (Monograph & 5 Master Prints)", "€14,000 – €22,000 (Full Commercial Campaign & Rights)", "€22,000 – €35,000+ (Museum Archival Edition & World Rights)", "Custom Archival Endowment / Curatorial Scope"];
const TIMELINE_PRESETS: string[] = ["Q2 2025 (May – June)", "Q3 2025 (July – September)", "Autumn / Winter 2025", "Urgent Production Window (< 4 Weeks)"];
export default function CommissionBriefForm({
  selectedPackage,
  clientProfile,
  isSubmitting = false,
  onSubmitBrief
}: CommissionBriefFormProps) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [projectType, setProjectType] = useState<ProjectType>("EDITORIAL");
  const [budgetTier, setBudgetTier] = useState<string>(BUDGET_TIER_OPTIONS[0]);
  const [targetTimeline, setTargetTimeline] = useState("");
  const [location, setLocation] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  // Pre-populate with authenticated client credentials
  useEffect(() => {
    if (clientProfile) {
      if (clientProfile.fullName) setClientName(clientProfile.fullName);
      if (clientProfile.email) setClientEmail(clientProfile.email);
      if (clientProfile.phone) setPhone(clientProfile.phone);
      if (clientProfile.organization) setOrganization(clientProfile.organization);
    }
  }, [clientProfile]);

  // Adjust defaults when selected package changes
  useEffect(() => {
    if (selectedPackage) {
      if (selectedPackage.suggestedProjectType) {
        setProjectType(selectedPackage.suggestedProjectType);
      }
      if (selectedPackage.suggestedBudgetTier) {
        setBudgetTier(selectedPackage.suggestedBudgetTier);
      }
    }
  }, [selectedPackage]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      toast.error("Please provide client name for commission credentials.");
      return;
    }
    if (!clientEmail.trim() || !clientEmail.includes("@")) {
      toast.error("A valid correspondence email address is required.");
      return;
    }
    if (!projectType) {
      toast.error("Please select a commission discipline & purpose.");
      return;
    }
    if (!budgetTier.trim()) {
      toast.error("Please specify a curatorial budget tier.");
      return;
    }
    if (!targetTimeline.trim()) {
      toast.error("Please specify a target delivery or production window.");
      return;
    }
    if (!projectBrief.trim() || projectBrief.trim().length < 15) {
      toast.error("Please provide a descriptive commission brief (at least 15 characters).");
      return;
    }
    const payload: CreateCommissionInquiryInput = {
      servicePackageId: selectedPackage ? selectedPackage.id : null,
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      phone: phone.trim() || null,
      organization: organization.trim() || null,
      projectType,
      budgetTier: budgetTier.trim(),
      targetTimeline: targetTimeline.trim(),
      location: location.trim() || null,
      projectBrief: projectBrief.trim(),
      clientMessage: clientMessage.trim() || null
    };
    await onSubmitBrief(payload);
  };
  return <div data-controller-name="Commission Brief Specification Form" className="rounded-xl border border-border bg-card p-6 sm:p-8 text-card-foreground shadow-sm" data-api-unique-id='commissionbriefform-rdbf30a6a30c4aa25-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
      <div className="mb-6 border-b border-border pb-5" data-api-unique-id='commissionbriefform-rf898c602954111cf-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
        <div className="flex flex-wrap items-center justify-between gap-3" data-api-unique-id='commissionbriefform-rca09d1940428c60a-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <div data-api-unique-id='commissionbriefform-r74b40b8050b03375-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" data-api-unique-id='commissionbriefform-rff92db3193828427-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              Commission Brief Specification
            </h2>
            <p className="mt-1 text-sm text-muted-foreground" data-api-unique-id='commissionbriefform-rcfdf24c46c47ca39-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              Define the aesthetic scope, archival darkroom parameters, and production coordinates.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground" data-api-unique-id='commissionbriefform-r8d96684376aeb42a-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <ShieldCheck className="h-3.5 w-3.5 text-primary" data-api-unique-id='commissionbriefform-rd00788860e02d38c-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
            <span data-api-unique-id='commissionbriefform-r6a530790ed8167f1-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>Encrypted Archival Intake</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" data-api-unique-id='commissionbriefform-r8cdea4141124f6ad-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
        {/* Contact Coordinates Verification */}
        <div className="rounded-lg border border-border/80 bg-background p-4 sm:p-5" data-api-unique-id='commissionbriefform-rb630499dd393573e-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <div className="mb-3 flex items-center justify-between" data-api-unique-id='commissionbriefform-r00259bb9548a0b8b-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground" data-api-unique-id='commissionbriefform-r38ed7f7d76a1f6a3-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              Client & Organization Verification
            </span>
            <span className="text-xs text-muted-foreground" data-api-unique-id='commissionbriefform-rd2c38efe6722a10e-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              {clientProfile ? "Verified account credentials" : "Pre-filled credentials"}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-api-unique-id='commissionbriefform-r0e022a810a11df75-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <div data-api-unique-id='commissionbriefform-r3547d2638defc681-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              <label className="block text-xs font-medium text-foreground mb-1.5" data-api-unique-id='commissionbriefform-rcd69448287845d8e-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                Principal Name *
              </label>
              <input type="text" required value={clientName} onChange={e => setClientName(e.target.value)} placeholder="e.g. Elena Rostova" className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-r2ff61ca240d69245-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
            </div>
            <div data-api-unique-id='commissionbriefform-r58b190999a4bdb8d-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              <label className="block text-xs font-medium text-foreground mb-1.5" data-api-unique-id='commissionbriefform-rb70adc9ad2186fb7-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                Correspondence Email *
              </label>
              <input type="email" required value={clientEmail} onChange={e => setClientEmail(e.target.value)} placeholder="client@foundation.org" className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-r4f0024c8281276f3-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
            </div>
            <div data-api-unique-id='commissionbriefform-r01ad8a4158351024-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              <label className="block text-xs font-medium text-foreground mb-1.5" data-api-unique-id='commissionbriefform-r1a40c71b32334e1c-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                Secure Phone / Signal
              </label>
              <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+39 02 8845 2109" className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-re2af2c25a4fb5850-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
            </div>
            <div data-api-unique-id='commissionbriefform-r08b5cf058b1d96e6-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              <label className="block text-xs font-medium text-foreground mb-1.5" data-api-unique-id='commissionbriefform-r9575d7565df8c322-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                Organization / Architectural Firm
              </label>
              <input type="text" value={organization} onChange={e => setOrganization(e.target.value)} placeholder="Fondazione Rostova d'Arte" className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-r00c4354591bfd862-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
            </div>
          </div>
        </div>

        {/* Project Type Grid */}
        <div data-api-unique-id='commissionbriefform-r5bff615352f2a6bd-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2.5" data-api-unique-id='commissionbriefform-rb43a9388b37d2945-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            1. Commission Discipline & Purpose *
          </label>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2" data-api-unique-id='commissionbriefform-rbd0c9725c366e00e-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            {PROJECT_TYPE_OPTIONS.map((opt, index) => {
            const isSelected = projectType === opt.value;
            return <button key={opt.value} type="button" onClick={() => setProjectType(opt.value)} className={`flex flex-col text-left p-3.5 rounded-lg border transition-colors ${isSelected ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card text-card-foreground hover:bg-muted"}`} data-api-unique-id='commissionbriefform-r4ba8e2872357c7fb-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1'>
                  <div className="flex items-center justify-between w-full" data-api-unique-id='commissionbriefform-r96ff1369eb29ab34-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1'>
                    <span className="text-sm font-semibold" data-api-unique-id='commissionbriefform-rfe7579f8014a155c-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1' data-api-bind-info={`PROJECT_TYPE_OPTIONS-${index}-label`} data-api-map-var-name='opt'>{opt.label}</span>
                    {isSelected && <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-foreground" data-api-unique-id='commissionbriefform-r4356ec2b9c245828-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1' />}
                  </div>
                  <span className={`mt-1 text-xs ${isSelected ? "text-primary-foreground/90" : "text-muted-foreground"}`} data-api-unique-id='commissionbriefform-r955e16195f4ca367-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1' data-api-bind-info={`PROJECT_TYPE_OPTIONS-${index}-note`} data-api-map-var-name='opt'>
                    {opt.note}
                  </span>
                </button>;
          })}
          </div>
        </div>

        {/* Budget Tier & Timeline Selection */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" data-api-unique-id='commissionbriefform-r5bbaaa8abe8bc386-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <div data-api-unique-id='commissionbriefform-r9d877f617a551d28-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2" data-api-unique-id='commissionbriefform-r174aa2d311362cf1-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              2. Curatorial Budget Tier *
            </label>
            <Select key={budgetTier} value={budgetTier} onValueChange={val => setBudgetTier(val)} data-api-unique-id='commissionbriefform-r7642ccddfd2b90ce-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              <SelectTrigger className="w-full bg-card text-card-foreground border-border" data-api-unique-id='commissionbriefform-r8caa92377bcbba50-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                <SelectValue placeholder="Select target budget band" data-api-unique-id='commissionbriefform-r50ef313350153ea1-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                  {budgetTier || "Select target budget band"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground border-border" data-api-unique-id='commissionbriefform-r1d875b5aa022d5a1-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                {BUDGET_TIER_OPTIONS.map((tier, index) => <SelectItem key={tier} value={tier} data-api-unique-id='commissionbriefform-rf35ad0e69a9fe557-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1' data-api-bind-info={`BUDGET_TIER_OPTIONS-${index}-$item`} data-api-map-var-name='tier'>
                    {tier}
                  </SelectItem>)}
                {selectedPackage?.suggestedBudgetTier && !BUDGET_TIER_OPTIONS.includes(selectedPackage.suggestedBudgetTier) && <SelectItem value={selectedPackage.suggestedBudgetTier} data-api-unique-id='commissionbriefform-r399eee68028cc140-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
                      {selectedPackage.suggestedBudgetTier}
                    </SelectItem>}
              </SelectContent>
            </Select>
            <p className="mt-1 text-[11px] text-muted-foreground" data-api-unique-id='commissionbriefform-r4efed949439bbe38-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              {selectedPackage ? `Package baseline anchor: ${selectedPackage.priceDisplay}` : "Bespoke commissions structured on medium format plate count."}
            </p>
          </div>

          <div data-api-unique-id='commissionbriefform-r1bf52e7b45b47c92-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2" data-api-unique-id='commissionbriefform-r793bae50b5aeadfe-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              3. Target Delivery / Exhibition Window *
            </label>
            <input type="text" required value={targetTimeline} onChange={e => setTargetTimeline(e.target.value)} placeholder="e.g. Mid-October 2025 (Venice Biennale preview)" className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-recf68e2d013b90f6-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
            <div className="mt-1.5 flex flex-wrap gap-1.5" data-api-unique-id='commissionbriefform-ra7cc93f1ed132a71-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              {TIMELINE_PRESETS.map((preset, index) => <button key={preset} type="button" onClick={() => setTargetTimeline(preset)} className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground" data-api-unique-id='commissionbriefform-ra3dab651fccb86d0-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' data-api-in-loop='1' data-api-bind-info={`TIMELINE_PRESETS-${index}-$item`} data-api-map-var-name='preset'>
                  {preset}
                </button>)}
            </div>
          </div>
        </div>

        {/* Location / Physical Venue */}
        <div data-api-unique-id='commissionbriefform-rbdce9a48210f1858-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5" data-api-unique-id='commissionbriefform-r9557ae282750097e-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            4. Production / Shoot Location & Architectural Context
          </label>
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Palazzo Grassi, Venice · Studio darkroom Milan" className="w-full rounded-md border border-border bg-card px-3.5 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-r9bc1c099cb8deeb3-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
        </div>

        {/* Project Narrative Brief */}
        <div data-api-unique-id='commissionbriefform-r2ca6e4d201c17a82-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <div className="flex items-center justify-between mb-1.5" data-api-unique-id='commissionbriefform-r3a2771a6ffe61eda-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground" data-api-unique-id='commissionbriefform-rbae72611aa8faa62-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              5. Archival Project Brief & Darkroom Scope *
            </label>
            <span className="text-[11px] text-muted-foreground" data-api-unique-id='commissionbriefform-r29b1a79d83ac6b26-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              Architectural context, plate count, paper tone
            </span>
          </div>
          <textarea required rows={4} value={projectBrief} onChange={e => setProjectBrief(e.target.value)} placeholder="Detail the subject matter, architectural spatial dynamics, expected plate volume (4x5 or 6x7 medium format), print dimensions (e.g. 16x20 warm-tone fiber), and preservation objectives." className="w-full rounded-md border border-border bg-card p-3 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background leading-relaxed" data-api-unique-id='commissionbriefform-r252c99e523597d26-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
        </div>

        {/* Client Message / Curatorial Context */}
        <div data-api-unique-id='commissionbriefform-r646a12d4234def77-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5" data-api-unique-id='commissionbriefform-r38dca73210b5f1ee-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            6. Curatorial Message & Collector Notes (Optional)
          </label>
          <textarea rows={2} value={clientMessage} onChange={e => setClientMessage(e.target.value)} placeholder="Special considerations for gallery consignments, foundation embargoes, or archival provenance notes." className="w-full rounded-md border border-border bg-card p-3 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background" data-api-unique-id='commissionbriefform-r11098d53faa69ebe-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
        </div>

        {/* Submission Action */}
        <div className="border-t border-border pt-5" data-api-unique-id='commissionbriefform-r32edde665b0b5566-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4" data-api-unique-id='commissionbriefform-rf9ad64bce84301bd-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
            <div className="flex items-center gap-2 text-xs text-muted-foreground" data-api-unique-id='commissionbriefform-r3c04531fdf3b6daa-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              <Clock className="h-4 w-4 text-primary shrink-0" data-api-unique-id='commissionbriefform-rd21f2fe00703b959-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
              <span data-api-unique-id='commissionbriefform-rb392c573361e5dcb-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>Studio reviews dispatch within 48-72 hours to registered client email</span>
            </div>

            <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none" data-api-unique-id='commissionbriefform-r33e22f1dd95adc0b-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>
              {isSubmitting ? <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" data-api-unique-id='commissionbriefform-r221266ae1cc997bd-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
                  <span data-api-unique-id='commissionbriefform-re464aebcc65e177e-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>Transmitting Brief...</span>
                </> : <>
                  <Send className="h-4 w-4" data-api-unique-id='commissionbriefform-re0f65afb994ef550-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm' />
                  <span data-api-unique-id='commissionbriefform-r45052c3aa6915de0-s2630395831' data-api-unique-page-name='src/frontend/components/CommissionBooking/CommissionBriefForm'>Dispatch Commission Brief</span>
                </>}
            </button>
          </div>
        </div>
      </form>
    </div>;
}