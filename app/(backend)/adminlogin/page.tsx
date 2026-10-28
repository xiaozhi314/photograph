"use client";

import React from "react";
import CuratorAuthVault from "@/backend/components/AdminLogin/CuratorAuthVault";
export default function AdminLoginPage() {
  return <div className="relative w-full max-w-full min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden p-4 sm:p-6 lg:p-8" data-api-unique-id='page-rdbcef9b615f0de2e-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
      {/* Background Ambient Lighting & Texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-40" data-api-unique-id='page-r5dacfd3cfcf5e447-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
        <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" data-api-unique-id='page-r9ddb8a5562e945b2-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page' />
      </div>

      {/* Top minimal status banner */}
      <header className="relative z-10 w-full flex items-center justify-between text-xs text-muted-foreground pb-4 border-b border-border/40" data-api-unique-id='page-r0a8fe63e44e79c88-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
        <div className="flex items-center gap-2" data-api-unique-id='page-rb13fe5ec66b0c325-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
          <span className="font-semibold text-foreground tracking-wide font-mono text-[11px] uppercase" data-api-unique-id='page-rb9d2c170f5210ac6-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
            JULIAN VANE ATELIER
          </span>
          <span className="text-border" data-api-unique-id='page-rd9462f15b87981cf-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>|</span>
          <span className="hidden sm:inline" data-api-unique-id='page-rdfb42cefea1e2df8-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>Restricted Archive Access Portal</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]" data-api-unique-id='page-rf0ae6cd8a577fd52-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-success" data-api-unique-id='page-rc1ff15ff285d747c-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page' />
          <span data-api-unique-id='page-rf92e7d472338686e-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>Curatorial Zone</span>
        </div>
      </header>

      {/* Centerpiece Stage: Authentication Vault */}
      <main className="relative z-10 my-auto py-8 flex items-center justify-center" data-api-unique-id='page-r936f6e7e25ade0f0-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
        <CuratorAuthVault data-api-unique-id='page-r2be7d556b443e839-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page' />
      </main>

      {/* Footer System Baseline */}
      <footer className="relative z-10 w-full text-center text-xs text-muted-foreground pt-4 border-t border-border/40" data-api-unique-id='page-rd2b716c730a229ea-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
        <p className="text-[11px]" data-api-unique-id='page-r0d75547663743c48-s3816649057' data-api-unique-page-name='app/(backend)/adminlogin/page'>
          &copy; {new Date().getFullYear()} Julian Vane Studio. Curatorial Operations & Master Plates Archive. All rights reserved.
        </p>
      </footer>
    </div>;
}