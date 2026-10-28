'use server';

import prisma from '@/tools/prisma';
import {
  withResult,
  requireAuth,
  getUserId,
} from '@/frontend/action_utils';
import type {
  CommissionBookingInitData,
  ServicePackageItem,
  ClientProfile,
  CommissionInquiryItem,
  CreateCommissionInquiryInput,
  CreateCommissionInquiryResult,
  ProjectType,
  ServiceType,
  InquiryStatus,
  AccountRole,
  ServicePackageDeliverables
} from '@/frontend/types/CommissionBooking';

function mapServiceTypeToDefaults(st: ServiceType): {
  projectType: ProjectType;
  budgetTier: string;
} {
  switch (st) {
    case 'ARCHITECTURAL_MONOGRAPH':
      return { projectType: 'EDITORIAL', budgetTier: '$12,000 – $20,000' };
    case 'EDITORIAL_PORTRAITURE':
      return { projectType: 'PORTRAIT', budgetTier: '$4,500 – $8,000' };
    case 'COMMERCIAL_CAMPAIGN':
      return { projectType: 'COMMERCIAL', budgetTier: '$18,000 – $35,000' };
    case 'PRINT_ACQUISITION':
      return { projectType: 'ACQUISITION', budgetTier: '$2,800 – $6,000' };
    default:
      return { projectType: 'EDITORIAL', budgetTier: '$5,000 – $10,000' };
  }
}

/**
 * Retrieves initial data for commission booking:
 * 1. Active service packages ordered by sortOrder
 * 2. Authenticated client profile from account_user
 * 3. Recent commission inquiries submitted by current client
 */
export async function getCommissionBookingInitData(): Promise<CommissionBookingInitData> {
  return withResult(
    requireAuth(async () => {
      const currentUserId = getUserId();

      // Retrieve current client user profile
      const user = await prisma.accountUser.findUnique({
        where: { id: currentUserId },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          organization: true,
          avatarUrl: true,
          role: true,
        },
      });

      if (!user) {
        throw new Error('User profile not found');
      }

      const clientProfile: ClientProfile = {
        id: user.id, // data-from: AccountUser-id
        fullName: user.fullName, // data-from: AccountUser-fullName
        email: user.email, // data-from: AccountUser-email
        phone: user.phone, // data-from: AccountUser-phone
        organization: user.organization, // data-from: AccountUser-organization
        avatarUrl: user.avatarUrl, // data-from: AccountUser-avatarUrl data-role: image_url
        role: user.role as AccountRole, // data-from: AccountUser-role
      };

      // Retrieve active service packages
      const rawPackages = await prisma.servicePackage.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      });

      const packages: ServicePackageItem[] = rawPackages.map((pkg) => {
        const defaults = mapServiceTypeToDefaults(pkg.serviceType as ServiceType);
        let parsedDeliverables: ServicePackageDeliverables = [];
        if (Array.isArray(pkg.deliverables)) {
          parsedDeliverables = pkg.deliverables.filter(
            (item): item is string => typeof item === 'string'
          );
        } else if (typeof pkg.deliverables === 'string') {
          try {
            const parsed = JSON.parse(pkg.deliverables);
            if (Array.isArray(parsed)) {
              parsedDeliverables = parsed.filter(
                (item): item is string => typeof item === 'string'
              );
            }
          } catch {
            parsedDeliverables = [];
          }
        }

        return {
          id: pkg.id, // data-from: ServicePackage-id
          title: pkg.title, // data-from: ServicePackage-title
          serviceType: pkg.serviceType as ServiceType, // data-from: ServicePackage-serviceType
          basePrice: pkg.basePrice.toNumber(), // data-from: ServicePackage-basePrice
          priceDisplay: pkg.priceDisplay, // data-from: ServicePackage-priceDisplay
          durationEstimate: pkg.durationEstimate, // data-from: ServicePackage-durationEstimate
          deliverables: parsedDeliverables, // data-from: ServicePackage-deliverables
          isActive: pkg.isActive, // data-from: ServicePackage-isActive
          sortOrder: pkg.sortOrder, // data-from: ServicePackage-sortOrder
          createdAt: pkg.createdAt, // data-from: ServicePackage-createdAt
          updatedAt: pkg.updatedAt, // data-from: ServicePackage-updatedAt
          suggestedProjectType: defaults.projectType,
          suggestedBudgetTier: defaults.budgetTier,
        };
      });

      // Retrieve client's recent commission inquiries
      const rawInquiries = await prisma.commissionInquiry.findMany({
        where: { clientId: currentUserId },
        orderBy: { createdAt: 'desc' },
        take: 6,
        include: {
          servicePackage: {
            select: {
              title: true,
            },
          },
        },
      });

      const recentInquiries: CommissionInquiryItem[] = rawInquiries.map((inq) => ({
        id: inq.id, // data-from: CommissionInquiry-id
        clientId: inq.clientId, // data-from: CommissionInquiry-clientId
        servicePackageId: inq.servicePackageId, // data-from: CommissionInquiry-servicePackageId
        servicePackageTitle: inq.servicePackage?.title || null, // data-from: ServicePackage-title
        clientName: inq.clientName, // data-from: CommissionInquiry-clientName
        clientEmail: inq.clientEmail, // data-from: CommissionInquiry-clientEmail
        organization: inq.organization, // data-from: CommissionInquiry-organization
        projectType: inq.projectType as ProjectType, // data-from: CommissionInquiry-projectType
        budgetTier: inq.budgetTier, // data-from: CommissionInquiry-budgetTier
        projectBrief: inq.projectBrief, // data-from: CommissionInquiry-projectBrief
        clientMessage: inq.clientMessage, // data-from: CommissionInquiry-clientMessage
        targetTimeline: inq.targetTimeline, // data-from: CommissionInquiry-targetTimeline
        location: inq.location, // data-from: CommissionInquiry-location
        status: inq.status as InquiryStatus, // data-from: CommissionInquiry-status
        curatorReply: inq.curatorReply, // data-from: CommissionInquiry-curatorReply
        repliedAt: inq.repliedAt, // data-from: CommissionInquiry-repliedAt
        createdAt: inq.createdAt, // data-from: CommissionInquiry-createdAt
      }));

      return {
        packages,
        clientProfile,
        recentInquiries,
      };
    })
  )();
}

/**
 * Creates and submits a new commission inquiry brief.
 * State machine rule: initial creation advances status from __create__ to NEW.
 * Links clientId to current account_user.
 * Updates contact phone/organization on profile if provided.
 */
export async function createCommissionInquiry(
  input: CreateCommissionInquiryInput
): Promise<CreateCommissionInquiryResult> {
  return withResult(
    requireAuth(async () => {
      const currentUserId = getUserId();

      // Mandatory field validation per domain contract
      if (!input.clientName?.trim()) {
        throw new Error('Client name is required');
      }
      if (!input.clientEmail?.trim()) {
        throw new Error('Client email is required');
      }
      if (!input.projectType) {
        throw new Error('Project type is required');
      }
      if (!input.budgetTier?.trim()) {
        throw new Error('Budget tier is required');
      }
      if (!input.projectBrief?.trim()) {
        throw new Error('Project brief narrative is required');
      }
      if (!input.targetTimeline?.trim()) {
        throw new Error('Target timeline is required');
      }

      // Check optional package relation
      let validPackageId: string | null = null;
      if (input.servicePackageId && input.servicePackageId.trim()) {
        const pkgExists = await prisma.servicePackage.findUnique({
          where: { id: input.servicePackageId.trim() },
          select: { id: true },
        });
        if (pkgExists) {
          validPackageId = pkgExists.id;
        }
      }

      // Sync phone or organization changes back to account_user if provided
      if (input.phone || input.organization) {
        await prisma.accountUser.update({
          where: { id: currentUserId },
          data: {
            phone: input.phone ? input.phone.trim() : undefined,
            organization: input.organization ? input.organization.trim() : undefined,
          },
        });
      }

      // Construct CommissionInquiry with status NEW
      const newInquiry = await prisma.commissionInquiry.create({
        data: {
          clientId: currentUserId,
          servicePackageId: validPackageId,
          clientName: input.clientName.trim(),
          clientEmail: input.clientEmail.trim(),
          organization: input.organization ? input.organization.trim() : null,
          projectType: input.projectType,
          budgetTier: input.budgetTier.trim(),
          projectBrief: input.projectBrief.trim(),
          clientMessage: input.clientMessage ? input.clientMessage.trim() : null,
          targetTimeline: input.targetTimeline.trim(),
          location: input.location ? input.location.trim() : null,
          status: 'NEW',
        },
        select: {
          id: true,
          status: true,
        },
      });

      return {
        id: newInquiry.id, // data-from: CommissionInquiry-id
        status: newInquiry.status as InquiryStatus, // data-from: CommissionInquiry-status
      };
    })
  )();
}