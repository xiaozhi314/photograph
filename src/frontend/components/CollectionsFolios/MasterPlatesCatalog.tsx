"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { PhotoCollectionItem, PhotographyWorkItem } from "@/frontend/types/CollectionsFolios";
import { Maximize2, Sparkles, MapPin, Calendar, Film } from "lucide-react";
interface MasterPlatesCatalogProps {
  collection: PhotoCollectionItem;
  plates: PhotographyWorkItem[];
  onSelectPlate: (plate: PhotographyWorkItem) => void;
}
export default function MasterPlatesCatalog({
  collection,
  plates,
  onSelectPlate
}: MasterPlatesCatalogProps) {
  // Sort plates by sortOrder ascending as required
  const sortedPlates = [...plates].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  return <section data-controller-name="Master Plates Catalog" className="space-y-8" data-api-unique-id='masterplatescatalog-r2a50e5b76a1d8f02-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
      {/* Catalog Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 gap-4" data-api-unique-id='masterplatescatalog-r687633a30eb8917e-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
        <div data-api-unique-id='masterplatescatalog-rfd8699f37e1ad503-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-mono font-medium mb-1" data-api-unique-id='masterplatescatalog-r93d71477a038f0b4-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
            <Film className="w-3.5 h-3.5" data-api-unique-id='masterplatescatalog-r9a36d89b60f203b3-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' />
            <span data-api-unique-id='masterplatescatalog-r7e9e98fd0e3630cf-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>Master Negative Sequence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground tracking-tight" data-api-unique-id='masterplatescatalog-r58fa80777d01569f-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
            Archival Plates · {collection.rollNumber}
          </h2>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground" data-api-unique-id='masterplatescatalog-r7469e4f39b598f5e-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
          <span data-api-unique-id='masterplatescatalog-rf3d24ecae454fd5f-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>{sortedPlates.length} Verified Master Plates</span>
          <span data-api-unique-id='masterplatescatalog-rfecf489897fa86ac-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>·</span>
          <span data-api-unique-id='masterplatescatalog-rd00ac1d060536a8a-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>Gelatin Silver Contact Standards</span>
        </div>
      </div>

      {/* Plates Grid with authentic aspect ratios & photographic contact print border */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" data-api-unique-id='masterplatescatalog-rfd41fdb118310362-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog'>
        {sortedPlates.map((plate, index) => {
        // Dynamic aspect ratio styling according to film format / aspect
        const aspectClass = plate.aspectRatio === "LANDSCAPE" ? "aspect-[3/2]" : "aspect-[4/5]";
        const aspectBadge = plate.aspectRatio === "LANDSCAPE" ? "Landscape 3:2" : "Portrait 4:5";
        return <article key={plate.id} onClick={() => onSelectPlate(plate)} className="group cursor-pointer bg-card text-card-foreground border border-border p-4 sm:p-5 transition-all duration-300 hover:border-primary hover:shadow-md flex flex-col justify-between" data-api-unique-id='masterplatescatalog-r5109cc59eccf8ce5-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
              {/* Darkroom Contact Sheet Style Top Notch / Frame Info */}
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-3 mb-3 border-b border-border/60" data-api-unique-id='masterplatescatalog-rcb47c6ab474414cb-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                <span className="flex items-center gap-1.5" data-api-unique-id='masterplatescatalog-r57c0b563f7f7ff0e-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70" data-api-unique-id='masterplatescatalog-rb2cda239d61ba0c6-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' />
                  {collection.rollNumber} · #{String(index + 1).padStart(2, "0")}
                </span>
                <span className="bg-muted px-2 py-0.5 rounded text-[10px] text-muted-foreground font-mono" data-api-unique-id='masterplatescatalog-r814d816aa264a68d-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                  {aspectBadge}
                </span>
              </div>

              {/* Photographic Print Matte with Border */}
              <div className="relative w-full overflow-hidden bg-muted/40 p-2 border border-border/40" data-api-unique-id='masterplatescatalog-r60f49759c61b6c3f-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-black/10`} data-api-unique-id='masterplatescatalog-ra6e7c0880d874883-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                  <EditableImg propKey={`plate-thumb-${plate.id}`} src={plate.imageUrl} alt={plate.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-api-unique-id='masterplatescatalog-rbe81b8e384eace97-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' />
                  {/* Subtle tonal inspection trigger overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none" data-api-unique-id='masterplatescatalog-rfa017b25d7b97093-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                    <span className="bg-card text-card-foreground border border-border px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 shadow-lg" data-api-unique-id='masterplatescatalog-r00fd81e9d20a716a-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                      <Maximize2 className="w-3.5 h-3.5 text-primary" data-api-unique-id='masterplatescatalog-rf3cec91133ad7b46-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' />
                      Inspect Tonal Grain
                    </span>
                  </div>
                </div>
              </div>

              {/* Curatorial Metadata and Work Details */}
              <div className="pt-4 flex-1 flex flex-col justify-between" data-api-unique-id='masterplatescatalog-r3fdd3a207643cb87-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                <div className="space-y-2" data-api-unique-id='masterplatescatalog-ree45d9e0c4b1752a-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                  <div className="flex items-start justify-between gap-2" data-api-unique-id='masterplatescatalog-r534f974498285ea9-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug" data-api-unique-id='masterplatescatalog-rca9c6c6a55c50ffe-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' data-api-bind-info={`sortedPlates-${index}-title`} data-api-map-var-name='plate'>
                      {plate.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed" data-api-unique-id='masterplatescatalog-r41ab7b033e08ea12-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' data-api-bind-info={`sortedPlates-${index}-statement`} data-api-map-var-name='plate'>
                    {plate.statement}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 space-y-2" data-api-unique-id='masterplatescatalog-r3b7f503646407eca-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-muted-foreground gap-2" data-api-unique-id='masterplatescatalog-r61c2873f6bdfe2d3-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                    <span className="flex items-center gap-1" data-api-unique-id='masterplatescatalog-rccadea3cac0fca77-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' data-api-bind-info={`sortedPlates-${index}-location`} data-api-map-var-name='plate'>
                      <MapPin className="w-3 h-3 text-primary/70" data-api-unique-id='masterplatescatalog-r5e4bc46a7156a6e9-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' />
                      {plate.location}
                    </span>
                    <span className="flex items-center gap-1" data-api-unique-id='masterplatescatalog-r593d2eab6e577c8a-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' data-api-bind-info={`sortedPlates-${index}-year`} data-api-map-var-name='plate'>
                      <Calendar className="w-3 h-3 text-primary/70" data-api-unique-id='masterplatescatalog-r53e6abcf386c5176-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' />
                      {plate.year}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-muted-foreground" data-api-unique-id='masterplatescatalog-re8481447c865206e-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                    <span className="text-foreground/90 font-medium" data-api-unique-id='masterplatescatalog-r1fad4228a446c3c2-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' data-api-bind-info={`sortedPlates-${index}-edition`} data-api-map-var-name='plate'>
                      {plate.edition}
                    </span>
                    <span className="text-primary font-medium flex items-center gap-1 text-[11px]" data-api-unique-id='masterplatescatalog-r516f8cb755d4f9c3-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1'>
                      <Sparkles className="w-3 h-3" data-api-unique-id='masterplatescatalog-r856f3945fdf32d95-s3239782938' data-api-unique-page-name='src/frontend/components/CollectionsFolios/MasterPlatesCatalog' data-api-in-loop='1' />
                      Master Print
                    </span>
                  </div>
                </div>
              </div>
            </article>;
      })}
      </div>
    </section>;
}