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

// common-redirect:@/frontend/action_utils
var require_action_utils = __commonJS({
  "common-redirect:@/frontend/action_utils"(exports2, module2) {
    module2.exports = require("./_common").frontendAuth;
  }
});

// src/frontend/actions/FrontendHome.ts
var FrontendHome_exports = {};
__export(FrontendHome_exports, {
  getHomeInitialData: () => getHomeInitialData,
  submitCommissionInquiry: () => submitCommissionInquiry
});
module.exports = __toCommonJS(FrontendHome_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getHomeInitialData() {
  return (0, import_action_utils.withResult)(async () => {
    const [bioRecord, worksRecords, exhRecords, packageRecords, testimonialRecords] = await Promise.all([
      import_prisma.default.studioBio.findFirst(),
      import_prisma.default.photographyWork.findMany({
        where: {
          isArchived: false
        },
        include: {
          category: {
            select: {
              slug: true,
              name: true
            }
          }
        },
        orderBy: [
          { isFeatured: "desc" },
          { sortOrder: "asc" }
        ],
        take: 12
      }),
      import_prisma.default.exhibitionRecord.findMany({
        orderBy: [
          { year: "desc" },
          { sortOrder: "asc" }
        ],
        take: 10
      }),
      import_prisma.default.servicePackage.findMany({
        where: {
          isActive: true
        },
        orderBy: {
          sortOrder: "asc"
        }
      }),
      import_prisma.default.clientTestimonial.findMany({
        where: {
          isFeatured: true
        },
        orderBy: {
          sortOrder: "asc"
        },
        take: 6
      })
    ]);
    const studioBio = bioRecord ? {
      id: bioRecord.id,
      artistName: bioRecord.artistName,
      studioName: bioRecord.studioName,
      philosophyQuote: bioRecord.philosophyQuote,
      bioStatement: bioRecord.bioStatement,
      portraitImage: bioRecord.portraitImage,
      atelierLocation: bioRecord.atelierLocation,
      activeRepresentation: bioRecord.activeRepresentation
    } : null;
    const curatedWorks = worksRecords.map((w) => ({
      id: w.id,
      title: w.title,
      categoryId: w.categoryId,
      categorySlug: w.category.slug,
      categoryName: w.category.name,
      category: w.category.slug || "architecture",
      collectionId: w.collectionId,
      series: w.seriesName,
      seriesName: w.seriesName,
      location: w.location,
      year: w.year,
      medium: w.medium,
      edition: w.edition,
      aspectRatio: w.aspectRatio,
      statement: w.statement,
      imageUrl: w.imageUrl,
      isFeatured: w.isFeatured,
      sortOrder: w.sortOrder
    }));
    const exhibitions = exhRecords.map((e) => ({
      id: e.id,
      year: e.year,
      title: e.title,
      institution: e.institution,
      city: e.city,
      exhibitionType: e.exhibitionType,
      type: e.exhibitionType === "SOLO_EXHIBITION" ? "Solo Exhibition" : e.exhibitionType,
      pressMention: e.pressMention,
      externalUrl: e.externalUrl,
      sortOrder: e.sortOrder
    }));
    const servicePackages = packageRecords.map((p) => {
      let deliverablesList = [];
      if (Array.isArray(p.deliverables)) {
        deliverablesList = p.deliverables.map((item) => String(item));
      }
      return {
        id: p.id,
        title: p.title,
        serviceType: p.serviceType,
        basePrice: p.basePrice.toNumber(),
        priceDisplay: p.priceDisplay,
        durationEstimate: p.durationEstimate,
        deliverables: deliverablesList,
        sortOrder: p.sortOrder
      };
    });
    const testimonials = testimonialRecords.map((t) => ({
      id: t.id,
      clientName: t.clientName,
      clientTitle: t.clientTitle,
      organization: t.organization,
      quote: t.quote,
      serviceType: t.serviceType,
      rating: t.rating,
      avatarImage: t.avatarImage
    }));
    return {
      studioBio,
      curatedWorks,
      exhibitions,
      servicePackages,
      testimonials
    };
  })();
}
async function submitCommissionInquiry(input) {
  return (0, import_action_utils.withResult)(async () => {
    const auth = (0, import_action_utils.tryGetAuthContext)();
    let targetClientId;
    if (auth && auth.userId) {
      targetClientId = auth.userId;
    } else {
      let clientUser = await import_prisma.default.accountUser.findUnique({
        where: { email: input.clientEmail }
      });
      if (!clientUser) {
        const uniqueSuffix = Date.now().toString(36);
        clientUser = await import_prisma.default.accountUser.create({
          data: {
            username: `guest_${uniqueSuffix}`,
            email: input.clientEmail,
            passwordHash: "GUEST_UNAUTHENTICATED_INQUIRY",
            fullName: input.clientName,
            organization: input.organization || null,
            role: "CLIENT"
          }
        });
      }
      targetClientId = clientUser.id;
    }
    const createdInquiry = await import_prisma.default.commissionInquiry.create({
      data: {
        clientId: targetClientId,
        servicePackageId: input.servicePackageId || null,
        clientName: input.clientName,
        clientEmail: input.clientEmail,
        organization: input.organization || null,
        projectType: input.projectType,
        budgetTier: input.budgetTier,
        projectBrief: input.projectBrief,
        clientMessage: input.clientMessage || null,
        targetTimeline: input.targetTimeline,
        location: input.location || null,
        status: "NEW"
      }
    });
    return {
      id: createdInquiry.id,
      status: createdInquiry.status,
      clientName: createdInquiry.clientName,
      createdAt: createdInquiry.createdAt
    };
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getHomeInitialData,
  submitCommissionInquiry
});
