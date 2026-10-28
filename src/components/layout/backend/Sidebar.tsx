"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Mail, Images, FolderArchive, Settings, LogOut, ShieldCheck } from "lucide-react";
import { projectLogo } from "@/lib/generated-images/project-logo";
import { useAdminSession } from "@/tools/BackendSession";
interface SidebarNavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
}
const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [{
  id: "ctrl-nav-b03",
  label: "Operations Desk",
  href: "/adminhome",
  icon: LayoutDashboard
}, {
  id: "ctrl-nav-b04",
  label: "Inquiries Queue",
  href: "/inquiriesdispatch",
  icon: Mail
}, {
  id: "ctrl-nav-b05",
  label: "Master Plates Catalog",
  href: "/workscatalog",
  icon: Images
}, {
  id: "ctrl-nav-b06",
  label: "Collections & Folios",
  href: "/collectionsmanager",
  icon: FolderArchive
}, {
  id: "ctrl-nav-b07",
  label: "Studio Services & Bio",
  href: "/studiosettings",
  icon: Settings
}];
export function Sidebar() {
  const pathname = usePathname();
  const session = useAdminSession();

  // Standalone curator auth pages don't show the sidebar
  const isAuthPage = pathname === "/adminlogin" || pathname === "/adminregister";
  if (isAuthPage) {
    return null;
  }
  const normalizePath = (p: string) => {
    if (!p) return "/";
    const clean = p.split("?")[0].replace(/\/+$/, "");
    return clean === "" ? "/" : clean;
  };
  const currentPath = normalizePath(pathname || "/");
  const isActive = (href: string) => {
    const target = normalizePath(href);
    return currentPath === target || currentPath.startsWith(target + "/");
  };
  const handleSignOut = () => {
    session.reset();
  };
  return <aside data-webcreator-platform="backend" className="w-60 h-full min-h-0 shrink-0 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border select-none" data-api-unique-id='sidebar-r83bba72851a2e9a5-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
      {/* Brand Header */}
      <div className="h-16 shrink-0 flex items-center gap-3 px-5 border-b border-sidebar-border bg-sidebar" data-api-unique-id='sidebar-readdd5a3fab14a3a-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
        <div className="relative w-7 h-7 shrink-0 overflow-hidden rounded bg-sidebar-accent/50 p-0.5 border border-sidebar-border" data-api-unique-id='sidebar-r8e9f97d1861cc970-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
          <Image src={projectLogo} alt="Julian Vane Curatorial Archive" fill className="object-contain" sizes="28px" priority data-api-unique-id='sidebar-rbaf991696cdce9a8-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar' />
        </div>
        <div className="min-w-0 flex flex-col" data-api-unique-id='sidebar-r40cce7df26ffea0a-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
          <span className="font-serif text-sm font-semibold tracking-tight truncate text-sidebar-foreground" data-api-unique-id='sidebar-r31b778b768ce72f2-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
            Julian Vane
          </span>
          <span className="text-[10px] text-muted-foreground truncate uppercase tracking-widest font-mono" data-api-unique-id='sidebar-r3396228233dc02d8-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
            Curatorial Desk
          </span>
        </div>
      </div>

      {/* Navigation List */}
      <nav aria-label="Curatorial Desk Navigation" className="flex-1 min-h-0 overflow-y-auto px-3 py-4 space-y-1" data-api-unique-id='sidebar-r7d3b62f06bcef3f9-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
        {SIDEBAR_NAV_ITEMS.map((item, index) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return <Link key={item.id} href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-sm text-xs font-medium transition-colors ${active ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`} data-api-unique-id='sidebar-r92a83f4b408a78c2-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar' data-api-in-loop='1'>
              <Icon className="w-4 h-4 shrink-0" strokeWidth={active ? 2.2 : 2} data-api-bind-info={`SIDEBAR_NAV_ITEMS-${index}-icon`} data-api-map-var-name='item' data-api-unique-id='sidebar-rc495987afc580899-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar' data-api-in-loop='1' />
              <span className="min-w-0 truncate whitespace-nowrap" data-api-unique-id='sidebar-r3c321af5ddcb6d63-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar' data-api-in-loop='1' data-api-bind-info={`SIDEBAR_NAV_ITEMS-${index}-label`} data-api-map-var-name='item'>{item.label}</span>
            </Link>;
      })}
      </nav>

      {/* Footer Profile / Curator Session */}
      <div className="shrink-0 p-3 border-t border-sidebar-border bg-sidebar" data-api-unique-id='sidebar-r8ddd070bcc8face4-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
        <div className="px-3 py-2 rounded-sm bg-sidebar-accent/60 flex items-center justify-between gap-2 border border-sidebar-border/40" data-api-unique-id='sidebar-r7b00c1d17220c5a0-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
          <div className="flex items-center gap-2.5 min-w-0" data-api-unique-id='sidebar-r0ff5ee6e7bab6a26-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
            <div className="relative flex items-center justify-center w-6 h-6 rounded bg-sidebar-primary/20 text-sidebar-primary shrink-0" data-api-unique-id='sidebar-r17d51a7d9ef5c608-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
              <ShieldCheck className="w-3.5 h-3.5" data-api-unique-id='sidebar-r7c1396ca098ea7a1-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar' />
            </div>
            <div className="min-w-0 flex-1" data-api-unique-id='sidebar-rfdcb4f09a1905aca-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
              <p className="text-[11px] font-medium text-sidebar-foreground truncate" data-api-unique-id='sidebar-rc41f4e90357964d6-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
                {session.full_name || session.username || "Curator Admin"}
              </p>
              <p className="text-[10px] text-muted-foreground truncate font-mono" data-api-unique-id='sidebar-r72abc1fac18373c2-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
                {session.role || "CURATOR_ADMIN"}
              </p>
            </div>
          </div>
          <button type="button" onClick={handleSignOut} title="Sign Out" aria-label="Sign Out" className="p-1 text-muted-foreground hover:text-destructive hover:bg-sidebar-accent rounded transition-colors shrink-0" data-api-unique-id='sidebar-r3cf187c3d585a5f0-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar'>
            <LogOut className="w-3.5 h-3.5" data-api-unique-id='sidebar-rb20ec7209ae4516c-s2226613385' data-api-unique-page-name='src/components/layout/backend/Sidebar' />
          </button>
        </div>
      </div>
    </aside>;
}
export default Sidebar;