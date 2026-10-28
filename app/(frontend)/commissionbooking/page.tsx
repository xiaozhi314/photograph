"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserSession } from "@/tools/FrontendSession";
import { CommissionBooking, ClientPortal } from "@/frontend/route-params";
import { getCommissionBookingInitData, createCommissionInquiry } from "@/frontend/actions/CommissionBooking";
import type { ServicePackageItem, ClientProfile, CommissionInquiryItem, CreateCommissionInquiryInput } from "@/frontend/types/CommissionBooking";
import BookingHeader from "@/frontend/components/CommissionBooking/BookingHeader";
import PackageDossierHero from "@/frontend/components/CommissionBooking/PackageDossierHero";
import CommissionBriefForm from "@/frontend/components/CommissionBooking/CommissionBriefForm";
import InquiryHistoryAside from "@/frontend/components/CommissionBooking/InquiryHistoryAside";
export default function CommissionBookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const routeParams = CommissionBooking.getParams(searchParams);
  const {
    user_id,
    full_name,
    email
  } = useUserSession();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [packages, setPackages] = useState<ServicePackageItem[]>([]);
  const [clientProfile, setClientProfile] = useState<ClientProfile>({
    id: user_id || "",
    fullName: full_name || "Guest Client",
    email: email || "",
    phone: null,
    organization: null,
    avatarUrl: null,
    role: "CLIENT"
  });
  const [recentInquiries, setRecentInquiries] = useState<CommissionInquiryItem[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(routeParams.packageId || null);
  const [isSubmitting, startSubmitting] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const data = await getCommissionBookingInitData();
        if (!isMounted) return;
        if (data.packages && data.packages.length > 0) {
          setPackages(data.packages);
        }
        if (data.clientProfile) {
          setClientProfile(data.clientProfile);
        }
        if (data.recentInquiries) {
          setRecentInquiries(data.recentInquiries);
        }

        // Align package selection with URL param if valid, or keep current
        if (routeParams.packageId) {
          setSelectedPackageId(routeParams.packageId);
        }
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Failed to load commission configuration");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [routeParams.packageId]);
  const handleSelectPackage = (pkgId: string | null) => {
    setSelectedPackageId(pkgId);
    if (pkgId) {
      CommissionBooking.navigateToPackage(router, {
        packageId: pkgId
      });
    } else {
      CommissionBooking.navigateTo(router);
    }
  };
  const selectedPackage = packages.find(p => p.id === selectedPackageId) || null;
  const handleSubmitBrief = async (briefData: CreateCommissionInquiryInput) => {
    setSubmitError(null);
    startSubmitting(async () => {
      try {
        await createCommissionInquiry({
          ...briefData,
          servicePackageId: selectedPackageId
        });
        ClientPortal.navigateTo(router);
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : "Submission failed. Please verify brief parameters.");
      }
    });
  };
  return <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FDFBF7]" data-api-unique-id='page-rcf1224a3f02d9409-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12" data-api-unique-id='page-r74dbee0bb70409fc-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
        {/* Top Header & Package Switcher */}
        <BookingHeader packages={packages} selectedPackageId={selectedPackageId} onSelectPackage={handleSelectPackage} data-api-unique-id='page-refc9091850097cc1-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page' />

        {error && <div className="border border-red-200 bg-red-50/50 p-4 rounded text-sm text-red-800" data-api-unique-id='page-rc3df0db2738f83b1-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
            {error}
          </div>}

        {/* Hero: Package Specifications & Client Credentials */}
        <PackageDossierHero packageItem={selectedPackage} isCustom={!selectedPackage} clientProfile={clientProfile} data-api-unique-id='page-rc418668651f32519-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page' />

        {/* Main Work Surface: Form (7-col) & History (3-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-api-unique-id='page-r49234f24ed4472a9-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
          <div className="lg:col-span-8 order-1" data-api-unique-id='page-r4fdb7cdcb3e23d3f-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
            {submitError && <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-800 rounded" data-api-unique-id='page-re95213b60a960b24-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
                {submitError}
              </div>}
            <CommissionBriefForm selectedPackage={selectedPackage} clientProfile={clientProfile} isSubmitting={isSubmitting} onSubmitBrief={handleSubmitBrief} data-api-unique-id='page-rf96b5cc247c19011-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page' />
          </div>

          <div className="lg:col-span-4 order-2" data-api-unique-id='page-r0e114af975d06bc3-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page'>
            <InquiryHistoryAside inquiries={recentInquiries} data-api-unique-id='page-r265ad567d59e5dba-s677970865' data-api-unique-page-name='app/(frontend)/commissionbooking/page' />
          </div>
        </div>
      </main>
    </div>;
}