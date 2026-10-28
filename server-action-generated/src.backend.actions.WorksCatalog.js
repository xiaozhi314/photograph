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

// src/backend/actions/WorksCatalog.ts
var WorksCatalog_exports = {};
__export(WorksCatalog_exports, {
  deletePhotographyWork: () => deletePhotographyWork,
  getWorksCatalogData: () => getWorksCatalogData,
  reorderPhotoCategories: () => reorderPhotoCategories,
  reorderPhotographyWorks: () => reorderPhotographyWorks,
  savePhotoCategory: () => savePhotoCategory,
  savePhotographyWork: () => savePhotographyWork,
  toggleArchivedWork: () => toggleArchivedWork,
  toggleFeaturedWork: () => toggleFeaturedWork
});
module.exports = __toCommonJS(WorksCatalog_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getWorksCatalogData() {
  return (0, import_action_utils.withResult)(async () => {
    const [categoriesRaw, collectionsRaw, worksRaw] = await Promise.all([
      import_prisma.default.photoCategory.findMany({
        orderBy: { sortOrder: "asc" }
      }),
      import_prisma.default.photoCollection.findMany({
        orderBy: { sortOrder: "asc" }
      }),
      import_prisma.default.photographyWork.findMany({
        orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }]
      })
    ]);
    const categories = categoriesRaw.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      sortOrder: c.sortOrder,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt
    }));
    const collections = collectionsRaw.map((col) => ({
      id: col.id,
      title: col.title,
      rollNumber: col.rollNumber,
      medium: col.medium,
      curatorNote: col.curatorNote,
      aspect: col.aspect,
      aspectRatioClass: col.aspectRatioClass,
      coverImage: col.coverImage,
      imageCount: col.imageCount,
      isVisible: col.isVisible,
      featuredOnHome: col.featuredOnHome,
      sortOrder: col.sortOrder,
      createdAt: col.createdAt,
      updatedAt: col.updatedAt
    }));
    const works = worksRaw.map((w) => ({
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
    return { categories, collections, works };
  })();
}
async function savePhotographyWork(input) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    const dataPayload = {
      title: input.title.trim(),
      categoryId: input.categoryId,
      collectionId: input.collectionId ? input.collectionId : null,
      seriesName: input.seriesName.trim(),
      location: input.location.trim(),
      year: Number(input.year),
      medium: input.medium.trim(),
      edition: input.edition.trim(),
      aspectRatio: input.aspectRatio,
      statement: input.statement.trim(),
      imageUrl: input.imageUrl.trim(),
      isFeatured: Boolean(input.isFeatured),
      isArchived: Boolean(input.isArchived),
      sortOrder: Number(input.sortOrder) || 0
    };
    let result;
    if (input.id) {
      result = await import_prisma.default.photographyWork.update({
        where: { id: input.id },
        data: dataPayload
      });
    } else {
      result = await import_prisma.default.photographyWork.create({
        data: dataPayload
      });
    }
    return {
      id: result.id,
      title: result.title,
      categoryId: result.categoryId,
      collectionId: result.collectionId,
      seriesName: result.seriesName,
      location: result.location,
      year: result.year,
      medium: result.medium,
      edition: result.edition,
      aspectRatio: result.aspectRatio,
      statement: result.statement,
      imageUrl: result.imageUrl,
      isFeatured: result.isFeatured,
      isArchived: result.isArchived,
      sortOrder: result.sortOrder,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt
    };
  })();
}
async function toggleFeaturedWork(workId) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    const existing = await import_prisma.default.photographyWork.findUnique({
      where: { id: workId },
      select: { isFeatured: true }
    });
    if (!existing) {
      throw new Error(`Master plate ${workId} not found`);
    }
    const updated = await import_prisma.default.photographyWork.update({
      where: { id: workId },
      data: { isFeatured: !existing.isFeatured },
      select: { id: true, isFeatured: true }
    });
    return updated;
  })();
}
async function toggleArchivedWork(workId) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    const existing = await import_prisma.default.photographyWork.findUnique({
      where: { id: workId },
      select: { isArchived: true }
    });
    if (!existing) {
      throw new Error(`Master plate ${workId} not found`);
    }
    const updated = await import_prisma.default.photographyWork.update({
      where: { id: workId },
      data: { isArchived: !existing.isArchived },
      select: { id: true, isArchived: true }
    });
    return updated;
  })();
}
async function deletePhotographyWork(workId) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    await import_prisma.default.photographyWork.delete({
      where: { id: workId }
    });
    return { id: workId, success: true };
  })();
}
async function savePhotoCategory(input) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    const dataPayload = {
      name: input.name.trim(),
      slug: input.slug.trim().toLowerCase(),
      description: input.description?.trim() || null,
      sortOrder: typeof input.sortOrder === "number" ? input.sortOrder : 0
    };
    let record;
    if (input.id) {
      record = await import_prisma.default.photoCategory.update({
        where: { id: input.id },
        data: dataPayload
      });
    } else {
      record = await import_prisma.default.photoCategory.create({
        data: dataPayload
      });
    }
    return {
      id: record.id,
      slug: record.slug,
      name: record.name,
      description: record.description,
      sortOrder: record.sortOrder,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt
    };
  })();
}
async function reorderPhotoCategories(categoryIds) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    await import_prisma.default.$transaction(
      categoryIds.map(
        (id, index) => import_prisma.default.photoCategory.update({
          where: { id },
          data: { sortOrder: index + 1 }
        })
      )
    );
    const updated = await import_prisma.default.photoCategory.findMany({
      orderBy: { sortOrder: "asc" }
    });
    return updated.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      sortOrder: c.sortOrder,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt
    }));
  })();
}
async function reorderPhotographyWorks(workIds) {
  return (0, import_action_utils.withResult)(async () => {
    const roleAuth = (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin);
    await roleAuth(async () => {
    })();
    await import_prisma.default.$transaction(
      workIds.map(
        (id, index) => import_prisma.default.photographyWork.update({
          where: { id },
          data: { sortOrder: index + 1 }
        })
      )
    );
    return { success: true };
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deletePhotographyWork,
  getWorksCatalogData,
  reorderPhotoCategories,
  reorderPhotographyWorks,
  savePhotoCategory,
  savePhotographyWork,
  toggleArchivedWork,
  toggleFeaturedWork
});
