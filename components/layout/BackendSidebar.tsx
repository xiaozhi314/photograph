import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Images, Mail, FolderArchive, Settings } from "lucide-react";
import { projectLogo } from "@/lib/generated-images/project-logo";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Series & Works", icon: Images, active: false },
  { label: "Inquiries", icon: Mail, active: false },
  { label: "Media Library", icon: FolderArchive, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export function BackendSidebar() {
  return (
    <aside className="w-60 h-full shrink-0 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border select-none">
      {/* Brand Header */}
      <div className="h-16 shrink-0 flex items-center gap-3 px-5 border-b border-sidebar-border">
        <div className="relative w-7 h-7 shrink-0 overflow-hidden">
          <Image
            src={projectLogo}
            alt="Lumen Portraits"
            fill
            className="object-contain"
            sizes="28px"
            priority
          />
        </div>
        <div className="min-w-0 flex flex-col">
          <span className="font-display text-sm font-medium tracking-tight truncate text-sidebar-foreground">
            Lumen Studio
          </span>
          <span className="text-[11px] text-muted-foreground truncate">
            Portfolio Operations
          </span>
        </div>
      </div>

      {/* Navigation List */}
      <nav aria-label="Backend Navigation" className="flex-1 min-h-0 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-sm text-xs font-medium transition-colors ${
                item.active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" strokeWidth={item.active ? 2.2 : 2} />
              <span className="min-w-0 truncate whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Profile / Status Info */}
      <div className="shrink-0 p-3 border-t border-sidebar-border">
        <div className="px-3 py-2 rounded-sm bg-sidebar-accent/50 flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-success shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium text-sidebar-foreground truncate">
              Studio Archive Active
            </p>
            <p className="text-[10px] text-muted-foreground truncate">
              v1.2.0 • Fine Art Edition
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
