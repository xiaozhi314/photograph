"use client";

import React, { useState, useEffect } from "react";
import CollectorHeader from "@/frontend/components/ClientPortal/CollectorHeader";
import BriefsIndex from "@/frontend/components/ClientPortal/BriefsIndex";
import InspectorPane from "@/frontend/components/ClientPortal/InspectorPane";
import { ClientProfile, CommissionInquiryItem, ProjectType, BriefStatus } from "@/frontend/types/ClientPortal";
import { getClientPortalData, updateInquiryClientMessage } from "@/frontend/actions/ClientPortal";
const INITIAL_PROFILE: ClientProfile = {
  id: "usr_client_09182",
  fullName: "Eleanor Vance-Castiglione",
  username: "eleanor.vance",
  email: "e.castiglione@vance-holdings.ch",
  phone: "+41 22 819 4400",
  organization: "Castiglione Contemporary Foundation",
  avatarUrl: null
};
const INITIAL_BRIEFS: CommissionInquiryItem[] = [{
  id: "inq_77491_arch",
  clientId: "usr_client_09182",
  servicePackageId: "pkg_arch_mono_01",
  servicePackage: {
    id: "pkg_arch_mono_01",
    title: "Architectural Monograph & Site Portfolio",
    serviceType: "ARCHITECTURAL_MONOGRAPH",
    basePrice: 8500,
    priceDisplay: "$8,500 – $14,000",
    durationEstimate: "4–6 Weeks Post-Production",
    deliverables: ["10 Master Gelatin Silver Exhibition Prints (16×20 in)", "Hardbound Linen Folio with Letterpress Colophon", "High-Resolution Archival TIFF Negatives & Scans", "Full Institutional Architectural Usage Clearance"]
  },
  clientName: "Eleanor Vance-Castiglione",
  clientEmail: "e.castiglione@vance-holdings.ch",
  organization: "Castiglione Contemporary Foundation",
  projectType: "EDITORIAL",
  budgetTier: "$10,000 – $15,000",
  projectBrief: "A comprehensive monochrome study of our private pavilion designed by Peter Zumthor in Graubünden. Focus on the raw gneiss stonework during twilight and early morning alpine mist. The folio will accompany the permanent catalog publication.",
  clientMessage: "Please note access to the upper cantilevered terrace is restricted between 06:00 and 08:30 due to morning temperature shifts. Key curator keys have been deposited at the Zurich secretariat.",
  targetTimeline: "Autumn Equinox (October 2025)",
  location: "Vals, Graubünden, Switzerland",
  status: "REPLIED",
  curatorReply: "Honored to accept this archival study. We will be deploying the Linhof Technorama 617 medium-format alongside bespoke Ilford HP5+ emulsion batches rated for high-contrast alpine granite. Studio dates and transport manifests are locked.",
  repliedAt: "2025-02-14 16:30 UTC",
  repliedByName: "Julian Vane",
  repliedById: "usr_curator_vane_01",
  createdAt: new Date("2025-02-10T11:20:00.000Z"),
  updatedAt: new Date("2025-02-14T16:30:00.000Z")
}, {
  id: "inq_88320_port",
  clientId: "usr_client_09182",
  servicePackageId: "pkg_edit_port_02",
  servicePackage: {
    id: "pkg_edit_port_02",
    title: "Editorial Portraiture & Sittings",
    serviceType: "EDITORIAL_PORTRAITURE",
    basePrice: 4200,
    priceDisplay: "$4,200 – $6,500",
    durationEstimate: "2–3 Weeks",
    deliverables: ["6 Hand-Developed Darkroom Contact Plates", "3 Master Selenium Toned Fiber Prints", "Editorial Press Kit with Rights License"]
  },
  clientName: "Eleanor Vance-Castiglione",
  clientEmail: "e.castiglione@vance-holdings.ch",
  organization: "Castiglione Contemporary Foundation",
  projectType: "PORTRAIT",
  budgetTier: "$5,000 – $8,000",
  projectBrief: "Double seated portraiture study of the foundation's honorary trustees in their historic library salon. Natural northern light exposure on 4x5 large format sheet film.",
  clientMessage: "Both sitters prefer afternoon sessions. We can arrange natural daylight diffusion with antique linen drapes in the reading room.",
  targetTimeline: "Late Spring (May 2025)",
  location: "Kaufleuten Salon, Zurich",
  status: "IN_REVIEW",
  curatorReply: null,
  repliedAt: null,
  repliedByName: null,
  repliedById: null,
  createdAt: new Date("2025-02-22T09:15:00.000Z"),
  updatedAt: new Date("2025-02-24T14:00:00.000Z")
}, {
  id: "inq_99104_acq",
  clientId: "usr_client_09182",
  servicePackageId: null,
  servicePackage: null,
  clientName: "Eleanor Vance-Castiglione",
  clientEmail: "e.castiglione@vance-holdings.ch",
  organization: "Castiglione Contemporary Foundation",
  projectType: "ACQUISITION",
  budgetTier: "$20,000+",
  projectBrief: "Bespoke direct acquisition commission: 3 unique 20×24 inch selenium-toned gelatin silver prints from the unpublished 'Kyoto Night Mist' negative register (1998 negatives). Requesting custom walnut box framing with museum glass.",
  clientMessage: "We require verification of archival negative preservation stamps prior to print batch sign-off.",
  targetTimeline: "Immediate / Private Collection Acquisition",
  location: "Studio Archive Vault, Milan & Kyoto",
  status: "NEW",
  curatorReply: null,
  repliedAt: null,
  repliedByName: null,
  repliedById: null,
  createdAt: new Date("2025-03-01T15:45:00.000Z"),
  updatedAt: new Date("2025-03-01T15:45:00.000Z")
}, {
  id: "inq_10482_comm",
  clientId: "usr_client_09182",
  servicePackageId: "pkg_comm_camp_03",
  servicePackage: {
    id: "pkg_comm_camp_03",
    title: "Commercial Campaign & Visual Narrative",
    serviceType: "COMMERCIAL_CAMPAIGN",
    basePrice: 12000,
    priceDisplay: "$12,000 – $22,000",
    durationEstimate: "6–8 Weeks",
    deliverables: ["Complete Narrative Negative Contact Sheet Binder", "Global Archival Campaign Usage License (5 Years)", "Exhibition Grade Display Transparencies"]
  },
  clientName: "Eleanor Vance-Castiglione",
  clientEmail: "e.castiglione@vance-holdings.ch",
  organization: "Castiglione Contemporary Foundation",
  projectType: "COMMERCIAL",
  budgetTier: "$15,000 – $25,000",
  projectBrief: "Visual essay capturing the installation of monumental bronze sculptures along the Lake Geneva shoreline. Capturing dawn logistics and tactile hand-patination techniques.",
  clientMessage: "Liaison with municipal lake authorities has been established. Security clearance badges will be issued upon team arrival.",
  targetTimeline: "Summer (July 2025)",
  location: "Montreux & Vevey Waterfront, Switzerland",
  status: "REPLIED",
  curatorReply: "Project accepted in collaboration with Atelier Geneva. Field equipment will include weather-sealed Hasselblad 503CW systems and custom Kodak Tri-X 400 stock. Contract dispatched to your legal liaison.",
  repliedAt: "2025-01-28 10:15 UTC",
  repliedByName: "Julian Vane",
  repliedById: "usr_curator_vane_01",
  createdAt: new Date("2025-01-20T08:00:00.000Z"),
  updatedAt: new Date("2025-01-28T10:15:00.000Z")
}];
export default function ClientPortalPage() {
  const [profile, setProfile] = useState<ClientProfile>(INITIAL_PROFILE);
  const [briefs, setBriefs] = useState<CommissionInquiryItem[]>(INITIAL_BRIEFS);
  const [selectedBriefId, setSelectedBriefId] = useState<string>("inq_99104_acq");
  const [typeFilter, setTypeFilter] = useState<ProjectType | "ALL">("ALL");
  const [statusFilter, setStatusFilter] = useState<BriefStatus | "ALL">("ALL");
  useEffect(() => {
    let isMounted = true;
    getClientPortalData().then(data => {
      if (!isMounted || !data) return;
      if (data.profile) {
        setProfile(data.profile);
      }
      if (data.briefs && data.briefs.length > 0) {
        setBriefs(data.briefs);
        setSelectedBriefId(prev => {
          const exists = data.briefs.some(b => b.id === prev);
          return exists ? prev : data.briefs[0].id;
        });
      }
    }).catch(() => {
      // Retain initial visual content on network or auth error
    });
    return () => {
      isMounted = false;
    };
  }, []);
  const totalCount = briefs.length;
  const inReviewCount = briefs.filter(b => b.status === "NEW" || b.status === "IN_REVIEW").length;
  const repliedCount = briefs.filter(b => b.status === "REPLIED").length;
  const handleUpdateClientMessage = async (briefId: string, newMessage: string) => {
    try {
      const updatedItem = await updateInquiryClientMessage({
        inquiryId: briefId,
        clientMessage: newMessage
      });
      setBriefs(prev => prev.map((item, index) => item.id === briefId ? updatedItem : item));
    } catch {
      // Local optimistic fallback if action rejected
      setBriefs(prev => prev.map((item, index) => item.id === briefId ? {
        ...item,
        clientMessage: newMessage,
        updatedAt: new Date()
      } : item));
    }
  };
  const selectedBrief = briefs.find(b => b.id === selectedBriefId) || briefs[0] || null;
  return <main className="min-h-screen bg-background text-foreground pb-12 sm:pb-16 pt-4 sm:pt-6" data-api-unique-id='page-rd4029a189424c06a-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6" data-api-unique-id='page-r7d874c798f7cc86b-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page'>
        {/* Section 1: Collector Identity and Engagement Metrics */}
        <CollectorHeader profile={profile} metrics={{
        total: totalCount,
        inReview: inReviewCount,
        replied: repliedCount
      }} totalCount={totalCount} inReviewCount={inReviewCount} repliedCount={repliedCount} data-api-unique-id='page-rf527cd2545c50dfb-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page' />

        {/* Section 2: Core Commission Inquiries Salon (Dual Column Workbench) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" data-api-unique-id='page-r20cb3734cc61de72-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page'>
          {/* Left Column: Briefs Filter and Index Stream (40% width on lg) */}
          <div className="lg:col-span-5 w-full min-w-0" data-api-unique-id='page-r847454c81418689d-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page'>
            <BriefsIndex briefs={briefs} selectedBriefId={selectedBrief?.id || null} selectedId={selectedBrief?.id || null} onSelectBrief={(id: string) => setSelectedBriefId(id)} typeFilter={typeFilter} onTypeFilterChange={(type: string) => setTypeFilter(type as ProjectType | "ALL")} statusFilter={statusFilter} onStatusFilterChange={(status: string) => setStatusFilter(status as BriefStatus | "ALL")} data-api-unique-id='page-re43dfdece927fca5-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page' />
          </div>

          {/* Right Column: Curator Consultation & Inquiry Inspector (60% width on lg) */}
          <div className="lg:col-span-7 w-full min-w-0" data-api-unique-id='page-r7be746c274a1e8c9-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page'>
            <InspectorPane brief={selectedBrief} onUpdateClientMessage={handleUpdateClientMessage} data-api-unique-id='page-rbef5d7570915d33b-s1729084672' data-api-unique-page-name='app/(frontend)/clientportal/page' />
          </div>
        </div>
      </div>
    </main>;
}