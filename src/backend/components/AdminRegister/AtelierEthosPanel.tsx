"use client";

import React from "react";
import Image from "next/image";
import { projectLogo } from "@/lib/generated-images/project-logo";
import { Shield, Key, Lock, CheckCircle2 } from "lucide-react";
export default function AtelierEthosPanel() {
  const governanceItems = [{
    title: "Darkroom Master Plates Clearance",
    detail: "Direct management of architectural monographs and limited platinum editions.",
    code: "SECT_01"
  }, {
    title: "Exhibition Folio Provenance",
    detail: "Exclusive jurisdiction over curatorial sequence revisions, notes, and milestones.",
    code: "SECT_02"
  }, {
    title: "Patron Inquiries Verification",
    detail: "Formal authority to respond to monograph acquisitions and commercial commissions.",
    code: "SECT_03"
  }];
  return <div data-controller-name="Atelier Ethos & Curatorial Overview" className="flex min-w-0 flex-col justify-between rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm lg:p-8" data-api-unique-id='atelierethospanel-r31b0fc59815caeda-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
      <div className="flex min-w-0 flex-col gap-6" data-api-unique-id='atelierethospanel-r6c2d9c0608df3284-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
        {/* Brand & Monogram Header */}
        <div className="flex min-w-0 items-center justify-between border-b border-border pb-6" data-api-unique-id='atelierethospanel-r089b8947b3e4c157-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
          <div className="flex items-center gap-3" data-api-unique-id='atelierethospanel-r4cd21ce791335fc4-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded border border-border bg-muted p-1" data-api-unique-id='atelierethospanel-r82d66387ede8d867-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
              <Image src={projectLogo} alt="Julian Vane Curatorial Archive Logo" fill className="object-contain" data-api-unique-id='atelierethospanel-rf7610a6b904055c1-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' />
            </div>
            <div className="min-w-0" data-api-unique-id='atelierethospanel-r3675f897000a5dd6-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
              <h2 className="truncate text-base font-semibold tracking-tight text-card-foreground" data-api-unique-id='atelierethospanel-rde80e059ed9a20c4-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
                Julian Vane Studio
              </h2>
              <p className="truncate text-xs text-muted-foreground" data-api-unique-id='atelierethospanel-raae678d3f4dcc4a3-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
                Darkroom Curatorial Archive
              </p>
            </div>
          </div>

          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-mono font-medium text-muted-foreground" data-api-unique-id='atelierethospanel-raec92869130bf969-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" data-api-unique-id='atelierethospanel-r808c0bff38947c96-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' />
            PLATE_VAULT // LEVEL_01
          </div>
        </div>

        {/* Narrative & Authority Statement */}
        <div className="min-w-0 flex flex-col gap-3" data-api-unique-id='atelierethospanel-rcc90693b4b150117-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary" data-api-unique-id='atelierethospanel-r23621dcde7156f76-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            <Shield className="h-3.5 w-3.5" data-api-unique-id='atelierethospanel-r6800ea2c119fccc1-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' />
            Administrative Atelier Ethos
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-card-foreground lg:text-3xl" data-api-unique-id='atelierethospanel-r569593f1936a3862-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            Curatorial Onboarding &amp; Induction Desk
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground" data-api-unique-id='atelierethospanel-r2e8e52dcd8ecd378-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            This curatorial registration portal provisions certified administrative credentials to oversee Julian Vane&apos;s physical and archival assets. All newly registered curators receive cryptographic authentication to preserve monograph integrity, manage provenance logs, and curate gallery portfolios.
          </p>
        </div>

        {/* Security & Governance Items */}
        <div className="flex min-w-0 flex-col gap-3 rounded-lg border border-border/80 bg-background/50 p-4" data-api-unique-id='atelierethospanel-r350c3a30a0be6ef5-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
          <div className="flex items-center justify-between text-xs font-semibold text-card-foreground" data-api-unique-id='atelierethospanel-rf96e6e7eaeff3077-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            <span className="flex items-center gap-1.5" data-api-unique-id='atelierethospanel-rb58c85f448687e7e-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
              <Key className="h-3.5 w-3.5 text-primary" data-api-unique-id='atelierethospanel-r6085137b86ca2d22-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' />
              Delegated Curatorial Permissions
            </span>
            <span className="font-mono text-[11px] text-muted-foreground" data-api-unique-id='atelierethospanel-r83fd0be28c487bbe-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>VERIFIED_ONLY</span>
          </div>

          <ul className="flex flex-col gap-2.5 pt-1 text-xs" data-api-unique-id='atelierethospanel-re53326fb3735b853-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            {governanceItems.map((item, index) => <li key={item.code} className="flex items-start gap-2.5" data-api-unique-id='atelierethospanel-r71075948451200ec-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1'>
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" data-api-unique-id='atelierethospanel-rbeb9816ecd6184de-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1' />
                <div className="min-w-0" data-api-unique-id='atelierethospanel-r1d00102a0604f3f7-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1'>
                  <div className="flex items-center gap-2" data-api-unique-id='atelierethospanel-rdae7002cbb111223-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1'>
                    <span className="font-medium text-card-foreground" data-api-unique-id='atelierethospanel-r70bb29c8e1d71f60-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1' data-api-bind-info={`governanceItems-${index}-title`} data-api-map-var-name='item'>{item.title}</span>
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground" data-api-unique-id='atelierethospanel-r4b3bc17e681e4ba7-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1' data-api-bind-info={`governanceItems-${index}-code`} data-api-map-var-name='item'>
                      {item.code}
                    </span>
                  </div>
                  <p className="text-muted-foreground" data-api-unique-id='atelierethospanel-r9cbc6d2e08a14eea-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' data-api-in-loop='1' data-api-bind-info={`governanceItems-${index}-detail`} data-api-map-var-name='item'>{item.detail}</p>
                </div>
              </li>)}
          </ul>
        </div>
      </div>

      {/* Footer Security Notice */}
      <div className="mt-8 border-t border-border pt-4" data-api-unique-id='atelierethospanel-r97ef54de2587a785-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
        <div className="flex items-center gap-2 text-xs text-muted-foreground" data-api-unique-id='atelierethospanel-rd8ab8727f5efa34a-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
          <Lock className="h-3.5 w-3.5 shrink-0 text-primary" data-api-unique-id='atelierethospanel-ra043e2bfc73ece43-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel' />
          <span className="truncate" data-api-unique-id='atelierethospanel-re37d8873411240cd-s3282367798' data-api-unique-page-name='src/backend/components/AdminRegister/AtelierEthosPanel'>
            System Security Protocol: Tier-1 TLS cryptographic session and SHA-256 password salting.
          </span>
        </div>
      </div>
    </div>;
}