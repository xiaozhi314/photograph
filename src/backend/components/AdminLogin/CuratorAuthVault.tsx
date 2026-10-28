"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { projectLogo } from "@/lib/generated-images/project-logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Lock, User, AlertCircle, ArrowRight, Eye, EyeOff } from "lucide-react";
import type { CuratorAuthFeedback } from "@/backend/types/AdminLogin";
import { loginCuratorAdmin } from "@/backend/actions/AdminLogin";
import { useAdminSession } from "@/tools/BackendSession";
import { AdminHome, AdminRegister } from "@/backend/route-params";
interface CuratorAuthVaultProps {
  onLoginAttempt?: (account: string, pass: string) => Promise<boolean>;
}
export default function CuratorAuthVault({
  onLoginAttempt
}: CuratorAuthVaultProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    set
  } = useAdminSession();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState<CuratorAuthFeedback>({
    type: "idle"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedAccount = account.trim();
    const trimmedPassword = password.trim();
    if (!trimmedAccount || !trimmedPassword) {
      setFeedback({
        type: "error",
        message: "Please enter both curator identifier and security password."
      });
      return;
    }
    setIsSubmitting(true);
    setFeedback({
      type: "validating",
      message: "Verifying studio curator credentials..."
    });
    try {
      if (onLoginAttempt) {
        const success = await onLoginAttempt(trimmedAccount, trimmedPassword);
        if (!success) {
          setFeedback({
            type: "error",
            message: "Authentication failed. Unauthorized curator credentials."
          });
          setIsSubmitting(false);
          return;
        }
      }
      const res = await loginCuratorAdmin({
        account: trimmedAccount,
        password: trimmedPassword
      });
      set({
        token: res.token,
        user_id: res.userId,
        username: res.username,
        email: res.email,
        full_name: res.fullName,
        role: "CURATOR_ADMIN"
      });
      setFeedback({
        type: "idle"
      });
      const redirect = searchParams?.get("redirect");
      if (redirect && /^\/(?![/\\])/.test(redirect)) {
        router.replace(redirect);
      } else {
        AdminHome.navigateTo(router);
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Authentication failed. Unauthorized curator credentials.";
      setFeedback({
        type: "error",
        message: errorMsg
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div data-controller-name="Curator Authentication Vault" className="w-full max-w-md mx-auto" data-api-unique-id='curatorauthvault-ra48ccb515131baf1-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
      <div className="relative rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300" data-api-unique-id='curatorauthvault-r785ea909edda1fb5-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
        {/* Darkroom Safelight Pip */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-muted-foreground" data-api-unique-id='curatorauthvault-r848999d719b8ebcd-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
          <span className={`h-2 w-2 rounded-full transition-all duration-500 ${isFocused ? "bg-destructive animate-pulse ring-4 ring-destructive/20" : "bg-muted-foreground/40"}`} title="Darkroom Safelight Indicator" data-api-unique-id='curatorauthvault-r634ff0f91e63115a-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
          <span className="font-mono text-[10px] tracking-wider uppercase" data-api-unique-id='curatorauthvault-r8be5b1e5fda81c7c-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            {isFocused ? "Active" : "Secure"}
          </span>
        </div>

        {/* Studio Insignia and Brand Portal Header */}
        <div className="flex flex-col items-center text-center mb-6" data-api-unique-id='curatorauthvault-ra66a248adb1f31d5-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
          <div className="relative w-14 h-14 rounded-xl border border-border bg-muted flex items-center justify-center p-2.5 mb-3 shadow-inner" data-api-unique-id='curatorauthvault-rf88390860e257142-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            <Image src={projectLogo} alt="Julian Vane Studio Darkroom Insignia" fill className="object-contain p-2" priority data-api-unique-id='curatorauthvault-r12c55872ccd9a65c-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
          </div>
          <div className="space-y-1" data-api-unique-id='curatorauthvault-rbdc8e18adae42d3c-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            <span className="text-[11px] font-mono tracking-widest text-primary uppercase font-semibold" data-api-unique-id='curatorauthvault-r49d0d3455649d019-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              Julian Vane Studio
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-card-foreground" data-api-unique-id='curatorauthvault-r8db5947af4642d6b-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              Curatorial Vault Access
            </h1>
            <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed" data-api-unique-id='curatorauthvault-rd5727e05061b0aaf-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              Curatorial desk restricted strictly to verified studio administrators and curators.
            </p>
          </div>
        </div>

        {/* Security Policy Advisory Strip */}
        <div className="mb-5 rounded-lg border border-border/70 bg-muted/50 p-2.5 text-left flex items-start gap-2.5" data-api-unique-id='curatorauthvault-rdfcba08dd7c43c80-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
          <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" data-api-unique-id='curatorauthvault-rf83316a8e2dc11ea-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
          <div className="min-w-0 flex-1" data-api-unique-id='curatorauthvault-rbd6074b473a32e28-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            <p className="text-[11px] text-muted-foreground leading-snug" data-api-unique-id='curatorauthvault-r45a777e0e85cde22-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              Single-role access enforced. All sign-in tokens bind exclusively to the{" "}
              <strong className="text-card-foreground font-semibold" data-api-unique-id='curatorauthvault-r7eb9f75b2c3a6d0f-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>CURATOR_ADMIN</strong> authority role.
            </p>
          </div>
        </div>

        {/* Credential Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-4" data-api-unique-id='curatorauthvault-rece110d285253bb5-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
          <div className="space-y-1.5 text-left" data-api-unique-id='curatorauthvault-r7bb12344a562bb1f-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            <label htmlFor="curator-identifier" className="block text-xs font-medium text-card-foreground" data-api-unique-id='curatorauthvault-rdceaff8b55545840-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              Curator Identifier or Email
            </label>
            <div className="relative" data-api-unique-id='curatorauthvault-r6a7d40c31f453a0b-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground" data-api-unique-id='curatorauthvault-rdcb022c25e07de03-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                <User className="h-4 w-4" data-api-unique-id='curatorauthvault-ra10d24ba4ba935e3-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
              </span>
              <Input id="curator-identifier" data-auto="account" type="text" value={account} onChange={e => setAccount(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="Username or studio email" autoComplete="username" required className="pl-9 h-10 text-xs sm:text-sm bg-background text-foreground border-border focus-visible:ring-primary" data-api-unique-id='curatorauthvault-r11067b112fe992e2-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
            </div>
          </div>

          <div className="space-y-1.5 text-left" data-api-unique-id='curatorauthvault-r3cc8b0626a410eef-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            <div className="flex items-center justify-between" data-api-unique-id='curatorauthvault-r58bf7c581ec095c1-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              <label htmlFor="curator-password" className="block text-xs font-medium text-card-foreground" data-api-unique-id='curatorauthvault-r101f648343be9a1f-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                Security Password
              </label>
            </div>
            <div className="relative" data-api-unique-id='curatorauthvault-rfb815595c6bca926-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground" data-api-unique-id='curatorauthvault-rdbcb8ae6435f2ea1-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                <Lock className="h-4 w-4" data-api-unique-id='curatorauthvault-rec9f6dc991bdfaeb-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
              </span>
              <Input id="curator-password" data-auto="password" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="Enter password" autoComplete="current-password" required className="pl-9 pr-9 h-10 text-xs sm:text-sm bg-background text-foreground border-border focus-visible:ring-primary" data-api-unique-id='curatorauthvault-r78c7f9d207572c6e-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none" tabIndex={-1} aria-label={showPassword ? "Hide password" : "Show password"} data-api-unique-id='curatorauthvault-r64ce697b5c37dd9c-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                {showPassword ? <EyeOff className="h-4 w-4" data-api-unique-id='curatorauthvault-r4a60d255e13f91e3-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' /> : <Eye className="h-4 w-4" data-api-unique-id='curatorauthvault-r86c835f2a58e877f-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />}
              </button>
            </div>
          </div>

          {/* Inline Error and Validation Feedback Slot (stable height to prevent card jitter) */}
          <div className="min-h-[22px] flex items-center" data-api-unique-id='curatorauthvault-r6d96b48d43d6f2ec-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            {feedback.type === "error" && <div className="flex items-center gap-1.5 text-xs text-destructive animate-in fade-in duration-200" role="alert" data-api-unique-id='curatorauthvault-r2aa5abe257f79b01-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                <AlertCircle className="w-3.5 h-3.5 shrink-0" data-api-unique-id='curatorauthvault-r55ffee99f310aacf-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
                <span className="truncate" data-api-unique-id='curatorauthvault-rdccc02d632e50ca9-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>{feedback.message}</span>
              </div>}
            {feedback.type === "validating" && <div className="flex items-center gap-1.5 text-xs text-muted-foreground animate-in fade-in duration-200" data-api-unique-id='curatorauthvault-r7c7c77fb84627dfa-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" data-api-unique-id='curatorauthvault-r1fa172c85a3772b9-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
                <span className="truncate" data-api-unique-id='curatorauthvault-re6fca1d00a1da4a3-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>{feedback.message}</span>
              </div>}
          </div>

          {/* Submit Action */}
          <Button type="submit" data-auto="submit" disabled={isSubmitting} className="w-full h-10 text-xs sm:text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md active:bg-primary/80" data-api-unique-id='curatorauthvault-r332dcd6e7c574a99-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            {isSubmitting ? <span className="flex items-center justify-center gap-2" data-api-unique-id='curatorauthvault-rf5304de8e247ba69-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                <span className="h-3.5 w-3.5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" data-api-unique-id='curatorauthvault-ra0596eb2b4cc12de-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
                Validating Vault Key...
              </span> : <span className="flex items-center justify-center gap-1.5" data-api-unique-id='curatorauthvault-r39ec24957ffb58b1-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
                Unlock Curatorial Desk
                <ArrowRight className="w-4 h-4 ml-0.5" data-api-unique-id='curatorauthvault-rc68b10785ae34ea9-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault' />
              </span>}
          </Button>
        </form>

        {/* Navigation to Registration Desk (B02) */}
        <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" data-api-unique-id='curatorauthvault-r27d8e0e322696f15-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
          <span className="text-muted-foreground" data-api-unique-id='curatorauthvault-ra6687f57a07a2807-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>New atelier curator?</span>
          <button type="button" onClick={() => AdminRegister.navigateTo(router)} className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary-hover hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" data-api-unique-id='curatorauthvault-r50ae2b27723c3860-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
            Register New Curator
            <span aria-hidden="true" data-api-unique-id='curatorauthvault-rc09c62ed706e34bc-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Baseline Atelier Technical Status */}
      <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-muted-foreground" data-api-unique-id='curatorauthvault-r38579a64322235ad-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>
        <span className="font-mono" data-api-unique-id='curatorauthvault-rec705d02c4ffd6f5-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>Darkroom Node: B01</span>
        <span data-api-unique-id='curatorauthvault-r306bf565d50833b2-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>•</span>
        <span className="font-mono" data-api-unique-id='curatorauthvault-r29befbb876a7c7f2-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>Vault TLS 1.3</span>
        <span data-api-unique-id='curatorauthvault-r5853079e580224a4-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>•</span>
        <span data-api-unique-id='curatorauthvault-r6ce7e4a00dd0246e-s3345573769' data-api-unique-page-name='src/backend/components/AdminLogin/CuratorAuthVault'>Station [B03 Ready]</span>
      </div>
    </div>;
}