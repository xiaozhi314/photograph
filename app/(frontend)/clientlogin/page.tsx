"use client";

import React from "react";
import GalleryShowcase from "@/frontend/components/ClientLogin/GalleryShowcase";
import AuthenticationForm from "@/frontend/components/ClientLogin/AuthenticationForm";
export default function ClientLoginPage() {
  return <div className="relative min-h-screen w-full bg-background text-foreground flex flex-col lg:flex-row overflow-x-hidden selection:bg-accent selection:text-accent-foreground" data-api-unique-id='page-r2d74023fdf917a58-s1891614564' data-api-unique-page-name='app/(frontend)/clientlogin/page'>
      {/* Visual Artistic Showcase Column (60% on desktop) */}
      <aside className="w-full lg:w-[58%] xl:w-[60%] lg:min-h-screen relative shrink-0" data-api-unique-id='page-rdbbe8b5245669b2f-s1891614564' data-api-unique-page-name='app/(frontend)/clientlogin/page'>
        <GalleryShowcase data-api-unique-id='page-r9ed92858f2c4d351-s1891614564' data-api-unique-page-name='app/(frontend)/clientlogin/page' />
      </aside>

      {/* Interactive Authentication Portal Column (40% on desktop) */}
      <main className="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 lg:py-16 bg-background relative min-w-0" data-api-unique-id='page-rdffbf99f9aad5b79-s1891614564' data-api-unique-page-name='app/(frontend)/clientlogin/page'>
        <div className="w-full max-w-md mx-auto" data-api-unique-id='page-r3e6b00507b30921d-s1891614564' data-api-unique-page-name='app/(frontend)/clientlogin/page'>
          <AuthenticationForm data-api-unique-id='page-rd45bba1fca5c7a38-s1891614564' data-api-unique-page-name='app/(frontend)/clientlogin/page' />
        </div>
      </main>
    </div>;
}