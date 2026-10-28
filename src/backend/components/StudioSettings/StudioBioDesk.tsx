"use client";

import React, { useEffect, useRef, useState } from "react";
import { Building2, MapPin, Camera, Save, CheckCircle2, Quote, UploadCloud } from "lucide-react";
import { StudioBioData } from "@/backend/types/StudioSettings";
import { upload_image_file } from "@/tools/tools";
import { toast } from "sonner";
interface StudioBioDeskProps {
  bioData?: StudioBioData;
  bio?: StudioBioData;
  onSaveBio: (updatedBio: StudioBioData) => void;
}
export default function StudioBioDesk({
  bioData,
  bio,
  onSaveBio
}: StudioBioDeskProps) {
  const activeBio = bioData || bio;
  const [formData, setFormData] = useState<StudioBioData>(() => ({
    id: activeBio?.id || "studio_bio_default",
    artistName: activeBio?.artistName || "",
    studioName: activeBio?.studioName || "",
    philosophyQuote: activeBio?.philosophyQuote || "",
    bioStatement: activeBio?.bioStatement || "",
    portraitImage: activeBio?.portraitImage || null,
    atelierLocation: activeBio?.atelierLocation || "",
    activeRepresentation: activeBio?.activeRepresentation || "",
    createdAt: activeBio?.createdAt ? new Date(activeBio.createdAt) : new Date(),
    updatedAt: activeBio?.updatedAt ? new Date(activeBio.updatedAt) : new Date()
  }));
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (activeBio) {
      setFormData({
        id: activeBio.id,
        artistName: activeBio.artistName,
        studioName: activeBio.studioName,
        philosophyQuote: activeBio.philosophyQuote,
        bioStatement: activeBio.bioStatement,
        portraitImage: activeBio.portraitImage,
        atelierLocation: activeBio.atelierLocation,
        activeRepresentation: activeBio.activeRepresentation,
        createdAt: activeBio.createdAt ? new Date(activeBio.createdAt) : new Date(),
        updatedAt: activeBio.updatedAt ? new Date(activeBio.updatedAt) : new Date()
      });
    }
  }, [activeBio]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await upload_image_file(file);
      setFormData(prev => ({
        ...prev,
        portraitImage: uploadedUrl
      }));
      toast.success("Portrait photo uploaded successfully");
    } catch {
      toast.error("Failed to upload portrait photo. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsSaving(true);
    try {
      onSaveBio(formData);
    } finally {
      setIsSaving(false);
    }
  };
  return <section data-controller-name="Artist Biography & Atelier Statement Desk" className="w-full max-w-full min-w-0 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm lg:p-6" data-api-unique-id='studiobiodesk-r69516b3ab353a6cf-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
      <div className="flex min-w-0 flex-col gap-1 border-b border-border pb-4" data-api-unique-id='studiobiodesk-r48fdb9a18b66af50-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3" data-api-unique-id='studiobiodesk-r30aa984d1c03ec97-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
          <div className="flex min-w-0 items-center gap-2" data-api-unique-id='studiobiodesk-r565218fdd185722a-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground" data-api-unique-id='studiobiodesk-r346b26370e110207-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <Camera className="h-4 w-4" data-api-unique-id='studiobiodesk-ref7f627e4f0dcf2c-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
            </span>
            <h2 className="min-w-0 truncate text-base font-semibold tracking-tight text-foreground lg:text-lg" data-api-unique-id='studiobiodesk-r02079108b40c6512-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              Artist Biography & Atelier Statement
            </h2>
          </div>
          <button type="button" onClick={() => handleSubmit()} disabled={isSaving} className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" data-api-unique-id='studiobiodesk-r96e58b8cf874863d-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            {isSaving ? <span className="inline-flex items-center gap-1" data-api-unique-id='studiobiodesk-r793f62c61835eacd-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>Saving...</span> : <>
                <Save className="h-3.5 w-3.5" data-api-unique-id='studiobiodesk-r9f22f79294cf03e2-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                <span data-api-unique-id='studiobiodesk-r5cd89486222a3b21-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>Save Bio Profile</span>
              </>}
          </button>
        </div>
        <p className="text-xs text-muted-foreground" data-api-unique-id='studiobiodesk-r72dd317d3e55de8a-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
          Primary biographical identity, philosophical ethos, and representation agency records published on the monograph archive.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-12" data-api-unique-id='studiobiodesk-r428ea4e075151859-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
        {/* Left Column (Atelier Identity & Portrait Preview) */}
        <div className="flex min-w-0 flex-col gap-4 xl:col-span-4" data-api-unique-id='studiobiodesk-r06d3ea034a986f87-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
          <div className="rounded-lg border border-border bg-muted/40 p-4" data-api-unique-id='studiobiodesk-r48179ff68afcd3e9-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            <span className="text-xs font-semibold text-foreground" data-api-unique-id='studiobiodesk-r0425f5d645aa4692-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>Darkroom Portrait Visual</span>
            <div className="mt-3 flex flex-col items-center justify-center gap-3" data-api-unique-id='studiobiodesk-r7e7a798d0011ee04-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <div className="group relative aspect-[4/5] w-40 cursor-pointer overflow-hidden rounded-md border border-dashed border-border bg-card shadow-sm transition-colors hover:border-primary/60" onClick={() => fileInputRef.current?.click()} title="Click to select or replace portrait photo" data-api-unique-id='studiobiodesk-raa777af592123c29-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                {formData.portraitImage ? <img src={formData.portraitImage} alt={formData.artistName || "Darkroom Portrait"} className="h-full w-full object-cover" data-api-unique-id='studiobiodesk-r8abd6a9ab21031a0-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' /> : <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center text-xs text-muted-foreground" data-api-unique-id='studiobiodesk-re946ad9f71a687ac-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                    <Camera className="mb-2 h-8 w-8 text-muted-foreground/60" data-api-unique-id='studiobiodesk-r62998fb12b6aa77c-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                    <span data-api-unique-id='studiobiodesk-r8b5314cd8206f7ae-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>No portrait loaded</span>
                    <span className="mt-1 text-[10px] text-muted-foreground/75" data-api-unique-id='studiobiodesk-r8d4eb1c35a0b279f-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>Click to upload</span>
                  </div>}
                {isUploading && <div className="absolute inset-0 flex items-center justify-center bg-background/80 text-xs font-medium text-foreground" data-api-unique-id='studiobiodesk-r2141ffdeeeb00ebc-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                    Uploading...
                  </div>}
              </div>

              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} data-api-unique-id='studiobiodesk-r835c1148cb054e72-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />

              <div className="flex w-full flex-col gap-1.5" data-api-unique-id='studiobiodesk-r2439c4a43b95ed1d-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                <button type="button" onClick={() => fileInputRef.current?.click()} disabled={isUploading} className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground shadow-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" data-api-unique-id='studiobiodesk-r4ebb4b678590c8d5-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                  <UploadCloud className="h-3.5 w-3.5 text-primary" data-api-unique-id='studiobiodesk-r5ad4638015fff6b6-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                  <span data-api-unique-id='studiobiodesk-rcfd7919074f01162-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>{isUploading ? "Uploading..." : "Replace Portrait Photo"}</span>
                </button>
                <p className="text-center text-[11px] text-muted-foreground" data-api-unique-id='studiobiodesk-rb2ef56779305d498-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                  Recommended: 8×10 Gelatin Silver format (min. 1200×1500px)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Identification Fields */}
          <div className="flex min-w-0 flex-col gap-3 rounded-lg border border-border bg-card p-4" data-api-unique-id='studiobiodesk-rb97fa895cf5df25c-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            <div className="flex min-w-0 flex-col gap-1.5" data-api-unique-id='studiobiodesk-ree006ced4b606352-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <label htmlFor="artistName" className="text-xs font-medium text-foreground" data-api-unique-id='studiobiodesk-rc7f16efbc389ede8-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Master Artist Name
              </label>
              <input id="artistName" name="artistName" type="text" value={formData.artistName} onChange={handleInputChange} className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required data-api-unique-id='studiobiodesk-re671b6ec3d59cbd0-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
            </div>

            <div className="flex min-w-0 flex-col gap-1.5" data-api-unique-id='studiobiodesk-raf5bef4a636cdaa2-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <label htmlFor="studioName" className="text-xs font-medium text-foreground" data-api-unique-id='studiobiodesk-r0b578aca28c1cebe-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Atelier Workshop Name
              </label>
              <div className="relative" data-api-unique-id='studiobiodesk-r0e156255c559ae8b-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                <Building2 className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted-foreground" data-api-unique-id='studiobiodesk-r49b598c8f8b7e49a-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                <input id="studioName" name="studioName" type="text" value={formData.studioName} onChange={handleInputChange} className="w-full rounded-md border border-border bg-background pl-8 pr-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required data-api-unique-id='studiobiodesk-r13cab11f6957f172-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-1.5" data-api-unique-id='studiobiodesk-reaeb7e3d48ffe149-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <label htmlFor="atelierLocation" className="text-xs font-medium text-foreground" data-api-unique-id='studiobiodesk-rc499a4e5202ced2c-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Geographic Atelier Residencies
              </label>
              <div className="relative" data-api-unique-id='studiobiodesk-rfeb950c354a391b8-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                <MapPin className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted-foreground" data-api-unique-id='studiobiodesk-r7c166a3342f1b403-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                <input id="atelierLocation" name="atelierLocation" type="text" value={formData.atelierLocation} onChange={handleInputChange} className="w-full rounded-md border border-border bg-background pl-8 pr-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required data-api-unique-id='studiobiodesk-r055037a811c020f0-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Philosophy Quote, Essay & Representation) */}
        <div className="flex min-w-0 flex-col gap-4 xl:col-span-8" data-api-unique-id='studiobiodesk-r8e9f7d28c28812d8-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
          {/* Philosophy Quote Box */}
          <div className="rounded-lg border border-border bg-muted/30 p-4" data-api-unique-id='studiobiodesk-r289c9eb6ffd1e99f-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            <div className="flex min-w-0 items-center justify-between gap-2 pb-2" data-api-unique-id='studiobiodesk-r4d31dae34ff2eaf9-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <div className="flex items-center gap-1.5" data-api-unique-id='studiobiodesk-r002bddb34b5610ee-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                <Quote className="h-4 w-4 text-primary" data-api-unique-id='studiobiodesk-rf3ed38da72ef9dc1-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                <label htmlFor="philosophyQuote" className="text-xs font-semibold text-foreground" data-api-unique-id='studiobiodesk-rc4bcbfcd2d30d73c-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                  Artistic Philosophy & Chiaroscuro Manifesto
                </label>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary" data-api-unique-id='studiobiodesk-r3947d49e4668bab7-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Featured Lead Quotation
              </span>
            </div>
            <textarea id="philosophyQuote" name="philosophyQuote" rows={3} value={formData.philosophyQuote} onChange={handleInputChange} className="mt-1 w-full rounded-md border border-border bg-background p-2.5 text-xs italic leading-relaxed text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="e.g. In the darkroom, light is not captured; it is distilled through the geometry of time..." required data-api-unique-id='studiobiodesk-r91baf032bd1f6da5-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
          </div>

          {/* Full Bio Essay */}
          <div className="flex min-w-0 flex-col gap-1.5 rounded-lg border border-border bg-card p-4" data-api-unique-id='studiobiodesk-r14fb06f1c8f147b7-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            <div className="flex items-center justify-between gap-2" data-api-unique-id='studiobiodesk-r48bf13ec94f090c2-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <label htmlFor="bioStatement" className="text-xs font-semibold text-foreground" data-api-unique-id='studiobiodesk-rf2b4c55e9ca84d88-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Comprehensive Curatorial Biography (Monograph Essay)
              </label>
              <span className="text-[11px] text-muted-foreground" data-api-unique-id='studiobiodesk-r1dd8af9ad87b284b-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Markdown / Analog Craft Exposition
              </span>
            </div>
            <textarea id="bioStatement" name="bioStatement" rows={7} value={formData.bioStatement} onChange={handleInputChange} className="mt-1 w-full rounded-md border border-border bg-background p-3 text-xs leading-relaxed text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required data-api-unique-id='studiobiodesk-r86827dbd791af831-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
          </div>

          {/* Institutional Representation Agency */}
          <div className="flex min-w-0 flex-col gap-1.5 rounded-lg border border-border bg-card p-4" data-api-unique-id='studiobiodesk-r665b31b04eae38e2-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
            <div className="flex items-center justify-between gap-2" data-api-unique-id='studiobiodesk-rf2ea624d7f697e01-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
              <label htmlFor="activeRepresentation" className="text-xs font-semibold text-foreground" data-api-unique-id='studiobiodesk-rb367265207990fa2-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                Active Gallery & Curatorial Representation
              </label>
              <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground" data-api-unique-id='studiobiodesk-rccbefb6fab781985-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>
                <CheckCircle2 className="h-3 w-3 text-emerald-600" data-api-unique-id='studiobiodesk-r824fd89df5f7e69d-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
                <span data-api-unique-id='studiobiodesk-r4e0eae0c1efc11cf-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk'>Primary Archive Liaison</span>
              </span>
            </div>
            <input id="activeRepresentation" name="activeRepresentation" type="text" value={formData.activeRepresentation} onChange={handleInputChange} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="e.g. Galerie Lumina (Paris · Zurich) · Monograph Inquiries: curator@darkroomatelier.art" required data-api-unique-id='studiobiodesk-r0228ac4ba93440c5-s262716757' data-api-unique-page-name='src/backend/components/StudioSettings/StudioBioDesk' />
          </div>
        </div>
      </form>
    </section>;
}