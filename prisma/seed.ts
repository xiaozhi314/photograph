import { PrismaClient, Prisma, AccountRole, AspectOrientation, ExhibitionType, InquiryStatus, ProjectType, ServiceType } from "@prisma/client";
import { hashPassword } from "../src/@base/BaseActionFun";

const prisma = new PrismaClient();
type SeedEntity = Record<string, unknown>;
type RelationBinding = { target_entity_key: string; local_fields: readonly string[]; target_fields: readonly string[] };

const accountUserRecords = [
  { entityKey: "AccountUser:user_curator_admin", data: {
      id: "f651c24d-0760-4e7e-a371-88792fdf7c14",
      avatarUrl: "{{DOMAIN}}/background/zaki_prod/generated/4376144ecfe3402d8560321672eb820c.jpg",
      createdAt: new Date("2026-08-15T09:00:00.000Z"),
      email: "curator@darkroomatelier.art",
      fullName: "Julian Vane",
      organization: "Darkroom Atelier 04",
      passwordHash: hashPassword("Curator2026!"),
      phone: "+39 02 8739 5100",
      role: AccountRole.CURATOR_ADMIN,
      username: "julian.vane"
    }, relations: [] },
  { entityKey: "AccountUser:user_client_eleanor", data: {
      id: "31417bf2-c57d-4b2f-a563-dc1d2aaa7289",
      avatarUrl: "{{DOMAIN}}/background/zaki_dev/generated/5c33ce14545242118e197b4f743d6e1c.png",
      createdAt: new Date("2026-09-01T10:30:00.000Z"),
      email: "e.castiglione@vance-holdings.ch",
      fullName: "Eleanor Vance-Castiglione",
      organization: "Castiglione Contemporary Foundation",
      passwordHash: hashPassword("ClientPass2026!"),
      phone: "+41 22 819 4400",
      role: AccountRole.CLIENT,
      username: "eleanor.vance"
    }, relations: [] },
  { entityKey: "AccountUser:user_client_marcus", data: {
      id: "9619a285-fe20-4cda-a045-18a588937606",
      avatarUrl: "{{DOMAIN}}/background/zaki_dev/generated/d7fb8e5443f64e30a304156717da2d62.png",
      createdAt: new Date("2026-09-15T14:20:00.000Z"),
      email: "m.sterling@sterling-architects.co.uk",
      fullName: "Marcus Sterling",
      organization: "Sterling & Partners Architecture",
      passwordHash: hashPassword("ClientPass2026!"),
      phone: "+44 20 7946 0912",
      role: AccountRole.CLIENT,
      username: "marcus.sterling"
    }, relations: [] },
] as const;

const photoCategoryRecords = [
  { entityKey: "PhotoCategory:cat-arch", data: {
      id: "8b63eac6-cb0c-4201-a93c-75561cbe9f94",
      createdAt: new Date("2026-01-15T08:00:00.000Z"),
      description: "Brutalist lines, urban concrete textures, geometric negative spaces, and monumental shadows.",
      name: "Architecture & Structural Monoliths",
      slug: "architecture",
      sortOrder: 1
    }, relations: [] },
  { entityKey: "PhotoCategory:cat-port", data: {
      id: "7e49ac00-9312-4b47-a8c5-6451e15d5c4a",
      createdAt: new Date("2026-01-15T08:05:00.000Z"),
      description: "Intimate chiaroscuro character studies capturing human resonance and emotional quietude.",
      name: "Fine Art Portraiture",
      slug: "portraiture",
      sortOrder: 2
    }, relations: [] },
  { entityKey: "PhotoCategory:cat-land", data: {
      id: "1ce7c0f3-57b3-476e-a967-fb136eefdcd5",
      createdAt: new Date("2026-01-15T08:10:00.000Z"),
      description: "Silent geological horizons, glacial mist, volcanic terrains, and vast solitude.",
      name: "Nordic & Alpine Landscapes",
      slug: "landscape",
      sortOrder: 3
    }, relations: [] },
  { entityKey: "PhotoCategory:cat-street", data: {
      id: "603f20b3-bc2d-47a5-a208-01ae41b3b221",
      createdAt: new Date("2026-01-15T08:15:00.000Z"),
      description: "Fleeting urban intersections, transit silhouettes, and candid atmospheric street scenes.",
      name: "Street & Urban Narrative",
      slug: "street",
      sortOrder: 4
    }, relations: [] },
  { entityKey: "PhotoCategory:cat-still-life", data: {
      id: "7e4e9dc4-f4af-4906-a526-150b7ff6b96f",
      createdAt: new Date("2026-01-15T08:20:00.000Z"),
      description: "Sculptural compositions of raw mineral blocks, ceramic vessels, and tactile artisan forms.",
      name: "Sculptural Still Life",
      slug: "still-life",
      sortOrder: 5
    }, relations: [] },
  { entityKey: "PhotoCategory:cat-commercial", data: {
      id: "96f8a397-8432-4133-ac9b-d98edf577e37",
      createdAt: new Date("2026-01-15T08:25:00.000Z"),
      description: "Commissioned architectural monographs, editorial atelier studies, and luxury mechanical details.",
      name: "Editorial & Commercial Monograph",
      slug: "commercial",
      sortOrder: 6
    }, relations: [] },
] as const;

const photoCollectionRecords = [
  { entityKey: "PhotoCollection:col_chiaroscuro", data: {
      id: "1fb99e30-fb9f-43c1-aba7-6b1582c1fe6e",
      aspect: AspectOrientation.PORTRAIT,
      aspectRatioClass: "aspect-[4/5]",
      coverImage: "{{DOMAIN}}/background/zaki_prod/generated/51175ce16b7b4508bb10bd2f59a85811.jpg",
      createdAt: new Date("2026-08-15T10:00:00.000Z"),
      curatorNote: "Natural daylight study with warm linen drapery and soft carbon shadows. Developed in D-76 at 20°C for 9.5 minutes.",
      featuredOnHome: true,
      imageCount: 24,
      isVisible: true,
      medium: "120 Medium Format / Portra 160",
      rollNumber: "Roll No. 042",
      sortOrder: 1,
      title: "Chiaroscuro & Solitude"
    }, relations: [] },
  { entityKey: "PhotoCollection:col_sanctuary", data: {
      id: "f8f1bbde-83a5-4a4f-ae2d-75ab0767799e",
      aspect: AspectOrientation.LANDSCAPE,
      aspectRatioClass: "aspect-[16/9]",
      coverImage: "{{DOMAIN}}/background/zaki_prod/generated/346ad495c78345fabe5c99e171311734.jpg",
      createdAt: new Date("2026-08-20T11:30:00.000Z"),
      curatorNote: "Minimalist plaster compositions capturing afternoon oblique raking sunlight. Front standard tilt applied for infinite depth of field.",
      featuredOnHome: true,
      imageCount: 18,
      isVisible: true,
      medium: "Large Format 4x5 Monorail",
      rollNumber: "Roll No. 045",
      sortOrder: 2,
      title: "Sanctuary of Geometry"
    }, relations: [] },
  { entityKey: "PhotoCollection:col_monochrome", data: {
      id: "dd2765fb-f024-40fe-a36c-aa6c8f4f3e5a",
      aspect: AspectOrientation.PORTRAIT,
      aspectRatioClass: "aspect-[4/5]",
      coverImage: "{{DOMAIN}}/background/zaki_prod/generated/eca8d6f9ca7b4fd6aed210cd94a1d752.jpg",
      createdAt: new Date("2026-09-02T14:15:00.000Z"),
      curatorNote: "High-contrast silk drapery exploring tactile textures and tonal graduation. Hand-printed on Ilford Galerie Warmtone glossy bromide sheets.",
      featuredOnHome: false,
      imageCount: 32,
      isVisible: false,
      medium: "Silver Gelatin / Ilford HP5",
      rollNumber: "Roll No. 038",
      sortOrder: 3,
      title: "Sculptural Monochrome"
    }, relations: [] },
  { entityKey: "PhotoCollection:col_botanicals", data: {
      id: "0bc4d133-edf4-4c4b-ac5f-010d27672b5f",
      aspect: AspectOrientation.LANDSCAPE,
      aspectRatioClass: "aspect-[16/9]",
      coverImage: "{{DOMAIN}}/background/zaki_prod/generated/00cc9151ff0a4e4a95dd3c5c4e2cd8e9.jpg",
      createdAt: new Date("2026-09-18T09:00:00.000Z"),
      curatorNote: "Botanical specimen studies illuminated through hand-blown vintage glass vials in studio north light.",
      featuredOnHome: true,
      imageCount: 16,
      isVisible: true,
      medium: "Large Format 4x5 Kodak Ektar 100",
      rollNumber: "Roll No. 052",
      sortOrder: 4,
      title: "Herbarium & Glass Vials"
    }, relations: [] },
  { entityKey: "PhotoCollection:col_brutalist", data: {
      id: "b16db65c-c9f2-4700-a6e9-97d7c1f11e54",
      aspect: AspectOrientation.PORTRAIT,
      aspectRatioClass: "aspect-[4/5]",
      coverImage: "{{DOMAIN}}/background/zaki_prod/generated/66cf2c692a08440ba0a3b3f45b7b05e0.jpg",
      createdAt: new Date("2026-10-05T16:45:00.000Z"),
      curatorNote: "Architectural monolithic facades of cold war transit infrastructure under overcast diffused sky. Platinum palladium process.",
      featuredOnHome: false,
      imageCount: 12,
      isVisible: true,
      medium: "Platinum Palladium Print",
      rollNumber: "Roll No. 064",
      sortOrder: 5,
      title: "Brutalist Echoes & Formwork"
    }, relations: [] },
] as const;

const servicePackageRecords = [
  { entityKey: "ServicePackage:service_package_arch_monograph", data: {
      id: "f04f7e1a-4a0a-411b-a251-26fefac880aa",
      basePrice: new Prisma.Decimal("9400"),
      createdAt: new Date("2026-08-15T08:00:00.000Z"),
      deliverables: ["12 Hand-printed fiber-based silver gelatin master prints (16×20 in)", "Medium-format digital raw scans (100MP Hasselblad / Phase One)", "Complete set of archival contact proof sheets with exposure notes", "Perpetual editorial and institutional monograph publishing license", "Bespoke linen presentation folio case with embossed studio colophon"] as Prisma.InputJsonValue,
      durationEstimate: "4–6 Weeks On-Site & Darkroom Processing",
      isActive: true,
      priceDisplay: "$9,400 Starting Investment",
      serviceType: ServiceType.ARCHITECTURAL_MONOGRAPH,
      sortOrder: 1,
      title: "Institutional Architectural Monograph"
    }, relations: [] },
  { entityKey: "ServicePackage:service_package_editorial_portraiture", data: {
      id: "6890edda-82e9-40f3-a05f-730044a0a402",
      basePrice: new Prisma.Decimal("4200"),
      createdAt: new Date("2026-08-16T09:30:00.000Z"),
      deliverables: ["6 Fiber-base archival silver gelatin exhibition prints (11×14 in)", "High-resolution digital master scans with tonal grading", "Full digital contact sheets containing all 120 film exposures", "Worldwide editorial, press, and institutional print release rights"] as Prisma.InputJsonValue,
      durationEstimate: "2–3 Weeks Studio & Chemical Developing",
      isActive: true,
      priceDisplay: "$4,200 Investment",
      serviceType: ServiceType.EDITORIAL_PORTRAITURE,
      sortOrder: 2,
      title: "Executive & Cultural Editorial Portraiture"
    }, relations: [] },
  { entityKey: "ServicePackage:service_package_commercial_campaign", data: {
      id: "349944a3-e8eb-40a0-a883-88a2566d5773",
      basePrice: new Prisma.Decimal("12800"),
      createdAt: new Date("2026-08-17T11:00:00.000Z"),
      deliverables: ["Comprehensive medium-format campaign visual suite (Digital + Analog)", "Archival gallery-grade print set (20×24 in) for brand archives", "Full global multi-channel commercial license including out-of-home", "On-set darkroom test prints and chemistry log documentation"] as Prisma.InputJsonValue,
      durationEstimate: "3–5 Weeks Production & Master Proofing",
      isActive: true,
      priceDisplay: "$12,800 Starting Base",
      serviceType: ServiceType.COMMERCIAL_CAMPAIGN,
      sortOrder: 3,
      title: "Maison & Brand Commercial Campaign"
    }, relations: [] },
  { entityKey: "ServicePackage:service_package_print_acquisition", data: {
      id: "484f8fc0-d162-46d9-a0ca-338454cb43f4",
      basePrice: new Prisma.Decimal("6200"),
      createdAt: new Date("2026-08-18T14:15:00.000Z"),
      deliverables: ["Limited edition pigment ink prints on Hahnemühle Photo Rag Baryta", "Hand-signed and embossed certificate of authenticity", "Custom linen presentation clamshell folio box", "Museum conservation framing advisory and white-glove international shipping"] as Prisma.InputJsonValue,
      durationEstimate: "Immediate / 10 Business Days Framing",
      isActive: true,
      priceDisplay: "$6,200 Starting Registry",
      serviceType: ServiceType.PRINT_ACQUISITION,
      sortOrder: 4,
      title: "Curatorial Print Acquisition & Folio"
    }, relations: [] },
] as const;

const exhibitionRecordRecords = [
  { entityKey: "ExhibitionRecord:exh_01", data: {
      id: "39557ba6-1616-4006-a76d-ba6feb67bb8d",
      city: "Milan, Italy",
      createdAt: new Date("2026-01-15T10:00:00.000Z"),
      exhibitionType: ExhibitionType.SOLO_EXHIBITION,
      externalUrl: "https://www.triennale.org/en/exhibitions/chiaroscuro-reinforced-concrete",
      institution: "Triennale di Milano",
      pressMention: "A sublime testament to large-format architectural rigor, elevating industrial austerity to metaphysical gravity.",
      sortOrder: 1,
      title: "Chiaroscuro & Reinforced Concrete: The Milan Periphery",
      year: 2024
    }, relations: [] },
  { entityKey: "ExhibitionRecord:exh_02", data: {
      id: "a6b77194-93d8-43b7-aa08-55f7b71ba595",
      city: "Göttingen, Germany",
      createdAt: new Date("2026-02-10T11:30:00.000Z"),
      exhibitionType: ExhibitionType.MONOGRAPH,
      externalUrl: "https://steidl.de/Books/The-Silver-Ledger-Monograph-04.html",
      institution: "Steidl Press & Bookworks",
      pressMention: "Awarded Monograph of the Year for unmatched tactile offset fidelity and unadulterated analog craft.",
      sortOrder: 2,
      title: "The Silver Ledger: Monograph No. 04",
      year: 2023
    }, relations: [] },
  { entityKey: "ExhibitionRecord:exh_03", data: {
      id: "604ce73c-7c66-4e8b-a3cc-08c178b70203",
      city: "Venice, Italy",
      createdAt: new Date("2026-03-05T09:15:00.000Z"),
      exhibitionType: ExhibitionType.BIENNIAL,
      externalUrl: "https://www.labiennale.org/en/architecture/2022/silent-monoliths",
      institution: "La Biennale di Venezia",
      pressMention: "Julian Vane's darkened gallery pavilion suspended viewers in quiet awe between light and chemical memory.",
      sortOrder: 3,
      title: "18th International Architecture Exhibition: Silent Monoliths",
      year: 2022
    }, relations: [] },
  { entityKey: "ExhibitionRecord:exh_04", data: {
      id: "9f1e5f43-436e-489b-a3a9-52c181492f17",
      city: "Tokyo, Japan",
      createdAt: new Date("2026-04-12T14:20:00.000Z"),
      exhibitionType: ExhibitionType.INSTITUTIONAL,
      externalUrl: "https://www.nact.jp/english/exhibitions/shadows-wood-grain",
      institution: "The National Art Center",
      pressMention: "A sublime synthesis of European structural rigor and Japanese wabi-sabi light, rendered through master darkroom craft.",
      sortOrder: 4,
      title: "Shadows in the Wood Grain: Structural Latency",
      year: 2023
    }, relations: [] },
  { entityKey: "ExhibitionRecord:exh_05", data: {
      id: "3fbdd2e1-54a9-4996-aec8-fc9ef22ddeef",
      city: "Arles, France",
      createdAt: new Date("2026-05-18T16:45:00.000Z"),
      exhibitionType: ExhibitionType.BIENNIAL,
      externalUrl: "https://www.rencontres-arles.com/en/expositions/plate-dialogues",
      institution: "Atelier de la Mécanique",
      pressMention: "Uncompromising darkroom craftsmanship in a landscape dominated by transient pixels. A triumph of analogue permanence.",
      sortOrder: 5,
      title: "Rencontres de la Photographie: Plate Dialogues",
      year: 2021
    }, relations: [] },
] as const;

const clientTestimonialRecords = [
  { entityKey: "ClientTestimonial:testimonial_eleonora", data: {
      id: "ec75353b-3be9-42ea-aa63-86dbc9f5ff4b",
      avatarImage: "{{DOMAIN}}/background/zaki_prod/generated/c24322174597429794754ada858a3d76.jpg",
      clientName: "Eleonora Rossi",
      clientTitle: "Senior Architecture Editor",
      createdAt: new Date("2026-09-10T11:00:00.000Z"),
      isFeatured: true,
      organization: "Domus International",
      quote: "Julian Vane's prints possess a physical density that digital capture simply cannot approximate. The archival tonal depth in our Milan brutalism monograph set a new curatorial benchmark for our publication.",
      rating: 5,
      serviceType: ProjectType.EDITORIAL,
      sortOrder: 1
    }, relations: [{"target_entity_key": "AccountUser:user_client_eleanor", "local_fields": ["clientId"], "target_fields": ["id"]}] },
  { entityKey: "ClientTestimonial:testimonial_kenzo", data: {
      id: "be39dcc5-50a6-4eb5-a235-2bcb8981d877",
      avatarImage: "{{DOMAIN}}/background/zaki_prod/generated/9146218b28564625a8e7e385f04240e3.jpg",
      clientName: "Kenzo Takahashi",
      clientTitle: "Principal Director",
      createdAt: new Date("2026-09-18T14:30:00.000Z"),
      isFeatured: true,
      organization: "Atelier Takahashi Architects · Tokyo",
      quote: "Commissioning Darkroom Atelier 04 for our commercial headquarters portfolio yielded pure art. The gelatin silver master prints are framed in our boardroom as historical artifacts of our structure.",
      rating: 5,
      serviceType: ProjectType.COMMERCIAL,
      sortOrder: 2
    }, relations: [{"target_entity_key": "AccountUser:user_client_marcus", "local_fields": ["clientId"], "target_fields": ["id"]}] },
  { entityKey: "ClientTestimonial:testimonial_arthur", data: {
      id: "f5035fab-c5cc-4810-a3a2-e5c7d93ab9c8",
      avatarImage: "{{DOMAIN}}/background/zaki_dev/generated/eaa62b0d78534bbc8397ffcced2bc0a8.jpg",
      clientName: "Dr. Arthur Pendelton",
      clientTitle: "Chief Curator of Photography",
      createdAt: new Date("2026-09-25T16:00:00.000Z"),
      isFeatured: true,
      organization: "European Contemporary Art Trust",
      quote: "The acquisition of Vane's raw 8x10 contact plates represents one of our institution's most significant analog additions this decade. Unrivaled tonal gradations and archival preservation.",
      rating: 5,
      serviceType: ProjectType.ACQUISITION,
      sortOrder: 3
    }, relations: [] },
  { entityKey: "ClientTestimonial:testimonial_matteo", data: {
      id: "946b8755-9f7b-4629-acc6-8adbf1fa0477",
      avatarImage: "{{DOMAIN}}/background/zaki_prod/generated/e6b0bf99292d495cbbe3a42db93bbff9.jpg",
      clientName: "Matteo Bellini",
      clientTitle: "Senior Partner",
      createdAt: new Date("2026-10-05T09:45:00.000Z"),
      isFeatured: false,
      organization: "Studio Bellini Architettura · Milan",
      quote: "Julian captures architectural space not as concrete form, but as luminous sanctuary. The plates for our Milan civic monograph are timeless works of art and darkroom mastery.",
      rating: 5,
      serviceType: ProjectType.PORTRAIT,
      sortOrder: 4
    }, relations: [] },
] as const;

const studioBioRecords = [
  { entityKey: "StudioBio:bio_julian_vane_01", data: {
      id: "95c33c79-7742-4164-aa58-085d31c10191",
      activeRepresentation: "Represented by Galleria Continua (San Gimignano / Paris) & Taka Ishii Gallery (Tokyo)",
      artistName: "Julian Vane",
      atelierLocation: "Milan · Tokyo",
      bioStatement: "Trained under classical Swiss typographic typologists and traditional Venetian darkroom masters, Julian Vane has spent over two decades interrogating the tectonic silence of contemporary architecture through large-format analog photography. Working predominantly with custom-built 8x10 field cameras and handmade baryta paper, Vane documents raw concrete monoliths, brutalist civic structures, and subterranean urban voids across Milan, Basel, Berlin, and Tokyo.\n\nHis darkroom practice remains strictly analog: each negative is hand-developed in custom chemical dilutions, followed by labor-intensive silver gelatin fiber printing where exposure masks and split-grade contrast filtration sculpt deep, luminous blacks. Rather than celebrating functional architectural perfection, his imagery foregrounds the friction between structural permanence and the ephemeral drift of natural light, dust, and atmosphere.\n\nVane has published four seminal monographs with Steidl and Hatje Cantz, including 'Tectonic Monoliths' (2018) and 'Silver Halide Voids' (2023). His studio maintains active darkroom laboratories in Milan's Navigli district and Tokyo's Yanaka enclave, where he continues to fabricate museum-grade archival prints and lead research initiatives into historical photographic chemistry.",
      createdAt: new Date("2026-10-28T03:50:08.750Z"),
      philosophyQuote: "Within negative space and delayed chemical reaction, architectural geometry surrenders its clinical weight to the quiet grain of silver halide.",
      portraitImage: "{{DOMAIN}}/background/zaki_prod/generated/74be23a865af491faa8efa12c1ec4109.jpg",
      studioName: "Darkroom Atelier 04"
    }, relations: [] },
] as const;

const photographyWorkRecords = [
  { entityKey: "PhotographyWork:pw-monolith-silence", data: {
      id: "d0355cad-992f-4f6c-a6f5-c642097602dd",
      aspectRatio: AspectOrientation.PORTRAIT,
      createdAt: new Date("2026-08-16T10:00:00.000Z"),
      edition: "Ed. 1/15 · 35mm Gelatin",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/eb62b00fa833427bb33385a214f8bf98.jpg",
      isArchived: false,
      isFeatured: true,
      location: "Gallaratese, Milan",
      medium: "Silver Gelatin Fiber Print",
      seriesName: "Brutalist Echoes & Formwork",
      sortOrder: 1,
      statement: "Study on concrete planar intersection under oblique equinox sunlight. Crafted through multi-grade gelatin darkroom balance.",
      title: "Monolith of Silence I",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-arch", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_brutalist", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-pavilion-waters", data: {
      id: "5d814156-cea1-4bbc-a3d6-127c7708d07c",
      aspectRatio: AspectOrientation.LANDSCAPE,
      createdAt: new Date("2026-08-21T11:00:00.000Z"),
      edition: "Ed. 3/10 · 4x5 Large Format",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/54438372dbb649de8c6a1dcf36d6b1a8.jpg",
      isArchived: false,
      isFeatured: true,
      location: "Kanazawa, Japan",
      medium: "Archival Pigment on Kozo Paper",
      seriesName: "Sanctuary of Geometry",
      sortOrder: 2,
      statement: "Horizontal balance between cedar woodwork and twilight water reflection, capturing the negative space of courtyard silence.",
      title: "Pavilion on Still Waters",
      year: 2023
    }, relations: [{"target_entity_key": "PhotoCategory:cat-arch", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_sanctuary", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-sculptor-work", data: {
      id: "8f3ad106-f81c-4b80-acaa-5ae26714303f",
      aspectRatio: AspectOrientation.PORTRAIT,
      createdAt: new Date("2026-09-03T09:15:00.000Z"),
      edition: "Ed. 2/8 · 8x10 Deardorff",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/8d56d594bfbb4d5f926ea36d06a7ebfa.jpg",
      isArchived: false,
      isFeatured: true,
      location: "Carrara, Italy",
      medium: "Platinum Palladium Contact Print",
      seriesName: "Sculptural Monochrome",
      sortOrder: 3,
      statement: "Subtle daylight falling over artisan hands and uncarved Statuario marble, honoring tactile heritage across stone and fiber.",
      title: "The Sculptor at Work",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-port", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_monochrome", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-chiaroscuro-linen", data: {
      id: "d056536e-77f1-47ad-a620-86620cac3922",
      aspectRatio: AspectOrientation.LANDSCAPE,
      createdAt: new Date("2026-08-16T15:20:00.000Z"),
      edition: "Ed. 4/12 · Medium Format",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/e3f69eaf8959410093a09c2c8d5ab555.jpg",
      isArchived: false,
      isFeatured: true,
      location: "Florence, Italy",
      medium: "Silver Gelatin Fiber Print on Baryta",
      seriesName: "Chiaroscuro & Solitude",
      sortOrder: 4,
      statement: "Natural window illumination catching textured raw linen drapery and soft carbon shadows in a Renaissance atelier.",
      title: "Chiaroscuro and Linen",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-port", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_chiaroscuro", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-eucalyptus-vessels", data: {
      id: "3bf94c59-3662-44e4-a4d2-a80f86f4c792",
      aspectRatio: AspectOrientation.PORTRAIT,
      createdAt: new Date("2026-09-19T10:30:00.000Z"),
      edition: "Ed. 1/10 · Large Format",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/b007ff31bc1b4bea8a8d4dd68c27378d.jpg",
      isArchived: false,
      isFeatured: true,
      location: "Gothenburg, Sweden",
      medium: "Warm-Tone Gelatin Silver Print",
      seriesName: "Herbarium & Glass Vials",
      sortOrder: 5,
      statement: "Sculptural dried eucalyptus branches resting inside handmade stoneware vessels, captured under quiet northern light.",
      title: "Eucalyptus and Stoneware Vessels",
      year: 2023
    }, relations: [{"target_entity_key": "PhotoCategory:cat-still-life", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_botanicals", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-brass-marble", data: {
      id: "7c827126-6a61-49ff-acf3-3ba23b301dee",
      aspectRatio: AspectOrientation.LANDSCAPE,
      createdAt: new Date("2026-08-22T14:45:00.000Z"),
      edition: "Ed. 5/15 · 4x5 Monorail",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/092152885a74484598ca0733cb2ef251.jpg",
      isArchived: false,
      isFeatured: false,
      location: "Basel, Switzerland",
      medium: "Platinum Palladium Print on Cotton Rag",
      seriesName: "Sanctuary of Geometry",
      sortOrder: 6,
      statement: "Architectonic arrangement of raw machined brass cylinders and polished marble offcuts, examining specular highlights and geometry.",
      title: "Geometry of Raw Brass & Marble",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-still-life", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_sanctuary", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-weaver-indigo", data: {
      id: "38fde70b-ed3d-4c62-a3c8-3eebc53887a0",
      aspectRatio: AspectOrientation.PORTRAIT,
      createdAt: new Date("2026-08-18T13:00:00.000Z"),
      edition: "Ed. 2/8 · 8x10 Contact",
      imageUrl: "{{DOMAIN}}/background/zaki_test/generated/f437de2582b944caab83819af908856d.png",
      isArchived: false,
      isFeatured: false,
      location: "Kyoto, Japan",
      medium: "Platinum Palladium Print on Gampi Washi",
      seriesName: "Chiaroscuro & Solitude",
      sortOrder: 7,
      statement: "Printed by contact on handmade Japanese washi sensitized with platinum salts. Tonality transitions softly from deep indigo shadows to luminous skin.",
      title: "Portrait of Master Weaver in Raw Indigo Linen",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-port", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_chiaroscuro", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-tokyo-rain", data: {
      id: "5fdb85ef-fdde-437b-aa72-3b177034cef7",
      aspectRatio: AspectOrientation.LANDSCAPE,
      createdAt: new Date("2026-09-05T20:10:00.000Z"),
      edition: "Ed. 6/20 · 35mm Tri-X",
      imageUrl: "{{DOMAIN}}/background/zaki_test/generated/0ea00778837f43cf816ab63c8aebd24c.png",
      isArchived: false,
      isFeatured: false,
      location: "Shinjuku, Tokyo",
      medium: "Silver Gelatin / Ilford HP5",
      seriesName: "Sculptural Monochrome",
      sortOrder: 8,
      statement: "Pedestrians with translucent umbrellas crossing a glistening wet asphalt junction at dusk, illuminated by moody neon reflections.",
      title: "Nocturne in Wet Asphalt & Umbrellas",
      year: 2023
    }, relations: [{"target_entity_key": "PhotoCategory:cat-street", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_monochrome", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-transit-silhouette", data: {
      id: "73bf1f97-1a58-48e2-a4e5-07cd3244b5de",
      aspectRatio: AspectOrientation.PORTRAIT,
      createdAt: new Date("2026-10-08T07:30:00.000Z"),
      edition: "Ed. 3/15 · 35mm Gelatin",
      imageUrl: "{{DOMAIN}}/background/zaki_prod/generated/04d52225ff5c42d3916135bd825571f2.jpg",
      isArchived: false,
      isFeatured: false,
      location: "Berlin, Germany",
      medium: "Silver Gelatin Fiber Print",
      seriesName: "Brutalist Echoes & Formwork",
      sortOrder: 9,
      statement: "Moody silhouette of a solitary commuter waiting along an elevated industrial platform as dawn raking rays pierce through arched iron rivets.",
      title: "Solitary Commuter in Morning Mist",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-street", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_brutalist", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
  { entityKey: "PhotographyWork:pw-watch-movement", data: {
      id: "048f2432-c901-4e99-a087-13c95e482b59",
      aspectRatio: AspectOrientation.PORTRAIT,
      createdAt: new Date("2026-08-25T16:00:00.000Z"),
      edition: "Ed. 1/5 · Large Format Macro",
      imageUrl: "{{DOMAIN}}/background/zaki_test/generated/d7d4841ec99047e8a47384069cde23dd.png",
      isArchived: false,
      isFeatured: false,
      location: "Geneva, Switzerland",
      medium: "Selenium-Toned Silver Print",
      seriesName: "Sanctuary of Geometry",
      sortOrder: 10,
      statement: "Macro study of bespoke mechanical watch movement with bevelled bridges and rubies, capturing precision engineering through analog depth.",
      title: "Horological Escapement & Polished Steel",
      year: 2024
    }, relations: [{"target_entity_key": "PhotoCategory:cat-commercial", "local_fields": ["categoryId"], "target_fields": ["id"]}, {"target_entity_key": "PhotoCollection:col_sanctuary", "local_fields": ["collectionId"], "target_fields": ["id"]}] },
] as const;

const commissionInquiryRecords = [
  { entityKey: "CommissionInquiry:commission_inquiry_zumthor_pavilion", data: {
      id: "e7fbb0fa-d72e-4565-aff3-a12602b015cc",
      budgetTier: "$10,000 – $15,000",
      clientEmail: "e.castiglione@vance-holdings.ch",
      clientMessage: "Please note access to the upper cantilevered terrace is restricted between 06:00 and 08:30 due to morning temperature shifts. Key curator passes have been deposited at the Zurich secretariat.",
      clientName: "Eleanor Vance-Castiglione",
      createdAt: new Date("2026-09-20T11:20:00.000Z"),
      curatorReply: "Honored to accept this archival study. We will be deploying the Linhof Technorama 617 medium-format alongside bespoke Ilford HP5+ emulsion batches rated for high-contrast alpine granite. Studio dates and transport manifests are locked.",
      location: "Vals, Graubünden, Switzerland",
      organization: "Castiglione Contemporary Foundation",
      projectBrief: "A comprehensive monochrome study of our private pavilion designed by Peter Zumthor in Graubünden. Focus on the raw gneiss stonework during twilight and early morning alpine mist. The folio will accompany the permanent catalog publication.",
      projectType: ProjectType.EDITORIAL,
      repliedAt: "2026-09-24T16:30:00.000Z",
      status: InquiryStatus.REPLIED,
      targetTimeline: "Autumn Equinox (October 2026)"
    }, relations: [{"target_entity_key": "AccountUser:user_client_eleanor", "local_fields": ["clientId"], "target_fields": ["id"]}, {"target_entity_key": "ServicePackage:service_package_arch_monograph", "local_fields": ["servicePackageId"], "target_fields": ["id"]}, {"target_entity_key": "AccountUser:user_curator_admin", "local_fields": ["repliedById"], "target_fields": ["id"]}] },
  { entityKey: "CommissionInquiry:commission_inquiry_library_portrait", data: {
      id: "d842ddd3-42a1-4cab-a0b6-65aa30f2af6f",
      budgetTier: "$5,000 – $8,000",
      clientEmail: "e.castiglione@vance-holdings.ch",
      clientMessage: "Both sitters prefer afternoon sessions. We can arrange natural daylight diffusion with antique linen drapes in the reading room.",
      clientName: "Eleanor Vance-Castiglione",
      createdAt: new Date("2026-10-05T09:15:00.000Z"),
      curatorReply: null,
      location: "Kaufleuten Salon, Zurich, Switzerland",
      organization: "Castiglione Contemporary Foundation",
      projectBrief: "Double seated portraiture study of the foundation's honorary trustees in their historic library salon. Natural northern light exposure on 4x5 large format sheet film.",
      projectType: ProjectType.PORTRAIT,
      repliedAt: null,
      status: InquiryStatus.IN_REVIEW,
      targetTimeline: "Late Autumn (November 2026)"
    }, relations: [{"target_entity_key": "AccountUser:user_client_eleanor", "local_fields": ["clientId"], "target_fields": ["id"]}, {"target_entity_key": "ServicePackage:service_package_editorial_portraiture", "local_fields": ["servicePackageId"], "target_fields": ["id"]}] },
  { entityKey: "CommissionInquiry:commission_inquiry_mist_acquisition", data: {
      id: "e683f2a6-9bf2-42d4-acb6-51e9e553383a",
      budgetTier: "$20,000+",
      clientEmail: "e.castiglione@vance-holdings.ch",
      clientMessage: "We require verification of archival negative preservation stamps prior to print batch sign-off and framing inspection.",
      clientName: "Eleanor Vance-Castiglione",
      createdAt: new Date("2026-10-22T15:45:00.000Z"),
      curatorReply: null,
      location: "Studio Archive Vault, Milan & Kyoto",
      organization: "Castiglione Contemporary Foundation",
      projectBrief: "Bespoke direct acquisition commission: 3 unique 20×24 inch selenium-toned gelatin silver prints from the unpublished 'Kyoto Night Mist' negative register (1998 negatives). Custom walnut box framing with museum glass requested.",
      projectType: ProjectType.ACQUISITION,
      repliedAt: null,
      status: InquiryStatus.NEW,
      targetTimeline: "Immediate / Private Collection Acquisition"
    }, relations: [{"target_entity_key": "AccountUser:user_client_eleanor", "local_fields": ["clientId"], "target_fields": ["id"]}, {"target_entity_key": "ServicePackage:service_package_print_acquisition", "local_fields": ["servicePackageId"], "target_fields": ["id"]}] },
  { entityKey: "CommissionInquiry:commission_inquiry_rammed_earth_pavilion", data: {
      id: "69bfcc14-4671-470b-aa62-343e644570ec",
      budgetTier: "£14,000 – £20,000",
      clientEmail: "m.sterling@sterling-architects.co.uk",
      clientMessage: "Seeking medium-format analog captures across 4 dawn-to-dusk light cycles. Archival silver gelatin exhibition prints required for our Zurich monograph debut and client reception gallery.",
      clientName: "Marcus Sterling",
      createdAt: new Date("2026-10-10T14:30:00.000Z"),
      curatorReply: "Project brief reviewed and approved for pre-production. Our studio darkroom is scheduling test exposure plates for the earth wall textures early next month.",
      location: "Gloucestershire, United Kingdom",
      organization: "Sterling & Partners Architecture",
      projectBrief: "Architectural monograph documenting light passage through raw rammed-earth pavilion in Cotswolds, exploring tactile masonry and raking morning sun.",
      projectType: ProjectType.COMMERCIAL,
      repliedAt: "2026-10-14T10:15:00.000Z",
      status: InquiryStatus.REPLIED,
      targetTimeline: "Early December 2026"
    }, relations: [{"target_entity_key": "AccountUser:user_client_marcus", "local_fields": ["clientId"], "target_fields": ["id"]}, {"target_entity_key": "ServicePackage:service_package_commercial_campaign", "local_fields": ["servicePackageId"], "target_fields": ["id"]}, {"target_entity_key": "AccountUser:user_curator_admin", "local_fields": ["repliedById"], "target_fields": ["id"]}] },
  { entityKey: "CommissionInquiry:commission_inquiry_civic_headquarters", data: {
      id: "be386f90-416b-4a67-a0ae-242f0e1cb0d9",
      budgetTier: "$12,000 – $18,000",
      clientEmail: "m.sterling@sterling-architects.co.uk",
      clientMessage: "We aim to capture the structural rhythm of the central atrium before tenant occupancy begins in mid-winter.",
      clientName: "Marcus Sterling",
      createdAt: new Date("2026-10-25T08:45:00.000Z"),
      curatorReply: null,
      location: "London, United Kingdom",
      organization: "Sterling & Partners Architecture",
      projectBrief: "Monographic photo essay on a newly completed timber-concrete civic atrium in East London, focusing on geometry, daylight diffusion, and sustainable mass timber framing.",
      projectType: ProjectType.EDITORIAL,
      repliedAt: null,
      status: InquiryStatus.NEW,
      targetTimeline: "Mid January 2027"
    }, relations: [{"target_entity_key": "AccountUser:user_client_marcus", "local_fields": ["clientId"], "target_fields": ["id"]}, {"target_entity_key": "ServicePackage:service_package_arch_monograph", "local_fields": ["servicePackageId"], "target_fields": ["id"]}] },
] as const;

function requireEntity(entities: Map<string, SeedEntity>, entityKey: string): SeedEntity {
  const entity = entities.get(entityKey);
  if (!entity) throw new Error(`seed relation target was not created: ${entityKey}`);
  return entity;
}

async function main() {
  await prisma.$transaction(async (tx) => {
    const entities = new Map<string, SeedEntity>();
    await tx.clientTestimonial.updateMany({ data: { clientId: null } });
    await tx.photographyWork.updateMany({ data: { collectionId: null } });
    await tx.commissionInquiry.updateMany({ data: { repliedById: null, servicePackageId: null } });

    await tx.commissionInquiry.deleteMany({});
    await tx.photographyWork.deleteMany({});
    await tx.studioBio.deleteMany({});
    await tx.clientTestimonial.deleteMany({});
    await tx.exhibitionRecord.deleteMany({});
    await tx.servicePackage.deleteMany({});
    await tx.photoCollection.deleteMany({});
    await tx.photoCategory.deleteMany({});
    await tx.accountUser.deleteMany({});

    for (const record of accountUserRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.accountUser.create({ data: data as unknown as Prisma.AccountUserUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of photoCategoryRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.photoCategory.create({ data: data as unknown as Prisma.PhotoCategoryUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of photoCollectionRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.photoCollection.create({ data: data as unknown as Prisma.PhotoCollectionUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of servicePackageRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.servicePackage.create({ data: data as unknown as Prisma.ServicePackageUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of exhibitionRecordRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.exhibitionRecord.create({ data: data as unknown as Prisma.ExhibitionRecordUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of clientTestimonialRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.clientTestimonial.create({ data: data as unknown as Prisma.ClientTestimonialUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of studioBioRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.studioBio.create({ data: data as unknown as Prisma.StudioBioUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of photographyWorkRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.photographyWork.create({ data: data as unknown as Prisma.PhotographyWorkUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
    for (const record of commissionInquiryRecords) {
      const data: Record<string, unknown> = { ...record.data };
      for (const relation of record.relations as readonly RelationBinding[]) {
        const target = requireEntity(entities, relation.target_entity_key);
        relation.local_fields.forEach((field, index) => { data[field] = target[relation.target_fields[index]]; });
      }
      const created = await tx.commissionInquiry.create({ data: data as unknown as Prisma.CommissionInquiryUncheckedCreateInput });
      entities.set(record.entityKey, created as unknown as SeedEntity);
    }
  }, { maxWait: 30_000, timeout: 300_000 });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
