'use server';

import prisma from '@/tools/prisma';
import {
  withResult,
  requireAuth,
  requireRole,
  getAuthContext,
  UserRole,
} from '@/backend/action_utils';
import type {
  AdminHomeOverviewData,
  CollectionItem,
  InquiryItem,
  CreateCollectionInput,
  UpdateCollectionVisibilityInput,
  UpdateCollectionFeaturedInput,
  UpdateInquiryStatusInput,
  SendInquiryReplyInput,
  AspectOrientation,
  ProjectType,
  InquiryStatus
} from '@/backend/types/AdminHome';

// Fetch all dashboard overview data for curator admin
export async function getAdminHomeOverview(): Promise<AdminHomeOverviewData> {
  return withResult(async () => {
    // 1. Portfolio stats aggregations
    // Master plates count from photography_work
    const totalMasterPlates = await prisma.photographyWork.count({
      where: { isArchived: false },
    });

    // Active & home-featured folios from photo_collection
    const activeFoliosCount = await prisma.photoCollection.count({
      where: { isVisible: true },
    });
    const featuredFoliosCount = await prisma.photoCollection.count({
      where: { featuredOnHome: true },
    });

    // Inquiries pending consultation (NEW or IN_REVIEW)
    const pendingInquiriesCount = await prisma.commissionInquiry.count({
      where: {
        status: { in: ['NEW', 'IN_REVIEW'] },
      },
    });

    // Total inquiries & replied inquiries for response completion rate calculation
    const totalInquiries = await prisma.commissionInquiry.count();
    const repliedInquiries = await prisma.commissionInquiry.count({
      where: { status: 'REPLIED' },
    });
    const completionRatePercent =
      totalInquiries > 0 ? Math.round((repliedInquiries / totalInquiries) * 100) : 100;

    const stats = [
      {
        label: 'Total Published Works',
        value: totalMasterPlates.toString(),
        subtext: 'Cataloged active master plates',
        badge: 'ARCHIVE OK',
      },
      {
        label: 'Active Series / Folios',
        value: activeFoliosCount.toString(),
        subtext: `${featuredFoliosCount} showcased on public wall`,
        badge: 'CURATED',
      },
      {
        label: 'New Inquiries in Queue',
        value: pendingInquiriesCount.toString(),
        subtext: 'Awaiting consultation review',
        badge: 'ACTION REQ',
      },
      {
        label: 'Inquiry Completion Rate',
        value: `${completionRatePercent}%`,
        subtext: `${repliedInquiries} of ${totalInquiries} briefs dispatched`,
        badge: 'AUDIENCE',
      },
    ];

    // 2. Curated collections ordered by sortOrder ascending
    const rawCollections = await prisma.photoCollection.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: {
          select: { works: true },
        },
      },
    });

    const collections: CollectionItem[] = rawCollections.map((col) => ({
      id: col.id,
      title: col.title,
      rollNumber: col.rollNumber,
      medium: col.medium,
      curatorNote: col.curatorNote,
      aspect: col.aspect as AspectOrientation,
      aspectRatioClass: col.aspectRatioClass,
      coverImage: col.coverImage,
      imageCount: col.imageCount,
      workCount: col._count.works,
      isVisible: col.isVisible,
      featuredOnHome: col.featuredOnHome,
      sortOrder: col.sortOrder,
      createdAt: col.createdAt,
    }));

    // 3. Recent inquiries ordered by createdAt descending
    const rawInquiries = await prisma.commissionInquiry.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
    });

    const inquiries: InquiryItem[] = rawInquiries.map((inq) => ({
      id: inq.id,
      clientId: inq.clientId,
      clientName: inq.clientName,
      clientEmail: inq.clientEmail,
      organization: inq.organization,
      projectType: inq.projectType as ProjectType,
      budgetTier: inq.budgetTier,
      budgetRange: inq.budgetTier,
      projectBrief: inq.projectBrief,
      clientMessage: inq.clientMessage,
      targetTimeline: inq.targetTimeline,
      location: inq.location,
      status: inq.status as InquiryStatus,
      curatorReply: inq.curatorReply,
      repliedAt: inq.repliedAt,
      repliedById: inq.repliedById,
      createdAt: inq.createdAt,
    }));

    return {
      stats,
      collections,
      inquiries,
    };
  })();
}

// Toggle photo_collection visibility switch
export async function toggleCollectionVisibility(
  input: UpdateCollectionVisibilityInput
): Promise<CollectionItem> {
  return withResult(async () => {
    const updated = await prisma.photoCollection.update({
      where: { id: input.id },
      data: { isVisible: input.isVisible },
      include: {
        _count: { select: { works: true } },
      },
    });

    return {
      id: updated.id,
      title: updated.title,
      rollNumber: updated.rollNumber,
      medium: updated.medium,
      curatorNote: updated.curatorNote,
      aspect: updated.aspect as AspectOrientation,
      aspectRatioClass: updated.aspectRatioClass,
      coverImage: updated.coverImage,
      imageCount: updated.imageCount,
      workCount: updated._count.works,
      isVisible: updated.isVisible,
      featuredOnHome: updated.featuredOnHome,
      sortOrder: updated.sortOrder,
      createdAt: updated.createdAt,
    };
  })();
}

// Toggle photo_collection homepage highlight pin
export async function toggleCollectionFeatured(
  input: UpdateCollectionFeaturedInput
): Promise<CollectionItem> {
  return withResult(async () => {
    const updated = await prisma.photoCollection.update({
      where: { id: input.id },
      data: { featuredOnHome: input.featuredOnHome },
      include: {
        _count: { select: { works: true } },
      },
    });

    return {
      id: updated.id,
      title: updated.title,
      rollNumber: updated.rollNumber,
      medium: updated.medium,
      curatorNote: updated.curatorNote,
      aspect: updated.aspect as AspectOrientation,
      aspectRatioClass: updated.aspectRatioClass,
      coverImage: updated.coverImage,
      imageCount: updated.imageCount,
      workCount: updated._count.works,
      isVisible: updated.isVisible,
      featuredOnHome: updated.featuredOnHome,
      sortOrder: updated.sortOrder,
      createdAt: updated.createdAt,
    };
  })();
}

// Register and ingest new series folio into photo_collection
export async function createPhotoCollection(
  input: CreateCollectionInput
): Promise<CollectionItem> {
  return withResult(async () => {
    // Determine sort order if not specified
    let sortOrder = input.sortOrder ?? 0;
    if (input.sortOrder === undefined) {
      const highest = await prisma.photoCollection.findFirst({
        orderBy: { sortOrder: 'desc' },
        select: { sortOrder: true },
      });
      sortOrder = (highest?.sortOrder ?? 0) + 1;
    }

    const created = await prisma.photoCollection.create({
      data: {
        title: input.title,
        rollNumber: input.rollNumber,
        medium: input.medium,
        curatorNote: input.curatorNote,
        aspect: input.aspect,
        aspectRatioClass: input.aspectRatioClass,
        coverImage: input.coverImage ?? null,
        imageCount: input.imageCount,
        isVisible: input.isVisible,
        featuredOnHome: input.featuredOnHome,
        sortOrder: sortOrder,
      },
      include: {
        _count: { select: { works: true } },
      },
    });

    return {
      id: created.id,
      title: created.title,
      rollNumber: created.rollNumber,
      medium: created.medium,
      curatorNote: created.curatorNote,
      aspect: created.aspect as AspectOrientation,
      aspectRatioClass: created.aspectRatioClass,
      coverImage: created.coverImage,
      imageCount: created.imageCount,
      workCount: created._count.works,
      isVisible: created.isVisible,
      featuredOnHome: created.featuredOnHome,
      sortOrder: created.sortOrder,
      createdAt: created.createdAt,
    };
  })();
}

// Update commission inquiry status (e.g. NEW -> IN_REVIEW)
export async function updateInquiryStatus(
  input: UpdateInquiryStatusInput
): Promise<InquiryItem> {
  return withResult(async () => {
    const updated = await prisma.commissionInquiry.update({
      where: { id: input.id },
      data: { status: input.status },
    });

    return {
      id: updated.id,
      clientId: updated.clientId,
      clientName: updated.clientName,
      clientEmail: updated.clientEmail,
      organization: updated.organization,
      projectType: updated.projectType as ProjectType,
      budgetTier: updated.budgetTier,
      budgetRange: updated.budgetTier,
      projectBrief: updated.projectBrief,
      clientMessage: updated.clientMessage,
      targetTimeline: updated.targetTimeline,
      location: updated.location,
      status: updated.status as InquiryStatus,
      curatorReply: updated.curatorReply,
      repliedAt: updated.repliedAt,
      repliedById: updated.repliedById,
      createdAt: updated.createdAt,
    };
  })();
}

// Compose consultation notes and dispatch reply, updating status to REPLIED with repliedAt and repliedBy
export async function sendInquiryReply(
  input: SendInquiryReplyInput
): Promise<InquiryItem> {
  return withResult(async () => {
    const auth = tryGetAuthContext();
    const repliedById = auth?.userId ?? null;
    const nowTimestamp = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const updated = await prisma.commissionInquiry.update({
      where: { id: input.id },
      data: {
        status: 'REPLIED',
        curatorReply: input.curatorReply,
        repliedAt: nowTimestamp,
        repliedById: repliedById,
      },
    });

    return {
      id: updated.id,
      clientId: updated.clientId,
      clientName: updated.clientName,
      clientEmail: updated.clientEmail,
      organization: updated.organization,
      projectType: updated.projectType as ProjectType,
      budgetTier: updated.budgetTier,
      budgetRange: updated.budgetTier,
      projectBrief: updated.projectBrief,
      clientMessage: updated.clientMessage,
      targetTimeline: updated.targetTimeline,
      location: updated.location,
      status: updated.status as InquiryStatus,
      curatorReply: updated.curatorReply,
      repliedAt: updated.repliedAt,
      repliedById: updated.repliedById,
      createdAt: updated.createdAt,
    };
  })();
}

function tryGetAuthContext() {
  try {
    return getAuthContext();
  } catch {
    return null;
  }
}