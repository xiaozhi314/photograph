import React from "react";
import { BackendSidebar } from "@/components/layout/BackendSidebar";

export default function BackendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh overflow-hidden flex bg-background text-foreground">
      <style>{`html:has(.h-dvh),html:has(.h-dvh) body{height:100%;overflow:hidden}`}</style>
      <BackendSidebar />
      <div className="flex-1 min-w-0 min-h-0 flex flex-col">
        <main className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
