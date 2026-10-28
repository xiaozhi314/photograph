export type AspectOrientation = "PORTRAIT" | "LANDSCAPE";

export interface PhotoCategoryItem {
  id: string; // data-from: PhotoCategory-id
  slug: string; // data-from: PhotoCategory-slug
  name: string; // data-from: PhotoCategory-name
  description: string | null; // data-from: PhotoCategory-description
  sortOrder: number; // data-from: PhotoCategory-sortOrder
  worksCount: number;
}

export interface PhotoCollectionRef {
  id: string; // data-from: PhotoCollection-id
  title: string; // data-from: PhotoCollection-title
  rollNumber: string; // data-from: PhotoCollection-rollNumber
  medium: string; // data-from: PhotoCollection-medium
  curatorNote: string; // data-from: PhotoCollection-curatorNote
  aspect: AspectOrientation; // data-from: PhotoCollection-aspect
  aspectRatioClass: string; // data-from: PhotoCollection-aspectRatioClass
  coverImage: string | null; // data-from: PhotoCollection-coverImage data-role: image_url
  imageCount: number; // data-from: PhotoCollection-imageCount
}

export interface PhotographyWorkItem {
  id: string; // data-from: PhotographyWork-id
  title: string; // data-from: PhotographyWork-title
  categoryId: string; // data-from: PhotographyWork-categoryId
  categorySlug: string; // data-from: PhotoCategory-slug
  categoryName: string; // data-from: PhotoCategory-name
  collectionId: string | null; // data-from: PhotographyWork-collectionId
  collection: PhotoCollectionRef | null;
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
}

export interface PortfolioData {
  categories: PhotoCategoryItem[];
  works: PhotographyWorkItem[];
  totalWorks: number;
}