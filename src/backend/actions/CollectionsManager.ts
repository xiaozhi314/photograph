'use server';

import prisma from '@/tools/prisma';
import { withResult } from '@/backend/action_utils';
import {
  CollectionsManagerData,
  PhotoCollectionItem,
  PhotographyWorkPlate,
  SaveCollectionInput,
  AspectOrientation,
} from '@/backend/types/CollectionsManager';

/**
 * Curatorial query: Fetches collections, associated master plates, and computes darkroom overview metrics.
 * Domain Rule: Curator admin has administrative authority to oversee all collections and master plates.
 */
export async function getCollectionsManagerData(): Promise<CollectionsManagerData> {
  return withResult(async () => {
    const [rawCollections, rawPlates] = await Promise.all([
      prisma.photoCollection.findMany({
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.photographyWork.findMany({
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      }),
    ]);

    const collections: PhotoCollectionItem[] = rawCollections.map((col) => ({
      id: col.id, // data-from: PhotoCollection-id
      title: col.title, // data-from: PhotoCollection-title
      rollNumber: col.rollNumber, // data-from: PhotoCollection-rollNumber
      medium: col.medium, // data-from: PhotoCollection-medium
      curatorNote: col.curatorNote, // data-from: PhotoCollection-curatorNote
      aspect: col.aspect as AspectOrientation, // data-from: PhotoCollection-aspect
      aspectRatioClass: col.aspectRatioClass, // data-from: PhotoCollection-aspectRatioClass
      coverImage: col.coverImage, // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: col.imageCount, // data-from: PhotoCollection-imageCount
      isVisible: col.isVisible, // data-from: PhotoCollection-isVisible
      featuredOnHome: col.featuredOnHome, // data-from: PhotoCollection-featuredOnHome
      sortOrder: col.sortOrder, // data-from: PhotoCollection-sortOrder
      createdAt: col.createdAt, // data-from: PhotoCollection-createdAt
      updatedAt: col.updatedAt, // data-from: PhotoCollection-updatedAt
    }));

    const plates: PhotographyWorkPlate[] = rawPlates.map((plate) => ({
      id: plate.id, // data-from: PhotographyWork-id
      title: plate.title, // data-from: PhotographyWork-title
      categoryId: plate.categoryId, // data-from: PhotographyWork-categoryId
      collectionId: plate.collectionId, // data-from: PhotographyWork-collectionId
      seriesName: plate.seriesName, // data-from: PhotographyWork-seriesName
      location: plate.location, // data-from: PhotographyWork-location
      year: plate.year, // data-from: PhotographyWork-year
      medium: plate.medium, // data-from: PhotographyWork-medium
      edition: plate.edition, // data-from: PhotographyWork-edition
      aspectRatio: plate.aspectRatio as AspectOrientation, // data-from: PhotographyWork-aspectRatio
      statement: plate.statement, // data-from: PhotographyWork-statement
      imageUrl: plate.imageUrl, // data-from: PhotographyWork-imageUrl data-role: image_url
      isFeatured: plate.isFeatured, // data-from: PhotographyWork-isFeatured
      isArchived: plate.isArchived, // data-from: PhotographyWork-isArchived
      sortOrder: plate.sortOrder, // data-from: PhotographyWork-sortOrder
      createdAt: plate.createdAt, // data-from: PhotographyWork-createdAt
      updatedAt: plate.updatedAt, // data-from: PhotographyWork-updatedAt
    }));

    const stats = {
      totalCollections: collections.length,
      visibleOnWallCount: collections.filter((c) => c.isVisible).length,
      featuredOnHomeCount: collections.filter((c) => c.featuredOnHome).length,
      totalCatalogedPlates: plates.length,
    };

    return {
      collections,
      plates,
      stats,
    };
  })();
}

/**
 * Toggles exhibition wall visibility (isVisible) for a series folio.
 * Domain Rule: Public visitors can only view series marked isVisible=true.
 */
export async function toggleCollectionVisibility(id: string, isVisible: boolean): Promise<PhotoCollectionItem> {
  return withResult(async () => {
    const updated = await prisma.photoCollection.update({
      where: { id },
      data: { isVisible },
    });

    return {
      id: updated.id, // data-from: PhotoCollection-id
      title: updated.title, // data-from: PhotoCollection-title
      rollNumber: updated.rollNumber, // data-from: PhotoCollection-rollNumber
      medium: updated.medium, // data-from: PhotoCollection-medium
      curatorNote: updated.curatorNote, // data-from: PhotoCollection-curatorNote
      aspect: updated.aspect as AspectOrientation, // data-from: PhotoCollection-aspect
      aspectRatioClass: updated.aspectRatioClass, // data-from: PhotoCollection-aspectRatioClass
      coverImage: updated.coverImage, // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: updated.imageCount, // data-from: PhotoCollection-imageCount
      isVisible: updated.isVisible, // data-from: PhotoCollection-isVisible
      featuredOnHome: updated.featuredOnHome, // data-from: PhotoCollection-featuredOnHome
      sortOrder: updated.sortOrder, // data-from: PhotoCollection-sortOrder
      createdAt: updated.createdAt, // data-from: PhotoCollection-createdAt
      updatedAt: updated.updatedAt, // data-from: PhotoCollection-updatedAt
    };
  })();
}

/**
 * Toggles featured_on_home pin for a series folio.
 * Domain Rule: Pin to featured highlight on home wall.
 */
export async function toggleCollectionFeatured(id: string, featuredOnHome: boolean): Promise<PhotoCollectionItem> {
  return withResult(async () => {
    const updated = await prisma.photoCollection.update({
      where: { id },
      data: { featuredOnHome },
    });

    return {
      id: updated.id, // data-from: PhotoCollection-id
      title: updated.title, // data-from: PhotoCollection-title
      rollNumber: updated.rollNumber, // data-from: PhotoCollection-rollNumber
      medium: updated.medium, // data-from: PhotoCollection-medium
      curatorNote: updated.curatorNote, // data-from: PhotoCollection-curatorNote
      aspect: updated.aspect as AspectOrientation, // data-from: PhotoCollection-aspect
      aspectRatioClass: updated.aspectRatioClass, // data-from: PhotoCollection-aspectRatioClass
      coverImage: updated.coverImage, // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: updated.imageCount, // data-from: PhotoCollection-imageCount
      isVisible: updated.isVisible, // data-from: PhotoCollection-isVisible
      featuredOnHome: updated.featuredOnHome, // data-from: PhotoCollection-featuredOnHome
      sortOrder: updated.sortOrder, // data-from: PhotoCollection-sortOrder
      createdAt: updated.createdAt, // data-from: PhotoCollection-createdAt
      updatedAt: updated.updatedAt, // data-from: PhotoCollection-updatedAt
    };
  })();
}

/**
 * Creates or updates a series folio in the catalog.
 * Domain Rule: Persists title, rollNumber, medium, curatorNote, aspect, aspectRatioClass, coverImage, imageCount, sortOrder, isVisible, and featuredOnHome.
 */
export async function saveCollectionFolio(input: SaveCollectionInput): Promise<PhotoCollectionItem> {
  return withResult(async () => {
    if (input.id) {
      // Update existing collection
      const updated = await prisma.photoCollection.update({
        where: { id: input.id },
        data: {
          title: input.title,
          rollNumber: input.rollNumber,
          medium: input.medium,
          curatorNote: input.curatorNote,
          aspect: input.aspect,
          aspectRatioClass: input.aspectRatioClass,
          coverImage: input.coverImage,
          imageCount: input.imageCount,
          isVisible: input.isVisible,
          featuredOnHome: input.featuredOnHome,
          sortOrder: input.sortOrder,
        },
      });

      return {
        id: updated.id, // data-from: PhotoCollection-id
        title: updated.title, // data-from: PhotoCollection-title
        rollNumber: updated.rollNumber, // data-from: PhotoCollection-rollNumber
        medium: updated.medium, // data-from: PhotoCollection-medium
        curatorNote: updated.curatorNote, // data-from: PhotoCollection-curatorNote
        aspect: updated.aspect as AspectOrientation, // data-from: PhotoCollection-aspect
        aspectRatioClass: updated.aspectRatioClass, // data-from: PhotoCollection-aspectRatioClass
        coverImage: updated.coverImage, // data-from: PhotoCollection-coverImage data-role: image_url
        imageCount: updated.imageCount, // data-from: PhotoCollection-imageCount
        isVisible: updated.isVisible, // data-from: PhotoCollection-isVisible
        featuredOnHome: updated.featuredOnHome, // data-from: PhotoCollection-featuredOnHome
        sortOrder: updated.sortOrder, // data-from: PhotoCollection-sortOrder
        createdAt: updated.createdAt, // data-from: PhotoCollection-createdAt
        updatedAt: updated.updatedAt, // data-from: PhotoCollection-updatedAt
      };
    }

    // Create new collection
    const created = await prisma.photoCollection.create({
      data: {
        title: input.title,
        rollNumber: input.rollNumber,
        medium: input.medium,
        curatorNote: input.curatorNote,
        aspect: input.aspect,
        aspectRatioClass: input.aspectRatioClass,
        coverImage: input.coverImage,
        imageCount: input.imageCount,
        isVisible: input.isVisible,
        featuredOnHome: input.featuredOnHome,
        sortOrder: input.sortOrder,
      },
    });

    return {
      id: created.id, // data-from: PhotoCollection-id
      title: created.title, // data-from: PhotoCollection-title
      rollNumber: created.rollNumber, // data-from: PhotoCollection-rollNumber
      medium: created.medium, // data-from: PhotoCollection-medium
      curatorNote: created.curatorNote, // data-from: PhotoCollection-curatorNote
      aspect: created.aspect as AspectOrientation, // data-from: PhotoCollection-aspect
      aspectRatioClass: created.aspectRatioClass, // data-from: PhotoCollection-aspectRatioClass
      coverImage: created.coverImage, // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: created.imageCount, // data-from: PhotoCollection-imageCount
      isVisible: created.isVisible, // data-from: PhotoCollection-isVisible
      featuredOnHome: created.featuredOnHome, // data-from: PhotoCollection-featuredOnHome
      sortOrder: created.sortOrder, // data-from: PhotoCollection-sortOrder
      createdAt: created.createdAt, // data-from: PhotoCollection-createdAt
      updatedAt: created.updatedAt, // data-from: PhotoCollection-updatedAt
    };
  })();
}