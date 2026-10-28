"use client";

import React, { useState, useEffect } from "react";
import QuickActionToolbar from "@/backend/components/AdminHome/QuickActionToolbar";
import OverviewStatsRibbon from "@/backend/components/AdminHome/OverviewStatsRibbon";
import CuratedCollectionsOverview from "@/backend/components/AdminHome/CuratedCollectionsOverview";
import RecentInquiriesTable from "@/backend/components/AdminHome/RecentInquiriesTable";
import InquiryDetailDrawer from "@/backend/components/AdminHome/InquiryDetailDrawer";
import UploadSeriesModal from "@/backend/components/AdminHome/UploadSeriesModal";
import type { InquiryItem, InquiryStatus, CollectionItem, OverviewStat, CreateCollectionInput } from "@/backend/types/AdminHome";
import { getAdminHomeOverview, toggleCollectionVisibility, toggleCollectionFeatured, updateInquiryStatus, sendInquiryReply, createPhotoCollection } from "@/backend/actions/AdminHome";
import { toast } from "sonner";
const initialStats: OverviewStat[] = [{
  label: "Total Published Works",
  value: "142",
  subtext: "+14 plates this quarter",
  badge: "ARCHIVE OK"
}, {
  label: "Active Series / Folios",
  value: "8",
  subtext: "4 showcased on public wall",
  badge: "CURATED"
}, {
  label: "New Inquiries in Queue",
  value: "18",
  subtext: "3 awaiting consultation reply",
  badge: "ACTION REQ"
}, {
  label: "Inquiry Completion Rate",
  value: "82%",
  subtext: "15 of 18 briefs dispatched",
  badge: "AUDIENCE"
}];
const initialCollections: CollectionItem[] = [{
  id: "collection-chiaroscuro",
  title: "Chiaroscuro & Solitude",
  rollNumber: "Roll No. 042",
  medium: "120 Medium Format / Portra 160",
  curatorNote: "Natural daylight study with warm linen drapery and soft carbon shadows.",
  aspect: "PORTRAIT",
  aspectRatioClass: "aspect-[4/5]",
  coverImage: null,
  imageCount: 24,
  workCount: 24,
  isVisible: true,
  featuredOnHome: true,
  sortOrder: 1,
  createdAt: new Date()
}, {
  id: "collection-sanctuary",
  title: "Sanctuary of Geometry",
  rollNumber: "Roll No. 045",
  medium: "Large Format 4x5 Monorail",
  curatorNote: "Minimalist plaster compositions capturing afternoon oblique raking sunlight.",
  aspect: "LANDSCAPE",
  aspectRatioClass: "aspect-[16/9]",
  coverImage: null,
  imageCount: 18,
  workCount: 18,
  isVisible: true,
  featuredOnHome: true,
  sortOrder: 2,
  createdAt: new Date()
}, {
  id: "collection-monochrome",
  title: "Sculptural Monochrome",
  rollNumber: "Roll No. 038",
  medium: "Silver Gelatin / Ilford HP5",
  curatorNote: "High-contrast silk drapery exploring tactile textures and tonal graduation.",
  aspect: "PORTRAIT",
  aspectRatioClass: "aspect-[4/5]",
  coverImage: null,
  imageCount: 32,
  workCount: 32,
  isVisible: false,
  featuredOnHome: false,
  sortOrder: 3,
  createdAt: new Date()
}, {
  id: "collection-botanicals",
  title: "Herbarium & Glass Vials",
  rollNumber: "Roll No. 047",
  medium: "Mamiya 7II / Kodak Tri-X 400",
  curatorNote: "Quiet botanical specimens preserved under antique diffused optical glass.",
  aspect: "LANDSCAPE",
  aspectRatioClass: "aspect-[16/9]",
  coverImage: null,
  imageCount: 16,
  workCount: 16,
  isVisible: true,
  featuredOnHome: false,
  sortOrder: 4,
  createdAt: new Date()
}];
const initialInquiries: InquiryItem[] = [{
  id: "INQ-2025-081",
  clientId: "client-mock-1",
  clientName: "Eleanor Vance (Atelier Cézanne)",
  clientEmail: "eleanor@cezanne-atelier.fr",
  organization: "Atelier Cézanne Paris",
  projectType: "EDITORIAL",
  inquiryDate: "Today, 10:24 AM",
  budgetRange: "€8,000 – €12,000",
  budgetTier: "€8,000 – €12,000",
  status: "NEW",
  projectBrief: "Haute couture seasonal retrospective catalog editorial shoot in Paris museum cloister.",
  clientMessage: "We have long admired Lumen's calm tonal discipline and would like to commission an 8-page series covering our Autumnal cashmere and sculptural millinery.",
  targetTimeline: "Late November 2025",
  location: "Paris, France",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date()
}, {
  id: "INQ-2025-079",
  clientId: "client-mock-2",
  clientName: "Julian Thorne & Partners",
  clientEmail: "julian@thorne-architecture.co.uk",
  organization: "Thorne Architecture Ltd",
  projectType: "COMMERCIAL",
  inquiryDate: "Yesterday",
  budgetRange: "£14,000 – £20,000",
  budgetTier: "£14,000 – £20,000",
  status: "IN_REVIEW",
  projectBrief: "Architectural monograph documenting light passage through raw rammed-earth pavilion in Cotswolds.",
  clientMessage: "Seeking medium-format analog captures across 4 dawn-to-dusk light cycles. Archival silver gelatin exhibition prints required for our Zurich monograph debut.",
  targetTimeline: "Early December 2025",
  location: "Gloucestershire, UK",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date()
}, {
  id: "INQ-2025-076",
  clientId: "client-mock-3",
  clientName: "Dr. Maya Lindqvist",
  clientEmail: "m.lindqvist@karolinska-arts.se",
  organization: "Karolinska Institute Arts",
  projectType: "PORTRAIT",
  inquiryDate: "Oct 28",
  budgetRange: "$4,500 – $6,000",
  budgetTier: "$4,500 – $6,000",
  status: "REPLIED",
  projectBrief: "Solemn academic leadership portraits for institutional archive and biennial publication.",
  clientMessage: "We prefer quiet natural window light and subtle tactile grain, avoiding modern clinical digital sheen. Two studio sessions planned in Stockholm.",
  targetTimeline: "Mid November 2025",
  location: "Stockholm, Sweden",
  curatorReply: "Acknowledged and scheduled initial lighting consultation call.",
  repliedAt: "Oct 29, 2025",
  repliedById: "curator-admin-julian",
  createdAt: new Date()
}, {
  id: "INQ-2025-072",
  clientId: "client-mock-4",
  clientName: "Kaito Moriyama (Sora Journal)",
  clientEmail: "kaito@soramagazine.jp",
  organization: "Sora Media Group Tokyo",
  projectType: "EDITORIAL",
  inquiryDate: "Oct 25",
  budgetRange: "¥1,200,000 – ¥1,800,000",
  budgetTier: "¥1,200,000 – ¥1,800,000",
  status: "REPLIED",
  projectBrief: "Special feature on Japanese ceramic artisans working in Kyoto mountain kilns.",
  clientMessage: "Our editorial board requests a 12-plate photo essay focusing on clay smoke, mineral ash, and artisan hand gestures during wood firing.",
  targetTimeline: "January 2026",
  location: "Kyoto, Japan",
  curatorReply: "Proposals sent with analog medium format transport schedule.",
  repliedAt: "Oct 26, 2025",
  repliedById: "curator-admin-julian",
  createdAt: new Date()
}, {
  id: "INQ-2025-068",
  clientId: "client-mock-5",
  clientName: "Camilla Rossini Fine Jewelry",
  clientEmail: "c.rossini@rossinigioielli.it",
  organization: "Maison Rossini Milano",
  projectType: "COMMERCIAL",
  inquiryDate: "Oct 22",
  budgetRange: "€15,000 – €22,000",
  budgetTier: "€15,000 – €22,000",
  status: "NEW",
  projectBrief: "Fine jewelry campaign pairing antique emerald necklaces with natural raw marble slabs.",
  clientMessage: "Looking for museum-grade macro captures with organic natural daylight reflections. Zero harsh ring lighting; pure chiaroscuro aesthetics.",
  targetTimeline: "February 2026",
  location: "Milan, Italy",
  curatorReply: null,
  repliedAt: null,
  repliedById: null,
  createdAt: new Date()
}];
export default function AdminHomePage() {
  const [stats, setStats] = useState<OverviewStat[]>(initialStats);
  const [collections, setCollections] = useState<CollectionItem[]>(initialCollections);
  const [inquiries, setInquiries] = useState<InquiryItem[]>(initialInquiries);
  const [selectedStatus, setSelectedStatus] = useState<InquiryStatus | "ALL">("ALL");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  useEffect(() => {
    let isMounted = true;
    async function loadOverview() {
      try {
        const data = await getAdminHomeOverview();
        if (!isMounted || !data) return;
        if (data.stats && data.stats.length > 0) {
          setStats(data.stats);
        }
        if (data.collections && data.collections.length > 0) {
          setCollections(data.collections);
        }
        if (data.inquiries && data.inquiries.length > 0) {
          setInquiries(data.inquiries);
        }
      } catch (err) {
        console.error("Failed to load admin overview data:", err);
      }
    }
    loadOverview();
    return () => {
      isMounted = false;
    };
  }, []);
  const handleToggleCollectionVisibility = async (id: string) => {
    const target = collections.find(c => c.id === id);
    if (!target) return;
    const nextVal = !target.isVisible;
    try {
      const updated = await toggleCollectionVisibility({
        id,
        isVisible: nextVal
      });
      setCollections(prev => prev.map((c, index) => c.id === id ? {
        ...c,
        ...updated,
        isVisible: updated.isVisible
      } : c));
      toast.success("Exhibition visibility updated");
    } catch (err) {
      console.error("Failed to update collection visibility:", err);
      toast.error("Failed to update visibility");
    }
  };
  const handleToggleCollectionFeatured = async (id: string) => {
    const target = collections.find(c => c.id === id);
    if (!target) return;
    const nextVal = !target.featuredOnHome;
    try {
      const updated = await toggleCollectionFeatured({
        id,
        featuredOnHome: nextVal
      });
      setCollections(prev => prev.map((c, index) => c.id === id ? {
        ...c,
        ...updated,
        featuredOnHome: updated.featuredOnHome
      } : c));
      toast.success("Homepage pin status updated");
    } catch (err) {
      console.error("Failed to update collection featured status:", err);
      toast.error("Failed to update homepage pin status");
    }
  };
  const handleInquiryStatusChange = async (id: string, newStatus: InquiryStatus) => {
    try {
      const updated = await updateInquiryStatus({
        id,
        status: newStatus
      });
      setInquiries(prev => prev.map((item, index) => item.id === id ? {
        ...item,
        ...updated,
        status: updated.status
      } : item));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(prev => prev ? {
          ...prev,
          ...updated,
          status: updated.status
        } : null);
      }
      toast.success(`Inquiry marked as ${newStatus.replace("_", " ")}`);
    } catch (err) {
      console.error("Failed to update inquiry status:", err);
      toast.error("Failed to update status");
    }
  };
  const handleSendInquiryReply = async (id: string, replyText: string) => {
    try {
      const updated = await sendInquiryReply({
        id,
        curatorReply: replyText
      });
      setInquiries(prev => prev.map((item, index) => item.id === id ? {
        ...item,
        ...updated
      } : item));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(prev => prev ? {
          ...prev,
          ...updated
        } : null);
      }
      toast.success("Consultation reply dispatched");
    } catch (err) {
      console.error("Failed to dispatch inquiry reply:", err);
      toast.error("Failed to dispatch reply");
    }
  };
  const handleCreateCollection = async (formData: CreateCollectionInput) => {
    try {
      const created = await createPhotoCollection(formData);
      setCollections(prev => [created, ...prev]);
      setIsUploadModalOpen(false);
      toast.success("New series folio cataloged successfully");
    } catch (err) {
      console.error("Failed to ingest new collection:", err);
      toast.error("Failed to create collection");
    }
  };
  return <div className="w-full min-w-0 min-h-screen bg-background text-foreground p-4 lg:p-6 space-y-6" data-api-unique-id='page-rc2050b41381229e9-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page'>
      {/* 1. Quick Action Toolbar */}
      <QuickActionToolbar onOpenUploadModal={() => setIsUploadModalOpen(true)} data-api-unique-id='page-r6b0fdcb6a2b3a6fb-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page' />

      {/* 2. Overview Stats Ribbon */}
      <OverviewStatsRibbon stats={stats} data-api-unique-id='page-rcfeae3e77c2cfa9a-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page' />

      {/* 3. Curated Collections Exhibition Wall */}
      <CuratedCollectionsOverview collections={collections} onToggleVisibility={handleToggleCollectionVisibility} onToggleFeatured={handleToggleCollectionFeatured} data-api-unique-id='page-reebb0c023c5d1906-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page' />

      {/* 4. Recent Commission Inquiries Table */}
      <RecentInquiriesTable inquiries={inquiries} selectedStatus={selectedStatus} onSelectStatus={setSelectedStatus} onOpenDrawer={inq => setSelectedInquiry(inq)} selectedInquiryId={selectedInquiry?.id} data-api-unique-id='page-r9a99f1f6bd5249f8-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page' />

      {/* 5. Slide-over Inquiry Detail Drawer */}
      <InquiryDetailDrawer inquiry={selectedInquiry} onClose={() => setSelectedInquiry(null)} onUpdateStatus={handleInquiryStatusChange} onSendReply={handleSendInquiryReply} data-api-unique-id='page-ref3f0e6d3f35ea33-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page' />

      {/* 6. Upload Series Folio Modal */}
      <UploadSeriesModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} onCreateCollection={handleCreateCollection} data-api-unique-id='page-rea31edddbc51499e-s4141682347' data-api-unique-page-name='app/(backend)/adminhome/page' />
    </div>;
}