'use server';

import prisma from '@/tools/prisma';
import { withResult, requireRole, UserRole } from '@/backend/action_utils';
import {
  StudioSettingsPageData,
  StudioBioData,
  ServicePackageItem,
  ExhibitionRecordItem,
  ClientTestimonialItem,
  ServiceType,
  ExhibitionType,
  ProjectType,
  ServicePackageDeliverables,
  UpdateStudioBioInput,
  UpsertServicePackageInput,
  UpsertExhibitionRecordInput,
  UpsertClientTestimonialInput,
} from '@/backend/types/StudioSettings';

/**
 * Fetch all curatorial settings, atelier bio, commission tiers,
 * institutional archives, and testimonials for StudioSettings dashboard.
 */
export async function getStudioSettingsData(): Promise<StudioSettingsPageData> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      // 1. Studio Bio - Singleton pattern; find first or create baseline atelier bio
      let bioRecord = await prisma.studioBio.findFirst();
      if (!bioRecord) {
        bioRecord = await prisma.studioBio.create({
          data: {
            artistName: 'Julian Vane',
            studioName: 'Darkroom Atelier 04',
            atelierLocation: 'Milan · Tokyo',
            activeRepresentation: "Galleria d'Arte Moderna (Milan) · Taka Ishii Gallery Representative",
            philosophyQuote:
              'Light is not merely illumination; it is a physical sculpt of medium format geometry that honors analog silver halide emulsion.',
            bioStatement:
              'Julian Vane (b. 1981) operates Darkroom Atelier 04, a dedicated analog laboratory and archive focusing on silver gelatin chemistry and architectural monographs. Spanning two decades of continuous medium and large-format field research across metropolitan Europe and Japan, his monographs dissect the interplay of raw concrete, cast light, and atmospheric decay. All exhibition prints are executed by hand in limited, stamped suites.',
            portraitImage: null,
          },
        });
      }

      const studioBio: StudioBioData = {
        id: bioRecord.id, // data-from: StudioBio-id
        artistName: bioRecord.artistName, // data-from: StudioBio-artistName
        studioName: bioRecord.studioName, // data-from: StudioBio-studioName
        philosophyQuote: bioRecord.philosophyQuote, // data-from: StudioBio-philosophyQuote
        bioStatement: bioRecord.bioStatement, // data-from: StudioBio-bioStatement
        portraitImage: bioRecord.portraitImage, // data-from: StudioBio-portraitImage data-role: image_url
        atelierLocation: bioRecord.atelierLocation, // data-from: StudioBio-atelierLocation
        activeRepresentation: bioRecord.activeRepresentation, // data-from: StudioBio-activeRepresentation
        createdAt: bioRecord.createdAt, // data-from: StudioBio-createdAt
        updatedAt: bioRecord.updatedAt, // data-from: StudioBio-updatedAt
      };

      // 2. Service Packages ordered by sortOrder
      const packageRecords = await prisma.servicePackage.findMany({
        orderBy: { sortOrder: 'asc' },
      });

      const packages: ServicePackageItem[] = packageRecords.map((pkg) => ({
        id: pkg.id, // data-from: ServicePackage-id
        title: pkg.title, // data-from: ServicePackage-title
        serviceType: pkg.serviceType as ServiceType, // data-from: ServicePackage-serviceType
        basePrice: pkg.basePrice.toNumber(), // data-from: ServicePackage-basePrice
        priceDisplay: pkg.priceDisplay, // data-from: ServicePackage-priceDisplay
        durationEstimate: pkg.durationEstimate, // data-from: ServicePackage-durationEstimate
        deliverables: (Array.isArray(pkg.deliverables) ? pkg.deliverables : []) as ServicePackageDeliverables, // data-from: ServicePackage-deliverables
        isActive: pkg.isActive, // data-from: ServicePackage-isActive
        sortOrder: pkg.sortOrder, // data-from: ServicePackage-sortOrder
        createdAt: pkg.createdAt, // data-from: ServicePackage-createdAt
        updatedAt: pkg.updatedAt, // data-from: ServicePackage-updatedAt
      }));

      // 3. Exhibition Records ordered by year desc, then sortOrder asc
      const exhibitionRecords = await prisma.exhibitionRecord.findMany({
        orderBy: [{ year: 'desc' }, { sortOrder: 'asc' }],
      });

      const exhibitions: ExhibitionRecordItem[] = exhibitionRecords.map((ex) => ({
        id: ex.id, // data-from: ExhibitionRecord-id
        title: ex.title, // data-from: ExhibitionRecord-title
        institution: ex.institution, // data-from: ExhibitionRecord-institution
        city: ex.city, // data-from: ExhibitionRecord-city
        year: ex.year, // data-from: ExhibitionRecord-year
        exhibitionType: ex.exhibitionType as ExhibitionType, // data-from: ExhibitionRecord-exhibitionType
        pressMention: ex.pressMention, // data-from: ExhibitionRecord-pressMention
        externalUrl: ex.externalUrl, // data-from: ExhibitionRecord-externalUrl
        sortOrder: ex.sortOrder, // data-from: ExhibitionRecord-sortOrder
        createdAt: ex.createdAt, // data-from: ExhibitionRecord-createdAt
        updatedAt: ex.updatedAt, // data-from: ExhibitionRecord-updatedAt
      }));

      // 4. Client Testimonials ordered by sortOrder asc
      const testimonialRecords = await prisma.clientTestimonial.findMany({
        orderBy: { sortOrder: 'asc' },
      });

      const testimonials: ClientTestimonialItem[] = testimonialRecords.map((t) => ({
        id: t.id, // data-from: ClientTestimonial-id
        clientId: t.clientId, // data-from: ClientTestimonial-clientId
        clientName: t.clientName, // data-from: ClientTestimonial-clientName
        clientTitle: t.clientTitle, // data-from: ClientTestimonial-clientTitle
        organization: t.organization, // data-from: ClientTestimonial-organization
        quote: t.quote, // data-from: ClientTestimonial-quote
        serviceType: t.serviceType as ProjectType, // data-from: ClientTestimonial-serviceType
        rating: t.rating, // data-from: ClientTestimonial-rating
        avatarImage: t.avatarImage, // data-from: ClientTestimonial-avatarImage data-role: image_url
        isFeatured: t.isFeatured, // data-from: ClientTestimonial-isFeatured
        sortOrder: t.sortOrder, // data-from: ClientTestimonial-sortOrder
        createdAt: t.createdAt, // data-from: ClientTestimonial-createdAt
        updatedAt: t.updatedAt, // data-from: ClientTestimonial-updatedAt
      }));

      // Real dynamic calculation for metrics
      const activePackagesCount = packages.filter((p) => p.isActive).length;
      const totalExhibitionsCount = exhibitions.length;
      const curatedTestimonialsCount = testimonials.length;
      const featuredTestimonialsCount = testimonials.filter((t) => t.isFeatured).length;
      const archiveTimestamp = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

      return {
        studioBio,
        packages,
        exhibitions,
        testimonials,
        stats: {
          activePackagesCount,
          totalExhibitionsCount,
          curatedTestimonialsCount,
          featuredTestimonialsCount,
          archiveTimestamp,
        },
      };
    })();
  })();
}

/**
 * Update Artist Biography & Atelier Statement
 */
export async function updateStudioBio(input: UpdateStudioBioInput): Promise<StudioBioData> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      let existing = await prisma.studioBio.findFirst();
      let updated;
      if (existing) {
        updated = await prisma.studioBio.update({
          where: { id: existing.id },
          data: {
            artistName: input.artistName,
            studioName: input.studioName,
            philosophyQuote: input.philosophyQuote,
            bioStatement: input.bioStatement,
            portraitImage: input.portraitImage !== undefined ? input.portraitImage : existing.portraitImage,
            atelierLocation: input.atelierLocation,
            activeRepresentation: input.activeRepresentation,
          },
        });
      } else {
        updated = await prisma.studioBio.create({
          data: {
            artistName: input.artistName,
            studioName: input.studioName,
            philosophyQuote: input.philosophyQuote,
            bioStatement: input.bioStatement,
            portraitImage: input.portraitImage || null,
            atelierLocation: input.atelierLocation,
            activeRepresentation: input.activeRepresentation,
          },
        });
      }

      return {
        id: updated.id, // data-from: StudioBio-id
        artistName: updated.artistName, // data-from: StudioBio-artistName
        studioName: updated.studioName, // data-from: StudioBio-studioName
        philosophyQuote: updated.philosophyQuote, // data-from: StudioBio-philosophyQuote
        bioStatement: updated.bioStatement, // data-from: StudioBio-bioStatement
        portraitImage: updated.portraitImage, // data-from: StudioBio-portraitImage data-role: image_url
        atelierLocation: updated.atelierLocation, // data-from: StudioBio-atelierLocation
        activeRepresentation: updated.activeRepresentation, // data-from: StudioBio-activeRepresentation
        createdAt: updated.createdAt, // data-from: StudioBio-createdAt
        updatedAt: updated.updatedAt, // data-from: StudioBio-updatedAt
      };
    })();
  })();
}

/**
 * Create or update a ServicePackage record
 */
export async function upsertServicePackage(input: UpsertServicePackageInput): Promise<ServicePackageItem> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      let result;
      if (input.id) {
        result = await prisma.servicePackage.update({
          where: { id: input.id },
          data: {
            title: input.title,
            serviceType: input.serviceType,
            basePrice: input.basePrice,
            priceDisplay: input.priceDisplay,
            durationEstimate: input.durationEstimate,
            deliverables: input.deliverables,
            isActive: input.isActive,
            sortOrder: input.sortOrder,
          },
        });
      } else {
        result = await prisma.servicePackage.create({
          data: {
            title: input.title,
            serviceType: input.serviceType,
            basePrice: input.basePrice,
            priceDisplay: input.priceDisplay,
            durationEstimate: input.durationEstimate,
            deliverables: input.deliverables,
            isActive: input.isActive,
            sortOrder: input.sortOrder,
          },
        });
      }

      return {
        id: result.id, // data-from: ServicePackage-id
        title: result.title, // data-from: ServicePackage-title
        serviceType: result.serviceType as ServiceType, // data-from: ServicePackage-serviceType
        basePrice: result.basePrice.toNumber(), // data-from: ServicePackage-basePrice
        priceDisplay: result.priceDisplay, // data-from: ServicePackage-priceDisplay
        durationEstimate: result.durationEstimate, // data-from: ServicePackage-durationEstimate
        deliverables: (Array.isArray(result.deliverables) ? result.deliverables : []) as ServicePackageDeliverables, // data-from: ServicePackage-deliverables
        isActive: result.isActive, // data-from: ServicePackage-isActive
        sortOrder: result.sortOrder, // data-from: ServicePackage-sortOrder
        createdAt: result.createdAt, // data-from: ServicePackage-createdAt
        updatedAt: result.updatedAt, // data-from: ServicePackage-updatedAt
      };
    })();
  })();
}

/**
 * Toggle ServicePackage availability (isActive)
 */
export async function toggleServicePackageActive(id: string): Promise<ServicePackageItem> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      const existing = await prisma.servicePackage.findUniqueOrThrow({
        where: { id },
      });

      const result = await prisma.servicePackage.update({
        where: { id },
        data: {
          isActive: !existing.isActive,
        },
      });

      return {
        id: result.id, // data-from: ServicePackage-id
        title: result.title, // data-from: ServicePackage-title
        serviceType: result.serviceType as ServiceType, // data-from: ServicePackage-serviceType
        basePrice: result.basePrice.toNumber(), // data-from: ServicePackage-basePrice
        priceDisplay: result.priceDisplay, // data-from: ServicePackage-priceDisplay
        durationEstimate: result.durationEstimate, // data-from: ServicePackage-durationEstimate
        deliverables: (Array.isArray(result.deliverables) ? result.deliverables : []) as ServicePackageDeliverables, // data-from: ServicePackage-deliverables
        isActive: result.isActive, // data-from: ServicePackage-isActive
        sortOrder: result.sortOrder, // data-from: ServicePackage-sortOrder
        createdAt: result.createdAt, // data-from: ServicePackage-createdAt
        updatedAt: result.updatedAt, // data-from: ServicePackage-updatedAt
      };
    })();
  })();
}

/**
 * Delete a ServicePackage record
 */
export async function deleteServicePackage(id: string): Promise<{ id: string }> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      await prisma.servicePackage.delete({
        where: { id },
      });
      return { id };
    })();
  })();
}

/**
 * Create or update an ExhibitionRecord
 */
export async function upsertExhibitionRecord(input: UpsertExhibitionRecordInput): Promise<ExhibitionRecordItem> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      let result;
      if (input.id) {
        result = await prisma.exhibitionRecord.update({
          where: { id: input.id },
          data: {
            title: input.title,
            institution: input.institution,
            city: input.city,
            year: input.year,
            exhibitionType: input.exhibitionType,
            pressMention: input.pressMention,
            externalUrl: input.externalUrl || null,
            sortOrder: input.sortOrder,
          },
        });
      } else {
        result = await prisma.exhibitionRecord.create({
          data: {
            title: input.title,
            institution: input.institution,
            city: input.city,
            year: input.year,
            exhibitionType: input.exhibitionType,
            pressMention: input.pressMention,
            externalUrl: input.externalUrl || null,
            sortOrder: input.sortOrder,
          },
        });
      }

      return {
        id: result.id, // data-from: ExhibitionRecord-id
        title: result.title, // data-from: ExhibitionRecord-title
        institution: result.institution, // data-from: ExhibitionRecord-institution
        city: result.city, // data-from: ExhibitionRecord-city
        year: result.year, // data-from: ExhibitionRecord-year
        exhibitionType: result.exhibitionType as ExhibitionType, // data-from: ExhibitionRecord-exhibitionType
        pressMention: result.pressMention, // data-from: ExhibitionRecord-pressMention
        externalUrl: result.externalUrl, // data-from: ExhibitionRecord-externalUrl
        sortOrder: result.sortOrder, // data-from: ExhibitionRecord-sortOrder
        createdAt: result.createdAt, // data-from: ExhibitionRecord-createdAt
        updatedAt: result.updatedAt, // data-from: ExhibitionRecord-updatedAt
      };
    })();
  })();
}

/**
 * Delete an ExhibitionRecord
 */
export async function deleteExhibitionRecord(id: string): Promise<{ id: string }> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      await prisma.exhibitionRecord.delete({
        where: { id },
      });
      return { id };
    })();
  })();
}

/**
 * Create or update ClientTestimonial
 */
export async function upsertClientTestimonial(input: UpsertClientTestimonialInput): Promise<ClientTestimonialItem> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      let result;
      if (input.id) {
        result = await prisma.clientTestimonial.update({
          where: { id: input.id },
          data: {
            clientName: input.clientName,
            clientTitle: input.clientTitle,
            organization: input.organization,
            quote: input.quote,
            serviceType: input.serviceType,
            rating: input.rating,
            avatarImage: input.avatarImage || null,
            isFeatured: input.isFeatured,
            sortOrder: input.sortOrder,
          },
        });
      } else {
        result = await prisma.clientTestimonial.create({
          data: {
            clientName: input.clientName,
            clientTitle: input.clientTitle,
            organization: input.organization,
            quote: input.quote,
            serviceType: input.serviceType,
            rating: input.rating,
            avatarImage: input.avatarImage || null,
            isFeatured: input.isFeatured,
            sortOrder: input.sortOrder,
          },
        });
      }

      return {
        id: result.id, // data-from: ClientTestimonial-id
        clientId: result.clientId, // data-from: ClientTestimonial-clientId
        clientName: result.clientName, // data-from: ClientTestimonial-clientName
        clientTitle: result.clientTitle, // data-from: ClientTestimonial-clientTitle
        organization: result.organization, // data-from: ClientTestimonial-organization
        quote: result.quote, // data-from: ClientTestimonial-quote
        serviceType: result.serviceType as ProjectType, // data-from: ClientTestimonial-serviceType
        rating: result.rating, // data-from: ClientTestimonial-rating
        avatarImage: result.avatarImage, // data-from: ClientTestimonial-avatarImage data-role: image_url
        isFeatured: result.isFeatured, // data-from: ClientTestimonial-isFeatured
        sortOrder: result.sortOrder, // data-from: ClientTestimonial-sortOrder
        createdAt: result.createdAt, // data-from: ClientTestimonial-createdAt
        updatedAt: result.updatedAt, // data-from: ClientTestimonial-updatedAt
      };
    })();
  })();
}

/**
 * Toggle ClientTestimonial isFeatured spotlight status
 */
export async function toggleTestimonialFeatured(id: string): Promise<ClientTestimonialItem> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      const existing = await prisma.clientTestimonial.findUniqueOrThrow({
        where: { id },
      });

      const result = await prisma.clientTestimonial.update({
        where: { id },
        data: {
          isFeatured: !existing.isFeatured,
        },
      });

      return {
        id: result.id, // data-from: ClientTestimonial-id
        clientId: result.clientId, // data-from: ClientTestimonial-clientId
        clientName: result.clientName, // data-from: ClientTestimonial-clientName
        clientTitle: result.clientTitle, // data-from: ClientTestimonial-clientTitle
        organization: result.organization, // data-from: ClientTestimonial-organization
        quote: result.quote, // data-from: ClientTestimonial-quote
        serviceType: result.serviceType as ProjectType, // data-from: ClientTestimonial-serviceType
        rating: result.rating, // data-from: ClientTestimonial-rating
        avatarImage: result.avatarImage, // data-from: ClientTestimonial-avatarImage data-role: image_url
        isFeatured: result.isFeatured, // data-from: ClientTestimonial-isFeatured
        sortOrder: result.sortOrder, // data-from: ClientTestimonial-sortOrder
        createdAt: result.createdAt, // data-from: ClientTestimonial-createdAt
        updatedAt: result.updatedAt, // data-from: ClientTestimonial-updatedAt
      };
    })();
  })();
}

/**
 * Delete a ClientTestimonial
 */
export async function deleteClientTestimonial(id: string): Promise<{ id: string }> {
  return requireRole(UserRole.CuratorAdmin)(async () => {
    return withResult(async () => {
      await prisma.clientTestimonial.delete({
        where: { id },
      });
      return { id };
    })();
  })();
}