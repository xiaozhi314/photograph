import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectLogo } from "@/lib/generated-images/project-logo";

export function FrontendNavigation() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-border/80 bg-background/95 backdrop-blur-sm transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
        >
          <div className="relative w-8 h-8 shrink-0 overflow-hidden">
            <Image
              src={projectLogo}
              alt="Lumen Portraits"
              fill
              className="object-contain"
              sizes="32px"
              priority
            />
          </div>
          <span className="font-display text-lg tracking-tight font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
            Lumen Portraits
          </span>
        </Link>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation" className="flex items-center gap-6 sm:gap-8">
          <Link
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
          >
            Selected Works
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            Series
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap hidden sm:inline-block"
          >
            About
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 whitespace-nowrap"
          >
            Inquiry / Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
