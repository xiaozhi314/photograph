"use client";

import React, { useEffect } from "react";
import EditableImg from "@/@base/EditableImg";
import type { PhotographyWorkItem } from "@/frontend/types/CollectionsFolios";
import { X, ZoomIn, MapPin, Calendar, Film, Layers, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
interface PlateLightboxModalProps {
  plate: PhotographyWorkItem | null;
  isOpen?: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}
export default function PlateLightboxModal({
  plate,
  isOpen = true,
  onClose,
  onNext,
  onPrev
}: PlateLightboxModalProps) {
  useEffect(() => {
    if (!plate || !isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, plate]);
  if (!isOpen || !plate) return null;
  const aspectRatioDisplay = plate.aspectRatio === "PORTRAIT" ? "6x7" : "3:2";
  return <div role="dialog" aria-modal="true" aria-label="High-Resolution Master Plate Lightbox Inspection" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-background/90 backdrop-blur-md text-foreground" data-api-unique-id='platelightboxmodal-r947c4f330b697b1c-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
      {/* Background click to dismiss */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} aria-hidden="true" data-api-unique-id='platelightboxmodal-r6901c8254e103591-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />

      {/* Main Inspection Modal Dialog */}
      <div className="relative z-10 w-full max-w-6xl max-h-[calc(100dvh-3rem)] overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl flex flex-col lg:flex-row" data-api-unique-id='platelightboxmodal-r99913c13a8d96e01-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
        {/* Top bar controls on mobile */}
        <div className="lg:hidden flex items-center justify-between border-b border-border px-4 py-3 bg-card" data-api-unique-id='platelightboxmodal-rbd44bd972c9e1d89-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
          <div className="flex items-center gap-2" data-api-unique-id='platelightboxmodal-r2d319200f8c58d68-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium" data-api-unique-id='platelightboxmodal-rf12726a9ecf26b7c-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              Plate Inspection
            </span>
            <span className="text-xs text-muted-foreground font-mono" data-api-unique-id='platelightboxmodal-rf3f782f30fd29bd2-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              [{aspectRatioDisplay}]
            </span>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Close Lightbox" data-api-unique-id='platelightboxmodal-r65c7a13a66d8a0a3-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            <X className="w-5 h-5" data-api-unique-id='platelightboxmodal-rae23aa69aacd2680-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />
          </button>
        </div>

        {/* Left: Master Image Stage */}
        <div className="relative flex-1 bg-black/95 flex items-center justify-center min-h-[320px] sm:min-h-[440px] lg:min-h-[620px] p-4 sm:p-8 overflow-hidden group" data-api-unique-id='platelightboxmodal-r4265e04163718ee3-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
          {/* Authentic Darkroom Negative Film Margins & Registration Marks */}
          <div className="absolute top-3 left-4 font-mono text-[10px] text-white/40 tracking-widest uppercase select-none pointer-events-none hidden sm:block" data-api-unique-id='platelightboxmodal-r2d0f1ae916b70fc9-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            JULIAN VANE ARCHIVES · ROLL NEG REF {plate.id.slice(-6).toUpperCase()} · 120 FORMAT
          </div>
          <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/40 tracking-widest uppercase select-none pointer-events-none hidden sm:block" data-api-unique-id='platelightboxmodal-rd4099eb8bb3477fc-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            SILVER GELATIN CONTACT MASTER · 3000 DPI ARCHIVAL SCAN
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-white/40 tracking-widest uppercase select-none pointer-events-none flex items-center gap-1.5" data-api-unique-id='platelightboxmodal-r3c70b9725876f7c0-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            <ZoomIn className="w-3.5 h-3.5 text-white/60" data-api-unique-id='platelightboxmodal-rbf2e2a556ca529cb-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />
            <span data-api-unique-id='platelightboxmodal-rddce6e664334bf1f-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>100% TONAL RESOLUTION</span>
          </div>

          {/* Navigation Arrows */}
          {onPrev && <button type="button" onClick={e => {
          e.stopPropagation();
          onPrev();
        }} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors shadow-lg" aria-label="Previous plate" data-api-unique-id='platelightboxmodal-rfbb7ba086596f978-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <ChevronLeft className="w-5 h-5" data-api-unique-id='platelightboxmodal-r78141171d04d1d8d-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />
            </button>}

          {onNext && <button type="button" onClick={e => {
          e.stopPropagation();
          onNext();
        }} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors shadow-lg" aria-label="Next plate" data-api-unique-id='platelightboxmodal-rd1230328ee003ad4-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <ChevronRight className="w-5 h-5" data-api-unique-id='platelightboxmodal-r03b7bfcc7b78586c-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />
            </button>}

          {/* Master Plate High Fidelity Picture Frame with White Passepartout */}
          <div className="relative max-h-full max-w-full flex items-center justify-center p-2 sm:p-3 bg-white/5 border border-white/10 shadow-2xl" data-api-unique-id='platelightboxmodal-r1cfdd520866f64fd-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            <div className={`relative overflow-hidden bg-black/40 flex items-center justify-center ${plate.aspectRatio === "PORTRAIT" ? "w-[260px] h-[340px] sm:w-[340px] sm:h-[460px] lg:w-[420px] lg:h-[560px]" : "w-[320px] h-[240px] sm:w-[460px] sm:h-[340px] lg:w-[560px] lg:h-[420px]"}`} data-api-unique-id='platelightboxmodal-rbaac81cbb0b4e9fa-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <EditableImg propKey={`modal-plate-${plate.id}`} src={plate.imageUrl} alt={plate.title} needLargeImage={true} className="w-full h-full object-contain" data-api-unique-id='platelightboxmodal-r9615c6e109d8593e-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />
            </div>
          </div>
        </div>

        {/* Right: Curatorial & Archival Dossier Side Panel */}
        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 border-t lg:border-t-0 lg:border-l border-border bg-card p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[46vh] lg:max-h-[620px]" data-api-unique-id='platelightboxmodal-ra160204ab24f392e-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
          <div className="space-y-6" data-api-unique-id='platelightboxmodal-r5bd6f3c3b788e6bb-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            {/* Header with Close for Desktop */}
            <div className="flex items-start justify-between gap-4" data-api-unique-id='platelightboxmodal-rd9e2a61695ee1c9c-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <div data-api-unique-id='platelightboxmodal-r008ae71ea51fb40f-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium" data-api-unique-id='platelightboxmodal-r5efd07583bc3ba8d-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  {plate.seriesName}
                </span>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-card-foreground mt-1" data-api-unique-id='platelightboxmodal-r78c1c7ea3edabcdc-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  {plate.title}
                </h3>
              </div>
              <button type="button" onClick={onClose} className="hidden lg:flex p-1.5 rounded-md text-muted-foreground hover:text-card-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" aria-label="Close dialog" data-api-unique-id='platelightboxmodal-r6b2a2276db706a48-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <X className="w-5 h-5" data-api-unique-id='platelightboxmodal-r8e5052df9fdf6c6e-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' />
              </button>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs border-y border-border py-4" data-api-unique-id='platelightboxmodal-r38e57f00b138237d-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <div className="space-y-1" data-api-unique-id='platelightboxmodal-rd29000a66a914f22-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <span className="text-muted-foreground flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px]" data-api-unique-id='platelightboxmodal-rca92ac3d673ae57a-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  <MapPin className="w-3 h-3 text-primary" data-api-unique-id='platelightboxmodal-rf2cdff7a5c3394b4-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' /> Location
                </span>
                <p className="font-medium text-card-foreground" data-api-unique-id='platelightboxmodal-rbe5653f36a35ff15-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>{plate.location}</p>
              </div>

              <div className="space-y-1" data-api-unique-id='platelightboxmodal-r290fca35cf736aaa-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <span className="text-muted-foreground flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px]" data-api-unique-id='platelightboxmodal-r01eac3d9fa921207-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  <Calendar className="w-3 h-3 text-primary" data-api-unique-id='platelightboxmodal-r8a668119417b3319-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' /> Captured
                </span>
                <p className="font-medium text-card-foreground" data-api-unique-id='platelightboxmodal-ra9db9888e8e413a3-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>{plate.year}</p>
              </div>

              <div className="space-y-1" data-api-unique-id='platelightboxmodal-rbbfab514b68a1a3e-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <span className="text-muted-foreground flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px]" data-api-unique-id='platelightboxmodal-rc29fbe31d796710f-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  <Film className="w-3 h-3 text-primary" data-api-unique-id='platelightboxmodal-r13a7b24db719451f-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' /> Medium
                </span>
                <p className="font-medium text-card-foreground break-words" data-api-unique-id='platelightboxmodal-r4ece6e813fec6316-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>{plate.medium}</p>
              </div>

              <div className="space-y-1" data-api-unique-id='platelightboxmodal-ref8bc4cc022470fc-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <span className="text-muted-foreground flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px]" data-api-unique-id='platelightboxmodal-r59e7096fc3ca6bf3-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  <Layers className="w-3 h-3 text-primary" data-api-unique-id='platelightboxmodal-rda0703b2aac4e9e2-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' /> Format Ratio
                </span>
                <p className="font-medium text-card-foreground font-mono" data-api-unique-id='platelightboxmodal-r23a1b28bc3454ee4-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>{aspectRatioDisplay} Frame</p>
              </div>
            </div>

            {/* Edition Provenance Stamp */}
            <div className="p-3.5 rounded-lg bg-secondary/40 border border-border space-y-1.5" data-api-unique-id='platelightboxmodal-r5cedf3a909b6570a-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <div className="flex items-center justify-between" data-api-unique-id='platelightboxmodal-r72dd8df2449cf6f2-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5" data-api-unique-id='platelightboxmodal-rb4407111b0e82149-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" data-api-unique-id='platelightboxmodal-r40b8f6648c984fa2-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal' /> Archival Provenance
                </span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-primary text-primary-foreground" data-api-unique-id='platelightboxmodal-rcf5525da8725e701-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                  {plate.edition}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed" data-api-unique-id='platelightboxmodal-rcd580806adba6797-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                Hand-printed on Ilford Galerie FB double-weight fiber paper in Julian Vane&apos;s Milan atelier. Numbered, stamped, and catalogued in studio inventory.
              </p>
            </div>

            {/* Full Curatorial Statement */}
            <div className="space-y-2" data-api-unique-id='platelightboxmodal-r0265ad9ac19ee1ee-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground" data-api-unique-id='platelightboxmodal-rf5baf2cf4f41c3ed-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                Artist & Curatorial Statement
              </h4>
              <p className="text-sm text-card-foreground/90 font-serif leading-relaxed italic border-l-2 border-primary/40 pl-3.5" data-api-unique-id='platelightboxmodal-r4ca86ec5e87b1c5b-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
                &ldquo;{plate.statement}&rdquo;
              </p>
            </div>
          </div>

          {/* Footer Controls & Acquisition Link Indicator */}
          <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground" data-api-unique-id='platelightboxmodal-red61e3b906c85424-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
            <span className="font-mono text-[11px]" data-api-unique-id='platelightboxmodal-r5e5ca4b536cced65-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              Use ← / → keys to navigate
            </span>
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors" data-api-unique-id='platelightboxmodal-r5fe77ca32f103844-s1569803667' data-api-unique-page-name='src/frontend/components/CollectionsFolios/PlateLightboxModal'>
              Close Inspection
            </button>
          </div>
        </div>
      </div>
    </div>;
}