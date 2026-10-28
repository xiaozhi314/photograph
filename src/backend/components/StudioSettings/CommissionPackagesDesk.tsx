"use client";

import React, { useState } from "react";
import { Plus, Search, Clock, CheckCircle2, CircleDashed, Edit3, Trash2, X } from "lucide-react";
import { ServicePackageItem, ServiceType } from "@/backend/types/StudioSettings";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
interface CommissionPackagesDeskProps {
  packages: ServicePackageItem[];
  onSavePackage: (pkg: ServicePackageItem) => void;
  onToggleActive: (id: string) => void;
  onDeletePackage: (id: string) => void;
}
const SERVICE_TYPE_CONFIG: Record<ServiceType, {
  label: string;
  badgeClass: string;
}> = {
  ARCHITECTURAL_MONOGRAPH: {
    label: "Architectural Monograph",
    badgeClass: "bg-accent text-accent-foreground"
  },
  EDITORIAL_PORTRAITURE: {
    label: "Editorial Portraiture",
    badgeClass: "bg-primary text-primary-foreground"
  },
  COMMERCIAL_CAMPAIGN: {
    label: "Commercial Campaign",
    badgeClass: "bg-info text-info-foreground"
  },
  PRINT_ACQUISITION: {
    label: "Print Acquisition",
    badgeClass: "bg-success text-success-foreground"
  }
};
const STANDARD_DELIVERABLES = ["8x10 Contact Sheets", "Silver Gelatin Master Print (16x20)", "Archival Linen Portfolio Box", "16-bit 3200DPI TIFF Raw Scan", "Museum Grade Certificate of Authenticity", "Custom Monograph Layout Book", "Platinum/Palladium Hand-Crafted Proof", "Artist Direct Curatorial Consultation"];
export default function CommissionPackagesDesk({
  packages,
  onSavePackage,
  onToggleActive,
  onDeletePackage
}: CommissionPackagesDeskProps) {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<ServicePackageItem | null>(null);

  // Form fields
  const [formTitle, setFormTitle] = useState("");
  const [formServiceType, setFormServiceType] = useState<ServiceType>("ARCHITECTURAL_MONOGRAPH");
  const [formBasePrice, setFormBasePrice] = useState<number>(5000);
  const [formPriceDisplay, setFormPriceDisplay] = useState("$5,000 – $10,000");
  const [formDuration, setFormDuration] = useState("4–6 Weeks Turnaround");
  const [formDeliverables, setFormDeliverables] = useState<string[]>([]);
  const [formNewDeliverableInput, setFormNewDeliverableInput] = useState("");
  const [formIsActive, setFormIsActive] = useState(true);
  const [formSortOrder, setFormSortOrder] = useState(10);
  const filteredPackages = packages.filter(pkg => {
    const matchesType = filterType === "ALL" || pkg.serviceType === filterType;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || pkg.priceDisplay.toLowerCase().includes(searchQuery.toLowerCase()) || pkg.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });
  const handleOpenDrawer = (pkg?: ServicePackageItem) => {
    if (pkg) {
      setEditingPackage(pkg);
      setFormTitle(pkg.title);
      setFormServiceType(pkg.serviceType);
      setFormBasePrice(pkg.basePrice);
      setFormPriceDisplay(pkg.priceDisplay);
      setFormDuration(pkg.durationEstimate);
      setFormDeliverables([...pkg.deliverables]);
      setFormIsActive(pkg.isActive);
      setFormSortOrder(pkg.sortOrder);
    } else {
      setEditingPackage(null);
      setFormTitle("");
      setFormServiceType("ARCHITECTURAL_MONOGRAPH");
      setFormBasePrice(4500);
      setFormPriceDisplay("$4,500 – $8,500");
      setFormDuration("3–5 Weeks Turnaround");
      setFormDeliverables(["8x10 Contact Sheets", "Silver Gelatin Master Print (16x20)", "Archival Linen Portfolio Box"]);
      setFormIsActive(true);
      setFormSortOrder(packages.length ? Math.max(...packages.map((p, index) => p.sortOrder)) + 10 : 10);
    }
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEditingPackage(null);
  };
  const handleAddDeliverable = (item: string) => {
    const trimmed = item.trim();
    if (trimmed && !formDeliverables.includes(trimmed)) {
      setFormDeliverables([...formDeliverables, trimmed]);
      setFormNewDeliverableInput("");
    }
  };
  const handleRemoveDeliverable = (itemToRemove: string) => {
    setFormDeliverables(formDeliverables.filter(d => d !== itemToRemove));
  };
  const handleSaveDrawer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      toast.error("Package title is required");
      return;
    }
    const payload: ServicePackageItem = {
      id: editingPackage ? editingPackage.id : `sp_${Date.now()}`,
      title: formTitle.trim(),
      serviceType: formServiceType,
      basePrice: Number(formBasePrice),
      priceDisplay: formPriceDisplay.trim() || `$${formBasePrice}`,
      durationEstimate: formDuration.trim() || "3–4 Weeks",
      deliverables: formDeliverables.length > 0 ? formDeliverables : ["Archival Silver Gelatin Print"],
      isActive: formIsActive,
      sortOrder: Number(formSortOrder) || 10,
      createdAt: editingPackage ? editingPackage.createdAt : new Date(),
      updatedAt: new Date()
    };
    onSavePackage(payload);
    handleCloseDrawer();
  };
  const handleToggleActiveClick = (pkg: ServicePackageItem) => {
    onToggleActive(pkg.id);
  };
  return <section data-controller-name="Commission Packages Desk" className="w-full rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden" data-api-unique-id='commissionpackagesdesk-r1cc9e576076cef51-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
      {/* Header & Desk Controls */}
      <div className="border-b border-border p-4 lg:p-6 flex flex-col gap-4" data-api-unique-id='commissionpackagesdesk-ra4f58b4a58ab1382-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-w-0" data-api-unique-id='commissionpackagesdesk-rde47b60cb83e357e-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
          <div className="min-w-0" data-api-unique-id='commissionpackagesdesk-rea24bea3a4145485-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            <div className="flex items-center gap-2" data-api-unique-id='commissionpackagesdesk-r5152a82025f5013d-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              <h2 className="text-xl font-bold tracking-tight" data-api-unique-id='commissionpackagesdesk-r97945309c12c3205-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Commission Services & Pricing Tiers</h2>
              <span className="inline-flex shrink-0 items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-muted text-muted-foreground border border-border" data-api-unique-id='commissionpackagesdesk-r57832825808c8ae3-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                {packages.length} Tier{packages.length !== 1 ? "s" : ""}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1" data-api-unique-id='commissionpackagesdesk-re39b422efaf14b36-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              Curate commercial, architectural, and bespoke darkroom monographs offered to collectors and institutions.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0" data-api-unique-id='commissionpackagesdesk-rf0f1de98b341e05f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            <button type="button" onClick={() => handleOpenDrawer()} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='commissionpackagesdesk-r09a99e7b1d392196-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              <Plus className="w-3.5 h-3.5" data-api-unique-id='commissionpackagesdesk-rbcba6c5b49e8cc37-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
              <span data-api-unique-id='commissionpackagesdesk-r34ec13a57f62b417-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Add Commission Tier</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1" data-api-unique-id='commissionpackagesdesk-r8151e89626506b94-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
          {/* Search Input */}
          <div className="relative flex-1 min-w-0" data-api-unique-id='commissionpackagesdesk-r1a3a33395af4f8e1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" data-api-unique-id='commissionpackagesdesk-rd259027fa9f4d693-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Filter by package title, rate, or craft deliverables..." className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-r8c1e68657fb8c7d6-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
          </div>

          {/* Service Type Select Filter */}
          <div className="w-full sm:w-[240px] shrink-0" data-api-unique-id='commissionpackagesdesk-r2151999cacaa4cbb-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            <Select value={filterType} onValueChange={setFilterType} data-api-unique-id='commissionpackagesdesk-r481dea1e3a60849f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              <SelectTrigger size="sm" className="w-full text-xs bg-background" data-api-unique-id='commissionpackagesdesk-r5530c04292545a09-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <SelectValue placeholder="All Service Disciplines" data-api-unique-id='commissionpackagesdesk-r3c569391f69e8010-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
              </SelectTrigger>
              <SelectContent data-api-unique-id='commissionpackagesdesk-r37b9c6dccead5040-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <SelectItem value="ALL" data-api-unique-id='commissionpackagesdesk-r2f82fcf490ac04b9-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>All Service Disciplines</SelectItem>
                <SelectItem value="ARCHITECTURAL_MONOGRAPH" data-api-unique-id='commissionpackagesdesk-r66e4eeba53c41f6f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Architectural Monograph</SelectItem>
                <SelectItem value="EDITORIAL_PORTRAITURE" data-api-unique-id='commissionpackagesdesk-r32d15c6234eefedb-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Editorial Portraiture</SelectItem>
                <SelectItem value="COMMERCIAL_CAMPAIGN" data-api-unique-id='commissionpackagesdesk-rfdca1cfd8d2735cf-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Commercial Campaign</SelectItem>
                <SelectItem value="PRINT_ACQUISITION" data-api-unique-id='commissionpackagesdesk-r13db81706995fe9b-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Print Acquisition</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Table Container with Controlled Horizontal Scroll Wrapper */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto" data-api-unique-id='commissionpackagesdesk-r2cff3c0b6b4802a3-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
        <table className="w-full min-w-[960px] text-left border-collapse text-xs" data-api-unique-id='commissionpackagesdesk-r69bb3cbe1ff1f32c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
          <thead data-api-unique-id='commissionpackagesdesk-rcbc43d117ac053a1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            <tr className="border-b border-border bg-muted text-muted-foreground font-medium uppercase tracking-wider text-[11px]" data-api-unique-id='commissionpackagesdesk-r43f618a92e335e47-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              <th className="py-3 px-4 w-[60px] whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-re45c9b888236dee1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Order</th>
              <th className="py-3 px-4 min-w-[200px]" data-api-unique-id='commissionpackagesdesk-r8fef09bb9aff45d7-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Package Title & Discipline</th>
              <th className="py-3 px-4 min-w-[140px] whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-r3244e019f9da0d5b-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Base & Display Rate</th>
              <th className="py-3 px-4 min-w-[140px] whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-rd23cecb3a16c86db-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Turnaround</th>
              <th className="py-3 px-4 min-w-[280px]" data-api-unique-id='commissionpackagesdesk-r0b8876d2440314bb-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Included Darkroom Deliverables</th>
              <th className="py-3 px-4 w-[110px] whitespace-nowrap text-center" data-api-unique-id='commissionpackagesdesk-rb99759b11a04ff34-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Availability</th>
              <th className="py-3 px-4 w-[100px] whitespace-nowrap text-right" data-api-unique-id='commissionpackagesdesk-r994b1f1904a298ea-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border" data-api-unique-id='commissionpackagesdesk-r6d6a71c10f597ba2-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            {filteredPackages.length === 0 ? <tr data-api-unique-id='commissionpackagesdesk-r944dc4fc073663d6-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <td colSpan={7} className="py-12 text-center text-muted-foreground" data-api-unique-id='commissionpackagesdesk-r9313914b8db1d83d-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <div className="flex flex-col items-center justify-center gap-2" data-api-unique-id='commissionpackagesdesk-r8fd008d8bd2b72d1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    <p className="text-sm font-medium" data-api-unique-id='commissionpackagesdesk-rb68e36a697ee0238-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>No commission packages matched your filter criteria.</p>
                    <button type="button" onClick={() => {
                  setFilterType("ALL");
                  setSearchQuery("");
                }} className="text-xs text-primary hover:underline underline-offset-4" data-api-unique-id='commissionpackagesdesk-r50f86a11ca4353fd-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                      Clear search filters
                    </button>
                  </div>
                </td>
              </tr> : filteredPackages.map((pkg, index) => {
            const typeMeta = SERVICE_TYPE_CONFIG[pkg.serviceType] || {
              label: pkg.serviceType,
              badgeClass: "bg-muted text-muted-foreground"
            };
            return <tr key={pkg.id} className="hover:bg-muted/40 transition-colors group" data-api-unique-id='commissionpackagesdesk-r60370d934e70ad11-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                    {/* Sort Order */}
                    <td className="py-3.5 px-4 font-mono text-muted-foreground text-center" data-api-unique-id='commissionpackagesdesk-rf7369234038c847e-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-sortOrder`} data-api-map-var-name='pkg'>
                      {pkg.sortOrder}
                    </td>

                    {/* Title & Service Type */}
                    <td className="py-3.5 px-4" data-api-unique-id='commissionpackagesdesk-r604b910809cb389f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                      <div className="flex flex-col gap-1 min-w-0" data-api-unique-id='commissionpackagesdesk-r49a6756aa8693c40-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        <span className="font-semibold text-foreground text-sm leading-tight" data-api-unique-id='commissionpackagesdesk-r93257b599bcaf48d-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-title`} data-api-map-var-name='pkg'>
                          {pkg.title}
                        </span>
                        <div className="flex items-center gap-1.5" data-api-unique-id='commissionpackagesdesk-reb0701e55d67a0da-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                          <span className={`inline-flex shrink-0 items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase ${typeMeta.badgeClass}`} data-api-unique-id='commissionpackagesdesk-ref7c14f4f403b63e-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                            {typeMeta.label}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Rates */}
                    <td className="py-3.5 px-4 whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-red71fc7afc5ab4f1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                      <div className="flex flex-col gap-0.5 font-mono" data-api-unique-id='commissionpackagesdesk-rcfc93243db03a642-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        <span className="font-bold text-foreground text-sm" data-api-unique-id='commissionpackagesdesk-rc151ee17c15ea4aa-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-priceDisplay`} data-api-map-var-name='pkg'>
                          {pkg.priceDisplay}
                        </span>
                        <span className="text-[11px] text-muted-foreground" data-api-unique-id='commissionpackagesdesk-r2f17e9becc1cc24f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                          Base: ${pkg.basePrice.toLocaleString()} USD
                        </span>
                      </div>
                    </td>

                    {/* Turnaround Duration */}
                    <td className="py-3.5 px-4 whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-r1cdc285a5dacdd71-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                      <div className="inline-flex items-center gap-1.5 text-muted-foreground" data-api-unique-id='commissionpackagesdesk-r061e2a272d2a7428-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        <Clock className="w-3.5 h-3.5 shrink-0 text-primary" data-api-unique-id='commissionpackagesdesk-r7a088fb904c974e1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' />
                        <span data-api-unique-id='commissionpackagesdesk-ra1a239337b1681f3-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-durationEstimate`} data-api-map-var-name='pkg'>{pkg.durationEstimate}</span>
                      </div>
                    </td>

                    {/* Deliverables Tags */}
                    <td className="py-3.5 px-4" data-api-unique-id='commissionpackagesdesk-r6b55185aaf68d7cf-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                      <div className="flex flex-wrap gap-1.5 max-w-[360px]" data-api-unique-id='commissionpackagesdesk-r8031b2f1973fa483-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        {pkg.deliverables.map((item, index1) => <span key={index1} className="inline-flex shrink-0 items-center px-2 py-0.5 rounded-full text-[11px] bg-secondary text-secondary-foreground border border-border/80" data-api-unique-id='commissionpackagesdesk-rf81de992e0bef511-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`filteredPackages-${index}-pkg.deliverables-${index1}-$item`} data-api-map-var-name='item'>
                            {item}
                          </span>)}
                      </div>
                    </td>

                    {/* Availability Optimistic Toggle */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-r46693a67a72d498d-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                      <button type="button" onClick={() => handleToggleActiveClick(pkg)} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${pkg.isActive ? "bg-success text-success-foreground hover:bg-success/90" : "bg-muted text-muted-foreground hover:bg-secondary"}`} title="Click to toggle availability state" data-api-unique-id='commissionpackagesdesk-r196da5efcbf4313b-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        {pkg.isActive ? <>
                            <CheckCircle2 className="w-3 h-3 shrink-0" data-api-unique-id='commissionpackagesdesk-r1101cd070389c2f8-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' />
                            <span data-api-unique-id='commissionpackagesdesk-r7d9851d7594a2fe9-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>Active</span>
                          </> : <>
                            <CircleDashed className="w-3 h-3 shrink-0" data-api-unique-id='commissionpackagesdesk-rc1bd7abf82713ab2-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' />
                            <span data-api-unique-id='commissionpackagesdesk-r003acad462194cd9-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>Paused</span>
                          </>}
                      </button>
                    </td>

                    {/* Row Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap" data-api-unique-id='commissionpackagesdesk-r323ea80837f5dd21-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                      <div className="flex items-center justify-end gap-1.5" data-api-unique-id='commissionpackagesdesk-r78aabe7bc27fe6ed-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        <button type="button" onClick={() => handleOpenDrawer(pkg)} className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Edit Service Package" data-api-unique-id='commissionpackagesdesk-r77434be64d73e7d0-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                          <Edit3 className="w-3.5 h-3.5" data-api-unique-id='commissionpackagesdesk-rfa01988717d98132-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' />
                        </button>
                        <button type="button" onClick={() => {
                    if (window.confirm(`Delete package "${pkg.title}"?`)) {
                      onDeletePackage(pkg.id);
                    }
                  }} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors" title="Delete Package" data-api-unique-id='commissionpackagesdesk-r53fefb21938bb281-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                          <Trash2 className="w-3.5 h-3.5" data-api-unique-id='commissionpackagesdesk-rf7ac3bf73c3ee449-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' />
                        </button>
                      </div>
                    </td>
                  </tr>;
          })}
          </tbody>
        </table>
      </div>

      {/* Footer Info Ribbon */}
      <div className="border-t border-border px-4 py-2.5 bg-muted text-muted-foreground text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2" data-api-unique-id='commissionpackagesdesk-r99a601a691199d70-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
        <span data-api-unique-id='commissionpackagesdesk-r43bddbebc18f4316-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Standard turnaround accounts for physical darkroom chemistry batch schedules and gelatin drying racks.</span>
        <span className="font-mono" data-api-unique-id='commissionpackagesdesk-re17f1274057c6f2f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Displaying {filteredPackages.length} of {packages.length} Packages</span>
      </div>

      {/* Package Editor Drawer / Sheet Modal */}
      {isDrawerOpen && <div className="fixed inset-0 z-50 flex justify-end bg-background/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={handleCloseDrawer} data-api-unique-id='commissionpackagesdesk-re05f2598e2af3346-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
          <div className="w-full max-w-lg h-full bg-card text-card-foreground shadow-2xl border-l border-border flex flex-col min-h-0 animate-in slide-in-from-right duration-300" onClick={e => e.stopPropagation()} data-api-unique-id='commissionpackagesdesk-r2dabebaff1f9e7d9-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
            {/* Drawer Header */}
            <div className="p-4 lg:p-6 border-b border-border flex items-center justify-between shrink-0" data-api-unique-id='commissionpackagesdesk-r15c92307a1f80c96-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              <div className="min-w-0" data-api-unique-id='commissionpackagesdesk-rbf0c57ee59605f53-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <h3 className="text-base font-bold tracking-tight" data-api-unique-id='commissionpackagesdesk-rf4e0a32ff41416ab-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  {editingPackage ? "Modify Commission Tier" : "Configure New Commission Tier"}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5" data-api-unique-id='commissionpackagesdesk-r8c9ff12e0ceace1b-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  Set deliverables, turnaround timeline, and public rate matrix.
                </p>
              </div>
              <button type="button" onClick={handleCloseDrawer} className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground" data-api-unique-id='commissionpackagesdesk-r803c4f2be553a81a-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <X className="w-4 h-4" data-api-unique-id='commissionpackagesdesk-r82debec5ced1c880-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
              </button>
            </div>

            {/* Drawer Scrollable Form Body */}
            <form onSubmit={handleSaveDrawer} className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-6 space-y-4" data-api-unique-id='commissionpackagesdesk-r962af297942371d4-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
              {/* Package Title */}
              <div data-api-unique-id='commissionpackagesdesk-r27690115e27da8f5-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <label className="block text-xs font-semibold text-foreground mb-1" data-api-unique-id='commissionpackagesdesk-r66cb863f51e4d931-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  Commission Package Title *
                </label>
                <input type="text" required value={formTitle} onChange={e => setFormTitle(e.target.value)} placeholder="e.g. Architectural Monograph Series" className="w-full px-3 py-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-r5b40392dfc978aaf-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
              </div>

              {/* Service Discipline Select */}
              <div data-api-unique-id='commissionpackagesdesk-ra7bd8d3ee1c04b22-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <label className="block text-xs font-semibold text-foreground mb-1" data-api-unique-id='commissionpackagesdesk-r3a596e3419b6f590-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  Curatorial Service Discipline *
                </label>
                <Select value={formServiceType} onValueChange={val => setFormServiceType(val as ServiceType)} data-api-unique-id='commissionpackagesdesk-r4b6491ab0f895580-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <SelectTrigger className="w-full text-xs bg-background" data-api-unique-id='commissionpackagesdesk-rfb420410806a8a0f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    <SelectValue placeholder="Select discipline" data-api-unique-id='commissionpackagesdesk-ra07c469154cfa0a4-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                      {SERVICE_TYPE_CONFIG[formServiceType]?.label || formServiceType}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent data-api-unique-id='commissionpackagesdesk-ref86217285ba143f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    <SelectItem value="ARCHITECTURAL_MONOGRAPH" data-api-unique-id='commissionpackagesdesk-rd27f1797f495c8be-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Architectural Monograph</SelectItem>
                    <SelectItem value="EDITORIAL_PORTRAITURE" data-api-unique-id='commissionpackagesdesk-rbd25894f81b96337-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Editorial Portraiture</SelectItem>
                    <SelectItem value="COMMERCIAL_CAMPAIGN" data-api-unique-id='commissionpackagesdesk-re74913d3656db5ca-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Commercial Campaign</SelectItem>
                    <SelectItem value="PRINT_ACQUISITION" data-api-unique-id='commissionpackagesdesk-r0f198a7c341133e8-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Print Acquisition</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-api-unique-id='commissionpackagesdesk-r9a48e7a76251b2da-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <div data-api-unique-id='commissionpackagesdesk-r780777fb326b1679-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <label className="block text-xs font-semibold text-foreground mb-1" data-api-unique-id='commissionpackagesdesk-r838dc967a737034b-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Base Price (USD Number) *
                  </label>
                  <input type="number" required min={0} step={100} value={formBasePrice} onChange={e => setFormBasePrice(Number(e.target.value))} className="w-full px-3 py-2 text-xs rounded-md border border-input bg-background text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-r9f64fcb2a0f9b52f-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
                </div>
                <div data-api-unique-id='commissionpackagesdesk-ra9db97e2d4ceb76c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <label className="block text-xs font-semibold text-foreground mb-1" data-api-unique-id='commissionpackagesdesk-rd23736914e8018f1-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Public Display Range *
                  </label>
                  <input type="text" required value={formPriceDisplay} onChange={e => setFormPriceDisplay(e.target.value)} placeholder="e.g. $5,000 – $10,000" className="w-full px-3 py-2 text-xs rounded-md border border-input bg-background text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-ra99b30b24a531c8c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
                </div>
              </div>

              {/* Turnaround Timeframe & Sort Order */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-api-unique-id='commissionpackagesdesk-r8d5f14f8725fcca9-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <div data-api-unique-id='commissionpackagesdesk-raa7b0cfe40720150-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <label className="block text-xs font-semibold text-foreground mb-1" data-api-unique-id='commissionpackagesdesk-r15d377c99b904023-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Turnaround Estimate *
                  </label>
                  <input type="text" required value={formDuration} onChange={e => setFormDuration(e.target.value)} placeholder="e.g. 4–6 Weeks Turnaround" className="w-full px-3 py-2 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-rad7d55c8fb6e518c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
                </div>
                <div data-api-unique-id='commissionpackagesdesk-r84466823f1abd842-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <label className="block text-xs font-semibold text-foreground mb-1" data-api-unique-id='commissionpackagesdesk-r8cc5f49d3fe960cb-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Catalog Display Priority (Sort Order)
                  </label>
                  <input type="number" value={formSortOrder} onChange={e => setFormSortOrder(Number(e.target.value))} className="w-full px-3 py-2 text-xs rounded-md border border-input bg-background text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-r610fcf0c63aaa54c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
                </div>
              </div>

              {/* Scope Deliverables Tags Manager */}
              <div className="space-y-2 pt-2 border-t border-border" data-api-unique-id='commissionpackagesdesk-r0c1ceeab8b5ddb19-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <div className="flex items-center justify-between" data-api-unique-id='commissionpackagesdesk-refbffd44dcc6cc96-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <label className="block text-xs font-semibold text-foreground" data-api-unique-id='commissionpackagesdesk-rbb49acc8004cbd33-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Included Darkroom Deliverables
                  </label>
                  <span className="text-[11px] text-muted-foreground" data-api-unique-id='commissionpackagesdesk-ra3ed50a47ffe4ffe-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    {formDeliverables.length} item{formDeliverables.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Current Tags Chips */}
                <div className="flex flex-wrap gap-1.5 p-2 rounded-lg border border-border bg-background min-h-[44px]" data-api-unique-id='commissionpackagesdesk-r7d5f979cbe636fa2-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  {formDeliverables.length === 0 ? <span className="text-xs text-muted-foreground italic" data-api-unique-id='commissionpackagesdesk-r5ff8bc1b63f742dc-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                      No deliverables added yet. Select quick defaults below or type custom tag.
                    </span> : formDeliverables.map((item, index) => <span key={index} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-secondary text-secondary-foreground border border-border" data-api-unique-id='commissionpackagesdesk-rbd3d5fbeb684d749-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                        <span data-api-unique-id='commissionpackagesdesk-r6c72ed3c11eb2a6c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`formDeliverables-${index}-$item`} data-api-map-var-name='item'>{item}</span>
                        <button type="button" onClick={() => handleRemoveDeliverable(item)} className="hover:text-destructive transition-colors ml-0.5" data-api-unique-id='commissionpackagesdesk-r495b8d0b87267fb4-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1'>
                          <X className="w-3 h-3" data-api-unique-id='commissionpackagesdesk-r1f756d2666dd10f3-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' />
                        </button>
                      </span>)}
                </div>

                {/* Custom Deliverable Input */}
                <div className="flex gap-2" data-api-unique-id='commissionpackagesdesk-r12b1af01a4543af2-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <input type="text" value={formNewDeliverableInput} onChange={e => setFormNewDeliverableInput(e.target.value)} onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddDeliverable(formNewDeliverableInput);
                }
              }} placeholder="Type custom deliverable and press Enter..." className="flex-1 px-3 py-1.5 text-xs rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring" data-api-unique-id='commissionpackagesdesk-r7d7fd0a219a84f9a-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
                  <button type="button" onClick={() => handleAddDeliverable(formNewDeliverableInput)} className="px-3 py-1.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shrink-0" data-api-unique-id='commissionpackagesdesk-r45117db56dd8d2ac-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Add Tag
                  </button>
                </div>

                {/* Standard Preset Tags Suggestions */}
                <div className="pt-2" data-api-unique-id='commissionpackagesdesk-rf028c5e00a547c78-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <span className="block text-[11px] font-medium text-muted-foreground mb-1.5" data-api-unique-id='commissionpackagesdesk-r613ca36eb3e4c312-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    Darkroom Presets (click to append):
                  </span>
                  <div className="flex flex-wrap gap-1" data-api-unique-id='commissionpackagesdesk-r64b55ff6052eff3c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    {STANDARD_DELIVERABLES.map((preset, index) => {
                  const isIncluded = formDeliverables.includes(preset);
                  return <button key={index} type="button" disabled={isIncluded} onClick={() => handleAddDeliverable(preset)} className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${isIncluded ? "bg-muted text-muted-foreground border-transparent opacity-60 cursor-not-allowed" : "bg-background hover:bg-secondary text-foreground border-border"}`} data-api-unique-id='commissionpackagesdesk-rd56c3f55be41ebe0-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' data-api-in-loop='1' data-api-bind-info={`STANDARD_DELIVERABLES-${index}-$item`} data-api-map-var-name='preset'>
                          + {preset}
                        </button>;
                })}
                  </div>
                </div>
              </div>

              {/* Active Toggle Switch */}
              <div className="pt-3 border-t border-border flex items-center justify-between" data-api-unique-id='commissionpackagesdesk-r322366ea9720d476-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <div data-api-unique-id='commissionpackagesdesk-r4d62508da58e3a4c-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <span className="block text-xs font-semibold text-foreground" data-api-unique-id='commissionpackagesdesk-r0cbd7084c1bf42a2-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>Active for Client Inquiries</span>
                  <span className="text-[11px] text-muted-foreground" data-api-unique-id='commissionpackagesdesk-r51ef0353d2369110-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                    When active, clients can select this package in the public booking queue.
                  </span>
                </div>
                <button type="button" onClick={() => setFormIsActive(!formIsActive)} className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${formIsActive ? "bg-primary" : "bg-muted"}`} data-api-unique-id='commissionpackagesdesk-r0bef83d72c3e85d5-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${formIsActive ? "translate-x-4" : "translate-x-0"}`} data-api-unique-id='commissionpackagesdesk-r42d442b797fec7c7-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk' />
                </button>
              </div>

              {/* Drawer Footer Buttons */}
              <div className="pt-6 border-t border-border flex items-center justify-end gap-2" data-api-unique-id='commissionpackagesdesk-r80d2fb8fe71ed109-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                <button type="button" onClick={handleCloseDrawer} className="px-4 py-2 rounded-md text-xs font-medium text-muted-foreground hover:bg-muted transition-colors" data-api-unique-id='commissionpackagesdesk-rbe2f2f3e18f98fee-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-api-unique-id='commissionpackagesdesk-r2c4977669b531eb6-s679719974' data-api-unique-page-name='src/backend/components/StudioSettings/CommissionPackagesDesk'>
                  {editingPackage ? "Save Package Changes" : "Create Commission Tier"}
                </button>
              </div>
            </form>
          </div>
        </div>}
    </section>;
}