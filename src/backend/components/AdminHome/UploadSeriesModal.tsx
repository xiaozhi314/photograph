"use client";

import React, { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { upload_image_file } from "@/tools/tools";
import type { CreateCollectionInput, AspectOrientation } from "@/backend/types/AdminHome";
interface UploadSeriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateCollection?: (newCol: CreateCollectionInput) => void;
  /** @deprecated compatible fallback */
  onSuccessAdd?: (newCol: any) => void;
}
export default function UploadSeriesModal({
  isOpen,
  onClose,
  onCreateCollection,
  onSuccessAdd
}: UploadSeriesModalProps) {
  const [title, setTitle] = useState("");
  const [rollNumber, setRollNumber] = useState("Roll No. 049");
  const [imageCount, setImageCount] = useState("16");
  const [medium, setMedium] = useState("Hasselblad 500C / Kodak Portra 400");
  const [curatorNote, setCuratorNote] = useState("");
  const [aspect, setAspect] = useState<AspectOrientation>("PORTRAIT");
  const [aspectRatioClass, setAspectRatioClass] = useState("aspect-[4/5]");
  const [coverImage, setCoverImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [featuredOnHome, setFeaturedOnHome] = useState(false);
  const [sortOrder, setSortOrder] = useState("5");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await upload_image_file(file);
      setCoverImage(uploadedUrl);
      toast.success("Cover image plate uploaded successfully");
    } catch {
      toast.error("Failed to upload image file. Please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  const handleRemoveCover = () => {
    setCoverImage("");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please provide a title for the series folio");
      return;
    }
    const payload: CreateCollectionInput = {
      title: title.trim(),
      rollNumber: rollNumber.trim() || "Roll No. 049",
      medium: medium.trim() || "120 Medium Format / Portra 160",
      curatorNote: curatorNote.trim() || "Archival darkroom plate selection.",
      aspect,
      aspectRatioClass,
      coverImage: coverImage.trim() || undefined,
      imageCount: parseInt(imageCount, 10) || 16,
      isVisible,
      featuredOnHome,
      sortOrder: parseInt(sortOrder, 10) || 5
    };
    if (onCreateCollection) {
      onCreateCollection(payload);
    } else if (onSuccessAdd) {
      onSuccessAdd(payload);
    }

    // Reset state & close
    setTitle("");
    setCuratorNote("");
    setCoverImage("");
    onClose();
  };
  return <Dialog open={isOpen} onOpenChange={open => {
    if (!open) onClose();
  }} data-api-unique-id='uploadseriesmodal-r04487b69ef992f6d-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
      <DialogContent className="max-h-[calc(100dvh-4rem)] overflow-y-auto sm:max-w-lg p-6 bg-card text-card-foreground border border-border" data-api-unique-id='uploadseriesmodal-r16e3e8c93c3a0591-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
        <DialogHeader data-api-unique-id='uploadseriesmodal-rae778bcb377b9cbe-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
          <DialogTitle className="font-serif text-lg font-semibold text-foreground" data-api-unique-id='uploadseriesmodal-r52a7508eaf88b260-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            Ingest New Photography Series
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground" data-api-unique-id='uploadseriesmodal-r1570a781b19ad033-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            Catalog master photographic plates, roll numbering, and exhibition parameters into curatorial collection.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2" data-api-unique-id='uploadseriesmodal-r74a0282db3f7eacf-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
          <div data-api-unique-id='uploadseriesmodal-r160915d17a280dbc-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-r62f4ccbacc9025c8-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Series Title <span className="text-primary" data-api-unique-id='uploadseriesmodal-rb81dd5ffb8d03cb4-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>*</span>
            </label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Nocturne Reflections / Venice Solitude" required className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='uploadseriesmodal-r9e8bdd271897da4c-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
          </div>

          <div className="grid grid-cols-2 gap-3" data-api-unique-id='uploadseriesmodal-rfd2364d6bf1e1707-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <div data-api-unique-id='uploadseriesmodal-r5511ae748c610a24-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-rc51de0fffcd9f0b3-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                Roll / Archive No.
              </label>
              <input type="text" value={rollNumber} onChange={e => setRollNumber(e.target.value)} placeholder="Roll No. 049" className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='uploadseriesmodal-r49bc3a0c65539808-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
            </div>

            <div data-api-unique-id='uploadseriesmodal-r3840600733137484-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-rb846d318570e2ac8-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                Plate Count (Estimate)
              </label>
              <input type="number" value={imageCount} onChange={e => setImageCount(e.target.value)} min={1} max={120} className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='uploadseriesmodal-rb5a4d99ef787fcfe-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
            </div>
          </div>

          <div data-api-unique-id='uploadseriesmodal-rfc009bd492ebee8c-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-r5107355523c1ac50-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Film Stock & Photographic Medium
            </label>
            <input type="text" value={medium} onChange={e => setMedium(e.target.value)} placeholder="e.g. 120 Format / Ilford HP5 Plus" className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='uploadseriesmodal-r767f5d6d8d2fe934-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
          </div>

          <div className="grid grid-cols-2 gap-3" data-api-unique-id='uploadseriesmodal-rda4811fa32f05be3-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <div data-api-unique-id='uploadseriesmodal-rc0ee45f5b6e73823-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-rd05957fdfa701723-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                Dominant Framing Aspect
              </label>
              <Select value={aspect} onValueChange={val => {
              const asp = val as AspectOrientation;
              setAspect(asp);
              setAspectRatioClass(asp === "PORTRAIT" ? "aspect-[4/5]" : "aspect-[16/9]");
            }} data-api-unique-id='uploadseriesmodal-rd7331c29c4f0251c-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                <SelectTrigger className="w-full text-xs h-9 bg-background border-border" data-api-unique-id='uploadseriesmodal-r72f9f50e43466134-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                  <SelectValue data-api-unique-id='uploadseriesmodal-r77e3e310a3df376f-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    {aspect === "PORTRAIT" ? "Portrait (4:5)" : "Landscape (16:9)"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent data-api-unique-id='uploadseriesmodal-r313c782cfef1f6f5-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                  <SelectItem value="PORTRAIT" data-api-unique-id='uploadseriesmodal-r06bf715108d91a6b-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>Portrait (4:5)</SelectItem>
                  <SelectItem value="LANDSCAPE" data-api-unique-id='uploadseriesmodal-r45759ba1bc2fcd70-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>Landscape (16:9)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div data-api-unique-id='uploadseriesmodal-r9dacc968b6f789aa-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-re3923c679ccffa83-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                Catalog Sequence Sort Order
              </label>
              <input type="number" value={sortOrder} onChange={e => setSortOrder(e.target.value)} min={1} max={999} className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='uploadseriesmodal-r8cfd46591363511d-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
            </div>
          </div>

          {/* Cover Image Upload (Backend Dropzone pattern) */}
          <div data-api-unique-id='uploadseriesmodal-r1113e55d94959c0c-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-r05d56434156c4608-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Archival Cover Plate
            </label>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} data-api-unique-id='uploadseriesmodal-r039f2ddf240cb873-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />

            {coverImage ? <div className="relative rounded-sm border border-border overflow-hidden bg-muted/20 p-2 flex items-center justify-between" data-api-unique-id='uploadseriesmodal-rb691f3b3246acf0b-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                <div className="flex items-center gap-3 min-w-0" data-api-unique-id='uploadseriesmodal-r4d8d7edc79785de9-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                  <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-muted border border-border flex-shrink-0" data-api-unique-id='uploadseriesmodal-r05529329cbf0b3be-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    <img src={coverImage} alt="Cover plate preview" className="w-full h-full object-cover" data-api-unique-id='uploadseriesmodal-r484e27144a099726-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
                  </div>
                  <div className="min-w-0 flex-1" data-api-unique-id='uploadseriesmodal-rb9f0a60438e2a459-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    <p className="text-xs font-medium text-foreground truncate" data-api-unique-id='uploadseriesmodal-r6d821cea896092b6-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>Cover plate uploaded</p>
                    <p className="text-[11px] text-muted-foreground truncate font-mono" data-api-unique-id='uploadseriesmodal-r8f46a63ad6d39889-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>{coverImage}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2" data-api-unique-id='uploadseriesmodal-r536701625dc3fcb1-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                  <button type="button" onClick={() => fileInputRef.current?.click()} disabled={isUploading} className="text-xs text-primary hover:underline px-2 py-1" data-api-unique-id='uploadseriesmodal-r8be6be916bb8d75d-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    Replace
                  </button>
                  <button type="button" onClick={handleRemoveCover} aria-label="Remove image" className="p-1 rounded text-muted-foreground hover:text-destructive hover:bg-muted" data-api-unique-id='uploadseriesmodal-r4013c20354d8abd3-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    <X className="w-4 h-4" data-api-unique-id='uploadseriesmodal-rf0acf57eaf0c7f5f-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
                  </button>
                </div>
              </div> : <div onClick={() => !isUploading && fileInputRef.current?.click()} onDragOver={e => e.preventDefault()} onDrop={e => {
            e.preventDefault();
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile) {
              setIsUploading(true);
              upload_image_file(droppedFile).then(url => {
                setCoverImage(url);
                toast.success("Cover image plate uploaded successfully");
              }).catch(() => toast.error("Failed to upload image file")).finally(() => setIsUploading(false));
            }
          }} className={`rounded-sm border border-dashed border-border p-4 text-center cursor-pointer transition-colors hover:border-primary/60 hover:bg-muted/30 ${isUploading ? "opacity-60 pointer-events-none" : ""}`} data-api-unique-id='uploadseriesmodal-r5048e9e865ed85ae-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                {isUploading ? <div className="flex flex-col items-center justify-center py-2 space-y-1" data-api-unique-id='uploadseriesmodal-r1afb27e2eedb0b1a-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    <Loader2 className="w-5 h-5 text-primary animate-spin" data-api-unique-id='uploadseriesmodal-r1930d8df160ba473-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
                    <span className="text-xs text-muted-foreground" data-api-unique-id='uploadseriesmodal-rb5cf028ec6cfeb7b-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>Uploading archival image plate...</span>
                  </div> : <div className="flex flex-col items-center justify-center py-2 space-y-1" data-api-unique-id='uploadseriesmodal-r8f8d73d6b6addaae-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-1" data-api-unique-id='uploadseriesmodal-r8368ba41c4ac3db1-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                      <Upload className="w-4 h-4" data-api-unique-id='uploadseriesmodal-r38e4895ffea5a74c-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
                    </div>
                    <p className="text-xs font-medium text-foreground" data-api-unique-id='uploadseriesmodal-r94cd6b0df64927c6-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                      Click or drag medium-format plate to upload
                    </p>
                    <p className="text-[11px] text-muted-foreground" data-api-unique-id='uploadseriesmodal-r9f2185a118c8a8ea-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                      PNG, JPG, WEBP up to archival master resolution
                    </p>
                  </div>}
              </div>}
          </div>

          <div data-api-unique-id='uploadseriesmodal-r8e8d189581e58c68-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <label className="text-xs font-semibold text-foreground block mb-1" data-api-unique-id='uploadseriesmodal-r09bd7261afb84761-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Curator Annotation Note
            </label>
            <textarea rows={3} value={curatorNote} onChange={e => setCuratorNote(e.target.value)} placeholder="Exhibition context, lighting setup notes, and archival print recommendations..." className="w-full text-xs p-2.5 rounded-sm border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" data-api-unique-id='uploadseriesmodal-r548b9fa5b6300947-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
          </div>

          <div className="p-3 bg-muted/40 rounded-sm border border-border space-y-2" data-api-unique-id='uploadseriesmodal-ra0a266b71bb0e7fd-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider block" data-api-unique-id='uploadseriesmodal-rec9cb05278d9ae06-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Exhibition Wall Visibility Flags
            </span>
            <div className="flex items-center justify-between text-xs" data-api-unique-id='uploadseriesmodal-r6f469c6168a40d54-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              <label className="text-muted-foreground cursor-pointer" htmlFor="modal-vis-toggle" data-api-unique-id='uploadseriesmodal-rb3582993b1a4f6c4-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                Publish on public gallery wall (is_visible)
              </label>
              <input id="modal-vis-toggle" type="checkbox" checked={isVisible} onChange={e => setIsVisible(e.target.checked)} className="h-4 w-4 rounded border-border accent-primary cursor-pointer" data-api-unique-id='uploadseriesmodal-r28c8a7878a95f917-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
            </div>
            <div className="flex items-center justify-between text-xs" data-api-unique-id='uploadseriesmodal-rd1aee8161bbfa1d9-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              <label className="text-muted-foreground cursor-pointer" htmlFor="modal-featured-toggle" data-api-unique-id='uploadseriesmodal-r883a4eb8b6d61b30-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
                Pin to homepage showcase folio (featured_on_home)
              </label>
              <input id="modal-featured-toggle" type="checkbox" checked={featuredOnHome} onChange={e => setFeaturedOnHome(e.target.checked)} className="h-4 w-4 rounded border-border accent-primary cursor-pointer" data-api-unique-id='uploadseriesmodal-rb1a914661ae12601-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal' />
            </div>
          </div>

          <div className="pt-3 border-t border-border flex items-center justify-end gap-2" data-api-unique-id='uploadseriesmodal-r241908aafda2783d-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
            <button type="button" onClick={onClose} disabled={isUploading} className="px-3.5 py-1.5 text-xs rounded-sm border border-border hover:bg-muted text-muted-foreground transition-colors disabled:opacity-50" data-api-unique-id='uploadseriesmodal-r03de0fecca575033-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Cancel
            </button>
            <button type="submit" disabled={isUploading} className="px-4 py-1.5 text-xs font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50" data-api-unique-id='uploadseriesmodal-r78b23f126c2bbcf3-s1707706234' data-api-unique-page-name='src/backend/components/AdminHome/UploadSeriesModal'>
              Register Folio
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
}