"use client";

import React from "react";
import { Star, Archive, Edit3, Trash2, Image as ImageIcon, Layers, MapPin, Calendar } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
import { PhotographyWork, PhotoCategory, PhotoCollection } from "@/backend/types/WorksCatalog";
interface MasterPlatesTableProps {
  works: PhotographyWork[];
  categories: PhotoCategory[];
  collections: PhotoCollection[];
  onToggleFeatured: (id: string) => void;
  onToggleArchive: (id: string) => void;
  onEditWork: (work: PhotographyWork) => void;
  onDeleteWork: (id: string) => void;
  onReorderWork: (id: string, direction: "up" | "down") => void;
}
export default function MasterPlatesTable({
  works,
  categories,
  collections,
  onToggleFeatured,
  onToggleArchive,
  onEditWork,
  onDeleteWork,
  onReorderWork
}: MasterPlatesTableProps) {
  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || "Unassigned";
  };
  const getCollectionTitle = (collectionId?: string | null) => {
    if (!collectionId) return "Independent Work";
    return collections.find(c => c.id === collectionId)?.title || "Independent Work";
  };
  return <div className="w-full max-w-full min-w-0 bg-card text-card-foreground rounded-lg border border-border shadow-sm flex flex-col" data-controller-name="Master Plates Table" data-api-unique-id='masterplatestable-r7cff7cd0f29a22a5-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
      {/* Table Header Bar */}
      <div className="p-4 border-b border-border flex flex-wrap items-center justify-between gap-3 bg-card" data-api-unique-id='masterplatestable-r598b104590a9fe52-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
        <div className="flex items-center gap-2" data-api-unique-id='masterplatestable-ref4baa2d9181ba23-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
          <Layers className="w-4 h-4 text-primary shrink-0" data-api-unique-id='masterplatestable-r1361b208b9c5c18f-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' />
          <h2 className="text-sm font-semibold tracking-normal text-foreground" data-api-unique-id='masterplatestable-rc369db44d363a8f1-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
            Master Negative Ledger & Spec Sheet
          </h2>
          <span className="text-xs text-muted-foreground ml-2" data-api-unique-id='masterplatestable-rbb839242ca277fc6-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
            Showing {works.length} indexed plates
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground" data-api-unique-id='masterplatestable-rba6accda8d0c7d2b-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
          <span className="inline-flex items-center gap-1" data-api-unique-id='masterplatestable-rde88b2fecdf32710-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
            <span className="w-2 h-2 rounded-full bg-success" data-api-unique-id='masterplatestable-r8c382463d05e129b-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' />
            Curated Wall Active
          </span>
          <span className="text-border" data-api-unique-id='masterplatestable-r123bb2553d70620e-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>|</span>
          <span className="inline-flex items-center gap-1" data-api-unique-id='masterplatestable-re2d8ba391c77d9ec-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
            <span className="w-2 h-2 rounded-full bg-muted-foreground" data-api-unique-id='masterplatestable-rfb1d21958d89309a-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' />
            Archived
          </span>
        </div>
      </div>

      {/* Table Local Horizontal Scroll Area */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto" data-api-unique-id='masterplatestable-r5867cdaca22467c0-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
        <table className="w-full text-left border-collapse min-w-[1100px]" data-api-unique-id='masterplatestable-rfac7240d1baeb11f-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
          <thead data-api-unique-id='masterplatestable-re3f4f63ca6a1ff76-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
            <tr className="border-b border-border bg-muted text-muted-foreground text-[11px] uppercase tracking-wider font-medium" data-api-unique-id='masterplatestable-ra296f5113b90a362-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
              <th className="py-2.5 px-3 whitespace-nowrap w-[70px]" data-api-unique-id='masterplatestable-rb998e11c83e6db75-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Seq / Order</th>
              <th className="py-2.5 px-3 whitespace-nowrap w-[90px]" data-api-unique-id='masterplatestable-rc0779d4a5a2f81a5-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Proof / Aspect</th>
              <th className="py-2.5 px-4 min-w-[200px]" data-api-unique-id='masterplatestable-r86b742bef4e72991-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Plate Title & Series</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[140px]" data-api-unique-id='masterplatestable-r95438288685a3790-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Genre / Folio</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[160px]" data-api-unique-id='masterplatestable-reab753695ec68ea9-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Medium & Edition</th>
              <th className="py-2.5 px-3 whitespace-nowrap min-w-[120px]" data-api-unique-id='masterplatestable-rb49b9412b89b5b27-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Origin & Year</th>
              <th className="py-2.5 px-3 min-w-[200px]" data-api-unique-id='masterplatestable-rd835a4457226071e-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Curatorial Statement</th>
              <th className="py-2.5 px-3 whitespace-nowrap text-center w-[90px]" data-api-unique-id='masterplatestable-rfd0b30a1ec79bdee-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Featured</th>
              <th className="py-2.5 px-3 whitespace-nowrap text-center w-[90px]" data-api-unique-id='masterplatestable-r7197d30f3f4971fa-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Status</th>
              <th className="py-2.5 px-4 whitespace-nowrap text-right w-[110px]" data-api-unique-id='masterplatestable-rf6d6f62961bac1dc-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs" data-api-unique-id='masterplatestable-ra1a4dbafdaf5ce1a-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
            {works.length === 0 ? <tr data-api-unique-id='masterplatestable-r038273337841a55f-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
                <td colSpan={10} className="py-12 text-center text-muted-foreground" data-api-unique-id='masterplatestable-r679f44f4e186d508-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
                  <div className="flex flex-col items-center justify-center gap-2" data-api-unique-id='masterplatestable-rb308a3b51d02e537-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
                    <ImageIcon className="w-8 h-8 text-muted-foreground" data-api-unique-id='masterplatestable-r9061adff987f8b98-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' />
                    <p className="text-sm font-medium" data-api-unique-id='masterplatestable-r9c5c59335e635a09-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>No master plates match the current curatorial filter</p>
                    <p className="text-xs" data-api-unique-id='masterplatestable-r481212ba9b288818-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Adjust your search parameters or register a new negative plate</p>
                  </div>
                </td>
              </tr> : works.map((work, index) => {
            const categoryName = getCategoryName(work.categoryId);
            const collectionTitle = getCollectionTitle(work.collectionId);
            return <tr key={work.id} className="hover:bg-muted/40 transition-colors group" data-api-unique-id='masterplatestable-rfd2111e2d980c2d6-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                    {/* Seq & Reorder Controls */}
                    <td className="py-3 px-3 whitespace-nowrap align-middle" data-api-unique-id='masterplatestable-r2e4f82b220a07659-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="flex items-center gap-1.5 font-mono text-muted-foreground" data-api-unique-id='masterplatestable-r320d2d1fb7d3eac7-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <span className="font-semibold text-foreground" data-api-unique-id='masterplatestable-r7c32cd5fdc843f68-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-sortOrder`} data-api-map-var-name='work'>#{work.sortOrder}</span>
                        <div className="flex flex-col gap-0.5 opacity-60 group-hover:opacity-100 transition-opacity" data-api-unique-id='masterplatestable-re14a8cd915ce3922-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          <button type="button" onClick={() => onReorderWork(work.id, "up")} className="p-0.5 hover:text-foreground text-[9px] hover:bg-secondary rounded" title="Move Up" data-api-unique-id='masterplatestable-r2eb7c2b9f079d11e-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                            ▲
                          </button>
                          <button type="button" onClick={() => onReorderWork(work.id, "down")} className="p-0.5 hover:text-foreground text-[9px] hover:bg-secondary rounded" title="Move Down" data-api-unique-id='masterplatestable-r208e7780f537864c-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                            ▼
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* Darkroom Proof & Aspect Badge */}
                    <td className="py-3 px-3 whitespace-nowrap align-middle" data-api-unique-id='masterplatestable-r0def353c3856a197-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="flex items-center gap-2" data-api-unique-id='masterplatestable-r95a4a1496379f8e8-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <div className="relative w-14 h-14 rounded border border-border bg-black/5 overflow-hidden shrink-0 flex items-center justify-center shadow-inner" data-api-unique-id='masterplatestable-r2ecc7049305b172a-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          {work.imageUrl ? <EditableImg propKey={`work-thumb-${work.id}`} src={work.imageUrl} alt={work.title} className="w-full h-full object-cover" data-api-unique-id='masterplatestable-ref8e2e33ca06391a-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' /> : <ImageIcon className="w-6 h-6 text-muted-foreground" data-api-unique-id='masterplatestable-rc4d0fe980f756ff2-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />}
                          <span className={`absolute bottom-0 right-0 text-[8px] font-mono px-1 py-0.5 rounded-sm ${work.aspectRatio === "PORTRAIT" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`} data-api-unique-id='masterplatestable-r025ebd616d2a0e01-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                            {work.aspectRatio === "PORTRAIT" ? "4:5" : "3:2"}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Title & Series */}
                    <td className="py-3 px-4 align-middle" data-api-unique-id='masterplatestable-r947dca2934e735b1-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="min-w-0 max-w-[260px]" data-api-unique-id='masterplatestable-r3f467505eefbed4e-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <div className="font-semibold text-foreground truncate hover:text-clip" title={work.title} data-api-unique-id='masterplatestable-rcc5c13c15f2be6fc-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-title`} data-api-map-var-name='work'>
                          {work.title}
                        </div>
                        <div className="text-[11px] text-muted-foreground truncate font-mono mt-0.5" data-api-unique-id='masterplatestable-ref0e90efe1e929aa-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-seriesName`} data-api-map-var-name='work'>
                          Series: {work.seriesName}
                        </div>
                      </div>
                    </td>

                    {/* Genre Category & Collection Folio */}
                    <td className="py-3 px-3 whitespace-nowrap align-middle" data-api-unique-id='masterplatestable-r3d0577d69f28f904-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="flex flex-col gap-1 items-start" data-api-unique-id='masterplatestable-r3600ae6be07f3c6a-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <span className="inline-flex shrink-0 whitespace-nowrap items-center px-2 py-0.5 rounded text-[11px] bg-secondary text-secondary-foreground font-medium" data-api-unique-id='masterplatestable-ra52fc0d3b60dc744-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          {categoryName}
                        </span>
                        <span className="text-[11px] text-muted-foreground truncate max-w-[130px]" title={collectionTitle} data-api-unique-id='masterplatestable-rf0277e27f572ace8-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          {collectionTitle}
                        </span>
                      </div>
                    </td>

                    {/* Medium & Edition Specs */}
                    <td className="py-3 px-3 whitespace-nowrap align-middle" data-api-unique-id='masterplatestable-r301f689cb315db38-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="flex flex-col gap-0.5 font-mono text-[11px]" data-api-unique-id='masterplatestable-r816b5521aba47f13-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <span className="text-foreground truncate max-w-[150px]" title={work.medium} data-api-unique-id='masterplatestable-r922f64ae562c8a87-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-medium`} data-api-map-var-name='work'>
                          {work.medium}
                        </span>
                        <span className="text-muted-foreground font-medium" data-api-unique-id='masterplatestable-r46bed1392530ee5c-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-edition`} data-api-map-var-name='work'>
                          {work.edition}
                        </span>
                      </div>
                    </td>

                    {/* Location & Year */}
                    <td className="py-3 px-3 whitespace-nowrap align-middle" data-api-unique-id='masterplatestable-r9afd1e1379128958-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="flex flex-col gap-1 text-[11px] text-muted-foreground" data-api-unique-id='masterplatestable-r8dd33b966460985d-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <div className="flex items-center gap-1" data-api-unique-id='masterplatestable-re289fd35cd41a278-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          <MapPin className="w-3 h-3 shrink-0 text-muted-foreground" data-api-unique-id='masterplatestable-r96eec7cf230d520d-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                          <span className="truncate max-w-[110px]" title={work.location} data-api-unique-id='masterplatestable-rccbf33688098c661-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-location`} data-api-map-var-name='work'>{work.location}</span>
                        </div>
                        <div className="flex items-center gap-1 font-mono" data-api-unique-id='masterplatestable-rf1e64e44e008f8cf-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          <Calendar className="w-3 h-3 shrink-0 text-muted-foreground" data-api-unique-id='masterplatestable-rd1e300c643993be4-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                          <span data-api-unique-id='masterplatestable-r176ce9f9d1f67816-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-year`} data-api-map-var-name='work'>{work.year}</span>
                        </div>
                      </div>
                    </td>

                    {/* Curatorial Statement Excerpt */}
                    <td className="py-3 px-3 align-middle" data-api-unique-id='masterplatestable-r8a407562135b44ed-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 max-w-[240px] italic leading-relaxed" title={work.statement} data-api-unique-id='masterplatestable-r96d76df148c2a018-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' data-api-bind-info={`works-${index}-statement`} data-api-map-var-name='work'>
                        “{work.statement}”
                      </p>
                    </td>

                    {/* Featured Star Toggle */}
                    <td className="py-3 px-3 whitespace-nowrap text-center align-middle" data-api-unique-id='masterplatestable-r8cca337cb95177c5-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <button type="button" onClick={() => onToggleFeatured(work.id)} className={`inline-flex items-center justify-center p-1.5 rounded-full transition-colors ${work.isFeatured ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm" : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"}`} title={work.isFeatured ? "Pinned on Home Gallery Wall" : "Not Featured"} data-api-unique-id='masterplatestable-r80dacafd0e029d38-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <Star className={`w-3.5 h-3.5 ${work.isFeatured ? "fill-current" : ""}`} data-api-unique-id='masterplatestable-ra31efdfe9e4386c0-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                      </button>
                    </td>

                    {/* Archive Status Toggle */}
                    <td className="py-3 px-3 whitespace-nowrap text-center align-middle" data-api-unique-id='masterplatestable-rf0a4bea7e98e4060-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <button type="button" onClick={() => onToggleArchive(work.id)} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors ${work.isArchived ? "bg-muted text-muted-foreground hover:bg-secondary" : "bg-success text-success-foreground hover:brightness-95"}`} title={work.isArchived ? "Archived (Hidden from public wall)" : "Active on Exhibition"} data-api-unique-id='masterplatestable-r5d7214ff83aef8d2-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        {work.isArchived ? <>
                            <Archive className="w-2.5 h-2.5" data-api-unique-id='masterplatestable-r2ae8edd1e2c58251-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                            <span data-api-unique-id='masterplatestable-r67af844cd04067d9-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>Archived</span>
                          </> : <>
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" data-api-unique-id='masterplatestable-r25640ec9865d2c54-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                            <span data-api-unique-id='masterplatestable-ra054cccad27635ec-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>Public</span>
                          </>}
                      </button>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-3 px-4 whitespace-nowrap text-right align-middle" data-api-unique-id='masterplatestable-rf902f9460b71ddc1-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                      <div className="flex items-center justify-end gap-1.5" data-api-unique-id='masterplatestable-r1e97c2f3ba85cbd9-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                        <button type="button" onClick={() => onEditWork(work)} className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Edit Plate Metadata" data-api-unique-id='masterplatestable-r3525ae1b4f6db867-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          <Edit3 className="w-3.5 h-3.5" data-api-unique-id='masterplatestable-rf2a132885bf6c358-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                        </button>
                        <button type="button" onClick={() => onDeleteWork(work.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors" title="Remove Plate from Ledger" data-api-unique-id='masterplatestable-r478cc75827d16752-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1'>
                          <Trash2 className="w-3.5 h-3.5" data-api-unique-id='masterplatestable-rb04c20bcb3e2a6c6-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable' data-api-in-loop='1' />
                        </button>
                      </div>
                    </td>
                  </tr>;
          })}
          </tbody>
        </table>
      </div>

      {/* Table Footer Bar */}
      <div className="p-3 border-t border-border bg-card flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2" data-api-unique-id='masterplatestable-r0b8f50815dd98a27-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
        <span data-api-unique-id='masterplatestable-rd4498ce6dfab772e-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Displaying {works.length} indexed negative plates</span>
        <div className="flex items-center gap-4" data-api-unique-id='masterplatestable-r3379057c127479e0-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>
          <span className="font-mono text-[11px]" data-api-unique-id='masterplatestable-r6aefaad00055fe5e-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Gelatin Fiber & Platinum Archival Matrix</span>
          <span className="font-mono text-[11px] text-foreground font-semibold" data-api-unique-id='masterplatestable-r43a58b2af5184057-s1470341620' data-api-unique-page-name='src/backend/components/WorksCatalog/MasterPlatesTable'>Julian Vane Archive B05</span>
        </div>
      </div>
    </div>;
}