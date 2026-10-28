import { PrismaClient, Prisma } from '../prisma-generated/client';
import {
  AccountUser, 
  AccountUser_uniqueKey, 
  AccountUser_without_PKs, 
  ClientTestimonial, 
  ClientTestimonial_uniqueKey, 
  ClientTestimonial_without_PKs, 
  CommissionInquiry, 
  CommissionInquiry_uniqueKey, 
  CommissionInquiry_without_PKs, 
  ExhibitionRecord, 
  ExhibitionRecord_uniqueKey, 
  ExhibitionRecord_without_PKs, 
  PhotoCategory, 
  PhotoCategory_uniqueKey, 
  PhotoCategory_without_PKs, 
  PhotoCollection, 
  PhotoCollection_uniqueKey, 
  PhotoCollection_without_PKs, 
  PhotographyWork, 
  PhotographyWork_uniqueKey, 
  PhotographyWork_without_PKs, 
  ServicePackage, 
  ServicePackage_uniqueKey, 
  ServicePackage_without_PKs, 
  StudioBio, 
  StudioBio_uniqueKey, 
  StudioBio_without_PKs, 
  filtered_AccountUser, 
  filtered_ClientTestimonial, 
  filtered_CommissionInquiry, 
  filtered_ExhibitionRecord, 
  filtered_PhotoCategory, 
  filtered_PhotoCollection, 
  filtered_PhotographyWork, 
  filtered_ServicePackage, 
  filtered_StudioBio,
  Entities
} from './entities.type';

export const prisma = new PrismaClient();

export const default_entities: Entities = {
  accountuser: {
    /**
        * 创建accountuser记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: AccountUser): Promise<AccountUser | null> => {
            try {
                return await prisma.accountuser.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating accountuser:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: AccountUser_uniqueKey): Promise<AccountUser | null> => {
            try {
                return await prisma.accountuser.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting accountuser:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_AccountUser)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_AccountUser): Promise<AccountUser[]> => {
            try {
                return await prisma.accountuser.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all accountuser:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_AccountUser)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_AccountUser
        ): Promise<AccountUser[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.accountuser.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged accountuser:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_AccountUser)
        * @returns 记录数量
        */
        Count: async (args?: filtered_AccountUser): Promise<number> => {
            try {
                return await prisma.accountuser.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting accountuser:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: AccountUser_uniqueKey; data: AccountUser_without_PKs }): Promise<AccountUser | null> => {
            try {
                return await prisma.accountuser.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating accountuser:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: AccountUser_uniqueKey): Promise<AccountUser | null> => {
            try {
                return await prisma.accountuser.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting accountuser:`, error);
                return null;
            }
        },  },
  photocategory: {
    /**
        * 创建photocategory记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: PhotoCategory): Promise<PhotoCategory | null> => {
            try {
                return await prisma.photocategory.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating photocategory:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: PhotoCategory_uniqueKey): Promise<PhotoCategory | null> => {
            try {
                return await prisma.photocategory.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting photocategory:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_PhotoCategory)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_PhotoCategory): Promise<PhotoCategory[]> => {
            try {
                return await prisma.photocategory.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all photocategory:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_PhotoCategory)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_PhotoCategory
        ): Promise<PhotoCategory[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.photocategory.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged photocategory:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_PhotoCategory)
        * @returns 记录数量
        */
        Count: async (args?: filtered_PhotoCategory): Promise<number> => {
            try {
                return await prisma.photocategory.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting photocategory:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: PhotoCategory_uniqueKey; data: PhotoCategory_without_PKs }): Promise<PhotoCategory | null> => {
            try {
                return await prisma.photocategory.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating photocategory:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: PhotoCategory_uniqueKey): Promise<PhotoCategory | null> => {
            try {
                return await prisma.photocategory.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting photocategory:`, error);
                return null;
            }
        },  },
  photocollection: {
    /**
        * 创建photocollection记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: PhotoCollection): Promise<PhotoCollection | null> => {
            try {
                return await prisma.photocollection.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating photocollection:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: PhotoCollection_uniqueKey): Promise<PhotoCollection | null> => {
            try {
                return await prisma.photocollection.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting photocollection:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_PhotoCollection)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_PhotoCollection): Promise<PhotoCollection[]> => {
            try {
                return await prisma.photocollection.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all photocollection:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_PhotoCollection)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_PhotoCollection
        ): Promise<PhotoCollection[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.photocollection.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged photocollection:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_PhotoCollection)
        * @returns 记录数量
        */
        Count: async (args?: filtered_PhotoCollection): Promise<number> => {
            try {
                return await prisma.photocollection.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting photocollection:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: PhotoCollection_uniqueKey; data: PhotoCollection_without_PKs }): Promise<PhotoCollection | null> => {
            try {
                return await prisma.photocollection.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating photocollection:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: PhotoCollection_uniqueKey): Promise<PhotoCollection | null> => {
            try {
                return await prisma.photocollection.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting photocollection:`, error);
                return null;
            }
        },  },
  servicepackage: {
    /**
        * 创建servicepackage记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: ServicePackage): Promise<ServicePackage | null> => {
            try {
                return await prisma.servicepackage.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating servicepackage:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: ServicePackage_uniqueKey): Promise<ServicePackage | null> => {
            try {
                return await prisma.servicepackage.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting servicepackage:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_ServicePackage)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_ServicePackage): Promise<ServicePackage[]> => {
            try {
                return await prisma.servicepackage.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all servicepackage:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_ServicePackage)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_ServicePackage
        ): Promise<ServicePackage[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.servicepackage.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged servicepackage:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_ServicePackage)
        * @returns 记录数量
        */
        Count: async (args?: filtered_ServicePackage): Promise<number> => {
            try {
                return await prisma.servicepackage.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting servicepackage:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: ServicePackage_uniqueKey; data: ServicePackage_without_PKs }): Promise<ServicePackage | null> => {
            try {
                return await prisma.servicepackage.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating servicepackage:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: ServicePackage_uniqueKey): Promise<ServicePackage | null> => {
            try {
                return await prisma.servicepackage.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting servicepackage:`, error);
                return null;
            }
        },  },
  photographywork: {
    /**
        * 创建photographywork记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: PhotographyWork): Promise<PhotographyWork | null> => {
            try {
                return await prisma.photographywork.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating photographywork:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: PhotographyWork_uniqueKey): Promise<PhotographyWork | null> => {
            try {
                return await prisma.photographywork.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting photographywork:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_PhotographyWork)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_PhotographyWork): Promise<PhotographyWork[]> => {
            try {
                return await prisma.photographywork.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all photographywork:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_PhotographyWork)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_PhotographyWork
        ): Promise<PhotographyWork[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.photographywork.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged photographywork:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_PhotographyWork)
        * @returns 记录数量
        */
        Count: async (args?: filtered_PhotographyWork): Promise<number> => {
            try {
                return await prisma.photographywork.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting photographywork:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: PhotographyWork_uniqueKey; data: PhotographyWork_without_PKs }): Promise<PhotographyWork | null> => {
            try {
                return await prisma.photographywork.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating photographywork:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: PhotographyWork_uniqueKey): Promise<PhotographyWork | null> => {
            try {
                return await prisma.photographywork.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting photographywork:`, error);
                return null;
            }
        },  },
  commissioninquiry: {
    /**
        * 创建commissioninquiry记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: CommissionInquiry): Promise<CommissionInquiry | null> => {
            try {
                return await prisma.commissioninquiry.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating commissioninquiry:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: CommissionInquiry_uniqueKey): Promise<CommissionInquiry | null> => {
            try {
                return await prisma.commissioninquiry.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting commissioninquiry:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_CommissionInquiry)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_CommissionInquiry): Promise<CommissionInquiry[]> => {
            try {
                return await prisma.commissioninquiry.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all commissioninquiry:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_CommissionInquiry)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_CommissionInquiry
        ): Promise<CommissionInquiry[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.commissioninquiry.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged commissioninquiry:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_CommissionInquiry)
        * @returns 记录数量
        */
        Count: async (args?: filtered_CommissionInquiry): Promise<number> => {
            try {
                return await prisma.commissioninquiry.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting commissioninquiry:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: CommissionInquiry_uniqueKey; data: CommissionInquiry_without_PKs }): Promise<CommissionInquiry | null> => {
            try {
                return await prisma.commissioninquiry.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating commissioninquiry:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: CommissionInquiry_uniqueKey): Promise<CommissionInquiry | null> => {
            try {
                return await prisma.commissioninquiry.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting commissioninquiry:`, error);
                return null;
            }
        },  },
  exhibitionrecord: {
    /**
        * 创建exhibitionrecord记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: ExhibitionRecord): Promise<ExhibitionRecord | null> => {
            try {
                return await prisma.exhibitionrecord.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating exhibitionrecord:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: ExhibitionRecord_uniqueKey): Promise<ExhibitionRecord | null> => {
            try {
                return await prisma.exhibitionrecord.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting exhibitionrecord:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_ExhibitionRecord)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_ExhibitionRecord): Promise<ExhibitionRecord[]> => {
            try {
                return await prisma.exhibitionrecord.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all exhibitionrecord:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_ExhibitionRecord)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_ExhibitionRecord
        ): Promise<ExhibitionRecord[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.exhibitionrecord.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged exhibitionrecord:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_ExhibitionRecord)
        * @returns 记录数量
        */
        Count: async (args?: filtered_ExhibitionRecord): Promise<number> => {
            try {
                return await prisma.exhibitionrecord.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting exhibitionrecord:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: ExhibitionRecord_uniqueKey; data: ExhibitionRecord_without_PKs }): Promise<ExhibitionRecord | null> => {
            try {
                return await prisma.exhibitionrecord.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating exhibitionrecord:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: ExhibitionRecord_uniqueKey): Promise<ExhibitionRecord | null> => {
            try {
                return await prisma.exhibitionrecord.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting exhibitionrecord:`, error);
                return null;
            }
        },  },
  clienttestimonial: {
    /**
        * 创建clienttestimonial记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: ClientTestimonial): Promise<ClientTestimonial | null> => {
            try {
                return await prisma.clienttestimonial.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating clienttestimonial:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: ClientTestimonial_uniqueKey): Promise<ClientTestimonial | null> => {
            try {
                return await prisma.clienttestimonial.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting clienttestimonial:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_ClientTestimonial)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_ClientTestimonial): Promise<ClientTestimonial[]> => {
            try {
                return await prisma.clienttestimonial.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all clienttestimonial:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_ClientTestimonial)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_ClientTestimonial
        ): Promise<ClientTestimonial[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.clienttestimonial.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged clienttestimonial:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_ClientTestimonial)
        * @returns 记录数量
        */
        Count: async (args?: filtered_ClientTestimonial): Promise<number> => {
            try {
                return await prisma.clienttestimonial.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting clienttestimonial:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: ClientTestimonial_uniqueKey; data: ClientTestimonial_without_PKs }): Promise<ClientTestimonial | null> => {
            try {
                return await prisma.clienttestimonial.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating clienttestimonial:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: ClientTestimonial_uniqueKey): Promise<ClientTestimonial | null> => {
            try {
                return await prisma.clienttestimonial.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting clienttestimonial:`, error);
                return null;
            }
        },  },
  studiobio: {
    /**
        * 创建studiobio记录
        * @param data 包含所有字段的数据 (包括手动设置的主键)
        * @returns 创建的记录或null
        */
        Create: async (data: StudioBio): Promise<StudioBio | null> => {
            try {
                return await prisma.studiobio.create({
                    data: data 
                });
            } catch (error) {
                console.error(`Error creating studiobio:`, error);
                return null;
            }
        },

    /**
        * 根据主键获取记录
        * @param args 主键参数
        * @returns 记录或null
        */
        Get: async (args: StudioBio_uniqueKey): Promise<StudioBio | null> => {
            try {
                return await prisma.studiobio.findUnique({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error getting studiobio:`, error);
                return null;
            }
        },

    /**
        * 获取所有记录
        * @param args 可选筛选条件 (类型: filtered_StudioBio)
        * @returns 记录数组
        */
        GetAll: async (args?: filtered_StudioBio): Promise<StudioBio[]> => {
            try {
                return await prisma.studiobio.findMany({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error getting all studiobio:`, error);
                return [];
            }
        },

    /**
        * 分页获取记录
        * @param pageNumber 页码 (默认 1)
        * @param pageSize 每页大小 (默认 10)
        * @param args 可选筛选条件 (类型: filtered_StudioBio)
        * @returns 分页记录数组
        */
        GetPage: async (
            pageNumber: number = 1,
            pageSize: number = 10,
            args?: filtered_StudioBio
        ): Promise<StudioBio[]> => {
            try {
                const skip = (pageNumber - 1) * pageSize;
                return await prisma.studiobio.findMany({
                    where: args as any, 
                    skip,
                    take: pageSize,
                });
            } catch (error) {
                console.error(`Error getting paged studiobio:`, error);
                return [];
            }
        },

    /**
        * 统计记录数
        * @param args 可选筛选条件 (类型: filtered_StudioBio)
        * @returns 记录数量
        */
        Count: async (args?: filtered_StudioBio): Promise<number> => {
            try {
                return await prisma.studiobio.count({
                    where: args as any, 
                });
            } catch (error) {
                console.error(`Error counting studiobio:`, error);
                return 0;
            }
        },

    /**
        * 更新记录
        * @param args 包含主键 (where) 和更新数据 (data)
        * @returns 更新后的记录或null
        */
        Update: async (args: { where: StudioBio_uniqueKey; data: StudioBio_without_PKs }): Promise<StudioBio | null> => {
            try {
                return await prisma.studiobio.update({
                    where: { id: args.where.id },
                    data: args.data 
                });
            } catch (error) {
                console.error(`Error updating studiobio:`, error);
                return null;
            }
        },

    /**
        * 删除记录
        * @param args 主键参数
        * @returns 删除的记录或null
        */
        Delete: async (args: StudioBio_uniqueKey): Promise<StudioBio | null> => {
            try {
                return await prisma.studiobio.delete({
                    where: { id: args.id },
                });
            } catch (error) {
                console.error(`Error deleting studiobio:`, error);
                return null;
            }
        },  },
};
