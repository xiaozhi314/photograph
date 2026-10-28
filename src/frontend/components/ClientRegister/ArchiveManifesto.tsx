"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { projectLogo } from "@/lib/generated-images/project-logo";
import { ClientPrivilege } from "@/frontend/types/ClientRegister";
const DEFAULT_PRIVILEGES: ClientPrivilege[] = [{
  id: "priv-1",
  number: "01",
  title: "Gelatin Silver Print Edition Proofs",
  description: "Exclusive collector access to limited silver gelatin exhibition master prints and authentication certificates."
}, {
  id: "priv-2",
  number: "02",
  title: "Unreleased Medium Format Contact Sheets",
  description: "Inspection of uncropped roll contact proof sheets directly from Julian Vane's studio sessions."
}, {
  id: "priv-3",
  number: "03",
  title: "Architectural & Monograph Inquiries",
  description: "Priority scheduling for bespoke monograph projects, site commissions, and spatial studies."
}, {
  id: "priv-4",
  number: "04",
  title: "Direct Curatorial Liaison",
  description: "Continuous correspondence regarding framing specs, edition reserves, and private darkroom previews."
}];
interface ArchiveManifestoProps {
  privileges?: ClientPrivilege[];
}
export default function ArchiveManifesto({
  privileges = DEFAULT_PRIVILEGES
}: ArchiveManifestoProps) {
  const displayPrivileges = privileges && privileges.length > 0 ? privileges : DEFAULT_PRIVILEGES;
  return <div data-controller-name="Archive Manifesto" className="flex flex-col justify-between h-full space-y-8" data-api-unique-id='archivemanifesto-r4957df629d110a47-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
      {/* Studio Header Brand */}
      <div className="space-y-4" data-api-unique-id='archivemanifesto-reea85cf785cd9308-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
        <div className="flex items-center gap-3" data-api-unique-id='archivemanifesto-rb42db20ba0d86a00-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
          <div className="w-10 h-10 border border-border bg-card p-1.5 flex items-center justify-center" data-api-unique-id='archivemanifesto-r4eaf64d8828da115-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
            {/* Project unified brand logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={projectLogo} alt="Julian Vane Studio Monogram" className="w-full h-full object-contain" data-api-unique-id='archivemanifesto-r7f212f8712ea944e-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' />
          </div>
          <div data-api-unique-id='archivemanifesto-r08dda289e7157c35-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
            <span className="font-serif text-lg tracking-wider font-semibold block text-foreground" data-api-unique-id='archivemanifesto-r538c318a217d2765-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
              JULIAN VANE
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground block" data-api-unique-id='archivemanifesto-r5ebdd0afeac3d46c-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
              Atelier & Archival Darkroom
            </span>
          </div>
        </div>

        <div className="pt-2" data-api-unique-id='archivemanifesto-r3beabc11fc253e20-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.15]" data-api-unique-id='archivemanifesto-r69de6cebaed1378a-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
            Entry to Julian Vane Studio Archive
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-lg" data-api-unique-id='archivemanifesto-r3f277504feeeaadc-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
            Registration establishes an exclusive liaison for private silver gelatin edition proofs,
            architectural commissions, and unreleased medium format master contact sheets.
          </p>
        </div>
      </div>

      {/* Visual Anchor: Archival Darkroom Visual */}
      <div className="relative border border-border bg-card overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full" data-api-unique-id='archivemanifesto-rb46442e623baa287-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
        <EditableImg propKey="archive-manifesto-visual" needLargeImage keywords="monochrome darkroom medium format silver gelatin photography print grain minimalism aesthetic" description="Minimalist monochrome darkroom photography, medium format negative contact sheet under red safelight glow, tactile silver gelatin print edge, editorial gallery aesthetic" className="w-full h-full object-cover" data-api-unique-id='archivemanifesto-rf97430e347eacbed-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' />
        {/* Subtle darkroom exposure corner register marks */}
        <div className="absolute top-2 left-2 text-[9px] uppercase tracking-widest text-white/70 font-mono bg-black/60 px-1.5 py-0.5" data-api-unique-id='archivemanifesto-r1b90d56a7ec7b2d2-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
          Frame Exp. 120 / Silver Gelatin
        </div>
        <div className="absolute bottom-2 right-2 text-[9px] uppercase tracking-widest text-white/70 font-mono bg-black/60 px-1.5 py-0.5" data-api-unique-id='archivemanifesto-r014df58ea7b90637-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
          Archival Repository
        </div>
      </div>

      {/* 4 Archival Privileges List */}
      <div className="border-t border-border pt-6" data-api-unique-id='archivemanifesto-r9e5ef97e4086a6f6-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-api-unique-id='archivemanifesto-r8a0181c20488311f-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
          Privileges of Established Client Relations
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='archivemanifesto-r7f15b80b318d261f-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
          {displayPrivileges.map((item, index) => <div key={item.id} className="p-3 border border-border/80 bg-card/60 space-y-1.5" data-api-unique-id='archivemanifesto-r3445ac2fa4643971-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' data-api-in-loop='1'>
              <div className="flex items-baseline justify-between text-xs" data-api-unique-id='archivemanifesto-r64d418c620baab2b-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' data-api-in-loop='1'>
                <span className="font-mono text-[10px] text-primary font-semibold" data-api-unique-id='archivemanifesto-r34c156fc3071e2bf-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' data-api-in-loop='1' data-api-bind-info={`displayPrivileges-${index}-number`} data-api-map-var-name='item'>
                  {item.number}
                </span>
                <span className="font-medium text-foreground text-xs" data-api-unique-id='archivemanifesto-rf8142c3e2b5f3feb-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' data-api-in-loop='1' data-api-bind-info={`displayPrivileges-${index}-title`} data-api-map-var-name='item'>{item.title}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug" data-api-unique-id='archivemanifesto-rbc85c0e0cd1e91a9-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto' data-api-in-loop='1' data-api-bind-info={`displayPrivileges-${index}-description`} data-api-map-var-name='item'>
                {item.description}
              </p>
            </div>)}
        </div>
      </div>

      {/* Archival Colophon footnote */}
      <div className="text-[11px] text-muted-foreground/80 flex items-center justify-between pt-2 border-t border-border/40 font-mono" data-api-unique-id='archivemanifesto-r5c0ec9964b372fff-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>
        <span data-api-unique-id='archivemanifesto-r5a7fa4a899cd8ef8-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>COLOPHON: EDITION ACQUISITIONS</span>
        <span data-api-unique-id='archivemanifesto-ra60afb47e9790e60-s2533182751' data-api-unique-page-name='src/frontend/components/ClientRegister/ArchiveManifesto'>CLIENT CLASS: DIRECT</span>
      </div>
    </div>;
}