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

// src/backend/actions/AdminHome.ts
var AdminHome_exports = {};
__export(AdminHome_exports, {
  createPhotoCollection: () => createPhotoCollection,
  getAdminHomeOverview: () => getAdminHomeOverview,
  sendInquiryReply: () => sendInquiryReply,
  toggleCollectionFeatured: () => toggleCollectionFeatured,
  toggleCollectionVisibility: () => toggleCollectionVisibility,
  updateInquiryStatus: () => updateInquiryStatus
});
module.exports = __toCommonJS(AdminHome_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getAdminHomeOverview() {
  return (0, import_action_utils.withResult)(async () => {
    const totalMasterPlates = await import_prisma.default.photographyWork.count({
      where: { isArchived: false }
    });
    const activeFoliosCount = await import_prisma.default.photoCollection.count({
      where: { isVisible: true }
    });
    const featuredFoliosCount = await import_prisma.default.photoCollection.count({
      where: { featuredOnHome: true }
    });
    const pendingInquiriesCount = await import_prisma.default.commissionInquiry.count({
      where: {
        status: { in: ["NEW", "IN_REVIEW"] }
      }
    });
    const totalInquiries = await import_prisma.default.commissionInquiry.count();
    const repliedInquiries = await import_prisma.default.commissionInquiry.count({
      where: { status: "REPLIED" }
    });
    const completionRatePercent = totalInquiries > 0 ? Math.round(repliedInquiries / totalInquiries * 100) : 100;
    const stats = [
      {
        label: "Total Published Works",
        value: totalMasterPlates.toString(),
        subtext: "Cataloged active master plates",
        badge: "ARCHIVE OK"
      },
      {
        label: "Active Series / Folios",
        value: activeFoliosCount.toString(),
        subtext: `${featuredFoliosCount} showcased on public wall`,
        badge: "CURATED"
      },
      {
        label: "New Inquiries in Queue",
        value: pendingInquiriesCount.toString(),
        subtext: "Awaiting consultation review",
        badge: "ACTION REQ"
      },
      {
        label: "Inquiry Completion Rate",
        value: `${completionRatePercent}%`,
        subtext: `${repliedInquiries} of ${totalInquiries} briefs dispatched`,
        badge: "AUDIENCE"
      }
    ];
    const rawCollections = await import_prisma.default.photoCollection.findMany({
      orderBy: { sortOrder: "asc" },
      include: {
        _count: {
          select: { works: true }
        }
      }
    });
    const collections = rawCollections.map((col) => ({
      id: col.id,
      title: col.title,
      rollNumber: col.rollNumber,
      medium: col.medium,
      curatorNote: col.curatorNote,
      aspect: col.aspect,
      aspectRatioClass: col.aspectRatioClass,
      coverImage: col.coverImage,
      imageCount: col.imageCount,
      workCount: col._count.works,
      isVisible: col.isVisible,
      featuredOnHome: col.featuredOnHome,
      sortOrder: col.sortOrder,
      createdAt: col.createdAt
    }));
    const rawInquiries = await import_prisma.default.commissionInquiry.findMany({
      take: 20,
      orderBy: { createdAt: "desc" }
    });
    const inquiries = rawInquiries.map((inq) => ({
      id: inq.id,
      clientId: inq.clientId,
      clientName: inq.clientName,
      clientEmail: inq.clientEmail,
      organization: inq.organization,
      projectType: inq.projectType,
      budgetTier: inq.budgetTier,
      budgetRange: inq.budgetTier,
      projectBrief: inq.projectBrief,
      clientMessage: inq.clientMessage,
      targetTimeline: inq.targetTimeline,
      location: inq.location,
      status: inq.status,
      curatorReply: inq.curatorReply,
      repliedAt: inq.repliedAt,
      repliedById: inq.repliedById,
      createdAt: inq.createdAt
    }));
    return {
      stats,
      collections,
      inquiries
    };
  })();
}
async function toggleCollectionVisibility(input) {
  return (0, import_action_utils.withResult)(async () => {
    const updated = await import_prisma.default.photoCollection.update({
      where: { id: input.id },
      data: { isVisible: input.isVisible },
      include: {
        _count: { select: { works: true } }
      }
    });
    return {
      id: updated.id,
      title: updated.title,
      rollNumber: updated.rollNumber,
      medium: updated.medium,
      curatorNote: updated.curatorNote,
      aspect: updated.aspect,
      aspectRatioClass: updated.aspectRatioClass,
      coverImage: updated.coverImage,
      imageCount: updated.imageCount,
      workCount: updated._count.works,
      isVisible: updated.isVisible,
      featuredOnHome: updated.featuredOnHome,
      sortOrder: updated.sortOrder,
      createdAt: updated.createdAt
    };
  })();
}
async function toggleCollectionFeatured(input) {
  return (0, import_action_utils.withResult)(async () => {
    const updated = await import_prisma.default.photoCollection.update({
      where: { id: input.id },
      data: { featuredOnHome: input.featuredOnHome },
      include: {
        _count: { select: { works: true } }
      }
    });
    return {
      id: updated.id,
      title: updated.title,
      rollNumber: updated.rollNumber,
      medium: updated.medium,
      curatorNote: updated.curatorNote,
      aspect: updated.aspect,
      aspectRatioClass: updated.aspectRatioClass,
      coverImage: updated.coverImage,
      imageCount: updated.imageCount,
      workCount: updated._count.works,
      isVisible: updated.isVisible,
      featuredOnHome: updated.featuredOnHome,
      sortOrder: updated.sortOrder,
      createdAt: updated.createdAt
    };
  })();
}
async function createPhotoCollection(input) {
  return (0, import_action_utils.withResult)(async () => {
    let sortOrder = input.sortOrder ?? 0;
    if (input.sortOrder === void 0) {
      const highest = await import_prisma.default.photoCollection.findFirst({
        orderBy: { sortOrder: "desc" },
        select: { sortOrder: true }
      });
      sortOrder = (highest?.sortOrder ?? 0) + 1;
    }
    const created = await import_prisma.default.photoCollection.create({
      data: {
        title: input.title,
        rollNumber: input.rollNumber,
        medium: input.medium,
        curatorNote: input.curatorNote,
        aspect: input.aspect,
        aspectRatioClass: input.aspectRatioClass,
        coverImage: input.coverImage ?? null,
        imageCount: input.imageCount,
        isVisible: input.isVisible,
        featuredOnHome: input.featuredOnHome,
        sortOrder
      },
      include: {
        _count: { select: { works: true } }
      }
    });
    return {
      id: created.id,
      title: created.title,
      rollNumber: created.rollNumber,
      medium: created.medium,
      curatorNote: created.curatorNote,
      aspect: created.aspect,
      aspectRatioClass: created.aspectRatioClass,
      coverImage: created.coverImage,
      imageCount: created.imageCount,
      workCount: created._count.works,
      isVisible: created.isVisible,
      featuredOnHome: created.featuredOnHome,
      sortOrder: created.sortOrder,
      createdAt: created.createdAt
    };
  })();
}
async function updateInquiryStatus(input) {
  return (0, import_action_utils.withResult)(async () => {
    const updated = await import_prisma.default.commissionInquiry.update({
      where: { id: input.id },
      data: { status: input.status }
    });
    return {
      id: updated.id,
      clientId: updated.clientId,
      clientName: updated.clientName,
      clientEmail: updated.clientEmail,
      organization: updated.organization,
      projectType: updated.projectType,
      budgetTier: updated.budgetTier,
      budgetRange: updated.budgetTier,
      projectBrief: updated.projectBrief,
      clientMessage: updated.clientMessage,
      targetTimeline: updated.targetTimeline,
      location: updated.location,
      status: updated.status,
      curatorReply: updated.curatorReply,
      repliedAt: updated.repliedAt,
      repliedById: updated.repliedById,
      createdAt: updated.createdAt
    };
  })();
}
async function sendInquiryReply(input) {
  return (0, import_action_utils.withResult)(async () => {
    const auth = tryGetAuthContext();
    const repliedById = auth?.userId ?? null;
    const nowTimestamp = (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    const updated = await import_prisma.default.commissionInquiry.update({
      where: { id: input.id },
      data: {
        status: "REPLIED",
        curatorReply: input.curatorReply,
        repliedAt: nowTimestamp,
        repliedById
      }
    });
    return {
      id: updated.id,
      clientId: updated.clientId,
      clientName: updated.clientName,
      clientEmail: updated.clientEmail,
      organization: updated.organization,
      projectType: updated.projectType,
      budgetTier: updated.budgetTier,
      budgetRange: updated.budgetTier,
      projectBrief: updated.projectBrief,
      clientMessage: updated.clientMessage,
      targetTimeline: updated.targetTimeline,
      location: updated.location,
      status: updated.status,
      curatorReply: updated.curatorReply,
      repliedAt: updated.repliedAt,
      repliedById: updated.repliedById,
      createdAt: updated.createdAt
    };
  })();
}
function tryGetAuthContext() {
  try {
    return (0, import_action_utils.getAuthContext)();
  } catch {
    return null;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPhotoCollection,
  getAdminHomeOverview,
  sendInquiryReply,
  toggleCollectionFeatured,
  toggleCollectionVisibility,
  updateInquiryStatus
});
