'use server';

import prisma from '@/tools/prisma';
import { withResult, requireRole, UserRole } from '@/backend/action_utils';
import {
  PhotoCategory,
  PhotoCollection,
  PhotographyWork,
  CatalogInitialData,
  WorkFormValues,
  SaveCategoryInput,
  AspectOrientation,
} from '@/backend/types/WorksCatalog';

/**
 * Fetch all catalog data: PhotoCategory, PhotoCollection, and PhotographyWork
 * Reads categories ordered by sortOrder ascending.
 * Reads collections ordered by sortOrder ascending.
 * Reads works ordered by sortOrder ascending, then updatedAt descending.
 */
export async function getWorksCatalogData(): Promise<CatalogInitialData> {
  return withResult(async () => {
    const [categoriesRaw, collectionsRaw, worksRaw] = await Promise.all([
      prisma.photoCategory.findMany({
        orderBy: { sortOrder: 'asc' },
      }),
      prisma.photoCollection.findMany({
        orderBy: { sortOrder: 'asc' },
      }),
      prisma.photographyWork.findMany({
        orderBy: [{ sortOrder: 'asc' }, { updatedAt: 'desc' }],
      }),
    ]);

    const categories: PhotoCategory[] = categoriesRaw.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      sortOrder: c.sortOrder,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    }));

    const collections: PhotoCollection[] = collectionsRaw.map((col) => ({
      id: col.id,
      title: col.title,
      rollNumber: col.rollNumber,
      medium: col.medium,
      curatorNote: col.curatorNote,
      aspect: col.aspect as AspectOrientation,
      aspectRatioClass: col.aspectRatioClass,
      coverImage: col.coverImage,
      imageCount: col.imageCount,
      isVisible: col.isVisible,
      featuredOnHome: col.featuredOnHome,
      sortOrder: col.sortOrder,
      createdAt: col.createdAt,
      updatedAt: col.updatedAt,
    }));

    const works: PhotographyWork[] = worksRaw.map((w) => ({
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

    return { categories, collections, works };
  })();
}

/**
 * Create or update a photography master plate record
 * Role requirement: CURATOR_ADMIN
 */
export async function savePhotographyWork(
  input: WorkFormValues
): Promise<PhotographyWork> {
  return withResult(async () => {
    // Curatorial admin check
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    const dataPayload = {
      title: input.title.trim(),
      categoryId: input.categoryId,
      collectionId: input.collectionId ? input.collectionId : null,
      seriesName: input.seriesName.trim(),
      location: input.location.trim(),
      year: Number(input.year),
      medium: input.medium.trim(),
      edition: input.edition.trim(),
      aspectRatio: input.aspectRatio as AspectOrientation,
      statement: input.statement.trim(),
      imageUrl: input.imageUrl.trim(),
      isFeatured: Boolean(input.isFeatured),
      isArchived: Boolean(input.isArchived),
      sortOrder: Number(input.sortOrder) || 0,
    };

    let result;
    if (input.id) {
      result = await prisma.photographyWork.update({
        where: { id: input.id },
        data: dataPayload,
      });
    } else {
      result = await prisma.photographyWork.create({
        data: dataPayload,
      });
    }

    return {
      id: result.id,
      title: result.title,
      categoryId: result.categoryId,
      collectionId: result.collectionId,
      seriesName: result.seriesName,
      location: result.location,
      year: result.year,
      medium: result.medium,
      edition: result.edition,
      aspectRatio: result.aspectRatio as AspectOrientation,
      statement: result.statement,
      imageUrl: result.imageUrl,
      isFeatured: result.isFeatured,
      isArchived: result.isArchived,
      sortOrder: result.sortOrder,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
  })();
}

/**
 * Toggle is_featured status on a master plate
 * Role requirement: CURATOR_ADMIN
 */
export async function toggleFeaturedWork(
  workId: string
): Promise<{ id: string; isFeatured: boolean }> {
  return withResult(async () => {
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    const existing = await prisma.photographyWork.findUnique({
      where: { id: workId },
      select: { isFeatured: true },
    });

    if (!existing) {
      throw new Error(`Master plate ${workId} not found`);
    }

    const updated = await prisma.photographyWork.update({
      where: { id: workId },
      data: { isFeatured: !existing.isFeatured },
      select: { id: true, isFeatured: true },
    });

    return updated;
  })();
}

/**
 * Toggle is_archived status on a master plate
 * Role requirement: CURATOR_ADMIN
 */
export async function toggleArchivedWork(
  workId: string
): Promise<{ id: string; isArchived: boolean }> {
  return withResult(async () => {
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    const existing = await prisma.photographyWork.findUnique({
      where: { id: workId },
      select: { isArchived: true },
    });

    if (!existing) {
      throw new Error(`Master plate ${workId} not found`);
    }

    const updated = await prisma.photographyWork.update({
      where: { id: workId },
      data: { isArchived: !existing.isArchived },
      select: { id: true, isArchived: true },
    });

    return updated;
  })();
}

/**
 * Delete a master plate record
 * Role requirement: CURATOR_ADMIN
 */
export async function deletePhotographyWork(
  workId: string
): Promise<{ id: string; success: boolean }> {
  return withResult(async () => {
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    await prisma.photographyWork.delete({
      where: { id: workId },
    });

    return { id: workId, success: true };
  })();
}

/**
 * Create or update a curatorial photo category
 * Role requirement: CURATOR_ADMIN
 */
export async function savePhotoCategory(
  input: SaveCategoryInput
): Promise<PhotoCategory> {
  return withResult(async () => {
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    const dataPayload = {
      name: input.name.trim(),
      slug: input.slug.trim().toLowerCase(),
      description: input.description?.trim() || null,
      sortOrder: typeof input.sortOrder === 'number' ? input.sortOrder : 0,
    };

    let record;
    if (input.id) {
      record = await prisma.photoCategory.update({
        where: { id: input.id },
        data: dataPayload,
      });
    } else {
      record = await prisma.photoCategory.create({
        data: dataPayload,
      });
    }

    return {
      id: record.id,
      slug: record.slug,
      name: record.name,
      description: record.description,
      sortOrder: record.sortOrder,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  })();
}

/**
 * Reorder curatorial categories sequence
 * Role requirement: CURATOR_ADMIN
 */
export async function reorderPhotoCategories(
  categoryIds: string[]
): Promise<PhotoCategory[]> {
  return withResult(async () => {
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    // Batch update sort orders
    await prisma.$transaction(
      categoryIds.map((id, index) =>
        prisma.photoCategory.update({
          where: { id },
          data: { sortOrder: index + 1 },
        })
      )
    );

    const updated = await prisma.photoCategory.findMany({
      orderBy: { sortOrder: 'asc' },
    });

    return updated.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      sortOrder: c.sortOrder,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    }));
  })();
}

/**
 * Reorder photography works sequence
 * Role requirement: CURATOR_ADMIN
 */
export async function reorderPhotographyWorks(
  workIds: string[]
): Promise<{ success: boolean }> {
  return withResult(async () => {
    const roleAuth = requireRole(UserRole.CuratorAdmin);
    await roleAuth(async () => {})();

    await prisma.$transaction(
      workIds.map((id, index) =>
        prisma.photographyWork.update({
          where: { id },
          data: { sortOrder: index + 1 },
        })
      )
    );

    return { success: true };
  })();
}