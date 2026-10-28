"use client";

import React, { useState, useEffect } from "react";
import OverviewBanner from "@/backend/components/StudioSettings/OverviewBanner";
import StudioBioDesk from "@/backend/components/StudioSettings/StudioBioDesk";
import CommissionPackagesDesk from "@/backend/components/StudioSettings/CommissionPackagesDesk";
import ExhibitionsDesk from "@/backend/components/StudioSettings/ExhibitionsDesk";
import TestimonialsDesk from "@/backend/components/StudioSettings/TestimonialsDesk";
import { StudioBioData, ServicePackageItem, ExhibitionRecordItem, ClientTestimonialItem, UpdateStudioBioInput, UpsertServicePackageInput, UpsertExhibitionRecordInput, UpsertClientTestimonialInput } from "@/backend/types/StudioSettings";
import { getStudioSettingsData, updateStudioBio, upsertServicePackage, toggleServicePackageActive, deleteServicePackage, upsertExhibitionRecord, deleteExhibitionRecord, upsertClientTestimonial, toggleTestimonialFeatured, deleteClientTestimonial } from "@/backend/actions/StudioSettings";
const INITIAL_STUDIO_BIO: StudioBioData = {
  id: "bio_darkroom_01",
  artistName: "Julian Vane",
  studioName: "Darkroom Atelier 04",
  atelierLocation: "Milan · Tokyo",
  activeRepresentation: "Galleria d'Arte Moderna (Milan) · Taka Ishii Gallery Representative",
  philosophyQuote: "Light is not merely illumination; it is a physical sculpt of medium format geometry that honors analog silver halide emulsion.",
  bioStatement: "Julian Vane (b. 1981) operates Darkroom Atelier 04, a dedicated analog laboratory and archive focusing on silver gelatin chemistry and architectural monographs. Spanning two decades of continuous medium and large-format field research across metropolitan Europe and Japan, his monographs dissect the interplay of raw concrete, cast light, and atmospheric decay. All exhibition prints are executed by hand in limited, stamped suites.",
  portraitImage: null,
  createdAt: new Date(),
  updatedAt: new Date()
};
const INITIAL_SERVICE_PACKAGES: ServicePackageItem[] = [{
  id: "pkg_arch_01",
  title: "Architectural Monograph & Site Survey",
  serviceType: "ARCHITECTURAL_MONOGRAPH",
  basePrice: 8500,
  priceDisplay: "$8,500 – $14,000",
  durationEstimate: "4–6 Weeks Turnaround",
  deliverables: ["8x10 Contact Sheets", "Silver Gelatin Master Prints", "16-bit Master Scans", "Monograph Layout Proofs"],
  isActive: true,
  sortOrder: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "pkg_port_02",
  title: "Editorial & Curatorial Portraiture Suite",
  serviceType: "EDITORIAL_PORTRAITURE",
  basePrice: 4200,
  priceDisplay: "$4,200 – $7,500",
  durationEstimate: "2–3 Weeks Turnaround",
  deliverables: ["Medium Format 120 Negatives", "Silver Gelatin Master Prints", "Editorial Publishing License"],
  isActive: true,
  sortOrder: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "pkg_comm_03",
  title: "Commissioned Atelier Visual Campaign",
  serviceType: "COMMERCIAL_CAMPAIGN",
  basePrice: 16000,
  priceDisplay: "$16,000 – $28,000",
  durationEstimate: "6–8 Weeks Turnaround",
  deliverables: ["Custom Film Chemistry Formulation", "Archive Box of 20 Master Prints", "Global Commercial License", "16-bit Master Scans"],
  isActive: true,
  sortOrder: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "pkg_acq_04",
  title: "Institutional Archival Print Acquisition",
  serviceType: "PRINT_ACQUISITION",
  basePrice: 3500,
  priceDisplay: "$3,500 – $6,000 per Plate",
  durationEstimate: "Immediate (Bespoke Matted)",
  deliverables: ["Silver Gelatin Master Prints", "Certificate of Authenticity", "Museum Rag Conservation Mat"],
  isActive: false,
  sortOrder: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}];
const INITIAL_EXHIBITIONS: ExhibitionRecordItem[] = [{
  id: "ex_01",
  title: "Chiaroscuro & Reinforced Concrete: The Milan Periphery",
  institution: "Triennale di Milano",
  city: "Milan, Italy",
  year: 2024,
  exhibitionType: "SOLO_EXHIBITION",
  pressMention: "A sublime testament to large-format architectural rigor, elevating industrial austerity to metaphysical gravity.",
  externalUrl: "https://triennale.org/archive/julian-vane-2024",
  sortOrder: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "ex_02",
  title: "The Silver Ledger: Monograph No. 04",
  institution: "Steidl Press & Bookworks",
  city: "Göttingen, Germany",
  year: 2023,
  exhibitionType: "MONOGRAPH",
  pressMention: "Awarded Monograph of the Year for unmatched tactile offset fidelity and unadulterated analog craft.",
  externalUrl: "https://steidl.de/books/the-silver-ledger",
  sortOrder: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "ex_03",
  title: "18th International Architecture Exhibition",
  institution: "La Biennale di Venezia",
  city: "Venice, Italy",
  year: 2022,
  exhibitionType: "BIENNIAL",
  pressMention: "Julian Vane's darkened gallery pavilion suspended viewers in quiet awe between light and chemical memory.",
  externalUrl: "https://labiennale.org/architecture/2022",
  sortOrder: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "ex_04",
  title: "Shadows in the Megalopolis: Postwar Brutalism",
  institution: "Tokyo Metropolitan Museum of Photography (TOP)",
  city: "Tokyo, Japan",
  year: 2021,
  exhibitionType: "INSTITUTIONAL",
  pressMention: "A profound masterclass in tone balance, demonstrating how analog patience outlasts ephemeral digital noise.",
  externalUrl: "https://topmuseum.jp/exhibition/vane-brutalism",
  sortOrder: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "ex_05",
  title: "Monochrome Dialectics: Retrospective 2012–2020",
  institution: "Fondazione Sozzani",
  city: "Milan, Italy",
  year: 2020,
  exhibitionType: "SOLO_EXHIBITION",
  pressMention: "A contemplative retrospective tracking Vane's uncompromising devotion to darkroom alchemy.",
  externalUrl: "https://fondazionesozzani.org/exhibitions/vane-retrospective",
  sortOrder: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}];
const INITIAL_TESTIMONIALS: ClientTestimonialItem[] = [{
  id: "t_01",
  clientId: null,
  clientName: "Eleonora Rossi",
  clientTitle: "Senior Architecture Editor",
  organization: "Domus International",
  quote: "Julian Vane's prints possess a physical density that digital capture simply cannot approximate. The archival tonal depth in our Milan brutalism monograph set a new curatorial benchmark for our publication.",
  serviceType: "EDITORIAL",
  rating: 5,
  avatarImage: null,
  isFeatured: true,
  sortOrder: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "t_02",
  clientId: null,
  clientName: "Kenzo Takahashi",
  clientTitle: "Principal Director",
  organization: "Atelier Takahashi Architects, Tokyo",
  quote: "Commissioning Darkroom Atelier 04 for our commercial headquarters portfolio yielded pure art. The gelatin silver master prints are framed in our boardroom as historical artifacts of our structure.",
  serviceType: "COMMERCIAL",
  rating: 5,
  avatarImage: null,
  isFeatured: true,
  sortOrder: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "t_03",
  clientId: null,
  clientName: "Dr. Arthur Pendelton",
  clientTitle: "Chief Curator of Photography",
  organization: "European Contemporary Art Trust",
  quote: "The acquisition of Vane's raw 8x10 contact plates represents one of our institution's most significant analog additions this decade. Unrivaled tonal gradations and archival preservation.",
  serviceType: "ACQUISITION",
  rating: 5,
  avatarImage: null,
  isFeatured: true,
  sortOrder: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "t_04",
  clientId: null,
  clientName: "Claire De La Tour",
  clientTitle: "Creative Director",
  organization: "L'Heure Éditions Paris",
  quote: "Our bespoke portraiture series with Julian Vane proved to be an exercise in quiet intensity. The grain structure is painterly, deliberate, and extraordinarily personal.",
  serviceType: "PORTRAIT",
  rating: 5,
  avatarImage: null,
  isFeatured: false,
  sortOrder: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "t_05",
  clientId: null,
  clientName: "Marco Bellini",
  clientTitle: "Founding Partner",
  organization: "Bellini & Partners Architecture",
  quote: "From custom film chemistry to final matted master plates, Julian's commitment to perfection is unmatched in contemporary architectural photography.",
  serviceType: "COMMERCIAL",
  rating: 5,
  avatarImage: null,
  isFeatured: false,
  sortOrder: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: "t_06",
  clientId: null,
  clientName: "Saskia Van Der Berg",
  clientTitle: "Private Collector & Patron",
  organization: "Van Der Berg Art Foundation, Amsterdam",
  quote: "Each plate carries the tactile signature of the atelier. The prints arrived in bespoke linen archival folios with impeccable certificates.",
  serviceType: "ACQUISITION",
  rating: 5,
  avatarImage: null,
  isFeatured: true,
  sortOrder: 6,
  createdAt: new Date(),
  updatedAt: new Date()
}];
export default function StudioSettingsPage() {
  const [studioBio, setStudioBio] = useState<StudioBioData>(INITIAL_STUDIO_BIO);
  const [packages, setPackages] = useState<ServicePackageItem[]>(INITIAL_SERVICE_PACKAGES);
  const [exhibitions, setExhibitions] = useState<ExhibitionRecordItem[]>(INITIAL_EXHIBITIONS);
  const [testimonials, setTestimonials] = useState<ClientTestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [archiveTimestamp, setArchiveTimestamp] = useState<string>(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");

  // Fetch initial data on mount
  useEffect(() => {
    let isMounted = true;
    getStudioSettingsData().then(data => {
      if (!isMounted || !data) return;
      if (data.studioBio) {
        setStudioBio(data.studioBio);
      }
      if (data.packages && data.packages.length > 0) {
        setPackages(data.packages);
      }
      if (data.exhibitions && data.exhibitions.length > 0) {
        setExhibitions(data.exhibitions);
      }
      if (data.testimonials && data.testimonials.length > 0) {
        setTestimonials(data.testimonials);
      }
      if (data.stats?.archiveTimestamp) {
        setArchiveTimestamp(data.stats.archiveTimestamp);
      }
    }).catch(err => {
      console.error("Failed to load studio settings data:", err);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute live stats for overview banner
  const activePackagesCount = packages.filter(p => p.isActive).length;
  const totalExhibitionsCount = exhibitions.length;
  const curatedTestimonialsCount = testimonials.length;
  const featuredTestimonialsCount = testimonials.filter(t => t.isFeatured).length;

  // Handlers for Studio Bio updates
  const handleUpdateStudioBio = async (updatedBio: StudioBioData | UpdateStudioBioInput) => {
    try {
      const payload: UpdateStudioBioInput = {
        artistName: updatedBio.artistName,
        studioName: updatedBio.studioName,
        philosophyQuote: updatedBio.philosophyQuote,
        bioStatement: updatedBio.bioStatement,
        portraitImage: updatedBio.portraitImage,
        atelierLocation: updatedBio.atelierLocation,
        activeRepresentation: updatedBio.activeRepresentation
      };
      const result = await updateStudioBio(payload);
      if (result) {
        setStudioBio(result);
        setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
      }
    } catch (err) {
      console.error("Failed to update studio bio:", err);
    }
  };

  // Handlers for Service Packages
  const handleSavePackage = async (savedPkg: ServicePackageItem | UpsertServicePackageInput) => {
    try {
      const payload: UpsertServicePackageInput = {
        id: "id" in savedPkg ? savedPkg.id : undefined,
        title: savedPkg.title,
        serviceType: savedPkg.serviceType,
        basePrice: Number(savedPkg.basePrice),
        priceDisplay: savedPkg.priceDisplay,
        durationEstimate: savedPkg.durationEstimate,
        deliverables: savedPkg.deliverables,
        isActive: savedPkg.isActive,
        sortOrder: savedPkg.sortOrder
      };
      const result = await upsertServicePackage(payload);
      if (result) {
        setPackages(prev => {
          const exists = prev.some(p => p.id === result.id);
          if (exists) {
            return prev.map((p, index) => p.id === result.id ? result : p);
          }
          return [...prev, result].sort((a, b) => a.sortOrder - b.sortOrder);
        });
        setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
      }
    } catch (err) {
      console.error("Failed to upsert service package:", err);
    }
  };
  const handleTogglePackageActive = async (id: string) => {
    // Optimistic update
    setPackages(prev => prev.map((p, index) => p.id === id ? {
      ...p,
      isActive: !p.isActive
    } : p));
    try {
      const updated = await toggleServicePackageActive(id);
      if (updated) {
        setPackages(prev => prev.map((p, index) => p.id === updated.id ? updated : p));
        setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
      }
    } catch (err) {
      console.error("Failed to toggle package active status:", err);
      // Rollback on failure
      setPackages(prev => prev.map((p, index) => p.id === id ? {
        ...p,
        isActive: !p.isActive
      } : p));
    }
  };
  const handleDeletePackage = async (id: string) => {
    try {
      await deleteServicePackage(id);
      setPackages(prev => prev.filter(p => p.id !== id));
      setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
    } catch (err) {
      console.error("Failed to delete service package:", err);
    }
  };

  // Handlers for Exhibitions
  const handleSaveExhibition = async (savedEx: ExhibitionRecordItem | UpsertExhibitionRecordInput) => {
    try {
      const payload: UpsertExhibitionRecordInput = {
        id: "id" in savedEx ? savedEx.id : undefined,
        title: savedEx.title,
        institution: savedEx.institution,
        city: savedEx.city,
        year: Number(savedEx.year),
        exhibitionType: savedEx.exhibitionType,
        pressMention: savedEx.pressMention,
        externalUrl: savedEx.externalUrl,
        sortOrder: savedEx.sortOrder
      };
      const result = await upsertExhibitionRecord(payload);
      if (result) {
        setExhibitions(prev => {
          const exists = prev.some(e => e.id === result.id);
          if (exists) {
            return prev.map((e, index) => e.id === result.id ? result : e);
          }
          return [...prev, result].sort((a, b) => b.year - a.year || a.sortOrder - b.sortOrder);
        });
        setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
      }
    } catch (err) {
      console.error("Failed to upsert exhibition record:", err);
    }
  };
  const handleDeleteExhibition = async (id: string) => {
    try {
      await deleteExhibitionRecord(id);
      setExhibitions(prev => prev.filter(e => e.id !== id));
      setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
    } catch (err) {
      console.error("Failed to delete exhibition record:", err);
    }
  };

  // Handlers for Testimonials
  const handleSaveTestimonial = async (savedTestimonial: ClientTestimonialItem | UpsertClientTestimonialInput) => {
    try {
      const payload: UpsertClientTestimonialInput = {
        id: "id" in savedTestimonial ? savedTestimonial.id : undefined,
        clientName: savedTestimonial.clientName,
        clientTitle: savedTestimonial.clientTitle,
        organization: savedTestimonial.organization,
        quote: savedTestimonial.quote,
        serviceType: savedTestimonial.serviceType,
        rating: Number(savedTestimonial.rating),
        avatarImage: savedTestimonial.avatarImage,
        isFeatured: savedTestimonial.isFeatured,
        sortOrder: savedTestimonial.sortOrder
      };
      const result = await upsertClientTestimonial(payload);
      if (result) {
        setTestimonials(prev => {
          const exists = prev.some(t => t.id === result.id);
          if (exists) {
            return prev.map((t, index) => t.id === result.id ? result : t);
          }
          return [...prev, result].sort((a, b) => a.sortOrder - b.sortOrder);
        });
        setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
      }
    } catch (err) {
      console.error("Failed to upsert client testimonial:", err);
    }
  };
  const handleToggleTestimonialFeatured = async (id: string) => {
    // Optimistic update
    setTestimonials(prev => prev.map((t, index) => t.id === id ? {
      ...t,
      isFeatured: !t.isFeatured
    } : t));
    try {
      const updated = await toggleTestimonialFeatured(id);
      if (updated) {
        setTestimonials(prev => prev.map((t, index) => t.id === updated.id ? updated : t));
        setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
      }
    } catch (err) {
      console.error("Failed to toggle testimonial featured status:", err);
      // Rollback on failure
      setTestimonials(prev => prev.map((t, index) => t.id === id ? {
        ...t,
        isFeatured: !t.isFeatured
      } : t));
    }
  };
  const handleDeleteTestimonial = async (id: string) => {
    try {
      await deleteClientTestimonial(id);
      setTestimonials(prev => prev.filter(t => t.id !== id));
      setArchiveTimestamp(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
    } catch (err) {
      console.error("Failed to delete client testimonial:", err);
    }
  };
  return <div className="w-full max-w-full min-w-0 overflow-x-hidden p-4 lg:p-6 bg-background text-foreground space-y-6" data-api-unique-id='page-rf7bbbd9ca12d3919-s2372048499' data-api-unique-page-name='app/(backend)/studiosettings/page'>
      {/* 1. Overview & Curatorial Status Header */}
      <OverviewBanner activePackagesCount={activePackagesCount} totalExhibitionsCount={totalExhibitionsCount} curatedTestimonialsCount={curatedTestimonialsCount} featuredTestimonialsCount={featuredTestimonialsCount} archiveTimestamp={archiveTimestamp} data-api-unique-id='page-r8b9464372ddbcbd4-s2372048499' data-api-unique-page-name='app/(backend)/studiosettings/page' />

      {/* 2. Artist Biography & Atelier Statement Configuration Desk */}
      <StudioBioDesk bioData={studioBio} onSaveBio={handleUpdateStudioBio} data-api-unique-id='page-rc53b571eb86ef45d-s2372048499' data-api-unique-page-name='app/(backend)/studiosettings/page' />

      {/* 3. Commission Services & Pricing Tiers Table */}
      <CommissionPackagesDesk packages={packages} onSavePackage={handleSavePackage} onToggleActive={handleTogglePackageActive} onDeletePackage={handleDeletePackage} data-api-unique-id='page-r2b60091944a16e95-s2372048499' data-api-unique-page-name='app/(backend)/studiosettings/page' />

      {/* 4. Institutional Exhibitions & Monograph Archives Desk */}
      <ExhibitionsDesk exhibitions={exhibitions} onSaveExhibition={handleSaveExhibition} onDeleteExhibition={handleDeleteExhibition} data-api-unique-id='page-r1ff5928b82177869-s2372048499' data-api-unique-page-name='app/(backend)/studiosettings/page' />

      {/* 5. Client Testimonials & Press Reviews Curation */}
      <TestimonialsDesk testimonials={testimonials} onSaveTestimonial={handleSaveTestimonial} onToggleFeatured={handleToggleTestimonialFeatured} onDeleteTestimonial={handleDeleteTestimonial} data-api-unique-id='page-r5ca1e2b3452339c3-s2372048499' data-api-unique-page-name='app/(backend)/studiosettings/page' />
    </div>;
}