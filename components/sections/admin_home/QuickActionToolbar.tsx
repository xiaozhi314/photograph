"use client";

import React from "react";
import { Upload, Star, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface QuickActionToolbarProps {
  onQuickUpload: () => void;
  featuredCount: number;
  onToggleAllFeatured: () => void;
  onExportLogs: () => void;
}

export default function QuickActionToolbar({
  onQuickUpload,
  featuredCount,
  onToggleAllFeatured,
  onExportLogs,
}: QuickActionToolbarProps) {
  return (
    <div
      data-controller-name="Quick Actions Toolbar"
      className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/80"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-serif tracking-tight text-foreground font-semibold">
            Curatorial Operations Desk
          </h1>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-success text-success-foreground shrink-0 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Exhibition Active
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
          Master archive repository & commission correspondence intake
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={onQuickUpload}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload Series</span>
        </button>

        <button
          type="button"
          onClick={onToggleAllFeatured}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground active:brightness-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Star className="w-3.5 h-3.5 text-primary" />
          <span>Homepage Curation ({featuredCount})</span>
        </button>

        <button
          type="button"
          onClick={onExportLogs}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground active:brightness-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Inquiries</span>
        </button>
      </div>
    </div>
  );
}