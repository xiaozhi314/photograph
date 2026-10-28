"use client";

import React, { useEffect, useState } from "react";
import { getServicesTestimonialsPageData } from "@/frontend/actions/ServicesTestimonials";
import type { ServicePackageItem, ClientTestimonialItem } from "@/frontend/types/ServicesTestimonials";
import ServicesHero from "@/frontend/components/ServicesTestimonials/ServicesHero";
import CommissionDisciplines from "@/frontend/components/ServicesTestimonials/CommissionDisciplines";
import ServicePackageDirectory from "@/frontend/components/ServicesTestimonials/ServicePackageDirectory";
import MethodologyTimeline from "@/frontend/components/ServicesTestimonials/MethodologyTimeline";
import TestimonialsArchive from "@/frontend/components/ServicesTestimonials/TestimonialsArchive";
import BespokeInquiryBanner from "@/frontend/components/ServicesTestimonials/BespokeInquiryBanner";
export default function ServicesTestimonialsPage() {
  const [packages, setPackages] = useState<ServicePackageItem[]>([]);
  const [testimonials, setTestimonials] = useState<ClientTestimonialItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const data = await getServicesTestimonialsPageData();
        if (isMounted && data) {
          if (Array.isArray(data.packages) && data.packages.length > 0) {
            setPackages(data.packages);
          }
          if (Array.isArray(data.testimonials) && data.testimonials.length > 0) {
            setTestimonials(data.testimonials);
          }
        }
      } catch {
        // 保留组件内部的初值
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);
  return <div className="min-h-screen bg-[#0e0e0e] text-[#f2f0ea] selection:bg-[#c39b5c] selection:text-black" data-api-unique-id='page-r1935ef04c2a5088b-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page'>
      {/* 1. 暗房委托序言 (全幅沉浸 Hero) */}
      <ServicesHero data-api-unique-id='page-rd913e38603c9915f-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page' />

      {/* 2. 委托业务准则与四大门类 (特写行) */}
      <CommissionDisciplines data-api-unique-id='page-rf5695736971cae1c-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page' />

      {/* 3. 激活委托方案矩阵 (杂志拼贴) */}
      <div id="service-packages" data-api-unique-id='page-r6ddee8dd0f77fabe-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page'>
        <ServicePackageDirectory packages={packages.length > 0 ? packages : undefined} isLoading={isLoading && packages.length === 0} data-api-unique-id='page-r60ee6df0939d1371-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page' />
      </div>

      {/* 4. 订制专著四步工序 (时间线) */}
      <MethodologyTimeline data-api-unique-id='page-rd0fedd3f451e76f5-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page' />

      {/* 5. 藏家与艺术总监评鉴录 (特写行) */}
      <TestimonialsArchive testimonials={testimonials.length > 0 ? testimonials : undefined} isLoading={isLoading && testimonials.length === 0} data-api-unique-id='page-rf6975818290b121f-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page' />

      {/* 6. 开放式定制与多地专著邀约 (全宽深色横带) */}
      <BespokeInquiryBanner data-api-unique-id='page-r333449f8d8a6f3a9-s2614516242' data-api-unique-page-name='app/(frontend)/servicestestimonials/page' />
    </div>;
}