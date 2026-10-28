"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowRight, Compass, ShieldCheck, Calendar, MapPin, Layers } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
import { PhotographyWorkItem } from "@/frontend/types/WorksPortfolio";
import { CollectionsFolios, CommissionBooking } from "@/frontend/route-params";
interface PlateInspectionLightboxProps {
  work: PhotographyWorkItem | null;
  isOpen?: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}
export default function PlateInspectionLightbox({
  work,
  isOpen = true,
  onClose
}: PlateInspectionLightboxProps) {
  const router = useRouter();
  const isModalOpen = Boolean(isOpen && work);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        onClose();
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);
  if (!isModalOpen || !work) return null;
  const handleNavigateToFolio = () => {
    if (work.collectionId) {
      CollectionsFolios.navigateToFolio(router, {
        collectionId: work.collectionId
      });
    } else {
      CollectionsFolios.navigateTo(router);
    }
  };
  const handleNavigateToCommission = () => {
    CommissionBooking.navigateTo(router);
  };
  return <div role="dialog" aria-modal="true" aria-labelledby="lightbox-plate-title" className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 text-stone-100 backdrop-blur-md" data-api-unique-id='plateinspectionlightbox-r485dec00e98076ff-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
      {/* Top Bar Floating Controls */}
      <div className="absolute top-0 inset-x-0 h-16 px-6 flex items-center justify-between border-b border-stone-800/80 bg-stone-950/40 z-20" data-api-unique-id='plateinspectionlightbox-rbb068c46bf4f1094-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
        <div className="flex items-center gap-3" data-api-unique-id='plateinspectionlightbox-r5a2add95cbe8048d-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
          <span className="font-mono text-xs uppercase tracking-widest text-primary" data-api-unique-id='plateinspectionlightbox-rec794e85da7f3a42-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
            Master Plate Inspection
          </span>
          <span className="text-stone-600" data-api-unique-id='plateinspectionlightbox-r54e612f4dd4289a9-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>/</span>
          <span className="text-xs font-mono text-stone-400" data-api-unique-id='plateinspectionlightbox-r949d326a66a15e13-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
            {work.seriesName} · Roll Spec {work.aspectRatio === "PORTRAIT" ? "4:5" : "16:9"}
          </span>
        </div>
        <button type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-3.5 py-1.5 text-xs text-stone-200 hover:bg-stone-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer" data-api-unique-id='plateinspectionlightbox-rd6cdc413117f3c97-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
          <X className="h-4 w-4" data-api-unique-id='plateinspectionlightbox-r45455a09ee92b77b-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
          <span data-api-unique-id='plateinspectionlightbox-r407657805151543a-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>Close [Esc]</span>
        </button>
      </div>

      {/* Main Inspection Body */}
      <div className="w-full h-full pt-16 flex flex-col lg:flex-row overflow-hidden" data-api-unique-id='plateinspectionlightbox-r23b14a20ea0f31fe-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
        {/* Left / Center Darkroom Master View */}
        <div className="flex-1 min-w-0 h-[60vh] lg:h-full relative flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-stone-950" data-api-unique-id='plateinspectionlightbox-r0133453e579eb7e7-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
          <div className="relative max-w-full max-h-full flex items-center justify-center shadow-2xl border border-stone-800/80 bg-stone-900" data-api-unique-id='plateinspectionlightbox-r0b892b9b29ff7761-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
            <EditableImg propKey={`lightbox-master-${work.id}`} src={work.imageUrl} needLargeImage className={`max-w-full max-h-[78vh] object-contain ${work.aspectRatio === "PORTRAIT" ? "aspect-[4/5]" : "aspect-[16/9]"}`} alt={work.title} data-api-unique-id='plateinspectionlightbox-r55cf6e0a90dd0692-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />

            {/* Micro Darkroom Stamp Overlay in Corner */}
            <div className="absolute bottom-3 left-3 bg-stone-950/85 border border-stone-800 px-2 py-1 text-[10px] font-mono text-stone-400 pointer-events-none" data-api-unique-id='plateinspectionlightbox-red550ded0f8d5c21-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
              NEGATIVE SPEC: 120 FILM · ILFORD HP5+ · PROVENANCE SEALED
            </div>
          </div>
        </div>

        {/* Right Archival Provenance Sidebar */}
        <aside className="w-full lg:w-[420px] shrink-0 border-t lg:border-t-0 lg:border-l border-stone-800/80 bg-stone-900/95 overflow-y-auto p-6 sm:p-8 flex flex-col justify-between" data-api-unique-id='plateinspectionlightbox-rb4c195688f87085d-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
          <div className="space-y-6" data-api-unique-id='plateinspectionlightbox-r817a42076c7cc501-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
            <div data-api-unique-id='plateinspectionlightbox-rfb8ddd9100aa553b-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary mb-2" data-api-unique-id='plateinspectionlightbox-rc7a2d389f3fb77bc-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <ShieldCheck className="h-3.5 w-3.5" data-api-unique-id='plateinspectionlightbox-rddc06045c1a63471-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
                <span data-api-unique-id='plateinspectionlightbox-r9e61d372935c3583-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>Archival Master Plate</span>
              </div>
              <h2 id="lightbox-plate-title" className="font-serif text-2xl sm:text-3xl text-stone-100 tracking-tight leading-snug" data-api-unique-id='plateinspectionlightbox-r0af6517e96f298d7-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                {work.title}
              </h2>
              <p className="mt-1 text-sm text-stone-400 font-mono" data-api-unique-id='plateinspectionlightbox-r95cf27e3dabf9a06-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                {work.seriesName} · {work.year}
              </p>
            </div>

            {/* Provenance Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-stone-800 text-xs font-mono" data-api-unique-id='plateinspectionlightbox-r0efbd933bfa53a69-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
              <div data-api-unique-id='plateinspectionlightbox-rdd7a2464ab6b80e5-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <span className="text-stone-400 block mb-1" data-api-unique-id='plateinspectionlightbox-r2661dba3c86db978-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>MEDIUM</span>
                <span className="text-stone-200 leading-relaxed" data-api-unique-id='plateinspectionlightbox-rbb07533c52458802-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>{work.medium}</span>
              </div>
              <div data-api-unique-id='plateinspectionlightbox-r7dc84c4c412798d1-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <span className="text-stone-400 block mb-1" data-api-unique-id='plateinspectionlightbox-rd7c3e99d88841771-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>EDITION</span>
                <span className="text-stone-200" data-api-unique-id='plateinspectionlightbox-r0d2241bfad4d4d81-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>{work.edition}</span>
              </div>
              <div data-api-unique-id='plateinspectionlightbox-rde596cfcfbdf17d1-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <span className="text-stone-400 block mb-1" data-api-unique-id='plateinspectionlightbox-r0416c3aa60f1b2c8-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>LOCATION</span>
                <span className="text-stone-200 flex items-center gap-1" data-api-unique-id='plateinspectionlightbox-r0b646b80013c2873-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                  <MapPin className="h-3 w-3 text-primary" data-api-unique-id='plateinspectionlightbox-r4dde9292beb1ddae-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
                  {work.location}
                </span>
              </div>
              <div data-api-unique-id='plateinspectionlightbox-r726aa8e37584bb1f-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <span className="text-stone-400 block mb-1" data-api-unique-id='plateinspectionlightbox-r27ea6e8e3f0e1d25-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>YEAR</span>
                <span className="text-stone-200 flex items-center gap-1" data-api-unique-id='plateinspectionlightbox-rdf4b026308cda052-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                  <Calendar className="h-3 w-3 text-primary" data-api-unique-id='plateinspectionlightbox-r36ee494e437e5f9e-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
                  {work.year}
                </span>
              </div>
            </div>

            {/* Curatorial Statement */}
            <div className="space-y-2" data-api-unique-id='plateinspectionlightbox-r1dc23af8a14e2be9-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
              <span className="font-mono text-xs uppercase text-stone-400 tracking-wider flex items-center gap-1.5" data-api-unique-id='plateinspectionlightbox-r1d1d9bee3a511776-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <Compass className="h-3.5 w-3.5 text-primary" data-api-unique-id='plateinspectionlightbox-r28c8264e39ecd19b-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
                Curatorial Statement
              </span>
              <p className="text-sm text-stone-300 leading-relaxed font-sans italic border-l-2 border-primary/40 pl-3 py-1" data-api-unique-id='plateinspectionlightbox-r54b21f694bc74cf1-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                &ldquo;{work.statement}&rdquo;
              </p>
            </div>

            {/* Associated Series Folio Link -> [F03] */}
            {work.collection ? <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-4 space-y-2" data-api-unique-id='plateinspectionlightbox-r103f24a5fc4ec6c5-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400" data-api-unique-id='plateinspectionlightbox-r7567224841bc4c75-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                  <span className="flex items-center gap-1.5 text-primary" data-api-unique-id='plateinspectionlightbox-r57245c9d0a75aaa2-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                    <Layers className="h-3.5 w-3.5" data-api-unique-id='plateinspectionlightbox-r8c69986c80c00f2e-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
                    ASSOCIATED SERIES FOLIO
                  </span>
                  <span data-api-unique-id='plateinspectionlightbox-rfd8a08e64b99fcfc-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>{work.collection.rollNumber}</span>
                </div>
                <h4 className="text-sm font-serif font-medium text-stone-200" data-api-unique-id='plateinspectionlightbox-r7981a86f34670f53-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                  {work.collection.title}
                </h4>
                <p className="text-xs text-stone-400 line-clamp-2" data-api-unique-id='plateinspectionlightbox-rf99567853a90c982-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                  {work.collection.curatorNote}
                </p>
                <div className="pt-1" data-api-unique-id='plateinspectionlightbox-r49c96d075b82c991-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                  <button type="button" onClick={handleNavigateToFolio} className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline group cursor-pointer text-left" data-api-unique-id='plateinspectionlightbox-r985b8531ed2e442d-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
                    <span data-api-unique-id='plateinspectionlightbox-r4cf73e0461ee4db3-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>Explore Full Series Folio Roll ({work.collection.imageCount} Plates)</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" data-api-unique-id='plateinspectionlightbox-r108df2d996aaba3a-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
                  </button>
                </div>
              </div> : null}
          </div>

          {/* Action Links & Commission Inquiry -> [F06] */}
          <div className="mt-8 pt-6 border-t border-stone-800 space-y-3" data-api-unique-id='plateinspectionlightbox-r1688a8d924418245-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
            <button type="button" onClick={handleNavigateToCommission} className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-xs font-mono font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer" data-api-unique-id='plateinspectionlightbox-r5d7b9c2b8d4e9732-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
              <span data-api-unique-id='plateinspectionlightbox-r1386862715cf744d-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>Initiate Acquisition & Commission Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5" data-api-unique-id='plateinspectionlightbox-r8d861b379a77a2d1-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox' />
            </button>
            <p className="text-[11px] text-stone-400 text-center font-mono" data-api-unique-id='plateinspectionlightbox-r8c609e734fcae583-s721040441' data-api-unique-page-name='src/frontend/components/WorksPortfolio/PlateInspectionLightbox'>
              Certified archival provenance & Certificate of Authenticity issued upon transfer.
            </p>
          </div>
        </aside>
      </div>
    </div>;
}