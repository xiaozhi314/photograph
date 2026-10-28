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

export type InquiryStatus = "NEW" | "IN_REVIEW" | "REPLIED";

export type AccountRole = "CLIENT" | "CURATOR_ADMIN";

/// Scope deliverables included in this service package tier
/// ![Array<string>]
export type ServicePackageDeliverables = string[];

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
  suggestedProjectType: ProjectType;
  suggestedBudgetTier: string;
}

export interface ClientProfile {
  id: string; // data-from: AccountUser-id
  fullName: string; // data-from: AccountUser-fullName
  email: string; // data-from: AccountUser-email
  phone: string | null; // data-from: AccountUser-phone
  organization: string | null; // data-from: AccountUser-organization
  avatarUrl: string | null; // data-from: AccountUser-avatarUrl data-role: image_url
  role: AccountRole; // data-from: AccountUser-role
}

export interface CommissionInquiryItem {
  id: string; // data-from: CommissionInquiry-id
  clientId: string; // data-from: CommissionInquiry-clientId
  servicePackageId: string | null; // data-from: CommissionInquiry-servicePackageId
  servicePackageTitle?: string | null; // data-from: ServicePackage-title
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
  createdAt: Date; // data-from: CommissionInquiry-createdAt
}

export interface CommissionBookingInitData {
  packages: ServicePackageItem[];
  clientProfile: ClientProfile;
  recentInquiries: CommissionInquiryItem[];
}

export interface CreateCommissionInquiryInput {
  servicePackageId?: string | null;
  clientName: string;
  clientEmail: string;
  organization?: string | null;
  phone?: string | null;
  projectType: ProjectType;
  budgetTier: string;
  projectBrief: string;
  clientMessage?: string | null;
  targetTimeline: string;
  location?: string | null;
}

export interface CreateCommissionInquiryResult {
  id: string; // data-from: CommissionInquiry-id
  status: InquiryStatus; // data-from: CommissionInquiry-status
}