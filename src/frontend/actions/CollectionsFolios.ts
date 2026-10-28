'use server';

import prisma from '@/tools/prisma';
import { withResult } from '@/@base/BaseActionFun';
import type {
  PhotoCollectionItem,
  PhotographyWorkItem,
  FoliosPageData,
  AspectOrientation
} from '@/frontend/types/CollectionsFolios';

/**
 * Loads all visible series folios and the active folio's master plates.
 * Domain Rule: Public visitors and clients can only view collections where isVisible=true.
 * Photography works must match collectionId and isArchived=false, ordered by sortOrder.
 */
export async function getFoliosPageData(collectionId?: string): Promise<FoliosPageData> {
  return withResult(async () => {
    // 1. Fetch all visible collections ordered by sortOrder ascending
    const collectionsRaw = await prisma.photoCollection.findMany({
      where: {
        isVisible: true,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });

    const collections: PhotoCollectionItem[] = collectionsRaw.map((c) => ({
      id: c.id,
      title: c.title,
      rollNumber: c.rollNumber,
      medium: c.medium,
      curatorNote: c.curatorNote,
      aspect: c.aspect as AspectOrientation,
      aspectRatioClass: c.aspectRatioClass,
      coverImage: c.coverImage,
      imageCount: c.imageCount,
      isVisible: c.isVisible,
      featuredOnHome: c.featuredOnHome,
      sortOrder: c.sortOrder,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    }));

    // 2. Identify the active collection: if collectionId provided, find matching; else pick the first visible
    let activeCollection: PhotoCollectionItem | null = null;
    if (collectionId) {
      activeCollection = collections.find((c) => c.id === collectionId) || null;
    }
    if (!activeCollection && collections.length > 0) {
      activeCollection = collections[0];
    }

    // 3. Fetch non-archived photography works for the active collection
    let works: PhotographyWorkItem[] = [];
    if (activeCollection) {
      const worksRaw = await prisma.photographyWork.findMany({
        where: {
          collectionId: activeCollection.id,
          isArchived: false,
        },
        orderBy: {
          sortOrder: 'asc',
        },
      });

      works = worksRaw.map((w) => ({
        id: w.id,
        title: w.title,
        categoryId: w.categoryId,
        collectionId: w.collectionId,
        seriesName: w.seriesName,
        location: w.location,
        year: w.year,
        medium: w.medium,
        edition: w.edition,
        aspectRatio: w.aspectRatio as AspectOrientation,
        statement: w.statement,
        imageUrl: w.imageUrl,
        isFeatured: w.isFeatured,
        isArchived: w.isArchived,
        sortOrder: w.sortOrder,
        createdAt: w.createdAt,
        updatedAt: w.updatedAt,
      }));
    }

    return {
      collections,
      activeCollection,
      works,
    };
  })();
}

/**
 * Fetches works for a specific collection dynamically when switching folios.
 */
export async function getWorksByCollectionId(collectionId: string): Promise<PhotographyWorkItem[]> {
  return withResult(async () => {
    const worksRaw = await prisma.photographyWork.findMany({
      where: {
        collectionId,
        isArchived: false,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });

    return worksRaw.map((w) => ({
      id: w.id,
      title: w.title,
      categoryId: w.categoryId,
      collectionId: w.collectionId,
      seriesName: w.seriesName,
      location: w.location,
      year: w.year,
      medium: w.medium,
      edition: w.edition,
      aspectRatio: w.aspectRatio as AspectOrientation,
      statement: w.statement,
      imageUrl: w.imageUrl,
      isFeatured: w.isFeatured,
      isArchived: w.isArchived,
      sortOrder: w.sortOrder,
      createdAt: w.createdAt,
      updatedAt: w.updatedAt,
    }));
  })();
}