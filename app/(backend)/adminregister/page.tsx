"use client";

import React from "react";
import AtelierEthosPanel from "@/backend/components/AdminRegister/AtelierEthosPanel";
import RegisterFormCard from "@/backend/components/AdminRegister/RegisterFormCard";
export default function AdminRegisterPage() {
  return <div className="w-full max-w-full min-w-0 overflow-x-hidden p-4 lg:p-6 bg-background text-foreground flex items-center justify-center" data-api-unique-id='page-rf831dce1b1fb5d34-s778295242' data-api-unique-page-name='app/(backend)/adminregister/page'>
      <div className="w-full max-w-6xl min-w-0 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch" data-api-unique-id='page-r29d1c902bf111201-s778295242' data-api-unique-page-name='app/(backend)/adminregister/page'>
        {/* Left Section: Atelier Ethos & Governance */}
        <section data-controller-name="Atelier Ethos & Curatorial Onboarding" className="min-w-0 lg:col-span-5 flex flex-col justify-between" data-api-unique-id='page-r2055aa39349c42c0-s778295242' data-api-unique-page-name='app/(backend)/adminregister/page'>
          <AtelierEthosPanel data-api-unique-id='page-r8de4ba93f243e3f8-s778295242' data-api-unique-page-name='app/(backend)/adminregister/page' />
        </section>

        {/* Right Section: Provisioning Form Box */}
        <section data-controller-name="Curatorial Admin Provisioning Form" className="min-w-0 lg:col-span-7 flex flex-col justify-center" data-api-unique-id='page-re16fda6b2d943404-s778295242' data-api-unique-page-name='app/(backend)/adminregister/page'>
          <RegisterFormCard data-api-unique-id='page-r14f252abf925d8c7-s778295242' data-api-unique-page-name='app/(backend)/adminregister/page' />
        </section>
      </div>
    </div>;
}