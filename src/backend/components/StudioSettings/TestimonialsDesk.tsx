"use client";

import React, { useState, useRef } from "react";
import { Star, Sparkles, Plus, Edit3, Trash2, Upload, Loader2 } from "lucide-react";
import { ClientTestimonialItem, ProjectType } from "@/backend/types/StudioSettings";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { upload_image_file } from "@/tools/tools";
interface TestimonialsDeskProps {
  testimonials: ClientTestimonialItem[];
  onToggleFeatured: (id: string) => void;
  onSaveTestimonial: (item: ClientTestimonialItem) => void;
  onDeleteTestimonial: (id: string) => void;
}
const SERVICE_TYPE_LABELS: Record<ProjectType, string> = {
  EDITORIAL: "Editorial",
  PORTRAIT: "Portraiture",
  COMMERCIAL: "Commercial",
  ACQUISITION: "Acquisition"
};
export default function TestimonialsDesk({
  testimonials,
  onToggleFeatured,
  onSaveTestimonial,
  onDeleteTestimonial
}: TestimonialsDeskProps) {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ClientTestimonialItem | null>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formOrg, setFormOrg] = useState("");
  const [formQuote, setFormQuote] = useState("");
  const [formServiceType, setFormServiceType] = useState<ProjectType>("EDITORIAL");
  const [formRating, setFormRating] = useState<number>(5);
  const [formIsFeatured, setFormIsFeatured] = useState<boolean>(true);
  const [formSortOrder, setFormSortOrder] = useState<number>(10);
  const [formAvatarImage, setFormAvatarImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const filteredTestimonials = testimonials.filter(t => {
    if (filterType === "ALL") return true;
    if (filterType === "FEATURED") return t.isFeatured;
    return t.serviceType === filterType;
  });
  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormName("");
    setFormTitle("");
    setFormOrg("");
    setFormQuote("");
    setFormServiceType("EDITORIAL");
    setFormRating(5);
    setFormIsFeatured(true);
    setFormSortOrder(testimonials.length + 10);
    setFormAvatarImage(null);
    setIsDialogOpen(true);
  };
  const handleOpenEdit = (item: ClientTestimonialItem) => {
    setEditingItem(item);
    setFormName(item.clientName);
    setFormTitle(item.clientTitle);
    setFormOrg(item.organization);
    setFormQuote(item.quote);
    setFormServiceType(item.serviceType);
    setFormRating(item.rating);
    setFormIsFeatured(item.isFeatured);
    setFormSortOrder(item.sortOrder);
    setFormAvatarImage(item.avatarImage || null);
    setIsDialogOpen(true);
  };
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await upload_image_file(file);
      setFormAvatarImage(uploadedUrl);
      toast.success("Avatar uploaded successfully.");
    } catch {
      toast.error("Failed to upload avatar image.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formQuote.trim()) {
      toast.error("Please provide client name and testimonial quote.");
      return;
    }
    const itemToSave: ClientTestimonialItem = {
      id: editingItem ? editingItem.id : `test-${Date.now()}`,
      clientId: editingItem?.clientId || null,
      clientName: formName.trim(),
      clientTitle: formTitle.trim(),
      organization: formOrg.trim(),
      quote: formQuote.trim(),
      serviceType: formServiceType,
      rating: formRating,
      avatarImage: formAvatarImage,
      isFeatured: formIsFeatured,
      sortOrder: Number(formSortOrder) || 10,
      createdAt: editingItem?.createdAt || new Date(),
      updatedAt: new Date()
    };
    onSaveTestimonial(itemToSave);
    setIsDialogOpen(false);
  };
  return <section data-controller-name="Client Testimonials and Press Reviews Desk" className="rounded-lg border border-border bg-card p-4 lg:p-6 text-card-foreground shadow-sm" data-api-unique-id='testimonialsdesk-r05ba39ffc3082e20-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
      {/* Header and Controls */}
      <div className="flex flex-col gap-4 border-b border-border pb-4 lg:flex-row lg:items-center lg:justify-between" data-api-unique-id='testimonialsdesk-rf740f1b0f6e73f55-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
        <div className="min-w-0" data-api-unique-id='testimonialsdesk-r34f1619d463f9669-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
          <div className="flex items-center gap-2" data-api-unique-id='testimonialsdesk-rc707b343e0eb5200-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            <h2 className="text-base font-semibold tracking-tight" data-api-unique-id='testimonialsdesk-rfe1b5045824ac4ba-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Client Testimonials & Press Reviews</h2>
            <span className="inline-flex shrink-0 items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground" data-api-unique-id='testimonialsdesk-r590be30b512db130-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              {testimonials.length} reviews ({testimonials.filter(t => t.isFeatured).length} homepage ribbon)
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground" data-api-unique-id='testimonialsdesk-r4585381e62109626-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            Curate collector and editorial endorsements. Active featured quotes are highlighted on public portfolio ribbons.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2" data-api-unique-id='testimonialsdesk-r191790c1dfb8a76e-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
          {/* Quick Filter */}
          <div className="flex items-center rounded-md border border-border bg-background p-0.5 text-xs" data-api-unique-id='testimonialsdesk-r4d8495c342e17f90-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            <button type="button" onClick={() => setFilterType("ALL")} className={`rounded px-2.5 py-1 transition-colors ${filterType === "ALL" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`} data-api-unique-id='testimonialsdesk-r98dab47b5b842fd6-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              All
            </button>
            <button type="button" onClick={() => setFilterType("FEATURED")} className={`rounded px-2.5 py-1 transition-colors ${filterType === "FEATURED" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`} data-api-unique-id='testimonialsdesk-r868f85e08efc3ef8-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              Featured
            </button>
            <button type="button" onClick={() => setFilterType("EDITORIAL")} className={`rounded px-2.5 py-1 transition-colors ${filterType === "EDITORIAL" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`} data-api-unique-id='testimonialsdesk-r07dd8584791f0a4b-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              Editorial
            </button>
            <button type="button" onClick={() => setFilterType("COMMERCIAL")} className={`rounded px-2.5 py-1 transition-colors ${filterType === "COMMERCIAL" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`} data-api-unique-id='testimonialsdesk-r282b5385619d9764-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              Commercial
            </button>
          </div>

          <button type="button" onClick={handleOpenCreate} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='testimonialsdesk-r7e5265853f5f3551-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            <Plus className="h-3.5 w-3.5" data-api-unique-id='testimonialsdesk-r4d1c246dedb4acb1-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
            Add Testimonial
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" data-api-unique-id='testimonialsdesk-r1623a700e21e4763-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
        {filteredTestimonials.map((item, index) => <article key={item.id} className={`flex flex-col justify-between rounded-lg border p-4 transition-shadow shadow-sm ${item.isFeatured ? "border-primary/40 bg-card" : "border-border bg-card/60"}`} data-api-unique-id='testimonialsdesk-r6c0f7b0e61113940-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
            <div className="min-w-0" data-api-unique-id='testimonialsdesk-ra4ae4d95ae699f9f-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
              {/* Card Top Meta */}
              <div className="flex items-start justify-between gap-2" data-api-unique-id='testimonialsdesk-r6ca80f06e9d6b2de-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                <div className="flex items-center gap-2" data-api-unique-id='testimonialsdesk-r86c866f6870d588f-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground" data-api-unique-id='testimonialsdesk-r3347f5a795f83ce4-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                    {SERVICE_TYPE_LABELS[item.serviceType]}
                  </span>
                  {/* Rating Stars */}
                  <div className="flex items-center text-amber-600" data-api-unique-id='testimonialsdesk-rf2ed761706fd11ea-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                    {Array.from({
                  length: 5
                }).map((_, index1) => <Star key={index1} className={`h-3 w-3 ${index1 < item.rating ? "fill-amber-500 text-amber-500" : "fill-muted text-muted-foreground/30"}`} data-api-unique-id='testimonialsdesk-rc98502ee0f9842bf-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' />)}
                  </div>
                </div>

                {/* Homepage ribbon toggle */}
                <button type="button" onClick={() => onToggleFeatured(item.id)} title="Toggle homepage ribbon showcase" className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium transition-colors ${item.isFeatured ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`} data-api-unique-id='testimonialsdesk-r07dfb91292b1eea0-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                  <Sparkles className="h-3 w-3" data-api-unique-id='testimonialsdesk-r0b24d983cfc3fea9-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' />
                  {item.isFeatured ? "Featured" : "Hidden"}
                </button>
              </div>

              {/* Quote snippet */}
              <div className="mt-3 relative pl-3 border-l-2 border-primary/50 text-xs italic leading-relaxed text-card-foreground" data-api-unique-id='testimonialsdesk-rf84c4cd9748dc22b-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                <p className="line-clamp-4 font-serif" data-api-unique-id='testimonialsdesk-r197744c962542e82-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' data-api-bind-info={`filteredTestimonials-${index}-quote`} data-api-map-var-name='item'>{item.quote}</p>
              </div>
            </div>

            {/* Author footnote and actions */}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3" data-api-unique-id='testimonialsdesk-r788c941283e33d19-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
              <div className="flex items-center gap-2.5 min-w-0" data-api-unique-id='testimonialsdesk-r7ebd43da406c2210-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border bg-muted flex items-center justify-center" data-api-unique-id='testimonialsdesk-rbd894d71b511529a-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                  {item.avatarImage ? <img src={item.avatarImage} alt={item.clientName} className="h-full w-full object-cover" data-api-unique-id='testimonialsdesk-r10c3d4ffcaab9384-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' /> : <span className="text-[10px] font-semibold text-muted-foreground uppercase" data-api-unique-id='testimonialsdesk-r53fc1b65a3ea21f8-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                      {item.clientName.slice(0, 2)}
                    </span>}
                </div>
                <div className="min-w-0 flex-1" data-api-unique-id='testimonialsdesk-r3ad6cd35349c81f8-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                  <p className="truncate text-xs font-semibold leading-tight" data-api-unique-id='testimonialsdesk-r51fd68264d9a6578-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' data-api-bind-info={`filteredTestimonials-${index}-clientName`} data-api-map-var-name='item'>{item.clientName}</p>
                  <p className="truncate text-[11px] text-muted-foreground leading-tight" data-api-unique-id='testimonialsdesk-re60de7a3b7070fd1-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' data-api-bind-info={`filteredTestimonials-${index}-clientTitle`} data-api-map-var-name='item'>
                    {item.clientTitle} · {item.organization}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1" data-api-unique-id='testimonialsdesk-r02ea4f966f05a9ce-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                <button type="button" onClick={() => handleOpenEdit(item)} className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground" title="Edit testimonial" data-api-unique-id='testimonialsdesk-r7c10c67c683cadad-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                  <Edit3 className="h-3.5 w-3.5" data-api-unique-id='testimonialsdesk-rf518354fab1ebe27-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' />
                </button>
                <button type="button" onClick={() => onDeleteTestimonial(item.id)} className="rounded p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive" title="Remove review" data-api-unique-id='testimonialsdesk-rdeef1013fe755c4b-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1'>
                  <Trash2 className="h-3.5 w-3.5" data-api-unique-id='testimonialsdesk-r7b0279bd04470c8d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' data-api-in-loop='1' />
                </button>
              </div>
            </div>
          </article>)}

        {filteredTestimonials.length === 0 && <div className="col-span-full rounded-lg border border-dashed border-border py-10 text-center" data-api-unique-id='testimonialsdesk-rc6689fa19d33144c-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            <p className="text-xs text-muted-foreground" data-api-unique-id='testimonialsdesk-rbba9d9d49951d071-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>No testimonials found matching selected filter.</p>
          </div>}
      </div>

      {/* Editor Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} data-api-unique-id='testimonialsdesk-rcdb2c0b9be97645e-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
        <DialogContent className="max-h-[calc(100dvh-4rem)] overflow-y-auto sm:max-w-lg" data-api-unique-id='testimonialsdesk-r82ef839cec5aa87d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
          <DialogHeader data-api-unique-id='testimonialsdesk-re913d2f481b68743-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            <DialogTitle className="text-base font-semibold" data-api-unique-id='testimonialsdesk-rccb49ebefb5a7b4d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              {editingItem ? "Edit Client Testimonial" : "Add Client Testimonial"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4 py-2" data-api-unique-id='testimonialsdesk-rb59a26d7abab0df6-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" data-api-unique-id='testimonialsdesk-ra367dcc54099845e-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              <div data-api-unique-id='testimonialsdesk-r5a65b62b4d3538c8-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-r2684b8fe72ac6286-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Client Name</label>
                <input type="text" required value={formName} onChange={e => setFormName(e.target.value)} placeholder="e.g. Elena Rostova" className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='testimonialsdesk-r0fc32273a95ce84c-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
              </div>

              <div data-api-unique-id='testimonialsdesk-r6fcd9edb932ae22a-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-ra4053ddd9b305649-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Service Type</label>
                <Select value={formServiceType} onValueChange={val => setFormServiceType(val as ProjectType)} data-api-unique-id='testimonialsdesk-rce42b3fdf5dbc3f0-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                  <SelectTrigger className="mt-1 h-9 w-full text-xs" data-api-unique-id='testimonialsdesk-rff2b8a679a9cec72-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                    <SelectValue placeholder="Select type" data-api-unique-id='testimonialsdesk-r6064096a63873141-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                      {SERVICE_TYPE_LABELS[formServiceType]}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent data-api-unique-id='testimonialsdesk-rbcac931d88cd8161-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                    <SelectItem value="EDITORIAL" data-api-unique-id='testimonialsdesk-rfb0b6461ae0110f3-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Editorial</SelectItem>
                    <SelectItem value="PORTRAIT" data-api-unique-id='testimonialsdesk-r14214be7cee3b0ff-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Portraiture</SelectItem>
                    <SelectItem value="COMMERCIAL" data-api-unique-id='testimonialsdesk-rf0c3476b950e38bc-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Commercial</SelectItem>
                    <SelectItem value="ACQUISITION" data-api-unique-id='testimonialsdesk-rbd6eef2737df2b5a-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Print Acquisition</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" data-api-unique-id='testimonialsdesk-r8240da453f234a24-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              <div data-api-unique-id='testimonialsdesk-rfd803fe58a8837db-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-rb2fe1eff06884ef2-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Title / Role</label>
                <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} placeholder="e.g. Senior Photo Director" className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='testimonialsdesk-rda61aef5e2135572-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
              </div>

              <div data-api-unique-id='testimonialsdesk-r036b84df355995b1-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-radfc0d38ff17943d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Organization / Publication</label>
                <input type="text" value={formOrg} onChange={e => setFormOrg(e.target.value)} placeholder="e.g. Domus Architecture" className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='testimonialsdesk-r7f493c0d8d160b11-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
              </div>
            </div>

            {/* Avatar Upload Dropzone for Backend Management */}
            <div data-api-unique-id='testimonialsdesk-r2e716603c7fe4fe2-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-reeb32ba21fcb4121-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Client Avatar</label>
              <div className="mt-1.5 flex items-center gap-4" data-api-unique-id='testimonialsdesk-rce6db6addcdd6c39-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-muted flex items-center justify-center" data-api-unique-id='testimonialsdesk-re9312d6025e64745-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                  {formAvatarImage ? <img src={formAvatarImage} alt="Avatar preview" className="h-full w-full object-cover" data-api-unique-id='testimonialsdesk-r2cc6910dc937a9aa-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' /> : <span className="text-xs font-semibold text-muted-foreground uppercase" data-api-unique-id='testimonialsdesk-r9c0fa6bc8b054997-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                      {formName.slice(0, 2) || "NA"}
                    </span>}
                </div>

                <div className="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-input bg-background p-3 text-center transition-colors hover:bg-muted/50" onClick={() => fileInputRef.current?.click()} onDragOver={e => e.preventDefault()} onDrop={e => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) {
                  const input = fileInputRef.current;
                  if (input) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    input.files = dataTransfer.files;
                    handleFileUpload({
                      target: input
                    } as React.ChangeEvent<HTMLInputElement>);
                  }
                }
              }} data-api-unique-id='testimonialsdesk-r9eac20b31b161504-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} data-api-unique-id='testimonialsdesk-rf032a5d49730e741-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
                  {isUploading ? <div className="flex items-center gap-1.5 text-xs text-muted-foreground" data-api-unique-id='testimonialsdesk-r949c2dd4f28ffb34-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" data-api-unique-id='testimonialsdesk-r300e98d60a167e9f-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
                      <span data-api-unique-id='testimonialsdesk-r64c411840e13e0fa-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Uploading image...</span>
                    </div> : <div className="flex items-center gap-2 text-xs text-muted-foreground" data-api-unique-id='testimonialsdesk-r44d8f7e4e4a2a34d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                      <Upload className="h-3.5 w-3.5" data-api-unique-id='testimonialsdesk-r53ee3d3ae6a05025-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
                      <span data-api-unique-id='testimonialsdesk-r907335128dcf21e7-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Click or drag image to upload portrait</span>
                    </div>}
                </div>

                {formAvatarImage && <button type="button" onClick={() => setFormAvatarImage(null)} className="text-xs text-muted-foreground hover:text-destructive" data-api-unique-id='testimonialsdesk-r0f7ae34aba5b50a0-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                    Remove
                  </button>}
              </div>
            </div>

            <div data-api-unique-id='testimonialsdesk-r2db3076e43cc478e-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-r065014b8681859c4-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Testimonial Quote</label>
              <textarea required rows={4} value={formQuote} onChange={e => setFormQuote(e.target.value)} placeholder="Detailed endorsement regarding Julian's darkroom fidelity, camera precision, and bespoke print presentation..." className="mt-1 w-full rounded-md border border-input bg-background p-2.5 text-xs font-serif leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='testimonialsdesk-rb4db1daccd7f77a9-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3" data-api-unique-id='testimonialsdesk-r5b044d8293c082dd-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              <div data-api-unique-id='testimonialsdesk-r7c88b5ed69ff9723-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-rc3cc3d31882b5e10-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Rating Score (1-5)</label>
                <Select value={String(formRating)} onValueChange={val => setFormRating(Number(val))} data-api-unique-id='testimonialsdesk-re6b83e39cd45b77a-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                  <SelectTrigger className="mt-1 h-9 w-full text-xs" data-api-unique-id='testimonialsdesk-rd843f378ba677e70-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                    <SelectValue placeholder="Rating" data-api-unique-id='testimonialsdesk-rb4d853e906d36bfc-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                      {formRating === 5 ? "★★★★★ (5 Stars)" : formRating === 4 ? "★★★★☆ (4 Stars)" : "★★★☆☆ (3 Stars)"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent data-api-unique-id='testimonialsdesk-ra9c6899c2965d175-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                    <SelectItem value="5" data-api-unique-id='testimonialsdesk-r1eac422c756e7db7-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>★★★★★ (5 Stars)</SelectItem>
                    <SelectItem value="4" data-api-unique-id='testimonialsdesk-rfca14303d3601530-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>★★★★☆ (4 Stars)</SelectItem>
                    <SelectItem value="3" data-api-unique-id='testimonialsdesk-rc7452483b2857fcc-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>★★★☆☆ (3 Stars)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div data-api-unique-id='testimonialsdesk-r4995f60436d49dd8-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="text-xs font-medium text-foreground" data-api-unique-id='testimonialsdesk-r06a96ce5e45c3198-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Sort Priority</label>
                <input type="number" value={formSortOrder} onChange={e => setFormSortOrder(Number(e.target.value))} className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" data-api-unique-id='testimonialsdesk-r0a48c7504938be7e-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
              </div>

              <div className="flex flex-col justify-end" data-api-unique-id='testimonialsdesk-r0c081435df5ccf7b-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                <label className="inline-flex items-center gap-2 text-xs font-medium text-foreground cursor-pointer pt-2" data-api-unique-id='testimonialsdesk-r0c762d4312f4e84f-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                  <input type="checkbox" checked={formIsFeatured} onChange={e => setFormIsFeatured(e.target.checked)} className="h-4 w-4 rounded border-border text-primary focus:ring-ring" data-api-unique-id='testimonialsdesk-r27d4e1cedcb8355f-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk' />
                  <span data-api-unique-id='testimonialsdesk-r11c1ae82d31b764c-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>Showcase on Homepage</span>
                </label>
              </div>
            </div>

            <DialogFooter className="mt-4 gap-2 pt-2" data-api-unique-id='testimonialsdesk-rac88a56203b94e0d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
              <button type="button" onClick={() => setIsDialogOpen(false)} className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted" data-api-unique-id='testimonialsdesk-r68e50bb372aee36d-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                Cancel
              </button>
              <button type="submit" disabled={isUploading} className="rounded-md bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50" data-api-unique-id='testimonialsdesk-r91651eb7cdc21a46-s3935781264' data-api-unique-page-name='src/backend/components/StudioSettings/TestimonialsDesk'>
                Save Review
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>;
}