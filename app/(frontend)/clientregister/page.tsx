"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerClient } from "@/frontend/actions/ClientRegister";
import type { RegisterFormData, RegisterFormErrors } from "@/frontend/types/ClientRegister";
import { ClientLogin } from "@/frontend/route-params";
import { EditableImg } from "@/@base/EditableImg";
import { Check, ShieldCheck, ArrowRight, Lock, User, Mail, Sparkles, Key } from "lucide-react";

/**
 * Archive Manifesto Section
 * Editorial typography introducing studio privileges & monochrome darkroom aesthetic.
 */
function ArchiveManifesto() {
  const privileges = [{
    number: "01",
    title: "Silver Gelatin Acquisition Proofs",
    description: "Direct provenance authentication sheets and private inspection certificates for limited edition acquisitions."
  }, {
    number: "02",
    title: "Monograph Darkroom Contact Sheets",
    description: "Unfiltered access to medium-format working contact sheets, test strips, and developmental archival notes."
  }, {
    number: "03",
    title: "Tailored Architectural Briefs",
    description: "Interactive collaboration workspace for site monographs, spatial studies, and curator commission briefs."
  }, {
    number: "04",
    title: "Independent Commission Protocols",
    description: "Direct priority liaison with Julian Vane's studio atelier for bespoke editorial and museum engagements."
  }];
  return <div className="relative flex flex-col justify-between p-8 lg:p-14 bg-neutral-950 text-neutral-100 overflow-hidden min-h-[560px] lg:min-h-full border border-neutral-900 rounded-none shadow-2xl" data-api-unique-id='page-rc53dd9193b186271-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
      {/* Background Darkroom Photography Texture/Visual */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none" data-api-unique-id='page-rfdf505c24dc65c23-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        <EditableImg propKey="archive-manifesto-bg" keywords="monochrome darkroom medium format silver gelatin photography print grain minimalism aesthetic" alt="Julian Vane Studio Darkroom" className="w-full h-full object-cover grayscale contrast-125" data-api-unique-id='page-r3affcdb0f8ccaba3-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" data-api-unique-id='page-r14713427e340bc7a-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
      </div>

      {/* Header and Branding */}
      <div className="relative z-10 space-y-6" data-api-unique-id='page-r56e2badf66e84a3b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] tracking-[0.28em] uppercase text-neutral-400 bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm" data-api-unique-id='page-rd66dd0048dac85de-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          <Sparkles className="w-3.5 h-3.5 text-neutral-300" data-api-unique-id='page-r12bf6bddcfacdf0d-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
          <span data-api-unique-id='page-r266df94773e11e08-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Atelier Protocol &middot; Tier II</span>
        </div>

        <div className="space-y-3" data-api-unique-id='page-r8f1b46924bf59f0f-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight font-serif text-neutral-100 leading-snug" data-api-unique-id='page-r5cbd2c3111c6921f-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            Entry to Julian Vane <br className="hidden sm:inline" data-api-unique-id='page-re84a850fd102f7be-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
            <span className="italic font-normal text-neutral-300" data-api-unique-id='page-r0fc4c535437b9312-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Studio Archive</span>
          </h2>
          <p className="text-sm font-light leading-relaxed text-neutral-400 max-w-md" data-api-unique-id='page-r5f9478ae6b24f0e7-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            Registration establishes verified client status. Your dossier provides secure access to archival project records, high-resolution contact sheets, and curated print releases.
          </p>
        </div>
      </div>

      {/* Privileges Matrix */}
      <div className="relative z-10 my-10 space-y-6" data-api-unique-id='page-rdd9d7fc00650c590-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        <div className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 font-mono pb-2 border-b border-neutral-800" data-api-unique-id='page-rdee2e541c17dd3f2-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          Studio Archive Entitlements
        </div>
        <div className="grid grid-cols-1 gap-5" data-api-unique-id='page-r7e4934f98aa2388c-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          {privileges.map((item, index) => <div key={item.number} className="group flex items-start gap-4" data-api-unique-id='page-r55e41fa0e2eb6da2-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' data-api-in-loop='1'>
              <span className="font-mono text-xs text-neutral-500 tracking-wider pt-0.5 group-hover:text-neutral-300 transition-colors" data-api-unique-id='page-rd657abf1eefc5914-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' data-api-in-loop='1' data-api-bind-info={`privileges-${index}-number`} data-api-map-var-name='item'>
                [{item.number}]
              </span>
              <div className="space-y-0.5" data-api-unique-id='page-r3078d8b17e09da9e-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' data-api-in-loop='1'>
                <h3 className="text-sm font-medium tracking-wide text-neutral-200" data-api-unique-id='page-rf6e1391058cf94b0-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' data-api-in-loop='1' data-api-bind-info={`privileges-${index}-title`} data-api-map-var-name='item'>
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed" data-api-unique-id='page-r53e5bb47362d21e2-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' data-api-in-loop='1' data-api-bind-info={`privileges-${index}-description`} data-api-map-var-name='item'>
                  {item.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>

      {/* Footer Statement */}
      <div className="relative z-10 pt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500" data-api-unique-id='page-r16d2dac3053cf403-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        <div className="flex items-center gap-2" data-api-unique-id='page-r1acddfe2968219ca-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          <ShieldCheck className="w-4 h-4 text-neutral-400" data-api-unique-id='page-rc73cd22997df20a7-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
          <span data-api-unique-id='page-r4922b2079b8513de-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Monograph Archive Protocol &middot; Edition 2025</span>
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-600" data-api-unique-id='page-r2481610077e24615-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Zurich &middot; London</span>
      </div>
    </div>;
}

/**
 * Register Form Card Component
 * Handles user input, validation, registerClient Server Action submission, and router navigation.
 */
function RegisterFormCard() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const validate = (): boolean => {
    const errs: RegisterFormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required for studio accreditation.";
    }
    if (!formData.username.trim()) {
      errs.username = "Unique archive username is required.";
    } else if (!/^[a-zA-Z0-9._-]+$/.test(formData.username.trim())) {
      errs.username = "Username may only contain letters, numbers, dots, and hyphens.";
    }
    if (!formData.email.trim()) {
      errs.email = "Direct contact email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please provide a valid direct email address.";
    }
    if (!formData.password) {
      errs.password = "Password credential is required.";
    } else if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters in length.";
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Verification password does not match.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleChange = (field: keyof RegisterFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field] || errors.general) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
        general: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) {
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage(null);
    try {
      const result = await registerClient({
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      setSuccessMessage(result.message || "Client credentials established successfully. Directing to sign-in.");

      // Auto-navigate to Client Login page after brief confirmation
      setTimeout(() => {
        ClientLogin.navigateTo(router);
      }, 1200);
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected archive server error occurred.";
      setErrors({
        general: message
      });
      setIsSubmitting(false);
    }
  };
  return <div className="relative p-8 lg:p-12 bg-white text-neutral-900 border border-neutral-200 shadow-sm flex flex-col justify-between" data-api-unique-id='page-r5f892468ac660328-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
      {/* Corner Crop Marks (Darkroom/Editorial framing motif) */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-neutral-400 pointer-events-none" data-api-unique-id='page-r91100bc7aba905e2-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-neutral-400 pointer-events-none" data-api-unique-id='page-r22464efbe7ec417e-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-neutral-400 pointer-events-none" data-api-unique-id='page-ra911420d1c9df022-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-neutral-400 pointer-events-none" data-api-unique-id='page-r10da42d2d21d2441-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />

      <div data-api-unique-id='page-r0bcd7eaed5c8b63b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        {/* Form Title & Role Notice */}
        <div className="mb-8" data-api-unique-id='page-re38095b189787c40-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-neutral-100" data-api-unique-id='page-rd66f3e48d86c4698-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase" data-api-unique-id='page-rfe3ee25219cb0cf8-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              Formulaire 10-B
            </span>
            <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-wider text-neutral-600 bg-neutral-100 border border-neutral-200" data-api-unique-id='page-r95e1f44bbe59158b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              Role: CLIENT
            </span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-light font-serif tracking-tight text-neutral-950" data-api-unique-id='page-rf3b0a792c1d5324b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            Request Studio Credentials
          </h1>
          <p className="mt-2 text-xs text-neutral-500 leading-relaxed" data-api-unique-id='page-r6daf960f4ddee534-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            Registration automatically establishes an account with designated <strong className="font-medium text-neutral-800" data-api-unique-id='page-r7d60c194f73b6ae0-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>CLIENT</strong> permissions. Further institutional details, direct telephone, and portrait assets are maintained via post-login settings.
          </p>
        </div>

        {/* Global Feedback Messages */}
        {errors.general && <div className="mb-6 p-3.5 bg-neutral-50 border-l-2 border-red-600 text-xs text-red-700 leading-relaxed flex items-start gap-2" data-api-unique-id='page-r8314ae0b6f30702c-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1 shrink-0" data-api-unique-id='page-rd876ec7c6935df24-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
            <span data-api-unique-id='page-rd950e577b9a3096f-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{errors.general}</span>
          </div>}

        {successMessage && <div className="mb-6 p-3.5 bg-neutral-950 text-neutral-100 border-l-2 border-emerald-400 text-xs leading-relaxed flex items-center justify-between" data-api-unique-id='page-r84678c0d770550a7-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <div className="flex items-center gap-2" data-api-unique-id='page-rc0b086aef31d42a9-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              <Check className="w-4 h-4 text-emerald-400 shrink-0" data-api-unique-id='page-r1553e197feac77e2-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
              <span data-api-unique-id='page-r904a196f74fddd4f-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{successMessage}</span>
            </div>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest" data-api-unique-id='page-redd2ac05673a9d96-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Routing...</span>
          </div>}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4" data-api-unique-id='page-ra28ab062c04e2172-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          {/* Full Name */}
          <div className="space-y-1.5" data-api-unique-id='page-rcd08e64320e46b1b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <label className="flex items-center justify-between text-xs font-medium tracking-wide text-neutral-700" data-api-unique-id='page-r7bb5a542bdb85b48-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              <span className="flex items-center gap-1.5" data-api-unique-id='page-r8d4944ca1d54425d-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                <User className="w-3.5 h-3.5 text-neutral-400" data-api-unique-id='page-rd1e2faad10ebdd65-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                Full Legal / Representative Name
              </span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase" data-api-unique-id='page-rafde9b2c5b4fd4ce-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Required</span>
            </label>
            <input type="text" name="fullName" autoComplete="name" disabled={isSubmitting || Boolean(successMessage)} placeholder="e.g. Alistair Vance, Curator" value={formData.fullName} onChange={e => handleChange("fullName", e.target.value)} className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50/50 border ${errors.fullName ? "border-red-500 bg-red-50/10 focus:border-red-600" : "border-neutral-200 focus:border-neutral-900"} text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white transition-all font-sans`} data-api-unique-id='page-r7626d59128b2a639-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
            {errors.fullName && <p className="text-[11px] text-red-600 font-sans tracking-tight" data-api-unique-id='page-r1b6f53180617d9e0-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{errors.fullName}</p>}
          </div>

          {/* Username & Email Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='page-r045744654ce52dde-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            {/* Username */}
            <div className="space-y-1.5" data-api-unique-id='page-r9d7e018edfe34723-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              <label className="flex items-center justify-between text-xs font-medium tracking-wide text-neutral-700" data-api-unique-id='page-r5202de3eec3cd3d4-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                <span className="flex items-center gap-1.5" data-api-unique-id='page-r72fa6542592f2998-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                  <Key className="w-3.5 h-3.5 text-neutral-400" data-api-unique-id='page-r9e9702a155ac6dc8-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                  Studio Username
                </span>
              </label>
              <input type="text" name="username" autoComplete="username" disabled={isSubmitting || Boolean(successMessage)} placeholder="vance.archive" value={formData.username} onChange={e => handleChange("username", e.target.value)} className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50/50 border ${errors.username ? "border-red-500 bg-red-50/10 focus:border-red-600" : "border-neutral-200 focus:border-neutral-900"} text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white transition-all font-mono text-xs`} data-api-unique-id='page-r079563919714dde4-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
              {errors.username && <p className="text-[11px] text-red-600 font-sans tracking-tight" data-api-unique-id='page-rd7e3483a8c3e6bb3-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{errors.username}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5" data-api-unique-id='page-ra5bb90935b6b9a73-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              <label className="flex items-center justify-between text-xs font-medium tracking-wide text-neutral-700" data-api-unique-id='page-rb6e2927da78a0ba5-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                <span className="flex items-center gap-1.5" data-api-unique-id='page-r2c2a3169ee9615bf-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                  <Mail className="w-3.5 h-3.5 text-neutral-400" data-api-unique-id='page-rb7a1c0374483af8d-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                  Direct Email
                </span>
              </label>
              <input type="email" name="email" autoComplete="email" disabled={isSubmitting || Boolean(successMessage)} placeholder="curator@fondation-vance.ch" value={formData.email} onChange={e => handleChange("email", e.target.value)} className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50/50 border ${errors.email ? "border-red-500 bg-red-50/10 focus:border-red-600" : "border-neutral-200 focus:border-neutral-900"} text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white transition-all font-sans`} data-api-unique-id='page-rc96df7a13f4d73f3-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
              {errors.email && <p className="text-[11px] text-red-600 font-sans tracking-tight" data-api-unique-id='page-r4f8918050cd9ebc4-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{errors.email}</p>}
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='page-rc84547403f35a1a5-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            {/* Password */}
            <div className="space-y-1.5" data-api-unique-id='page-re5e3a3fb6b22bdca-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              <label className="flex items-center justify-between text-xs font-medium tracking-wide text-neutral-700" data-api-unique-id='page-r4fc34eaae170377a-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                <span className="flex items-center gap-1.5" data-api-unique-id='page-ra64f585a160f39dc-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                  <Lock className="w-3.5 h-3.5 text-neutral-400" data-api-unique-id='page-r02500739493504c8-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                  Password
                </span>
                <span className="text-[10px] text-neutral-400 font-mono" data-api-unique-id='page-rfd0d842a4d1a5532-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Min 6 chars</span>
              </label>
              <input type="password" name="password" autoComplete="new-password" disabled={isSubmitting || Boolean(successMessage)} placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" value={formData.password} onChange={e => handleChange("password", e.target.value)} className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50/50 border ${errors.password ? "border-red-500 bg-red-50/10 focus:border-red-600" : "border-neutral-200 focus:border-neutral-900"} text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white transition-all font-mono`} data-api-unique-id='page-r24486e1b6f4b80e0-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
              {errors.password && <p className="text-[11px] text-red-600 font-sans tracking-tight" data-api-unique-id='page-r3d258460c232adbb-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5" data-api-unique-id='page-r95832dd7c449e426-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              <label className="flex items-center justify-between text-xs font-medium tracking-wide text-neutral-700" data-api-unique-id='page-r11df0ec0e01a54e6-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                <span className="flex items-center gap-1.5" data-api-unique-id='page-re6eb1d993b03ff81-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
                  <Lock className="w-3.5 h-3.5 text-neutral-400" data-api-unique-id='page-rd1974ba76b8b14b4-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                  Confirm Credential
                </span>
              </label>
              <input type="password" name="confirmPassword" autoComplete="new-password" disabled={isSubmitting || Boolean(successMessage)} placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" value={formData.confirmPassword} onChange={e => handleChange("confirmPassword", e.target.value)} className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50/50 border ${errors.confirmPassword ? "border-red-500 bg-red-50/10 focus:border-red-600" : "border-neutral-200 focus:border-neutral-900"} text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white transition-all font-mono`} data-api-unique-id='page-r1617bddffdcd4530-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
              {errors.confirmPassword && <p className="text-[11px] text-red-600 font-sans tracking-tight" data-api-unique-id='page-r6a15d58b75139a50-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Submit Trigger Button */}
          <div className="pt-4" data-api-unique-id='page-rd80fd8bd597afe5d-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <button type="submit" disabled={isSubmitting || Boolean(successMessage)} className="w-full py-3.5 px-6 bg-neutral-950 text-neutral-50 hover:bg-neutral-800 active:bg-black transition-colors font-medium text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-sm" data-api-unique-id='page-rff341f49084c5775-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
              {isSubmitting ? <>
                  <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" data-api-unique-id='page-rb73e0badf8ea27f8-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                  <span data-api-unique-id='page-r68f6d97f38eda8c7-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Transcribing Credentials...</span>
                </> : <>
                  <span data-api-unique-id='page-r008801bb475a171b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Establish Client Access</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" data-api-unique-id='page-rc3b7f63b3a02814b-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
                </>}
            </button>
          </div>
        </form>
      </div>

      {/* Existing Account Prompt (Contextual Switch) */}
      <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500" data-api-unique-id='page-r052a437b174e346f-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        <span className="font-light" data-api-unique-id='page-rf63ad57825ce0f89-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Already hold registered studio credentials?</span>
        <button type="button" onClick={() => ClientLogin.navigateTo(router)} className="text-neutral-950 font-medium hover:underline underline-offset-4 tracking-wide flex items-center gap-1 transition-colors" data-api-unique-id='page-red3ae3f6d984c081-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          <span data-api-unique-id='page-r2811f54a84aa57fa-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>Sign In to Archive</span>
          <ArrowRight className="w-3 h-3" data-api-unique-id='page-rd5a14ad4f96b863c-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
        </button>
      </div>
    </div>;
}

/**
 * Client Registration Main Page
 * Layout: Editorial Monograph Split (Left: Manifesto & Visual; Right: Registration Workspace)
 */
export default function ClientRegisterPage() {
  return <main className="min-h-screen bg-neutral-900/10 py-8 lg:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center selection:bg-neutral-950 selection:text-white" data-api-unique-id='page-rfebbe379d775bd2e-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
      <div className="w-full max-w-6xl mx-auto shadow-2xl bg-neutral-950 border border-neutral-800" data-api-unique-id='page-rd4029d4a5651e51a-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[680px]" data-api-unique-id='page-rc29552617ecbc22f-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
          {/* Left Wing (45% on desktop): Monograph Archive Manifesto */}
          <section className="lg:col-span-5 flex flex-col" data-api-unique-id='page-r8163c9cb2550355a-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <ArchiveManifesto data-api-unique-id='page-r68a30e510a8936f4-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
          </section>

          {/* Right Wing (55% on desktop): Credential Registration Card */}
          <section className="lg:col-span-7 flex flex-col" data-api-unique-id='page-rf27f809a721a36bd-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page'>
            <RegisterFormCard data-api-unique-id='page-r2b6ab7df9aae110d-s4078992025' data-api-unique-page-name='app/(frontend)/clientregister/page' />
          </section>
        </div>
      </div>
    </main>;
}