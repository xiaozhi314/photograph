"use client";

import React from "react";
import { Sidebar } from "@/components/layout/backend/Sidebar";
export function ShellFrame({
  children
}: {
  children: React.ReactNode;
}) {
  return <div data-webcreator-platform="backend" className="h-dvh overflow-hidden flex bg-background text-foreground" data-api-unique-id='shellframe-r78a785b881a16787-s2699391620' data-api-unique-page-name='src/components/layout/backend/ShellFrame'>
      <style data-api-unique-id='shellframe-r727fa583f9fe5e29-s2699391620' data-api-unique-page-name='src/components/layout/backend/ShellFrame'>{`html:has(.h-dvh),html:has(.h-dvh) body{height:100%;overflow:hidden}`}</style>
      <Sidebar data-api-unique-id='shellframe-r282776ac8a1e4226-s2699391620' data-api-unique-page-name='src/components/layout/backend/ShellFrame' />
      <div className="flex-1 min-w-0 min-h-0 flex flex-col" data-api-unique-id='shellframe-rb2a2190ed417e07e-s2699391620' data-api-unique-page-name='src/components/layout/backend/ShellFrame'>
        <main className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden" data-api-unique-id='shellframe-rb6a9521453df9bac-s2699391620' data-api-unique-page-name='src/components/layout/backend/ShellFrame'>
          {children}
        </main>
      </div>
    </div>;
}
export default ShellFrame;