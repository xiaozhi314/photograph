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

// src/backend/actions/InquiriesDispatch.ts
var InquiriesDispatch_exports = {};
__export(InquiriesDispatch_exports, {
  dispatchConsultationReply: () => dispatchConsultationReply,
  getInquiriesQueue: () => getInquiriesQueue,
  openInquiryReview: () => openInquiryReview
});
module.exports = __toCommonJS(InquiriesDispatch_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getInquiriesQueue(input) {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
      const [totalCount, newCount, inReviewCount, repliedCount, repliedInquiries] = await Promise.all([
        import_prisma.default.commissionInquiry.count(),
        import_prisma.default.commissionInquiry.count({ where: { status: "NEW" } }),
        import_prisma.default.commissionInquiry.count({ where: { status: "IN_REVIEW" } }),
        import_prisma.default.commissionInquiry.count({ where: { status: "REPLIED" } }),
        import_prisma.default.commissionInquiry.findMany({
          where: {
            status: "REPLIED",
            repliedAt: { not: null }
          },
          select: {
            createdAt: true,
            repliedAt: true
          }
        })
      ]);
      let totalTurnaroundHours = 0;
      let validRepliedRecordsCount = 0;
      for (const record of repliedInquiries) {
        if (record.repliedAt) {
          const repliedTime = new Date(record.repliedAt).getTime();
          const createdTime = record.createdAt.getTime();
          if (!isNaN(repliedTime) && repliedTime >= createdTime) {
            const hours = (repliedTime - createdTime) / (1e3 * 60 * 60);
            totalTurnaroundHours += hours;
            validRepliedRecordsCount += 1;
          }
        }
      }
      const avgTurnaroundHours = validRepliedRecordsCount > 0 ? Math.round(totalTurnaroundHours / validRepliedRecordsCount * 10) / 10 : 24;
      const metrics = {
        total: totalCount,
        newCount,
        inReviewCount,
        repliedCount,
        avgTurnaroundHours
      };
      const where = {};
      if (input?.status && input.status !== "ALL") {
        where.status = input.status;
      }
      if (input?.projectType && input.projectType !== "ALL") {
        where.projectType = input.projectType;
      }
      if (input?.search && input.search.trim()) {
        const q = input.search.trim();
        where.OR = [
          { clientName: { contains: q } },
          { clientEmail: { contains: q } },
          { organization: { contains: q } },
          { projectBrief: { contains: q } }
        ];
      }
      const records = await import_prisma.default.commissionInquiry.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
              username: true
            }
          }
        }
      });
      const inquiries = records.map((r) => {
        let pkgDTO = null;
        if (r.servicePackage) {
          pkgDTO = {
            id: r.servicePackage.id,
            title: r.servicePackage.title,
            serviceType: r.servicePackage.serviceType,
            basePrice: r.servicePackage.basePrice.toNumber(),
            priceDisplay: r.servicePackage.priceDisplay,
            durationEstimate: r.servicePackage.durationEstimate,
            deliverables: Array.isArray(r.servicePackage.deliverables) ? r.servicePackage.deliverables : [],
            isActive: r.servicePackage.isActive,
            sortOrder: r.servicePackage.sortOrder,
            createdAt: r.servicePackage.createdAt,
            updatedAt: r.servicePackage.updatedAt
          };
        }
        return {
          id: r.id,
          clientId: r.clientId,
          servicePackageId: r.servicePackageId,
          clientName: r.clientName,
          clientEmail: r.clientEmail,
          organization: r.organization,
          projectType: r.projectType,
          budgetTier: r.budgetTier,
          projectBrief: r.projectBrief,
          clientMessage: r.clientMessage,
          targetTimeline: r.targetTimeline,
          location: r.location,
          status: r.status,
          curatorReply: r.curatorReply,
          repliedAt: r.repliedAt,
          repliedById: r.repliedById,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
          servicePackage: pkgDTO,
          repliedByName: r.repliedBy?.fullName || r.repliedBy?.username || null
        };
      });
      return {
        inquiries,
        metrics
      };
    })
  )();
}
async function openInquiryReview(inquiryId) {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
      const existing = await import_prisma.default.commissionInquiry.findUnique({
        where: { id: inquiryId }
      });
      if (!existing) {
        throw new Error("Commission inquiry record not found");
      }
      let updatedRecord = existing;
      if (existing.status === "NEW") {
        updatedRecord = await import_prisma.default.commissionInquiry.update({
          where: { id: inquiryId },
          data: {
            status: "IN_REVIEW"
          }
        });
      }
      const fullRecord = await import_prisma.default.commissionInquiry.findUniqueOrThrow({
        where: { id: updatedRecord.id },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
              username: true
            }
          }
        }
      });
      let pkgDTO = null;
      if (fullRecord.servicePackage) {
        pkgDTO = {
          id: fullRecord.servicePackage.id,
          title: fullRecord.servicePackage.title,
          serviceType: fullRecord.servicePackage.serviceType,
          basePrice: fullRecord.servicePackage.basePrice.toNumber(),
          priceDisplay: fullRecord.servicePackage.priceDisplay,
          durationEstimate: fullRecord.servicePackage.durationEstimate,
          deliverables: Array.isArray(fullRecord.servicePackage.deliverables) ? fullRecord.servicePackage.deliverables : [],
          isActive: fullRecord.servicePackage.isActive,
          sortOrder: fullRecord.servicePackage.sortOrder,
          createdAt: fullRecord.servicePackage.createdAt,
          updatedAt: fullRecord.servicePackage.updatedAt
        };
      }
      return {
        id: fullRecord.id,
        clientId: fullRecord.clientId,
        servicePackageId: fullRecord.servicePackageId,
        clientName: fullRecord.clientName,
        clientEmail: fullRecord.clientEmail,
        organization: fullRecord.organization,
        projectType: fullRecord.projectType,
        budgetTier: fullRecord.budgetTier,
        projectBrief: fullRecord.projectBrief,
        clientMessage: fullRecord.clientMessage,
        targetTimeline: fullRecord.targetTimeline,
        location: fullRecord.location,
        status: fullRecord.status,
        curatorReply: fullRecord.curatorReply,
        repliedAt: fullRecord.repliedAt,
        repliedById: fullRecord.repliedById,
        createdAt: fullRecord.createdAt,
        updatedAt: fullRecord.updatedAt,
        servicePackage: pkgDTO,
        repliedByName: fullRecord.repliedBy?.fullName || fullRecord.repliedBy?.username || null
      };
    })
  )();
}
async function dispatchConsultationReply(input) {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireRole)(import_action_utils.UserRole.CuratorAdmin)(async () => {
      const auth = (0, import_action_utils.getAuthContext)();
      if (!input.curatorReply || !input.curatorReply.trim()) {
        throw new Error("Curator consultation response cannot be empty");
      }
      const existing = await import_prisma.default.commissionInquiry.findUnique({
        where: { id: input.inquiryId }
      });
      if (!existing) {
        throw new Error("Commission inquiry record not found");
      }
      if (existing.status === "REPLIED") {
        throw new Error("This commission inquiry has already been replied and locked from modification");
      }
      const nowIso = (/* @__PURE__ */ new Date()).toISOString();
      const updated = await import_prisma.default.commissionInquiry.update({
        where: { id: input.inquiryId },
        data: {
          curatorReply: input.curatorReply.trim(),
          repliedAt: nowIso,
          repliedById: auth.userId,
          status: "REPLIED"
        },
        include: {
          servicePackage: true,
          repliedBy: {
            select: {
              fullName: true,
              username: true
            }
          }
        }
      });
      let pkgDTO = null;
      if (updated.servicePackage) {
        pkgDTO = {
          id: updated.servicePackage.id,
          title: updated.servicePackage.title,
          serviceType: updated.servicePackage.serviceType,
          basePrice: updated.servicePackage.basePrice.toNumber(),
          priceDisplay: updated.servicePackage.priceDisplay,
          durationEstimate: updated.servicePackage.durationEstimate,
          deliverables: Array.isArray(updated.servicePackage.deliverables) ? updated.servicePackage.deliverables : [],
          isActive: updated.servicePackage.isActive,
          sortOrder: updated.servicePackage.sortOrder,
          createdAt: updated.servicePackage.createdAt,
          updatedAt: updated.servicePackage.updatedAt
        };
      }
      return {
        id: updated.id,
        clientId: updated.clientId,
        servicePackageId: updated.servicePackageId,
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
        repliedById: updated.repliedById,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
        servicePackage: pkgDTO,
        repliedByName: updated.repliedBy?.fullName || updated.repliedBy?.username || auth.full_name || null
      };
    })
  )();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dispatchConsultationReply,
  getInquiriesQueue,
  openInquiryReview
});
