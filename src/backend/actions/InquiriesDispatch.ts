'use server';

import prisma from '@/tools/prisma';
import {
  withResult,
  requireRole,
  getAuthContext,
  UserRole,
} from '@/backend/action_utils';
import {
  InquiriesQueueQueryInput,
  InquiriesQueueOutput,
  CommissionInquiryDTO,
  InquiryMetricsDTO,
  DispatchReplyInput,
  InquiryStatus,
  ProjectType,
  ServiceType,
  ServicePackageDTO,
} from '@/backend/types/InquiriesDispatch';
import { Prisma } from '../../../prisma-generated/client';

/**
 * Fetch inquiries queue with filtering, search and computed pipeline metrics.
 * Domain rule: Accessible exclusively to Curator Admin (CURATOR_ADMIN).
 * Computes turnaround times and pipeline counts dynamically.
 */
export async function getInquiriesQueue(
  input?: InquiriesQueueQueryInput
): Promise<InquiriesQueueOutput> {
  return withResult(
    requireRole(UserRole.CuratorAdmin)(async () => {
      // 1. Calculate dynamic studio metrics across all commission inquiries
      const [totalCount, newCount, inReviewCount, repliedCount, repliedInquiries] =
        await Promise.all([
          prisma.commissionInquiry.count(),
          prisma.commissionInquiry.count({ where: { status: 'NEW' } }),
          prisma.commissionInquiry.count({ where: { status: 'IN_REVIEW' } }),
          prisma.commissionInquiry.count({ where: { status: 'REPLIED' } }),
          prisma.commissionInquiry.findMany({
            where: {
              status: 'REPLIED',
              repliedAt: { not: null },
            },
            select: {
              createdAt: true,
              repliedAt: true,
            },
          }),
        ]);

      // Calculate average turnaround in hours from actual replied inquiries
      let totalTurnaroundHours = 0;
      let validRepliedRecordsCount = 0;
      for (const record of repliedInquiries) {
        if (record.repliedAt) {
          const repliedTime = new Date(record.repliedAt).getTime();
          const createdTime = record.createdAt.getTime();
          if (!isNaN(repliedTime) && repliedTime >= createdTime) {
            const hours = (repliedTime - createdTime) / (1000 * 60 * 60);
            totalTurnaroundHours += hours;
            validRepliedRecordsCount += 1;
          }
        }
      }

      const avgTurnaroundHours =
        validRepliedRecordsCount > 0
          ? Math.round((totalTurnaroundHours / validRepliedRecordsCount) * 10) / 10
          : 24.0;

      const metrics: InquiryMetricsDTO = {
        total: totalCount,
        newCount,
        inReviewCount,
        repliedCount,
        avgTurnaroundHours,
      };

      // 2. Build where filter for list query
      const where: Prisma.CommissionInquiryWhereInput = {};

      if (input?.status && input.status !== 'ALL') {
        where.status = input.status as InquiryStatus;
      }

      if (input?.projectType && input.projectType !== 'ALL') {
        where.projectType = input.projectType as ProjectType;
      }

      if (input?.search && input.search.trim()) {
        const q = input.search.trim();
        where.OR = [
          { clientName: { contains: q } },
          { clientEmail: { contains: q } },
          { organization: { contains: q } },
          { projectBrief: { contains: q } },
        ];
      }

      // 3. Query inquiries with servicePackage and repliedBy relations
      const records = await prisma.commissionInquiry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
              username: true,
            },
          },
        },
      });

      const inquiries: CommissionInquiryDTO[] = records.map((r) => {
        let pkgDTO: ServicePackageDTO | null = null;
        if (r.servicePackage) {
          pkgDTO = {
            id: r.servicePackage.id,
            title: r.servicePackage.title,
            serviceType: r.servicePackage.serviceType as ServiceType,
            basePrice: r.servicePackage.basePrice.toNumber(),
            priceDisplay: r.servicePackage.priceDisplay,
            durationEstimate: r.servicePackage.durationEstimate,
            deliverables: (Array.isArray(r.servicePackage.deliverables)
              ? r.servicePackage.deliverables
              : []) as string[],
            isActive: r.servicePackage.isActive,
            sortOrder: r.servicePackage.sortOrder,
            createdAt: r.servicePackage.createdAt,
            updatedAt: r.servicePackage.updatedAt,
          };
        }

        return {
          id: r.id,
          clientId: r.clientId,
          servicePackageId: r.servicePackageId,
          clientName: r.clientName,
          clientEmail: r.clientEmail,
          organization: r.organization,
          projectType: r.projectType as ProjectType,
          budgetTier: r.budgetTier,
          projectBrief: r.projectBrief,
          clientMessage: r.clientMessage,
          targetTimeline: r.targetTimeline,
          location: r.location,
          status: r.status as InquiryStatus,
          curatorReply: r.curatorReply,
          repliedAt: r.repliedAt,
          repliedById: r.repliedById,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
          servicePackage: pkgDTO,
          repliedByName: r.repliedBy?.fullName || r.repliedBy?.username || null,
        };
      });

      return {
        inquiries,
        metrics,
      };
    })
  )();
}

/**
 * Open consultation brief & advance status from NEW to IN_REVIEW.
 * Domain rule: Selecting an inquiry with status NEW updates status to IN_REVIEW,
 * transitioning the commission request into active curatorial assessment.
 */
export async function openInquiryReview(inquiryId: string): Promise<CommissionInquiryDTO> {
  return withResult(
    requireRole(UserRole.CuratorAdmin)(async () => {
      const existing = await prisma.commissionInquiry.findUnique({
        where: { id: inquiryId },
      });

      if (!existing) {
        throw new Error('Commission inquiry record not found');
      }

      // If already in review or replied, return without overwriting status
      let updatedRecord = existing;
      if (existing.status === 'NEW') {
        updatedRecord = await prisma.commissionInquiry.update({
          where: { id: inquiryId },
          data: {
            status: 'IN_REVIEW',
          },
        });
      }

      // Refetch with relations
      const fullRecord = await prisma.commissionInquiry.findUniqueOrThrow({
        where: { id: updatedRecord.id },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
              username: true,
            },
          },
        },
      });

      let pkgDTO: ServicePackageDTO | null = null;
      if (fullRecord.servicePackage) {
        pkgDTO = {
          id: fullRecord.servicePackage.id,
          title: fullRecord.servicePackage.title,
          serviceType: fullRecord.servicePackage.serviceType as ServiceType,
          basePrice: fullRecord.servicePackage.basePrice.toNumber(),
          priceDisplay: fullRecord.servicePackage.priceDisplay,
          durationEstimate: fullRecord.servicePackage.durationEstimate,
          deliverables: (Array.isArray(fullRecord.servicePackage.deliverables)
            ? fullRecord.servicePackage.deliverables
            : []) as string[],
          isActive: fullRecord.servicePackage.isActive,
          sortOrder: fullRecord.servicePackage.sortOrder,
          createdAt: fullRecord.servicePackage.createdAt,
          updatedAt: fullRecord.servicePackage.updatedAt,
        };
      }

      return {
        id: fullRecord.id,
        clientId: fullRecord.clientId,
        servicePackageId: fullRecord.servicePackageId,
        clientName: fullRecord.clientName,
        clientEmail: fullRecord.clientEmail,
        organization: fullRecord.organization,
        projectType: fullRecord.projectType as ProjectType,
        budgetTier: fullRecord.budgetTier,
        projectBrief: fullRecord.projectBrief,
        clientMessage: fullRecord.clientMessage,
        targetTimeline: fullRecord.targetTimeline,
        location: fullRecord.location,
        status: fullRecord.status as InquiryStatus,
        curatorReply: fullRecord.curatorReply,
        repliedAt: fullRecord.repliedAt,
        repliedById: fullRecord.repliedById,
        createdAt: fullRecord.createdAt,
        updatedAt: fullRecord.updatedAt,
        servicePackage: pkgDTO,
        repliedByName: fullRecord.repliedBy?.fullName || fullRecord.repliedBy?.username || null,
      };
    })
  )();
}

/**
 * Dispatch consultation response to client.
 * Domain rule: Writes curator_reply text, current ISO timestamp to replied_at,
 * authenticated curator user reference to replied_by, and advances status
 * from IN_REVIEW to REPLIED, locking the response from further modification.
 */
export async function dispatchConsultationReply(
  input: DispatchReplyInput
): Promise<CommissionInquiryDTO> {
  return withResult(
    requireRole(UserRole.CuratorAdmin)(async () => {
      const auth = getAuthContext();

      if (!input.curatorReply || !input.curatorReply.trim()) {
        throw new Error('Curator consultation response cannot be empty');
      }

      const existing = await prisma.commissionInquiry.findUnique({
        where: { id: input.inquiryId },
      });

      if (!existing) {
        throw new Error('Commission inquiry record not found');
      }

      // If already replied, locked from modification
      if (existing.status === 'REPLIED') {
        throw new Error('This commission inquiry has already been replied and locked from modification');
      }

      const nowIso = new Date().toISOString();

      const updated = await prisma.commissionInquiry.update({
        where: { id: input.inquiryId },
        data: {
          curatorReply: input.curatorReply.trim(),
          repliedAt: nowIso,
          repliedById: auth.userId,
          status: 'REPLIED',
        },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
              username: true,
            },
          },
        },
      });

      let pkgDTO: ServicePackageDTO | null = null;
      if (updated.servicePackage) {
        pkgDTO = {
          id: updated.servicePackage.id,
          title: updated.servicePackage.title,
          serviceType: updated.servicePackage.serviceType as ServiceType,
          basePrice: updated.servicePackage.basePrice.toNumber(),
          priceDisplay: updated.servicePackage.priceDisplay,
          durationEstimate: updated.servicePackage.durationEstimate,
          deliverables: (Array.isArray(updated.servicePackage.deliverables)
            ? updated.servicePackage.deliverables
            : []) as string[],
          isActive: updated.servicePackage.isActive,
          sortOrder: updated.servicePackage.sortOrder,
          createdAt: updated.servicePackage.createdAt,
          updatedAt: updated.servicePackage.updatedAt,
        };
      }

      return {
        id: updated.id,
        clientId: updated.clientId,
        servicePackageId: updated.servicePackageId,
        clientName: updated.clientName,
        clientEmail: updated.clientEmail,
        organization: updated.organization,
        projectType: updated.projectType as ProjectType,
        budgetTier: updated.budgetTier,
        projectBrief: updated.projectBrief,
        clientMessage: updated.clientMessage,
        targetTimeline: updated.targetTimeline,
        location: updated.location,
        status: updated.status as InquiryStatus,
        curatorReply: updated.curatorReply,
        repliedAt: updated.repliedAt,
        repliedById: updated.repliedById,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
        servicePackage: pkgDTO,
        repliedByName: updated.repliedBy?.fullName || updated.repliedBy?.username || auth.full_name || null,
      };
    })
  )();
}