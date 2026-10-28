'use server';

import prisma from '@/tools/prisma';
import { withResult, requireAuth, getUserId } from '@/frontend/action_utils';
import {
  ClientPortalData,
  CommissionInquiryItem,
  UpdateClientMessageInput,
  ProjectType,
  InquiryStatus,
  ServiceType,
  ServicePackageDeliverables,
} from '@/frontend/types/ClientPortal';

/**
 * Domain rules:
 * - Client can view their own submitted commission inquiry briefs.
 * - Authenticated client identity is extracted from session context (getUserId).
 * - When brief status is NEW or IN_REVIEW, counted under inReviewCount.
 * - When brief status is REPLIED, counted under repliedCount.
 */
export async function getClientPortalData(): Promise<ClientPortalData> {
  return withResult(
    requireAuth(async () => {
      const userId = getUserId();

      // Find user profile
      const user = await prisma.accountUser.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new Error('User profile not found');
      }

      // Fetch client commission inquiries with associated service package and curator details
      const inquiries = await prisma.commissionInquiry.findMany({
        where: { clientId: userId },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      const mappedBriefs: CommissionInquiryItem[] = inquiries.map((inq) => {
        let deliverables: ServicePackageDeliverables = [];
        if (inq.servicePackage && Array.isArray(inq.servicePackage.deliverables)) {
          deliverables = inq.servicePackage.deliverables as string[];
        }

        return {
          id: inq.id,
          clientId: inq.clientId,
          servicePackageId: inq.servicePackageId,
          servicePackage: inq.servicePackage
            ? {
                id: inq.servicePackage.id,
                title: inq.servicePackage.title,
                serviceType: inq.servicePackage.serviceType as ServiceType,
                basePrice: inq.servicePackage.basePrice.toNumber(),
                priceDisplay: inq.servicePackage.priceDisplay,
                durationEstimate: inq.servicePackage.durationEstimate,
                deliverables,
              }
            : null,
          clientName: inq.clientName,
          clientEmail: inq.clientEmail,
          organization: inq.organization,
          projectType: inq.projectType as ProjectType,
          budgetTier: inq.budgetTier,
          projectBrief: inq.projectBrief,
          clientMessage: inq.clientMessage,
          targetTimeline: inq.targetTimeline,
          location: inq.location,
          status: inq.status as InquiryStatus,
          curatorReply: inq.curatorReply,
          repliedAt: inq.repliedAt,
          repliedByName: inq.repliedBy?.fullName ?? null,
          repliedById: inq.repliedById,
          createdAt: inq.createdAt,
          updatedAt: inq.updatedAt,
        };
      });

      const totalCount = mappedBriefs.length;
      const inReviewCount = mappedBriefs.filter(
        (b) => b.status === 'NEW' || b.status === 'IN_REVIEW'
      ).length;
      const repliedCount = mappedBriefs.filter((b) => b.status === 'REPLIED').length;

      return {
        profile: {
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          organization: user.organization,
          avatarUrl: user.avatarUrl,
        },
        briefs: mappedBriefs,
        totalCount,
        inReviewCount,
        repliedCount,
      };
    })
  )();
}

/**
 * Domain rules:
 * - Client amends or adds supplementary contextual notes into client_message
 * - On an active commission inquiry in NEW status prior to curatorial review.
 * - Modifying inquiries in IN_REVIEW or REPLIED is disallowed for clients.
 * - Client can only update inquiries that belong to their own account.
 */
export async function updateInquiryClientMessage(
  input: UpdateClientMessageInput
): Promise<CommissionInquiryItem> {
  return withResult(
    requireAuth(async () => {
      const userId = getUserId();

      const existing = await prisma.commissionInquiry.findUnique({
        where: { id: input.inquiryId },
      });

      if (!existing) {
        throw new Error('Commission inquiry not found');
      }

      if (existing.clientId !== userId) {
        throw new Error('Access denied: You can only edit your own commission briefs');
      }

      if (existing.status !== 'NEW') {
        throw new Error('Context notes can only be amended while the brief is in NEW status');
      }

      const updated = await prisma.commissionInquiry.update({
        where: { id: input.inquiryId },
        data: {
          clientMessage: input.clientMessage,
        },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
            },
          },
        },
      });

      let deliverables: ServicePackageDeliverables = [];
      if (updated.servicePackage && Array.isArray(updated.servicePackage.deliverables)) {
        deliverables = updated.servicePackage.deliverables as string[];
      }

      return {
        id: updated.id,
        clientId: updated.clientId,
        servicePackageId: updated.servicePackageId,
        servicePackage: updated.servicePackage
          ? {
              id: updated.servicePackage.id,
              title: updated.servicePackage.title,
              serviceType: updated.servicePackage.serviceType as ServiceType,
              basePrice: updated.servicePackage.basePrice.toNumber(),
              priceDisplay: updated.servicePackage.priceDisplay,
              durationEstimate: updated.servicePackage.durationEstimate,
              deliverables,
            }
          : null,
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
        repliedByName: updated.repliedBy?.fullName ?? null,
        repliedById: updated.repliedById,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      };
    })
  )();
}