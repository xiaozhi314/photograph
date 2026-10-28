import React from "react";
import { FrontendNavigation } from "@/components/layout/FrontendNavigation";
import { FrontendFooter } from "@/components/layout/FrontendFooter";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <FrontendNavigation />
      <main className="flex-1 w-full">{children}</main>
      <FrontendFooter />
    </div>
  );
}
