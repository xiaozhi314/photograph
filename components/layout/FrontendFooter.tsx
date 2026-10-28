import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectLogo } from "@/lib/generated-images/project-logo";

export function FrontendFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/80 bg-background py-12 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="relative w-7 h-7 shrink-0">
            <Image
              src={projectLogo}
              alt="Lumen Portraits"
              fill
              className="object-contain"
              sizes="28px"
            />
          </div>
          <p className="text-xs tracking-wide">
            &copy; {currentYear} Lumen Portraits Studio. All photographic rights reserved.
          </p>
        </div>

        {/* Curated Links & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
          <Link href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
            Monograph Press
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
            Exhibition Catalog
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
            Instagram
          </Link>
          <a
            href="mailto:curator@lumenportraits.com"
            className="font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            curator@lumenportraits.com
          </a>
        </div>
      </div>
    </footer>
  );
}
