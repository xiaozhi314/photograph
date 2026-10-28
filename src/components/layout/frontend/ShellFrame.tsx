"use client";

import React from "react";
import { Navigation } from "@/components/layout/frontend/Navigation";
import { Footer } from "@/components/layout/frontend/Footer";
export interface ShellFrameProps {
  children: React.ReactNode;
}
export function ShellFrame({
  children
}: ShellFrameProps) {
  return <div data-webcreator-platform="frontend" className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground" data-api-unique-id='shellframe-r0444aeafe89381c0-s845667390' data-api-unique-page-name='src/components/layout/frontend/ShellFrame'>
      <Navigation data-api-unique-id='shellframe-r8efa6f45bee7633b-s845667390' data-api-unique-page-name='src/components/layout/frontend/ShellFrame' />
      <main className="flex-1 w-full flex flex-col" data-api-unique-id='shellframe-r3875eacc982660ed-s845667390' data-api-unique-page-name='src/components/layout/frontend/ShellFrame'>
        {children}
      </main>
      <Footer data-api-unique-id='shellframe-r6d018d4d2ccafac3-s845667390' data-api-unique-page-name='src/components/layout/frontend/ShellFrame' />
    </div>;
}
export default ShellFrame;