'use server';

import prisma from '@/tools/prisma';
import { withResult } from '@/@base/BaseActionFun';
import type {
  ServicePackageItem,
  ClientTestimonialItem,
  ServicesTestimonialsPageData,
  ServiceType,
  ProjectType,
  DeliverablesList
} from '@/frontend/types/ServicesTestimonials';

/**
 * Retrieves all active commission service packages ordered by sortOrder ascending.
 * Domain Rule: Curator admin manages service packages, public visitors and clients can view active tiers.
 * Filter: isActive = true, orderBy sortOrder asc.
 */
export async function getActiveServicePackages(): Promise<ServicePackageItem[]> {
  return withResult(async () => {
    const packages = await prisma.servicePackage.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });

    return packages.map((pkg) => {
      let deliverablesArray: DeliverablesList = [];
      if (Array.isArray(pkg.deliverables)) {
        deliverablesArray = pkg.deliverables.map(String);
      } else if (typeof pkg.deliverables === 'string') {
        try {
          const parsed = JSON.parse(pkg.deliverables);
          deliverablesArray = Array.isArray(parsed) ? parsed.map(String) : [String(pkg.deliverables)];
        } catch {
          deliverablesArray = [pkg.deliverables];
        }
      }

      return {
        id: pkg.id, // data-from: ServicePackage-id
        title: pkg.title, // data-from: ServicePackage-title
        serviceType: pkg.serviceType as ServiceType, // data-from: ServicePackage-serviceType
        basePrice: pkg.basePrice.toNumber(), // data-from: ServicePackage-basePrice
        priceDisplay: pkg.priceDisplay, // data-from: ServicePackage-priceDisplay
        durationEstimate: pkg.durationEstimate, // data-from: ServicePackage-durationEstimate
        deliverables: deliverablesArray, // data-from: ServicePackage-deliverables
        isActive: pkg.isActive, // data-from: ServicePackage-isActive
        sortOrder: pkg.sortOrder, // data-from: ServicePackage-sortOrder
        createdAt: pkg.createdAt, // data-from: ServicePackage-createdAt
        updatedAt: pkg.updatedAt, // data-from: ServicePackage-updatedAt
      };
    });
  })();
}

/**
 * Retrieves all curated client critiques and institutional reviews.
 * Domain Rule: Public visitors and clients can view testimonials; ordered by isFeatured desc, sortOrder asc.
 */
export async function getClientTestimonials(): Promise<ClientTestimonialItem[]> {
  return withResult(async () => {
    const records = await prisma.clientTestimonial.findMany({
      orderBy: [
        { isFeatured: 'desc' },
        { sortOrder: 'asc' },
      ],
    });

    return records.map((t) => ({
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
  })();
}

/**
 * Composite loader to fetch all page data concurrently for Services & Testimonials.
 */
export async function getServicesTestimonialsPageData(): Promise<ServicesTestimonialsPageData> {
  return withResult(async () => {
    const [packages, testimonials] = await Promise.all([
      getActiveServicePackages(),
      getClientTestimonials(),
    ]);

    return {
      packages,
      testimonials,
    };
  })();
}