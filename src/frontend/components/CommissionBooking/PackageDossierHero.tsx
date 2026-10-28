"use client";

import React from "react";
import { ServicePackageItem, ClientProfile } from "@/frontend/types/CommissionBooking";
import { Check, ShieldCheck, Clock, Award, Building2, Mail, Phone, UserCheck } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
interface PackageDossierHeroProps {
  packageItem: ServicePackageItem | null;
  isCustom: boolean;
  clientProfile: ClientProfile;
}
export default function PackageDossierHero({
  packageItem,
  isCustom,
  clientProfile
}: PackageDossierHeroProps) {
  return <section data-controller-name="Commission Dossier Specifications" className="w-full bg-card text-card-foreground rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-sm transition-all" data-api-unique-id='packagedossierhero-ra1b50a3b5d692290-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" data-api-unique-id='packagedossierhero-r77f61336a539085d-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
        {/* Left: Package or Custom Scope Dossier */}
        <div className="lg:col-span-7 min-w-0 space-y-6" data-api-unique-id='packagedossierhero-r45375e85fc0e862c-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5" data-api-unique-id='packagedossierhero-r496bc72c8b5dd2d6-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
            <div className="min-w-0" data-api-unique-id='packagedossierhero-rc0d89ad1b2e702d0-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium" data-api-unique-id='packagedossierhero-rcd23ec54a5619f57-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                {isCustom ? "Bespoke Portfolio Creation" : "Commission Tier Dossier"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-card-foreground mt-1 tracking-tight" data-api-unique-id='packagedossierhero-r703c311d5793c9f6-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                {isCustom ? "Unbundled Custom Brief" : packageItem?.title || "Selected Package"}
              </h2>
            </div>
            <div className="text-right shrink-0" data-api-unique-id='packagedossierhero-r5c7b6823245a1722-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <div className="text-xs uppercase tracking-wider text-muted-foreground" data-api-unique-id='packagedossierhero-rbb8fb715a8421bd0-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                Baseline Honorarium
              </div>
              <div className="text-2xl sm:text-3xl font-display font-medium text-primary mt-0.5" data-api-unique-id='packagedossierhero-r0f1f2bf412fdf978-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                {isCustom ? "Custom Quotation" : packageItem?.priceDisplay}
              </div>
            </div>
          </div>

          {/* Turnaround & Medium Format Stamp Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='packagedossierhero-r768596faac9e4946-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
            <div className="bg-muted text-muted-foreground rounded-xl p-4 border border-border/60" data-api-unique-id='packagedossierhero-rb2a3d8a5e7ee2990-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium" data-api-unique-id='packagedossierhero-r51904bd757f8dfda-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <Clock className="w-3.5 h-3.5 text-primary" data-api-unique-id='packagedossierhero-rc521ccddf211f15a-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
                <span data-api-unique-id='packagedossierhero-r0d50a8a6f4107f31-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>Estimated Turnaround</span>
              </div>
              <p className="mt-2 text-base font-medium text-foreground" data-api-unique-id='packagedossierhero-rd5c1846caee43901-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                {isCustom ? "6 – 10 weeks production window" : packageItem?.durationEstimate || "4 – 6 weeks production window"}
              </p>
            </div>

            <div className="bg-muted text-muted-foreground rounded-xl p-4 border border-border/60 flex items-center justify-between gap-3" data-api-unique-id='packagedossierhero-r4681d40ae083ae77-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <div data-api-unique-id='packagedossierhero-r8cb1bba6c072b9da-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium" data-api-unique-id='packagedossierhero-rd19658d2eaf5c92d-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  <Award className="w-3.5 h-3.5 text-primary" data-api-unique-id='packagedossierhero-rc18e550a533b8084-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
                  <span data-api-unique-id='packagedossierhero-r6dac97c0f9007b69-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>Archival Plate Standard</span>
                </div>
                <p className="mt-2 text-base font-medium text-foreground" data-api-unique-id='packagedossierhero-r5f568517323d5ecb-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  6×7 &amp; 4×5 Large Format
                </p>
              </div>
              {/* Studio Archival Stamp Device */}
              <div className="shrink-0 border-2 border-primary/40 rounded-lg p-2 text-center bg-card text-card-foreground" data-api-unique-id='packagedossierhero-rece5b363878aed59-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <span className="block text-[9px] font-mono tracking-widest uppercase text-primary font-bold" data-api-unique-id='packagedossierhero-rcaa77d020069e23c-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  JV·STUDIO
                </span>
                <span className="block text-[8px] font-mono tracking-tighter text-muted-foreground" data-api-unique-id='packagedossierhero-r2c1462dc64fac6a5-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  DARKROOM
                </span>
              </div>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3 pt-2" data-api-unique-id='packagedossierhero-r28fc00ca64d809aa-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold" data-api-unique-id='packagedossierhero-r42e231cb5ffb6795-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              Archival Deliverables &amp; Print Repository
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" data-api-unique-id='packagedossierhero-rb5f980c62001146b-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              {(isCustom ? ["Bespoke gelatin silver contact proof binder", "Custom plate dimensions & darkroom toning", "16-bit uncompressed master exhibition scans", "Dedicated museum conservation provenance dossier"] : packageItem?.deliverables && packageItem.deliverables.length > 0 ? packageItem.deliverables : ["Bespoke gelatin silver contact proof binder", "Custom plate dimensions & darkroom toning", "16-bit uncompressed master exhibition scans", "Dedicated museum conservation provenance dossier"]).map((deliverable, index) => <li key={index} className="flex items-start gap-2.5 bg-background text-foreground rounded-lg p-3 border border-border/50 text-sm" data-api-unique-id='packagedossierhero-r9a741e916f70ef0c-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' data-api-in-loop='1'>
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" data-api-unique-id='packagedossierhero-re95f9d855b7a988b-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' data-api-in-loop='1' />
                  <span className="leading-snug text-foreground/90 font-normal" data-api-unique-id='packagedossierhero-r046cee9e6fa0b053-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' data-api-in-loop='1' data-api-bind-info={`list-${index}-$item`} data-api-map-var-name='deliverable'>
                    {deliverable}
                  </span>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Right: Authenticated Client Credentials Card */}
        <div className="lg:col-span-5 min-w-0 bg-background text-foreground rounded-xl border border-border p-5 sm:p-6 shadow-sm space-y-5" data-api-unique-id='packagedossierhero-r5d22defd901fdd29-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
          <div className="flex items-center justify-between border-b border-border/80 pb-4" data-api-unique-id='packagedossierhero-r3f77fa28eedf10ba-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
            <div className="flex items-center gap-2.5 min-w-0" data-api-unique-id='packagedossierhero-r4351f182ce48a1fc-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              {clientProfile.avatarUrl ? <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-border" data-api-unique-id='packagedossierhero-re1bbea854bc9d90a-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  <EditableImg propKey="account_user:avatarUrl" src={clientProfile.avatarUrl} alt={clientProfile.fullName} className="w-full h-full object-cover" data-api-unique-id='packagedossierhero-rff4f2495698cabaa-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
                </div> : <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0" data-api-unique-id='packagedossierhero-rb17aa969ef89d16a-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  <UserCheck className="w-5 h-5" data-api-unique-id='packagedossierhero-r92b6ccbc056720a0-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
                </div>}
              <div className="min-w-0" data-api-unique-id='packagedossierhero-rc0fd5a505ab8f6f6-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <h4 className="text-sm font-semibold text-foreground truncate" data-api-unique-id='packagedossierhero-r8fee7a1de3502c10-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  Authenticated Client
                </h4>
                <p className="text-xs text-muted-foreground truncate" data-api-unique-id='packagedossierhero-r7446a2d1d792123c-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  Registered Identity Coordinates
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0" data-api-unique-id='packagedossierhero-r8844497fcaebab9d-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <ShieldCheck className="w-3.5 h-3.5" data-api-unique-id='packagedossierhero-r32f2876bddf19c8b-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
              Verified Client
            </span>
          </div>

          <div className="space-y-3.5 text-sm" data-api-unique-id='packagedossierhero-rdeb05cde01bddfc4-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
            <div className="flex items-start gap-3" data-api-unique-id='packagedossierhero-r008150ab1a00c615-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <UserCheck className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" data-api-unique-id='packagedossierhero-r583733a9076b7e1c-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
              <div className="min-w-0 flex-1" data-api-unique-id='packagedossierhero-rbbf7c253ecbbad6f-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <div className="text-xs text-muted-foreground uppercase tracking-wider" data-api-unique-id='packagedossierhero-rc2770d9a4ec0e588-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  Full Legal Name
                </div>
                <div className="font-medium text-foreground truncate" data-api-unique-id='packagedossierhero-re38b821bba37f007-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  {clientProfile.fullName}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3" data-api-unique-id='packagedossierhero-r6b1558273c6908ac-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <Mail className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" data-api-unique-id='packagedossierhero-re4d48bc14a8a9d1f-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
              <div className="min-w-0 flex-1" data-api-unique-id='packagedossierhero-r2c75f26c530ce464-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <div className="text-xs text-muted-foreground uppercase tracking-wider" data-api-unique-id='packagedossierhero-r901751ef4715c3d1-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  Primary Correspondence Email
                </div>
                <div className="font-medium text-foreground truncate break-all" data-api-unique-id='packagedossierhero-re16a0be9d39048de-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  {clientProfile.email}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3" data-api-unique-id='packagedossierhero-r5df3b2e385fa328d-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <Phone className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" data-api-unique-id='packagedossierhero-re58bca2be1df864a-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
              <div className="min-w-0 flex-1" data-api-unique-id='packagedossierhero-rf8f6108e14a82803-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <div className="text-xs text-muted-foreground uppercase tracking-wider" data-api-unique-id='packagedossierhero-rb0b972056d274168-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  Direct Line
                </div>
                <div className="font-medium text-foreground truncate" data-api-unique-id='packagedossierhero-re6edfb6ce1bb7652-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  {clientProfile.phone || "—"}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3" data-api-unique-id='packagedossierhero-rb0406ca2da9de7eb-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              <Building2 className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" data-api-unique-id='packagedossierhero-r20ce2e746ef44476-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero' />
              <div className="min-w-0 flex-1" data-api-unique-id='packagedossierhero-rd34ae7786f6bceb0-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                <div className="text-xs text-muted-foreground uppercase tracking-wider" data-api-unique-id='packagedossierhero-rb867b049e4045b8a-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  Institution / Firm
                </div>
                <div className="font-medium text-foreground truncate" data-api-unique-id='packagedossierhero-re31f83ebcd817722-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
                  {clientProfile.organization || "Independent Collector / Patron"}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-border/80" data-api-unique-id='packagedossierhero-r1af8f424c60d7fc4-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
            <p className="text-xs text-muted-foreground leading-relaxed" data-api-unique-id='packagedossierhero-raf4c33ec2b902f7f-s182884119' data-api-unique-page-name='src/frontend/components/CommissionBooking/PackageDossierHero'>
              Coordinates are automatically assigned to this inquiry dossier. You can refine specific project contacts below.
            </p>
          </div>
        </div>
      </div>
    </section>;
}