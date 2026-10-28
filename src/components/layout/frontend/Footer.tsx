"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { projectLogo } from "@/lib/generated-images/project-logo";
export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Standalone auth pages don't show global footer shell
  const isAuthPage = pathname === "/clientlogin" || pathname === "/clientregister";
  if (isAuthPage) {
    return null;
  }
  return <footer data-webcreator-platform="frontend" className="w-full border-t border-border/80 bg-background py-12 text-muted-foreground" data-api-unique-id='footer-r645ee33133e1084d-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6" data-api-unique-id='footer-r3d41a84ff7cf7691-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
        {/* Brand & Archival Colophon */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left" data-api-unique-id='footer-rf59e1fd3fb29b5d9-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
          <div className="relative w-7 h-7 shrink-0" data-api-unique-id='footer-r33eee74ccce023d8-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            <Image src={projectLogo} alt="Julian Vane Atelier" fill className="object-contain" sizes="28px" data-api-unique-id='footer-r226565a8a3e5ea99-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer' />
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2" data-api-unique-id='footer-reab56716ce8d6074-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            <span className="font-serif text-sm font-semibold text-foreground tracking-tight" data-api-unique-id='footer-r20ce2c80febb9522-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
              Julian Vane Atelier
            </span>
            <p className="text-xs tracking-wide" data-api-unique-id='footer-r1ef546f3e0a796c4-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
              © {currentYear} Julian Vane Studio. Silver Gelatin &amp; Medium Format Archival Repository.
            </p>
          </div>
        </div>

        {/* Curated Links & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs" data-api-unique-id='footer-rf8828b24586d526a-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
          <Link href="/worksportfolio" className="hover:text-foreground transition-colors whitespace-nowrap" data-api-unique-id='footer-r952a27f5fbec6cb3-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            Works Gallery
          </Link>
          <Link href="/collectionsfolios" className="hover:text-foreground transition-colors whitespace-nowrap" data-api-unique-id='footer-rcd28dbc374d6e724-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            Series &amp; Folios
          </Link>
          <Link href="/artistexhibitions" className="hover:text-foreground transition-colors whitespace-nowrap" data-api-unique-id='footer-r3dd26352e35266f2-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            Bio &amp; Exhibitions
          </Link>
          <Link href="/commissionbooking" className="hover:text-foreground transition-colors whitespace-nowrap" data-api-unique-id='footer-rb7d3c228afdc61f5-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            Commission Studio
          </Link>
          <a href="mailto:curator@julianvane.art" className="font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap" data-api-unique-id='footer-r549a1117ce740a35-s1924284027' data-api-unique-page-name='src/components/layout/frontend/Footer'>
            curator@julianvane.art
          </a>
        </div>
      </div>
    </footer>;
}
export default Footer;