"use client";

import React from "react";
import EditableImg from "@/@base/EditableImg";
import { StudioBioData } from "@/frontend/types/ArtistExhibitions";
interface BiographicalMonographProps {
  studioBio?: StudioBioData | null;
}
const DEFAULT_ESSAY_SECTIONS = [{
  heading: "I. The Medium of Latency & Silver Halide",
  text: "Julian Vane's practice is anchored in the tactile ritual of large and medium-format analog photography, developed by hand within the rigorous darkness of Atelier 04. Eschewing the hyper-velocity of digital capture, each negative is exposed onto classic silver gelatin fiber paper, demanding prolonged exposure, meticulous chemical bath agitation, and natural air drying. This intentional friction preserves the atmospheric grain and tactile depth inherent to historic architectural facades."
}, {
  heading: "II. Monographic Studies Across Europe & Asia",
  text: "Between 2014 and the present day, Vane undertook extensive architectural expeditions tracing brutalist geometries, minimalist concrete shrines, and vernacular timber structures across Milan, Tokyo, Kyoto, and Basel. Collaborating with independent European bookbinders and institutional presses, his monograph publications document not mere monuments, but the ephemeral choreography between natural light, structural cast shadows, and urban solitude."
}, {
  heading: "III. Archival Permanence & Atelier Protocol",
  text: "Every gelatin silver print produced at the studio undergoes selenium toning and double-fixing to meet museum archival standards of 150+ year longevity. The studio maintains an unbroken edition registry where each editioned print is embossed with the atelier seal and countersigned in pencil recto-verso. For Vane, the photographic print is not an illustration of architecture, but an autonomous architectural object in its own right."
}];
const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI"];
export default function BiographicalMonograph({
  studioBio
}: BiographicalMonographProps) {
  const artistName = studioBio?.artistName || "Julian Vane";
  const studioName = studioBio?.studioName || "Darkroom Atelier 04";
  const atelierLocation = studioBio?.atelierLocation || "Milan · Tokyo";
  const portraitSrc = studioBio?.portraitImage || undefined;

  // Split bio statement into monograph essay sections if provided, otherwise preserve default essay
  const essaySections = React.useMemo(() => {
    if (!studioBio?.bioStatement) {
      return DEFAULT_ESSAY_SECTIONS;
    }
    const paragraphs = studioBio.bioStatement.split(/\n\s*\n/).map((p, index) => p.trim()).filter(Boolean);
    if (paragraphs.length === 0) {
      return DEFAULT_ESSAY_SECTIONS;
    }
    return paragraphs.map((text, index) => ({
      heading: index < DEFAULT_ESSAY_SECTIONS.length ? DEFAULT_ESSAY_SECTIONS[index].heading : `${ROMAN_NUMERALS[index] || `${index + 1}`}. Monograph Study & Practice`,
      text
    }));
  }, [studioBio?.bioStatement]);
  return <section data-controller-name="Biographical Monograph Dossier" className="py-16 md:py-24 border-b border-border bg-background" data-api-unique-id='biographicalmonograph-r353f2ec79e0852d1-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-api-unique-id='biographicalmonograph-r22f97483dee737cf-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" data-api-unique-id='biographicalmonograph-r8b2431281fa8d5f6-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
          {/* Left Column: Master Atelier Portrait */}
          <div className="lg:col-span-5 w-full min-w-0" data-api-unique-id='biographicalmonograph-rf6d2c6c8c3c20ca1-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
            <div className="sticky top-24 space-y-6" data-api-unique-id='biographicalmonograph-ra9e2f55b958e9e63-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm" data-api-unique-id='biographicalmonograph-r94930c7b8c7768fd-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                <EditableImg propKey="artist-portrait-darkroom" src={portraitSrc} needLargeImage className="w-full h-full object-cover" data-api-unique-id='biographicalmonograph-rf1499fd564c60e24-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph' />

                {/* Subtle analog corner mark */}
                <div className="absolute top-4 left-4 border border-border/80 bg-background/90 px-2.5 py-1 text-[11px] font-mono tracking-widest text-muted-foreground uppercase backdrop-blur-sm" data-api-unique-id='biographicalmonograph-r8f1e4748a86b11fa-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                  PORTRAIT · ATELIER 04
                </div>
              </div>

              {/* Portrait metadata note */}
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-3 font-mono" data-api-unique-id='biographicalmonograph-r33a8e031e8f57fae-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                <span data-api-unique-id='biographicalmonograph-r5ecc093e0a606476-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>PLATE NO. 04-B</span>
                <span data-api-unique-id='biographicalmonograph-rd3d18f50407dc3cd-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>SILVER GELATIN CONTACT PRINT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Monograph Essay & Embossed Atelier Seal */}
          <div className="lg:col-span-7 w-full min-w-0 flex flex-col justify-between" data-api-unique-id='biographicalmonograph-r84beaa01f94e0e13-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
            <div className="space-y-8" data-api-unique-id='biographicalmonograph-r8ac9ca42e52703fe-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
              <div data-api-unique-id='biographicalmonograph-r782786ea5e8c5d49-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-foreground" data-api-unique-id='biographicalmonograph-r0239efd4f8566a94-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                  The Silver Halide Monograph
                </h2>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider font-mono" data-api-unique-id='biographicalmonograph-r63ada55ea8f6b368-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                  Biographical Dossier & Studio Methodology · {artistName}
                </p>
              </div>

              {/* 3-Part Monograph Essay */}
              <div className="space-y-8 text-foreground/90 font-serif leading-relaxed text-base sm:text-lg" data-api-unique-id='biographicalmonograph-r1878ee68fe62685e-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                {essaySections.map((section, index) => <article key={index} className="space-y-3" data-api-unique-id='biographicalmonograph-r2c186a5b2764887d-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph' data-api-in-loop='1'>
                    <h3 className="text-sm font-sans font-semibold tracking-wider text-primary uppercase font-mono" data-api-unique-id='biographicalmonograph-rb52c1dffb116592b-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph' data-api-in-loop='1' data-api-bind-info={`essaySections-${index}-heading`} data-api-map-var-name='section'>
                      {section.heading}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-sans text-base" data-api-unique-id='biographicalmonograph-re3f3c34c95c4e73e-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph' data-api-in-loop='1' data-api-bind-info={`essaySections-${index}-text`} data-api-map-var-name='section'>
                      {section.text}
                    </p>
                  </article>)}
              </div>

              {/* Atelier Embossed Seal Signature Block */}
              <div className="pt-8 border-t border-border mt-10" data-api-unique-id='biographicalmonograph-r648dcd165d1190a1-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm" data-api-unique-id='biographicalmonograph-r0fd346ee5eadb78b-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                  <div className="space-y-1" data-api-unique-id='biographicalmonograph-r8ca6235b21043edf-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest" data-api-unique-id='biographicalmonograph-r3da5f7ecfec222ce-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                      Authenticity & Edition Verification
                    </div>
                    <div className="font-serif text-lg font-medium text-foreground" data-api-unique-id='biographicalmonograph-r5ef766456098d6bd-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                      {studioName}
                    </div>
                    <div className="text-xs text-muted-foreground" data-api-unique-id='biographicalmonograph-r1023209b17f5f4c5-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                      Archival print registration repository · {atelierLocation}
                    </div>
                  </div>

                  {/* Analog Embossed Seal Graphic */}
                  <div className="flex items-center gap-4 shrink-0" data-api-unique-id='biographicalmonograph-r8f085a375fa4ef78-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                    <div className="h-20 w-20 rounded-full border-2 border-dashed border-primary/40 bg-secondary/50 flex flex-col items-center justify-center text-center p-2 shadow-inner select-none" data-api-unique-id='biographicalmonograph-r3bf408f22d282123-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                      <span className="text-[9px] font-mono tracking-widest text-primary font-bold uppercase leading-tight" data-api-unique-id='biographicalmonograph-rca7db4fd6064002b-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                        ATELIER
                      </span>
                      <span className="text-sm font-serif font-bold text-foreground my-0.5" data-api-unique-id='biographicalmonograph-r8ddf9ccac2bb6792-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                        04
                      </span>
                      <span className="text-[8px] font-mono tracking-tighter text-muted-foreground uppercase" data-api-unique-id='biographicalmonograph-r75e568f3625f523a-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                        MILAN·TOKYO
                      </span>
                    </div>
                    <div className="text-right" data-api-unique-id='biographicalmonograph-r2d364afeb8cab119-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                      <div className="font-serif italic text-base text-foreground" data-api-unique-id='biographicalmonograph-rf800dca9149dea10-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                        {artistName}
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground" data-api-unique-id='biographicalmonograph-r9d1dae6b1b3a4b30-s1903049498' data-api-unique-page-name='src/frontend/components/ArtistExhibitions/BiographicalMonograph'>
                        DIRECTOR & PRINTMAKER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}