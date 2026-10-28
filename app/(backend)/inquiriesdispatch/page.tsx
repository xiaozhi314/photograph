"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { CommissionInquiryDTO, InquiryMetricsDTO, InquiryStatus, ProjectType } from "@/backend/types/InquiriesDispatch";
import { getInquiriesQueue, openInquiryReview, dispatchConsultationReply } from "@/backend/actions/InquiriesDispatch";
import { InquiriesDispatch } from "@/backend/route-params";
import { useAdminSession } from "@/tools/BackendSession";
import MetricBar from "@/backend/components/InquiriesDispatch/MetricBar";
import InquiriesTable from "@/backend/components/InquiriesDispatch/InquiriesTable";
import DossierView from "@/backend/components/InquiriesDispatch/DossierView";
import ReplyWorkbench from "@/backend/components/InquiriesDispatch/ReplyWorkbench";

// Initial fallback mock data preserved for zero-flicker UI continuity
const INITIAL_PACKAGES = {
  pkg_1: {
    id: "pkg_1",
    title: "Architectural Monograph & Site Survey",
    serviceType: "ARCHITECTURAL_MONOGRAPH" as const,
    basePrice: 14500,
    priceDisplay: "$14,500 – $22,000",
    durationEstimate: "4–6 Weeks Post-Production",
    deliverables: ["Medium-format digital architectural plates (Phase One IQ4 150MP)", "High-resolution master archival TIFFs + web portfolio exports", "Full publication rights and monograph editorial clearance", "Custom 16x20 darkroom fiber gelatin exhibition silver print"],
    isActive: true,
    sortOrder: 1,
    createdAt: new Date("2025-01-01T00:00:00Z"),
    updatedAt: new Date("2025-01-01T00:00:00Z")
  },
  pkg_2: {
    id: "pkg_2",
    title: "Editorial & Curatorial Portraiture",
    serviceType: "EDITORIAL_PORTRAITURE" as const,
    basePrice: 8500,
    priceDisplay: "$8,500 – $14,000",
    durationEstimate: "2–3 Weeks Post-Production",
    deliverables: ["On-location or studio natural light editorial portrait sittings", "8 retouched master exhibition plates", "Editorial press kit and archival digital catalog", "Licensing package for monograph and global print distribution"],
    isActive: true,
    sortOrder: 2,
    createdAt: new Date("2025-01-01T00:00:00Z"),
    updatedAt: new Date("2025-01-01T00:00:00Z")
  },
  pkg_3: {
    id: "pkg_3",
    title: "Commercial Campaign & Creative Direction",
    serviceType: "COMMERCIAL_CAMPAIGN" as const,
    basePrice: 28000,
    priceDisplay: "$28,000 – $45,000",
    durationEstimate: "6–8 Weeks Production Cycle",
    deliverables: ["Full photographic direction and lighting crew on-site", "24 master high-resolution plates with bespoke color grade", "Multi-territory commercial advertising usage rights (2 years)", "Dedicated digital tech and calibrated on-set monitor station"],
    isActive: true,
    sortOrder: 3,
    createdAt: new Date("2025-01-01T00:00:00Z"),
    updatedAt: new Date("2025-01-01T00:00:00Z")
  },
  pkg_4: {
    id: "pkg_4",
    title: "Curatorial Print Acquisition & Folio",
    serviceType: "PRINT_ACQUISITION" as const,
    basePrice: 6200,
    priceDisplay: "$6,200 – $12,500",
    durationEstimate: "10 Business Days",
    deliverables: ["Limited edition pigment ink prints on Hahnemühle Photo Rag Baryta", "Hand-signed and embossed certificate of authenticity", "Custom linen presentation clamshell folio box", "Museum conservation framing advisory"],
    isActive: true,
    sortOrder: 4,
    createdAt: new Date("2025-01-01T00:00:00Z"),
    updatedAt: new Date("2025-01-01T00:00:00Z")
  }
};
const INITIAL_INQUIRIES: CommissionInquiryDTO[] = [{
  id: "INQ-2025-089",
  clientId: "usr_client_01",
  servicePackageId: "pkg_1",
  clientName: "Eleanor Vance-Stirling",
  clientEmail: "e.vancestirling@atelier-brutalist.ch",
  organization: "Vance Architecture Foundation",
  projectType: "EDITORIAL",
  budgetTier: "$18,000 – $24,000",
  projectBrief: "Commissioning a comprehensive photographic monograph of our newly completed alpine thermal pavilion in Vals. We require meticulous dusk and dawn light studies capturing the interaction between local quartzite masonry and alpine snow drifts. We seek museum-grade medium format capture emphasizing stillness and brutalist structural integrity for a dedicated monograph published by Lars Müller.",
  clientMessage: "We have curated site access approvals for early morning light between 05:30 and 08:30. Drone permits are also secured if aerial plates are deemed necessary by Julian.",
  targetTimeline: "October – November 2025 (Autumn Frost)",
  location: "Vals, Graubünden, Switzerland",
  status: "NEW",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date("2025-02-14T08:24:00Z"),
  updatedAt: new Date("2025-02-14T08:24:00Z"),
  servicePackage: INITIAL_PACKAGES["pkg_1"],
  repliedByName: null
}, {
  id: "INQ-2025-084",
  clientId: "usr_client_02",
  servicePackageId: "pkg_2",
  clientName: "David K. Lindqvist",
  clientEmail: "d.lindqvist@kultur-tidsskrift.se",
  organization: "Nordic Review of Art & Literature",
  projectType: "PORTRAIT",
  budgetTier: "$10,000 – $15,000",
  projectBrief: "Cover feature portrait sitting for poet and essayist Tomas M. ahead of his Venice Biennale honorary symposium. We need severe, evocative black-and-white portraits utilizing chiaroscuro tungsten and natural northern skylight in his Stockholm study.",
  clientMessage: "Subject is available for a single 4-hour window on March 18th. We require 4 select plates cleared for European magazine cover print.",
  targetTimeline: "March 15 – 22, 2025",
  location: "Södermalm, Stockholm, Sweden",
  status: "IN_REVIEW",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date("2025-02-11T14:10:00Z"),
  updatedAt: new Date("2025-02-12T09:40:00Z"),
  servicePackage: INITIAL_PACKAGES["pkg_2"],
  repliedByName: null
}, {
  id: "INQ-2025-078",
  clientId: "usr_client_03",
  servicePackageId: "pkg_3",
  clientName: "Claire Renard-Dubois",
  clientEmail: "crenard@maison-auguste.fr",
  organization: "Maison Auguste Horlogerie",
  projectType: "COMMERCIAL",
  budgetTier: "$35,000 – $48,000",
  projectBrief: "Global visual identity and campaign imagery for our 150th anniversary grand complication chronometer. Julian's poetic treatment of shadow, brushed titanium, and mechanical stillness is uniquely suited to elevate our campaign above traditional luxury advertising.",
  clientMessage: "Full watch prototypes will be dispatched via bonded security transport to Julian's studio or Geneva location. Pre-production meeting requested for late February.",
  targetTimeline: "April 2025 Production",
  location: "Geneva & Julian Vane Atelier, Paris",
  status: "IN_REVIEW",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date("2025-02-08T11:05:00Z"),
  updatedAt: new Date("2025-02-09T16:20:00Z"),
  servicePackage: INITIAL_PACKAGES["pkg_3"],
  repliedByName: null
}, {
  id: "INQ-2025-066",
  clientId: "usr_client_04",
  servicePackageId: "pkg_4",
  clientName: "Marcus Thorne",
  clientEmail: "m.thorne@grosvenor-curatorial.co.uk",
  organization: "Grosvenor Contemporary Collection",
  projectType: "ACQUISITION",
  budgetTier: "$12,000 – $16,000",
  projectBrief: "Acquisition inquiry for a complete suite of four silver gelatin exhibition prints from the 'Nocturnes of the Baltic' series (2022). Intended for permanent installation in our Mayfair boardroom and public gallery atrium.",
  clientMessage: "We request framing specifications matching the Tate Modern 2023 group retrospective (dark fumed European oak frames with museum AR glass).",
  targetTimeline: "Immediate / Q1 2025",
  location: "London, United Kingdom",
  status: "REPLIED",
  curatorReply: "Dear Mr. Thorne,\n\nWe have reviewed the Grosvenor Collection's acquisition inquiry with Julian. We are pleased to confirm that Plates #04, #07, #11, and #14 from the 'Nocturnes of the Baltic' series remain available in Edition 3 of 5.\n\nProduction & Framing Terms:\n- Darkroom contact: All four plates will be prepared directly on Hahnemühle Baryta with archival selenium toning.\n- Custom framing: We partner with John Jones London to replicate the Tate 2023 fumed oak profiles with Optium Museum Acrylic.\n- Curatorial quote: $14,200 inclusive of bespoke archival presentation boxes, insurance, and courier dispatch.\n\nTarget delivery window: March 28, 2025.",
  repliedAt: "2025-02-06T15:30:00Z",
  repliedById: "usr_curator_01",
  createdAt: new Date("2025-02-04T10:15:00Z"),
  updatedAt: new Date("2025-02-06T15:30:00Z"),
  servicePackage: INITIAL_PACKAGES["pkg_4"],
  repliedByName: "Julian Vane (Principal Artist)"
}, {
  id: "INQ-2025-052",
  clientId: "usr_client_05",
  servicePackageId: null,
  clientName: "Siddharth Menon",
  clientEmail: "s.menon@kerala-biennale.org",
  organization: "Kochi-Muziris Arts Trust",
  projectType: "EDITORIAL",
  budgetTier: "$8,000 – $12,000",
  projectBrief: "Invitation for Julian Vane to undertake a site-specific artist residency and photographic inquiry documenting heritage spice warehouses and backwater canals prior to urban revitalization. Custom open brief with full curatorial autonomy.",
  clientMessage: "The foundation provides full travel stipend, artist accommodation at the heritage waterfront residency, and local archival assistant.",
  targetTimeline: "December 2025 – January 2026",
  location: "Fort Kochi & Mattancherry, India",
  status: "REPLIED",
  curatorReply: "Dear Siddharth,\n\nJulian has warmly received the Kochi-Muziris Arts Trust commission invitation. The poetic tension between historic maritime storage and coastal decay resonates deeply with the studio's ongoing archival inquiries.\n\nWe accept the curatorial residency in principle for a 14-day production window in early January 2026. Custom equipment shipment protocols (silica-conditioned cases for monsoon humidity) will be coordinated with your curatorial desk in July.\n\nFormal letter of agreement and equipment manifest to follow.",
  repliedAt: "2025-01-29T11:45:00Z",
  repliedById: "usr_curator_01",
  createdAt: new Date("2025-01-25T09:00:00Z"),
  updatedAt: new Date("2025-01-29T11:45:00Z"),
  servicePackage: null,
  repliedByName: "Julian Vane (Principal Artist)"
}, {
  id: "INQ-2025-095",
  clientId: "usr_client_06",
  servicePackageId: "pkg_1",
  clientName: "Helena von Bismark",
  clientEmail: "h.bismark@baukultur-berlin.de",
  organization: "Atelier Baukultur Berlin",
  projectType: "EDITORIAL",
  budgetTier: "$16,000 – $22,000",
  projectBrief: "Photographic documentation of the decommissioned Teufelsberg listening station restoration. We require high-contrast monochromatic medium format plates capturing the decaying acoustic domes juxtaposed against new timber pavilion structures.",
  clientMessage: "Access permits are granted by the Berlin Senate for twilight hours. Julian will have exclusive access without visitors.",
  targetTimeline: "Late Spring 2025",
  location: "Teufelsberg, Berlin, Germany",
  status: "NEW",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date("2025-02-15T09:15:00Z"),
  updatedAt: new Date("2025-02-15T09:15:00Z"),
  servicePackage: INITIAL_PACKAGES["pkg_1"],
  repliedByName: null
}];
const INITIAL_METRICS: InquiryMetricsDTO = {
  total: 6,
  newCount: 2,
  inReviewCount: 2,
  repliedCount: 2,
  avgTurnaroundHours: 36.5
};

// UI Component interface adapter: converts CommissionInquiryDTO into table's expected format (dates as ISO strings)
interface TableInquiryView {
  id: string;
  clientId: string;
  servicePackageId: string | null;
  clientName: string;
  clientEmail: string;
  organization?: string | null;
  projectType: ProjectType;
  budgetTier: string;
  projectBrief: string;
  clientMessage?: string | null;
  targetTimeline: string;
  location?: string | null;
  status: InquiryStatus;
  curatorReply?: string | null;
  repliedAt?: string | null;
  repliedById?: string | null;
  createdAt: string;
  updatedAt: string;
  servicePackage?: {
    id: string;
    title: string;
    serviceType: "ARCHITECTURAL_MONOGRAPH" | "EDITORIAL_PORTRAITURE" | "COMMERCIAL_CAMPAIGN" | "PRINT_ACQUISITION";
    basePrice: number;
    priceDisplay: string;
    durationEstimate: string;
    deliverables: string[];
    isActive: boolean;
    sortOrder: number;
  } | null;
  repliedByCuratorName?: string | null;
}
function toTableInquiry(dto: CommissionInquiryDTO): TableInquiryView {
  return {
    id: dto.id,
    clientId: dto.clientId,
    servicePackageId: dto.servicePackageId,
    clientName: dto.clientName,
    clientEmail: dto.clientEmail,
    organization: dto.organization,
    projectType: dto.projectType,
    budgetTier: dto.budgetTier,
    projectBrief: dto.projectBrief,
    clientMessage: dto.clientMessage,
    targetTimeline: dto.targetTimeline,
    location: dto.location,
    status: dto.status,
    curatorReply: dto.curatorReply,
    repliedAt: dto.repliedAt,
    repliedById: dto.repliedById,
    createdAt: dto.createdAt instanceof Date ? dto.createdAt.toISOString() : String(dto.createdAt),
    updatedAt: dto.updatedAt instanceof Date ? dto.updatedAt.toISOString() : String(dto.updatedAt),
    servicePackage: dto.servicePackage ? {
      id: dto.servicePackage.id,
      title: dto.servicePackage.title,
      serviceType: dto.servicePackage.serviceType,
      basePrice: dto.servicePackage.basePrice,
      priceDisplay: dto.servicePackage.priceDisplay,
      durationEstimate: dto.servicePackage.durationEstimate,
      deliverables: dto.servicePackage.deliverables,
      isActive: dto.servicePackage.isActive,
      sortOrder: dto.servicePackage.sortOrder
    } : null,
    repliedByCuratorName: dto.repliedByName
  };
}
export default function InquiriesDispatchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const session = useAdminSession();

  // Route param state via route_helpers contract
  const routeParams = useMemo(() => {
    return InquiriesDispatch.getParams(searchParams);
  }, [searchParams]);

  // Server data state
  const [inquiries, setInquiries] = useState<CommissionInquiryDTO[]>(INITIAL_INQUIRIES);
  const [metrics, setMetrics] = useState<InquiryMetricsDTO>(INITIAL_METRICS);

  // Filters state
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [projectTypeFilter, setProjectTypeFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Selected inquiry ID state
  const [selectedId, setSelectedId] = useState<string>(() => {
    if (routeParams.inquiryId) {
      return routeParams.inquiryId;
    }
    return INITIAL_INQUIRIES[0]?.id || "";
  });

  // Fetch inquiries queue from backend action
  const fetchQueueData = useCallback(async () => {
    try {
      const res = await getInquiriesQueue({
        status: statusFilter as InquiryStatus | "ALL",
        projectType: projectTypeFilter as ProjectType | "ALL",
        search: searchQuery
      });
      if (res && res.inquiries) {
        setInquiries(res.inquiries);
        if (res.metrics) {
          setMetrics(res.metrics);
        }
      }
    } catch (err) {
      console.error("Failed to load inquiries queue from action:", err);
    }
  }, [statusFilter, projectTypeFilter, searchQuery]);

  // Initial and filter-triggered fetch
  useEffect(() => {
    fetchQueueData();
  }, [fetchQueueData]);

  // Sync selectedId with route search param when param changes
  useEffect(() => {
    if (routeParams.inquiryId) {
      setSelectedId(routeParams.inquiryId);
    }
  }, [routeParams.inquiryId]);

  // Currently active inquiry entity
  const selectedInquiry = useMemo(() => {
    return inquiries.find(i => i.id === selectedId) || inquiries[0] || null;
  }, [inquiries, selectedId]);

  // Ensure selectedId is synced to route if changed
  const updateSelectedIdInRoute = useCallback((id: string) => {
    InquiriesDispatch.navigateToDetail(router, {
      inquiryId: id
    });
  }, [router]);

  // Selection handler: automatically transitions NEW -> IN_REVIEW per directive
  const handleSelectInquiry = async (itemOrId: CommissionInquiryDTO | string) => {
    const targetId = typeof itemOrId === "string" ? itemOrId : itemOrId.id;
    setSelectedId(targetId);
    updateSelectedIdInRoute(targetId);
    const currentItem = inquiries.find(i => i.id === targetId);
    if (currentItem && currentItem.status === "NEW") {
      try {
        const updated = await openInquiryReview(targetId);
        if (updated) {
          setInquiries(prev => prev.map((item, index) => item.id === targetId ? updated : item));
          setMetrics(prev => ({
            ...prev,
            newCount: Math.max(0, prev.newCount - 1),
            inReviewCount: prev.inReviewCount + 1
          }));
          toast.info(`Inquiry ${targetId} opened for active curatorial review (status: IN_REVIEW).`);
        }
      } catch (err) {
        console.error("Failed to transition inquiry to IN_REVIEW:", err);
      }
    }
  };

  // Dispatch response handler: advances status from IN_REVIEW to REPLIED
  const handleDispatchReply = async (replyText: string) => {
    if (!selectedInquiry) return;
    try {
      const updated = await dispatchConsultationReply({
        inquiryId: selectedInquiry.id,
        curatorReply: replyText
      });
      if (updated) {
        setInquiries(prev => prev.map((item, index) => item.id === selectedInquiry.id ? updated : item));
        setMetrics(prev => ({
          ...prev,
          inReviewCount: Math.max(0, prev.inReviewCount - 1),
          repliedCount: prev.repliedCount + 1
        }));
        toast.success(`Consultation response successfully dispatched for ${selectedInquiry.clientName}.`);
      }
    } catch (err) {
      console.error("Failed to dispatch consultation reply:", err);
      toast.error(err instanceof Error ? err.message : "Failed to dispatch consultation proposal.");
    }
  };

  // Prepare table data with view-layer adapter
  const tableInquiries: TableInquiryView[] = useMemo(() => {
    return inquiries.map(toTableInquiry);
  }, [inquiries]);
  return <div className="w-full max-w-full min-w-0 p-4 lg:p-6 bg-background text-foreground flex flex-col gap-6" data-api-unique-id='page-r84465cf17988c53c-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
      {/* Page Title & Operational Masthead */}
      <div className="flex flex-col gap-2 min-w-0" data-api-unique-id='page-re8a2cff25681cc35-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
        <div className="flex items-center gap-3" data-api-unique-id='page-ra7750d4277038400-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
          <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" data-api-unique-id='page-r905a85f6a7e2c86f-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page' />
          <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground font-serif" data-api-unique-id='page-rb02e704dbcde9f77-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
            Commission Inquiries & Consultation Queue
          </h1>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-muted text-muted-foreground border border-border" data-api-unique-id='page-raece0d6db4d6853e-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
            Curator Admin / B04
          </span>
          {session.full_name && <span className="text-xs text-muted-foreground font-mono ml-auto" data-api-unique-id='page-r7b646f87e60235b2-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
              Curator: {session.full_name}
            </span>}
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl" data-api-unique-id='page-rf22bba2fe9ae881c-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
          Active curatorial pipeline for inbound architectural monographs, bespoke portrait commissions,
          and institutional acquisitions. Review project briefs, consult package rate specifications, and dispatch
          binding studio proposals.
        </p>
      </div>

      {/* Top Metric Bar */}
      <MetricBar metrics={metrics} selectedStatusFilter={statusFilter} onSelectStatusFilter={setStatusFilter} data-api-unique-id='page-r29880d83fc494829-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page' />

      {/* Main Curatorial Workspace: 42% Queue Table | 58% Dossier & Reply Workbench */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-w-0 items-start" data-api-unique-id='page-r52e4b8ca6400b156-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
        {/* Left Column (42% on XL): Inquiries Queue Table */}
        <div className="xl:col-span-5 min-w-0 flex flex-col gap-4" data-api-unique-id='page-r0177f48ea0c3c9dc-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
          <InquiriesTable inquiries={inquiries} selectedId={selectedInquiry?.id || null} onSelectInquiry={inq => handleSelectInquiry(inq)} statusFilter={statusFilter} onStatusFilterChange={setStatusFilter} projectTypeFilter={projectTypeFilter} onProjectTypeFilterChange={setProjectTypeFilter} searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} data-api-unique-id='page-r5d50e8d664f8044b-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page' />
        </div>

        {/* Right Column (58% on XL): Dossier Brief & Reply Composition Workbench */}
        <div className="xl:col-span-7 min-w-0 flex flex-col gap-6" data-api-unique-id='page-r7358a45303d742d0-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
          {selectedInquiry ? <>
              {/* Detailed Brief Dossier */}
              <DossierView inquiry={selectedInquiry} data-api-unique-id='page-r36189d66c642e51b-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page' />

              {/* Consultation Reply Workbench */}
              <ReplyWorkbench inquiry={selectedInquiry} onDispatchReply={handleDispatchReply} data-api-unique-id='page-r6b812d633a616698-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page' />
            </> : <div className="rounded-lg border border-border bg-card p-12 text-center text-muted-foreground flex flex-col items-center justify-center" data-api-unique-id='page-r8c08ddc4d0033a4c-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>
              <p className="text-sm" data-api-unique-id='page-r973073ef22f52e45-s161213597' data-api-unique-page-name='app/(backend)/inquiriesdispatch/page'>No commission inquiry selected from the active queue.</p>
            </div>}
        </div>
      </div>
    </div>;
}