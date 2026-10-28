'use server';

import prisma from '@/tools/prisma';
import { withResult } from '@/frontend/action_utils';
import {
  PortfolioData,
  PhotoCategoryItem,
  PhotographyWorkItem,
  PhotoCollectionRef,
  AspectOrientation,
} from '@/frontend/types/WorksPortfolio';

/**
 * Server Action: getPortfolioData
 * Fetches curatorial photo categories ordered by sortOrder,
 * and active, non-archived photography works (isArchived = false) ordered by sortOrder.
 * Public visitors (Guest and Client) share identical read access.
 */
export async function getPortfolioData(): Promise<PortfolioData> {
  return withResult(async () => {
    // 1. Fetch all photo categories ordered by sortOrder asc
    const categoriesDb = await prisma.photoCategory.findMany({
      orderBy: {
        sortOrder: 'asc',
      },
      include: {
        _count: {
          select: {
            works: {
              where: {
                isArchived: false,
              },
            },
          },
        },
      },
    });

    // 2. Fetch all active, non-archived photography works with associated collection and category
    const worksDb = await prisma.photographyWork.findMany({
      where: {
        isArchived: false,
      },
      orderBy: {
        sortOrder: 'asc',
      },
      include: {
        category: {
          select: {
            id: true,
            slug: true,
            name: true,
          },
        },
        collection: {
          select: {
            id: true,
            title: true,
            rollNumber: true,
            medium: true,
            curatorNote: true,
            aspect: true,
            aspectRatioClass: true,
            coverImage: true,
            imageCount: true,
          },
        },
      },
    });

    const categories: PhotoCategoryItem[] = categoriesDb.map((cat) => ({
      id: cat.id,
      slug: cat.slug,
      name: cat.name,
      description: cat.description,
      sortOrder: cat.sortOrder,
      worksCount: cat._count.works,
    }));

    const works: PhotographyWorkItem[] = worksDb.map((work) => {
      let collectionRef: PhotoCollectionRef | null = null;
      if (work.collection) {
        collectionRef = {
          id: work.collection.id,
          title: work.collection.title,
          rollNumber: work.collection.rollNumber,
          medium: work.collection.medium,
          curatorNote: work.collection.curatorNote,
          aspect: work.collection.aspect as AspectOrientation,
          aspectRatioClass: work.collection.aspectRatioClass,
          coverImage: work.collection.coverImage,
          imageCount: work.collection.imageCount,
        };
      }

      return {
        id: work.id,
        title: work.title,
        categoryId: work.categoryId,
        categorySlug: work.category.slug,
        categoryName: work.category.name,
        collectionId: work.collectionId,
        collection: collectionRef,
        seriesName: work.seriesName,
        location: work.location,
        year: work.year,
        medium: work.medium,
        edition: work.edition,
        aspectRatio: work.aspectRatio as AspectOrientation,
        statement: work.statement,
        imageUrl: work.imageUrl,
        isFeatured: work.isFeatured,
        isArchived: work.isArchived,
        sortOrder: work.sortOrder,
      };
    });

    return {
      categories,
      works,
      totalWorks: works.length,
    };
  })();
}