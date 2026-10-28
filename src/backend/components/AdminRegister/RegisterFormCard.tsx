"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, User, AtSign, Mail, Lock, ArrowRight, Eye, EyeOff, Camera } from "lucide-react";
import { toast } from "sonner";
import type { RegisterFormData } from "@/backend/types/AdminRegister";
import { registerCuratorAdmin } from "@/backend/actions/AdminRegister";
import { useAdminSession } from "@/tools/BackendSession";
import { AdminLogin } from "@/backend/route-params";
export default function RegisterFormCard() {
  const router = useRouter();
  const {
    set
  } = useAdminSession();
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return {
      score: 0,
      label: "Not entered",
      color: "bg-muted"
    };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    switch (score) {
      case 1:
        return {
          score: 1,
          label: "Weak (Silver Salts)",
          color: "bg-destructive"
        };
      case 2:
        return {
          score: 2,
          label: "Fair (Stop Bath)",
          color: "bg-warning"
        };
      case 3:
        return {
          score: 3,
          label: "Good (Fixer Wash)",
          color: "bg-info"
        };
      case 4:
        return {
          score: 4,
          label: "Archival Grade (Selenium)",
          color: "bg-success"
        };
      default:
        return {
          score: 0,
          label: "Too Short",
          color: "bg-destructive"
        };
    }
  };
  const strength = getPasswordStrength(formData.password);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required for curatorial archives identification.");
      return;
    }
    if (!formData.username.trim()) {
      toast.error("Curator Username handle is required.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("A valid archival contact email is required.");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("Password must contain at least 8 archival security characters.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Secret confirmation does not match original password.");
      return;
    }
    if (!formData.agreedToTerms) {
      toast.error("Please affirm the Curatorial Darkroom Code of Ethics.");
      return;
    }
    setIsSubmitting(true);
    toast.info("Developing credentials in chemical bath...");
    try {
      const output = await registerCuratorAdmin({
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      if (output?.id) {
        set({
          token: output.token || "",
          user_id: output.id,
          username: output.username,
          email: output.email,
          full_name: output.fullName,
          role: "CURATOR_ADMIN"
        });
        toast.success("Curator administrator credentials successfully provisioned! Access granted under CURATOR_ADMIN role.");
        AdminLogin.navigateTo(router);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to provision curator administrator account.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };
  /* Extracted array: _items */
  const _items = [1, 2, 3, 4];
  return <div data-controller-name="Curatorial Administrator Account Provisioning Desk" className="w-full rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm lg:p-8" data-api-unique-id='registerformcard-rb3bdc7a11839134c-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
      {/* Top Banner / Permission Statement */}
      <div className="flex flex-col gap-3 pb-6 border-b border-border" data-api-unique-id='registerformcard-r87baeed6741476fc-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
        <div className="flex items-center justify-between gap-3" data-api-unique-id='registerformcard-r6172f505297170c0-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <div className="flex items-center gap-2" data-api-unique-id='registerformcard-rbf3fd1f5fef33eba-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground" data-api-unique-id='registerformcard-rdd7c009a05281114-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <ShieldCheck className="h-4 w-4" data-api-unique-id='registerformcard-r6c59289527cecef2-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
            </span>
            <div data-api-unique-id='registerformcard-r1d8b55559728d330-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <h2 className="text-base font-semibold tracking-tight text-card-foreground" data-api-unique-id='registerformcard-r1989c85e14648e51-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                Provision Master Curator Credentials
              </h2>
              <p className="text-xs text-muted-foreground" data-api-unique-id='registerformcard-r660ccc141aea5beb-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                Plate Vault administrative induction & catalog authority
              </p>
            </div>
          </div>

          {/* Strict Role Pill - Single Role Policy */}
          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-mono font-medium text-accent-foreground shadow-sm" data-api-unique-id='registerformcard-red219918e67b4d0b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" data-api-unique-id='registerformcard-rd08f3c08a458a4de-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
            CURATOR_ADMIN
          </div>
        </div>

        <div className="rounded-lg bg-secondary/60 p-3 text-xs text-secondary-foreground" data-api-unique-id='registerformcard-r71db37aee1d4faa4-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <p className="leading-relaxed" data-api-unique-id='registerformcard-ra7f2d18f231acca3-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <strong className="font-semibold text-secondary-foreground" data-api-unique-id='registerformcard-rae6c4045a7168e56-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Strict Access Policy:</strong> Administrative registration desk grants permanent <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px] font-semibold" data-api-unique-id='registerformcard-re8a07a5cc32ce689-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>CURATOR_ADMIN</code> access privileges. No multi-role delegation permitted.
          </p>
        </div>
      </div>

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" data-api-unique-id='registerformcard-r9b64cb691fbd9550-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
        {/* Full Name & Username */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-api-unique-id='registerformcard-rd334de3a70e688d3-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <div className="flex flex-col gap-1.5" data-api-unique-id='registerformcard-r908c4707756d5cc6-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <label className="text-xs font-medium text-card-foreground flex items-center justify-between" data-api-unique-id='registerformcard-rbd0f1505a9c82311-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span data-api-unique-id='registerformcard-ra62b92dee553a645-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Archivist Full Name</span>
              <span className="text-[10px] text-muted-foreground" data-api-unique-id='registerformcard-r17608b15f21d8d0f-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Legal / Folio record</span>
            </label>
            <div className="relative" data-api-unique-id='registerformcard-r6e3957ea9cd2f55a-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span className="absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='registerformcard-r867470f3e60def07-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                <User className="h-4 w-4" data-api-unique-id='registerformcard-r4808cb6253bd5756-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              </span>
              <input type="text" required maxLength={180} placeholder="e.g. Julian Vane or Eleanor Finch" value={formData.fullName} onChange={e => setFormData({
              ...formData,
              fullName: e.target.value
            })} className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1" data-api-unique-id='registerformcard-r8e25c6fe4cf1e045-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
            </div>
          </div>

          <div className="flex flex-col gap-1.5" data-api-unique-id='registerformcard-r501fb391720ca35b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <label className="text-xs font-medium text-card-foreground flex items-center justify-between" data-api-unique-id='registerformcard-r4efba8c1b694106d-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span data-api-unique-id='registerformcard-r2290516c7a815bca-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Curator Username Handle</span>
              <span className="text-[10px] text-muted-foreground" data-api-unique-id='registerformcard-r086fc95c5ecea944-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Archive slug</span>
            </label>
            <div className="relative" data-api-unique-id='registerformcard-rf7c5e64699470d9a-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span className="absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='registerformcard-r6aa442cef942dbac-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                <AtSign className="h-4 w-4" data-api-unique-id='registerformcard-rcc47173411aef9bf-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              </span>
              <input type="text" required maxLength={120} placeholder="e.g. archivist_vane" value={formData.username} onChange={e => setFormData({
              ...formData,
              username: e.target.value
            })} className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1" data-api-unique-id='registerformcard-r8c4ad785f17dfc69-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5" data-api-unique-id='registerformcard-r37d683c02e4e2ff4-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <label className="text-xs font-medium text-card-foreground flex items-center justify-between" data-api-unique-id='registerformcard-r34fe1851c0203043-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <span data-api-unique-id='registerformcard-rfb49728f78025e0b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Official Atelier Contact Email</span>
            <span className="text-[10px] text-muted-foreground" data-api-unique-id='registerformcard-r03e4c2559c35677d-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Authentication & inquiry dispatch</span>
          </label>
          <div className="relative" data-api-unique-id='registerformcard-r4e9a0b40343bfa38-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <span className="absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='registerformcard-rd18ff610cf3f7e7c-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <Mail className="h-4 w-4" data-api-unique-id='registerformcard-r65d566b2ed990658-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
            </span>
            <input type="email" required maxLength={255} placeholder="curator@julianvane-studio.com" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1" data-api-unique-id='registerformcard-r00791ebd669c416b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-api-unique-id='registerformcard-rdd1f69ff27697398-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <div className="flex flex-col gap-1.5" data-api-unique-id='registerformcard-rcced35febff4a2a7-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <label className="text-xs font-medium text-card-foreground flex items-center justify-between" data-api-unique-id='registerformcard-r25ebb8fff6aced82-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span data-api-unique-id='registerformcard-rfbeac49d35547069-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Master Vault Key (Password)</span>
              <span className="text-[10px] text-muted-foreground" data-api-unique-id='registerformcard-r1ca23f326f22dc72-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Min. 8 chars</span>
            </label>
            <div className="relative" data-api-unique-id='registerformcard-r0894d9cf8212a904-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span className="absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='registerformcard-r15c8e72fa0a19a6b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                <Lock className="h-4 w-4" data-api-unique-id='registerformcard-rf947570544ae0ae8-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              </span>
              <input type={showPassword ? "text" : "password"} required placeholder="••••••••••••" value={formData.password} onChange={e => setFormData({
              ...formData,
              password: e.target.value
            })} className="w-full rounded-md border border-input bg-background pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 font-mono" data-api-unique-id='registerformcard-r23f4370b208fe896-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground focus-visible:outline-none" tabIndex={-1} data-api-unique-id='registerformcard-r8f46ba83130690e4-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                {showPassword ? <EyeOff className="h-3.5 w-3.5" data-api-unique-id='registerformcard-r6ebd87a796fc13a2-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' /> : <Eye className="h-3.5 w-3.5" data-api-unique-id='registerformcard-rf77e450862400373-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5" data-api-unique-id='registerformcard-r5aee6c1c3d80de68-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <label className="text-xs font-medium text-card-foreground flex items-center justify-between" data-api-unique-id='registerformcard-rcf6c8f0b4a62aa97-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span data-api-unique-id='registerformcard-r799d2cd2df93de58-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Confirm Vault Key</span>
              <span className="text-[10px] text-muted-foreground" data-api-unique-id='registerformcard-rb0ef7b10521cc59a-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Match verification</span>
            </label>
            <div className="relative" data-api-unique-id='registerformcard-r55f6e4f5fa6a8a31-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span className="absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='registerformcard-r630d6a293ce25a1b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                <Lock className="h-4 w-4" data-api-unique-id='registerformcard-r74a30aaeed9fb596-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              </span>
              <input type={showConfirmPassword ? "text" : "password"} required placeholder="••••••••••••" value={formData.confirmPassword} onChange={e => setFormData({
              ...formData,
              confirmPassword: e.target.value
            })} className="w-full rounded-md border border-input bg-background pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 font-mono" data-api-unique-id='registerformcard-refc1c6b5ff7c9805-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground focus-visible:outline-none" tabIndex={-1} data-api-unique-id='registerformcard-rd52da5c1431c6d0f-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
                {showConfirmPassword ? <EyeOff className="h-3.5 w-3.5" data-api-unique-id='registerformcard-r468eed2acc60e65f-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' /> : <Eye className="h-3.5 w-3.5" data-api-unique-id='registerformcard-ra49e2ec02d36f30d-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />}
              </button>
            </div>
          </div>
        </div>

        {/* Password Strength Scale Meter */}
        {formData.password && <div className="flex flex-col gap-1 rounded-md bg-muted p-2.5 text-[11px] text-muted-foreground" data-api-unique-id='registerformcard-re13e56c8830bdfa9-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            <div className="flex items-center justify-between font-mono" data-api-unique-id='registerformcard-r3e23dd42f3a7001e-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              <span data-api-unique-id='registerformcard-r069df18d192512d9-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Cryptographic Bath Purity:</span>
              <span className="font-semibold text-foreground" data-api-unique-id='registerformcard-r89d58be6ea5d38a0-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>{strength.label}</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 pt-1" data-api-unique-id='registerformcard-rdb1eb820b109474a-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
              {_items.map((step, index) => <div key={step} className={`h-1.5 rounded-full transition-colors ${step <= strength.score ? strength.color : "bg-border"}`} data-api-unique-id='registerformcard-r7794e20af5395900-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' data-api-in-loop='1' />)}
            </div>
          </div>}

        {/* Terms Checkbox */}
        <label className="flex items-start gap-2.5 pt-1 text-xs cursor-pointer select-none" data-api-unique-id='registerformcard-rc38673ac9a5cfa2b-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <input type="checkbox" checked={formData.agreedToTerms} onChange={e => setFormData({
          ...formData,
          agreedToTerms: e.target.checked
        })} className="mt-0.5 h-4 w-4 rounded border-input text-primary focus-visible:ring-ring focus-visible:ring-offset-1" data-api-unique-id='registerformcard-r4308939fe0c97d2d-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
          <span className="text-muted-foreground leading-normal" data-api-unique-id='registerformcard-r62a7733e2c5cc646-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
            I accept the <strong className="text-card-foreground font-medium" data-api-unique-id='registerformcard-ra809448d813f00fe-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Darkroom Master Archivist Code</strong>, committing to maintain the authenticity of photographic gelatin prints, client monographs, and negative metadata catalogs.
          </span>
        </label>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting} className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none" data-api-unique-id='registerformcard-r6045b03f661c7f61-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          {isSubmitting ? <>
              <Camera className="h-4 w-4 animate-spin" data-api-unique-id='registerformcard-r4e9cfc22b49a4040-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
              <span data-api-unique-id='registerformcard-rb679560675b149cf-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Developing Credentials in Darkroom...</span>
            </> : <>
              <span data-api-unique-id='registerformcard-r8d72d9970df3f1d8-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Provision Curator Account & Authorize</span>
              <ArrowRight className="h-4 w-4" data-api-unique-id='registerformcard-r58fd71f749fe87bd-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
            </>}
        </button>
      </form>

      {/* Return Navigation to B01 Curator Admin Login desk */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground" data-api-unique-id='registerformcard-r6009bffbd2ecd3cd-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
        <span data-api-unique-id='registerformcard-refa9485636c4d822-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Already hold curatorial credentials?</span>
        <button type="button" onClick={() => AdminLogin.navigateTo(router)} className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring underline underline-offset-4 bg-transparent border-0 p-0 cursor-pointer text-xs" data-api-unique-id='registerformcard-rbfdc14e8eb73d5a4-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>
          <span data-api-unique-id='registerformcard-r37ae8b3caf60738c-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard'>Sign In at Curator Admin Login Desk (B01)</span>
          <ArrowRight className="h-3 w-3" data-api-unique-id='registerformcard-r1f6c298340171ecd-s106152797' data-api-unique-page-name='src/backend/components/AdminRegister/RegisterFormCard' />
        </button>
      </div>
    </div>;
}