export type ExhibitionType = "SOLO_EXHIBITION" | "INSTITUTIONAL" | "BIENNIAL" | "MONOGRAPH";

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
  createdAt?: Date; // data-from: ExhibitionRecord-createdAt
  updatedAt?: Date; // data-from: ExhibitionRecord-updatedAt
}

export interface StudioBioData {
  id: string; // data-from: StudioBio-id
  artistName: string; // data-from: StudioBio-artistName
  studioName: string; // data-from: StudioBio-studioName
  philosophyQuote: string; // data-from: StudioBio-philosophyQuote
  bioStatement: string; // data-from: StudioBio-bioStatement
  portraitImage: string | null; // data-from: StudioBio-portraitImage data-role: image_url
  atelierLocation: string; // data-from: StudioBio-atelierLocation
  activeRepresentation: string; // data-from: StudioBio-activeRepresentation
  createdAt?: Date; // data-from: StudioBio-createdAt
  updatedAt?: Date; // data-from: StudioBio-updatedAt
}

export interface ArtistExhibitionsPageData {
  studioBio: StudioBioData | null;
  exhibitions: ExhibitionRecordItem[];
}