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

// src/frontend/actions/ArtistExhibitions.ts
var ArtistExhibitions_exports = {};
__export(ArtistExhibitions_exports, {
  getArtistExhibitionsData: () => getArtistExhibitionsData
});
module.exports = __toCommonJS(ArtistExhibitions_exports);
var import_prisma = __toESM(require_prisma());
var import_action_utils = __toESM(require_action_utils());
async function getArtistExhibitionsData() {
  return (0, import_action_utils.withResult)(async () => {
    const studioBio = await import_prisma.default.studioBio.findFirst();
    const records = await import_prisma.default.exhibitionRecord.findMany({
      orderBy: [
        { year: "desc" },
        { sortOrder: "asc" }
      ]
    });
    const mappedBio = studioBio ? {
      id: studioBio.id,
      artistName: studioBio.artistName,
      studioName: studioBio.studioName,
      philosophyQuote: studioBio.philosophyQuote,
      bioStatement: studioBio.bioStatement,
      portraitImage: studioBio.portraitImage,
      atelierLocation: studioBio.atelierLocation,
      activeRepresentation: studioBio.activeRepresentation,
      createdAt: studioBio.createdAt,
      updatedAt: studioBio.updatedAt
    } : null;
    const mappedExhibitions = records.map((r) => ({
      id: r.id,
      title: r.title,
      institution: r.institution,
      city: r.city,
      year: r.year,
      exhibitionType: r.exhibitionType,
      pressMention: r.pressMention,
      externalUrl: r.externalUrl,
      sortOrder: r.sortOrder,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt
    }));
    return {
      studioBio: mappedBio,
      exhibitions: mappedExhibitions
    };
  })();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getArtistExhibitionsData
});
