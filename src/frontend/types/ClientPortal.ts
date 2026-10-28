export type ProjectType = "EDITORIAL" | "PORTRAIT" | "COMMERCIAL" | "ACQUISITION";
export type InquiryStatus = "NEW" | "IN_REVIEW" | "REPLIED";
export type BriefStatus = InquiryStatus; // backward compatibility for existing component imports
export type ServiceType =
  | "ARCHITECTURAL_MONOGRAPH"
  | "EDITORIAL_PORTRAITURE"
  | "COMMERCIAL_CAMPAIGN"
  | "PRINT_ACQUISITION";

export type ServicePackageDeliverables = string[];

export interface ServicePackageInfo {
  id: string; // data-from: ServicePackage-id
  title: string; // data-from: ServicePackage-title
  serviceType: ServiceType; // data-from: ServicePackage-serviceType
  basePrice: number; // data-from: ServicePackage-basePrice
  priceDisplay: string; // data-from: ServicePackage-priceDisplay
  durationEstimate: string; // data-from: ServicePackage-durationEstimate
  deliverables: ServicePackageDeliverables; // data-from: ServicePackage-deliverables
}

export interface CommissionInquiryItem {
  id: string; // data-from: CommissionInquiry-id
  clientId: string; // data-from: CommissionInquiry-clientId
  servicePackageId: string | null; // data-from: CommissionInquiry-servicePackageId
  servicePackage?: ServicePackageInfo | null;
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
  repliedByName: string | null; // data-from: AccountUser-fullName
  repliedById: string | null; // data-from: CommissionInquiry-repliedById
  createdAt: Date; // data-from: CommissionInquiry-createdAt
  updatedAt: Date; // data-from: CommissionInquiry-updatedAt
}

export interface ClientProfile {
  id: string; // data-from: AccountUser-id
  fullName: string; // data-from: AccountUser-fullName
  username: string; // data-from: AccountUser-username
  email: string; // data-from: AccountUser-email
  phone: string | null; // data-from: AccountUser-phone
  organization: string | null; // data-from: AccountUser-organization
  avatarUrl: string | null; // data-from: AccountUser-avatarUrl data-role: image_url
}

export interface ClientPortalData {
  profile: ClientProfile;
  briefs: CommissionInquiryItem[];
  totalCount: number;
  inReviewCount: number;
  repliedCount: number;
}

export interface UpdateClientMessageInput {
  inquiryId: string;
  clientMessage: string;
}