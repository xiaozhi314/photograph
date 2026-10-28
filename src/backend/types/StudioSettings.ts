export type ServiceType = 
  | "ARCHITECTURAL_MONOGRAPH"
  | "EDITORIAL_PORTRAITURE"
  | "COMMERCIAL_CAMPAIGN"
  | "PRINT_ACQUISITION";

export type ExhibitionType = 
  | "SOLO_EXHIBITION"
  | "INSTITUTIONAL"
  | "BIENNIAL"
  | "MONOGRAPH";

export type ProjectType = 
  | "EDITORIAL"
  | "PORTRAIT"
  | "COMMERCIAL"
  | "ACQUISITION";

// Canonical type matching schema comment: /// ![Array<string>]
export type ServicePackageDeliverables = string[];

export interface StudioBioData {
  id: string; // data-from: StudioBio-id
  artistName: string; // data-from: StudioBio-artistName
  studioName: string; // data-from: StudioBio-studioName
  philosophyQuote: string; // data-from: StudioBio-philosophyQuote
  bioStatement: string; // data-from: StudioBio-bioStatement
  portraitImage: string | null; // data-from: StudioBio-portraitImage data-role: image_url
  atelierLocation: string; // data-from: StudioBio-atelierLocation
  activeRepresentation: string; // data-from: StudioBio-activeRepresentation
  createdAt: Date; // data-from: StudioBio-createdAt
  updatedAt: Date; // data-from: StudioBio-updatedAt
}

export interface ServicePackageItem {
  id: string; // data-from: ServicePackage-id
  title: string; // data-from: ServicePackage-title
  serviceType: ServiceType; // data-from: ServicePackage-serviceType
  basePrice: number; // data-from: ServicePackage-basePrice
  priceDisplay: string; // data-from: ServicePackage-priceDisplay
  durationEstimate: string; // data-from: ServicePackage-durationEstimate
  deliverables: ServicePackageDeliverables; // data-from: ServicePackage-deliverables
  isActive: boolean; // data-from: ServicePackage-isActive
  sortOrder: number; // data-from: ServicePackage-sortOrder
  createdAt: Date; // data-from: ServicePackage-createdAt
  updatedAt: Date; // data-from: ServicePackage-updatedAt
}

export interface ExhibitionRecordItem {
  id: string; // data-from: ExhibitionRecord-id
  title: string; // data-from: ExhibitionRecord-title
  institution: string; // data-from: ExhibitionRecord-institution
  city: string; // data-from: ExhibitionRecord-city
  year: number; // data-from: ExhibitionRecord-year
  exhibitionType: ExhibitionType; // data-from: ExhibitionRecord-exhibitionType
  pressMention: string; // data-from: ExhibitionRecord-pressMention
  externalUrl: string | null; // data-from: ExhibitionRecord-externalUrl
  sortOrder: number; // data-from: ExhibitionRecord-sortOrder
  createdAt: Date; // data-from: ExhibitionRecord-createdAt
  updatedAt: Date; // data-from: ExhibitionRecord-updatedAt
}

export interface ClientTestimonialItem {
  id: string; // data-from: ClientTestimonial-id
  clientId: string | null; // data-from: ClientTestimonial-clientId
  clientName: string; // data-from: ClientTestimonial-clientName
  clientTitle: string; // data-from: ClientTestimonial-clientTitle
  organization: string; // data-from: ClientTestimonial-organization
  quote: string; // data-from: ClientTestimonial-quote
  serviceType: ProjectType; // data-from: ClientTestimonial-serviceType
  rating: number; // data-from: ClientTestimonial-rating
  avatarImage: string | null; // data-from: ClientTestimonial-avatarImage data-role: image_url
  isFeatured: boolean; // data-from: ClientTestimonial-isFeatured
  sortOrder: number; // data-from: ClientTestimonial-sortOrder
  createdAt: Date; // data-from: ClientTestimonial-createdAt
  updatedAt: Date; // data-from: ClientTestimonial-updatedAt
}

export interface CuratorialOverviewStats {
  activePackagesCount: number;
  totalExhibitionsCount: number;
  curatedTestimonialsCount: number;
  featuredTestimonialsCount: number;
  archiveTimestamp: string;
}

export interface StudioSettingsPageData {
  studioBio: StudioBioData;
  packages: ServicePackageItem[];
  exhibitions: ExhibitionRecordItem[];
  testimonials: ClientTestimonialItem[];
  stats: CuratorialOverviewStats;
}

export interface UpdateStudioBioInput {
  artistName: string;
  studioName: string;
  philosophyQuote: string;
  bioStatement: string;
  portraitImage?: string | null;
  atelierLocation: string;
  activeRepresentation: string;
}

export interface UpsertServicePackageInput {
  id?: string;
  title: string;
  serviceType: ServiceType;
  basePrice: number;
  priceDisplay: string;
  durationEstimate: string;
  deliverables: ServicePackageDeliverables;
  isActive: boolean;
  sortOrder: number;
}

export interface UpsertExhibitionRecordInput {
  id?: string;
  title: string;
  institution: string;
  city: string;
  year: number;
  exhibitionType: ExhibitionType;
  pressMention: string;
  externalUrl?: string | null;
  sortOrder: number;
}

export interface UpsertClientTestimonialInput {
  id?: string;
  clientName: string;
  clientTitle: string;
  organization: string;
  quote: string;
  serviceType: ProjectType;
  rating: number;
  avatarImage?: string | null;
  isFeatured: boolean;
  sortOrder: number;
}