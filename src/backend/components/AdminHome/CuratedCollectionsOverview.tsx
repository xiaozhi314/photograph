"use client";

import React from "react";
import { useRouter } from "next/navigation";
import EditableImg from "@/@base/EditableImg";
import { CollectionsManager } from "@/backend/route-params";
import type { CollectionItem } from "@/backend/types/AdminHome";
import { Film, Image as ImageIcon, Star, ExternalLink, Layers } from "lucide-react";
interface CuratedCollectionsOverviewProps {
  collections: CollectionItem[];
  onToggleVisibility: (id: CollectionItem["id"], nextVal?: boolean) => void;
  onToggleFeatured: (id: CollectionItem["id"], nextVal?: boolean) => void;
}
export default function CuratedCollectionsOverview({
  collections,
  onToggleVisibility,
  onToggleFeatured
}: CuratedCollectionsOverviewProps) {
  const router = useRouter();
  const handleManageAll = () => {
    CollectionsManager.navigateTo(router);
  };
  return <div data-controller-name="Curated Collections Showcase" className="bg-card text-card-foreground border border-border/80 rounded-sm p-4 sm:p-5 flex flex-col gap-4 min-w-0" data-api-unique-id='curatedcollectionsoverview-r439fd631dad256ac-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-border/60 pb-3" data-api-unique-id='curatedcollectionsoverview-r8307b4db55c7a928-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
        <div data-api-unique-id='curatedcollectionsoverview-rfdc585f478308b46-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
          <h2 className="text-base sm:text-lg font-serif font-semibold tracking-tight text-foreground flex items-center gap-2" data-api-unique-id='curatedcollectionsoverview-r9f6e959ae87bbf27-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
            <span data-api-unique-id='curatedcollectionsoverview-r753b54cbd440064c-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>Curated Collections Gallery</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-muted text-muted-foreground font-normal" data-api-unique-id='curatedcollectionsoverview-r24d22bcd00f13827-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
              {collections.length} Folios
            </span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5" data-api-unique-id='curatedcollectionsoverview-r284e454980306b9d-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
            Exhibition-scale archival series with live public wall visibility toggles
          </p>
        </div>
        <div className="flex items-center gap-3" data-api-unique-id='curatedcollectionsoverview-r40fc51fdd6172ed3-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
          <div className="text-xs text-muted-foreground font-mono hidden md:block" data-api-unique-id='curatedcollectionsoverview-rb42cbe0a949d15ef-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
            Roll Format: 120 / 35mm Fine Rag
          </div>
          <button type="button" onClick={handleManageAll} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border border-border bg-background hover:bg-muted text-foreground rounded-sm transition-colors cursor-pointer" data-api-unique-id='curatedcollectionsoverview-rc02a3efa77caa2e4-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
            <Layers className="w-3.5 h-3.5 text-muted-foreground" data-api-unique-id='curatedcollectionsoverview-r6ac6be8fdbe36910-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' />
            <span data-api-unique-id='curatedcollectionsoverview-r48dfa17b87c5aa51-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>Manage All Folios</span>
            <ExternalLink className="w-3 h-3 text-muted-foreground" data-api-unique-id='curatedcollectionsoverview-r439de02cbf2fe6b6-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-api-unique-id='curatedcollectionsoverview-rdf3d8fe0d380f8e4-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview'>
        {collections.map((col, index) => {
        const imageSrc = col.coverImage || undefined;
        const isPortrait = col.aspect === "PORTRAIT" || col.aspect as string === "portrait";
        const totalPlates = col.workCount ?? col.imageCount;
        return <div key={col.id} className={`group border rounded-sm overflow-hidden flex flex-col transition-all ${col.isVisible ? "border-border/80 bg-background" : "border-border/40 bg-muted/40 opacity-75"}`} data-api-unique-id='curatedcollectionsoverview-rd9e317f4583059a6-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
              <div className="relative w-full overflow-hidden bg-muted" data-api-unique-id='curatedcollectionsoverview-rac58ae705e16694c-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                <div className={`w-full ${col.aspectRatioClass || (isPortrait ? "aspect-[4/5]" : "aspect-[16/9]")} relative`} data-api-unique-id='curatedcollectionsoverview-r5c8f8ad2b4ac5bf4-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                  <EditableImg propKey={`collection-cover-${col.id}`} src={imageSrc} alt={col.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" data-api-unique-id='curatedcollectionsoverview-r62a539368977a3b1-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' />
                </div>

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10" data-api-unique-id='curatedcollectionsoverview-rb00997a93383f69d-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-background/90 text-foreground shadow-sm" data-api-unique-id='curatedcollectionsoverview-r8efd8caf3423a59d-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' data-api-bind-info={`collections-${index}-rollNumber`} data-api-map-var-name='col'>
                    <Film className="w-2.5 h-2.5 text-primary" data-api-unique-id='curatedcollectionsoverview-r174e6f105c8a6d7b-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' />
                    {col.rollNumber}
                  </span>
                  {col.featuredOnHome && <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-primary text-primary-foreground shadow-sm" data-api-unique-id='curatedcollectionsoverview-r7779f9271a643f54-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                      <Star className="w-2.5 h-2.5 fill-current" data-api-unique-id='curatedcollectionsoverview-r15b0d01ec42948bd-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' />
                      Featured
                    </span>}
                </div>

                <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5" data-api-unique-id='curatedcollectionsoverview-r4b3536243dc61a2f-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono bg-background/90 text-foreground shadow-sm" data-api-unique-id='curatedcollectionsoverview-rec8af01ef70fef11-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                    <ImageIcon className="w-2.5 h-2.5" data-api-unique-id='curatedcollectionsoverview-r676d910736eb6235-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' />
                    {totalPlates} Plates
                  </span>
                </div>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1 gap-2.5 min-w-0" data-api-unique-id='curatedcollectionsoverview-rd3dfafcf634e5fd4-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                <div className="min-w-0" data-api-unique-id='curatedcollectionsoverview-r658560c4ef3b5817-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                  <div className="flex items-baseline justify-between gap-2" data-api-unique-id='curatedcollectionsoverview-rdc80acaaf4563824-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                    <h3 className="font-serif font-semibold text-sm sm:text-base text-foreground truncate" data-api-unique-id='curatedcollectionsoverview-r3cb1ee90a3ae3c89-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' data-api-bind-info={`collections-${index}-title`} data-api-map-var-name='col'>
                      {col.title}
                    </h3>
                    <span className="text-[11px] font-mono text-muted-foreground shrink-0" data-api-unique-id='curatedcollectionsoverview-r090df78c23c420b6-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' data-api-bind-info={`collections-${index}-medium`} data-api-map-var-name='col'>
                      {col.medium}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5" data-api-unique-id='curatedcollectionsoverview-rac52929ee3346bcc-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' data-api-bind-info={`collections-${index}-curatorNote`} data-api-map-var-name='col'>
                    {col.curatorNote}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2" data-api-unique-id='curatedcollectionsoverview-r10a2c8c01660af6d-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                  <button type="button" onClick={() => onToggleFeatured(col.id, !col.featuredOnHome)} className={`text-xs px-2 py-1 rounded-sm border transition-colors flex items-center gap-1 cursor-pointer ${col.featuredOnHome ? "border-primary bg-primary/10 text-primary font-medium" : "border-border bg-card text-muted-foreground hover:bg-muted"}`} data-api-unique-id='curatedcollectionsoverview-r93bea887f9f85a5a-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                    <Star className="w-3 h-3" data-api-unique-id='curatedcollectionsoverview-rc40efc2271456ae1-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' />
                    <span data-api-unique-id='curatedcollectionsoverview-r062d464fcebdd597-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>{col.featuredOnHome ? "Pinned Home" : "Pin Home"}</span>
                  </button>

                  <div className="flex items-center gap-2" data-api-unique-id='curatedcollectionsoverview-rd2fee821f8d4e0f8-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                    <span className="text-[11px] font-medium text-muted-foreground" data-api-unique-id='curatedcollectionsoverview-rb885b858e4607b5e-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                      {col.isVisible ? "Public Wall" : "Archived Vault"}
                    </span>
                    <button type="button" role="switch" aria-checked={col.isVisible} onClick={() => onToggleVisibility(col.id, !col.isVisible)} className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${col.isVisible ? "bg-primary" : "bg-muted"}`} data-api-unique-id='curatedcollectionsoverview-rb5d74f0464e92215-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1'>
                      <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${col.isVisible ? "translate-x-4" : "translate-x-0"}`} data-api-unique-id='curatedcollectionsoverview-r48ce1b3f0957a216-s1876850368' data-api-unique-page-name='src/backend/components/AdminHome/CuratedCollectionsOverview' data-api-in-loop='1' />
                    </button>
                  </div>
                </div>
              </div>
            </div>;
      })}
      </div>
    </div>;
}