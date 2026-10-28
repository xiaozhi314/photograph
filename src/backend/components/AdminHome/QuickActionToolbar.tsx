"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Upload, Download, FolderGit2, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { WorksCatalog, CollectionsManager } from "@/backend/route-params";
interface QuickActionToolbarProps {
  onOpenUploadModal?: () => void;
  // Backward compatibility with prototype props
  onQuickUpload?: () => void;
  featuredCount?: number;
  onToggleAllFeatured?: () => void;
  onExportLogs?: () => void;
  onNavigateToCatalog?: () => void;
  onNavigateToFolios?: () => void;
}
export default function QuickActionToolbar({
  onOpenUploadModal,
  onQuickUpload,
  onExportLogs,
  onNavigateToCatalog,
  onNavigateToFolios
}: QuickActionToolbarProps) {
  const router = useRouter();
  const handleOpenUpload = () => {
    if (onOpenUploadModal) {
      onOpenUploadModal();
    } else if (onQuickUpload) {
      onQuickUpload();
    }
  };
  const handleNavigateCatalog = () => {
    if (onNavigateToCatalog) {
      onNavigateToCatalog();
    } else {
      WorksCatalog.navigateTo(router);
    }
  };
  const handleNavigateFolios = () => {
    if (onNavigateToFolios) {
      onNavigateToFolios();
    } else {
      CollectionsManager.navigateTo(router);
    }
  };
  const handleExport = () => {
    if (onExportLogs) {
      onExportLogs();
    } else {
      toast.success("Audit logs exported successfully");
    }
  };
  return <div data-controller-name="Quick Actions Toolbar" className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/80" data-api-unique-id='quickactiontoolbar-r9c7553243bb21f5d-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
      <div className="min-w-0" data-api-unique-id='quickactiontoolbar-r1fadbe8b118f03ff-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
        <div className="flex items-center gap-2 flex-wrap" data-api-unique-id='quickactiontoolbar-reccce94ceb252227-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
          <h1 className="text-xl sm:text-2xl font-serif tracking-tight text-foreground font-semibold" data-api-unique-id='quickactiontoolbar-rf806c3eb2ca53450-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
            Curatorial Operations Desk
          </h1>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-600/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 shrink-0 whitespace-nowrap" data-api-unique-id='quickactiontoolbar-rec02a2c6171e54e6-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" data-api-unique-id='quickactiontoolbar-r1dd0df64238a5283-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar' />
            Exhibition Active
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5" data-api-unique-id='quickactiontoolbar-r7a613fb67cfa0c50-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
          Master archive repository & commission correspondence intake
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 shrink-0" data-api-unique-id='quickactiontoolbar-r5341d2ec91bb0c8d-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
        <button type="button" onClick={handleOpenUpload} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='quickactiontoolbar-r49430f0dc1ccfcbe-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
          <Upload className="w-3.5 h-3.5" data-api-unique-id='quickactiontoolbar-rb8ab35c96f105106-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar' />
          <span data-api-unique-id='quickactiontoolbar-rd0f78045b0f785e5-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>New Series Folio</span>
        </button>

        <button type="button" onClick={handleNavigateCatalog} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground active:brightness-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='quickactiontoolbar-r896d94ec0f7371d7-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
          <BookOpen className="w-3.5 h-3.5 text-muted-foreground" data-api-unique-id='quickactiontoolbar-r118e28099ef06ae8-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar' />
          <span data-api-unique-id='quickactiontoolbar-r46c049d081062a16-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>Master Plates Catalog</span>
        </button>

        <button type="button" onClick={handleNavigateFolios} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground active:brightness-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='quickactiontoolbar-r44586d50a3149769-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
          <FolderGit2 className="w-3.5 h-3.5 text-muted-foreground" data-api-unique-id='quickactiontoolbar-rf9ac66d3b41be67c-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar' />
          <span data-api-unique-id='quickactiontoolbar-r5994bf446530552a-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>Folios Manager</span>
        </button>

        <button type="button" onClick={handleExport} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground active:brightness-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='quickactiontoolbar-re9db2d4f273739f5-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>
          <Download className="w-3.5 h-3.5" data-api-unique-id='quickactiontoolbar-r0c16eaf31845971b-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar' />
          <span data-api-unique-id='quickactiontoolbar-r2a6919ba0059d15a-s1121327057' data-api-unique-page-name='src/backend/components/AdminHome/QuickActionToolbar'>Export Audit Logs</span>
        </button>
      </div>
    </div>;
}