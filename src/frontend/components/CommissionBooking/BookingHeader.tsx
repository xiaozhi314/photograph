"use client";

import React from "react";
import { ServicePackageItem } from "@/frontend/types/CommissionBooking";
import { Layers, Sparkles } from "lucide-react";
interface BookingHeaderProps {
  packages: ServicePackageItem[];
  selectedPackageId: string | null;
  onSelectPackage: (packageId: string | null) => void;
}
export default function BookingHeader({
  packages,
  selectedPackageId,
  onSelectPackage
}: BookingHeaderProps) {
  return <header className="space-y-6 border-b border-border pb-8" data-api-unique-id='bookingheader-r98b7a850b6781f9f-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>
      <div className="space-y-2" data-api-unique-id='bookingheader-r9b97602f4e1e4cab-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl" data-api-unique-id='bookingheader-r5bb55fb922355ad0-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>
          Commission Dossier & Intake
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg" data-api-unique-id='bookingheader-rcc119140f1d2002f-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>
          Tailored scheduling for analog silver gelatin plate editions, editorial portraiture, and architectural monographs.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-2" data-api-unique-id='bookingheader-raf6d8fe284dc351e-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>
        {packages.map((pkg, index) => {
        const isSelected = selectedPackageId === pkg.id;
        return <button key={pkg.id} type="button" onClick={() => onSelectPackage(pkg.id)} className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isSelected ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`} data-api-unique-id='bookingheader-r04cd635ad7f312cd-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader' data-api-in-loop='1'>
              <Layers className="h-3.5 w-3.5" data-api-unique-id='bookingheader-r1aa038f9f961132e-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader' data-api-in-loop='1' />
              <span data-api-unique-id='bookingheader-r6025c17b8038fc59-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader' data-api-in-loop='1' data-api-bind-info={`packages-${index}-title`} data-api-map-var-name='pkg'>{pkg.title}</span>
              <span className="opacity-75" data-api-unique-id='bookingheader-rf5e1d1721e2a19a1-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader' data-api-in-loop='1' data-api-bind-info={`packages-${index}-priceDisplay`} data-api-map-var-name='pkg'>· {pkg.priceDisplay}</span>
            </button>;
      })}

        <button type="button" onClick={() => onSelectPackage(null)} className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${selectedPackageId === null ? "bg-primary text-primary-foreground shadow-sm" : "border border-border bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground"}`} data-api-unique-id='bookingheader-r3ee3116f10216190-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>
          <Sparkles className="h-3.5 w-3.5" data-api-unique-id='bookingheader-r9ccb035f415149be-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader' />
          <span data-api-unique-id='bookingheader-r7d7252e6fa8b0122-s1248674217' data-api-unique-page-name='src/frontend/components/CommissionBooking/BookingHeader'>Open Custom Brief (Unbundled)</span>
        </button>
      </div>
    </header>;
}