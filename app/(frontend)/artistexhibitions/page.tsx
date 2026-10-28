"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/frontend/components/ArtistExhibitions/HeroSection";
import BiographicalMonograph from "@/frontend/components/ArtistExhibitions/BiographicalMonograph";
import ExhibitionTimeline from "@/frontend/components/ArtistExhibitions/ExhibitionTimeline";
import PressMonographShowcase from "@/frontend/components/ArtistExhibitions/PressMonographShowcase";
import { getArtistExhibitionsData } from "@/frontend/actions/ArtistExhibitions";
import { ExhibitionRecordItem, ExhibitionType, StudioBioData } from "@/frontend/types/ArtistExhibitions";
const INITIAL_STUDIO_BIO: StudioBioData = {
  id: "bio-julian-vane-01",
  artistName: "Julian Vane",
  studioName: "Darkroom Atelier 04",
  philosophyQuote: "Within negative space and delayed chemical reaction, architectural geometry surrenders its clinical weight to the quiet grain of silver halide.",
  bioStatement: "Trained under classical Swiss typographic typologists and traditional Venetian darkroom masters, Julian Vane has spent over two decades interrogating the tectonic silence of contemporary architecture through large-format analog photography. Working predominantly with custom-built 8x10 field cameras and handmade baryta paper, Vane documents raw concrete monoliths, brutalist civic structures, and subterranean urban voids across Milan, Basel, Berlin, and Tokyo.\n\nHis darkroom practice remains strictly analog: each negative is hand-developed in custom chemical dilutions, followed by labor-intensive silver gelatin fiber printing where exposure masks and split-grade contrast filtration sculpt deep, luminous blacks. Rather than celebrating functional architectural perfection, his imagery foregrounds the friction between structural permanence and the ephemeral drift of natural light, dust, and atmosphere.\n\nVane has published four seminal monographs with Steidl and Hatje Cantz, including 'Tectonic Monoliths' (2018) and 'Silver Halide Voids' (2023). His studio maintains active darkroom laboratories in Milan's Navigli district and Tokyo's Yanaka enclave, where he continues to fabricate museum-grade archival prints and lead research initiatives into historical photographic chemistry.",
  portraitImage: null,
  atelierLocation: "Milan · Tokyo",
  activeRepresentation: "Represented by Galleria Continua (San Gimignano / Paris) & Taka Ishii Gallery (Tokyo)"
};
const INITIAL_EXHIBITIONS: ExhibitionRecordItem[] = [{
  id: "exh-2024-venice",
  title: "Silent Monoliths & Chemical Shadows",
  institution: "Venice Architecture Biennale (Collateral Pavilion)",
  city: "Venice, Italy",
  year: 2024,
  exhibitionType: "BIENNIAL",
  pressMention: "Vane's massive 8x10 silver gelatin prints restore a sacred solemnity to architectural inquiry, proving that chemical depth captures structural presence far more palpably than digital perfection.",
  externalUrl: "https://www.labiennale.org/en/architecture",
  sortOrder: 1
}, {
  id: "exh-2023-mori",
  title: "Silver Halide Voids: 2004–2023",
  institution: "Mori Art Museum",
  city: "Tokyo, Japan",
  year: 2023,
  exhibitionType: "SOLO_EXHIBITION",
  pressMention: "A monumental survey of negative space. The cavernous gallery installation allows viewers to inhabit the deep baryta blacks as physical architectural chambers.",
  externalUrl: "https://www.mori.art.museum",
  sortOrder: 2
}, {
  id: "exh-2023-monograph",
  title: "Julian Vane: Silver Halide Voids (Catalogue Raisonné)",
  institution: "Steidl Publishing & Atelier 04",
  city: "Göttingen / Milan",
  year: 2023,
  exhibitionType: "MONOGRAPH",
  pressMention: "Printed with tritone stochastic screening on custom tactile stock, this monograph sets a new benchmark for photographic architectural publishing in the post-digital era.",
  externalUrl: "https://steidl.de",
  sortOrder: 3
}, {
  id: "exh-2022-pompidou",
  title: "Structures of Silence: Post-War Concrete & the Photographic Eye",
  institution: "Centre Pompidou",
  city: "Paris, France",
  year: 2022,
  exhibitionType: "INSTITUTIONAL",
  pressMention: "Pairing Vane's contemporary large-format studies with archival Bauhaus documentation illuminates the enduring existential weight of monolithic civic design.",
  externalUrl: "https://www.centrepompidou.fr",
  sortOrder: 4
}, {
  id: "exh-2021-kunsthaus",
  title: "Tectonic Shadows & Material Inertia",
  institution: "Kunsthaus Zürich",
  city: "Zürich, Switzerland",
  year: 2021,
  exhibitionType: "SOLO_EXHIBITION",
  pressMention: "The exhibition strips modern architecture of its corporate gloss, revealing a haunting, tactile archaeology of light, lime, and silver crystals.",
  externalUrl: "https://www.kunsthaus.ch",
  sortOrder: 5
}, {
  id: "exh-2020-triennale",
  title: "Milanese Brutalism: A Photographic Archaeology",
  institution: "Triennale Milano",
  city: "Milan, Italy",
  year: 2020,
  exhibitionType: "INSTITUTIONAL",
  pressMention: "Vane unearths the radical sculptural soul of Milan's postwar civic architecture through austere contrast and sublime darkroom craftsmanship.",
  externalUrl: "https://triennale.org",
  sortOrder: 6
}, {
  id: "exh-2019-basel",
  title: "Art Basel Unlimited: Monumental Field Studies",
  institution: "Messe Basel",
  city: "Basel, Switzerland",
  year: 2019,
  exhibitionType: "BIENNIAL",
  pressMention: "Standing before Vane's four-meter diptychs is an encounter with the slow, deliberate physics of architectural endurance.",
  externalUrl: "https://www.artbasel.com/basel",
  sortOrder: 7
}, {
  id: "exh-2018-monograph",
  title: "Tectonic Monoliths: Architectural Geometry in Silver",
  institution: "Hatje Cantz Verlag",
  city: "Berlin, Germany",
  year: 2018,
  exhibitionType: "MONOGRAPH",
  pressMention: "An indispensable visual monograph mapping brutalist civic forms with the precision of an architect and the tonal discipline of a master printer.",
  externalUrl: "https://www.hatjecantz.de",
  sortOrder: 8
}];
export default function ArtistExhibitionsPage() {
  const [studioBio, setStudioBio] = useState<StudioBioData>(INITIAL_STUDIO_BIO);
  const [exhibitions, setExhibitions] = useState<ExhibitionRecordItem[]>(INITIAL_EXHIBITIONS);
  const [selectedType, setSelectedType] = useState<ExhibitionType | "ALL">("ALL");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const data = await getArtistExhibitionsData();
        if (!isMounted || !data) return;
        if (data.studioBio) {
          setStudioBio(data.studioBio);
        }
        if (Array.isArray(data.exhibitions) && data.exhibitions.length > 0) {
          setExhibitions(data.exhibitions);
        }
      } catch {
        // Retain initial fallback presentation on error
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);
  return <div className="w-full min-h-screen bg-background text-foreground" data-api-unique-id='page-r442df0e191bba7f2-s3191404483' data-api-unique-page-name='app/(frontend)/artistexhibitions/page'>
      {/* 1. Hero Header & Philosophy Statement */}
      <HeroSection studioBio={studioBio} bio={studioBio} onExploreTimeline={() => {
      const timelineElem = document.getElementById("exhibition-timeline");
      if (timelineElem) {
        timelineElem.scrollIntoView({
          behavior: "smooth"
        });
      }
    }} data-api-unique-id='page-rfdba29f61b6fdb3b-s3191404483' data-api-unique-page-name='app/(frontend)/artistexhibitions/page' />

      {/* 2. Master Darkroom Portrait & Biographical Monograph */}
      <BiographicalMonograph studioBio={studioBio} data-api-unique-id='page-rd2330eec179061c0-s3191404483' data-api-unique-page-name='app/(frontend)/artistexhibitions/page' />

      {/* 3. Exhibition Archive & Timeline with Format Filters */}
      <div id="exhibition-timeline" data-api-unique-id='page-rdd7e8fc56b363298-s3191404483' data-api-unique-page-name='app/(frontend)/artistexhibitions/page'>
        <ExhibitionTimeline exhibitions={exhibitions} selectedType={selectedType} onTypeChange={setSelectedType} selectedYear={selectedYear} onYearChange={setSelectedYear} data-api-unique-id='page-r5799c98f1659b2c2-s3191404483' data-api-unique-page-name='app/(frontend)/artistexhibitions/page' />
      </div>

      {/* 4. Critical Press Reviews, Monograph Mentions & Catalogs */}
      <PressMonographShowcase exhibitions={exhibitions} data-api-unique-id='page-r674a45207710e4dc-s3191404483' data-api-unique-page-name='app/(frontend)/artistexhibitions/page' />
    </div>;
}