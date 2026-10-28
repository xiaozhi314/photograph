/**
 * 枚举中心 — 从 prisma/schema.prisma 自动生成
 * 运行: npx tsx scripts/generate-schema-meta.ts
 * ⚠️ 请勿手动修改，schema 变更后重新生成
 */

export const AccountRole = {
  CLIENT: 'CLIENT',
  CURATOR_ADMIN: 'CURATOR_ADMIN',
} as const
export type AccountRoleType = typeof AccountRole[keyof typeof AccountRole]

export const AspectOrientation = {
  PORTRAIT: 'PORTRAIT',
  LANDSCAPE: 'LANDSCAPE',
} as const
export type AspectOrientationType = typeof AspectOrientation[keyof typeof AspectOrientation]

export const ServiceType = {
  ARCHITECTURAL_MONOGRAPH: 'ARCHITECTURAL_MONOGRAPH',
  EDITORIAL_PORTRAITURE: 'EDITORIAL_PORTRAITURE',
  COMMERCIAL_CAMPAIGN: 'COMMERCIAL_CAMPAIGN',
  PRINT_ACQUISITION: 'PRINT_ACQUISITION',
} as const
export type ServiceTypeType = typeof ServiceType[keyof typeof ServiceType]

export const ProjectType = {
  EDITORIAL: 'EDITORIAL',
  PORTRAIT: 'PORTRAIT',
  COMMERCIAL: 'COMMERCIAL',
  ACQUISITION: 'ACQUISITION',
} as const
export type ProjectTypeType = typeof ProjectType[keyof typeof ProjectType]

export const InquiryStatus = {
  NEW: 'NEW',
  IN_REVIEW: 'IN_REVIEW',
  REPLIED: 'REPLIED',
} as const
export type InquiryStatusType = typeof InquiryStatus[keyof typeof InquiryStatus]

export const ExhibitionType = {
  SOLO_EXHIBITION: 'SOLO_EXHIBITION',
  INSTITUTIONAL: 'INSTITUTIONAL',
  BIENNIAL: 'BIENNIAL',
  MONOGRAPH: 'MONOGRAPH',
} as const
export type ExhibitionTypeType = typeof ExhibitionType[keyof typeof ExhibitionType]

/** 所有枚举名称列表 */
export const ALL_ENUMS = ['AccountRole', 'AspectOrientation', 'ServiceType', 'ProjectType', 'InquiryStatus', 'ExhibitionType'] as const
