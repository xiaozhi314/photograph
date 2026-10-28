"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { projectLogo } from "@/lib/generated-images/project-logo";
import { useUserSession } from "@/tools/FrontendSession";
import { User, LogOut } from "lucide-react";
interface NavItem {
  id: string;
  label: string;
  href: string;
  clientOnly?: boolean;
}
const NAV_ITEMS: NavItem[] = [{
  id: "ctrl-nav-f01",
  label: "Home Folio",
  href: "/"
}, {
  id: "ctrl-nav-f02",
  label: "Works Gallery",
  href: "/worksportfolio"
}, {
  id: "ctrl-nav-f03",
  label: "Series & Folios",
  href: "/collectionsfolios"
}, {
  id: "ctrl-nav-f04",
  label: "Bio & Exhibitions",
  href: "/artistexhibitions"
}, {
  id: "ctrl-nav-f05",
  label: "Services & Reviews",
  href: "/servicestestimonials"
}, {
  id: "ctrl-nav-f06",
  label: "Commission Studio",
  href: "/commissionbooking"
}, {
  id: "ctrl-nav-f07",
  label: "Client Portal",
  href: "/clientportal",
  clientOnly: true
}];
export function Navigation() {
  const pathname = usePathname();
  const session = useUserSession();

  // Standalone auth pages don't show navigation shell
  const isAuthPage = pathname === "/clientlogin" || pathname === "/clientregister";
  if (isAuthPage) {
    return null;
  }
  const isAuthenticated = Boolean(session.token);
  const normalizePath = (p: string) => {
    if (!p) return "/";
    const clean = p.split("?")[0].replace(/\/+$/, "");
    return clean === "" ? "/" : clean;
  };
  const currentPath = normalizePath(pathname || "/");
  const isActive = (href: string) => {
    const target = normalizePath(href);
    if (target === "/") {
      return currentPath === "/";
    }
    return currentPath === target || currentPath.startsWith(target + "/");
  };
  const handleSignOut = () => {
    session.reset();
  };
  const visibleItems = NAV_ITEMS.filter(item => !item.clientOnly || isAuthenticated);
  return <header data-webcreator-platform="frontend" className="sticky top-0 z-50 h-16 w-full border-b border-border/80 bg-background/95 backdrop-blur-sm transition-colors" data-api-unique-id='navigation-r05b563117fcf9e29-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-between" data-api-unique-id='navigation-rc5b95ae3d3b16473-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm" data-api-unique-id='navigation-rb7650a52b8c94005-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
          <div className="relative w-8 h-8 shrink-0 overflow-hidden" data-api-unique-id='navigation-r5f0f21d78d6bcb98-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
            <Image src={projectLogo} alt="Julian Vane Atelier" fill className="object-contain" sizes="32px" priority data-api-unique-id='navigation-r4cfedc8da7035876-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation' />
          </div>
          <span className="font-serif text-lg tracking-tight font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap" data-api-unique-id='navigation-rdebb52c4ee2b52b8-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
            Julian Vane Atelier
          </span>
        </Link>

        {/* Navigation Links (responsive along original structure: hidden md:flex) */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 sm:gap-8" data-api-unique-id='navigation-r3068f7e464452ba9-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
          {visibleItems.map((item, index) => {
          const active = isActive(item.href);
          return <Link key={item.id} href={item.href} className={`text-sm font-medium transition-colors whitespace-nowrap ${active ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`} data-api-unique-id='navigation-r0934a64514b9ffa2-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation' data-api-in-loop='1' data-api-bind-info={`visibleItems-${index}-label`} data-api-map-var-name='item'>
                {item.label}
              </Link>;
        })}
        </nav>

        {/* Auth Actions / Session */}
        <div className="flex items-center gap-3" data-api-unique-id='navigation-rf9d4cd0e14beabda-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
          {isAuthenticated ? <div className="flex items-center gap-2" data-api-unique-id='navigation-rcbea141dc4375f66-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
              <Link href="/clientportal" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border border-border bg-card hover:bg-muted text-foreground transition-colors whitespace-nowrap" data-api-unique-id='navigation-rf884be23a6b2447f-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
                <User className="w-3.5 h-3.5 text-primary" data-api-unique-id='navigation-r79a0e6fee75a7457-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation' />
                <span className="max-w-[100px] truncate" data-api-unique-id='navigation-r7cfb91963ff98e69-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>{session.full_name || session.username || "Client"}</span>
              </Link>
              <button type="button" onClick={handleSignOut} aria-label="Sign Out" title="Sign Out" className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-muted/40 rounded transition-colors" data-api-unique-id='navigation-r4e600e70c33a3c05-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
                <LogOut className="w-4 h-4" data-api-unique-id='navigation-r82ff02ac69dfea7e-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation' />
              </button>
            </div> : <div className="flex items-center gap-2" data-api-unique-id='navigation-rd37e6f68247c41a1-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
              <Link href="/clientlogin" className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1" data-api-unique-id='navigation-r89d292d81a2a1c5f-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
                Sign In
              </Link>
              <Link href="/commissionbooking" className="inline-flex items-center justify-center rounded-sm bg-primary px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 whitespace-nowrap" data-api-unique-id='navigation-rb40086a4d67f5930-s2997233460' data-api-unique-page-name='src/components/layout/frontend/Navigation'>
                Inquiry / Brief
              </Link>
            </div>}
        </div>
      </div>
    </header>;
}
export default Navigation;