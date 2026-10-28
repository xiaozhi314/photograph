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

// src/backend/actions/CollectionsManager.ts
var CollectionsManager_exports = {};
__export(CollectionsManager_exports, {
  getCollectionsManagerData: () => getCollectionsManagerData,
  saveCollectionFolio: () => saveCollectionFolio,
  toggleCollectionFeatured: () => toggleCollectionFeatured,
  toggleCollectionVisibility: () => toggleCollectionVisibility
});
module.exports = __toCommonJS(CollectionsManager_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getCollectionsManagerData() {
  return (0, import_action_utils.withResult)(async () => {
    const [rawCollections, rawPlates] = await Promise.all([
      import_prisma.default.photoCollection.findMany({
        orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }]
      }),
      import_prisma.default.photographyWork.findMany({
        orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }]
      })
    ]);
    const collections = rawCollections.map((col) => ({
      id: col.id,
      // data-from: PhotoCollection-id
      title: col.title,
      // data-from: PhotoCollection-title
      rollNumber: col.rollNumber,
      // data-from: PhotoCollection-rollNumber
      medium: col.medium,
      // data-from: PhotoCollection-medium
      curatorNote: col.curatorNote,
      // data-from: PhotoCollection-curatorNote
      aspect: col.aspect,
      // data-from: PhotoCollection-aspect
      aspectRatioClass: col.aspectRatioClass,
      // data-from: PhotoCollection-aspectRatioClass
      coverImage: col.coverImage,
      // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: col.imageCount,
      // data-from: PhotoCollection-imageCount
      isVisible: col.isVisible,
      // data-from: PhotoCollection-isVisible
      featuredOnHome: col.featuredOnHome,
      // data-from: PhotoCollection-featuredOnHome
      sortOrder: col.sortOrder,
      // data-from: PhotoCollection-sortOrder
      createdAt: col.createdAt,
      // data-from: PhotoCollection-createdAt
      updatedAt: col.updatedAt
      // data-from: PhotoCollection-updatedAt
    }));
    const plates = rawPlates.map((plate) => ({
      id: plate.id,
      // data-from: PhotographyWork-id
      title: plate.title,
      // data-from: PhotographyWork-title
      categoryId: plate.categoryId,
      // data-from: PhotographyWork-categoryId
      collectionId: plate.collectionId,
      // data-from: PhotographyWork-collectionId
      seriesName: plate.seriesName,
      // data-from: PhotographyWork-seriesName
      location: plate.location,
      // data-from: PhotographyWork-location
      year: plate.year,
      // data-from: PhotographyWork-year
      medium: plate.medium,
      // data-from: PhotographyWork-medium
      edition: plate.edition,
      // data-from: PhotographyWork-edition
      aspectRatio: plate.aspectRatio,
      // data-from: PhotographyWork-aspectRatio
      statement: plate.statement,
      // data-from: PhotographyWork-statement
      imageUrl: plate.imageUrl,
      // data-from: PhotographyWork-imageUrl data-role: image_url
      isFeatured: plate.isFeatured,
      // data-from: PhotographyWork-isFeatured
      isArchived: plate.isArchived,
      // data-from: PhotographyWork-isArchived
      sortOrder: plate.sortOrder,
      // data-from: PhotographyWork-sortOrder
      createdAt: plate.createdAt,
      // data-from: PhotographyWork-createdAt
      updatedAt: plate.updatedAt
      // data-from: PhotographyWork-updatedAt
    }));
    const stats = {
      totalCollections: collections.length,
      visibleOnWallCount: collections.filter((c) => c.isVisible).length,
      featuredOnHomeCount: collections.filter((c) => c.featuredOnHome).length,
      totalCatalogedPlates: plates.length
    };
    return {
      collections,
      plates,
      stats
    };
  })();
}
async function toggleCollectionVisibility(id, isVisible) {
  return (0, import_action_utils.withResult)(async () => {
    const updated = await import_prisma.default.photoCollection.update({
      where: { id },
      data: { isVisible }
    });
    return {
      id: updated.id,
      // data-from: PhotoCollection-id
      title: updated.title,
      // data-from: PhotoCollection-title
      rollNumber: updated.rollNumber,
      // data-from: PhotoCollection-rollNumber
      medium: updated.medium,
      // data-from: PhotoCollection-medium
      curatorNote: updated.curatorNote,
      // data-from: PhotoCollection-curatorNote
      aspect: updated.aspect,
      // data-from: PhotoCollection-aspect
      aspectRatioClass: updated.aspectRatioClass,
      // data-from: PhotoCollection-aspectRatioClass
      coverImage: updated.coverImage,
      // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: updated.imageCount,
      // data-from: PhotoCollection-imageCount
      isVisible: updated.isVisible,
      // data-from: PhotoCollection-isVisible
      featuredOnHome: updated.featuredOnHome,
      // data-from: PhotoCollection-featuredOnHome
      sortOrder: updated.sortOrder,
      // data-from: PhotoCollection-sortOrder
      createdAt: updated.createdAt,
      // data-from: PhotoCollection-createdAt
      updatedAt: updated.updatedAt
      // data-from: PhotoCollection-updatedAt
    };
  })();
}
async function toggleCollectionFeatured(id, featuredOnHome) {
  return (0, import_action_utils.withResult)(async () => {
    const updated = await import_prisma.default.photoCollection.update({
      where: { id },
      data: { featuredOnHome }
    });
    return {
      id: updated.id,
      // data-from: PhotoCollection-id
      title: updated.title,
      // data-from: PhotoCollection-title
      rollNumber: updated.rollNumber,
      // data-from: PhotoCollection-rollNumber
      medium: updated.medium,
      // data-from: PhotoCollection-medium
      curatorNote: updated.curatorNote,
      // data-from: PhotoCollection-curatorNote
      aspect: updated.aspect,
      // data-from: PhotoCollection-aspect
      aspectRatioClass: updated.aspectRatioClass,
      // data-from: PhotoCollection-aspectRatioClass
      coverImage: updated.coverImage,
      // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: updated.imageCount,
      // data-from: PhotoCollection-imageCount
      isVisible: updated.isVisible,
      // data-from: PhotoCollection-isVisible
      featuredOnHome: updated.featuredOnHome,
      // data-from: PhotoCollection-featuredOnHome
      sortOrder: updated.sortOrder,
      // data-from: PhotoCollection-sortOrder
      createdAt: updated.createdAt,
      // data-from: PhotoCollection-createdAt
      updatedAt: updated.updatedAt
      // data-from: PhotoCollection-updatedAt
    };
  })();
}
async function saveCollectionFolio(input) {
  return (0, import_action_utils.withResult)(async () => {
    if (input.id) {
      const updated = await import_prisma.default.photoCollection.update({
        where: { id: input.id },
        data: {
          title: input.title,
          rollNumber: input.rollNumber,
          medium: input.medium,
          curatorNote: input.curatorNote,
          aspect: input.aspect,
          aspectRatioClass: input.aspectRatioClass,
          coverImage: input.coverImage,
          imageCount: input.imageCount,
          isVisible: input.isVisible,
          featuredOnHome: input.featuredOnHome,
          sortOrder: input.sortOrder
        }
      });
      return {
        id: updated.id,
        // data-from: PhotoCollection-id
        title: updated.title,
        // data-from: PhotoCollection-title
        rollNumber: updated.rollNumber,
        // data-from: PhotoCollection-rollNumber
        medium: updated.medium,
        // data-from: PhotoCollection-medium
        curatorNote: updated.curatorNote,
        // data-from: PhotoCollection-curatorNote
        aspect: updated.aspect,
        // data-from: PhotoCollection-aspect
        aspectRatioClass: updated.aspectRatioClass,
        // data-from: PhotoCollection-aspectRatioClass
        coverImage: updated.coverImage,
        // data-from: PhotoCollection-coverImage data-role: image_url
        imageCount: updated.imageCount,
        // data-from: PhotoCollection-imageCount
        isVisible: updated.isVisible,
        // data-from: PhotoCollection-isVisible
        featuredOnHome: updated.featuredOnHome,
        // data-from: PhotoCollection-featuredOnHome
        sortOrder: updated.sortOrder,
        // data-from: PhotoCollection-sortOrder
        createdAt: updated.createdAt,
        // data-from: PhotoCollection-createdAt
        updatedAt: updated.updatedAt
        // data-from: PhotoCollection-updatedAt
      };
    }
    const created = await import_prisma.default.photoCollection.create({
      data: {
        title: input.title,
        rollNumber: input.rollNumber,
        medium: input.medium,
        curatorNote: input.curatorNote,
        aspect: input.aspect,
        aspectRatioClass: input.aspectRatioClass,
        coverImage: input.coverImage,
        imageCount: input.imageCount,
        isVisible: input.isVisible,
        featuredOnHome: input.featuredOnHome,
        sortOrder: input.sortOrder
      }
    });
    return {
      id: created.id,
      // data-from: PhotoCollection-id
      title: created.title,
      // data-from: PhotoCollection-title
      rollNumber: created.rollNumber,
      // data-from: PhotoCollection-rollNumber
      medium: created.medium,
      // data-from: PhotoCollection-medium
      curatorNote: created.curatorNote,
      // data-from: PhotoCollection-curatorNote
      aspect: created.aspect,
      // data-from: PhotoCollection-aspect
      aspectRatioClass: created.aspectRatioClass,
      // data-from: PhotoCollection-aspectRatioClass
      coverImage: created.coverImage,
      // data-from: PhotoCollection-coverImage data-role: image_url
      imageCount: created.imageCount,
      // data-from: PhotoCollection-imageCount
      isVisible: created.isVisible,
      // data-from: PhotoCollection-isVisible
      featuredOnHome: created.featuredOnHome,
      // data-from: PhotoCollection-featuredOnHome
      sortOrder: created.sortOrder,
      // data-from: PhotoCollection-sortOrder
      createdAt: created.createdAt,
      // data-from: PhotoCollection-createdAt
      updatedAt: created.updatedAt
      // data-from: PhotoCollection-updatedAt
    };
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCollectionsManagerData,
  saveCollectionFolio,
  toggleCollectionFeatured,
  toggleCollectionVisibility
});
