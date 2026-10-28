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

// src/frontend/actions/ClientPortal.ts
var ClientPortal_exports = {};
__export(ClientPortal_exports, {
  getClientPortalData: () => getClientPortalData,
  updateInquiryClientMessage: () => updateInquiryClientMessage
});
module.exports = __toCommonJS(ClientPortal_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getClientPortalData() {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireAuth)(async () => {
      const userId = (0, import_action_utils.getUserId)();
      const user = await import_prisma.default.accountUser.findUnique({
        where: { id: userId }
      });
      if (!user) {
        throw new Error("User profile not found");
      }
      const inquiries = await import_prisma.default.commissionInquiry.findMany({
        where: { clientId: userId },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true
            }
          }
        },
        orderBy: { createdAt: "desc" }
      });
      const mappedBriefs = inquiries.map((inq) => {
        let deliverables = [];
        if (inq.servicePackage && Array.isArray(inq.servicePackage.deliverables)) {
          deliverables = inq.servicePackage.deliverables;
        }
        return {
          id: inq.id,
          clientId: inq.clientId,
          servicePackageId: inq.servicePackageId,
          servicePackage: inq.servicePackage ? {
            id: inq.servicePackage.id,
            title: inq.servicePackage.title,
            serviceType: inq.servicePackage.serviceType,
            basePrice: inq.servicePackage.basePrice.toNumber(),
            priceDisplay: inq.servicePackage.priceDisplay,
            durationEstimate: inq.servicePackage.durationEstimate,
            deliverables
          } : null,
          clientName: inq.clientName,
          clientEmail: inq.clientEmail,
          organization: inq.organization,
          projectType: inq.projectType,
          budgetTier: inq.budgetTier,
          projectBrief: inq.projectBrief,
          clientMessage: inq.clientMessage,
          targetTimeline: inq.targetTimeline,
          location: inq.location,
          status: inq.status,
          curatorReply: inq.curatorReply,
          repliedAt: inq.repliedAt,
          repliedByName: inq.repliedBy?.fullName ?? null,
          repliedById: inq.repliedById,
          createdAt: inq.createdAt,
          updatedAt: inq.updatedAt
        };
      });
      const totalCount = mappedBriefs.length;
      const inReviewCount = mappedBriefs.filter(
        (b) => b.status === "NEW" || b.status === "IN_REVIEW"
      ).length;
      const repliedCount = mappedBriefs.filter((b) => b.status === "REPLIED").length;
      return {
        profile: {
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          organization: user.organization,
          avatarUrl: user.avatarUrl
        },
        briefs: mappedBriefs,
        totalCount,
        inReviewCount,
        repliedCount
      };
    })
  )();
}
async function updateInquiryClientMessage(input) {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireAuth)(async () => {
      const userId = (0, import_action_utils.getUserId)();
      const existing = await import_prisma.default.commissionInquiry.findUnique({
        where: { id: input.inquiryId }
      });
      if (!existing) {
        throw new Error("Commission inquiry not found");
      }
      if (existing.clientId !== userId) {
        throw new Error("Access denied: You can only edit your own commission briefs");
      }
      if (existing.status !== "NEW") {
        throw new Error("Context notes can only be amended while the brief is in NEW status");
      }
      const updated = await import_prisma.default.commissionInquiry.update({
        where: { id: input.inquiryId },
        data: {
          clientMessage: input.clientMessage
        },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true
            }
          }
        }
      });
      let deliverables = [];
      if (updated.servicePackage && Array.isArray(updated.servicePackage.deliverables)) {
        deliverables = updated.servicePackage.deliverables;
      }
      return {
        id: updated.id,
        clientId: updated.clientId,
        servicePackageId: updated.servicePackageId,
        servicePackage: updated.servicePackage ? {
          id: updated.servicePackage.id,
          title: updated.servicePackage.title,
          serviceType: updated.servicePackage.serviceType,
          basePrice: updated.servicePackage.basePrice.toNumber(),
          priceDisplay: updated.servicePackage.priceDisplay,
          durationEstimate: updated.servicePackage.durationEstimate,
          deliverables
        } : null,
        clientName: updated.clientName,
        clientEmail: updated.clientEmail,
        organization: updated.organization,
        projectType: updated.projectType,
        budgetTier: updated.budgetTier,
        projectBrief: updated.projectBrief,
        clientMessage: updated.clientMessage,
        targetTimeline: updated.targetTimeline,
        location: updated.location,
        status: updated.status,
        curatorReply: updated.curatorReply,
        repliedAt: updated.repliedAt,
        repliedByName: updated.repliedBy?.fullName ?? null,
        repliedById: updated.repliedById,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt
      };
    })
  )();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getClientPortalData,
  updateInquiryClientMessage
});
