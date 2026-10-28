// Canonical TypeScript types for InquiriesDispatch (B04) aligned with Prisma schema and domain requirements

export type AccountRole = "CLIENT" | "CURATOR_ADMIN";

export type ServiceType =
  | "ARCHITECTURAL_MONOGRAPH"
  | "EDITORIAL_PORTRAITURE"
  | "COMMERCIAL_CAMPAIGN"
  | "PRINT_ACQUISITION";

export type ProjectType = "EDITORIAL" | "PORTRAIT" | "COMMERCIAL" | "ACQUISITION";

export type InquiryStatus = "NEW" | "IN_REVIEW" | "REPLIED";

// Canonical Prisma Json type from schema:
// Scope deliverables included in this service package tier
// ![Array<string>]
export type ServicePackageDeliverables = string[];

export interface ServicePackageDTO {
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

export interface CommissionInquiryDTO {
  id: string; // data-from: CommissionInquiry-id
  clientId: string; // data-from: CommissionInquiry-clientId
  servicePackageId: string | null; // data-from: CommissionInquiry-servicePackageId
  clientName: string; // data-from: CommissionInquiry-clientName
  clientEmail: string; // data-from: CommissionInquiry-clientEmail
  organization: string | null; // data-from: CommissionInquiry-organization
  projectType: ProjectType; // data-from: CommissionInquiry-projectType
  budgetTier: string; // data-from: CommissionInquiry-budgetTier
  projectBrief: string; // data-from: CommissionInquiry-projectBrief
  clientMessage: string | null; // data-from: CommissionInquiry-clientMessage
  targetTimeline: string; // data-from: CommissionInquiry-targetTimeline
  location: string | null; // data-from: CommissionInquiry-location
  status: InquiryStatus; // data-from: CommissionInquiry-status
  curatorReply: string | null; // data-from: CommissionInquiry-curatorReply
  repliedAt: string | null; // data-from: CommissionInquiry-repliedAt
  repliedById: string | null; // data-from: CommissionInquiry-repliedById
  createdAt: Date; // data-from: CommissionInquiry-createdAt
  updatedAt: Date; // data-from: CommissionInquiry-updatedAt

  // Joined relations
  servicePackage: ServicePackageDTO | null;
  repliedByName: string | null;
}

export interface InquiryMetricsDTO {
  total: number;
  newCount: number;
  inReviewCount: number;
  repliedCount: number;
  avgTurnaroundHours: number;
}

export interface InquiriesQueueQueryInput {
  status?: InquiryStatus | "ALL";
  projectType?: ProjectType | "ALL";
  search?: string;
}

export interface InquiriesQueueOutput {
  inquiries: CommissionInquiryDTO[];
  metrics: InquiryMetricsDTO;
}

export interface DispatchReplyInput {
  inquiryId: string;
  curatorReply: string;
}