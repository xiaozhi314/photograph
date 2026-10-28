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

// src/frontend/actions/CollectionsFolios.ts
var CollectionsFolios_exports = {};
__export(CollectionsFolios_exports, {
  getFoliosPageData: () => getFoliosPageData,
  getWorksByCollectionId: () => getWorksByCollectionId
});
module.exports = __toCommonJS(CollectionsFolios_exports);
var import_prisma = __toESM(require_prisma());
var import_BaseActionFun = __toESM(require_BaseActionFun());
async function getFoliosPageData(collectionId) {
  return (0, import_BaseActionFun.withResult)(async () => {
    const collectionsRaw = await import_prisma.default.photoCollection.findMany({
      where: {
        isVisible: true
      },
      orderBy: {
        sortOrder: "asc"
      }
    });
    const collections = collectionsRaw.map((c) => ({
      id: c.id,
      title: c.title,
      rollNumber: c.rollNumber,
      medium: c.medium,
      curatorNote: c.curatorNote,
      aspect: c.aspect,
      aspectRatioClass: c.aspectRatioClass,
      coverImage: c.coverImage,
      imageCount: c.imageCount,
      isVisible: c.isVisible,
      featuredOnHome: c.featuredOnHome,
      sortOrder: c.sortOrder,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt
    }));
    let activeCollection = null;
    if (collectionId) {
      activeCollection = collections.find((c) => c.id === collectionId) || null;
    }
    if (!activeCollection && collections.length > 0) {
      activeCollection = collections[0];
    }
    let works = [];
    if (activeCollection) {
      const worksRaw = await import_prisma.default.photographyWork.findMany({
        where: {
          collectionId: activeCollection.id,
          isArchived: false
        },
        orderBy: {
          sortOrder: "asc"
        }
      });
      works = worksRaw.map((w) => ({
        id: w.id,
        title: w.title,
        categoryId: w.categoryId,
        collectionId: w.collectionId,
        seriesName: w.seriesName,
        location: w.location,
        year: w.year,
        medium: w.medium,
        edition: w.edition,
        aspectRatio: w.aspectRatio,
        statement: w.statement,
        imageUrl: w.imageUrl,
        isFeatured: w.isFeatured,
        isArchived: w.isArchived,
        sortOrder: w.sortOrder,
        createdAt: w.createdAt,
        updatedAt: w.updatedAt
      }));
    }
    return {
      collections,
      activeCollection,
      works
    };
  })();
}
async function getWorksByCollectionId(collectionId) {
  return (0, import_BaseActionFun.withResult)(async () => {
    const worksRaw = await import_prisma.default.photographyWork.findMany({
      where: {
        collectionId,
        isArchived: false
      },
      orderBy: {
        sortOrder: "asc"
      }
    });
    return worksRaw.map((w) => ({
      id: w.id,
      title: w.title,
      categoryId: w.categoryId,
      collectionId: w.collectionId,
      seriesName: w.seriesName,
      location: w.location,
      year: w.year,
      medium: w.medium,
      edition: w.edition,
      aspectRatio: w.aspectRatio,
      statement: w.statement,
      imageUrl: w.imageUrl,
      isFeatured: w.isFeatured,
      isArchived: w.isArchived,
      sortOrder: w.sortOrder,
      createdAt: w.createdAt,
      updatedAt: w.updatedAt
    }));
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFoliosPageData,
  getWorksByCollectionId
});
