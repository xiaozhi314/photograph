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

// src/frontend/actions/CommissionBooking.ts
var CommissionBooking_exports = {};
__export(CommissionBooking_exports, {
  createCommissionInquiry: () => createCommissionInquiry,
  getCommissionBookingInitData: () => getCommissionBookingInitData
});
module.exports = __toCommonJS(CommissionBooking_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
function mapServiceTypeToDefaults(st) {
  switch (st) {
    case "ARCHITECTURAL_MONOGRAPH":
      return { projectType: "EDITORIAL", budgetTier: "$12,000 \u2013 $20,000" };
    case "EDITORIAL_PORTRAITURE":
      return { projectType: "PORTRAIT", budgetTier: "$4,500 \u2013 $8,000" };
    case "COMMERCIAL_CAMPAIGN":
      return { projectType: "COMMERCIAL", budgetTier: "$18,000 \u2013 $35,000" };
    case "PRINT_ACQUISITION":
      return { projectType: "ACQUISITION", budgetTier: "$2,800 \u2013 $6,000" };
    default:
      return { projectType: "EDITORIAL", budgetTier: "$5,000 \u2013 $10,000" };
  }
}
async function getCommissionBookingInitData() {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireAuth)(async () => {
      const currentUserId = (0, import_action_utils.getUserId)();
      const user = await import_prisma.default.accountUser.findUnique({
        where: { id: currentUserId },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          organization: true,
          avatarUrl: true,
          role: true
        }
      });
      if (!user) {
        throw new Error("User profile not found");
      }
      const clientProfile = {
        id: user.id,
        // data-from: AccountUser-id
        fullName: user.fullName,
        // data-from: AccountUser-fullName
        email: user.email,
        // data-from: AccountUser-email
        phone: user.phone,
        // data-from: AccountUser-phone
        organization: user.organization,
        // data-from: AccountUser-organization
        avatarUrl: user.avatarUrl,
        // data-from: AccountUser-avatarUrl data-role: image_url
        role: user.role
        // data-from: AccountUser-role
      };
      const rawPackages = await import_prisma.default.servicePackage.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: "asc" }
      });
      const packages = rawPackages.map((pkg) => {
        const defaults = mapServiceTypeToDefaults(pkg.serviceType);
        let parsedDeliverables = [];
        if (Array.isArray(pkg.deliverables)) {
          parsedDeliverables = pkg.deliverables.filter(
            (item) => typeof item === "string"
          );
        } else if (typeof pkg.deliverables === "string") {
          try {
            const parsed = JSON.parse(pkg.deliverables);
            if (Array.isArray(parsed)) {
              parsedDeliverables = parsed.filter(
                (item) => typeof item === "string"
              );
            }
          } catch {
            parsedDeliverables = [];
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
          deliverables: parsedDeliverables,
          // data-from: ServicePackage-deliverables
          isActive: pkg.isActive,
          // data-from: ServicePackage-isActive
          sortOrder: pkg.sortOrder,
          // data-from: ServicePackage-sortOrder
          createdAt: pkg.createdAt,
          // data-from: ServicePackage-createdAt
          updatedAt: pkg.updatedAt,
          // data-from: ServicePackage-updatedAt
          suggestedProjectType: defaults.projectType,
          suggestedBudgetTier: defaults.budgetTier
        };
      });
      const rawInquiries = await import_prisma.default.commissionInquiry.findMany({
        where: { clientId: currentUserId },
        orderBy: { createdAt: "desc" },
        take: 6,
        include: {
          servicePackage: {
            select: {
              title: true
            }
          }
        }
      });
      const recentInquiries = rawInquiries.map((inq) => ({
        id: inq.id,
        // data-from: CommissionInquiry-id
        clientId: inq.clientId,
        // data-from: CommissionInquiry-clientId
        servicePackageId: inq.servicePackageId,
        // data-from: CommissionInquiry-servicePackageId
        servicePackageTitle: inq.servicePackage?.title || null,
        // data-from: ServicePackage-title
        clientName: inq.clientName,
        // data-from: CommissionInquiry-clientName
        clientEmail: inq.clientEmail,
        // data-from: CommissionInquiry-clientEmail
        organization: inq.organization,
        // data-from: CommissionInquiry-organization
        projectType: inq.projectType,
        // data-from: CommissionInquiry-projectType
        budgetTier: inq.budgetTier,
        // data-from: CommissionInquiry-budgetTier
        projectBrief: inq.projectBrief,
        // data-from: CommissionInquiry-projectBrief
        clientMessage: inq.clientMessage,
        // data-from: CommissionInquiry-clientMessage
        targetTimeline: inq.targetTimeline,
        // data-from: CommissionInquiry-targetTimeline
        location: inq.location,
        // data-from: CommissionInquiry-location
        status: inq.status,
        // data-from: CommissionInquiry-status
        curatorReply: inq.curatorReply,
        // data-from: CommissionInquiry-curatorReply
        repliedAt: inq.repliedAt,
        // data-from: CommissionInquiry-repliedAt
        createdAt: inq.createdAt
        // data-from: CommissionInquiry-createdAt
      }));
      return {
        packages,
        clientProfile,
        recentInquiries
      };
    })
  )();
}
async function createCommissionInquiry(input) {
  return (0, import_action_utils.withResult)(
    (0, import_action_utils.requireAuth)(async () => {
      const currentUserId = (0, import_action_utils.getUserId)();
      if (!input.clientName?.trim()) {
        throw new Error("Client name is required");
      }
      if (!input.clientEmail?.trim()) {
        throw new Error("Client email is required");
      }
      if (!input.projectType) {
        throw new Error("Project type is required");
      }
      if (!input.budgetTier?.trim()) {
        throw new Error("Budget tier is required");
      }
      if (!input.projectBrief?.trim()) {
        throw new Error("Project brief narrative is required");
      }
      if (!input.targetTimeline?.trim()) {
        throw new Error("Target timeline is required");
      }
      let validPackageId = null;
      if (input.servicePackageId && input.servicePackageId.trim()) {
        const pkgExists = await import_prisma.default.servicePackage.findUnique({
          where: { id: input.servicePackageId.trim() },
          select: { id: true }
        });
        if (pkgExists) {
          validPackageId = pkgExists.id;
        }
      }
      if (input.phone || input.organization) {
        await import_prisma.default.accountUser.update({
          where: { id: currentUserId },
          data: {
            phone: input.phone ? input.phone.trim() : void 0,
            organization: input.organization ? input.organization.trim() : void 0
          }
        });
      }
      const newInquiry = await import_prisma.default.commissionInquiry.create({
        data: {
          clientId: currentUserId,
          servicePackageId: validPackageId,
          clientName: input.clientName.trim(),
          clientEmail: input.clientEmail.trim(),
          organization: input.organization ? input.organization.trim() : null,
          projectType: input.projectType,
          budgetTier: input.budgetTier.trim(),
          projectBrief: input.projectBrief.trim(),
          clientMessage: input.clientMessage ? input.clientMessage.trim() : null,
          targetTimeline: input.targetTimeline.trim(),
          location: input.location ? input.location.trim() : null,
          status: "NEW"
        },
        select: {
          id: true,
          status: true
        }
      });
      return {
        id: newInquiry.id,
        // data-from: CommissionInquiry-id
        status: newInquiry.status
        // data-from: CommissionInquiry-status
      };
    })
  )();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCommissionInquiry,
  getCommissionBookingInitData
});
