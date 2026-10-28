export type InquiryStatus = "NEW" | "IN_REVIEW" | "REPLIED";

export type ProjectType = "EDITORIAL" | "PORTRAIT" | "COMMERCIAL" | "ACQUISITION";

export type AspectOrientation = "PORTRAIT" | "LANDSCAPE";

export interface InquiryItem {
  id: string; // data-from: CommissionInquiry-id
  clientId: string; // data-from: CommissionInquiry-clientId
  clientName: string; // data-from: CommissionInquiry-clientName
  clientEmail: string; // data-from: CommissionInquiry-clientEmail
  organization: string | null; // data-from: CommissionInquiry-organization
  projectType: ProjectType; // data-from: CommissionInquiry-projectType
  budgetTier: string; // data-from: CommissionInquiry-budgetTier
  budgetRange?: string;
  projectBrief: string; // data-from: CommissionInquiry-projectBrief
  clientMessage: string | null; // data-from: CommissionInquiry-clientMessage
  targetTimeline: string; // data-from: CommissionInquiry-targetTimeline
  location: string | null; // data-from: CommissionInquiry-location
  status: InquiryStatus; // data-from: CommissionInquiry-status
  curatorReply: string | null; // data-from: CommissionInquiry-curatorReply
  repliedAt: string | null; // data-from: CommissionInquiry-repliedAt
  repliedById: string | null; // data-from: CommissionInquiry-repliedById
  createdAt: Date; // data-from: CommissionInquiry-createdAt
  inquiryDate?: string;
}

export interface CollectionItem {
  id: string; // data-from: PhotoCollection-id
  title: string; // data-from: PhotoCollection-title
  rollNumber: string; // data-from: PhotoCollection-rollNumber
  medium: string; // data-from: PhotoCollection-medium
  curatorNote: string; // data-from: PhotoCollection-curatorNote
  aspect: AspectOrientation; // data-from: PhotoCollection-aspect
  aspectRatioClass: string; // data-from: PhotoCollection-aspectRatioClass
  coverImage: string | null; // data-from: PhotoCollection-coverImage data-role: image_url
  imageCount: number; // data-from: PhotoCollection-imageCount
  workCount?: number;
  isVisible: boolean; // data-from: PhotoCollection-isVisible
  featuredOnHome: boolean; // data-from: PhotoCollection-featuredOnHome
  sortOrder: number; // data-from: PhotoCollection-sortOrder
  createdAt: Date; // data-from: PhotoCollection-createdAt
}

export interface OverviewStat {
  label: string;
  value: string;
  subtext: string;
  badge: string;
}

export interface AdminHomeOverviewData {
  stats: OverviewStat[];
  collections: CollectionItem[];
  inquiries: InquiryItem[];
}

export interface CreateCollectionInput {
  title: string;
  rollNumber: string;
  medium: string;
  curatorNote: string;
  aspect: AspectOrientation;
  aspectRatioClass: string;
  coverImage?: string | null;
  imageCount: number;
  isVisible: boolean;
  featuredOnHome: boolean;
  sortOrder?: number;
}

export interface UpdateCollectionVisibilityInput {
  id: string;
  isVisible: boolean;
}

export interface UpdateCollectionFeaturedInput {
  id: string;
  featuredOnHome: boolean;
}

export interface UpdateInquiryStatusInput {
  id: string;
  status: InquiryStatus;
}

export interface SendInquiryReplyInput {
  id: string;
  curatorReply: string;
}