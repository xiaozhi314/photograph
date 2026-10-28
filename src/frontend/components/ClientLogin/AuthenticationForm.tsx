"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Lock, ShieldCheck, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import { authenticateClient } from "@/frontend/actions/ClientLogin";
import { StudioProofingFeature } from "@/frontend/types/ClientLogin";
import { useUserSession } from "@/tools/FrontendSession";
import { FrontendHome, ClientRegister } from "@/frontend/route-params";
const PROOFING_FEATURES: StudioProofingFeature[] = [{
  id: "feat-1",
  title: "Commission Briefs",
  subtitle: "Direct curatorial intake & bespoke treatment revisions",
  code: "REV.2024"
}, {
  id: "feat-2",
  title: "Gelatin Proofing",
  subtitle: "Inspection scans of 8x10 analog prints in progress",
  code: "400.ISO"
}, {
  id: "feat-3",
  title: "Licensed Deliverables",
  subtitle: "High-bit archive masters & authentication certificates",
  code: "VAULT.SEC"
}];
export default function AuthenticationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    set
  } = useUserSession();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const trimmedAccount = account.trim();
    if (!trimmedAccount) {
      setErrorMessage("Please provide your client username or email address.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your vault access password.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await authenticateClient({
        account: trimmedAccount,
        password
      });
      set({
        token: result.token,
        user_id: result.userId,
        username: result.username,
        email: result.email,
        full_name: result.fullName,
        role: "CLIENT"
      });
      toast.success("Client credentials validated. Accessing portfolio vault...");
      const redirectParam = searchParams.get("redirect");
      // Safe relative redirect check: ^\/(?![\/\\])
      if (redirectParam && /^\/(?![\/\\])/.test(redirectParam)) {
        router.replace(redirectParam);
      } else {
        FrontendHome.navigateTo(router);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Authentication failed. Please verify your credentials.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div data-controller-name="Client Authentication" className="flex flex-col justify-center min-h-full py-8 sm:py-12 px-6 sm:px-10 lg:px-12 bg-background text-foreground" data-api-unique-id='authenticationform-r6485eafa9f555673-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
      <div className="w-full max-w-md mx-auto space-y-8" data-api-unique-id='authenticationform-ra90aaac08afe5d6d-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
        {/* Vault Encryption Status Badge */}
        <div className="flex items-center gap-2" data-api-unique-id='authenticationform-r8d31a7c7f5457407-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono tracking-wider border border-border" data-api-unique-id='authenticationform-rafe184da969521fd-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" data-api-unique-id='authenticationform-r5eaf2f732ca2d6a0-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
            <ShieldCheck className="w-3.5 h-3.5 text-primary" data-api-unique-id='authenticationform-r3428ab12493afeba-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
            <span className="font-medium" data-api-unique-id='authenticationform-r5777389909d0596c-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>VAULT ENCRYPTION ACTIVE · 400 ISO MONOCHROME</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="space-y-2" data-api-unique-id='authenticationform-r1e6cccba5256c2c6-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
          <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-foreground" data-api-unique-id='authenticationform-rb6c5f7113a44dda0-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            Private Portal Access
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed" data-api-unique-id='authenticationform-r202af0da6cecc344-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            Julian Vane Studio client private chamber, bespoke commission tracking & silver gelatin proofing schedule.
          </p>
        </div>

        {/* Error notification banner */}
        {errorMessage && <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-start gap-3" data-api-unique-id='authenticationform-r47a1cb76edf086c0-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-destructive" data-api-unique-id='authenticationform-recdf13b786b67aaf-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
            <div className="space-y-1" data-api-unique-id='authenticationform-r16c60959bd2412b9-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
              <p className="font-medium text-destructive" data-api-unique-id='authenticationform-r8b23db8a3d4d0a6b-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>Verification Notice</p>
              <p className="text-xs text-destructive/90" data-api-unique-id='authenticationform-rd71653739dc26716-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>{errorMessage}</p>
            </div>
          </div>}

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-6" data-api-unique-id='authenticationform-r7ab49bdaad7e3c80-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
          <div className="space-y-4" data-api-unique-id='authenticationform-r8e1f4321df100412-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            <div className="space-y-1.5" data-api-unique-id='authenticationform-r1322eb313e6bb378-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
              <label htmlFor="account-input" className="block text-xs uppercase tracking-wider font-medium text-muted-foreground" data-api-unique-id='authenticationform-r7f46013052279cdf-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                Client Identifier / Email
              </label>
              <div className="relative" data-api-unique-id='authenticationform-r8eb95793682881f6-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                <input id="account-input" data-auto="account" type="text" value={account} onChange={e => setAccount(e.target.value)} placeholder="Enter username or registered email" autoComplete="username" className="w-full px-4 py-3 bg-card text-card-foreground border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors placeholder:text-muted-foreground/60 text-sm" data-api-unique-id='authenticationform-r27975ab88694aebf-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
              </div>
            </div>

            <div className="space-y-1.5" data-api-unique-id='authenticationform-r50e7d51c61d07a6f-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
              <div className="flex items-center justify-between" data-api-unique-id='authenticationform-r39d225be08c06a6e-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                <label htmlFor="password-input" className="block text-xs uppercase tracking-wider font-medium text-muted-foreground" data-api-unique-id='authenticationform-r2ab80002b4859fab-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                  Vault Password
                </label>
                <button type="button" onClick={() => toast.info("Credential recovery request sent to curatorial desk.")} className="text-xs text-primary hover:text-primary/80 transition-colors font-medium" data-api-unique-id='authenticationform-r10ca444259848215-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                  Forgotten credentials?
                </button>
              </div>
              <div className="relative" data-api-unique-id='authenticationform-ra95b4588adc4cfc0-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                <input id="password-input" data-auto="password" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your security password" autoComplete="current-password" className="w-full px-4 py-3 bg-card text-card-foreground border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors placeholder:text-muted-foreground/60 text-sm pr-11" data-api-unique-id='authenticationform-r099e6d0a51f2654a-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1" data-api-unique-id='authenticationform-rca132e893e8bef5e-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                  {showPassword ? <EyeOff className="w-4 h-4 text-muted-foreground" data-api-unique-id='authenticationform-ra7d797fdfb3d5a7e-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' /> : <Eye className="w-4 h-4 text-muted-foreground" data-api-unique-id='authenticationform-rf9f4573a7beafd4a-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />}
                </button>
              </div>
            </div>
          </div>

          <button type="submit" data-auto="submit" disabled={isSubmitting} className="w-full py-3.5 px-6 rounded-md bg-primary text-primary-foreground font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-primary/90 active:bg-primary/80 transition-colors shadow-sm disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" data-api-unique-id='authenticationform-r44bc33b9b7f7505c-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            {isSubmitting ? <span className="flex items-center gap-2" data-api-unique-id='authenticationform-r21d9a0100b7e37e6-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" data-api-unique-id='authenticationform-r40b0f801dec93d0a-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
                <span data-api-unique-id='authenticationform-r12a43edb1c5980cd-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>Authenticating with Vault...</span>
              </span> : <>
                <Lock className="w-4 h-4 text-primary-foreground" data-api-unique-id='authenticationform-r65a7705ece6aba34-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
                <span data-api-unique-id='authenticationform-re80ec46782a2035a-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>Enter Client Portal</span>
                <ArrowRight className="w-4 h-4 text-primary-foreground ml-1" data-api-unique-id='authenticationform-r8db4ea490229672c-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' />
              </>}
          </button>
        </form>

        {/* Darkroom Service Proofing Endorsements */}
        <div className="pt-4 border-t border-border/80" data-api-unique-id='authenticationform-r3c7866f97e7ec484-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-3" data-api-unique-id='authenticationform-r5aa1d1948e97b0c6-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            Atelier Workspace Services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" data-api-unique-id='authenticationform-re253474abca5a8e3-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            {PROOFING_FEATURES.map((feat, index) => <div key={feat.id} className="p-2.5 rounded bg-card text-card-foreground border border-border/60 space-y-1" data-api-unique-id='authenticationform-r2643979a18796ac6-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' data-api-in-loop='1'>
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground" data-api-unique-id='authenticationform-r67465994ae0af1b2-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' data-api-in-loop='1'>
                  <span data-api-unique-id='authenticationform-rcb99c92193b6bf4e-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' data-api-in-loop='1' data-api-bind-info={`PROOFING_FEATURES-${index}-code`} data-api-map-var-name='feat'>{feat.code}</span>
                </div>
                <p className="text-xs font-medium text-card-foreground leading-snug" data-api-unique-id='authenticationform-r4a17f99d3092ba9f-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm' data-api-in-loop='1' data-api-bind-info={`PROOFING_FEATURES-${index}-title`} data-api-map-var-name='feat'>
                  {feat.title}
                </p>
              </div>)}
          </div>
        </div>

        {/* Secondary prompt to registration [F09] */}
        <div className="pt-2 text-center" data-api-unique-id='authenticationform-rcba579f064b130f7-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
          <p className="text-sm text-muted-foreground" data-api-unique-id='authenticationform-ra0a49272f07ba935-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
            New patron or private collector?{" "}
            <button type="button" onClick={() => ClientRegister.navigateTo(router)} className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors" data-api-unique-id='authenticationform-r17ce90d467bb1829-s1672944897' data-api-unique-page-name='src/frontend/components/ClientLogin/AuthenticationForm'>
              Establish Client Account
            </button>
          </p>
        </div>
      </div>
    </div>;
}