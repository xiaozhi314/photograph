export type AspectOrientation = "PORTRAIT" | "LANDSCAPE";

export interface PhotoCollectionItem {
  id: string; // data-from: PhotoCollection-id
  title: string; // data-from: PhotoCollection-title
  rollNumber: string; // data-from: PhotoCollection-rollNumber
  medium: string; // data-from: PhotoCollection-medium
  curatorNote: string; // data-from: PhotoCollection-curatorNote
  aspect: AspectOrientation; // data-from: PhotoCollection-aspect
  aspectRatioClass: string; // data-from: PhotoCollection-aspectRatioClass
  coverImage: string | null; // data-from: PhotoCollection-coverImage data-role: image_url
  imageCount: number; // data-from: PhotoCollection-imageCount
  isVisible: boolean; // data-from: PhotoCollection-isVisible
  featuredOnHome: boolean; // data-from: PhotoCollection-featuredOnHome
  sortOrder: number; // data-from: PhotoCollection-sortOrder
  createdAt: Date; // data-from: PhotoCollection-createdAt
  updatedAt: Date; // data-from: PhotoCollection-updatedAt
}

export interface PhotographyWorkPlate {
  id: string; // data-from: PhotographyWork-id
  title: string; // data-from: PhotographyWork-title
  categoryId: string; // data-from: PhotographyWork-categoryId
  collectionId: string | null; // data-from: PhotographyWork-collectionId
  seriesName: string; // data-from: PhotographyWork-seriesName
  location: string; // data-from: PhotographyWork-location
  year: number; // data-from: PhotographyWork-year
  medium: string; // data-from: PhotographyWork-medium
  edition: string; // data-from: PhotographyWork-edition
  aspectRatio: AspectOrientation; // data-from: PhotographyWork-aspectRatio
  statement: string; // data-from: PhotographyWork-statement
  imageUrl: string; // data-from: PhotographyWork-imageUrl data-role: image_url
  isFeatured: boolean; // data-from: PhotographyWork-isFeatured
  isArchived: boolean; // data-from: PhotographyWork-isArchived
  sortOrder: number; // data-from: PhotographyWork-sortOrder
  createdAt: Date; // data-from: PhotographyWork-createdAt
  updatedAt: Date; // data-from: PhotographyWork-updatedAt
}

export interface CollectionsOverviewStats {
  totalCollections: number;
  visibleOnWallCount: number;
  featuredOnHomeCount: number;
  totalCatalogedPlates: number;
}

export interface CollectionsManagerData {
  collections: PhotoCollectionItem[];
  plates: PhotographyWorkPlate[];
  stats: CollectionsOverviewStats;
}

export interface SaveCollectionInput {
  id?: string;
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
  sortOrder: number;
}