import type { GeneratedImageFilename } from "@/lib/generated-images/backend-admin_home";

export type InquiryStatus = "NEW" | "IN_REVIEW" | "REPLIED";
export type ProjectType = "Editorial" | "Portrait" | "Commercial";

export interface InquiryItem {
  id: string;
  clientName: string;
  clientEmail: string;
  projectType: ProjectType;
  inquiryDate: string;
  budgetRange: string;
  status: InquiryStatus;
  projectBrief: string;
  clientMessage: string;
  targetTimeline: string;
  location: string;
}

export interface CollectionItem {
  id: GeneratedImageFilename;
  title: string;
  rollNumber: string;
  imageCount: number;
  aspect: "portrait" | "landscape";
  aspectRatioClass: string;
  isVisible: boolean;
  featuredOnHome: boolean;
  curatorNote: string;
  medium: string;
}

export interface OverviewStat {
  label: string;
  value: string;
  subtext: string;
  badge: string;
}