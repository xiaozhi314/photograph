"use client";

import React, { useEffect } from "react";
import EditableImg from "@/@base/EditableImg";
import { generatedImagesByFilename } from "@/lib/generated-images/frontend-home";
import type { PhotographyWork } from "@/frontend/types/home";
import { X, MapPin, Calendar, Layers, ShieldCheck } from "lucide-react";

interface LightboxModalProps {
  work: PhotographyWork | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LightboxModal({
  work,
  onClose,
}: LightboxModalProps) {
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
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal Card / Vitrine Container */}
      <div
        className="relative max-h-[94vh] max-w-5xl w-full bg-card text-card-foreground rounded-sm border border-border/80 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/70 bg-card">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary font-semibold">
              Exhibition Plate
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              {work.edition}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Inspection Modal"
            className="p-1.5 rounded-sm hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Photography Display Area */}
        <div className="relative flex-1 min-h-0 bg-background flex items-center justify-center p-2 sm:p-6 overflow-hidden">
          <div
            className={`relative max-h-[68vh] w-full flex items-center justify-center ${
              work.aspectRatio === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"
            }`}
          >
            <EditableImg
              src={generatedImagesByFilename[work.id]}
              alt={work.title}
              className="max-h-[68vh] w-auto max-w-full object-contain rounded-xs shadow-inner"
            />
          </div>
        </div>

        {/* Curatorial Caption Footer */}
        <div className="px-4 sm:px-6 py-4 bg-card border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <h4 className="font-display text-base text-foreground tracking-tight">
              {work.title}
            </h4>
            <p className="text-muted-foreground font-body text-xs max-w-xl">
              {work.statement}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-border/40">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{work.location}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{work.year}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>{work.medium}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}