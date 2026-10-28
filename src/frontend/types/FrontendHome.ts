export type AspectOrientation = "PORTRAIT" | "LANDSCAPE";
export type ServiceType = "ARCHITECTURAL_MONOGRAPH" | "EDITORIAL_PORTRAITURE" | "COMMERCIAL_CAMPAIGN" | "PRINT_ACQUISITION";
export type ProjectType = "EDITORIAL" | "PORTRAIT" | "COMMERCIAL" | "ACQUISITION";
export type InquiryStatus = "NEW" | "IN_REVIEW" | "REPLIED";
export type ExhibitionType = "SOLO_EXHIBITION" | "INSTITUTIONAL" | "BIENNIAL" | "MONOGRAPH";
export type WorkCategory = "all" | "architecture" | "portraiture" | "still-life" | string;

export interface PhotographyWork {
  id: string; // data-from: PhotographyWork-id
  title: string; // data-from: PhotographyWork-title
  categoryId: string; // data-from: PhotographyWork-categoryId
  categorySlug?: string; // data-from: PhotoCategory-slug
  categoryName?: string; // data-from: PhotoCategory-name
  category: WorkCategory; // pure frontend view model genre helper
  collectionId: string | null; // data-from: PhotographyWork-collectionId
  series: string; // data-from: PhotographyWork-seriesName
  seriesName: string; // data-from: PhotographyWork-seriesName
  location: string; // data-from: PhotographyWork-location
  year: number; // data-from: PhotographyWork-year
  medium: string; // data-from: PhotographyWork-medium
  edition: string; // data-from: PhotographyWork-edition
  aspectRatio: AspectOrientation; // data-from: PhotographyWork-aspectRatio
  statement: string; // data-from: PhotographyWork-statement
  imageUrl: string; // data-from: PhotographyWork-imageUrl data-role: image_url
  isFeatured: boolean; // data-from: PhotographyWork-isFeatured
  sortOrder: number; // data-from: PhotographyWork-sortOrder
}

export interface ExhibitionRecord {
  id: string; // data-from: ExhibitionRecord-id
  year: number; // data-from: ExhibitionRecord-year
  title: string; // data-from: ExhibitionRecord-title
  institution: string; // data-from: ExhibitionRecord-institution
  city: string; // data-from: ExhibitionRecord-city
  exhibitionType: ExhibitionType; // data-from: ExhibitionRecord-exhibitionType
  type?: string; // presentation label
  pressMention: string; // data-from: ExhibitionRecord-pressMention
  externalUrl: string | null; // data-from: ExhibitionRecord-externalUrl
  sortOrder: number; // data-from: ExhibitionRecord-sortOrder
}

export interface ServicePackage {
  id: string; // data-from: ServicePackage-id
  title: string; // data-from: ServicePackage-title
  serviceType: ServiceType; // data-from: ServicePackage-serviceType
  basePrice: number; // data-from: ServicePackage-basePrice
  priceDisplay: string; // data-from: ServicePackage-priceDisplay
  durationEstimate: string; // data-from: ServicePackage-durationEstimate
  deliverables: string[]; // data-from: ServicePackage-deliverables
  sortOrder: number; // data-from: ServicePackage-sortOrder
}

export interface ClientTestimonial {
  id: string; // data-from: ClientTestimonial-id
  clientName: string; // data-from: ClientTestimonial-clientName
  clientTitle: string; // data-from: ClientTestimonial-clientTitle
  organization: string; // data-from: ClientTestimonial-organization
  quote: string; // data-from: ClientTestimonial-quote
  serviceType: ProjectType; // data-from: ClientTestimonial-serviceType
  rating: number; // data-from: ClientTestimonial-rating
  avatarImage: string | null; // data-from: ClientTestimonial-avatarImage data-role: image_url
}

export interface StudioBio {
  id: string; // data-from: StudioBio-id
  artistName: string; // data-from: StudioBio-artistName
  studioName: string; // data-from: StudioBio-studioName
  philosophyQuote: string; // data-from: StudioBio-philosophyQuote
  bioStatement: string; // data-from: StudioBio-bioStatement
  portraitImage: string | null; // data-from: StudioBio-portraitImage data-role: image_url
  atelierLocation: string; // data-from: StudioBio-atelierLocation
  activeRepresentation: string; // data-from: StudioBio-activeRepresentation
}

export interface HomeInitialData {
  studioBio: StudioBio | null;
  curatedWorks: PhotographyWork[];
  exhibitions: ExhibitionRecord[];
  servicePackages: ServicePackage[];
  testimonials: ClientTestimonial[];
}

export interface CreateCommissionInquiryInput {
  clientName: string;
  clientEmail: string;
  organization?: string;
  projectType: ProjectType;
  budgetTier: string;
  targetTimeline: string;
  location?: string;
  projectBrief: string;
  clientMessage?: string;
  servicePackageId?: string;
}

export interface CommissionInquiryResult {
  id: string; // data-from: CommissionInquiry-id
  status: InquiryStatus; // data-from: CommissionInquiry-status
  clientName: string; // data-from: CommissionInquiry-clientName
  createdAt: Date; // data-from: CommissionInquiry-createdAt
}