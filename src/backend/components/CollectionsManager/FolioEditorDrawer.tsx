"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Upload, Sliders, ShieldCheck } from "lucide-react";
import { PhotoCollectionItem, AspectOrientation, SaveCollectionInput } from "@/backend/types/CollectionsManager";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { upload_image_file } from "@/tools/tools";
import { toast } from "sonner";
interface FolioEditorDrawerProps {
  isOpen: boolean;
  initialData?: PhotoCollectionItem | null;
  collection?: PhotoCollectionItem | null;
  onClose: () => void;
  onSave: (savedItem: SaveCollectionInput) => void;
}
const ASPECT_OPTIONS: {
  value: AspectOrientation;
  label: string;
  ratioClass: string;
}[] = [{
  value: "PORTRAIT",
  label: "Portrait (4:5 Gallery Ratio)",
  ratioClass: "aspect-[4/5]"
}, {
  value: "LANDSCAPE",
  label: "Landscape (3:2 Print Ratio)",
  ratioClass: "aspect-[3/2]"
}];
export default function FolioEditorDrawer({
  isOpen,
  initialData,
  collection,
  onClose,
  onSave
}: FolioEditorDrawerProps) {
  const currentRecord = initialData ?? collection ?? null;
  const [title, setTitle] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [medium, setMedium] = useState("");
  const [curatorNote, setCuratorNote] = useState("");
  const [aspect, setAspect] = useState<AspectOrientation>("PORTRAIT");
  const [aspectRatioClass, setAspectRatioClass] = useState("aspect-[4/5]");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [imageCount, setImageCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<number>(10);
  const [isVisible, setIsVisible] = useState(true);
  const [featuredOnHome, setFeaturedOnHome] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (currentRecord) {
      setTitle(currentRecord.title || "");
      setRollNumber(currentRecord.rollNumber || "");
      setMedium(currentRecord.medium || "");
      setCuratorNote(currentRecord.curatorNote || "");
      setAspect(currentRecord.aspect || "PORTRAIT");
      setAspectRatioClass(currentRecord.aspectRatioClass || "aspect-[4/5]");
      setCoverImage(currentRecord.coverImage || null);
      setImageCount(currentRecord.imageCount ?? 0);
      setSortOrder(currentRecord.sortOrder ?? 10);
      setIsVisible(currentRecord.isVisible ?? true);
      setFeaturedOnHome(currentRecord.featuredOnHome ?? false);
    } else {
      setTitle("");
      setRollNumber("");
      setMedium("120 Medium Format / Kodak Portra 400");
      setCuratorNote("");
      setAspect("PORTRAIT");
      setAspectRatioClass("aspect-[4/5]");
      setCoverImage(null);
      setImageCount(0);
      setSortOrder(10);
      setIsVisible(true);
      setFeaturedOnHome(false);
    }
  }, [currentRecord, isOpen]);
  const handleAspectChange = (val: string) => {
    const selected = ASPECT_OPTIONS.find(opt => opt.value === val);
    if (selected) {
      setAspect(selected.value);
      setAspectRatioClass(selected.ratioClass);
    }
  };
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await upload_image_file(file);
      setCoverImage(uploadedUrl);
      toast.success("Cover image uploaded successfully");
    } catch {
      toast.error("Failed to upload cover image. Please retry.");
    } finally {
      setIsUploading(false);
      if (e.target) {
        e.target.value = "";
      }
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Folio title is required");
      return;
    }
    const payload: SaveCollectionInput = {
      ...(currentRecord?.id ? {
        id: currentRecord.id
      } : {}),
      title: title.trim(),
      rollNumber: rollNumber.trim() || "Roll No. Undefined",
      medium: medium.trim() || "Gelatin Silver Print",
      curatorNote: curatorNote.trim(),
      aspect,
      aspectRatioClass,
      coverImage: coverImage || null,
      imageCount: Number(imageCount) || 0,
      isVisible,
      featuredOnHome,
      sortOrder: Number(sortOrder) || 10
    };
    onSave(payload);
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-200" data-api-unique-id='folioeditordrawer-r482ca8369c50f43e-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
      <div className="w-full max-w-xl bg-card text-card-foreground shadow-2xl flex flex-col h-full border-l border-border" role="dialog" aria-modal="true" aria-labelledby="drawer-title" data-api-unique-id='folioeditordrawer-r886991c12013ad23-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between shrink-0 bg-card" data-api-unique-id='folioeditordrawer-r87a3593e72ec2d42-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
          <div className="min-w-0" data-api-unique-id='folioeditordrawer-r634222a52f29546b-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <h2 id="drawer-title" className="text-base font-semibold tracking-tight text-card-foreground" data-api-unique-id='folioeditordrawer-r7c9ff05e03623de8-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              {currentRecord ? "Edit Series Folio" : "Catalog New Series Folio"}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5" data-api-unique-id='folioeditordrawer-r8928b6a56f453f65-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              Darkroom index, print medium specifications, and curatorial statement
            </p>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Close drawer" data-api-unique-id='folioeditordrawer-r9b9cbe9fbcea84bf-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <X className="h-5 w-5" data-api-unique-id='folioeditordrawer-r41cd019492af9d37-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
          </button>
        </div>

        {/* Drawer Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto p-6 space-y-6" data-api-unique-id='folioeditordrawer-r77f27b57fc352bba-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
          {/* Core Identification */}
          <div className="space-y-4" data-api-unique-id='folioeditordrawer-r8006923c9b5a2055-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <div className="flex items-center gap-2 pb-1 border-b border-border/60" data-api-unique-id='folioeditordrawer-r89027683df229e57-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <Sliders className="h-4 w-4 text-primary" data-api-unique-id='folioeditordrawer-r973004bda0d4aebd-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" data-api-unique-id='folioeditordrawer-r9db4e3a6c114b223-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                Folio Metadata
              </span>
            </div>

            <div data-api-unique-id='folioeditordrawer-rcdf5f5892b39b848-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <label className="block text-xs font-medium text-card-foreground mb-1" data-api-unique-id='folioeditordrawer-r5afd8c78643808b5-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                Collection Title <span className="text-destructive" data-api-unique-id='folioeditordrawer-r3c6ddba99e934772-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>*</span>
              </label>
              <input type="text" required value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Nocturnes of Monhegan Island" className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='folioeditordrawer-r2e1197e77b78a2c0-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='folioeditordrawer-r071eec2a31579f63-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <div data-api-unique-id='folioeditordrawer-re67c21572df04e6e-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <label className="block text-xs font-medium text-card-foreground mb-1" data-api-unique-id='folioeditordrawer-r1b4265c6ee57c696-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Roll / Matrix Number
                </label>
                <input type="text" value={rollNumber} onChange={e => setRollNumber(e.target.value)} placeholder="e.g. Roll No. 042" className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md font-mono text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='folioeditordrawer-r04beff64581b8e9a-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              </div>

              <div data-api-unique-id='folioeditordrawer-r0e946ad7ed719c4a-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <label className="block text-xs font-medium text-card-foreground mb-1" data-api-unique-id='folioeditordrawer-rff53f4b6f49f52cb-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Display Sort Rank
                </label>
                <input type="number" min="0" max="999" value={sortOrder} onChange={e => setSortOrder(Number(e.target.value))} className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md font-mono text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='folioeditordrawer-r085c10132e878108-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              </div>
            </div>

            <div data-api-unique-id='folioeditordrawer-r2529d9629aee0bcb-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <label className="block text-xs font-medium text-card-foreground mb-1" data-api-unique-id='folioeditordrawer-r371d7582a4e83f7c-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                Photographic Medium & Chemistry
              </label>
              <input type="text" value={medium} onChange={e => setMedium(e.target.value)} placeholder="e.g. 120 Medium Format / Portra 160 / Fiber Print" className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='folioeditordrawer-re1c9b1ded0096670-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='folioeditordrawer-r9093dcd7c0018c94-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <div data-api-unique-id='folioeditordrawer-r56ca8e2078961908-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <label className="block text-xs font-medium text-card-foreground mb-1" data-api-unique-id='folioeditordrawer-r65480081531db94e-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Aspect Orientation
                </label>
                <Select value={aspect} onValueChange={handleAspectChange} key={currentRecord?.id || "new-folio"} data-api-unique-id='folioeditordrawer-r729dc374315d48f9-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  <SelectTrigger className="w-full" data-api-unique-id='folioeditordrawer-r8cada855a428cc0d-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    <SelectValue data-api-unique-id='folioeditordrawer-rabbbdd0bcb412ae4-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                      {aspect === "PORTRAIT" ? "Portrait (4:5 Gallery Ratio)" : "Landscape (3:2 Print Ratio)"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent data-api-unique-id='folioeditordrawer-rfee8ae596c0d131c-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    <SelectItem value="PORTRAIT" data-api-unique-id='folioeditordrawer-r0ca5e94c595e513a-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>Portrait (4:5 Gallery Ratio)</SelectItem>
                    <SelectItem value="LANDSCAPE" data-api-unique-id='folioeditordrawer-rd5a8bacc440e6b05-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>Landscape (3:2 Print Ratio)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div data-api-unique-id='folioeditordrawer-r6516eca46f9361b9-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <label className="block text-xs font-medium text-card-foreground mb-1" data-api-unique-id='folioeditordrawer-rb50669560fcde8bf-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Cataloged Plates Count
                </label>
                <input type="number" min="0" value={imageCount} onChange={e => setImageCount(Number(e.target.value))} className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md font-mono text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='folioeditordrawer-redc6ca3b78b47fd3-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              </div>
            </div>
          </div>

          {/* Curatorial Darkroom Note */}
          <div className="space-y-2" data-api-unique-id='folioeditordrawer-r25812869d76ca583-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <label className="block text-xs font-medium text-card-foreground" data-api-unique-id='folioeditordrawer-r8be80a6813b36861-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              Darkroom Curatorial Note & Lighting Blueprint
            </label>
            <textarea rows={4} value={curatorNote} onChange={e => setCuratorNote(e.target.value)} placeholder="Curatorial statement, darkroom lighting setup, archival fiber paper grade, and developer dilution specs..." className="w-full p-3 text-sm bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y" data-api-unique-id='folioeditordrawer-rc94c8ee19b46ed3c-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
            <p className="text-[11px] text-muted-foreground" data-api-unique-id='folioeditordrawer-r5b3a7c23d4341d74-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              Detailed curatorial notes are displayed on public series examination cards and archival certs.
            </p>
          </div>

          {/* Cover Image Upload (Runtime User Upload Capability for Backend Admin) */}
          <div className="space-y-3" data-api-unique-id='folioeditordrawer-r7a3822156724b5c8-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <label className="block text-xs font-medium text-card-foreground" data-api-unique-id='folioeditordrawer-r93fbc3ed6140aed0-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              Folio Cover Contact Plate
            </label>

            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} data-api-unique-id='folioeditordrawer-ra0056375a8f51ecd-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />

            {coverImage ? <div className="relative rounded-lg border border-border p-3 bg-muted flex items-center gap-4" data-api-unique-id='folioeditordrawer-r8391fe8e41dd8cce-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <div className="h-20 w-20 shrink-0 rounded overflow-hidden bg-background border border-border" data-api-unique-id='folioeditordrawer-rc799edfd45ca8bad-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  <img src={coverImage} alt="Cover plate preview" className="h-full w-full object-cover" data-api-unique-id='folioeditordrawer-r08ee71ae2bea013f-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
                </div>
                <div className="min-w-0 flex-1 space-y-1" data-api-unique-id='folioeditordrawer-r903059b58987d746-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  <p className="text-xs font-medium text-foreground truncate" data-api-unique-id='folioeditordrawer-rf51fea93b6dcb369-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    Plate Cover Registered
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground break-all truncate" data-api-unique-id='folioeditordrawer-r786c7eaf597709ef-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    {coverImage}
                  </p>
                  <div className="flex gap-2 pt-1" data-api-unique-id='folioeditordrawer-rbb0e8b25b997a445-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    <button type="button" disabled={isUploading} onClick={() => fileInputRef.current?.click()} className="text-xs font-medium text-primary hover:underline disabled:opacity-50" data-api-unique-id='folioeditordrawer-rd3871adc9f2e0b81-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                      {isUploading ? "Uploading..." : "Replace Image"}
                    </button>
                    <span className="text-muted-foreground text-xs" data-api-unique-id='folioeditordrawer-rc10c87f5e32733cb-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>•</span>
                    <button type="button" onClick={() => setCoverImage(null)} className="text-xs font-medium text-destructive hover:underline" data-api-unique-id='folioeditordrawer-r7e23ec01c6dabdb5-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                      Remove
                    </button>
                  </div>
                </div>
              </div> : <div onClick={() => fileInputRef.current?.click()} onDragOver={e => e.preventDefault()} onDrop={e => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file) {
              setIsUploading(true);
              upload_image_file(file).then(url => {
                setCoverImage(url);
                toast.success("Cover image uploaded successfully");
              }).catch(() => {
                toast.error("Failed to upload cover image. Please retry.");
              }).finally(() => {
                setIsUploading(false);
              });
            }
          }} onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              fileInputRef.current?.click();
            }
          }} tabIndex={0} role="button" className="cursor-pointer border-2 border-dashed border-border hover:border-primary/60 rounded-lg p-6 text-center bg-background/50 hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='folioeditordrawer-ra03ec82584ceba72-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <div className="flex flex-col items-center justify-center gap-2" data-api-unique-id='folioeditordrawer-ra9a711b1682af4ef-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  <div className="p-2.5 rounded-full bg-secondary text-secondary-foreground" data-api-unique-id='folioeditordrawer-r20b396058f25986c-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    <Upload className="h-5 w-5" data-api-unique-id='folioeditordrawer-rd27d4ec4222b4096-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
                  </div>
                  <div data-api-unique-id='folioeditordrawer-r920e4e93fdff27e4-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                    <span className="text-sm font-medium text-foreground" data-api-unique-id='folioeditordrawer-rfaf88b7e6b7870a8-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                      {isUploading ? "Uploading plate..." : "Click or drag to upload master cover"}
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5" data-api-unique-id='folioeditordrawer-r66c5dd469d5aad55-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                      TIFF, JPEG, PNG formats supported for archival preview
                    </p>
                  </div>
                </div>
              </div>}
          </div>

          {/* Visibility and Feature Toggles */}
          <div className="rounded-lg border border-border p-4 bg-muted space-y-4" data-api-unique-id='folioeditordrawer-rc412d691e8ba7f46-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <div className="flex items-center gap-2 pb-1 border-b border-border/50" data-api-unique-id='folioeditordrawer-re126b037f701969a-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <ShieldCheck className="h-4 w-4 text-primary" data-api-unique-id='folioeditordrawer-r5c6e61e76bd59840-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" data-api-unique-id='folioeditordrawer-r566529603764b932-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                Exhibition & Wall Publishing Flags
              </span>
            </div>

            <div className="flex items-center justify-between gap-4" data-api-unique-id='folioeditordrawer-r8a6982278bb6d911-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <div className="min-w-0 flex-1" data-api-unique-id='folioeditordrawer-r7e53c15ad74a1a86-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <span className="text-xs font-medium text-foreground block" data-api-unique-id='folioeditordrawer-r9000bd670eb0de6f-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Public Exhibition Wall (is_visible)
                </span>
                <span className="text-[11px] text-muted-foreground block" data-api-unique-id='folioeditordrawer-r5e534b9416facba7-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Publish this folio to the public portfolio series wall.
                </span>
              </div>
              <button type="button" role="switch" aria-checked={isVisible} onClick={() => setIsVisible(!isVisible)} className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isVisible ? "bg-emerald-600" : "bg-secondary"}`} data-api-unique-id='folioeditordrawer-r8686420b32be3eb5-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isVisible ? "translate-x-5" : "translate-x-0"}`} data-api-unique-id='folioeditordrawer-r35eecfbc53e9c37e-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/40" data-api-unique-id='folioeditordrawer-r2907335f5536e068-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              <div className="min-w-0 flex-1" data-api-unique-id='folioeditordrawer-rb6c419ccabf7e883-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <span className="text-xs font-medium text-foreground block" data-api-unique-id='folioeditordrawer-r466b7ea16a38fe8e-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Featured on Home (featured_on_home)
                </span>
                <span className="text-[11px] text-muted-foreground block" data-api-unique-id='folioeditordrawer-r7d72ebb394c35046-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                  Pin this series to the homepage curated marquee highlight grid.
                </span>
              </div>
              <button type="button" role="switch" aria-checked={featuredOnHome} onClick={() => setFeaturedOnHome(!featuredOnHome)} className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${featuredOnHome ? "bg-primary" : "bg-secondary"}`} data-api-unique-id='folioeditordrawer-r3507ab6f7ed52eca-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${featuredOnHome ? "translate-x-5" : "translate-x-0"}`} data-api-unique-id='folioeditordrawer-r539df91b98394475-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer' />
              </button>
            </div>
          </div>

          {/* Drawer Actions */}
          <div className="pt-4 border-t border-border flex items-center justify-end gap-3" data-api-unique-id='folioeditordrawer-r5928de0306493259-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
            <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-medium rounded-md border border-border bg-background text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer" data-api-unique-id='folioeditordrawer-r638f01c2b90b9106-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              Cancel
            </button>
            <button type="submit" disabled={isUploading} className="px-4 py-2 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 cursor-pointer" data-api-unique-id='folioeditordrawer-r9689802a5d4084ae-s1988672659' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioEditorDrawer'>
              {currentRecord ? "Commit Folio Changes" : "Create Series Folio"}
            </button>
          </div>
        </form>
      </div>
    </div>;
}