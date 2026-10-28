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

// common-redirect:@/@base/BaseActionFun
var require_BaseActionFun = __commonJS({
  "common-redirect:@/@base/BaseActionFun"(exports2, module2) {
    module2.exports = require("./_common").BaseActionFun;
  }
});

// src/frontend/actions/ServicesTestimonials.ts
var ServicesTestimonials_exports = {};
__export(ServicesTestimonials_exports, {
  getActiveServicePackages: () => getActiveServicePackages,
  getClientTestimonials: () => getClientTestimonials,
  getServicesTestimonialsPageData: () => getServicesTestimonialsPageData
});
module.exports = __toCommonJS(ServicesTestimonials_exports);
var import_prisma = __toESM(require_prisma());
var import_BaseActionFun = __toESM(require_BaseActionFun());
async function getActiveServicePackages() {
  return (0, import_BaseActionFun.withResult)(async () => {
    const packages = await import_prisma.default.servicePackage.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        sortOrder: "asc"
      }
    });
    return packages.map((pkg) => {
      let deliverablesArray = [];
      if (Array.isArray(pkg.deliverables)) {
        deliverablesArray = pkg.deliverables.map(String);
      } else if (typeof pkg.deliverables === "string") {
        try {
          const parsed = JSON.parse(pkg.deliverables);
          deliverablesArray = Array.isArray(parsed) ? parsed.map(String) : [String(pkg.deliverables)];
        } catch {
          deliverablesArray = [pkg.deliverables];
        }
      }
      return {
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
        deliverables: deliverablesArray,
        // data-from: ServicePackage-deliverables
        isActive: pkg.isActive,
        // data-from: ServicePackage-isActive
        sortOrder: pkg.sortOrder,
        // data-from: ServicePackage-sortOrder
        createdAt: pkg.createdAt,
        // data-from: ServicePackage-createdAt
        updatedAt: pkg.updatedAt
        // data-from: ServicePackage-updatedAt
      };
    });
  })();
}
async function getClientTestimonials() {
  return (0, import_BaseActionFun.withResult)(async () => {
    const records = await import_prisma.default.clientTestimonial.findMany({
      orderBy: [
        { isFeatured: "desc" },
        { sortOrder: "asc" }
      ]
    });
    return records.map((t) => ({
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
  })();
}
async function getServicesTestimonialsPageData() {
  return (0, import_BaseActionFun.withResult)(async () => {
    const [packages, testimonials] = await Promise.all([
      getActiveServicePackages(),
      getClientTestimonials()
    ]);
    return {
      packages,
      testimonials
    };
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getActiveServicePackages,
  getClientTestimonials,
  getServicesTestimonialsPageData
});
