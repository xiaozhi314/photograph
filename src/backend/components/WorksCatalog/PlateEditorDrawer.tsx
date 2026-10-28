"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Upload, Sparkles, Image as ImageIcon, Camera, MapPin, Layers, Film, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { WorkFormValues, PhotoCategory, PhotoCollection, AspectOrientation } from "@/backend/types/WorksCatalog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { upload_image_file } from "@/tools/tools";
interface PlateEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: WorkFormValues) => void;
  categories: PhotoCategory[];
  collections: PhotoCollection[];
  initialValues?: WorkFormValues | null;
}
export default function PlateEditorDrawer({
  isOpen,
  onClose,
  onSubmit,
  categories,
  collections,
  initialValues
}: PlateEditorDrawerProps) {
  const isEditing = Boolean(initialValues?.id);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [title, setTitle] = useState(initialValues?.title || "");
  const [categoryId, setCategoryId] = useState(initialValues?.categoryId || categories[0]?.id || "");
  const [collectionId, setCollectionId] = useState(initialValues?.collectionId || "none");
  const [seriesName, setSeriesName] = useState(initialValues?.seriesName || "");
  const [location, setLocation] = useState(initialValues?.location || "");
  const [year, setYear] = useState<number>(initialValues?.year || 2024);
  const [medium, setMedium] = useState(initialValues?.medium || "Silver Gelatin Fiber Print");
  const [edition, setEdition] = useState(initialValues?.edition || "Ed. 1/15 · Archival");
  const [aspectRatio, setAspectRatio] = useState<AspectOrientation>(initialValues?.aspectRatio || "PORTRAIT");
  const [statement, setStatement] = useState(initialValues?.statement || "");
  const [imageUrl, setImageUrl] = useState(initialValues?.imageUrl || "");
  const [sortOrder, setSortOrder] = useState<number>(initialValues?.sortOrder || 1);
  const [isFeatured, setIsFeatured] = useState<boolean>(initialValues?.isFeatured || false);
  const [isArchived, setIsArchived] = useState<boolean>(initialValues?.isArchived || false);

  // Validation & uploading states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isUploading, setIsUploading] = useState(false);

  // Reset or initialize when props change
  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setCategoryId(initialValues.categoryId || categories[0]?.id || "");
      setCollectionId(initialValues.collectionId ? initialValues.collectionId : "none");
      setSeriesName(initialValues.seriesName || "");
      setLocation(initialValues.location || "");
      setYear(initialValues.year || 2024);
      setMedium(initialValues.medium || "Silver Gelatin Fiber Print");
      setEdition(initialValues.edition || "Ed. 1/15 · Archival");
      setAspectRatio(initialValues.aspectRatio || "PORTRAIT");
      setStatement(initialValues.statement || "");
      setImageUrl(initialValues.imageUrl || "");
      setSortOrder(initialValues.sortOrder || 1);
      setIsFeatured(initialValues.isFeatured || false);
      setIsArchived(initialValues.isArchived || false);
    } else {
      setTitle("");
      setCategoryId(categories[0]?.id || "");
      setCollectionId("none");
      setSeriesName("");
      setLocation("");
      setYear(2024);
      setMedium("Silver Gelatin Fiber Print");
      setEdition("Ed. 1/15 · Archival");
      setAspectRatio("PORTRAIT");
      setStatement("");
      setImageUrl("");
      setSortOrder(1);
      setIsFeatured(false);
      setIsArchived(false);
    }
    setErrors({});
  }, [initialValues, isOpen, categories]);
  if (!isOpen) return null;
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = "Plate title is required";
    if (!categoryId) newErrors.categoryId = "Genre category is required";
    if (!seriesName.trim()) newErrors.seriesName = "Series designation is required";
    if (!location.trim()) newErrors.location = "Capture location is required";
    if (!year || year < 1850 || year > 2100) newErrors.year = "Valid capture year is required";
    if (!medium.trim()) newErrors.medium = "Photographic medium is required";
    if (!edition.trim()) newErrors.edition = "Edition notation is required";
    if (!statement.trim()) newErrors.statement = "Curatorial statement is required";
    if (!imageUrl.trim()) newErrors.imageUrl = "Master plate proof image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isUploading) {
      toast.warning("Darkroom proof is currently uploading. Please wait.");
      return;
    }
    if (!validate()) return;
    onSubmit({
      id: initialValues?.id,
      title: title.trim(),
      categoryId,
      collectionId: collectionId === "none" ? "" : collectionId,
      seriesName: seriesName.trim(),
      location: location.trim(),
      year: Number(year),
      medium: medium.trim(),
      edition: edition.trim(),
      aspectRatio,
      statement: statement.trim(),
      imageUrl: imageUrl.trim(),
      sortOrder: Number(sortOrder) || 1,
      isFeatured,
      isArchived
    });
  };
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await upload_image_file(file);
      setImageUrl(uploadedUrl);
      setErrors(prev => {
        const copy = {
          ...prev
        };
        delete copy.imageUrl;
        return copy;
      });
      toast.success("Darkroom proof scanned & uploaded successfully");
    } catch {
      toast.error("Failed to upload darkroom proof. Please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await upload_image_file(file);
      setImageUrl(uploadedUrl);
      setErrors(prev => {
        const copy = {
          ...prev
        };
        delete copy.imageUrl;
        return copy;
      });
      toast.success("Darkroom proof uploaded successfully");
    } catch {
      toast.error("Failed to upload darkroom proof. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };
  const selectedCategoryName = categories.find(c => c.id === categoryId)?.name || "Select genre category";
  const selectedCollectionName = collectionId === "none" ? "Independent Work" : collections.find(col => col.id === collectionId)?.title ? `${collections.find(col => col.id === collectionId)!.title} (${collections.find(col => col.id === collectionId)!.rollNumber})` : "Select collection folio";
  return <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 flex justify-end" data-api-unique-id='plateeditordrawer-r719726dce0b40845-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
      {/* 540px Slide-Over Drawer Container */}
      <div className="w-full max-w-[540px] h-full bg-card text-card-foreground shadow-2xl border-l border-border flex flex-col min-w-0" role="dialog" aria-modal="true" data-api-unique-id='plateeditordrawer-r4dfaf8454240fa0f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
        {/* Drawer Header */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-card shrink-0" data-api-unique-id='plateeditordrawer-r837057333921ea87-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
          <div className="flex items-center gap-2" data-api-unique-id='plateeditordrawer-r453ab074a2f03e11-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <Film className="w-5 h-5 text-primary shrink-0" data-api-unique-id='plateeditordrawer-rc4c6afe350b2e8bd-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
            <div data-api-unique-id='plateeditordrawer-ra676671ab100c4a9-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <h2 className="text-base font-semibold text-foreground" data-api-unique-id='plateeditordrawer-r0158f414fb378291-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                {isEditing ? "Edit Master Plate Archive" : "Register Master Negative Plate"}
              </h2>
              <p className="text-xs text-muted-foreground" data-api-unique-id='plateeditordrawer-r6c829503f06b4c84-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                {isEditing ? `Updating archival plate ID: ${initialValues?.id?.slice(0, 16)}...` : "Curate and index high-resolution master work for catalog"}
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" data-api-unique-id='plateeditordrawer-r795cf6ba8923b9dd-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <X className="w-5 h-5" data-api-unique-id='plateeditordrawer-ref4ecdb80711244f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
          </button>
        </div>

        {/* Form Body - Scrollable */}
        <form onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto p-5 space-y-6" data-api-unique-id='plateeditordrawer-r65eea7bac3432721-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
          {/* Section 1: Proof & Spec Sheet */}
          <div className="space-y-4" data-api-unique-id='plateeditordrawer-rcbb710d779cc1af0-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <div className="flex items-center gap-2 pb-1 border-b border-border" data-api-unique-id='plateeditordrawer-r5d0440193c4e0914-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <Camera className="w-4 h-4 text-primary" data-api-unique-id='plateeditordrawer-r0e5e5173e698da34-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground" data-api-unique-id='plateeditordrawer-r3f16372a1302df04-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                I. Darkroom Proof & Media Asset
              </h3>
            </div>

            {/* Proof Preview & Dropzone */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start" data-api-unique-id='plateeditordrawer-rd4c10707c882151b-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <div className="sm:col-span-4 aspect-[4/5] rounded border border-border bg-black/5 overflow-hidden relative flex items-center justify-center shadow-inner" data-api-unique-id='plateeditordrawer-re4fce1abc6d66125-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                {imageUrl ? <img src={imageUrl} alt="Master Proof" className="w-full h-full object-cover" data-api-unique-id='plateeditordrawer-rd8693032b149d2d4-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' /> : <div className="flex flex-col items-center justify-center p-3 text-center text-muted-foreground" data-api-unique-id='plateeditordrawer-r868e917288149eed-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    <ImageIcon className="w-8 h-8 opacity-40 mb-1" data-api-unique-id='plateeditordrawer-rcf2b294a9ebc9e8e-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                    <span className="text-[10px]" data-api-unique-id='plateeditordrawer-r70016918b06e68d3-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>No Proof Bound</span>
                  </div>}
                {isUploading && <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-xs gap-1.5" data-api-unique-id='plateeditordrawer-rdddad7a8773db57d-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    <Loader2 className="w-5 h-5 animate-spin" data-api-unique-id='plateeditordrawer-raabb7b143807db45-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                    <span data-api-unique-id='plateeditordrawer-rc2f5d87e713b4503-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Uploading...</span>
                  </div>}
              </div>

              <div className="sm:col-span-8 flex flex-col gap-2" data-api-unique-id='plateeditordrawer-r449a09882b07e04c-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='plateeditordrawer-rc12a685e9eb67d0a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Master Plate Proof <span className="text-destructive" data-api-unique-id='plateeditordrawer-r52cdc03b7fb88e40-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
                </label>

                <div onClick={() => fileInputRef.current?.click()} onDragOver={e => e.preventDefault()} onDrop={handleDrop} className="rounded-lg border border-dashed border-border hover:border-primary/60 p-4 text-center cursor-pointer bg-muted/30 hover:bg-muted/60 transition-colors" data-api-unique-id='plateeditordrawer-r29ef285c0b116939-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  {isUploading ? <div className="flex flex-col items-center justify-center py-1" data-api-unique-id='plateeditordrawer-r6048189a0935be00-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                      <Loader2 className="w-5 h-5 animate-spin text-primary mb-1" data-api-unique-id='plateeditordrawer-rc5bc9b23d8a9fd73-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                      <p className="text-xs font-medium text-foreground" data-api-unique-id='plateeditordrawer-rdb94ebaa1a879429-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Processing darkroom scan...</p>
                    </div> : <>
                      <Upload className="w-4 h-4 mx-auto text-primary mb-1" data-api-unique-id='plateeditordrawer-r78221194c2c28234-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                      <p className="text-xs font-medium text-foreground" data-api-unique-id='plateeditordrawer-rb6eecf370905b8e5-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Click or drag & drop raw darkroom proof</p>
                      <p className="text-[10px] text-muted-foreground" data-api-unique-id='plateeditordrawer-r469310e4218ddad2-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>TIFF, JPEG, PNG high-res scans up to 50MB</p>
                    </>}
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} data-api-unique-id='plateeditordrawer-ra9a2e256c7ac3344-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                </div>

                {imageUrl && <div className="flex items-center justify-between text-[11px] text-muted-foreground bg-muted/40 px-2.5 py-1.5 rounded border border-border" data-api-unique-id='plateeditordrawer-r35bbc33c424f6afd-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    <span className="truncate max-w-[240px] font-mono" data-api-unique-id='plateeditordrawer-r1f6cbe1444441861-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{imageUrl}</span>
                    <button type="button" onClick={() => setImageUrl("")} className="text-destructive hover:underline ml-2 shrink-0" data-api-unique-id='plateeditordrawer-r3c4bf8603fb25936-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                      Remove
                    </button>
                  </div>}

                {errors.imageUrl && <p className="text-[11px] text-destructive mt-0.5" data-api-unique-id='plateeditordrawer-r39f5b4253197df24-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.imageUrl}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Core Plate Metadata */}
          <div className="space-y-4" data-api-unique-id='plateeditordrawer-r70310bb94d294518-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <div className="flex items-center gap-2 pb-1 border-b border-border" data-api-unique-id='plateeditordrawer-rfb3bd6e4a10536af-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <Layers className="w-4 h-4 text-primary" data-api-unique-id='plateeditordrawer-re8087b7d37cdeca7-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground" data-api-unique-id='plateeditordrawer-r1409a9365eb781a9-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                II. Nomenclature & Series Metadata
              </h3>
            </div>

            {/* Title */}
            <div data-api-unique-id='plateeditordrawer-rfe27f02f5d94105b-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-rbfcc67862a919034-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                Plate Title <span className="text-destructive" data-api-unique-id='plateeditordrawer-r459b2d1db49ff975-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
              </label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Monolith in Mist VII" className={`w-full px-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.title ? "border-destructive" : "border-input"}`} data-api-unique-id='plateeditordrawer-r5175cfc1e900289a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              {errors.title && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-r80d323cfc5026cea-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.title}</p>}
            </div>

            {/* Series & Capture Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-api-unique-id='plateeditordrawer-rc654e95c01b7fc6a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <div data-api-unique-id='plateeditordrawer-rb54eab873be669fd-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-r47d730b996fd1b62-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Series Designation <span className="text-destructive" data-api-unique-id='plateeditordrawer-rc5da4591be94c22b-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
                </label>
                <input type="text" value={seriesName} onChange={e => setSeriesName(e.target.value)} placeholder="e.g. Nordic Solitude" className={`w-full px-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.seriesName ? "border-destructive" : "border-input"}`} data-api-unique-id='plateeditordrawer-r5bd8f5978e8a7e3d-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                {errors.seriesName && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-r72dd1a552aa96d23-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.seriesName}</p>}
              </div>

              <div data-api-unique-id='plateeditordrawer-rd312a5570a7ff59a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-rbd428c7143a5b0c5-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Capture Year <span className="text-destructive" data-api-unique-id='plateeditordrawer-r421752817e6cb080-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
                </label>
                <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} min={1850} max={2100} className="w-full px-3 py-2 text-xs rounded border border-input bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='plateeditordrawer-r1c617afd24959029-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                {errors.year && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-red4931e22f093ba9-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.year}</p>}
              </div>
            </div>

            {/* Location */}
            <div data-api-unique-id='plateeditordrawer-rbf87decb4ff3d2a3-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-ra21815bfcc1b72ea-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                Capture Location <span className="text-destructive" data-api-unique-id='plateeditordrawer-r5c4914bc2be9d8a7-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
              </label>
              <div className="relative" data-api-unique-id='plateeditordrawer-re8401811f22f8f54-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <MapPin className="w-3.5 h-3.5 absolute left-3 top-2.5 text-muted-foreground" data-api-unique-id='plateeditordrawer-r218b111b597872cc-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Snæfellsnes Peninsula, Iceland" className={`w-full pl-8 pr-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.location ? "border-destructive" : "border-input"}`} data-api-unique-id='plateeditordrawer-r8bf81eea463bf828-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              </div>
              {errors.location && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-r5e0ab1015e9eee27-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.location}</p>}
            </div>

            {/* Category Genre & Folio Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-api-unique-id='plateeditordrawer-r9813990b2e570862-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <div data-api-unique-id='plateeditordrawer-r579d7293d3bdd402-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-rf67fefb1ed450a3e-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Genre Category <span className="text-destructive" data-api-unique-id='plateeditordrawer-rcf055512bee1254f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
                </label>
                <Select value={categoryId} onValueChange={setCategoryId} data-api-unique-id='plateeditordrawer-r47d225fc8428c166-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  <SelectTrigger className="w-full text-xs" data-api-unique-id='plateeditordrawer-r69fe97162d3dd50f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    <SelectValue data-api-unique-id='plateeditordrawer-r75c5697d77f6ee88-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{selectedCategoryName}</SelectValue>
                  </SelectTrigger>
                  <SelectContent data-api-unique-id='plateeditordrawer-r3298ec59d2926fa6-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    {categories.map((c, index) => <SelectItem key={c.id} value={c.id} data-api-unique-id='plateeditordrawer-r20723fbb2f0fe772-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' data-api-in-loop='1' data-api-bind-info={`categories-${index}-name`} data-api-map-var-name='c'>
                        {c.name}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.categoryId && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-rc274e43ca4769361-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.categoryId}</p>}
              </div>

              <div data-api-unique-id='plateeditordrawer-rb5637c01dc5da2a0-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-r2249e4a3bd2ca369-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Associated Folio Collection
                </label>
                <Select value={collectionId} onValueChange={setCollectionId} data-api-unique-id='plateeditordrawer-r88edfc9e26b98a2f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  <SelectTrigger className="w-full text-xs" data-api-unique-id='plateeditordrawer-r4931b762ac106801-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    <SelectValue data-api-unique-id='plateeditordrawer-rd21fe96a5613576b-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{selectedCollectionName}</SelectValue>
                  </SelectTrigger>
                  <SelectContent data-api-unique-id='plateeditordrawer-r6062a3a7404bc84c-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                    <SelectItem value="none" data-api-unique-id='plateeditordrawer-r5f13e5c4d5292400-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Independent Work</SelectItem>
                    {collections.map((col, index) => <SelectItem key={col.id} value={col.id} data-api-unique-id='plateeditordrawer-r106c4facc071329a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' data-api-in-loop='1' data-api-bind-info={`collections-${index}-title`} data-api-map-var-name='col'>
                        {col.title} ({col.rollNumber})
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Section 3: Physical Format & Aspect Ratio */}
          <div className="space-y-4" data-api-unique-id='plateeditordrawer-ra1ec90731f52f55b-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <div className="flex items-center gap-2 pb-1 border-b border-border" data-api-unique-id='plateeditordrawer-rdb238bbab132d16a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <Film className="w-4 h-4 text-primary" data-api-unique-id='plateeditordrawer-r3b378c77929b177c-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground" data-api-unique-id='plateeditordrawer-r089623c89e947abd-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                III. Aspect Ratio & Edition Specifications
              </h3>
            </div>

            {/* Aspect Ratio Buttons */}
            <div data-api-unique-id='plateeditordrawer-r75a33cac102b833d-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <label className="block text-xs font-medium text-foreground mb-1.5" data-api-unique-id='plateeditordrawer-rbd3cc3a00383d733-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                Negative Aspect Ratio
              </label>
              <div className="grid grid-cols-2 gap-3" data-api-unique-id='plateeditordrawer-re39e08da33ca3e00-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <button type="button" onClick={() => setAspectRatio("PORTRAIT")} className={`flex items-center justify-center gap-2 p-2.5 rounded border text-xs font-medium transition-colors ${aspectRatio === "PORTRAIT" ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border hover:bg-secondary hover:text-foreground"}`} data-api-unique-id='plateeditordrawer-rd7039f923dab7564-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  <div className="w-3 h-4 border border-current rounded-xs" data-api-unique-id='plateeditordrawer-ra6df4836ef7a68d7-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                  <span data-api-unique-id='plateeditordrawer-r2e9911da5116a561-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Portrait (4:5 / 2:3)</span>
                </button>

                <button type="button" onClick={() => setAspectRatio("LANDSCAPE")} className={`flex items-center justify-center gap-2 p-2.5 rounded border text-xs font-medium transition-colors ${aspectRatio === "LANDSCAPE" ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border hover:bg-secondary hover:text-foreground"}`} data-api-unique-id='plateeditordrawer-r1ef75041de7a592e-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  <div className="w-4 h-3 border border-current rounded-xs" data-api-unique-id='plateeditordrawer-r03d0e5a5a5429180-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                  <span data-api-unique-id='plateeditordrawer-rfa4edddd1c06671a-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Landscape (3:2 / 16:9)</span>
                </button>
              </div>
            </div>

            {/* Medium & Edition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-api-unique-id='plateeditordrawer-r1ad08be1c9b9819c-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <div data-api-unique-id='plateeditordrawer-r0e8aaec832ede5e5-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-r9c42fc7c325fdefe-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Photographic Medium <span className="text-destructive" data-api-unique-id='plateeditordrawer-rea524b534f4acb89-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
                </label>
                <input type="text" value={medium} onChange={e => setMedium(e.target.value)} placeholder="e.g. Silver Gelatin Fiber Print" className={`w-full px-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.medium ? "border-destructive" : "border-input"}`} data-api-unique-id='plateeditordrawer-rbd8317f6978a3287-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                {errors.medium && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-rbd81dc739f2bed4e-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.medium}</p>}
              </div>

              <div data-api-unique-id='plateeditordrawer-r615960d90eed04f1-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-rc21517abace93400-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                  Edition Particulars <span className="text-destructive" data-api-unique-id='plateeditordrawer-r322e6ff4c50c48aa-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
                </label>
                <input type="text" value={edition} onChange={e => setEdition(e.target.value)} placeholder="e.g. Ed. 1/15 · 35mm Gelatin" className={`w-full px-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.edition ? "border-destructive" : "border-input"}`} data-api-unique-id='plateeditordrawer-r9eb840a8259bf259-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
                {errors.edition && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-r8428732e802e4269-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.edition}</p>}
              </div>
            </div>

            {/* Sort Order */}
            <div data-api-unique-id='plateeditordrawer-rf954fa307cf28468-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-r9b133be95b4b2056-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                Ledger Sequencing Order (sortOrder)
              </label>
              <input type="number" value={sortOrder} onChange={e => setSortOrder(Number(e.target.value))} min={1} max={999} className="w-full px-3 py-2 text-xs rounded border border-input bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='plateeditordrawer-rf6f2a79e2098e013-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              <p className="text-[11px] text-muted-foreground mt-1" data-api-unique-id='plateeditordrawer-rc950595400b28eab-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                Lower numerical values sequence earlier in curated portfolio exhibitions.
              </p>
            </div>
          </div>

          {/* Section 4: Curatorial Statement */}
          <div className="space-y-4" data-api-unique-id='plateeditordrawer-r20a03d2faa09640b-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <div className="flex items-center gap-2 pb-1 border-b border-border" data-api-unique-id='plateeditordrawer-r11b59fcad31b0765-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <Sparkles className="w-4 h-4 text-primary" data-api-unique-id='plateeditordrawer-r25ac40c2699d867c-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground" data-api-unique-id='plateeditordrawer-ref85ac6d46f45290-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                IV. Curatorial Statement on Light & Space
              </h3>
            </div>

            <div data-api-unique-id='plateeditordrawer-ra577e53781d3f598-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <label className="block text-xs font-medium text-foreground mb-1" data-api-unique-id='plateeditordrawer-r000489107b7f117c-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                Artistic Curatorial Thesis & Negative Space Commentary <span className="text-destructive" data-api-unique-id='plateeditordrawer-r1d5927f7e9fea6ca-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>*</span>
              </label>
              <textarea value={statement} onChange={e => setStatement(e.target.value)} rows={4} placeholder="Detail the darkroom philosophy, dynamic range of silver nitrates, atmospheric stillness, or textural chiaroscuro..." className={`w-full px-3 py-2 text-xs rounded border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring leading-relaxed ${errors.statement ? "border-destructive" : "border-input"}`} data-api-unique-id='plateeditordrawer-r3c2df4e6a090528f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              {errors.statement && <p className="text-[11px] text-destructive mt-1" data-api-unique-id='plateeditordrawer-r8ebae387a2149858-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{errors.statement}</p>}
            </div>
          </div>

          {/* Section 5: Status & Flags */}
          <div className="p-4 rounded-lg bg-muted border border-border space-y-3" data-api-unique-id='plateeditordrawer-r8718e8d206b6aedf-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            <div className="flex items-center justify-between" data-api-unique-id='plateeditordrawer-r36cfd0f486fcbaa9-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <div data-api-unique-id='plateeditordrawer-r7f4284590a532214-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <span className="text-xs font-semibold text-foreground" data-api-unique-id='plateeditordrawer-r44520390348edb31-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Featured Portfolio Wall Pin</span>
                <p className="text-[11px] text-muted-foreground" data-api-unique-id='plateeditordrawer-r71b718f7663990f2-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Highlight on home portfolio hero roll and primary salon wall</p>
              </div>
              <button type="button" onClick={() => setIsFeatured(!isFeatured)} className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${isFeatured ? "bg-primary" : "bg-secondary"}`} data-api-unique-id='plateeditordrawer-rd8bfcf62d33c2c0d-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isFeatured ? "translate-x-5" : "translate-x-0"}`} data-api-unique-id='plateeditordrawer-r923a9458f750aae1-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              </button>
            </div>

            <div className="border-t border-border/60 pt-3 flex items-center justify-between" data-api-unique-id='plateeditordrawer-rd1364f45d569f9c0-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
              <div data-api-unique-id='plateeditordrawer-r0e348dafe6dfbe02-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <span className="text-xs font-semibold text-foreground" data-api-unique-id='plateeditordrawer-ra756e4950d2a8df2-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Archive Visibility Status</span>
                <p className="text-[11px] text-muted-foreground" data-api-unique-id='plateeditordrawer-r42531d2109f4d360-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>Archive to hide plate from public exhibition while retaining darkroom ledger record</p>
              </div>
              <button type="button" onClick={() => setIsArchived(!isArchived)} className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${isArchived ? "bg-destructive" : "bg-emerald-600"}`} data-api-unique-id='plateeditordrawer-rae0f43f0f57e95bd-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isArchived ? "translate-x-5" : "translate-x-0"}`} data-api-unique-id='plateeditordrawer-r5a8afcbafcd30d6e-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />
              </button>
            </div>
          </div>
        </form>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-border bg-card flex items-center justify-between gap-3 shrink-0" data-api-unique-id='plateeditordrawer-r339e07ed1a702dc0-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
          <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-medium rounded border border-border text-foreground hover:bg-muted transition-colors" data-api-unique-id='plateeditordrawer-r8b994be355786b34-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            Cancel
          </button>

          <button type="button" onClick={handleSubmit} disabled={isUploading} className="px-5 py-2 text-xs font-semibold rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5" data-api-unique-id='plateeditordrawer-rc61b162c649c1372-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>
            {isUploading && <Loader2 className="w-3.5 h-3.5 animate-spin" data-api-unique-id='plateeditordrawer-r58e391f30650b4b3-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer' />}
            <span data-api-unique-id='plateeditordrawer-rf70c0f616259b08f-s1456058674' data-api-unique-page-name='src/backend/components/WorksCatalog/PlateEditorDrawer'>{isEditing ? "Update Master Plate" : "Commit Plate to Archive"}</span>
          </button>
        </div>
      </div>
    </div>;
}