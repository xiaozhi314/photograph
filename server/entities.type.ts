export type AccountRole = 'CLIENT' | 'CURATOR_ADMIN';

export type AspectOrientation = 'PORTRAIT' | 'LANDSCAPE';

export type ServiceType = 'ARCHITECTURAL_MONOGRAPH' | 'EDITORIAL_PORTRAITURE' | 'COMMERCIAL_CAMPAIGN' | 'PRINT_ACQUISITION';

export type ProjectType = 'EDITORIAL' | 'PORTRAIT' | 'COMMERCIAL' | 'ACQUISITION';

export type InquiryStatus = 'NEW' | 'IN_REVIEW' | 'REPLIED';

export type ExhibitionType = 'SOLO_EXHIBITION' | 'INSTITUTIONAL' | 'BIENNIAL' | 'MONOGRAPH';

export type AccountUser_uniqueKey = {
  id: string; // Unique Key
};

export type AccountUser_without_PKs = {
  username: string;
  email: string;
  passwordHash: string;
  fullName: string;
  role: AccountRole;
  avatarUrl?: string | null;
  phone?: string | null;
  organization?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type AccountUser = AccountUser_uniqueKey & AccountUser_without_PKs;



export type PhotoCategory_uniqueKey = {
  id: string; // Unique Key
};

export type PhotoCategory_without_PKs = {
  slug: string;
  name: string;
  description?: string | null;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PhotoCategory = PhotoCategory_uniqueKey & PhotoCategory_without_PKs;



export type PhotoCollection_uniqueKey = {
  id: string; // Unique Key
};

export type PhotoCollection_without_PKs = {
  title: string;
  rollNumber: string;
  medium: string;
  curatorNote: string;
  aspect: AspectOrientation;
  aspectRatioClass: string;
  coverImage?: string | null;
  imageCount: number;
  isVisible: boolean;
  featuredOnHome: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PhotoCollection = PhotoCollection_uniqueKey & PhotoCollection_without_PKs;



export type ServicePackage_uniqueKey = {
  id: string; // Unique Key
};

export type ServicePackage_without_PKs = {
  title: string;
  serviceType: ServiceType;
  basePrice: number;
  priceDisplay: string;
  durationEstimate: string;
  deliverables: any; /// Scope deliverables included in this service package tier /// ![Array<string>]
  isActive: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ServicePackage = ServicePackage_uniqueKey & ServicePackage_without_PKs;



export type PhotographyWork_uniqueKey = {
  id: string; // Unique Key
};

export type PhotographyWork_without_PKs = {
  title: string;
  categoryId: string; // Foreign Key to PhotoCategory.id
  collectionId?: string | null; //FK → PhotoCollection.id
  seriesName: string;
  location: string;
  year: number;
  medium: string;
  edition: string;
  aspectRatio: AspectOrientation;
  statement: string;
  imageUrl: string;
  isFeatured: boolean;
  isArchived: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PhotographyWork = PhotographyWork_uniqueKey & PhotographyWork_without_PKs;



export type CommissionInquiry_uniqueKey = {
  id: string; // Unique Key
};

export type CommissionInquiry_without_PKs = {
  clientId: string; // Foreign Key to AccountUser.id
  servicePackageId?: string | null; //FK → ServicePackage.id
  clientName: string;
  clientEmail: string;
  organization?: string | null;
  projectType: ProjectType;
  budgetTier: string;
  projectBrief: string;
  clientMessage?: string | null;
  targetTimeline: string;
  location?: string | null;
  status: InquiryStatus;
  curatorReply?: string | null;
  repliedAt?: string | null;
  repliedById?: string | null; //FK → AccountUser.id
  createdAt: Date;
  updatedAt: Date;
};

export type CommissionInquiry = CommissionInquiry_uniqueKey & CommissionInquiry_without_PKs;



export type ExhibitionRecord_uniqueKey = {
  id: string; // Unique Key
};

export type ExhibitionRecord_without_PKs = {
  title: string;
  institution: string;
  city: string;
  year: number;
  exhibitionType: ExhibitionType;
  pressMention: string;
  externalUrl?: string | null;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ExhibitionRecord = ExhibitionRecord_uniqueKey & ExhibitionRecord_without_PKs;



export type ClientTestimonial_uniqueKey = {
  id: string; // Unique Key
};

export type ClientTestimonial_without_PKs = {
  clientId?: string | null; //FK → AccountUser.id
  clientName: string;
  clientTitle: string;
  organization: string;
  quote: string;
  serviceType: ProjectType;
  rating: number;
  avatarImage?: string | null;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ClientTestimonial = ClientTestimonial_uniqueKey & ClientTestimonial_without_PKs;



export type StudioBio_uniqueKey = {
  id: string; // Unique Key
};

export type StudioBio_without_PKs = {
  artistName: string;
  studioName: string;
  philosophyQuote: string;
  bioStatement: string;
  portraitImage?: string | null;
  atelierLocation: string;
  activeRepresentation: string;
  createdAt: Date;
  updatedAt: Date;
};

export type StudioBio = StudioBio_uniqueKey & StudioBio_without_PKs;




export type StringFilter = {
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  equals?: string;
  in?: string[];
  notIn?: string[];
  not?: string | StringFilter;
};

export type NumberFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  not?: number | NumberFilter;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
};

export type DateFilter = {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  not?: Date | DateFilter;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
};

export type AccountRoleFilter = {
  equals?: AccountRole;
  in?: AccountRole[];
  notIn?: AccountRole[];
  not?: AccountRole | AccountRoleFilter;
};

export type AspectOrientationFilter = {
  equals?: AspectOrientation;
  in?: AspectOrientation[];
  notIn?: AspectOrientation[];
  not?: AspectOrientation | AspectOrientationFilter;
};

export type ServiceTypeFilter = {
  equals?: ServiceType;
  in?: ServiceType[];
  notIn?: ServiceType[];
  not?: ServiceType | ServiceTypeFilter;
};

export type ProjectTypeFilter = {
  equals?: ProjectType;
  in?: ProjectType[];
  notIn?: ProjectType[];
  not?: ProjectType | ProjectTypeFilter;
};

export type InquiryStatusFilter = {
  equals?: InquiryStatus;
  in?: InquiryStatus[];
  notIn?: InquiryStatus[];
  not?: InquiryStatus | InquiryStatusFilter;
};

export type ExhibitionTypeFilter = {
  equals?: ExhibitionType;
  in?: ExhibitionType[];
  notIn?: ExhibitionType[];
  not?: ExhibitionType | ExhibitionTypeFilter;
};

export type filtered_AccountUser = {
  id?: string | StringFilter | null;
  username?: string | StringFilter | null;
  email?: string | StringFilter | null;
  passwordHash?: string | StringFilter | null;
  fullName?: string | StringFilter | null;
  role?: AccountRole | AccountRoleFilter | null;
  avatarUrl?: string | StringFilter | null;
  phone?: string | StringFilter | null;
  organization?: string | StringFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_PhotoCategory = {
  id?: string | StringFilter | null;
  slug?: string | StringFilter | null;
  name?: string | StringFilter | null;
  description?: string | StringFilter | null;
  sortOrder?: number | NumberFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_PhotoCollection = {
  id?: string | StringFilter | null;
  title?: string | StringFilter | null;
  rollNumber?: string | StringFilter | null;
  medium?: string | StringFilter | null;
  curatorNote?: string | StringFilter | null;
  aspect?: AspectOrientation | AspectOrientationFilter | null;
  aspectRatioClass?: string | StringFilter | null;
  coverImage?: string | StringFilter | null;
  imageCount?: number | NumberFilter | null;
  isVisible?: boolean | null;
  featuredOnHome?: boolean | null;
  sortOrder?: number | NumberFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_ServicePackage = {
  id?: string | StringFilter | null;
  title?: string | StringFilter | null;
  serviceType?: ServiceType | ServiceTypeFilter | null;
  basePrice?: number | NumberFilter | null;
  priceDisplay?: string | StringFilter | null;
  durationEstimate?: string | StringFilter | null;
  deliverables?: any | null; /// Scope deliverables included in this service package tier /// ![Array<string>]
  isActive?: boolean | null;
  sortOrder?: number | NumberFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_PhotographyWork = {
  id?: string | StringFilter | null;
  title?: string | StringFilter | null;
  categoryId?: string | StringFilter | null; // Foreign Key to PhotoCategory.id
  collectionId?: string | StringFilter | null; //FK → PhotoCollection.id
  seriesName?: string | StringFilter | null;
  location?: string | StringFilter | null;
  year?: number | NumberFilter | null;
  medium?: string | StringFilter | null;
  edition?: string | StringFilter | null;
  aspectRatio?: AspectOrientation | AspectOrientationFilter | null;
  statement?: string | StringFilter | null;
  imageUrl?: string | StringFilter | null;
  isFeatured?: boolean | null;
  isArchived?: boolean | null;
  sortOrder?: number | NumberFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_CommissionInquiry = {
  id?: string | StringFilter | null;
  clientId?: string | StringFilter | null; // Foreign Key to AccountUser.id
  servicePackageId?: string | StringFilter | null; //FK → ServicePackage.id
  clientName?: string | StringFilter | null;
  clientEmail?: string | StringFilter | null;
  organization?: string | StringFilter | null;
  projectType?: ProjectType | ProjectTypeFilter | null;
  budgetTier?: string | StringFilter | null;
  projectBrief?: string | StringFilter | null;
  clientMessage?: string | StringFilter | null;
  targetTimeline?: string | StringFilter | null;
  location?: string | StringFilter | null;
  status?: InquiryStatus | InquiryStatusFilter | null;
  curatorReply?: string | StringFilter | null;
  repliedAt?: string | StringFilter | null;
  repliedById?: string | StringFilter | null; //FK → AccountUser.id
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_ExhibitionRecord = {
  id?: string | StringFilter | null;
  title?: string | StringFilter | null;
  institution?: string | StringFilter | null;
  city?: string | StringFilter | null;
  year?: number | NumberFilter | null;
  exhibitionType?: ExhibitionType | ExhibitionTypeFilter | null;
  pressMention?: string | StringFilter | null;
  externalUrl?: string | StringFilter | null;
  sortOrder?: number | NumberFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_ClientTestimonial = {
  id?: string | StringFilter | null;
  clientId?: string | StringFilter | null; //FK → AccountUser.id
  clientName?: string | StringFilter | null;
  clientTitle?: string | StringFilter | null;
  organization?: string | StringFilter | null;
  quote?: string | StringFilter | null;
  serviceType?: ProjectType | ProjectTypeFilter | null;
  rating?: number | NumberFilter | null;
  avatarImage?: string | StringFilter | null;
  isFeatured?: boolean | null;
  sortOrder?: number | NumberFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type filtered_StudioBio = {
  id?: string | StringFilter | null;
  artistName?: string | StringFilter | null;
  studioName?: string | StringFilter | null;
  philosophyQuote?: string | StringFilter | null;
  bioStatement?: string | StringFilter | null;
  portraitImage?: string | StringFilter | null;
  atelierLocation?: string | StringFilter | null;
  activeRepresentation?: string | StringFilter | null;
  createdAt?: Date | DateFilter | null;
  updatedAt?: Date | DateFilter | null;
};

export type Entities = {
  accountuser: {
    Create(data: AccountUser): Promise<AccountUser | null>;
    Get(args: AccountUser_uniqueKey): Promise<AccountUser | null>;
    GetAll(args?: filtered_AccountUser): Promise<AccountUser[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_AccountUser): Promise<AccountUser[]>;
    Count(args?: filtered_AccountUser): Promise<number>;
    Update(args: { where: AccountUser_uniqueKey; data: AccountUser_without_PKs }): Promise<AccountUser | null>;
    Delete(args: AccountUser_uniqueKey): Promise<AccountUser | null>;
  };
  photocategory: {
    Create(data: PhotoCategory): Promise<PhotoCategory | null>;
    Get(args: PhotoCategory_uniqueKey): Promise<PhotoCategory | null>;
    GetAll(args?: filtered_PhotoCategory): Promise<PhotoCategory[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_PhotoCategory): Promise<PhotoCategory[]>;
    Count(args?: filtered_PhotoCategory): Promise<number>;
    Update(args: { where: PhotoCategory_uniqueKey; data: PhotoCategory_without_PKs }): Promise<PhotoCategory | null>;
    Delete(args: PhotoCategory_uniqueKey): Promise<PhotoCategory | null>;
  };
  photocollection: {
    Create(data: PhotoCollection): Promise<PhotoCollection | null>;
    Get(args: PhotoCollection_uniqueKey): Promise<PhotoCollection | null>;
    GetAll(args?: filtered_PhotoCollection): Promise<PhotoCollection[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_PhotoCollection): Promise<PhotoCollection[]>;
    Count(args?: filtered_PhotoCollection): Promise<number>;
    Update(args: { where: PhotoCollection_uniqueKey; data: PhotoCollection_without_PKs }): Promise<PhotoCollection | null>;
    Delete(args: PhotoCollection_uniqueKey): Promise<PhotoCollection | null>;
  };
  servicepackage: {
    Create(data: ServicePackage): Promise<ServicePackage | null>;
    Get(args: ServicePackage_uniqueKey): Promise<ServicePackage | null>;
    GetAll(args?: filtered_ServicePackage): Promise<ServicePackage[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_ServicePackage): Promise<ServicePackage[]>;
    Count(args?: filtered_ServicePackage): Promise<number>;
    Update(args: { where: ServicePackage_uniqueKey; data: ServicePackage_without_PKs }): Promise<ServicePackage | null>;
    Delete(args: ServicePackage_uniqueKey): Promise<ServicePackage | null>;
  };
  photographywork: {
    Create(data: PhotographyWork): Promise<PhotographyWork | null>;
    Get(args: PhotographyWork_uniqueKey): Promise<PhotographyWork | null>;
    GetAll(args?: filtered_PhotographyWork): Promise<PhotographyWork[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_PhotographyWork): Promise<PhotographyWork[]>;
    Count(args?: filtered_PhotographyWork): Promise<number>;
    Update(args: { where: PhotographyWork_uniqueKey; data: PhotographyWork_without_PKs }): Promise<PhotographyWork | null>;
    Delete(args: PhotographyWork_uniqueKey): Promise<PhotographyWork | null>;
  };
  commissioninquiry: {
    Create(data: CommissionInquiry): Promise<CommissionInquiry | null>;
    Get(args: CommissionInquiry_uniqueKey): Promise<CommissionInquiry | null>;
    GetAll(args?: filtered_CommissionInquiry): Promise<CommissionInquiry[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_CommissionInquiry): Promise<CommissionInquiry[]>;
    Count(args?: filtered_CommissionInquiry): Promise<number>;
    Update(args: { where: CommissionInquiry_uniqueKey; data: CommissionInquiry_without_PKs }): Promise<CommissionInquiry | null>;
    Delete(args: CommissionInquiry_uniqueKey): Promise<CommissionInquiry | null>;
  };
  exhibitionrecord: {
    Create(data: ExhibitionRecord): Promise<ExhibitionRecord | null>;
    Get(args: ExhibitionRecord_uniqueKey): Promise<ExhibitionRecord | null>;
    GetAll(args?: filtered_ExhibitionRecord): Promise<ExhibitionRecord[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_ExhibitionRecord): Promise<ExhibitionRecord[]>;
    Count(args?: filtered_ExhibitionRecord): Promise<number>;
    Update(args: { where: ExhibitionRecord_uniqueKey; data: ExhibitionRecord_without_PKs }): Promise<ExhibitionRecord | null>;
    Delete(args: ExhibitionRecord_uniqueKey): Promise<ExhibitionRecord | null>;
  };
  clienttestimonial: {
    Create(data: ClientTestimonial): Promise<ClientTestimonial | null>;
    Get(args: ClientTestimonial_uniqueKey): Promise<ClientTestimonial | null>;
    GetAll(args?: filtered_ClientTestimonial): Promise<ClientTestimonial[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_ClientTestimonial): Promise<ClientTestimonial[]>;
    Count(args?: filtered_ClientTestimonial): Promise<number>;
    Update(args: { where: ClientTestimonial_uniqueKey; data: ClientTestimonial_without_PKs }): Promise<ClientTestimonial | null>;
    Delete(args: ClientTestimonial_uniqueKey): Promise<ClientTestimonial | null>;
  };
  studiobio: {
    Create(data: StudioBio): Promise<StudioBio | null>;
    Get(args: StudioBio_uniqueKey): Promise<StudioBio | null>;
    GetAll(args?: filtered_StudioBio): Promise<StudioBio[]>;
    GetPage(pageNumber?: number, pageSize?: number, args?: filtered_StudioBio): Promise<StudioBio[]>;
    Count(args?: filtered_StudioBio): Promise<number>;
    Update(args: { where: StudioBio_uniqueKey; data: StudioBio_without_PKs }): Promise<StudioBio | null>;
    Delete(args: StudioBio_uniqueKey): Promise<StudioBio | null>;
  };
};

