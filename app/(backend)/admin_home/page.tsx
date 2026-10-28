"use client";

import React, { useState } from "react";
import QuickActionToolbar from "@/backend/components/admin_home/QuickActionToolbar";
import OverviewStatsRibbon from "@/backend/components/admin_home/OverviewStatsRibbon";
import CuratedCollectionsOverview from "@/backend/components/admin_home/CuratedCollectionsOverview";
import RecentInquiriesTable from "@/backend/components/admin_home/RecentInquiriesTable";
import InquiryDetailDrawer from "@/backend/components/admin_home/InquiryDetailDrawer";
import UploadSeriesModal from "@/backend/components/admin_home/UploadSeriesModal";
import type {
  InquiryItem,
  InquiryStatus,
  CollectionItem,
  OverviewStat,
} from "@/backend/types/admin_home";
import { toast } from "sonner";

const initialStats: OverviewStat[] = [
  {
    label: "Total Published Works",
    value: "142",
    subtext: "+14 plates this quarter",
    badge: "ARCHIVE OK",
  },
  {
    label: "Active Series / Folios",
    value: "8",
    subtext: "4 showcased on public wall",
    badge: "CURATED",
  },
  {
    label: "New Inquiries (Month)",
    value: "18",
    subtext: "3 awaiting consultation reply",
    badge: "ACTION REQ",
  },
  {
    label: "Profile Impressions",
    value: "24.6k",
    subtext: "+32% from global galleries",
    badge: "AUDIENCE",
  },
];

const initialCollections: CollectionItem[] = [
  {
    id: "collection-chiaroscuro",
    title: "Chiaroscuro & Solitude",
    rollNumber: "Roll No. 042",
    imageCount: 24,
    aspect: "portrait",
    aspectRatioClass: "aspect-[4/5]",
    isVisible: true,
    featuredOnHome: true,
    curatorNote: "Natural daylight study with warm linen drapery and soft carbon shadows.",
    medium: "120 Medium Format / Portra 160",
  },
  {
    id: "collection-sanctuary",
    title: "Sanctuary of Geometry",
    rollNumber: "Roll No. 045",
    imageCount: 18,
    aspect: "landscape",
    aspectRatioClass: "aspect-[16/9]",
    isVisible: true,
    featuredOnHome: true,
    curatorNote: "Minimalist plaster compositions capturing afternoon oblique raking sunlight.",
    medium: "Large Format 4x5 Monorail",
  },
  {
    id: "collection-monochrome",
    title: "Sculptural Monochrome",
    rollNumber: "Roll No. 038",
    imageCount: 32,
    aspect: "portrait",
    aspectRatioClass: "aspect-[4/5]",
    isVisible: false,
    featuredOnHome: false,
    curatorNote: "High-contrast silk drapery exploring tactile textures and tonal graduation.",
    medium: "Silver Gelatin / Ilford HP5",
  },
  {
    id: "collection-botanicals",
    title: "Herbarium & Glass Vials",
    rollNumber: "Roll No. 047",
    imageCount: 16,
    aspect: "landscape",
    aspectRatioClass: "aspect-[16/9]",
    isVisible: true,
    featuredOnHome: false,
    curatorNote: "Quiet botanical specimens preserved under antique diffused optical glass.",
    medium: "Mamiya 7II / Kodak Tri-X 400",
  },
];

const initialInquiries: InquiryItem[] = [
  {
    id: "INQ-2025-081",
    clientName: "Eleanor Vance (Atelier Cézanne)",
    clientEmail: "eleanor@cezanne-atelier.fr",
    projectType: "Editorial",
    inquiryDate: "Today, 10:24 AM",
    budgetRange: "€8,000 – €12,000",
    status: "NEW",
    projectBrief: "Haute couture seasonal retrospective catalog editorial shoot in Paris museum cloister.",
    clientMessage: "We have long admired Lumen's calm tonal discipline and would like to commission an 8-page series covering our Autumnal cashmere and sculptural millinery.",
    targetTimeline: "Late November 2025",
    location: "Paris, France",
  },
  {
    id: "INQ-2025-079",
    clientName: "Julian Thorne & Partners",
    clientEmail: "julian@thorne-architecture.co.uk",
    projectType: "Commercial",
    inquiryDate: "Yesterday",
    budgetRange: "£14,000 – £20,000",
    status: "IN_REVIEW",
    projectBrief: "Architectural monograph documenting light passage through raw rammed-earth pavilion in Cotswolds.",
    clientMessage: "Seeking medium-format analog captures across 4 dawn-to-dusk light cycles. Archival silver gelatin exhibition prints required for our Zurich monograph debut.",
    targetTimeline: "Early December 2025",
    location: "Gloucestershire, UK",
  },
  {
    id: "INQ-2025-076",
    clientName: "Dr. Maya Lindqvist",
    clientEmail: "m.lindqvist@karolinska-arts.se",
    projectType: "Portrait",
    inquiryDate: "Oct 28",
    budgetRange: "$4,500 – $6,000",
    status: "REPLIED",
    projectBrief: "Solemn academic leadership portraits for institutional archive and biennial publication.",
    clientMessage: "We prefer quiet natural window light and subtle tactile grain, avoiding modern clinical digital sheen. Two studio sessions planned in Stockholm.",
    targetTimeline: "Mid November 2025",
    location: "Stockholm, Sweden",
  },
  {
    id: "INQ-2025-072",
    clientName: "Kaito Moriyama (Sora Journal)",
    clientEmail: "kaito@soramagazine.jp",
    projectType: "Editorial",
    inquiryDate: "Oct 25",
    budgetRange: "¥1,200,000 – ¥1,800,000",
    status: "REPLIED",
    projectBrief: "Special feature on Japanese ceramic artisans working in Kyoto mountain kilns.",
    clientMessage: "Our editorial board requests a 12-plate photo essay focusing on clay smoke, mineral ash, and artisan hand gestures during wood firing.",
    targetTimeline: "January 2026",
    location: "Kyoto, Japan",
  },
  {
    id: "INQ-2025-068",
    clientName: "Camilla Rossini Fine Jewelry",
    clientEmail: "c.rossini@rossinigioielli.it",
    projectType: "Commercial",
    inquiryDate: "Oct 22",
    budgetRange: "€15,000 – €22,000",
    status: "NEW",
    projectBrief: "Fine jewelry campaign pairing antique emerald necklaces with natural raw marble slabs.",
    clientMessage: "Looking for museum-grade macro captures with organic natural daylight reflections. Zero harsh ring lighting; pure chiaroscuro aesthetics.",
    targetTimeline: "February 2026",
    location: "Milan, Italy",
  },
];

export default function AdminHomePage() {
  const [stats, setStats] = useState<OverviewStat[]>(initialStats);
  const [collections, setCollections] = useState<CollectionItem[]>(initialCollections);
  const [inquiries, setInquiries] = useState<InquiryItem[]>(initialInquiries);
  const [selectedStatus, setSelectedStatus] = useState<InquiryStatus | "ALL">("ALL");
  const [activeDrawerInquiry, setActiveDrawerInquiry] = useState<InquiryItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleToggleVisibility = (id: CollectionItem["id"]) => {
    setCollections((prev) =>
      prev.map((col) => {
        if (col.id === id) {
          const nextState = !col.isVisible;
          toast.success(
            `Collection "${col.title}" ${nextState ? "published to public gallery" : "archived to private vault"}`
          );
          return { ...col, isVisible: nextState };
        }
        return col;
      })
    );
  };

  const handleToggleFeatured = (id: CollectionItem["id"]) => {
    setCollections((prev) =>
      prev.map((col) => {
        if (col.id === id) {
          const next = !col.featuredOnHome;
          toast.success(
            `"${col.title}" ${next ? "pinned to homepage hero showcase" : "unpinned from homepage curation"}`
          );
          return { ...col, featuredOnHome: next };
        }
        return col;
      })
    );
  };

  const handleToggleAllFeatured = () => {
    setCollections((prev) => {
      const anyFeatured = prev.some((c) => c.featuredOnHome);
      const nextCollections = prev.map((c) => ({
        ...c,
        featuredOnHome: !anyFeatured,
      }));
      toast.success(
        !anyFeatured
          ? "All exhibition series marked as featured on homepage."
          : "Homepage featured slots reset to default."
      );
      return nextCollections;
    });
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (activeDrawerInquiry && activeDrawerInquiry.id === id) {
      setActiveDrawerInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleExportLogs = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Client,Email,Scope,Budget,Status,Date"]
        .concat(
          inquiries.map(
            (i) =>
              `"${i.id}","${i.clientName}","${i.clientEmail}","${i.projectType}","${i.budgetRange}","${i.status}","${i.inquiryDate}"`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `lumen_inquiries_ledger_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Client commission inquiries ledger exported as CSV.");
  };

  const handleAddSeries = (title: string, roll: string, count: number, medium: string) => {
    const newCol: CollectionItem = {
      id: "collection-chiaroscuro",
      title,
      rollNumber: roll,
      imageCount: count,
      aspect: "portrait",
      aspectRatioClass: "aspect-[4/5]",
      isVisible: true,
      featuredOnHome: false,
      curatorNote: `Newly ingested archival roll: ${medium}`,
      medium,
    };
    setCollections((prev) => [newCol, ...prev]);
    setStats((prev) =>
      prev.map((s, idx) =>
        idx === 1
          ? { ...s, value: String(parseInt(s.value, 10) + 1) }
          : idx === 0
          ? { ...s, value: String(parseInt(s.value, 10) + count) }
          : s
      )
    );
  };

  const featuredCount = collections.filter((c) => c.featuredOnHome).length;

  return (
    <div className="w-full max-w-full min-w-0 overflow-x-hidden p-4 lg:p-6 flex flex-col gap-6">
      {/* 1. Quick Actions & Status Masthead */}
      <QuickActionToolbar
        onQuickUpload={() => setIsUploadModalOpen(true)}
        featuredCount={featuredCount}
        onToggleAllFeatured={handleToggleAllFeatured}
        onExportLogs={handleExportLogs}
      />

      {/* 2. Overview Stats Ribbon */}
      <OverviewStatsRibbon stats={stats} />

      {/* 3. Core Curatorial Workspace: 7 / 5 Golden Ratio Split on xl */}
      <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-12 items-start">
        {/* Curated Collections Showcase (7 cols) */}
        <section className="min-w-0 xl:col-span-7">
          <CuratedCollectionsOverview
            collections={collections}
            onToggleVisibility={handleToggleVisibility}
            onToggleFeatured={handleToggleFeatured}
          />
        </section>

        {/* Recent Inquiries Ledger (5 cols) */}
        <aside className="min-w-0 xl:col-span-5">
          <RecentInquiriesTable
            inquiries={inquiries}
            selectedStatus={selectedStatus}
            onSelectStatus={setSelectedStatus}
            onOpenDrawer={(item) => setActiveDrawerInquiry(item)}
            selectedInquiryId={activeDrawerInquiry?.id}
          />
        </aside>
      </div>

      {/* Drawer: Detailed Brief & Client Message Consultation */}
      <InquiryDetailDrawer
        inquiry={activeDrawerInquiry}
        onClose={() => setActiveDrawerInquiry(null)}
        onUpdateStatus={handleUpdateInquiryStatus}
      />

      {/* Modal: Ingest New Series */}
      <UploadSeriesModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSuccessAdd={handleAddSeries}
      />
    </div>
  );
}