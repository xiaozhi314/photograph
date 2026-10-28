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

// src/frontend/actions/WorksPortfolio.ts
var WorksPortfolio_exports = {};
__export(WorksPortfolio_exports, {
  getPortfolioData: () => getPortfolioData
});
module.exports = __toCommonJS(WorksPortfolio_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getPortfolioData() {
  return (0, import_action_utils.withResult)(async () => {
    const categoriesDb = await import_prisma.default.photoCategory.findMany({
      orderBy: {
        sortOrder: "asc"
      },
      include: {
        _count: {
          select: {
            works: {
              where: {
                isArchived: false
              }
            }
          }
        }
      }
    });
    const worksDb = await import_prisma.default.photographyWork.findMany({
      where: {
        isArchived: false
      },
      orderBy: {
        sortOrder: "asc"
      },
      include: {
        category: {
          select: {
            id: true,
            slug: true,
            name: true
          }
        },
        collection: {
          select: {
            id: true,
            title: true,
            rollNumber: true,
            medium: true,
            curatorNote: true,
            aspect: true,
            aspectRatioClass: true,
            coverImage: true,
            imageCount: true
          }
        }
      }
    });
    const categories = categoriesDb.map((cat) => ({
      id: cat.id,
      slug: cat.slug,
      name: cat.name,
      description: cat.description,
      sortOrder: cat.sortOrder,
      worksCount: cat._count.works
    }));
    const works = worksDb.map((work) => {
      let collectionRef = null;
      if (work.collection) {
        collectionRef = {
          id: work.collection.id,
          title: work.collection.title,
          rollNumber: work.collection.rollNumber,
          medium: work.collection.medium,
          curatorNote: work.collection.curatorNote,
          aspect: work.collection.aspect,
          aspectRatioClass: work.collection.aspectRatioClass,
          coverImage: work.collection.coverImage,
          imageCount: work.collection.imageCount
        };
      }
      return {
        id: work.id,
        title: work.title,
        categoryId: work.categoryId,
        categorySlug: work.category.slug,
        categoryName: work.category.name,
        collectionId: work.collectionId,
        collection: collectionRef,
        seriesName: work.seriesName,
        location: work.location,
        year: work.year,
        medium: work.medium,
        edition: work.edition,
        aspectRatio: work.aspectRatio,
        statement: work.statement,
        imageUrl: work.imageUrl,
        isFeatured: work.isFeatured,
        isArchived: work.isArchived,
        sortOrder: work.sortOrder
      };
    });
    return {
      categories,
      works,
      totalWorks: works.length
    };
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPortfolioData
});
