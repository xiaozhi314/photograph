import type { GeneratedImageFilename } from "@/lib/generated-images/frontend-home";

export type WorkCategory = "all" | "architecture" | "portraiture" | "still-life";

export interface PhotographyWork {
  id: GeneratedImageFilename;
  title: string;
  category: "architecture" | "portraiture" | "still-life";
  series: string;
  location: string;
  year: string;
  medium: string;
  edition: string;
  aspectRatio: "portrait" | "landscape";
  statement: string;
}

export interface ExhibitionRecord {
  id: string;
  year: string;
  title: string;
  institution: string;
  city: string;
  type: "Solo Exhibition" | "Institutional" | "Biennial";
  pressMention: string;
}

export interface CommissionInquiryState {
  fullName: string;
  email: string;
  organization: string;
  serviceType: "Architectural Monograph" | "Editorial Portraiture" | "Curated Still Life / Commercial Campaign" | "Private Print Acquisition";
  budgetTier: "$5,000 – $10,000" | "$10,000 – $25,000" | "$25,000+" | "Institutional / Grant-Funded";
  projectScope: string;
  timeline: string;
}