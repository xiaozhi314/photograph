'use server';

import prisma from '@/tools/prisma';
import { withResult } from '@/frontend/action_utils';
import {
  ArtistExhibitionsPageData,
  ExhibitionRecordItem,
  ExhibitionType,
  StudioBioData,
} from '@/frontend/types/ArtistExhibitions';

/**
 * Retrieves public artist biographical statement, studio philosophy, and the complete exhibition archives.
 * Domain Rule: Both Guest Visitor and Client have identical public read access (同视图同权).
 * Exhibition records are sorted by year descending, then sortOrder ascending.
 */
export async function getArtistExhibitionsData(): Promise<ArtistExhibitionsPageData> {
  return withResult(async () => {
    // 1. Fetch Studio Bio & Artist Statement
    const studioBio = await prisma.studioBio.findFirst();

    // 2. Fetch Exhibition Records sorted by year descending, then sortOrder
    const records = await prisma.exhibitionRecord.findMany({
      orderBy: [
        { year: 'desc' },
        { sortOrder: 'asc' },
      ],
    });

    const mappedBio: StudioBioData | null = studioBio
      ? {
          id: studioBio.id,
          artistName: studioBio.artistName,
          studioName: studioBio.studioName,
          philosophyQuote: studioBio.philosophyQuote,
          bioStatement: studioBio.bioStatement,
          portraitImage: studioBio.portraitImage,
          atelierLocation: studioBio.atelierLocation,
          activeRepresentation: studioBio.activeRepresentation,
          createdAt: studioBio.createdAt,
          updatedAt: studioBio.updatedAt,
        }
      : null;

    const mappedExhibitions: ExhibitionRecordItem[] = records.map((r) => ({
      id: r.id,
      title: r.title,
      institution: r.institution,
      city: r.city,
      year: r.year,
      exhibitionType: r.exhibitionType as ExhibitionType,
      pressMention: r.pressMention,
      externalUrl: r.externalUrl,
      sortOrder: r.sortOrder,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
    }));

    return {
      studioBio: mappedBio,
      exhibitions: mappedExhibitions,
    };
  })();
}