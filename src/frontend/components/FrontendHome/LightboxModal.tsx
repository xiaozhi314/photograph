"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import EditableImg from "@/@base/EditableImg";
import type { PhotographyWork } from "@/frontend/types/FrontendHome";
import { CollectionsFolios } from "@/frontend/route-params";
import { X, MapPin, Calendar, Layers, ArrowUpRight } from "lucide-react";
interface LightboxModalProps {
  work: PhotographyWork | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}
export default function LightboxModal({
  work,
  onClose
}: LightboxModalProps) {
  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (work) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [work]);
  if (!work) return null;
  const handleNavigateSeries = (e: React.MouseEvent) => {
    e.preventDefault();
    if (work.collectionId) {
      onClose();
      CollectionsFolios.navigateToFolio(router, {
        collectionId: work.collectionId
      });
    } else {
      onClose();
      CollectionsFolios.navigateTo(router);
    }
  };
  return <div role="dialog" aria-modal="true" aria-label={`Inspection Modal - ${work.title}`} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-300" onClick={onClose} data-api-unique-id='lightboxmodal-rb683c419c934420d-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
      {/* Modal Card / Vitrine Container */}
      <div className="relative max-h-[94vh] max-w-5xl w-full bg-card text-card-foreground rounded-sm border border-border/80 shadow-2xl overflow-hidden flex flex-col" onClick={e => {
      e.stopPropagation();
    }} data-api-unique-id='lightboxmodal-r37ed0ec7542782b8-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
        {/* Top Minimal Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/70 bg-card" data-api-unique-id='lightboxmodal-rb1b672c3a8b71089-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
          <div className="flex items-center gap-3" data-api-unique-id='lightboxmodal-re7110890f514dce4-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary font-semibold" data-api-unique-id='lightboxmodal-rabe5020a5d6f50e1-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              Exhibition Plate
            </span>
            <span className="text-xs text-muted-foreground font-mono" data-api-unique-id='lightboxmodal-r610c8e030e90cdbc-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              {work.edition}
            </span>
          </div>

          <div className="flex items-center gap-3" data-api-unique-id='lightboxmodal-rcacbd3fab762b704-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
            {/* Direct navigation link to inspect the full series folio on F03 */}
            <button type="button" onClick={handleNavigateSeries} className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-mono transition-colors cursor-pointer" data-api-unique-id='lightboxmodal-r61a3c84762a5c6f8-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              <span data-api-unique-id='lightboxmodal-r512ee99a0e4de849-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>View Full Series Folio</span>
              <ArrowUpRight className="w-3.5 h-3.5" data-api-unique-id='lightboxmodal-re3b34a2d0b42dc2c-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal' />
            </button>

            <button type="button" onClick={onClose} aria-label="Close Inspection Modal" className="p-1.5 rounded-sm hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" data-api-unique-id='lightboxmodal-rd5ec508866825d4e-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              <X className="w-5 h-5" data-api-unique-id='lightboxmodal-r4010ec442495975d-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal' />
            </button>
          </div>
        </div>

        {/* Photography Display Area */}
        <div className="relative flex-1 min-h-0 bg-background flex items-center justify-center p-2 sm:p-6 overflow-hidden" data-api-unique-id='lightboxmodal-ra3cf1a7be39dc781-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
          <div className={`relative max-h-[68vh] w-full flex items-center justify-center ${work.aspectRatio === "LANDSCAPE" ? "aspect-[16/10]" : "aspect-[4/5]"}`} data-api-unique-id='lightboxmodal-rb2b46d06ba96d80e-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
            <EditableImg propKey={`lightbox-${work.id}`} src={work.imageUrl} alt={work.title} className="max-h-[68vh] w-auto max-w-full object-contain rounded-xs shadow-inner" data-api-unique-id='lightboxmodal-r79cd249681dcb470-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal' />
          </div>
        </div>

        {/* Curatorial Caption Footer */}
        <div className="px-4 sm:px-6 py-4 bg-card border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs" data-api-unique-id='lightboxmodal-r5fffafbd792c558d-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
          <div className="space-y-1" data-api-unique-id='lightboxmodal-re1d2cfd1c5670469-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
            <div className="flex items-center gap-2" data-api-unique-id='lightboxmodal-rb67ee271b9c26642-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              <h4 className="font-display text-base text-foreground tracking-tight" data-api-unique-id='lightboxmodal-r9afc0f31630891e5-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
                {work.title}
              </h4>
              <span className="text-xs text-muted-foreground font-mono" data-api-unique-id='lightboxmodal-r14c141986ab8e98e-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
                / {work.seriesName || work.series}
              </span>
            </div>
            <p className="text-muted-foreground font-body text-xs max-w-xl" data-api-unique-id='lightboxmodal-r4cfe7be5120b6b20-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              {work.statement}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-border/40" data-api-unique-id='lightboxmodal-rc01c6d97181496aa-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
            <span className="inline-flex items-center gap-1" data-api-unique-id='lightboxmodal-rf1943b9eb110eb47-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              <MapPin className="w-3.5 h-3.5 text-primary" data-api-unique-id='lightboxmodal-r69822508053de46c-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal' />
              <span data-api-unique-id='lightboxmodal-rbba9205201d9f954-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>{work.location}</span>
            </span>
            <span className="inline-flex items-center gap-1" data-api-unique-id='lightboxmodal-re9df3659998d31e4-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              <Calendar className="w-3.5 h-3.5" data-api-unique-id='lightboxmodal-rec3243afa6f53f07-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal' />
              <span data-api-unique-id='lightboxmodal-rf2789db0c11a25a8-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>{work.year}</span>
            </span>
            <span className="inline-flex items-center gap-1" data-api-unique-id='lightboxmodal-r544c303daefd9b69-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>
              <Layers className="w-3.5 h-3.5" data-api-unique-id='lightboxmodal-r94389eb7487d82cc-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal' />
              <span data-api-unique-id='lightboxmodal-r42683f84b9267773-s28362523' data-api-unique-page-name='src/frontend/components/FrontendHome/LightboxModal'>{work.medium}</span>
            </span>
          </div>
        </div>
      </div>
    </div>;
}