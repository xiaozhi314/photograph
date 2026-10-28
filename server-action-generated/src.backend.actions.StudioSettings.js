"use server";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// common-redirect:@/tools/prisma
var require_prisma = __commonJS({
  "common-redirect:@/tools/prisma"(exports2, module2) {
    var prisma2 = require("./_common").prisma;
    module2.exports = {
      __esModule: true,
      default: prisma2,
      prisma: prisma2
    };
  }
});

// common-redirect:@/backend/action_utils
var require_action_utils = __commonJS({
  "common-redirect:@/backend/action_utils"(exports2, module2) {
    module2.exports = require("./_common").backendAuth;
  }
});

// src/backend/actions/StudioSettings.ts
var StudioSettings_exports = {};
__export(StudioSettings_exports, {
  deleteClientTestimonial: () => deleteClientTestimonial,
  deleteExhibitionRecord: () => deleteExhibitionRecord,
  deleteServicePackage: () => deleteServicePackage,
  getStudioSettingsData: () => getStudioSettingsData,
  toggleServicePackageActive: () => toggleServicePackageActive,
  toggleTestimonialFeatured: () => toggleTestimonialFeatured,
  updateStudioBio: () => updateStudioBio,
  upsertClientTestimonial: () => upsertClientTestimonial,
  upsertExhibitionRecord: () => upsertExhibitionRecord,
  upsertServicePackage: () => upsertServicePackage
});
module.exports = __toCommonJS(StudioSettings_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getStudioSettingsData() {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      let bioRecord = await import_prisma.default.studioBio.findFirst();
      if (!bioRecord) {
        bioRecord = await import_prisma.default.studioBio.create({
          data: {
            artistName: "Julian Vane",
            studioName: "Darkroom Atelier 04",
            atelierLocation: "Milan \xB7 Tokyo",
            activeRepresentation: "Galleria d'Arte Moderna (Milan) \xB7 Taka Ishii Gallery Representative",
            philosophyQuote: "Light is not merely illumination; it is a physical sculpt of medium format geometry that honors analog silver halide emulsion.",
            bioStatement: "Julian Vane (b. 1981) operates Darkroom Atelier 04, a dedicated analog laboratory and archive focusing on silver gelatin chemistry and architectural monographs. Spanning two decades of continuous medium and large-format field research across metropolitan Europe and Japan, his monographs dissect the interplay of raw concrete, cast light, and atmospheric decay. All exhibition prints are executed by hand in limited, stamped suites.",
            portraitImage: null
          }
        });
      }
      const studioBio = {
        id: bioRecord.id,
        // data-from: StudioBio-id
        artistName: bioRecord.artistName,
        // data-from: StudioBio-artistName
        studioName: bioRecord.studioName,
        // data-from: StudioBio-studioName
        philosophyQuote: bioRecord.philosophyQuote,
        // data-from: StudioBio-philosophyQuote
        bioStatement: bioRecord.bioStatement,
        // data-from: StudioBio-bioStatement
        portraitImage: bioRecord.portraitImage,
        // data-from: StudioBio-portraitImage data-role: image_url
        atelierLocation: bioRecord.atelierLocation,
        // data-from: StudioBio-atelierLocation
        activeRepresentation: bioRecord.activeRepresentation,
        // data-from: StudioBio-activeRepresentation
        createdAt: bioRecord.createdAt,
        // data-from: StudioBio-createdAt
        updatedAt: bioRecord.updatedAt
        // data-from: StudioBio-updatedAt
      };
      const packageRecords = await import_prisma.default.servicePackage.findMany({
        orderBy: { sortOrder: "asc" }
      });
      const packages = packageRecords.map((pkg) => ({
        id: pkg.id,
        // data-from: ServicePackage-id
        title: pkg.title,
        // data-from: ServicePackage-title
        serviceType: pkg.serviceType,
        // data-from: ServicePackage-serviceType
        basePrice: pkg.basePrice.toNumber(),
        // data-from: ServicePackage-basePrice
        priceDisplay: pkg.priceDisplay,
        // data-from: ServicePackage-priceDisplay
        durationEstimate: pkg.durationEstimate,
        // data-from: ServicePackage-durationEstimate
        deliverables: Array.isArray(pkg.deliverables) ? pkg.deliverables : [],
        // data-from: ServicePackage-deliverables
        isActive: pkg.isActive,
        // data-from: ServicePackage-isActive
        sortOrder: pkg.sortOrder,
        // data-from: ServicePackage-sortOrder
        createdAt: pkg.createdAt,
        // data-from: ServicePackage-createdAt
        updatedAt: pkg.updatedAt
        // data-from: ServicePackage-updatedAt
      }));
      const exhibitionRecords = await import_prisma.default.exhibitionRecord.findMany({
        orderBy: [{ year: "desc" }, { sortOrder: "asc" }]
      });
      const exhibitions = exhibitionRecords.map((ex) => ({
        id: ex.id,
        // data-from: ExhibitionRecord-id
        title: ex.title,
        // data-from: ExhibitionRecord-title
        institution: ex.institution,
        // data-from: ExhibitionRecord-institution
        city: ex.city,
        // data-from: ExhibitionRecord-city
        year: ex.year,
        // data-from: ExhibitionRecord-year
        exhibitionType: ex.exhibitionType,
        // data-from: ExhibitionRecord-exhibitionType
        pressMention: ex.pressMention,
        // data-from: ExhibitionRecord-pressMention
        externalUrl: ex.externalUrl,
        // data-from: ExhibitionRecord-externalUrl
        sortOrder: ex.sortOrder,
        // data-from: ExhibitionRecord-sortOrder
        createdAt: ex.createdAt,
        // data-from: ExhibitionRecord-createdAt
        updatedAt: ex.updatedAt
        // data-from: ExhibitionRecord-updatedAt
      }));
      const testimonialRecords = await import_prisma.default.clientTestimonial.findMany({
        orderBy: { sortOrder: "asc" }
      });
      const testimonials = testimonialRecords.map((t) => ({
        id: t.id,
        // data-from: ClientTestimonial-id
        clientId: t.clientId,
        // data-from: ClientTestimonial-clientId
        clientName: t.clientName,
        // data-from: ClientTestimonial-clientName
        clientTitle: t.clientTitle,
        // data-from: ClientTestimonial-clientTitle
        organization: t.organization,
        // data-from: ClientTestimonial-organization
        quote: t.quote,
        // data-from: ClientTestimonial-quote
        serviceType: t.serviceType,
        // data-from: ClientTestimonial-serviceType
        rating: t.rating,
        // data-from: ClientTestimonial-rating
        avatarImage: t.avatarImage,
        // data-from: ClientTestimonial-avatarImage data-role: image_url
        isFeatured: t.isFeatured,
        // data-from: ClientTestimonial-isFeatured
        sortOrder: t.sortOrder,
        // data-from: ClientTestimonial-sortOrder
        createdAt: t.createdAt,
        // data-from: ClientTestimonial-createdAt
        updatedAt: t.updatedAt
        // data-from: ClientTestimonial-updatedAt
      }));
      const activePackagesCount = packages.filter((p) => p.isActive).length;
      const totalExhibitionsCount = exhibitions.length;
      const curatedTestimonialsCount = testimonials.length;
      const featuredTestimonialsCount = testimonials.filter((t) => t.isFeatured).length;
      const archiveTimestamp = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 19) + " UTC";
      return {
        studioBio,
        packages,
        exhibitions,
        testimonials,
        stats: {
          activePackagesCount,
          totalExhibitionsCount,
          curatedTestimonialsCount,
          featuredTestimonialsCount,
          archiveTimestamp
        }
      };
    })();
  })();
}
async function updateStudioBio(input) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      let existing = await import_prisma.default.studioBio.findFirst();
      let updated;
      if (existing) {
        updated = await import_prisma.default.studioBio.update({
          where: { id: existing.id },
          data: {
            artistName: input.artistName,
            studioName: input.studioName,
            philosophyQuote: input.philosophyQuote,
            bioStatement: input.bioStatement,
            portraitImage: input.portraitImage !== void 0 ? input.portraitImage : existing.portraitImage,
            atelierLocation: input.atelierLocation,
            activeRepresentation: input.activeRepresentation
          }
        });
      } else {
        updated = await import_prisma.default.studioBio.create({
          data: {
            artistName: input.artistName,
            studioName: input.studioName,
            philosophyQuote: input.philosophyQuote,
            bioStatement: input.bioStatement,
            portraitImage: input.portraitImage || null,
            atelierLocation: input.atelierLocation,
            activeRepresentation: input.activeRepresentation
          }
        });
      }
      return {
        id: updated.id,
        // data-from: StudioBio-id
        artistName: updated.artistName,
        // data-from: StudioBio-artistName
        studioName: updated.studioName,
        // data-from: StudioBio-studioName
        philosophyQuote: updated.philosophyQuote,
        // data-from: StudioBio-philosophyQuote
        bioStatement: updated.bioStatement,
        // data-from: StudioBio-bioStatement
        portraitImage: updated.portraitImage,
        // data-from: StudioBio-portraitImage data-role: image_url
        atelierLocation: updated.atelierLocation,
        // data-from: StudioBio-atelierLocation
        activeRepresentation: updated.activeRepresentation,
        // data-from: StudioBio-activeRepresentation
        createdAt: updated.createdAt,
        // data-from: StudioBio-createdAt
        updatedAt: updated.updatedAt
        // data-from: StudioBio-updatedAt
      };
    })();
  })();
}
async function upsertServicePackage(input) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      let result;
      if (input.id) {
        result = await import_prisma.default.servicePackage.update({
          where: { id: input.id },
          data: {
            title: input.title,
            serviceType: input.serviceType,
            basePrice: input.basePrice,
            priceDisplay: input.priceDisplay,
            durationEstimate: input.durationEstimate,
            deliverables: input.deliverables,
            isActive: input.isActive,
            sortOrder: input.sortOrder
          }
        });
      } else {
        result = await import_prisma.default.servicePackage.create({
          data: {
            title: input.title,
            serviceType: input.serviceType,
            basePrice: input.basePrice,
            priceDisplay: input.priceDisplay,
            durationEstimate: input.durationEstimate,
            deliverables: input.deliverables,
            isActive: input.isActive,
            sortOrder: input.sortOrder
          }
        });
      }
      return {
        id: result.id,
        // data-from: ServicePackage-id
        title: result.title,
        // data-from: ServicePackage-title
        serviceType: result.serviceType,
        // data-from: ServicePackage-serviceType
        basePrice: result.basePrice.toNumber(),
        // data-from: ServicePackage-basePrice
        priceDisplay: result.priceDisplay,
        // data-from: ServicePackage-priceDisplay
        durationEstimate: result.durationEstimate,
        // data-from: ServicePackage-durationEstimate
        deliverables: Array.isArray(result.deliverables) ? result.deliverables : [],
        // data-from: ServicePackage-deliverables
        isActive: result.isActive,
        // data-from: ServicePackage-isActive
        sortOrder: result.sortOrder,
        // data-from: ServicePackage-sortOrder
        createdAt: result.createdAt,
        // data-from: ServicePackage-createdAt
        updatedAt: result.updatedAt
        // data-from: ServicePackage-updatedAt
      };
    })();
  })();
}
async function toggleServicePackageActive(id) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      const existing = await import_prisma.default.servicePackage.findUniqueOrThrow({
        where: { id }
      });
      const result = await import_prisma.default.servicePackage.update({
        where: { id },
        data: {
          isActive: !existing.isActive
        }
      });
      return {
        id: result.id,
        // data-from: ServicePackage-id
        title: result.title,
        // data-from: ServicePackage-title
        serviceType: result.serviceType,
        // data-from: ServicePackage-serviceType
        basePrice: result.basePrice.toNumber(),
        // data-from: ServicePackage-basePrice
        priceDisplay: result.priceDisplay,
        // data-from: ServicePackage-priceDisplay
        durationEstimate: result.durationEstimate,
        // data-from: ServicePackage-durationEstimate
        deliverables: Array.isArray(result.deliverables) ? result.deliverables : [],
        // data-from: ServicePackage-deliverables
        isActive: result.isActive,
        // data-from: ServicePackage-isActive
        sortOrder: result.sortOrder,
        // data-from: ServicePackage-sortOrder
        createdAt: result.createdAt,
        // data-from: ServicePackage-createdAt
        updatedAt: result.updatedAt
        // data-from: ServicePackage-updatedAt
      };
    })();
  })();
}
async function deleteServicePackage(id) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      await import_prisma.default.servicePackage.delete({
        where: { id }
      });
      return { id };
    })();
  })();
}
async function upsertExhibitionRecord(input) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      let result;
      if (input.id) {
        result = await import_prisma.default.exhibitionRecord.update({
          where: { id: input.id },
          data: {
            title: input.title,
            institution: input.institution,
            city: input.city,
            year: input.year,
            exhibitionType: input.exhibitionType,
            pressMention: input.pressMention,
            externalUrl: input.externalUrl || null,
            sortOrder: input.sortOrder
          }
        });
      } else {
        result = await import_prisma.default.exhibitionRecord.create({
          data: {
            title: input.title,
            institution: input.institution,
            city: input.city,
            year: input.year,
            exhibitionType: input.exhibitionType,
            pressMention: input.pressMention,
            externalUrl: input.externalUrl || null,
            sortOrder: input.sortOrder
          }
        });
      }
      return {
        id: result.id,
        // data-from: ExhibitionRecord-id
        title: result.title,
        // data-from: ExhibitionRecord-title
        institution: result.institution,
        // data-from: ExhibitionRecord-institution
        city: result.city,
        // data-from: ExhibitionRecord-city
        year: result.year,
        // data-from: ExhibitionRecord-year
        exhibitionType: result.exhibitionType,
        // data-from: ExhibitionRecord-exhibitionType
        pressMention: result.pressMention,
        // data-from: ExhibitionRecord-pressMention
        externalUrl: result.externalUrl,
        // data-from: ExhibitionRecord-externalUrl
        sortOrder: result.sortOrder,
        // data-from: ExhibitionRecord-sortOrder
        createdAt: result.createdAt,
        // data-from: ExhibitionRecord-createdAt
        updatedAt: result.updatedAt
        // data-from: ExhibitionRecord-updatedAt
      };
    })();
  })();
}
async function deleteExhibitionRecord(id) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      await import_prisma.default.exhibitionRecord.delete({
        where: { id }
      });
      return { id };
    })();
  })();
}
async function upsertClientTestimonial(input) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      let result;
      if (input.id) {
        result = await import_prisma.default.clientTestimonial.update({
          where: { id: input.id },
          data: {
            clientName: input.clientName,
            clientTitle: input.clientTitle,
            organization: input.organization,
            quote: input.quote,
            serviceType: input.serviceType,
            rating: input.rating,
            avatarImage: input.avatarImage || null,
            isFeatured: input.isFeatured,
            sortOrder: input.sortOrder
          }
        });
      } else {
        result = await import_prisma.default.clientTestimonial.create({
          data: {
            clientName: input.clientName,
            clientTitle: input.clientTitle,
            organization: input.organization,
            quote: input.quote,
            serviceType: input.serviceType,
            rating: input.rating,
            avatarImage: input.avatarImage || null,
            isFeatured: input.isFeatured,
            sortOrder: input.sortOrder
          }
        });
      }
      return {
        id: result.id,
        // data-from: ClientTestimonial-id
        clientId: result.clientId,
        // data-from: ClientTestimonial-clientId
        clientName: result.clientName,
        // data-from: ClientTestimonial-clientName
        clientTitle: result.clientTitle,
        // data-from: ClientTestimonial-clientTitle
        organization: result.organization,
        // data-from: ClientTestimonial-organization
        quote: result.quote,
        // data-from: ClientTestimonial-quote
        serviceType: result.serviceType,
        // data-from: ClientTestimonial-serviceType
        rating: result.rating,
        // data-from: ClientTestimonial-rating
        avatarImage: result.avatarImage,
        // data-from: ClientTestimonial-avatarImage data-role: image_url
        isFeatured: result.isFeatured,
        // data-from: ClientTestimonial-isFeatured
        sortOrder: result.sortOrder,
        // data-from: ClientTestimonial-sortOrder
        createdAt: result.createdAt,
        // data-from: ClientTestimonial-createdAt
        updatedAt: result.updatedAt
        // data-from: ClientTestimonial-updatedAt
      };
    })();
  })();
}
async function toggleTestimonialFeatured(id) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      const existing = await import_prisma.default.clientTestimonial.findUniqueOrThrow({
        where: { id }
      });
      const result = await import_prisma.default.clientTestimonial.update({
        where: { id },
        data: {
          isFeatured: !existing.isFeatured
        }
      });
      return {
        id: result.id,
        // data-from: ClientTestimonial-id
        clientId: result.clientId,
        // data-from: ClientTestimonial-clientId
        clientName: result.clientName,
        // data-from: ClientTestimonial-clientName
        clientTitle: result.clientTitle,
        // data-from: ClientTestimonial-clientTitle
        organization: result.organization,
        // data-from: ClientTestimonial-organization
        quote: result.quote,
        // data-from: ClientTestimonial-quote
        serviceType: result.serviceType,
        // data-from: ClientTestimonial-serviceType
        rating: result.rating,
        // data-from: ClientTestimonial-rating
        avatarImage: result.avatarImage,
        // data-from: ClientTestimonial-avatarImage data-role: image_url
        isFeatured: result.isFeatured,
        // data-from: ClientTestimonial-isFeatured
        sortOrder: result.sortOrder,
        // data-from: ClientTestimonial-sortOrder
        createdAt: result.createdAt,
        // data-from: ClientTestimonial-createdAt
        updatedAt: result.updatedAt
        // data-from: ClientTestimonial-updatedAt
      };
    })();
  })();
}
async function deleteClientTestimonial(id) {
  return (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
    return (0, import_action_utils.withResult)(async () => {
      await import_prisma.default.clientTestimonial.delete({
        where: { id }
      });
      return { id };
    })();
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteClientTestimonial,
  deleteExhibitionRecord,
  deleteServicePackage,
  getStudioSettingsData,
  toggleServicePackageActive,
  toggleTestimonialFeatured,
  updateStudioBio,
  upsertClientTestimonial,
  upsertExhibitionRecord,
  upsertServicePackage
});
