export type AspectOrientation = "PORTRAIT" | "LANDSCAPE";

export interface PhotoCategory {
  id: string; // data-from: PhotoCategory-id
  slug: string; // data-from: PhotoCategory-slug
  name: string; // data-from: PhotoCategory-name
  description: string | null; // data-from: PhotoCategory-description
  sortOrder: number; // data-from: PhotoCategory-sortOrder
  createdAt?: Date; // data-from: PhotoCategory-createdAt
  updatedAt?: Date; // data-from: PhotoCategory-updatedAt
}

export interface PhotoCollection {
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
  createdAt?: Date; // data-from: PhotoCollection-createdAt
  updatedAt?: Date; // data-from: PhotoCollection-updatedAt
}

export interface PhotographyWork {
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
  createdAt?: Date; // data-from: PhotographyWork-createdAt
  updatedAt?: Date; // data-from: PhotographyWork-updatedAt
}

export interface CatalogFilterState {
  searchQuery: string;
  categoryId: string;
  collectionId: string;
  aspectRatio: string;
  featuredOnly: boolean;
  archivedOnly: boolean;
}

export interface WorkFormValues {
  id?: string;
  title: string;
  categoryId: string;
  collectionId: string;
  seriesName: string;
  location: string;
  year: number;
  medium: string;
  edition: string;
  aspectRatio: AspectOrientation;
  statement: string;
  imageUrl: string;
  sortOrder: number;
  isFeatured: boolean;
  isArchived: boolean;
}

export interface CatalogInitialData {
  categories: PhotoCategory[];
  collections: PhotoCollection[];
  works: PhotographyWork[];
}

export interface SaveCategoryInput {
  id?: string;
  name: string;
  slug: string;
  description?: string | null;
  sortOrder?: number;
}