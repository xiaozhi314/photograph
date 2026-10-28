'use server';

import prisma from '@/tools/prisma';
import { withResult, tryGetAuthContext } from '@/frontend/action_utils';
import type {
  HomeInitialData,
  PhotographyWork,
  ExhibitionRecord,
  ServicePackage,
  ClientTestimonial,
  StudioBio,
  CreateCommissionInquiryInput,
  CommissionInquiryResult,
  AspectOrientation,
  ExhibitionType,
  ServiceType,
  ProjectType,
  InquiryStatus
} from '@/frontend/types/FrontendHome';

/**
 * Fetch all essential home portfolio content:
 * - Studio bio & darkroom philosophy
 * - Curated master photography works (isArchived=false, isFeatured desc, sortOrder asc)
 * - Chronological exhibitions & monograph press reviews (year desc, sortOrder asc)
 * - Service package pricing tiers for commission intake (isActive=true, sortOrder asc)
 * - Featured client testimonials (isFeatured=true, sortOrder asc)
 */
export async function getHomeInitialData(): Promise<HomeInitialData> {
  return withResult(async () => {
    const [bioRecord, worksRecords, exhRecords, packageRecords, testimonialRecords] = await Promise.all([
      prisma.studioBio.findFirst(),
      prisma.photographyWork.findMany({
        where: {
          isArchived: false,
        },
        include: {
          category: {
            select: {
              slug: true,
              name: true,
            },
          },
        },
        orderBy: [
          { isFeatured: 'desc' },
          { sortOrder: 'asc' },
        ],
        take: 12,
      }),
      prisma.exhibitionRecord.findMany({
        orderBy: [
          { year: 'desc' },
          { sortOrder: 'asc' },
        ],
        take: 10,
      }),
      prisma.servicePackage.findMany({
        where: {
          isActive: true,
        },
        orderBy: {
          sortOrder: 'asc',
        },
      }),
      prisma.clientTestimonial.findMany({
        where: {
          isFeatured: true,
        },
        orderBy: {
          sortOrder: 'asc',
        },
        take: 6,
      }),
    ]);

    const studioBio: StudioBio | null = bioRecord
      ? {
          id: bioRecord.id,
          artistName: bioRecord.artistName,
          studioName: bioRecord.studioName,
          philosophyQuote: bioRecord.philosophyQuote,
          bioStatement: bioRecord.bioStatement,
          portraitImage: bioRecord.portraitImage,
          atelierLocation: bioRecord.atelierLocation,
          activeRepresentation: bioRecord.activeRepresentation,
        }
      : null;

    const curatedWorks: PhotographyWork[] = worksRecords.map((w) => ({
      id: w.id,
      title: w.title,
      categoryId: w.categoryId,
      categorySlug: w.category.slug,
      categoryName: w.category.name,
      category: w.category.slug || 'architecture',
      collectionId: w.collectionId,
      series: w.seriesName,
      seriesName: w.seriesName,
      location: w.location,
      year: w.year,
      medium: w.medium,
      edition: w.edition,
      aspectRatio: w.aspectRatio as AspectOrientation,
      statement: w.statement,
      imageUrl: w.imageUrl,
      isFeatured: w.isFeatured,
      sortOrder: w.sortOrder,
    }));

    const exhibitions: ExhibitionRecord[] = exhRecords.map((e) => ({
      id: e.id,
      year: e.year,
      title: e.title,
      institution: e.institution,
      city: e.city,
      exhibitionType: e.exhibitionType as ExhibitionType,
      type: e.exhibitionType === 'SOLO_EXHIBITION' ? 'Solo Exhibition' : e.exhibitionType,
      pressMention: e.pressMention,
      externalUrl: e.externalUrl,
      sortOrder: e.sortOrder,
    }));

    const servicePackages: ServicePackage[] = packageRecords.map((p) => {
      let deliverablesList: string[] = [];
      if (Array.isArray(p.deliverables)) {
        deliverablesList = p.deliverables.map((item) => String(item));
      }
      return {
        id: p.id,
        title: p.title,
        serviceType: p.serviceType as ServiceType,
        basePrice: p.basePrice.toNumber(),
        priceDisplay: p.priceDisplay,
        durationEstimate: p.durationEstimate,
        deliverables: deliverablesList,
        sortOrder: p.sortOrder,
      };
    });

    const testimonials: ClientTestimonial[] = testimonialRecords.map((t) => ({
      id: t.id,
      clientName: t.clientName,
      clientTitle: t.clientTitle,
      organization: t.organization,
      quote: t.quote,
      serviceType: t.serviceType as ProjectType,
      rating: t.rating,
      avatarImage: t.avatarImage,
    }));

    return {
      studioBio,
      curatedWorks,
      exhibitions,
      servicePackages,
      testimonials,
    };
  })();
}

/**
 * Submit a direct commission inquiry from the homepage CommissionModule.
 * Persists record with status=NEW into commission_inquiry.
 * Handles both authenticated client actors (persisting client identity) and guest leads.
 */
export async function submitCommissionInquiry(
  input: CreateCommissionInquiryInput
): Promise<CommissionInquiryResult> {
  return withResult(async () => {
    const auth = tryGetAuthContext();
    let targetClientId: string;

    if (auth && auth.userId) {
      targetClientId = auth.userId;
    } else {
      // Find existing guest user by email or upsert a verified public client entry
      let clientUser = await prisma.accountUser.findUnique({
        where: { email: input.clientEmail },
      });

      if (!clientUser) {
        // Create client placeholder account with a guest username
        const uniqueSuffix = Date.now().toString(36);
        clientUser = await prisma.accountUser.create({
          data: {
            username: `guest_${uniqueSuffix}`,
            email: input.clientEmail,
            passwordHash: 'GUEST_UNAUTHENTICATED_INQUIRY',
            fullName: input.clientName,
            organization: input.organization || null,
            role: 'CLIENT',
          },
        });
      }
      targetClientId = clientUser.id;
    }

    const createdInquiry = await prisma.commissionInquiry.create({
      data: {
        clientId: targetClientId,
        servicePackageId: input.servicePackageId || null,
        clientName: input.clientName,
        clientEmail: input.clientEmail,
        organization: input.organization || null,
        projectType: input.projectType as any,
        budgetTier: input.budgetTier,
        projectBrief: input.projectBrief,
        clientMessage: input.clientMessage || null,
        targetTimeline: input.targetTimeline,
        location: input.location || null,
        status: 'NEW',
      },
    });

    return {
      id: createdInquiry.id,
      status: createdInquiry.status as InquiryStatus,
      clientName: createdInquiry.clientName,
      createdAt: createdInquiry.createdAt,
    };
  })();
}