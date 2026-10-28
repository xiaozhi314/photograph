"use client";

import React, { useState } from "react";
import EditableImg from "@/@base/EditableImg";
import { PhotoCollectionItem } from "@/backend/types/CollectionsManager";
import { Search, SlidersHorizontal, Eye, EyeOff, Star, Layers, Edit3, Film, Camera, CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
interface FolioCatalogTableProps {
  collections: PhotoCollectionItem[];
  selectedCollectionId: string | null;
  onToggleVisible: (id: string, current: boolean) => void;
  onToggleFeatured: (id: string, current: boolean) => void;
  onEditFolio: (collection: PhotoCollectionItem) => void;
  onInspectPlates: (id: string) => void;
}
export default function FolioCatalogTable({
  collections,
  selectedCollectionId,
  onToggleVisible,
  onToggleFeatured,
  onEditFolio,
  onInspectPlates
}: FolioCatalogTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [aspectFilter, setAspectFilter] = useState<string>("ALL");
  const [visibilityFilter, setVisibilityFilter] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"sortOrder" | "imageCount" | "title">("sortOrder");

  // Filtering & Sorting
  const filteredCollections = collections.filter(col => {
    const matchesSearch = col.title.toLowerCase().includes(searchTerm.toLowerCase()) || col.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) || col.medium.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAspect = aspectFilter === "ALL" ? true : col.aspect === aspectFilter;
    const matchesVisibility = visibilityFilter === "ALL" ? true : visibilityFilter === "VISIBLE" ? col.isVisible : visibilityFilter === "HIDDEN" ? !col.isVisible : visibilityFilter === "FEATURED" ? col.featuredOnHome : true;
    return matchesSearch && matchesAspect && matchesVisibility;
  }).sort((a, b) => {
    if (sortBy === "sortOrder") return a.sortOrder - b.sortOrder;
    if (sortBy === "imageCount") return b.imageCount - a.imageCount;
    return a.title.localeCompare(b.title);
  });
  return <div data-controller-name="Folio Catalog Table Workspace" className="w-full min-w-0 rounded-lg border border-border bg-card text-card-foreground shadow-sm" data-api-unique-id='foliocatalogtable-ra32547306403e085-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
      {/* Filtering & Search Bar */}
      <div className="flex flex-col gap-3 border-b border-border p-4" data-api-unique-id='foliocatalogtable-r8b0ecd60343dd4f3-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between" data-api-unique-id='foliocatalogtable-r1e6aefda4dc4ec4c-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
          {/* Search Input */}
          <div className="relative flex-1 min-w-0 max-w-lg" data-api-unique-id='foliocatalogtable-rd652050f9e9f23a1-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" data-api-unique-id='foliocatalogtable-ra8ccd3b8e512f9de-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
            <input type="text" placeholder="Search by series title, Roll No., or photographic medium..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" data-api-unique-id='foliocatalogtable-r6467d63e8e5e542c-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
          </div>

          {/* Filter Selects & Sorting */}
          <div className="flex flex-wrap items-center gap-2" data-api-unique-id='foliocatalogtable-r4c1152cd0df6b38a-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
            <div className="w-[140px]" data-api-unique-id='foliocatalogtable-re5313679399acfac-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
              <Select value={aspectFilter} onValueChange={setAspectFilter} data-api-unique-id='foliocatalogtable-r6e7dc7189db90755-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                <SelectTrigger size="sm" className="w-full bg-background" data-api-unique-id='foliocatalogtable-r9834415774b0588e-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <SelectValue placeholder="Orientation" data-api-unique-id='foliocatalogtable-r1c5fddc7fc02af08-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
                </SelectTrigger>
                <SelectContent data-api-unique-id='foliocatalogtable-r2a7be43466151107-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <SelectItem value="ALL" data-api-unique-id='foliocatalogtable-r90b622603ca92159-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>All Aspects</SelectItem>
                  <SelectItem value="PORTRAIT" data-api-unique-id='foliocatalogtable-rbce68c565b060c07-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Portrait</SelectItem>
                  <SelectItem value="LANDSCAPE" data-api-unique-id='foliocatalogtable-rbad44e51f176c07f-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Landscape</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-[150px]" data-api-unique-id='foliocatalogtable-re959a330e7fc8e1c-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
              <Select value={visibilityFilter} onValueChange={setVisibilityFilter} data-api-unique-id='foliocatalogtable-r309bbab800d80ded-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                <SelectTrigger size="sm" className="w-full bg-background" data-api-unique-id='foliocatalogtable-rc1a3ce23279a37eb-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <SelectValue placeholder="Status" data-api-unique-id='foliocatalogtable-r5f771242e35d6fa8-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
                </SelectTrigger>
                <SelectContent data-api-unique-id='foliocatalogtable-r43654d94f2167576-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <SelectItem value="ALL" data-api-unique-id='foliocatalogtable-r386f4c6cfbbdbb64-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>All Visibility</SelectItem>
                  <SelectItem value="VISIBLE" data-api-unique-id='foliocatalogtable-r2b88fbae10a2c057-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Wall Visible</SelectItem>
                  <SelectItem value="HIDDEN" data-api-unique-id='foliocatalogtable-r998eaa07673a0a56-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Wall Hidden</SelectItem>
                  <SelectItem value="FEATURED" data-api-unique-id='foliocatalogtable-rd566eb3f60d713c7-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Home Featured</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-[160px]" data-api-unique-id='foliocatalogtable-r50978b637e82af48-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
              <Select value={sortBy} onValueChange={val => setSortBy(val as "sortOrder" | "imageCount" | "title")} data-api-unique-id='foliocatalogtable-r746e53dede1f6834-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                <SelectTrigger size="sm" className="w-full bg-background" data-api-unique-id='foliocatalogtable-r10f821a4a76540b3-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <SelectValue placeholder="Sort by" data-api-unique-id='foliocatalogtable-rc2960f1825039422-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
                </SelectTrigger>
                <SelectContent data-api-unique-id='foliocatalogtable-rbf907a886dcbd8da-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <SelectItem value="sortOrder" data-api-unique-id='foliocatalogtable-r48f7f051def2c4c2-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Sort: Curated Rank</SelectItem>
                  <SelectItem value="imageCount" data-api-unique-id='foliocatalogtable-reb5796e78c6f1586-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Sort: Plate Count</SelectItem>
                  <SelectItem value="title" data-api-unique-id='foliocatalogtable-r516b55afa16f5211-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Sort: Title A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results active summary pill row */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground" data-api-unique-id='foliocatalogtable-rbb6a0f5985390035-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
          <div className="flex items-center gap-2" data-api-unique-id='foliocatalogtable-r3821a7ace673ad71-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
            <Film className="h-3.5 w-3.5 text-primary" data-api-unique-id='foliocatalogtable-rcf97a970842aa5e0-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
            <span data-api-unique-id='foliocatalogtable-rabd560dff2590a7b-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
              Catalog Index: <strong data-api-unique-id='foliocatalogtable-rddca69afe625b838-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>{filteredCollections.length}</strong> of{" "}
              {collections.length} series folios displayed
            </span>
          </div>
          {selectedCollectionId && <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-primary" data-api-unique-id='foliocatalogtable-rad02305e5d3ce16c-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
              <CheckCircle2 className="h-3 w-3" data-api-unique-id='foliocatalogtable-r14750bf6334e4725-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
              <span data-api-unique-id='foliocatalogtable-r4d249b9669ea5c08-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Inspector focused on:{" "}
                <strong data-api-unique-id='foliocatalogtable-rfb27417303686b83-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  {collections.find(c => c.id === selectedCollectionId)?.rollNumber}
                </strong>
              </span>
            </div>}
        </div>
      </div>

      {/* Main Administrative Table */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto" data-api-unique-id='foliocatalogtable-r0e0e7251f0c0b95f-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
        <table className="w-full min-w-[980px] border-collapse text-left text-sm" data-api-unique-id='foliocatalogtable-re740dd3405f22865-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
          <thead data-api-unique-id='foliocatalogtable-r0c212b8cb02d523a-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
            <tr className="border-b border-border bg-muted text-muted-foreground" data-api-unique-id='foliocatalogtable-r6e524c936817076d-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
              <th className="py-3 pl-4 pr-3 text-xs font-semibold uppercase tracking-wider" data-api-unique-id='foliocatalogtable-r1670a1a168ff6d5c-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Rank
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider" data-api-unique-id='foliocatalogtable-r081ac431367055d0-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Proof Cover
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider" data-api-unique-id='foliocatalogtable-rc238506fda06ba73-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Series & Negative Roll
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider" data-api-unique-id='foliocatalogtable-r3f449132a32dd117-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Emulsion / Medium
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider" data-api-unique-id='foliocatalogtable-rdab95ad4ea443849-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Aspect Class
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap" data-api-unique-id='foliocatalogtable-r2688277a73b6d5a9-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Plates Count
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap" data-api-unique-id='foliocatalogtable-r82281ca9a3ee3762-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Wall Visibility
              </th>
              <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap" data-api-unique-id='foliocatalogtable-rd975bbffee6287c3-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Home Pin
              </th>
              <th className="py-3 pr-4 pl-3 text-right text-xs font-semibold uppercase tracking-wider" data-api-unique-id='foliocatalogtable-r3312d1fb20d15487-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                Curatorial Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border" data-api-unique-id='foliocatalogtable-r081ff531d8e2b30b-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
            {filteredCollections.length === 0 ? <tr data-api-unique-id='foliocatalogtable-r6f10fcf1f560c955-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                <td colSpan={9} className="py-12 text-center text-muted-foreground" data-api-unique-id='foliocatalogtable-r71b5d2873564af63-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                  <div className="flex flex-col items-center justify-center gap-2" data-api-unique-id='foliocatalogtable-r1dbf2f5ea308f4cb-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                    <SlidersHorizontal className="h-8 w-8 text-muted-foreground/60" data-api-unique-id='foliocatalogtable-r153af99083e8e2c8-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' />
                    <p className="text-base font-medium" data-api-unique-id='foliocatalogtable-r4f636dd9071de922-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>No series folios match current filters</p>
                    <p className="text-xs" data-api-unique-id='foliocatalogtable-r56bf681f6c798cda-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
                      Try resetting your keyword search, aspect orientation, or visibility status.
                    </p>
                  </div>
                </td>
              </tr> : filteredCollections.map((col, index) => {
            const isSelected = selectedCollectionId === col.id;
            return <tr key={col.id} className={`transition-colors hover:bg-muted/50 ${isSelected ? "bg-secondary/40 ring-1 ring-inset ring-primary/30" : ""}`} data-api-unique-id='foliocatalogtable-r75155ac7550de841-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                    {/* Rank / Sort Order */}
                    <td className="py-3.5 pl-4 pr-3 font-mono text-xs text-muted-foreground whitespace-nowrap" data-api-unique-id='foliocatalogtable-r57f4465c68a31c97-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' data-api-bind-info={`filteredCollections-${index}-sortOrder`} data-api-map-var-name='col'>
                      #{col.sortOrder}
                    </td>

                    {/* Proof Cover Image */}
                    <td className="py-3.5 px-3" data-api-unique-id='foliocatalogtable-r8a7d06797e691c81-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <div className="relative h-14 w-12 overflow-hidden rounded border border-border bg-muted shadow-xs" data-api-unique-id='foliocatalogtable-rda7f24c1ce240629-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        <EditableImg propKey={`folio-cover-thumb-${col.id}`} src={col.coverImage || undefined} alt={col.title} className="h-full w-full object-cover" data-api-unique-id='foliocatalogtable-r1dd3a4bacced88cf-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                      </div>
                    </td>

                    {/* Series Title & Roll Number */}
                    <td className="py-3.5 px-3 max-w-[240px]" data-api-unique-id='foliocatalogtable-rd4cc2a5327647b75-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <div className="flex flex-col gap-0.5 min-w-0" data-api-unique-id='foliocatalogtable-ra4656215db64b980-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        <button type="button" onClick={() => onInspectPlates(col.id)} className="text-left font-medium text-foreground hover:text-primary transition-colors truncate" title={col.title} data-api-unique-id='foliocatalogtable-rc2a06863a9a25286-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' data-api-bind-info={`filteredCollections-${index}-title`} data-api-map-var-name='col'>
                          {col.title}
                        </button>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground" data-api-unique-id='foliocatalogtable-rfae68b005d68e16e-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                          <span className="font-mono rounded border border-border bg-muted px-1.5 py-0.5 text-[11px] font-semibold tracking-tight text-foreground" data-api-unique-id='foliocatalogtable-rf99d81e60c7fbb0a-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' data-api-bind-info={`filteredCollections-${index}-rollNumber`} data-api-map-var-name='col'>
                            {col.rollNumber}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Medium */}
                    <td className="py-3.5 px-3 max-w-[200px]" data-api-unique-id='foliocatalogtable-ra73546b5a3edf664-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <p className="text-xs text-foreground truncate" title={col.medium} data-api-unique-id='foliocatalogtable-r13efc2d81789504a-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' data-api-bind-info={`filteredCollections-${index}-medium`} data-api-map-var-name='col'>
                        {col.medium}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate" data-api-unique-id='foliocatalogtable-ra7f11d55081ed0b2-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        {col.curatorNote ? col.curatorNote.slice(0, 35) + "..." : "No archival note"}
                      </p>
                    </td>

                    {/* Aspect & Class */}
                    <td className="py-3.5 px-3 whitespace-nowrap" data-api-unique-id='foliocatalogtable-r3d4998649d490594-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <div className="flex flex-col gap-0.5" data-api-unique-id='foliocatalogtable-rfc27deeb143b1411-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        <span className="inline-flex items-center text-xs font-medium text-foreground" data-api-unique-id='foliocatalogtable-ra3d1152828810772-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                          {col.aspect === "PORTRAIT" ? "Portrait" : "Landscape"}
                        </span>
                        <span className="font-mono text-[11px] text-muted-foreground" data-api-unique-id='foliocatalogtable-r16a5c140abe6a78a-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' data-api-bind-info={`filteredCollections-${index}-aspectRatioClass`} data-api-map-var-name='col'>
                          {col.aspectRatioClass}
                        </span>
                      </div>
                    </td>

                    {/* Plates Count */}
                    <td className="py-3.5 px-3 whitespace-nowrap font-mono text-xs" data-api-unique-id='foliocatalogtable-r2afbe15b564ff243-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <div className="flex items-center gap-1.5" data-api-unique-id='foliocatalogtable-rffa6c2a68b86069e-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        <Layers className="h-3.5 w-3.5 text-muted-foreground" data-api-unique-id='foliocatalogtable-rfd76e2ca16898205-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                        <span className="font-semibold text-foreground" data-api-unique-id='foliocatalogtable-r8d4759e684721aa9-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' data-api-bind-info={`filteredCollections-${index}-imageCount`} data-api-map-var-name='col'>{col.imageCount}</span>
                        <span className="text-[11px] text-muted-foreground" data-api-unique-id='foliocatalogtable-rfae82a54ecc65bee-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>plates</span>
                      </div>
                    </td>

                    {/* Instant Toggle: isVisible */}
                    <td className="py-3.5 px-3 whitespace-nowrap" data-api-unique-id='foliocatalogtable-r3034f3980d170ed4-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <button type="button" onClick={() => onToggleVisible(col.id, col.isVisible)} className={`group inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${col.isVisible ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 hover:bg-emerald-500/20 dark:text-emerald-400" : "bg-muted text-muted-foreground border border-border hover:bg-muted/80"}`} title={col.isVisible ? "Visible on Exhibition Wall (Click to hide)" : "Hidden from Public Wall (Click to show)"} data-api-unique-id='foliocatalogtable-rd3116cbd98a822e7-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        {col.isVisible ? <>
                            <Eye className="h-3.5 w-3.5" data-api-unique-id='foliocatalogtable-r4d456d948f5ea6e9-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                            <span data-api-unique-id='foliocatalogtable-reca0a1eec7c2c4d9-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>Wall On</span>
                          </> : <>
                            <EyeOff className="h-3.5 w-3.5" data-api-unique-id='foliocatalogtable-r220c85a8f6ac6562-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                            <span data-api-unique-id='foliocatalogtable-r8aeafe6a615618b9-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>Hidden</span>
                          </>}
                      </button>
                    </td>

                    {/* Instant Toggle: featuredOnHome */}
                    <td className="py-3.5 px-3 whitespace-nowrap" data-api-unique-id='foliocatalogtable-r7f6a36b803d9d91e-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <button type="button" onClick={() => onToggleFeatured(col.id, col.featuredOnHome)} className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${col.featuredOnHome ? "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90" : "bg-muted text-muted-foreground border border-border hover:bg-muted/80"}`} title={col.featuredOnHome ? "Pinned on Home Grid (Click to unpin)" : "Not pinned on Home (Click to pin)"} data-api-unique-id='foliocatalogtable-rbd3bd671413cca62-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        <Star className={`h-3.5 w-3.5 ${col.featuredOnHome ? "fill-primary-foreground" : ""}`} data-api-unique-id='foliocatalogtable-rccf6427d85130d0c-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                        <span data-api-unique-id='foliocatalogtable-r56eaad04e2e337d9-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>{col.featuredOnHome ? "Featured" : "Regular"}</span>
                      </button>
                    </td>

                    {/* Row Actions */}
                    <td className="py-3.5 pr-4 pl-3 text-right whitespace-nowrap" data-api-unique-id='foliocatalogtable-r653c6831be620469-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                      <div className="flex items-center justify-end gap-1.5" data-api-unique-id='foliocatalogtable-r917de37c3cee41b0-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                        <button type="button" onClick={() => onInspectPlates(col.id)} className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium border transition-colors ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:bg-muted"}`} title="Open contact sheet plates inspector" data-api-unique-id='foliocatalogtable-rccb8f760c37f1ebf-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                          <Camera className="h-3.5 w-3.5" data-api-unique-id='foliocatalogtable-r968329ef15498fbf-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                          <span data-api-unique-id='foliocatalogtable-rabde32a9477bcc4a-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>Inspect</span>
                        </button>

                        <button type="button" onClick={() => onEditFolio(col)} className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors" title="Edit Folio Parameters" data-api-unique-id='foliocatalogtable-r24a6c2762d371579-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>
                          <Edit3 className="h-3.5 w-3.5" data-api-unique-id='foliocatalogtable-r98b9418a755c2883-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1' />
                          <span data-api-unique-id='foliocatalogtable-rdcd68a02a7dd37cb-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable' data-api-in-loop='1'>Edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>;
          })}
          </tbody>
        </table>
      </div>

      {/* Table Footer Summary & Information */}
      <div className="flex flex-col gap-2 border-t border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground" data-api-unique-id='foliocatalogtable-r46f0b607e6a39dbb-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
        <div data-api-unique-id='foliocatalogtable-rd4a1118e892cca14-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
          <span data-api-unique-id='foliocatalogtable-r044a06bc260a54b3-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
            Curatorial Desk: Real-time toggles persist instantly. Master plates are validated against negative emulsion records.
          </span>
        </div>
        <div className="font-mono" data-api-unique-id='foliocatalogtable-rd6bdb4c6b0d09590-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>
          <span data-api-unique-id='foliocatalogtable-r614c5e08bd689831-s4185438174' data-api-unique-page-name='src/backend/components/CollectionsManager/FolioCatalogTable'>Sort rank determines public wall priority</span>
        </div>
      </div>
    </div>;
}