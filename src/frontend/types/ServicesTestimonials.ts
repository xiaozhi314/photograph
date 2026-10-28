export type ServiceType =
  | "ARCHITECTURAL_MONOGRAPH"
  | "EDITORIAL_PORTRAITURE"
  | "COMMERCIAL_CAMPAIGN"
  | "PRINT_ACQUISITION";

export type ProjectType =
  | "EDITORIAL"
  | "PORTRAIT"
  | "COMMERCIAL"
  | "ACQUISITION";

export type InquiryStatus =
  | "NEW"
  | "IN_REVIEW"
  | "REPLIED";

// Canonical type matching schema comment /// ![Array<string>]
export type DeliverablesList = string[];

export interface ServicePackageItem {
  id: string; // data-from: ServicePackage-id
  title: string; // data-from: ServicePackage-title
  serviceType: ServiceType; // data-from: ServicePackage-serviceType
  basePrice: number; // data-from: ServicePackage-basePrice
  priceDisplay: string; // data-from: ServicePackage-priceDisplay
  durationEstimate: string; // data-from: ServicePackage-durationEstimate
  deliverables: DeliverablesList; // data-from: ServicePackage-deliverables
  isActive: boolean; // data-from: ServicePackage-isActive
  sortOrder: number; // data-from: ServicePackage-sortOrder
  createdAt: Date; // data-from: ServicePackage-createdAt
  updatedAt: Date; // data-from: ServicePackage-updatedAt
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

export interface ServicesTestimonialsPageData {
  packages: ServicePackageItem[];
  testimonials: ClientTestimonialItem[];
}

export interface DisciplineItem {
  id: string;
  number: string;
  title: string;
  serviceType: ServiceType;
  mediumFormatSpec: string;
  chemistryStandard: string;
  summary: string;
  typicalTurnaround: string;
  deliverableHighlights: string[];
}