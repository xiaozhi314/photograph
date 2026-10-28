"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Eye, EyeOff, Lock, User, AtSign, Mail } from "lucide-react";
import { RegisterFormData, RegisterFormErrors } from "@/frontend/types/ClientRegister";
import { registerClient } from "@/frontend/actions/ClientRegister";
import { ClientLogin } from "@/frontend/route-params";
interface RegisterFormCardProps {
  onSuccess?: () => void;
}
export default function RegisterFormCard({
  onSuccess
}: RegisterFormCardProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const validate = (): boolean => {
    const errs: RegisterFormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required for archival records";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Full name must be at least 2 characters";
    }
    if (!formData.username.trim()) {
      errs.username = "Username is required";
    } else if (formData.username.trim().length < 3) {
      errs.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9._-]+$/.test(formData.username.trim())) {
      errs.username = "Letters, numbers, underscores, dashes or dots only";
    }
    if (!formData.email.trim()) {
      errs.email = "Direct contact email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      errs.password = "Password is required";
    } else if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters in length";
    }
    if (!formData.confirmPassword) {
      errs.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof RegisterFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
        general: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setErrors(prev => ({
      ...prev,
      general: undefined
    }));
    try {
      await registerClient({
        fullName: formData.fullName.trim(),
        username: formData.username.trim(),
        email: formData.email.trim(),
        password: formData.password
      });
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
      setTimeout(() => {
        ClientLogin.navigateTo(router);
      }, 1400);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to register credentials. Please try again.";
      setErrors(prev => ({
        ...prev,
        general: errorMessage
      }));
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div data-controller-name="Client Credential Registration Form" className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10 text-card-foreground shadow-sm" data-api-unique-id='registerformcard-r197abecfabbbe113-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
      {/* Darkroom Registration Framing Accents / Subtle Crop Marks */}
      <div className="pointer-events-none absolute -top-1.5 -left-1.5 h-3.5 w-3.5 border-t-2 border-l-2 border-primary/40" data-api-unique-id='registerformcard-r4db71955f3e6b19c-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
      <div className="pointer-events-none absolute -top-1.5 -right-1.5 h-3.5 w-3.5 border-t-2 border-r-2 border-primary/40" data-api-unique-id='registerformcard-r4687cb519d2cdd98-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
      <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 border-b-2 border-l-2 border-primary/40" data-api-unique-id='registerformcard-rfb98aa54eb9730f5-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
      <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 border-b-2 border-r-2 border-primary/40" data-api-unique-id='registerformcard-rd2452c19f85adf06-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />

      {/* Header Block */}
      <div className="mb-6 space-y-2 border-b border-border/70 pb-5" data-api-unique-id='registerformcard-r14bb3d21f10bb012-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
        <div className="flex flex-wrap items-center justify-between gap-2" data-api-unique-id='registerformcard-r2abd7d8db18cafb6-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          <span className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground" data-api-unique-id='registerformcard-r28559f0044c9c845-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            Form Ref: JV-REG-F09
          </span>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground" data-api-unique-id='registerformcard-r09dd3f154073eaf2-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            <ShieldCheck className="h-3.5 w-3.5 text-primary" data-api-unique-id='registerformcard-rfa780d80767a7949-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
            <span data-api-unique-id='registerformcard-rd771824e7c48ab1d-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Automatic CLIENT Role Tier</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-card-foreground" data-api-unique-id='registerformcard-r0744fd6149faabf1-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          Request Studio Credentials
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed" data-api-unique-id='registerformcard-r224754b235ecf165-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          Establish client access to Julian Vane Studio archives, private contact sheets, and commission records.
        </p>
      </div>

      {/* General Error Banner */}
      {errors.general && <div className="mb-5 rounded-lg border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive flex items-center gap-2" data-api-unique-id='registerformcard-r0af7a7f659de22ed-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          <AlertCircle className="h-4 w-4 shrink-0" data-api-unique-id='registerformcard-raf9bcad6ed8823d3-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
          <span data-api-unique-id='registerformcard-r01846b4a97465b79-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>{errors.general}</span>
        </div>}

      {/* Success Notification Banner */}
      {isSuccess ? <div className="rounded-xl border border-success/30 bg-success/10 p-5 text-center text-card-foreground" data-api-unique-id='registerformcard-r060fca91a94a2494-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          <CheckCircle2 className="mx-auto mb-2 h-7 w-7 text-success" data-api-unique-id='registerformcard-r228b4c8c17458c0f-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
          <h2 className="text-base font-semibold text-success" data-api-unique-id='registerformcard-rd232cf8d517580a6-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            Credentials Registered Successfully
          </h2>
          <p className="mt-1 text-xs text-muted-foreground" data-api-unique-id='registerformcard-r894c22282ed08585-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            Account established with verified CLIENT authorization. Redirecting to Client Sign In (F08)...
          </p>
        </div> : <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" data-api-unique-id='registerformcard-r5526091bd341030e-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          {/* Full Name */}
          <div className="space-y-1.5" data-api-unique-id='registerformcard-r576c7c7653560d58-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            <label htmlFor="fullName" className="flex items-center justify-between text-xs font-medium tracking-wide uppercase text-card-foreground" data-api-unique-id='registerformcard-r01d50fedf64f2587-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
              <span data-api-unique-id='registerformcard-r37c0b0a5782aa0e8-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Full Name</span>
              <span className="text-[11px] text-muted-foreground font-normal" data-api-unique-id='registerformcard-r3102301d0a388980-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Legal / Studio Patron</span>
            </label>
            <div className="relative" data-api-unique-id='registerformcard-rf9b9f00ff823aa9d-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground" data-api-unique-id='registerformcard-rdb8df90cf2b1d333-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <User className="h-4 w-4" data-api-unique-id='registerformcard-rca69c3650d0416f9-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
              </div>
              <input id="fullName" name="fullName" type="text" autoComplete="name" value={formData.fullName} onChange={handleChange} placeholder="Eleanor Vance" className={`w-full rounded-lg border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.fullName ? "border-destructive ring-1 ring-destructive" : "border-input"}`} data-api-unique-id='registerformcard-r8577a1f1db93cce9-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
            </div>
            {errors.fullName && <p className="flex items-center gap-1 text-[11px] text-destructive" data-api-unique-id='registerformcard-r8ff3701409d9386b-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <AlertCircle className="h-3 w-3 shrink-0" data-api-unique-id='registerformcard-r77b290eccf46dc8b-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                <span data-api-unique-id='registerformcard-rff812c026cf4c4f0-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>{errors.fullName}</span>
              </p>}
          </div>

          {/* Username & Email Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-api-unique-id='registerformcard-re66bc5e338eb76ae-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            {/* Username */}
            <div className="space-y-1.5" data-api-unique-id='registerformcard-r40ad7bdcab940ad3-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
              <label htmlFor="username" className="flex items-center justify-between text-xs font-medium tracking-wide uppercase text-card-foreground" data-api-unique-id='registerformcard-r6f46b22ae10b25bb-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <span data-api-unique-id='registerformcard-r34864e675d902ece-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Unique Username</span>
              </label>
              <div className="relative" data-api-unique-id='registerformcard-r21969a9d8f87f7df-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground" data-api-unique-id='registerformcard-r2277ee847a525d79-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <AtSign className="h-4 w-4" data-api-unique-id='registerformcard-r8a670aa3b527aa85-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                </div>
                <input id="username" name="username" type="text" autoComplete="username" value={formData.username} onChange={handleChange} placeholder="vance.curatorial" className={`w-full rounded-lg border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.username ? "border-destructive ring-1 ring-destructive" : "border-input"}`} data-api-unique-id='registerformcard-r0d4edef0f5ded93e-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
              </div>
              {errors.username && <p className="flex items-center gap-1 text-[11px] text-destructive" data-api-unique-id='registerformcard-r64ffc5aa19e52f5b-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <AlertCircle className="h-3 w-3 shrink-0" data-api-unique-id='registerformcard-r7636ecb00b1ef629-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                  <span data-api-unique-id='registerformcard-r9d4082b5d010f2ac-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>{errors.username}</span>
                </p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5" data-api-unique-id='registerformcard-r546e77570ae80172-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
              <label htmlFor="email" className="flex items-center justify-between text-xs font-medium tracking-wide uppercase text-card-foreground" data-api-unique-id='registerformcard-rc7d578ff46a2bd99-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <span data-api-unique-id='registerformcard-r810d33ea65b0432e-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Direct Contact Email</span>
              </label>
              <div className="relative" data-api-unique-id='registerformcard-rd89792a90ece1493-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground" data-api-unique-id='registerformcard-r601acd073641292d-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <Mail className="h-4 w-4" data-api-unique-id='registerformcard-r8f3f85745bdba1f8-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="eleanor@vancearts.com" className={`w-full rounded-lg border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.email ? "border-destructive ring-1 ring-destructive" : "border-input"}`} data-api-unique-id='registerformcard-r10ab3fce276e66cf-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
              </div>
              {errors.email && <p className="flex items-center gap-1 text-[11px] text-destructive" data-api-unique-id='registerformcard-r02a84c463704b31f-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <AlertCircle className="h-3 w-3 shrink-0" data-api-unique-id='registerformcard-rd099c1f1ff632410-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                  <span data-api-unique-id='registerformcard-rf5ac3a1553b41bb4-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>{errors.email}</span>
                </p>}
            </div>
          </div>

          {/* Password & Confirm Password Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-api-unique-id='registerformcard-rcd2b99a905f6bf75-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            {/* Password */}
            <div className="space-y-1.5" data-api-unique-id='registerformcard-r5c5d1bd7fe8cd69a-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
              <label htmlFor="password" className="flex items-center justify-between text-xs font-medium tracking-wide uppercase text-card-foreground" data-api-unique-id='registerformcard-r9d3c551c7cb132be-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <span data-api-unique-id='registerformcard-ra468bfc2b1f6fdd7-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Password</span>
                <span className="text-[11px] text-muted-foreground font-normal" data-api-unique-id='registerformcard-r692d633903f1a860-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>≥ 6 chars</span>
              </label>
              <div className="relative" data-api-unique-id='registerformcard-ra7a3796cc5b382e9-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground" data-api-unique-id='registerformcard-r30b99b5c50b46f54-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <Lock className="h-4 w-4" data-api-unique-id='registerformcard-r335f3d345ea2fc52-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                </div>
                <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" value={formData.password} onChange={handleChange} placeholder="••••••••" className={`w-full rounded-lg border bg-background pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.password ? "border-destructive ring-1 ring-destructive" : "border-input"}`} data-api-unique-id='registerformcard-r9149004d5586cc10-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-r-lg" data-api-unique-id='registerformcard-r01f440a61f4af142-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  {showPassword ? <EyeOff className="h-4 w-4" data-api-unique-id='registerformcard-r9a5d2098b01a3171-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' /> : <Eye className="h-4 w-4" data-api-unique-id='registerformcard-reaebbea6e33752af-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />}
                </button>
              </div>
              {errors.password && <p className="flex items-center gap-1 text-[11px] text-destructive" data-api-unique-id='registerformcard-r6967848bcec425d4-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <AlertCircle className="h-3 w-3 shrink-0" data-api-unique-id='registerformcard-rf315d0059eff78c6-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                  <span data-api-unique-id='registerformcard-rb431ad8555bba485-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>{errors.password}</span>
                </p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5" data-api-unique-id='registerformcard-rd5c3781df8b01821-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
              <label htmlFor="confirmPassword" className="flex items-center justify-between text-xs font-medium tracking-wide uppercase text-card-foreground" data-api-unique-id='registerformcard-r2c73f960a5385950-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <span data-api-unique-id='registerformcard-rf9b8b5b8eecfe153-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Confirm Password</span>
              </label>
              <div className="relative" data-api-unique-id='registerformcard-r2914f6b2d8568779-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground" data-api-unique-id='registerformcard-rfc8cb479b1111f01-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <Lock className="h-4 w-4" data-api-unique-id='registerformcard-r6e7e5a4b2f779f10-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                </div>
                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} autoComplete="new-password" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" className={`w-full rounded-lg border bg-background pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.confirmPassword ? "border-destructive ring-1 ring-destructive" : "border-input"}`} data-api-unique-id='registerformcard-rb7f0c7d57ef57ff3-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"} className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-r-lg" data-api-unique-id='registerformcard-rc0995b5fc40f16f8-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" data-api-unique-id='registerformcard-r5fef7bc6c4604cb3-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' /> : <Eye className="h-4 w-4" data-api-unique-id='registerformcard-r5288c8242f5f517d-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />}
                </button>
              </div>
              {errors.confirmPassword && <p className="flex items-center gap-1 text-[11px] text-destructive" data-api-unique-id='registerformcard-ra17878408a437e1d-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
                  <AlertCircle className="h-3 w-3 shrink-0" data-api-unique-id='registerformcard-rcabbb0a9c795129d-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
                  <span data-api-unique-id='registerformcard-r963b3ed7d4dfe8bb-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>{errors.confirmPassword}</span>
                </p>}
            </div>
          </div>

          {/* Role Exemption Notice */}
          <div className="rounded-lg border border-border/80 bg-muted/60 p-3 text-[11px] text-muted-foreground leading-relaxed" data-api-unique-id='registerformcard-r97058fdf525b6240-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            <span className="font-semibold text-foreground" data-api-unique-id='registerformcard-r26f7b2f91864d275-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Archival Notice:</span> Registration
            creates a dedicated <span className="font-mono text-primary font-medium" data-api-unique-id='registerformcard-rf0c0ad9f23877de8-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>CLIENT</span> credential profile. Organization affiliations, studio inquiry briefs, direct phone access, and folio delivery addresses are configured in client settings following authentication.
          </div>

          {/* Submit Trigger */}
          <button type="submit" disabled={isSubmitting} className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60" data-api-unique-id='registerformcard-r12cf724a612051cc-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            {isSubmitting ? <span data-api-unique-id='registerformcard-r4edb2c9b87637971-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Establishing Credentials...</span> : <>
                <span data-api-unique-id='registerformcard-r77b29578c3edd12b-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>Establish Client Access</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-api-unique-id='registerformcard-re43fb6066ed3a5d6-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard' />
              </>}
          </button>
        </form>}

      {/* Existing Account Prompt (F08 Navigation) */}
      <div className="mt-8 border-t border-border/70 pt-5 text-center" data-api-unique-id='registerformcard-r040516dd67c69ebb-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
        <p className="text-xs text-muted-foreground" data-api-unique-id='registerformcard-r77528ad3c24d6ae5-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
          Already hold studio credentials?{" "}
          <button type="button" onClick={() => ClientLogin.navigateTo(router)} className="font-medium text-primary hover:text-primary-hover underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm transition-colors cursor-pointer bg-transparent border-none p-0 inline" data-api-unique-id='registerformcard-r4c74e590049a3171-s3041206376' data-api-unique-page-name='src/frontend/components/ClientRegister/RegisterFormCard'>
            Sign In to Archive
          </button>
        </p>
      </div>
    </div>;
}