
/**
 * Client
**/


declare global {
  namespace PrismaJson {
    // This namespace will always be empty. Definitions should be done by
    // you manually, and merged automatically by typescript. Make sure that
    // your declaration merging file is included in your tsconfig.json
    //
    // Learn more: https://github.com/arthurfiorette/prisma-json-types-generator/issues/143
    // Declaration Merging: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
  }
}

/** A filter to be used against nullable List types. */
export type NullableListFilter<T> = {
  equals?: T | T[] | null;
  has?: T | null;
  hasEvery?: T[];
  hasSome?: T[];
  isEmpty?: boolean;
};

/** A type to determine how to update a json field */
export type UpdateInput<T> = T extends object ? { [P in keyof T]?: UpdateInput<T[P]> } : T;

/** A type to determine how to update a json[] field */
export type UpdateManyInput<T> = T | T[] | { set?: T[]; push?: T | T[] };

/** A type to determine how to create a json[] input */
export type CreateManyInput<T> = T | T[] | { set?: T[] };

/**
 * A typed version of NestedStringFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedNestedStringFilter<S extends string> =
  //@ts-ignore - When Prisma.StringFilter is not present, this type is not used
  Prisma.StringFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringFilter<S> | S;
  };

/**
 * A typed version of StringFilter, allowing narrowing of string types to discriminated
 * unions.
 */
export type TypedStringFilter<S extends string> =
  //@ts-ignore - When Prisma.StringFilter is not present, this type is not used
  Prisma.StringFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringFilter<S> | S;
  };

/**
 * A typed version of NestedStringNullableFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedNestedStringNullableFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableFilter is not present, this type is not used
  Prisma.StringNullableFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableFilter<S> | S | null;
  };

/**
 * A typed version of StringNullableFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringNullableFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableFilter is not present, this type is not used
  Prisma.StringNullableFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableFilter<S> | S | null;
  };

/**
 * A typed version of NestedStringWithAggregatesFilter, allowing narrowing of string types
 * to discriminated unions.
 */
export type TypedNestedStringWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.NestedStringWithAggregatesFilter is not present, this type is not used
  Prisma.NestedStringWithAggregatesFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringWithAggregatesFilter<S> | S;
  };

/**
 * A typed version of StringWithAggregatesFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.StringWithAggregatesFilter is not present, this type is not used
  Prisma.StringWithAggregatesFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringWithAggregatesFilter<S> | S;
  };

/**
 * A typed version of NestedStringNullableWithAggregatesFilter, allowing narrowing of
 * string types to discriminated unions.
 */
export type TypedNestedStringNullableWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.NestedStringNullableWithAggregatesFilter is not present, this type is not used
  Prisma.NestedStringNullableWithAggregatesFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableWithAggregatesFilter<S> | S | null;
  };

/**
 * A typed version of StringNullableWithAggregatesFilter, allowing narrowing of string
 * types to discriminated unions.
 */
export type TypedStringNullableWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableWithAggregatesFilter is not present, this type is not used
  Prisma.StringNullableWithAggregatesFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableWithAggregatesFilter<S> | S | null;
  };

/**
 * A typed version of StringFieldUpdateOperationsInput, allowing narrowing of string types
 * to discriminated unions.
 */
export type TypedStringFieldUpdateOperationsInput<S extends string> =
  //@ts-ignore - When Prisma.StringFieldUpdateOperationsInput is not present, this type is not used
  Prisma.StringFieldUpdateOperationsInput & {
    set?: S;
  };

/**
 * A typed version of NullableStringFieldUpdateOperationsInput, allowing narrowing of
 * string types to discriminated unions.
 */
export type TypedNullableStringFieldUpdateOperationsInput<S extends string> =
  //@ts-ignore - When Prisma.NullableStringFieldUpdateOperationsInput is not present, this type is not used
  Prisma.NullableStringFieldUpdateOperationsInput & {
    set?: S | null;
  };

/**
 * A typed version of StringNullableListFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringNullableListFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableListFilter is not present, this type is not used
  Prisma.StringNullableListFilter & {
    equals?: S[] | null;
    has?: S | null;
    hasEvery?: S[];
    hasSome?: S[];
  };

/**
 * A typed version of the input type to update a string[] field, allowing narrowing of
 * string types to discriminated unions.
 */
export type UpdateStringArrayInput<S extends string> = {
  set?: S[];
  push?: S | S[];
};

/**
 * A typed version of the input type to create a string[] field, allowing narrowing of
 * string types to discriminated unions.
 */
export type CreateStringArrayInput<S extends string> = {
  set?: S[];
};
import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AccountUser
 * 
 */
export type AccountUser = $Result.DefaultSelection<Prisma.$AccountUserPayload>
/**
 * Model PhotoCategory
 * 
 */
export type PhotoCategory = $Result.DefaultSelection<Prisma.$PhotoCategoryPayload>
/**
 * Model PhotoCollection
 * 
 */
export type PhotoCollection = $Result.DefaultSelection<Prisma.$PhotoCollectionPayload>
/**
 * Model ServicePackage
 * 
 */
export type ServicePackage = $Result.DefaultSelection<Prisma.$ServicePackagePayload>
/**
 * Model PhotographyWork
 * 
 */
export type PhotographyWork = $Result.DefaultSelection<Prisma.$PhotographyWorkPayload>
/**
 * Model CommissionInquiry
 * 
 */
export type CommissionInquiry = $Result.DefaultSelection<Prisma.$CommissionInquiryPayload>
/**
 * Model ExhibitionRecord
 * 
 */
export type ExhibitionRecord = $Result.DefaultSelection<Prisma.$ExhibitionRecordPayload>
/**
 * Model ClientTestimonial
 * 
 */
export type ClientTestimonial = $Result.DefaultSelection<Prisma.$ClientTestimonialPayload>
/**
 * Model StudioBio
 * 
 */
export type StudioBio = $Result.DefaultSelection<Prisma.$StudioBioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountRole: {
  CLIENT: 'CLIENT',
  CURATOR_ADMIN: 'CURATOR_ADMIN'
};

export type AccountRole = (typeof AccountRole)[keyof typeof AccountRole]


export const AspectOrientation: {
  PORTRAIT: 'PORTRAIT',
  LANDSCAPE: 'LANDSCAPE'
};

export type AspectOrientation = (typeof AspectOrientation)[keyof typeof AspectOrientation]


export const ServiceType: {
  ARCHITECTURAL_MONOGRAPH: 'ARCHITECTURAL_MONOGRAPH',
  EDITORIAL_PORTRAITURE: 'EDITORIAL_PORTRAITURE',
  COMMERCIAL_CAMPAIGN: 'COMMERCIAL_CAMPAIGN',
  PRINT_ACQUISITION: 'PRINT_ACQUISITION'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const ProjectType: {
  EDITORIAL: 'EDITORIAL',
  PORTRAIT: 'PORTRAIT',
  COMMERCIAL: 'COMMERCIAL',
  ACQUISITION: 'ACQUISITION'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const InquiryStatus: {
  NEW: 'NEW',
  IN_REVIEW: 'IN_REVIEW',
  REPLIED: 'REPLIED'
};

export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus]


export const ExhibitionType: {
  SOLO_EXHIBITION: 'SOLO_EXHIBITION',
  INSTITUTIONAL: 'INSTITUTIONAL',
  BIENNIAL: 'BIENNIAL',
  MONOGRAPH: 'MONOGRAPH'
};

export type ExhibitionType = (typeof ExhibitionType)[keyof typeof ExhibitionType]

}

export type AccountRole = $Enums.AccountRole

export const AccountRole: typeof $Enums.AccountRole

export type AspectOrientation = $Enums.AspectOrientation

export const AspectOrientation: typeof $Enums.AspectOrientation

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type InquiryStatus = $Enums.InquiryStatus

export const InquiryStatus: typeof $Enums.InquiryStatus

export type ExhibitionType = $Enums.ExhibitionType

export const ExhibitionType: typeof $Enums.ExhibitionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AccountUsers
 * const accountUsers = await prisma.accountUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AccountUsers
   * const accountUsers = await prisma.accountUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.accountUser`: Exposes CRUD operations for the **AccountUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountUsers
    * const accountUsers = await prisma.accountUser.findMany()
    * ```
    */
  get accountUser(): Prisma.AccountUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoCategory`: Exposes CRUD operations for the **PhotoCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoCategories
    * const photoCategories = await prisma.photoCategory.findMany()
    * ```
    */
  get photoCategory(): Prisma.PhotoCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoCollection`: Exposes CRUD operations for the **PhotoCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoCollections
    * const photoCollections = await prisma.photoCollection.findMany()
    * ```
    */
  get photoCollection(): Prisma.PhotoCollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicePackage`: Exposes CRUD operations for the **ServicePackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicePackages
    * const servicePackages = await prisma.servicePackage.findMany()
    * ```
    */
  get servicePackage(): Prisma.ServicePackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photographyWork`: Exposes CRUD operations for the **PhotographyWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotographyWorks
    * const photographyWorks = await prisma.photographyWork.findMany()
    * ```
    */
  get photographyWork(): Prisma.PhotographyWorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commissionInquiry`: Exposes CRUD operations for the **CommissionInquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommissionInquiries
    * const commissionInquiries = await prisma.commissionInquiry.findMany()
    * ```
    */
  get commissionInquiry(): Prisma.CommissionInquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exhibitionRecord`: Exposes CRUD operations for the **ExhibitionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExhibitionRecords
    * const exhibitionRecords = await prisma.exhibitionRecord.findMany()
    * ```
    */
  get exhibitionRecord(): Prisma.ExhibitionRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientTestimonial`: Exposes CRUD operations for the **ClientTestimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientTestimonials
    * const clientTestimonials = await prisma.clientTestimonial.findMany()
    * ```
    */
  get clientTestimonial(): Prisma.ClientTestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studioBio`: Exposes CRUD operations for the **StudioBio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudioBios
    * const studioBios = await prisma.studioBio.findMany()
    * ```
    */
  get studioBio(): Prisma.StudioBioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AccountUser: 'AccountUser',
    PhotoCategory: 'PhotoCategory',
    PhotoCollection: 'PhotoCollection',
    ServicePackage: 'ServicePackage',
    PhotographyWork: 'PhotographyWork',
    CommissionInquiry: 'CommissionInquiry',
    ExhibitionRecord: 'ExhibitionRecord',
    ClientTestimonial: 'ClientTestimonial',
    StudioBio: 'StudioBio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "accountUser" | "photoCategory" | "photoCollection" | "servicePackage" | "photographyWork" | "commissionInquiry" | "exhibitionRecord" | "clientTestimonial" | "studioBio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AccountUser: {
        payload: Prisma.$AccountUserPayload<ExtArgs>
        fields: Prisma.AccountUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>
          }
          findFirst: {
            args: Prisma.AccountUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>
          }
          findMany: {
            args: Prisma.AccountUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>[]
          }
          create: {
            args: Prisma.AccountUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>
          }
          createMany: {
            args: Prisma.AccountUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>
          }
          update: {
            args: Prisma.AccountUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>
          }
          deleteMany: {
            args: Prisma.AccountUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountUserPayload>
          }
          aggregate: {
            args: Prisma.AccountUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountUser>
          }
          groupBy: {
            args: Prisma.AccountUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountUserCountArgs<ExtArgs>
            result: $Utils.Optional<AccountUserCountAggregateOutputType> | number
          }
        }
      }
      PhotoCategory: {
        payload: Prisma.$PhotoCategoryPayload<ExtArgs>
        fields: Prisma.PhotoCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>
          }
          findFirst: {
            args: Prisma.PhotoCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>
          }
          findMany: {
            args: Prisma.PhotoCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>[]
          }
          create: {
            args: Prisma.PhotoCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>
          }
          createMany: {
            args: Prisma.PhotoCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>
          }
          update: {
            args: Prisma.PhotoCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PhotoCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCategoryPayload>
          }
          aggregate: {
            args: Prisma.PhotoCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoCategory>
          }
          groupBy: {
            args: Prisma.PhotoCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCategoryCountAggregateOutputType> | number
          }
        }
      }
      PhotoCollection: {
        payload: Prisma.$PhotoCollectionPayload<ExtArgs>
        fields: Prisma.PhotoCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoCollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoCollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>
          }
          findFirst: {
            args: Prisma.PhotoCollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoCollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>
          }
          findMany: {
            args: Prisma.PhotoCollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>[]
          }
          create: {
            args: Prisma.PhotoCollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>
          }
          createMany: {
            args: Prisma.PhotoCollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoCollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>
          }
          update: {
            args: Prisma.PhotoCollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>
          }
          deleteMany: {
            args: Prisma.PhotoCollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoCollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoCollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCollectionPayload>
          }
          aggregate: {
            args: Prisma.PhotoCollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoCollection>
          }
          groupBy: {
            args: Prisma.PhotoCollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCollectionCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCollectionCountAggregateOutputType> | number
          }
        }
      }
      ServicePackage: {
        payload: Prisma.$ServicePackagePayload<ExtArgs>
        fields: Prisma.ServicePackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicePackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicePackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          findFirst: {
            args: Prisma.ServicePackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicePackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          findMany: {
            args: Prisma.ServicePackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>[]
          }
          create: {
            args: Prisma.ServicePackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          createMany: {
            args: Prisma.ServicePackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicePackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          update: {
            args: Prisma.ServicePackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          deleteMany: {
            args: Prisma.ServicePackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicePackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicePackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePackagePayload>
          }
          aggregate: {
            args: Prisma.ServicePackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicePackage>
          }
          groupBy: {
            args: Prisma.ServicePackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicePackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicePackageCountArgs<ExtArgs>
            result: $Utils.Optional<ServicePackageCountAggregateOutputType> | number
          }
        }
      }
      PhotographyWork: {
        payload: Prisma.$PhotographyWorkPayload<ExtArgs>
        fields: Prisma.PhotographyWorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotographyWorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotographyWorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>
          }
          findFirst: {
            args: Prisma.PhotographyWorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotographyWorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>
          }
          findMany: {
            args: Prisma.PhotographyWorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>[]
          }
          create: {
            args: Prisma.PhotographyWorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>
          }
          createMany: {
            args: Prisma.PhotographyWorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotographyWorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>
          }
          update: {
            args: Prisma.PhotographyWorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>
          }
          deleteMany: {
            args: Prisma.PhotographyWorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotographyWorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotographyWorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotographyWorkPayload>
          }
          aggregate: {
            args: Prisma.PhotographyWorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotographyWork>
          }
          groupBy: {
            args: Prisma.PhotographyWorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotographyWorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotographyWorkCountArgs<ExtArgs>
            result: $Utils.Optional<PhotographyWorkCountAggregateOutputType> | number
          }
        }
      }
      CommissionInquiry: {
        payload: Prisma.$CommissionInquiryPayload<ExtArgs>
        fields: Prisma.CommissionInquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommissionInquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommissionInquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>
          }
          findFirst: {
            args: Prisma.CommissionInquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommissionInquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>
          }
          findMany: {
            args: Prisma.CommissionInquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>[]
          }
          create: {
            args: Prisma.CommissionInquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>
          }
          createMany: {
            args: Prisma.CommissionInquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommissionInquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>
          }
          update: {
            args: Prisma.CommissionInquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>
          }
          deleteMany: {
            args: Prisma.CommissionInquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommissionInquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommissionInquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionInquiryPayload>
          }
          aggregate: {
            args: Prisma.CommissionInquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommissionInquiry>
          }
          groupBy: {
            args: Prisma.CommissionInquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommissionInquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommissionInquiryCountArgs<ExtArgs>
            result: $Utils.Optional<CommissionInquiryCountAggregateOutputType> | number
          }
        }
      }
      ExhibitionRecord: {
        payload: Prisma.$ExhibitionRecordPayload<ExtArgs>
        fields: Prisma.ExhibitionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExhibitionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExhibitionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>
          }
          findFirst: {
            args: Prisma.ExhibitionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExhibitionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>
          }
          findMany: {
            args: Prisma.ExhibitionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>[]
          }
          create: {
            args: Prisma.ExhibitionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>
          }
          createMany: {
            args: Prisma.ExhibitionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExhibitionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>
          }
          update: {
            args: Prisma.ExhibitionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>
          }
          deleteMany: {
            args: Prisma.ExhibitionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExhibitionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExhibitionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionRecordPayload>
          }
          aggregate: {
            args: Prisma.ExhibitionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExhibitionRecord>
          }
          groupBy: {
            args: Prisma.ExhibitionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExhibitionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionRecordCountAggregateOutputType> | number
          }
        }
      }
      ClientTestimonial: {
        payload: Prisma.$ClientTestimonialPayload<ExtArgs>
        fields: Prisma.ClientTestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientTestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientTestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>
          }
          findFirst: {
            args: Prisma.ClientTestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientTestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>
          }
          findMany: {
            args: Prisma.ClientTestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>[]
          }
          create: {
            args: Prisma.ClientTestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>
          }
          createMany: {
            args: Prisma.ClientTestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientTestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>
          }
          update: {
            args: Prisma.ClientTestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>
          }
          deleteMany: {
            args: Prisma.ClientTestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientTestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientTestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTestimonialPayload>
          }
          aggregate: {
            args: Prisma.ClientTestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientTestimonial>
          }
          groupBy: {
            args: Prisma.ClientTestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientTestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientTestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<ClientTestimonialCountAggregateOutputType> | number
          }
        }
      }
      StudioBio: {
        payload: Prisma.$StudioBioPayload<ExtArgs>
        fields: Prisma.StudioBioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudioBioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudioBioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>
          }
          findFirst: {
            args: Prisma.StudioBioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudioBioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>
          }
          findMany: {
            args: Prisma.StudioBioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>[]
          }
          create: {
            args: Prisma.StudioBioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>
          }
          createMany: {
            args: Prisma.StudioBioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudioBioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>
          }
          update: {
            args: Prisma.StudioBioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>
          }
          deleteMany: {
            args: Prisma.StudioBioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudioBioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudioBioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioBioPayload>
          }
          aggregate: {
            args: Prisma.StudioBioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudioBio>
          }
          groupBy: {
            args: Prisma.StudioBioGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudioBioGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudioBioCountArgs<ExtArgs>
            result: $Utils.Optional<StudioBioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    accountUser?: AccountUserOmit
    photoCategory?: PhotoCategoryOmit
    photoCollection?: PhotoCollectionOmit
    servicePackage?: ServicePackageOmit
    photographyWork?: PhotographyWorkOmit
    commissionInquiry?: CommissionInquiryOmit
    exhibitionRecord?: ExhibitionRecordOmit
    clientTestimonial?: ClientTestimonialOmit
    studioBio?: StudioBioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountUserCountOutputType
   */

  export type AccountUserCountOutputType = {
    clientInquiries: number
    curatorReplies: number
    testimonials: number
  }

  export type AccountUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientInquiries?: boolean | AccountUserCountOutputTypeCountClientInquiriesArgs
    curatorReplies?: boolean | AccountUserCountOutputTypeCountCuratorRepliesArgs
    testimonials?: boolean | AccountUserCountOutputTypeCountTestimonialsArgs
  }

  // Custom InputTypes
  /**
   * AccountUserCountOutputType without action
   */
  export type AccountUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUserCountOutputType
     */
    select?: AccountUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountUserCountOutputType without action
   */
  export type AccountUserCountOutputTypeCountClientInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionInquiryWhereInput
  }

  /**
   * AccountUserCountOutputType without action
   */
  export type AccountUserCountOutputTypeCountCuratorRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionInquiryWhereInput
  }

  /**
   * AccountUserCountOutputType without action
   */
  export type AccountUserCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTestimonialWhereInput
  }


  /**
   * Count Type PhotoCategoryCountOutputType
   */

  export type PhotoCategoryCountOutputType = {
    works: number
  }

  export type PhotoCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | PhotoCategoryCountOutputTypeCountWorksArgs
  }

  // Custom InputTypes
  /**
   * PhotoCategoryCountOutputType without action
   */
  export type PhotoCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategoryCountOutputType
     */
    select?: PhotoCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCategoryCountOutputType without action
   */
  export type PhotoCategoryCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotographyWorkWhereInput
  }


  /**
   * Count Type PhotoCollectionCountOutputType
   */

  export type PhotoCollectionCountOutputType = {
    works: number
  }

  export type PhotoCollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | PhotoCollectionCountOutputTypeCountWorksArgs
  }

  // Custom InputTypes
  /**
   * PhotoCollectionCountOutputType without action
   */
  export type PhotoCollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollectionCountOutputType
     */
    select?: PhotoCollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCollectionCountOutputType without action
   */
  export type PhotoCollectionCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotographyWorkWhereInput
  }


  /**
   * Count Type ServicePackageCountOutputType
   */

  export type ServicePackageCountOutputType = {
    inquiries: number
  }

  export type ServicePackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiries?: boolean | ServicePackageCountOutputTypeCountInquiriesArgs
  }

  // Custom InputTypes
  /**
   * ServicePackageCountOutputType without action
   */
  export type ServicePackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackageCountOutputType
     */
    select?: ServicePackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicePackageCountOutputType without action
   */
  export type ServicePackageCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionInquiryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AccountUser
   */

  export type AggregateAccountUser = {
    _count: AccountUserCountAggregateOutputType | null
    _min: AccountUserMinAggregateOutputType | null
    _max: AccountUserMaxAggregateOutputType | null
  }

  export type AccountUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    role: $Enums.AccountRole | null
    avatarUrl: string | null
    phone: string | null
    organization: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    role: $Enums.AccountRole | null
    avatarUrl: string | null
    phone: string | null
    organization: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountUserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    fullName: number
    role: number
    avatarUrl: number
    phone: number
    organization: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountUserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    phone?: true
    organization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountUserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    phone?: true
    organization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountUserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    phone?: true
    organization?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountUser to aggregate.
     */
    where?: AccountUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountUsers to fetch.
     */
    orderBy?: AccountUserOrderByWithRelationInput | AccountUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountUsers
    **/
    _count?: true | AccountUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountUserMaxAggregateInputType
  }

  export type GetAccountUserAggregateType<T extends AccountUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountUser[P]>
      : GetScalarType<T[P], AggregateAccountUser[P]>
  }




  export type AccountUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountUserWhereInput
    orderBy?: AccountUserOrderByWithAggregationInput | AccountUserOrderByWithAggregationInput[]
    by: AccountUserScalarFieldEnum[] | AccountUserScalarFieldEnum
    having?: AccountUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountUserCountAggregateInputType | true
    _min?: AccountUserMinAggregateInputType
    _max?: AccountUserMaxAggregateInputType
  }

  export type AccountUserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.AccountRole
    avatarUrl: string | null
    phone: string | null
    organization: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountUserCountAggregateOutputType | null
    _min: AccountUserMinAggregateOutputType | null
    _max: AccountUserMaxAggregateOutputType | null
  }

  type GetAccountUserGroupByPayload<T extends AccountUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountUserGroupByOutputType[P]>
            : GetScalarType<T[P], AccountUserGroupByOutputType[P]>
        }
      >
    >


  export type AccountUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    phone?: boolean
    organization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientInquiries?: boolean | AccountUser$clientInquiriesArgs<ExtArgs>
    curatorReplies?: boolean | AccountUser$curatorRepliesArgs<ExtArgs>
    testimonials?: boolean | AccountUser$testimonialsArgs<ExtArgs>
    _count?: boolean | AccountUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountUser"]>



  export type AccountUserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    phone?: boolean
    organization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "fullName" | "role" | "avatarUrl" | "phone" | "organization" | "createdAt" | "updatedAt", ExtArgs["result"]["accountUser"]>
  export type AccountUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientInquiries?: boolean | AccountUser$clientInquiriesArgs<ExtArgs>
    curatorReplies?: boolean | AccountUser$curatorRepliesArgs<ExtArgs>
    testimonials?: boolean | AccountUser$testimonialsArgs<ExtArgs>
    _count?: boolean | AccountUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountUser"
    objects: {
      clientInquiries: Prisma.$CommissionInquiryPayload<ExtArgs>[]
      curatorReplies: Prisma.$CommissionInquiryPayload<ExtArgs>[]
      testimonials: Prisma.$ClientTestimonialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      fullName: string
      role: $Enums.AccountRole
      avatarUrl: string | null
      phone: string | null
      organization: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountUser"]>
    composites: {}
  }

  type AccountUserGetPayload<S extends boolean | null | undefined | AccountUserDefaultArgs> = $Result.GetResult<Prisma.$AccountUserPayload, S>

  type AccountUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountUserCountAggregateInputType | true
    }

  export interface AccountUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountUser'], meta: { name: 'AccountUser' } }
    /**
     * Find zero or one AccountUser that matches the filter.
     * @param {AccountUserFindUniqueArgs} args - Arguments to find a AccountUser
     * @example
     * // Get one AccountUser
     * const accountUser = await prisma.accountUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountUserFindUniqueArgs>(args: SelectSubset<T, AccountUserFindUniqueArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountUserFindUniqueOrThrowArgs} args - Arguments to find a AccountUser
     * @example
     * // Get one AccountUser
     * const accountUser = await prisma.accountUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserFindFirstArgs} args - Arguments to find a AccountUser
     * @example
     * // Get one AccountUser
     * const accountUser = await prisma.accountUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountUserFindFirstArgs>(args?: SelectSubset<T, AccountUserFindFirstArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserFindFirstOrThrowArgs} args - Arguments to find a AccountUser
     * @example
     * // Get one AccountUser
     * const accountUser = await prisma.accountUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountUsers
     * const accountUsers = await prisma.accountUser.findMany()
     * 
     * // Get first 10 AccountUsers
     * const accountUsers = await prisma.accountUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountUserWithIdOnly = await prisma.accountUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountUserFindManyArgs>(args?: SelectSubset<T, AccountUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountUser.
     * @param {AccountUserCreateArgs} args - Arguments to create a AccountUser.
     * @example
     * // Create one AccountUser
     * const AccountUser = await prisma.accountUser.create({
     *   data: {
     *     // ... data to create a AccountUser
     *   }
     * })
     * 
     */
    create<T extends AccountUserCreateArgs>(args: SelectSubset<T, AccountUserCreateArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountUsers.
     * @param {AccountUserCreateManyArgs} args - Arguments to create many AccountUsers.
     * @example
     * // Create many AccountUsers
     * const accountUser = await prisma.accountUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountUserCreateManyArgs>(args?: SelectSubset<T, AccountUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountUser.
     * @param {AccountUserDeleteArgs} args - Arguments to delete one AccountUser.
     * @example
     * // Delete one AccountUser
     * const AccountUser = await prisma.accountUser.delete({
     *   where: {
     *     // ... filter to delete one AccountUser
     *   }
     * })
     * 
     */
    delete<T extends AccountUserDeleteArgs>(args: SelectSubset<T, AccountUserDeleteArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountUser.
     * @param {AccountUserUpdateArgs} args - Arguments to update one AccountUser.
     * @example
     * // Update one AccountUser
     * const accountUser = await prisma.accountUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUserUpdateArgs>(args: SelectSubset<T, AccountUserUpdateArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountUsers.
     * @param {AccountUserDeleteManyArgs} args - Arguments to filter AccountUsers to delete.
     * @example
     * // Delete a few AccountUsers
     * const { count } = await prisma.accountUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountUserDeleteManyArgs>(args?: SelectSubset<T, AccountUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountUsers
     * const accountUser = await prisma.accountUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUserUpdateManyArgs>(args: SelectSubset<T, AccountUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountUser.
     * @param {AccountUserUpsertArgs} args - Arguments to update or create a AccountUser.
     * @example
     * // Update or create a AccountUser
     * const accountUser = await prisma.accountUser.upsert({
     *   create: {
     *     // ... data to create a AccountUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountUser we want to update
     *   }
     * })
     */
    upsert<T extends AccountUserUpsertArgs>(args: SelectSubset<T, AccountUserUpsertArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserCountArgs} args - Arguments to filter AccountUsers to count.
     * @example
     * // Count the number of AccountUsers
     * const count = await prisma.accountUser.count({
     *   where: {
     *     // ... the filter for the AccountUsers we want to count
     *   }
     * })
    **/
    count<T extends AccountUserCountArgs>(
      args?: Subset<T, AccountUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountUserAggregateArgs>(args: Subset<T, AccountUserAggregateArgs>): Prisma.PrismaPromise<GetAccountUserAggregateType<T>>

    /**
     * Group by AccountUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountUserGroupByArgs['orderBy'] }
        : { orderBy?: AccountUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountUser model
   */
  readonly fields: AccountUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientInquiries<T extends AccountUser$clientInquiriesArgs<ExtArgs> = {}>(args?: Subset<T, AccountUser$clientInquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curatorReplies<T extends AccountUser$curatorRepliesArgs<ExtArgs> = {}>(args?: Subset<T, AccountUser$curatorRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testimonials<T extends AccountUser$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, AccountUser$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountUser model
   */
  interface AccountUserFieldRefs {
    readonly id: FieldRef<"AccountUser", 'String'>
    readonly username: FieldRef<"AccountUser", 'String'>
    readonly email: FieldRef<"AccountUser", 'String'>
    readonly passwordHash: FieldRef<"AccountUser", 'String'>
    readonly fullName: FieldRef<"AccountUser", 'String'>
    readonly role: FieldRef<"AccountUser", 'AccountRole'>
    readonly avatarUrl: FieldRef<"AccountUser", 'String'>
    readonly phone: FieldRef<"AccountUser", 'String'>
    readonly organization: FieldRef<"AccountUser", 'String'>
    readonly createdAt: FieldRef<"AccountUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountUser findUnique
   */
  export type AccountUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * Filter, which AccountUser to fetch.
     */
    where: AccountUserWhereUniqueInput
  }

  /**
   * AccountUser findUniqueOrThrow
   */
  export type AccountUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * Filter, which AccountUser to fetch.
     */
    where: AccountUserWhereUniqueInput
  }

  /**
   * AccountUser findFirst
   */
  export type AccountUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * Filter, which AccountUser to fetch.
     */
    where?: AccountUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountUsers to fetch.
     */
    orderBy?: AccountUserOrderByWithRelationInput | AccountUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountUsers.
     */
    cursor?: AccountUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountUsers.
     */
    distinct?: AccountUserScalarFieldEnum | AccountUserScalarFieldEnum[]
  }

  /**
   * AccountUser findFirstOrThrow
   */
  export type AccountUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * Filter, which AccountUser to fetch.
     */
    where?: AccountUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountUsers to fetch.
     */
    orderBy?: AccountUserOrderByWithRelationInput | AccountUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountUsers.
     */
    cursor?: AccountUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountUsers.
     */
    distinct?: AccountUserScalarFieldEnum | AccountUserScalarFieldEnum[]
  }

  /**
   * AccountUser findMany
   */
  export type AccountUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * Filter, which AccountUsers to fetch.
     */
    where?: AccountUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountUsers to fetch.
     */
    orderBy?: AccountUserOrderByWithRelationInput | AccountUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountUsers.
     */
    cursor?: AccountUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountUsers.
     */
    skip?: number
    distinct?: AccountUserScalarFieldEnum | AccountUserScalarFieldEnum[]
  }

  /**
   * AccountUser create
   */
  export type AccountUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountUser.
     */
    data: XOR<AccountUserCreateInput, AccountUserUncheckedCreateInput>
  }

  /**
   * AccountUser createMany
   */
  export type AccountUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountUsers.
     */
    data: AccountUserCreateManyInput | AccountUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountUser update
   */
  export type AccountUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountUser.
     */
    data: XOR<AccountUserUpdateInput, AccountUserUncheckedUpdateInput>
    /**
     * Choose, which AccountUser to update.
     */
    where: AccountUserWhereUniqueInput
  }

  /**
   * AccountUser updateMany
   */
  export type AccountUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountUsers.
     */
    data: XOR<AccountUserUpdateManyMutationInput, AccountUserUncheckedUpdateManyInput>
    /**
     * Filter which AccountUsers to update
     */
    where?: AccountUserWhereInput
    /**
     * Limit how many AccountUsers to update.
     */
    limit?: number
  }

  /**
   * AccountUser upsert
   */
  export type AccountUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountUser to update in case it exists.
     */
    where: AccountUserWhereUniqueInput
    /**
     * In case the AccountUser found by the `where` argument doesn't exist, create a new AccountUser with this data.
     */
    create: XOR<AccountUserCreateInput, AccountUserUncheckedCreateInput>
    /**
     * In case the AccountUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUserUpdateInput, AccountUserUncheckedUpdateInput>
  }

  /**
   * AccountUser delete
   */
  export type AccountUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    /**
     * Filter which AccountUser to delete.
     */
    where: AccountUserWhereUniqueInput
  }

  /**
   * AccountUser deleteMany
   */
  export type AccountUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountUsers to delete
     */
    where?: AccountUserWhereInput
    /**
     * Limit how many AccountUsers to delete.
     */
    limit?: number
  }

  /**
   * AccountUser.clientInquiries
   */
  export type AccountUser$clientInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    where?: CommissionInquiryWhereInput
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    cursor?: CommissionInquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionInquiryScalarFieldEnum | CommissionInquiryScalarFieldEnum[]
  }

  /**
   * AccountUser.curatorReplies
   */
  export type AccountUser$curatorRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    where?: CommissionInquiryWhereInput
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    cursor?: CommissionInquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionInquiryScalarFieldEnum | CommissionInquiryScalarFieldEnum[]
  }

  /**
   * AccountUser.testimonials
   */
  export type AccountUser$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    where?: ClientTestimonialWhereInput
    orderBy?: ClientTestimonialOrderByWithRelationInput | ClientTestimonialOrderByWithRelationInput[]
    cursor?: ClientTestimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientTestimonialScalarFieldEnum | ClientTestimonialScalarFieldEnum[]
  }

  /**
   * AccountUser without action
   */
  export type AccountUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
  }


  /**
   * Model PhotoCategory
   */

  export type AggregatePhotoCategory = {
    _count: PhotoCategoryCountAggregateOutputType | null
    _avg: PhotoCategoryAvgAggregateOutputType | null
    _sum: PhotoCategorySumAggregateOutputType | null
    _min: PhotoCategoryMinAggregateOutputType | null
    _max: PhotoCategoryMaxAggregateOutputType | null
  }

  export type PhotoCategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PhotoCategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PhotoCategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoCategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoCategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotoCategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type PhotoCategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type PhotoCategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoCategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoCategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotoCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoCategory to aggregate.
     */
    where?: PhotoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCategories to fetch.
     */
    orderBy?: PhotoCategoryOrderByWithRelationInput | PhotoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoCategories
    **/
    _count?: true | PhotoCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoCategoryMaxAggregateInputType
  }

  export type GetPhotoCategoryAggregateType<T extends PhotoCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoCategory[P]>
      : GetScalarType<T[P], AggregatePhotoCategory[P]>
  }




  export type PhotoCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoCategoryWhereInput
    orderBy?: PhotoCategoryOrderByWithAggregationInput | PhotoCategoryOrderByWithAggregationInput[]
    by: PhotoCategoryScalarFieldEnum[] | PhotoCategoryScalarFieldEnum
    having?: PhotoCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCategoryCountAggregateInputType | true
    _avg?: PhotoCategoryAvgAggregateInputType
    _sum?: PhotoCategorySumAggregateInputType
    _min?: PhotoCategoryMinAggregateInputType
    _max?: PhotoCategoryMaxAggregateInputType
  }

  export type PhotoCategoryGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: PhotoCategoryCountAggregateOutputType | null
    _avg: PhotoCategoryAvgAggregateOutputType | null
    _sum: PhotoCategorySumAggregateOutputType | null
    _min: PhotoCategoryMinAggregateOutputType | null
    _max: PhotoCategoryMaxAggregateOutputType | null
  }

  type GetPhotoCategoryGroupByPayload<T extends PhotoCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PhotoCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    works?: boolean | PhotoCategory$worksArgs<ExtArgs>
    _count?: boolean | PhotoCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoCategory"]>



  export type PhotoCategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotoCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["photoCategory"]>
  export type PhotoCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | PhotoCategory$worksArgs<ExtArgs>
    _count?: boolean | PhotoCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhotoCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoCategory"
    objects: {
      works: Prisma.$PhotographyWorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photoCategory"]>
    composites: {}
  }

  type PhotoCategoryGetPayload<S extends boolean | null | undefined | PhotoCategoryDefaultArgs> = $Result.GetResult<Prisma.$PhotoCategoryPayload, S>

  type PhotoCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCategoryCountAggregateInputType | true
    }

  export interface PhotoCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoCategory'], meta: { name: 'PhotoCategory' } }
    /**
     * Find zero or one PhotoCategory that matches the filter.
     * @param {PhotoCategoryFindUniqueArgs} args - Arguments to find a PhotoCategory
     * @example
     * // Get one PhotoCategory
     * const photoCategory = await prisma.photoCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoCategoryFindUniqueArgs>(args: SelectSubset<T, PhotoCategoryFindUniqueArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoCategoryFindUniqueOrThrowArgs} args - Arguments to find a PhotoCategory
     * @example
     * // Get one PhotoCategory
     * const photoCategory = await prisma.photoCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryFindFirstArgs} args - Arguments to find a PhotoCategory
     * @example
     * // Get one PhotoCategory
     * const photoCategory = await prisma.photoCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoCategoryFindFirstArgs>(args?: SelectSubset<T, PhotoCategoryFindFirstArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryFindFirstOrThrowArgs} args - Arguments to find a PhotoCategory
     * @example
     * // Get one PhotoCategory
     * const photoCategory = await prisma.photoCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoCategories
     * const photoCategories = await prisma.photoCategory.findMany()
     * 
     * // Get first 10 PhotoCategories
     * const photoCategories = await prisma.photoCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoCategoryWithIdOnly = await prisma.photoCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoCategoryFindManyArgs>(args?: SelectSubset<T, PhotoCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoCategory.
     * @param {PhotoCategoryCreateArgs} args - Arguments to create a PhotoCategory.
     * @example
     * // Create one PhotoCategory
     * const PhotoCategory = await prisma.photoCategory.create({
     *   data: {
     *     // ... data to create a PhotoCategory
     *   }
     * })
     * 
     */
    create<T extends PhotoCategoryCreateArgs>(args: SelectSubset<T, PhotoCategoryCreateArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoCategories.
     * @param {PhotoCategoryCreateManyArgs} args - Arguments to create many PhotoCategories.
     * @example
     * // Create many PhotoCategories
     * const photoCategory = await prisma.photoCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCategoryCreateManyArgs>(args?: SelectSubset<T, PhotoCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhotoCategory.
     * @param {PhotoCategoryDeleteArgs} args - Arguments to delete one PhotoCategory.
     * @example
     * // Delete one PhotoCategory
     * const PhotoCategory = await prisma.photoCategory.delete({
     *   where: {
     *     // ... filter to delete one PhotoCategory
     *   }
     * })
     * 
     */
    delete<T extends PhotoCategoryDeleteArgs>(args: SelectSubset<T, PhotoCategoryDeleteArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoCategory.
     * @param {PhotoCategoryUpdateArgs} args - Arguments to update one PhotoCategory.
     * @example
     * // Update one PhotoCategory
     * const photoCategory = await prisma.photoCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoCategoryUpdateArgs>(args: SelectSubset<T, PhotoCategoryUpdateArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoCategories.
     * @param {PhotoCategoryDeleteManyArgs} args - Arguments to filter PhotoCategories to delete.
     * @example
     * // Delete a few PhotoCategories
     * const { count } = await prisma.photoCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoCategoryDeleteManyArgs>(args?: SelectSubset<T, PhotoCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoCategories
     * const photoCategory = await prisma.photoCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoCategoryUpdateManyArgs>(args: SelectSubset<T, PhotoCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotoCategory.
     * @param {PhotoCategoryUpsertArgs} args - Arguments to update or create a PhotoCategory.
     * @example
     * // Update or create a PhotoCategory
     * const photoCategory = await prisma.photoCategory.upsert({
     *   create: {
     *     // ... data to create a PhotoCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoCategory we want to update
     *   }
     * })
     */
    upsert<T extends PhotoCategoryUpsertArgs>(args: SelectSubset<T, PhotoCategoryUpsertArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryCountArgs} args - Arguments to filter PhotoCategories to count.
     * @example
     * // Count the number of PhotoCategories
     * const count = await prisma.photoCategory.count({
     *   where: {
     *     // ... the filter for the PhotoCategories we want to count
     *   }
     * })
    **/
    count<T extends PhotoCategoryCountArgs>(
      args?: Subset<T, PhotoCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoCategoryAggregateArgs>(args: Subset<T, PhotoCategoryAggregateArgs>): Prisma.PrismaPromise<GetPhotoCategoryAggregateType<T>>

    /**
     * Group by PhotoCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PhotoCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoCategory model
   */
  readonly fields: PhotoCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends PhotoCategory$worksArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCategory$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoCategory model
   */
  interface PhotoCategoryFieldRefs {
    readonly id: FieldRef<"PhotoCategory", 'String'>
    readonly slug: FieldRef<"PhotoCategory", 'String'>
    readonly name: FieldRef<"PhotoCategory", 'String'>
    readonly description: FieldRef<"PhotoCategory", 'String'>
    readonly sortOrder: FieldRef<"PhotoCategory", 'Int'>
    readonly createdAt: FieldRef<"PhotoCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotoCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotoCategory findUnique
   */
  export type PhotoCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCategory to fetch.
     */
    where: PhotoCategoryWhereUniqueInput
  }

  /**
   * PhotoCategory findUniqueOrThrow
   */
  export type PhotoCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCategory to fetch.
     */
    where: PhotoCategoryWhereUniqueInput
  }

  /**
   * PhotoCategory findFirst
   */
  export type PhotoCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCategory to fetch.
     */
    where?: PhotoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCategories to fetch.
     */
    orderBy?: PhotoCategoryOrderByWithRelationInput | PhotoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoCategories.
     */
    cursor?: PhotoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoCategories.
     */
    distinct?: PhotoCategoryScalarFieldEnum | PhotoCategoryScalarFieldEnum[]
  }

  /**
   * PhotoCategory findFirstOrThrow
   */
  export type PhotoCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCategory to fetch.
     */
    where?: PhotoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCategories to fetch.
     */
    orderBy?: PhotoCategoryOrderByWithRelationInput | PhotoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoCategories.
     */
    cursor?: PhotoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoCategories.
     */
    distinct?: PhotoCategoryScalarFieldEnum | PhotoCategoryScalarFieldEnum[]
  }

  /**
   * PhotoCategory findMany
   */
  export type PhotoCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCategories to fetch.
     */
    where?: PhotoCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCategories to fetch.
     */
    orderBy?: PhotoCategoryOrderByWithRelationInput | PhotoCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoCategories.
     */
    cursor?: PhotoCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCategories.
     */
    skip?: number
    distinct?: PhotoCategoryScalarFieldEnum | PhotoCategoryScalarFieldEnum[]
  }

  /**
   * PhotoCategory create
   */
  export type PhotoCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoCategory.
     */
    data: XOR<PhotoCategoryCreateInput, PhotoCategoryUncheckedCreateInput>
  }

  /**
   * PhotoCategory createMany
   */
  export type PhotoCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoCategories.
     */
    data: PhotoCategoryCreateManyInput | PhotoCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoCategory update
   */
  export type PhotoCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoCategory.
     */
    data: XOR<PhotoCategoryUpdateInput, PhotoCategoryUncheckedUpdateInput>
    /**
     * Choose, which PhotoCategory to update.
     */
    where: PhotoCategoryWhereUniqueInput
  }

  /**
   * PhotoCategory updateMany
   */
  export type PhotoCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoCategories.
     */
    data: XOR<PhotoCategoryUpdateManyMutationInput, PhotoCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PhotoCategories to update
     */
    where?: PhotoCategoryWhereInput
    /**
     * Limit how many PhotoCategories to update.
     */
    limit?: number
  }

  /**
   * PhotoCategory upsert
   */
  export type PhotoCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoCategory to update in case it exists.
     */
    where: PhotoCategoryWhereUniqueInput
    /**
     * In case the PhotoCategory found by the `where` argument doesn't exist, create a new PhotoCategory with this data.
     */
    create: XOR<PhotoCategoryCreateInput, PhotoCategoryUncheckedCreateInput>
    /**
     * In case the PhotoCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoCategoryUpdateInput, PhotoCategoryUncheckedUpdateInput>
  }

  /**
   * PhotoCategory delete
   */
  export type PhotoCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
    /**
     * Filter which PhotoCategory to delete.
     */
    where: PhotoCategoryWhereUniqueInput
  }

  /**
   * PhotoCategory deleteMany
   */
  export type PhotoCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoCategories to delete
     */
    where?: PhotoCategoryWhereInput
    /**
     * Limit how many PhotoCategories to delete.
     */
    limit?: number
  }

  /**
   * PhotoCategory.works
   */
  export type PhotoCategory$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    where?: PhotographyWorkWhereInput
    orderBy?: PhotographyWorkOrderByWithRelationInput | PhotographyWorkOrderByWithRelationInput[]
    cursor?: PhotographyWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotographyWorkScalarFieldEnum | PhotographyWorkScalarFieldEnum[]
  }

  /**
   * PhotoCategory without action
   */
  export type PhotoCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCategory
     */
    select?: PhotoCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCategory
     */
    omit?: PhotoCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCategoryInclude<ExtArgs> | null
  }


  /**
   * Model PhotoCollection
   */

  export type AggregatePhotoCollection = {
    _count: PhotoCollectionCountAggregateOutputType | null
    _avg: PhotoCollectionAvgAggregateOutputType | null
    _sum: PhotoCollectionSumAggregateOutputType | null
    _min: PhotoCollectionMinAggregateOutputType | null
    _max: PhotoCollectionMaxAggregateOutputType | null
  }

  export type PhotoCollectionAvgAggregateOutputType = {
    imageCount: number | null
    sortOrder: number | null
  }

  export type PhotoCollectionSumAggregateOutputType = {
    imageCount: number | null
    sortOrder: number | null
  }

  export type PhotoCollectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    rollNumber: string | null
    medium: string | null
    curatorNote: string | null
    aspect: $Enums.AspectOrientation | null
    aspectRatioClass: string | null
    coverImage: string | null
    imageCount: number | null
    isVisible: boolean | null
    featuredOnHome: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoCollectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    rollNumber: string | null
    medium: string | null
    curatorNote: string | null
    aspect: $Enums.AspectOrientation | null
    aspectRatioClass: string | null
    coverImage: string | null
    imageCount: number | null
    isVisible: boolean | null
    featuredOnHome: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoCollectionCountAggregateOutputType = {
    id: number
    title: number
    rollNumber: number
    medium: number
    curatorNote: number
    aspect: number
    aspectRatioClass: number
    coverImage: number
    imageCount: number
    isVisible: number
    featuredOnHome: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotoCollectionAvgAggregateInputType = {
    imageCount?: true
    sortOrder?: true
  }

  export type PhotoCollectionSumAggregateInputType = {
    imageCount?: true
    sortOrder?: true
  }

  export type PhotoCollectionMinAggregateInputType = {
    id?: true
    title?: true
    rollNumber?: true
    medium?: true
    curatorNote?: true
    aspect?: true
    aspectRatioClass?: true
    coverImage?: true
    imageCount?: true
    isVisible?: true
    featuredOnHome?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoCollectionMaxAggregateInputType = {
    id?: true
    title?: true
    rollNumber?: true
    medium?: true
    curatorNote?: true
    aspect?: true
    aspectRatioClass?: true
    coverImage?: true
    imageCount?: true
    isVisible?: true
    featuredOnHome?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoCollectionCountAggregateInputType = {
    id?: true
    title?: true
    rollNumber?: true
    medium?: true
    curatorNote?: true
    aspect?: true
    aspectRatioClass?: true
    coverImage?: true
    imageCount?: true
    isVisible?: true
    featuredOnHome?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotoCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoCollection to aggregate.
     */
    where?: PhotoCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCollections to fetch.
     */
    orderBy?: PhotoCollectionOrderByWithRelationInput | PhotoCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoCollections
    **/
    _count?: true | PhotoCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoCollectionMaxAggregateInputType
  }

  export type GetPhotoCollectionAggregateType<T extends PhotoCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoCollection[P]>
      : GetScalarType<T[P], AggregatePhotoCollection[P]>
  }




  export type PhotoCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoCollectionWhereInput
    orderBy?: PhotoCollectionOrderByWithAggregationInput | PhotoCollectionOrderByWithAggregationInput[]
    by: PhotoCollectionScalarFieldEnum[] | PhotoCollectionScalarFieldEnum
    having?: PhotoCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCollectionCountAggregateInputType | true
    _avg?: PhotoCollectionAvgAggregateInputType
    _sum?: PhotoCollectionSumAggregateInputType
    _min?: PhotoCollectionMinAggregateInputType
    _max?: PhotoCollectionMaxAggregateInputType
  }

  export type PhotoCollectionGroupByOutputType = {
    id: string
    title: string
    rollNumber: string
    medium: string
    curatorNote: string
    aspect: $Enums.AspectOrientation
    aspectRatioClass: string
    coverImage: string | null
    imageCount: number
    isVisible: boolean
    featuredOnHome: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: PhotoCollectionCountAggregateOutputType | null
    _avg: PhotoCollectionAvgAggregateOutputType | null
    _sum: PhotoCollectionSumAggregateOutputType | null
    _min: PhotoCollectionMinAggregateOutputType | null
    _max: PhotoCollectionMaxAggregateOutputType | null
  }

  type GetPhotoCollectionGroupByPayload<T extends PhotoCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoCollectionGroupByOutputType[P]>
        }
      >
    >


  export type PhotoCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rollNumber?: boolean
    medium?: boolean
    curatorNote?: boolean
    aspect?: boolean
    aspectRatioClass?: boolean
    coverImage?: boolean
    imageCount?: boolean
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    works?: boolean | PhotoCollection$worksArgs<ExtArgs>
    _count?: boolean | PhotoCollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoCollection"]>



  export type PhotoCollectionSelectScalar = {
    id?: boolean
    title?: boolean
    rollNumber?: boolean
    medium?: boolean
    curatorNote?: boolean
    aspect?: boolean
    aspectRatioClass?: boolean
    coverImage?: boolean
    imageCount?: boolean
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotoCollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "rollNumber" | "medium" | "curatorNote" | "aspect" | "aspectRatioClass" | "coverImage" | "imageCount" | "isVisible" | "featuredOnHome" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["photoCollection"]>
  export type PhotoCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | PhotoCollection$worksArgs<ExtArgs>
    _count?: boolean | PhotoCollectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhotoCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoCollection"
    objects: {
      works: Prisma.$PhotographyWorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      rollNumber: string
      medium: string
      curatorNote: string
      aspect: $Enums.AspectOrientation
      aspectRatioClass: string
      coverImage: string | null
      imageCount: number
      isVisible: boolean
      featuredOnHome: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photoCollection"]>
    composites: {}
  }

  type PhotoCollectionGetPayload<S extends boolean | null | undefined | PhotoCollectionDefaultArgs> = $Result.GetResult<Prisma.$PhotoCollectionPayload, S>

  type PhotoCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoCollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCollectionCountAggregateInputType | true
    }

  export interface PhotoCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoCollection'], meta: { name: 'PhotoCollection' } }
    /**
     * Find zero or one PhotoCollection that matches the filter.
     * @param {PhotoCollectionFindUniqueArgs} args - Arguments to find a PhotoCollection
     * @example
     * // Get one PhotoCollection
     * const photoCollection = await prisma.photoCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoCollectionFindUniqueArgs>(args: SelectSubset<T, PhotoCollectionFindUniqueArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoCollection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoCollectionFindUniqueOrThrowArgs} args - Arguments to find a PhotoCollection
     * @example
     * // Get one PhotoCollection
     * const photoCollection = await prisma.photoCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoCollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoCollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionFindFirstArgs} args - Arguments to find a PhotoCollection
     * @example
     * // Get one PhotoCollection
     * const photoCollection = await prisma.photoCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoCollectionFindFirstArgs>(args?: SelectSubset<T, PhotoCollectionFindFirstArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionFindFirstOrThrowArgs} args - Arguments to find a PhotoCollection
     * @example
     * // Get one PhotoCollection
     * const photoCollection = await prisma.photoCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoCollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoCollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoCollections
     * const photoCollections = await prisma.photoCollection.findMany()
     * 
     * // Get first 10 PhotoCollections
     * const photoCollections = await prisma.photoCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoCollectionWithIdOnly = await prisma.photoCollection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoCollectionFindManyArgs>(args?: SelectSubset<T, PhotoCollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoCollection.
     * @param {PhotoCollectionCreateArgs} args - Arguments to create a PhotoCollection.
     * @example
     * // Create one PhotoCollection
     * const PhotoCollection = await prisma.photoCollection.create({
     *   data: {
     *     // ... data to create a PhotoCollection
     *   }
     * })
     * 
     */
    create<T extends PhotoCollectionCreateArgs>(args: SelectSubset<T, PhotoCollectionCreateArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoCollections.
     * @param {PhotoCollectionCreateManyArgs} args - Arguments to create many PhotoCollections.
     * @example
     * // Create many PhotoCollections
     * const photoCollection = await prisma.photoCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCollectionCreateManyArgs>(args?: SelectSubset<T, PhotoCollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhotoCollection.
     * @param {PhotoCollectionDeleteArgs} args - Arguments to delete one PhotoCollection.
     * @example
     * // Delete one PhotoCollection
     * const PhotoCollection = await prisma.photoCollection.delete({
     *   where: {
     *     // ... filter to delete one PhotoCollection
     *   }
     * })
     * 
     */
    delete<T extends PhotoCollectionDeleteArgs>(args: SelectSubset<T, PhotoCollectionDeleteArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoCollection.
     * @param {PhotoCollectionUpdateArgs} args - Arguments to update one PhotoCollection.
     * @example
     * // Update one PhotoCollection
     * const photoCollection = await prisma.photoCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoCollectionUpdateArgs>(args: SelectSubset<T, PhotoCollectionUpdateArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoCollections.
     * @param {PhotoCollectionDeleteManyArgs} args - Arguments to filter PhotoCollections to delete.
     * @example
     * // Delete a few PhotoCollections
     * const { count } = await prisma.photoCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoCollectionDeleteManyArgs>(args?: SelectSubset<T, PhotoCollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoCollections
     * const photoCollection = await prisma.photoCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoCollectionUpdateManyArgs>(args: SelectSubset<T, PhotoCollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotoCollection.
     * @param {PhotoCollectionUpsertArgs} args - Arguments to update or create a PhotoCollection.
     * @example
     * // Update or create a PhotoCollection
     * const photoCollection = await prisma.photoCollection.upsert({
     *   create: {
     *     // ... data to create a PhotoCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoCollection we want to update
     *   }
     * })
     */
    upsert<T extends PhotoCollectionUpsertArgs>(args: SelectSubset<T, PhotoCollectionUpsertArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionCountArgs} args - Arguments to filter PhotoCollections to count.
     * @example
     * // Count the number of PhotoCollections
     * const count = await prisma.photoCollection.count({
     *   where: {
     *     // ... the filter for the PhotoCollections we want to count
     *   }
     * })
    **/
    count<T extends PhotoCollectionCountArgs>(
      args?: Subset<T, PhotoCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoCollectionAggregateArgs>(args: Subset<T, PhotoCollectionAggregateArgs>): Prisma.PrismaPromise<GetPhotoCollectionAggregateType<T>>

    /**
     * Group by PhotoCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoCollectionGroupByArgs['orderBy'] }
        : { orderBy?: PhotoCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoCollection model
   */
  readonly fields: PhotoCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends PhotoCollection$worksArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCollection$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoCollection model
   */
  interface PhotoCollectionFieldRefs {
    readonly id: FieldRef<"PhotoCollection", 'String'>
    readonly title: FieldRef<"PhotoCollection", 'String'>
    readonly rollNumber: FieldRef<"PhotoCollection", 'String'>
    readonly medium: FieldRef<"PhotoCollection", 'String'>
    readonly curatorNote: FieldRef<"PhotoCollection", 'String'>
    readonly aspect: FieldRef<"PhotoCollection", 'AspectOrientation'>
    readonly aspectRatioClass: FieldRef<"PhotoCollection", 'String'>
    readonly coverImage: FieldRef<"PhotoCollection", 'String'>
    readonly imageCount: FieldRef<"PhotoCollection", 'Int'>
    readonly isVisible: FieldRef<"PhotoCollection", 'Boolean'>
    readonly featuredOnHome: FieldRef<"PhotoCollection", 'Boolean'>
    readonly sortOrder: FieldRef<"PhotoCollection", 'Int'>
    readonly createdAt: FieldRef<"PhotoCollection", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotoCollection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotoCollection findUnique
   */
  export type PhotoCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCollection to fetch.
     */
    where: PhotoCollectionWhereUniqueInput
  }

  /**
   * PhotoCollection findUniqueOrThrow
   */
  export type PhotoCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCollection to fetch.
     */
    where: PhotoCollectionWhereUniqueInput
  }

  /**
   * PhotoCollection findFirst
   */
  export type PhotoCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCollection to fetch.
     */
    where?: PhotoCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCollections to fetch.
     */
    orderBy?: PhotoCollectionOrderByWithRelationInput | PhotoCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoCollections.
     */
    cursor?: PhotoCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoCollections.
     */
    distinct?: PhotoCollectionScalarFieldEnum | PhotoCollectionScalarFieldEnum[]
  }

  /**
   * PhotoCollection findFirstOrThrow
   */
  export type PhotoCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCollection to fetch.
     */
    where?: PhotoCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCollections to fetch.
     */
    orderBy?: PhotoCollectionOrderByWithRelationInput | PhotoCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoCollections.
     */
    cursor?: PhotoCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoCollections.
     */
    distinct?: PhotoCollectionScalarFieldEnum | PhotoCollectionScalarFieldEnum[]
  }

  /**
   * PhotoCollection findMany
   */
  export type PhotoCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCollections to fetch.
     */
    where?: PhotoCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCollections to fetch.
     */
    orderBy?: PhotoCollectionOrderByWithRelationInput | PhotoCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoCollections.
     */
    cursor?: PhotoCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCollections.
     */
    skip?: number
    distinct?: PhotoCollectionScalarFieldEnum | PhotoCollectionScalarFieldEnum[]
  }

  /**
   * PhotoCollection create
   */
  export type PhotoCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoCollection.
     */
    data: XOR<PhotoCollectionCreateInput, PhotoCollectionUncheckedCreateInput>
  }

  /**
   * PhotoCollection createMany
   */
  export type PhotoCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoCollections.
     */
    data: PhotoCollectionCreateManyInput | PhotoCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoCollection update
   */
  export type PhotoCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoCollection.
     */
    data: XOR<PhotoCollectionUpdateInput, PhotoCollectionUncheckedUpdateInput>
    /**
     * Choose, which PhotoCollection to update.
     */
    where: PhotoCollectionWhereUniqueInput
  }

  /**
   * PhotoCollection updateMany
   */
  export type PhotoCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoCollections.
     */
    data: XOR<PhotoCollectionUpdateManyMutationInput, PhotoCollectionUncheckedUpdateManyInput>
    /**
     * Filter which PhotoCollections to update
     */
    where?: PhotoCollectionWhereInput
    /**
     * Limit how many PhotoCollections to update.
     */
    limit?: number
  }

  /**
   * PhotoCollection upsert
   */
  export type PhotoCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoCollection to update in case it exists.
     */
    where: PhotoCollectionWhereUniqueInput
    /**
     * In case the PhotoCollection found by the `where` argument doesn't exist, create a new PhotoCollection with this data.
     */
    create: XOR<PhotoCollectionCreateInput, PhotoCollectionUncheckedCreateInput>
    /**
     * In case the PhotoCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoCollectionUpdateInput, PhotoCollectionUncheckedUpdateInput>
  }

  /**
   * PhotoCollection delete
   */
  export type PhotoCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    /**
     * Filter which PhotoCollection to delete.
     */
    where: PhotoCollectionWhereUniqueInput
  }

  /**
   * PhotoCollection deleteMany
   */
  export type PhotoCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoCollections to delete
     */
    where?: PhotoCollectionWhereInput
    /**
     * Limit how many PhotoCollections to delete.
     */
    limit?: number
  }

  /**
   * PhotoCollection.works
   */
  export type PhotoCollection$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    where?: PhotographyWorkWhereInput
    orderBy?: PhotographyWorkOrderByWithRelationInput | PhotographyWorkOrderByWithRelationInput[]
    cursor?: PhotographyWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotographyWorkScalarFieldEnum | PhotographyWorkScalarFieldEnum[]
  }

  /**
   * PhotoCollection without action
   */
  export type PhotoCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
  }


  /**
   * Model ServicePackage
   */

  export type AggregateServicePackage = {
    _count: ServicePackageCountAggregateOutputType | null
    _avg: ServicePackageAvgAggregateOutputType | null
    _sum: ServicePackageSumAggregateOutputType | null
    _min: ServicePackageMinAggregateOutputType | null
    _max: ServicePackageMaxAggregateOutputType | null
  }

  export type ServicePackageAvgAggregateOutputType = {
    basePrice: Decimal | null
    sortOrder: number | null
  }

  export type ServicePackageSumAggregateOutputType = {
    basePrice: Decimal | null
    sortOrder: number | null
  }

  export type ServicePackageMinAggregateOutputType = {
    id: string | null
    title: string | null
    serviceType: $Enums.ServiceType | null
    basePrice: Decimal | null
    priceDisplay: string | null
    durationEstimate: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicePackageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    serviceType: $Enums.ServiceType | null
    basePrice: Decimal | null
    priceDisplay: string | null
    durationEstimate: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicePackageCountAggregateOutputType = {
    id: number
    title: number
    serviceType: number
    basePrice: number
    priceDisplay: number
    durationEstimate: number
    deliverables: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicePackageAvgAggregateInputType = {
    basePrice?: true
    sortOrder?: true
  }

  export type ServicePackageSumAggregateInputType = {
    basePrice?: true
    sortOrder?: true
  }

  export type ServicePackageMinAggregateInputType = {
    id?: true
    title?: true
    serviceType?: true
    basePrice?: true
    priceDisplay?: true
    durationEstimate?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicePackageMaxAggregateInputType = {
    id?: true
    title?: true
    serviceType?: true
    basePrice?: true
    priceDisplay?: true
    durationEstimate?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicePackageCountAggregateInputType = {
    id?: true
    title?: true
    serviceType?: true
    basePrice?: true
    priceDisplay?: true
    durationEstimate?: true
    deliverables?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServicePackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePackage to aggregate.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicePackages
    **/
    _count?: true | ServicePackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicePackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicePackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicePackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicePackageMaxAggregateInputType
  }

  export type GetServicePackageAggregateType<T extends ServicePackageAggregateArgs> = {
        [P in keyof T & keyof AggregateServicePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicePackage[P]>
      : GetScalarType<T[P], AggregateServicePackage[P]>
  }




  export type ServicePackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePackageWhereInput
    orderBy?: ServicePackageOrderByWithAggregationInput | ServicePackageOrderByWithAggregationInput[]
    by: ServicePackageScalarFieldEnum[] | ServicePackageScalarFieldEnum
    having?: ServicePackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicePackageCountAggregateInputType | true
    _avg?: ServicePackageAvgAggregateInputType
    _sum?: ServicePackageSumAggregateInputType
    _min?: ServicePackageMinAggregateInputType
    _max?: ServicePackageMaxAggregateInputType
  }

  export type ServicePackageGroupByOutputType = {
    id: string
    title: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal
    priceDisplay: string
    durationEstimate: string
    deliverables:(Array<string>)
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ServicePackageCountAggregateOutputType | null
    _avg: ServicePackageAvgAggregateOutputType | null
    _sum: ServicePackageSumAggregateOutputType | null
    _min: ServicePackageMinAggregateOutputType | null
    _max: ServicePackageMaxAggregateOutputType | null
  }

  type GetServicePackageGroupByPayload<T extends ServicePackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicePackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicePackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicePackageGroupByOutputType[P]>
            : GetScalarType<T[P], ServicePackageGroupByOutputType[P]>
        }
      >
    >


  export type ServicePackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    serviceType?: boolean
    basePrice?: boolean
    priceDisplay?: boolean
    durationEstimate?: boolean
    deliverables?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inquiries?: boolean | ServicePackage$inquiriesArgs<ExtArgs>
    _count?: boolean | ServicePackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePackage"]>



  export type ServicePackageSelectScalar = {
    id?: boolean
    title?: boolean
    serviceType?: boolean
    basePrice?: boolean
    priceDisplay?: boolean
    durationEstimate?: boolean
    deliverables?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServicePackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "serviceType" | "basePrice" | "priceDisplay" | "durationEstimate" | "deliverables" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["servicePackage"]>
  export type ServicePackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiries?: boolean | ServicePackage$inquiriesArgs<ExtArgs>
    _count?: boolean | ServicePackageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicePackage"
    objects: {
      inquiries: Prisma.$CommissionInquiryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      serviceType: $Enums.ServiceType
      basePrice: Prisma.Decimal
      priceDisplay: string
      durationEstimate: string
      /**
       * Scope deliverables included in this service package tier
       * ![Array<string>]
       */
      deliverables:(Array<string>)
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["servicePackage"]>
    composites: {}
  }

  type ServicePackageGetPayload<S extends boolean | null | undefined | ServicePackageDefaultArgs> = $Result.GetResult<Prisma.$ServicePackagePayload, S>

  type ServicePackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicePackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicePackageCountAggregateInputType | true
    }

  export interface ServicePackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicePackage'], meta: { name: 'ServicePackage' } }
    /**
     * Find zero or one ServicePackage that matches the filter.
     * @param {ServicePackageFindUniqueArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicePackageFindUniqueArgs>(args: SelectSubset<T, ServicePackageFindUniqueArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicePackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicePackageFindUniqueOrThrowArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicePackageFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicePackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageFindFirstArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicePackageFindFirstArgs>(args?: SelectSubset<T, ServicePackageFindFirstArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageFindFirstOrThrowArgs} args - Arguments to find a ServicePackage
     * @example
     * // Get one ServicePackage
     * const servicePackage = await prisma.servicePackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicePackageFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicePackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicePackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicePackages
     * const servicePackages = await prisma.servicePackage.findMany()
     * 
     * // Get first 10 ServicePackages
     * const servicePackages = await prisma.servicePackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicePackageWithIdOnly = await prisma.servicePackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicePackageFindManyArgs>(args?: SelectSubset<T, ServicePackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicePackage.
     * @param {ServicePackageCreateArgs} args - Arguments to create a ServicePackage.
     * @example
     * // Create one ServicePackage
     * const ServicePackage = await prisma.servicePackage.create({
     *   data: {
     *     // ... data to create a ServicePackage
     *   }
     * })
     * 
     */
    create<T extends ServicePackageCreateArgs>(args: SelectSubset<T, ServicePackageCreateArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicePackages.
     * @param {ServicePackageCreateManyArgs} args - Arguments to create many ServicePackages.
     * @example
     * // Create many ServicePackages
     * const servicePackage = await prisma.servicePackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicePackageCreateManyArgs>(args?: SelectSubset<T, ServicePackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServicePackage.
     * @param {ServicePackageDeleteArgs} args - Arguments to delete one ServicePackage.
     * @example
     * // Delete one ServicePackage
     * const ServicePackage = await prisma.servicePackage.delete({
     *   where: {
     *     // ... filter to delete one ServicePackage
     *   }
     * })
     * 
     */
    delete<T extends ServicePackageDeleteArgs>(args: SelectSubset<T, ServicePackageDeleteArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicePackage.
     * @param {ServicePackageUpdateArgs} args - Arguments to update one ServicePackage.
     * @example
     * // Update one ServicePackage
     * const servicePackage = await prisma.servicePackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicePackageUpdateArgs>(args: SelectSubset<T, ServicePackageUpdateArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicePackages.
     * @param {ServicePackageDeleteManyArgs} args - Arguments to filter ServicePackages to delete.
     * @example
     * // Delete a few ServicePackages
     * const { count } = await prisma.servicePackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicePackageDeleteManyArgs>(args?: SelectSubset<T, ServicePackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicePackages
     * const servicePackage = await prisma.servicePackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicePackageUpdateManyArgs>(args: SelectSubset<T, ServicePackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServicePackage.
     * @param {ServicePackageUpsertArgs} args - Arguments to update or create a ServicePackage.
     * @example
     * // Update or create a ServicePackage
     * const servicePackage = await prisma.servicePackage.upsert({
     *   create: {
     *     // ... data to create a ServicePackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicePackage we want to update
     *   }
     * })
     */
    upsert<T extends ServicePackageUpsertArgs>(args: SelectSubset<T, ServicePackageUpsertArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageCountArgs} args - Arguments to filter ServicePackages to count.
     * @example
     * // Count the number of ServicePackages
     * const count = await prisma.servicePackage.count({
     *   where: {
     *     // ... the filter for the ServicePackages we want to count
     *   }
     * })
    **/
    count<T extends ServicePackageCountArgs>(
      args?: Subset<T, ServicePackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicePackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicePackageAggregateArgs>(args: Subset<T, ServicePackageAggregateArgs>): Prisma.PrismaPromise<GetServicePackageAggregateType<T>>

    /**
     * Group by ServicePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicePackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicePackageGroupByArgs['orderBy'] }
        : { orderBy?: ServicePackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicePackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicePackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicePackage model
   */
  readonly fields: ServicePackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicePackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicePackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inquiries<T extends ServicePackage$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, ServicePackage$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicePackage model
   */
  interface ServicePackageFieldRefs {
    readonly id: FieldRef<"ServicePackage", 'String'>
    readonly title: FieldRef<"ServicePackage", 'String'>
    readonly serviceType: FieldRef<"ServicePackage", 'ServiceType'>
    readonly basePrice: FieldRef<"ServicePackage", 'Decimal'>
    readonly priceDisplay: FieldRef<"ServicePackage", 'String'>
    readonly durationEstimate: FieldRef<"ServicePackage", 'String'>
    readonly deliverables: FieldRef<"ServicePackage", 'Json'>
    readonly isActive: FieldRef<"ServicePackage", 'Boolean'>
    readonly sortOrder: FieldRef<"ServicePackage", 'Int'>
    readonly createdAt: FieldRef<"ServicePackage", 'DateTime'>
    readonly updatedAt: FieldRef<"ServicePackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicePackage findUnique
   */
  export type ServicePackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage findUniqueOrThrow
   */
  export type ServicePackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage findFirst
   */
  export type ServicePackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePackages.
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePackages.
     */
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * ServicePackage findFirstOrThrow
   */
  export type ServicePackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackage to fetch.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePackages.
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePackages.
     */
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * ServicePackage findMany
   */
  export type ServicePackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter, which ServicePackages to fetch.
     */
    where?: ServicePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePackages to fetch.
     */
    orderBy?: ServicePackageOrderByWithRelationInput | ServicePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicePackages.
     */
    cursor?: ServicePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePackages.
     */
    skip?: number
    distinct?: ServicePackageScalarFieldEnum | ServicePackageScalarFieldEnum[]
  }

  /**
   * ServicePackage create
   */
  export type ServicePackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicePackage.
     */
    data: XOR<ServicePackageCreateInput, ServicePackageUncheckedCreateInput>
  }

  /**
   * ServicePackage createMany
   */
  export type ServicePackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicePackages.
     */
    data: ServicePackageCreateManyInput | ServicePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicePackage update
   */
  export type ServicePackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicePackage.
     */
    data: XOR<ServicePackageUpdateInput, ServicePackageUncheckedUpdateInput>
    /**
     * Choose, which ServicePackage to update.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage updateMany
   */
  export type ServicePackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicePackages.
     */
    data: XOR<ServicePackageUpdateManyMutationInput, ServicePackageUncheckedUpdateManyInput>
    /**
     * Filter which ServicePackages to update
     */
    where?: ServicePackageWhereInput
    /**
     * Limit how many ServicePackages to update.
     */
    limit?: number
  }

  /**
   * ServicePackage upsert
   */
  export type ServicePackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicePackage to update in case it exists.
     */
    where: ServicePackageWhereUniqueInput
    /**
     * In case the ServicePackage found by the `where` argument doesn't exist, create a new ServicePackage with this data.
     */
    create: XOR<ServicePackageCreateInput, ServicePackageUncheckedCreateInput>
    /**
     * In case the ServicePackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicePackageUpdateInput, ServicePackageUncheckedUpdateInput>
  }

  /**
   * ServicePackage delete
   */
  export type ServicePackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    /**
     * Filter which ServicePackage to delete.
     */
    where: ServicePackageWhereUniqueInput
  }

  /**
   * ServicePackage deleteMany
   */
  export type ServicePackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePackages to delete
     */
    where?: ServicePackageWhereInput
    /**
     * Limit how many ServicePackages to delete.
     */
    limit?: number
  }

  /**
   * ServicePackage.inquiries
   */
  export type ServicePackage$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    where?: CommissionInquiryWhereInput
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    cursor?: CommissionInquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionInquiryScalarFieldEnum | CommissionInquiryScalarFieldEnum[]
  }

  /**
   * ServicePackage without action
   */
  export type ServicePackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
  }


  /**
   * Model PhotographyWork
   */

  export type AggregatePhotographyWork = {
    _count: PhotographyWorkCountAggregateOutputType | null
    _avg: PhotographyWorkAvgAggregateOutputType | null
    _sum: PhotographyWorkSumAggregateOutputType | null
    _min: PhotographyWorkMinAggregateOutputType | null
    _max: PhotographyWorkMaxAggregateOutputType | null
  }

  export type PhotographyWorkAvgAggregateOutputType = {
    year: number | null
    sortOrder: number | null
  }

  export type PhotographyWorkSumAggregateOutputType = {
    year: number | null
    sortOrder: number | null
  }

  export type PhotographyWorkMinAggregateOutputType = {
    id: string | null
    title: string | null
    categoryId: string | null
    collectionId: string | null
    seriesName: string | null
    location: string | null
    year: number | null
    medium: string | null
    edition: string | null
    aspectRatio: $Enums.AspectOrientation | null
    statement: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    isArchived: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotographyWorkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    categoryId: string | null
    collectionId: string | null
    seriesName: string | null
    location: string | null
    year: number | null
    medium: string | null
    edition: string | null
    aspectRatio: $Enums.AspectOrientation | null
    statement: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    isArchived: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotographyWorkCountAggregateOutputType = {
    id: number
    title: number
    categoryId: number
    collectionId: number
    seriesName: number
    location: number
    year: number
    medium: number
    edition: number
    aspectRatio: number
    statement: number
    imageUrl: number
    isFeatured: number
    isArchived: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotographyWorkAvgAggregateInputType = {
    year?: true
    sortOrder?: true
  }

  export type PhotographyWorkSumAggregateInputType = {
    year?: true
    sortOrder?: true
  }

  export type PhotographyWorkMinAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    collectionId?: true
    seriesName?: true
    location?: true
    year?: true
    medium?: true
    edition?: true
    aspectRatio?: true
    statement?: true
    imageUrl?: true
    isFeatured?: true
    isArchived?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotographyWorkMaxAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    collectionId?: true
    seriesName?: true
    location?: true
    year?: true
    medium?: true
    edition?: true
    aspectRatio?: true
    statement?: true
    imageUrl?: true
    isFeatured?: true
    isArchived?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotographyWorkCountAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    collectionId?: true
    seriesName?: true
    location?: true
    year?: true
    medium?: true
    edition?: true
    aspectRatio?: true
    statement?: true
    imageUrl?: true
    isFeatured?: true
    isArchived?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotographyWorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotographyWork to aggregate.
     */
    where?: PhotographyWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotographyWorks to fetch.
     */
    orderBy?: PhotographyWorkOrderByWithRelationInput | PhotographyWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotographyWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotographyWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotographyWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotographyWorks
    **/
    _count?: true | PhotographyWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotographyWorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotographyWorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotographyWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotographyWorkMaxAggregateInputType
  }

  export type GetPhotographyWorkAggregateType<T extends PhotographyWorkAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotographyWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotographyWork[P]>
      : GetScalarType<T[P], AggregatePhotographyWork[P]>
  }




  export type PhotographyWorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotographyWorkWhereInput
    orderBy?: PhotographyWorkOrderByWithAggregationInput | PhotographyWorkOrderByWithAggregationInput[]
    by: PhotographyWorkScalarFieldEnum[] | PhotographyWorkScalarFieldEnum
    having?: PhotographyWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotographyWorkCountAggregateInputType | true
    _avg?: PhotographyWorkAvgAggregateInputType
    _sum?: PhotographyWorkSumAggregateInputType
    _min?: PhotographyWorkMinAggregateInputType
    _max?: PhotographyWorkMaxAggregateInputType
  }

  export type PhotographyWorkGroupByOutputType = {
    id: string
    title: string
    categoryId: string
    collectionId: string | null
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured: boolean
    isArchived: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: PhotographyWorkCountAggregateOutputType | null
    _avg: PhotographyWorkAvgAggregateOutputType | null
    _sum: PhotographyWorkSumAggregateOutputType | null
    _min: PhotographyWorkMinAggregateOutputType | null
    _max: PhotographyWorkMaxAggregateOutputType | null
  }

  type GetPhotographyWorkGroupByPayload<T extends PhotographyWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotographyWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotographyWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotographyWorkGroupByOutputType[P]>
            : GetScalarType<T[P], PhotographyWorkGroupByOutputType[P]>
        }
      >
    >


  export type PhotographyWorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryId?: boolean
    collectionId?: boolean
    seriesName?: boolean
    location?: boolean
    year?: boolean
    medium?: boolean
    edition?: boolean
    aspectRatio?: boolean
    statement?: boolean
    imageUrl?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | PhotoCategoryDefaultArgs<ExtArgs>
    collection?: boolean | PhotographyWork$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["photographyWork"]>



  export type PhotographyWorkSelectScalar = {
    id?: boolean
    title?: boolean
    categoryId?: boolean
    collectionId?: boolean
    seriesName?: boolean
    location?: boolean
    year?: boolean
    medium?: boolean
    edition?: boolean
    aspectRatio?: boolean
    statement?: boolean
    imageUrl?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotographyWorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "categoryId" | "collectionId" | "seriesName" | "location" | "year" | "medium" | "edition" | "aspectRatio" | "statement" | "imageUrl" | "isFeatured" | "isArchived" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["photographyWork"]>
  export type PhotographyWorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PhotoCategoryDefaultArgs<ExtArgs>
    collection?: boolean | PhotographyWork$collectionArgs<ExtArgs>
  }

  export type $PhotographyWorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotographyWork"
    objects: {
      category: Prisma.$PhotoCategoryPayload<ExtArgs>
      collection: Prisma.$PhotoCollectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      categoryId: string
      collectionId: string | null
      seriesName: string
      location: string
      year: number
      medium: string
      edition: string
      aspectRatio: $Enums.AspectOrientation
      statement: string
      imageUrl: string
      isFeatured: boolean
      isArchived: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photographyWork"]>
    composites: {}
  }

  type PhotographyWorkGetPayload<S extends boolean | null | undefined | PhotographyWorkDefaultArgs> = $Result.GetResult<Prisma.$PhotographyWorkPayload, S>

  type PhotographyWorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotographyWorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotographyWorkCountAggregateInputType | true
    }

  export interface PhotographyWorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotographyWork'], meta: { name: 'PhotographyWork' } }
    /**
     * Find zero or one PhotographyWork that matches the filter.
     * @param {PhotographyWorkFindUniqueArgs} args - Arguments to find a PhotographyWork
     * @example
     * // Get one PhotographyWork
     * const photographyWork = await prisma.photographyWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotographyWorkFindUniqueArgs>(args: SelectSubset<T, PhotographyWorkFindUniqueArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotographyWork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotographyWorkFindUniqueOrThrowArgs} args - Arguments to find a PhotographyWork
     * @example
     * // Get one PhotographyWork
     * const photographyWork = await prisma.photographyWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotographyWorkFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotographyWorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotographyWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkFindFirstArgs} args - Arguments to find a PhotographyWork
     * @example
     * // Get one PhotographyWork
     * const photographyWork = await prisma.photographyWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotographyWorkFindFirstArgs>(args?: SelectSubset<T, PhotographyWorkFindFirstArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotographyWork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkFindFirstOrThrowArgs} args - Arguments to find a PhotographyWork
     * @example
     * // Get one PhotographyWork
     * const photographyWork = await prisma.photographyWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotographyWorkFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotographyWorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotographyWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotographyWorks
     * const photographyWorks = await prisma.photographyWork.findMany()
     * 
     * // Get first 10 PhotographyWorks
     * const photographyWorks = await prisma.photographyWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photographyWorkWithIdOnly = await prisma.photographyWork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotographyWorkFindManyArgs>(args?: SelectSubset<T, PhotographyWorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotographyWork.
     * @param {PhotographyWorkCreateArgs} args - Arguments to create a PhotographyWork.
     * @example
     * // Create one PhotographyWork
     * const PhotographyWork = await prisma.photographyWork.create({
     *   data: {
     *     // ... data to create a PhotographyWork
     *   }
     * })
     * 
     */
    create<T extends PhotographyWorkCreateArgs>(args: SelectSubset<T, PhotographyWorkCreateArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotographyWorks.
     * @param {PhotographyWorkCreateManyArgs} args - Arguments to create many PhotographyWorks.
     * @example
     * // Create many PhotographyWorks
     * const photographyWork = await prisma.photographyWork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotographyWorkCreateManyArgs>(args?: SelectSubset<T, PhotographyWorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhotographyWork.
     * @param {PhotographyWorkDeleteArgs} args - Arguments to delete one PhotographyWork.
     * @example
     * // Delete one PhotographyWork
     * const PhotographyWork = await prisma.photographyWork.delete({
     *   where: {
     *     // ... filter to delete one PhotographyWork
     *   }
     * })
     * 
     */
    delete<T extends PhotographyWorkDeleteArgs>(args: SelectSubset<T, PhotographyWorkDeleteArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotographyWork.
     * @param {PhotographyWorkUpdateArgs} args - Arguments to update one PhotographyWork.
     * @example
     * // Update one PhotographyWork
     * const photographyWork = await prisma.photographyWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotographyWorkUpdateArgs>(args: SelectSubset<T, PhotographyWorkUpdateArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotographyWorks.
     * @param {PhotographyWorkDeleteManyArgs} args - Arguments to filter PhotographyWorks to delete.
     * @example
     * // Delete a few PhotographyWorks
     * const { count } = await prisma.photographyWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotographyWorkDeleteManyArgs>(args?: SelectSubset<T, PhotographyWorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotographyWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotographyWorks
     * const photographyWork = await prisma.photographyWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotographyWorkUpdateManyArgs>(args: SelectSubset<T, PhotographyWorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotographyWork.
     * @param {PhotographyWorkUpsertArgs} args - Arguments to update or create a PhotographyWork.
     * @example
     * // Update or create a PhotographyWork
     * const photographyWork = await prisma.photographyWork.upsert({
     *   create: {
     *     // ... data to create a PhotographyWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotographyWork we want to update
     *   }
     * })
     */
    upsert<T extends PhotographyWorkUpsertArgs>(args: SelectSubset<T, PhotographyWorkUpsertArgs<ExtArgs>>): Prisma__PhotographyWorkClient<$Result.GetResult<Prisma.$PhotographyWorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotographyWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkCountArgs} args - Arguments to filter PhotographyWorks to count.
     * @example
     * // Count the number of PhotographyWorks
     * const count = await prisma.photographyWork.count({
     *   where: {
     *     // ... the filter for the PhotographyWorks we want to count
     *   }
     * })
    **/
    count<T extends PhotographyWorkCountArgs>(
      args?: Subset<T, PhotographyWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotographyWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotographyWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotographyWorkAggregateArgs>(args: Subset<T, PhotographyWorkAggregateArgs>): Prisma.PrismaPromise<GetPhotographyWorkAggregateType<T>>

    /**
     * Group by PhotographyWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotographyWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotographyWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotographyWorkGroupByArgs['orderBy'] }
        : { orderBy?: PhotographyWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotographyWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotographyWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotographyWork model
   */
  readonly fields: PhotographyWorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotographyWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotographyWorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends PhotoCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCategoryDefaultArgs<ExtArgs>>): Prisma__PhotoCategoryClient<$Result.GetResult<Prisma.$PhotoCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collection<T extends PhotographyWork$collectionArgs<ExtArgs> = {}>(args?: Subset<T, PhotographyWork$collectionArgs<ExtArgs>>): Prisma__PhotoCollectionClient<$Result.GetResult<Prisma.$PhotoCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotographyWork model
   */
  interface PhotographyWorkFieldRefs {
    readonly id: FieldRef<"PhotographyWork", 'String'>
    readonly title: FieldRef<"PhotographyWork", 'String'>
    readonly categoryId: FieldRef<"PhotographyWork", 'String'>
    readonly collectionId: FieldRef<"PhotographyWork", 'String'>
    readonly seriesName: FieldRef<"PhotographyWork", 'String'>
    readonly location: FieldRef<"PhotographyWork", 'String'>
    readonly year: FieldRef<"PhotographyWork", 'Int'>
    readonly medium: FieldRef<"PhotographyWork", 'String'>
    readonly edition: FieldRef<"PhotographyWork", 'String'>
    readonly aspectRatio: FieldRef<"PhotographyWork", 'AspectOrientation'>
    readonly statement: FieldRef<"PhotographyWork", 'String'>
    readonly imageUrl: FieldRef<"PhotographyWork", 'String'>
    readonly isFeatured: FieldRef<"PhotographyWork", 'Boolean'>
    readonly isArchived: FieldRef<"PhotographyWork", 'Boolean'>
    readonly sortOrder: FieldRef<"PhotographyWork", 'Int'>
    readonly createdAt: FieldRef<"PhotographyWork", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotographyWork", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotographyWork findUnique
   */
  export type PhotographyWorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * Filter, which PhotographyWork to fetch.
     */
    where: PhotographyWorkWhereUniqueInput
  }

  /**
   * PhotographyWork findUniqueOrThrow
   */
  export type PhotographyWorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * Filter, which PhotographyWork to fetch.
     */
    where: PhotographyWorkWhereUniqueInput
  }

  /**
   * PhotographyWork findFirst
   */
  export type PhotographyWorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * Filter, which PhotographyWork to fetch.
     */
    where?: PhotographyWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotographyWorks to fetch.
     */
    orderBy?: PhotographyWorkOrderByWithRelationInput | PhotographyWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotographyWorks.
     */
    cursor?: PhotographyWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotographyWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotographyWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotographyWorks.
     */
    distinct?: PhotographyWorkScalarFieldEnum | PhotographyWorkScalarFieldEnum[]
  }

  /**
   * PhotographyWork findFirstOrThrow
   */
  export type PhotographyWorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * Filter, which PhotographyWork to fetch.
     */
    where?: PhotographyWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotographyWorks to fetch.
     */
    orderBy?: PhotographyWorkOrderByWithRelationInput | PhotographyWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotographyWorks.
     */
    cursor?: PhotographyWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotographyWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotographyWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotographyWorks.
     */
    distinct?: PhotographyWorkScalarFieldEnum | PhotographyWorkScalarFieldEnum[]
  }

  /**
   * PhotographyWork findMany
   */
  export type PhotographyWorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * Filter, which PhotographyWorks to fetch.
     */
    where?: PhotographyWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotographyWorks to fetch.
     */
    orderBy?: PhotographyWorkOrderByWithRelationInput | PhotographyWorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotographyWorks.
     */
    cursor?: PhotographyWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotographyWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotographyWorks.
     */
    skip?: number
    distinct?: PhotographyWorkScalarFieldEnum | PhotographyWorkScalarFieldEnum[]
  }

  /**
   * PhotographyWork create
   */
  export type PhotographyWorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotographyWork.
     */
    data: XOR<PhotographyWorkCreateInput, PhotographyWorkUncheckedCreateInput>
  }

  /**
   * PhotographyWork createMany
   */
  export type PhotographyWorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotographyWorks.
     */
    data: PhotographyWorkCreateManyInput | PhotographyWorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotographyWork update
   */
  export type PhotographyWorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotographyWork.
     */
    data: XOR<PhotographyWorkUpdateInput, PhotographyWorkUncheckedUpdateInput>
    /**
     * Choose, which PhotographyWork to update.
     */
    where: PhotographyWorkWhereUniqueInput
  }

  /**
   * PhotographyWork updateMany
   */
  export type PhotographyWorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotographyWorks.
     */
    data: XOR<PhotographyWorkUpdateManyMutationInput, PhotographyWorkUncheckedUpdateManyInput>
    /**
     * Filter which PhotographyWorks to update
     */
    where?: PhotographyWorkWhereInput
    /**
     * Limit how many PhotographyWorks to update.
     */
    limit?: number
  }

  /**
   * PhotographyWork upsert
   */
  export type PhotographyWorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotographyWork to update in case it exists.
     */
    where: PhotographyWorkWhereUniqueInput
    /**
     * In case the PhotographyWork found by the `where` argument doesn't exist, create a new PhotographyWork with this data.
     */
    create: XOR<PhotographyWorkCreateInput, PhotographyWorkUncheckedCreateInput>
    /**
     * In case the PhotographyWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotographyWorkUpdateInput, PhotographyWorkUncheckedUpdateInput>
  }

  /**
   * PhotographyWork delete
   */
  export type PhotographyWorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
    /**
     * Filter which PhotographyWork to delete.
     */
    where: PhotographyWorkWhereUniqueInput
  }

  /**
   * PhotographyWork deleteMany
   */
  export type PhotographyWorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotographyWorks to delete
     */
    where?: PhotographyWorkWhereInput
    /**
     * Limit how many PhotographyWorks to delete.
     */
    limit?: number
  }

  /**
   * PhotographyWork.collection
   */
  export type PhotographyWork$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCollection
     */
    select?: PhotoCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCollection
     */
    omit?: PhotoCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCollectionInclude<ExtArgs> | null
    where?: PhotoCollectionWhereInput
  }

  /**
   * PhotographyWork without action
   */
  export type PhotographyWorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotographyWork
     */
    select?: PhotographyWorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotographyWork
     */
    omit?: PhotographyWorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotographyWorkInclude<ExtArgs> | null
  }


  /**
   * Model CommissionInquiry
   */

  export type AggregateCommissionInquiry = {
    _count: CommissionInquiryCountAggregateOutputType | null
    _min: CommissionInquiryMinAggregateOutputType | null
    _max: CommissionInquiryMaxAggregateOutputType | null
  }

  export type CommissionInquiryMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    servicePackageId: string | null
    clientName: string | null
    clientEmail: string | null
    organization: string | null
    projectType: $Enums.ProjectType | null
    budgetTier: string | null
    projectBrief: string | null
    clientMessage: string | null
    targetTimeline: string | null
    location: string | null
    status: $Enums.InquiryStatus | null
    curatorReply: string | null
    repliedAt: string | null
    repliedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionInquiryMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    servicePackageId: string | null
    clientName: string | null
    clientEmail: string | null
    organization: string | null
    projectType: $Enums.ProjectType | null
    budgetTier: string | null
    projectBrief: string | null
    clientMessage: string | null
    targetTimeline: string | null
    location: string | null
    status: $Enums.InquiryStatus | null
    curatorReply: string | null
    repliedAt: string | null
    repliedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionInquiryCountAggregateOutputType = {
    id: number
    clientId: number
    servicePackageId: number
    clientName: number
    clientEmail: number
    organization: number
    projectType: number
    budgetTier: number
    projectBrief: number
    clientMessage: number
    targetTimeline: number
    location: number
    status: number
    curatorReply: number
    repliedAt: number
    repliedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommissionInquiryMinAggregateInputType = {
    id?: true
    clientId?: true
    servicePackageId?: true
    clientName?: true
    clientEmail?: true
    organization?: true
    projectType?: true
    budgetTier?: true
    projectBrief?: true
    clientMessage?: true
    targetTimeline?: true
    location?: true
    status?: true
    curatorReply?: true
    repliedAt?: true
    repliedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionInquiryMaxAggregateInputType = {
    id?: true
    clientId?: true
    servicePackageId?: true
    clientName?: true
    clientEmail?: true
    organization?: true
    projectType?: true
    budgetTier?: true
    projectBrief?: true
    clientMessage?: true
    targetTimeline?: true
    location?: true
    status?: true
    curatorReply?: true
    repliedAt?: true
    repliedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionInquiryCountAggregateInputType = {
    id?: true
    clientId?: true
    servicePackageId?: true
    clientName?: true
    clientEmail?: true
    organization?: true
    projectType?: true
    budgetTier?: true
    projectBrief?: true
    clientMessage?: true
    targetTimeline?: true
    location?: true
    status?: true
    curatorReply?: true
    repliedAt?: true
    repliedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommissionInquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionInquiry to aggregate.
     */
    where?: CommissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionInquiries to fetch.
     */
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommissionInquiries
    **/
    _count?: true | CommissionInquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommissionInquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommissionInquiryMaxAggregateInputType
  }

  export type GetCommissionInquiryAggregateType<T extends CommissionInquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateCommissionInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommissionInquiry[P]>
      : GetScalarType<T[P], AggregateCommissionInquiry[P]>
  }




  export type CommissionInquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionInquiryWhereInput
    orderBy?: CommissionInquiryOrderByWithAggregationInput | CommissionInquiryOrderByWithAggregationInput[]
    by: CommissionInquiryScalarFieldEnum[] | CommissionInquiryScalarFieldEnum
    having?: CommissionInquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommissionInquiryCountAggregateInputType | true
    _min?: CommissionInquiryMinAggregateInputType
    _max?: CommissionInquiryMaxAggregateInputType
  }

  export type CommissionInquiryGroupByOutputType = {
    id: string
    clientId: string
    servicePackageId: string | null
    clientName: string
    clientEmail: string
    organization: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage: string | null
    targetTimeline: string
    location: string | null
    status: $Enums.InquiryStatus
    curatorReply: string | null
    repliedAt: string | null
    repliedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommissionInquiryCountAggregateOutputType | null
    _min: CommissionInquiryMinAggregateOutputType | null
    _max: CommissionInquiryMaxAggregateOutputType | null
  }

  type GetCommissionInquiryGroupByPayload<T extends CommissionInquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommissionInquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommissionInquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommissionInquiryGroupByOutputType[P]>
            : GetScalarType<T[P], CommissionInquiryGroupByOutputType[P]>
        }
      >
    >


  export type CommissionInquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    servicePackageId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    organization?: boolean
    projectType?: boolean
    budgetTier?: boolean
    projectBrief?: boolean
    clientMessage?: boolean
    targetTimeline?: boolean
    location?: boolean
    status?: boolean
    curatorReply?: boolean
    repliedAt?: boolean
    repliedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | AccountUserDefaultArgs<ExtArgs>
    servicePackage?: boolean | CommissionInquiry$servicePackageArgs<ExtArgs>
    repliedBy?: boolean | CommissionInquiry$repliedByArgs<ExtArgs>
  }, ExtArgs["result"]["commissionInquiry"]>



  export type CommissionInquirySelectScalar = {
    id?: boolean
    clientId?: boolean
    servicePackageId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    organization?: boolean
    projectType?: boolean
    budgetTier?: boolean
    projectBrief?: boolean
    clientMessage?: boolean
    targetTimeline?: boolean
    location?: boolean
    status?: boolean
    curatorReply?: boolean
    repliedAt?: boolean
    repliedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommissionInquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "servicePackageId" | "clientName" | "clientEmail" | "organization" | "projectType" | "budgetTier" | "projectBrief" | "clientMessage" | "targetTimeline" | "location" | "status" | "curatorReply" | "repliedAt" | "repliedById" | "createdAt" | "updatedAt", ExtArgs["result"]["commissionInquiry"]>
  export type CommissionInquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | AccountUserDefaultArgs<ExtArgs>
    servicePackage?: boolean | CommissionInquiry$servicePackageArgs<ExtArgs>
    repliedBy?: boolean | CommissionInquiry$repliedByArgs<ExtArgs>
  }

  export type $CommissionInquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommissionInquiry"
    objects: {
      client: Prisma.$AccountUserPayload<ExtArgs>
      servicePackage: Prisma.$ServicePackagePayload<ExtArgs> | null
      repliedBy: Prisma.$AccountUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      servicePackageId: string | null
      clientName: string
      clientEmail: string
      organization: string | null
      projectType: $Enums.ProjectType
      budgetTier: string
      projectBrief: string
      clientMessage: string | null
      targetTimeline: string
      location: string | null
      status: $Enums.InquiryStatus
      curatorReply: string | null
      repliedAt: string | null
      repliedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commissionInquiry"]>
    composites: {}
  }

  type CommissionInquiryGetPayload<S extends boolean | null | undefined | CommissionInquiryDefaultArgs> = $Result.GetResult<Prisma.$CommissionInquiryPayload, S>

  type CommissionInquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommissionInquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommissionInquiryCountAggregateInputType | true
    }

  export interface CommissionInquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommissionInquiry'], meta: { name: 'CommissionInquiry' } }
    /**
     * Find zero or one CommissionInquiry that matches the filter.
     * @param {CommissionInquiryFindUniqueArgs} args - Arguments to find a CommissionInquiry
     * @example
     * // Get one CommissionInquiry
     * const commissionInquiry = await prisma.commissionInquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommissionInquiryFindUniqueArgs>(args: SelectSubset<T, CommissionInquiryFindUniqueArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommissionInquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommissionInquiryFindUniqueOrThrowArgs} args - Arguments to find a CommissionInquiry
     * @example
     * // Get one CommissionInquiry
     * const commissionInquiry = await prisma.commissionInquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommissionInquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, CommissionInquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionInquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryFindFirstArgs} args - Arguments to find a CommissionInquiry
     * @example
     * // Get one CommissionInquiry
     * const commissionInquiry = await prisma.commissionInquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommissionInquiryFindFirstArgs>(args?: SelectSubset<T, CommissionInquiryFindFirstArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionInquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryFindFirstOrThrowArgs} args - Arguments to find a CommissionInquiry
     * @example
     * // Get one CommissionInquiry
     * const commissionInquiry = await prisma.commissionInquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommissionInquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, CommissionInquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommissionInquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommissionInquiries
     * const commissionInquiries = await prisma.commissionInquiry.findMany()
     * 
     * // Get first 10 CommissionInquiries
     * const commissionInquiries = await prisma.commissionInquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commissionInquiryWithIdOnly = await prisma.commissionInquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommissionInquiryFindManyArgs>(args?: SelectSubset<T, CommissionInquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommissionInquiry.
     * @param {CommissionInquiryCreateArgs} args - Arguments to create a CommissionInquiry.
     * @example
     * // Create one CommissionInquiry
     * const CommissionInquiry = await prisma.commissionInquiry.create({
     *   data: {
     *     // ... data to create a CommissionInquiry
     *   }
     * })
     * 
     */
    create<T extends CommissionInquiryCreateArgs>(args: SelectSubset<T, CommissionInquiryCreateArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommissionInquiries.
     * @param {CommissionInquiryCreateManyArgs} args - Arguments to create many CommissionInquiries.
     * @example
     * // Create many CommissionInquiries
     * const commissionInquiry = await prisma.commissionInquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommissionInquiryCreateManyArgs>(args?: SelectSubset<T, CommissionInquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommissionInquiry.
     * @param {CommissionInquiryDeleteArgs} args - Arguments to delete one CommissionInquiry.
     * @example
     * // Delete one CommissionInquiry
     * const CommissionInquiry = await prisma.commissionInquiry.delete({
     *   where: {
     *     // ... filter to delete one CommissionInquiry
     *   }
     * })
     * 
     */
    delete<T extends CommissionInquiryDeleteArgs>(args: SelectSubset<T, CommissionInquiryDeleteArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommissionInquiry.
     * @param {CommissionInquiryUpdateArgs} args - Arguments to update one CommissionInquiry.
     * @example
     * // Update one CommissionInquiry
     * const commissionInquiry = await prisma.commissionInquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommissionInquiryUpdateArgs>(args: SelectSubset<T, CommissionInquiryUpdateArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommissionInquiries.
     * @param {CommissionInquiryDeleteManyArgs} args - Arguments to filter CommissionInquiries to delete.
     * @example
     * // Delete a few CommissionInquiries
     * const { count } = await prisma.commissionInquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommissionInquiryDeleteManyArgs>(args?: SelectSubset<T, CommissionInquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommissionInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommissionInquiries
     * const commissionInquiry = await prisma.commissionInquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommissionInquiryUpdateManyArgs>(args: SelectSubset<T, CommissionInquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommissionInquiry.
     * @param {CommissionInquiryUpsertArgs} args - Arguments to update or create a CommissionInquiry.
     * @example
     * // Update or create a CommissionInquiry
     * const commissionInquiry = await prisma.commissionInquiry.upsert({
     *   create: {
     *     // ... data to create a CommissionInquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommissionInquiry we want to update
     *   }
     * })
     */
    upsert<T extends CommissionInquiryUpsertArgs>(args: SelectSubset<T, CommissionInquiryUpsertArgs<ExtArgs>>): Prisma__CommissionInquiryClient<$Result.GetResult<Prisma.$CommissionInquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommissionInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryCountArgs} args - Arguments to filter CommissionInquiries to count.
     * @example
     * // Count the number of CommissionInquiries
     * const count = await prisma.commissionInquiry.count({
     *   where: {
     *     // ... the filter for the CommissionInquiries we want to count
     *   }
     * })
    **/
    count<T extends CommissionInquiryCountArgs>(
      args?: Subset<T, CommissionInquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommissionInquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommissionInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommissionInquiryAggregateArgs>(args: Subset<T, CommissionInquiryAggregateArgs>): Prisma.PrismaPromise<GetCommissionInquiryAggregateType<T>>

    /**
     * Group by CommissionInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionInquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommissionInquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommissionInquiryGroupByArgs['orderBy'] }
        : { orderBy?: CommissionInquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommissionInquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommissionInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommissionInquiry model
   */
  readonly fields: CommissionInquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommissionInquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommissionInquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends AccountUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountUserDefaultArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicePackage<T extends CommissionInquiry$servicePackageArgs<ExtArgs> = {}>(args?: Subset<T, CommissionInquiry$servicePackageArgs<ExtArgs>>): Prisma__ServicePackageClient<$Result.GetResult<Prisma.$ServicePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repliedBy<T extends CommissionInquiry$repliedByArgs<ExtArgs> = {}>(args?: Subset<T, CommissionInquiry$repliedByArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommissionInquiry model
   */
  interface CommissionInquiryFieldRefs {
    readonly id: FieldRef<"CommissionInquiry", 'String'>
    readonly clientId: FieldRef<"CommissionInquiry", 'String'>
    readonly servicePackageId: FieldRef<"CommissionInquiry", 'String'>
    readonly clientName: FieldRef<"CommissionInquiry", 'String'>
    readonly clientEmail: FieldRef<"CommissionInquiry", 'String'>
    readonly organization: FieldRef<"CommissionInquiry", 'String'>
    readonly projectType: FieldRef<"CommissionInquiry", 'ProjectType'>
    readonly budgetTier: FieldRef<"CommissionInquiry", 'String'>
    readonly projectBrief: FieldRef<"CommissionInquiry", 'String'>
    readonly clientMessage: FieldRef<"CommissionInquiry", 'String'>
    readonly targetTimeline: FieldRef<"CommissionInquiry", 'String'>
    readonly location: FieldRef<"CommissionInquiry", 'String'>
    readonly status: FieldRef<"CommissionInquiry", 'InquiryStatus'>
    readonly curatorReply: FieldRef<"CommissionInquiry", 'String'>
    readonly repliedAt: FieldRef<"CommissionInquiry", 'String'>
    readonly repliedById: FieldRef<"CommissionInquiry", 'String'>
    readonly createdAt: FieldRef<"CommissionInquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"CommissionInquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommissionInquiry findUnique
   */
  export type CommissionInquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CommissionInquiry to fetch.
     */
    where: CommissionInquiryWhereUniqueInput
  }

  /**
   * CommissionInquiry findUniqueOrThrow
   */
  export type CommissionInquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CommissionInquiry to fetch.
     */
    where: CommissionInquiryWhereUniqueInput
  }

  /**
   * CommissionInquiry findFirst
   */
  export type CommissionInquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CommissionInquiry to fetch.
     */
    where?: CommissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionInquiries to fetch.
     */
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionInquiries.
     */
    cursor?: CommissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionInquiries.
     */
    distinct?: CommissionInquiryScalarFieldEnum | CommissionInquiryScalarFieldEnum[]
  }

  /**
   * CommissionInquiry findFirstOrThrow
   */
  export type CommissionInquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CommissionInquiry to fetch.
     */
    where?: CommissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionInquiries to fetch.
     */
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionInquiries.
     */
    cursor?: CommissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionInquiries.
     */
    distinct?: CommissionInquiryScalarFieldEnum | CommissionInquiryScalarFieldEnum[]
  }

  /**
   * CommissionInquiry findMany
   */
  export type CommissionInquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * Filter, which CommissionInquiries to fetch.
     */
    where?: CommissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionInquiries to fetch.
     */
    orderBy?: CommissionInquiryOrderByWithRelationInput | CommissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommissionInquiries.
     */
    cursor?: CommissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionInquiries.
     */
    skip?: number
    distinct?: CommissionInquiryScalarFieldEnum | CommissionInquiryScalarFieldEnum[]
  }

  /**
   * CommissionInquiry create
   */
  export type CommissionInquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a CommissionInquiry.
     */
    data: XOR<CommissionInquiryCreateInput, CommissionInquiryUncheckedCreateInput>
  }

  /**
   * CommissionInquiry createMany
   */
  export type CommissionInquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommissionInquiries.
     */
    data: CommissionInquiryCreateManyInput | CommissionInquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommissionInquiry update
   */
  export type CommissionInquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a CommissionInquiry.
     */
    data: XOR<CommissionInquiryUpdateInput, CommissionInquiryUncheckedUpdateInput>
    /**
     * Choose, which CommissionInquiry to update.
     */
    where: CommissionInquiryWhereUniqueInput
  }

  /**
   * CommissionInquiry updateMany
   */
  export type CommissionInquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommissionInquiries.
     */
    data: XOR<CommissionInquiryUpdateManyMutationInput, CommissionInquiryUncheckedUpdateManyInput>
    /**
     * Filter which CommissionInquiries to update
     */
    where?: CommissionInquiryWhereInput
    /**
     * Limit how many CommissionInquiries to update.
     */
    limit?: number
  }

  /**
   * CommissionInquiry upsert
   */
  export type CommissionInquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the CommissionInquiry to update in case it exists.
     */
    where: CommissionInquiryWhereUniqueInput
    /**
     * In case the CommissionInquiry found by the `where` argument doesn't exist, create a new CommissionInquiry with this data.
     */
    create: XOR<CommissionInquiryCreateInput, CommissionInquiryUncheckedCreateInput>
    /**
     * In case the CommissionInquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommissionInquiryUpdateInput, CommissionInquiryUncheckedUpdateInput>
  }

  /**
   * CommissionInquiry delete
   */
  export type CommissionInquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
    /**
     * Filter which CommissionInquiry to delete.
     */
    where: CommissionInquiryWhereUniqueInput
  }

  /**
   * CommissionInquiry deleteMany
   */
  export type CommissionInquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionInquiries to delete
     */
    where?: CommissionInquiryWhereInput
    /**
     * Limit how many CommissionInquiries to delete.
     */
    limit?: number
  }

  /**
   * CommissionInquiry.servicePackage
   */
  export type CommissionInquiry$servicePackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePackage
     */
    select?: ServicePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePackage
     */
    omit?: ServicePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePackageInclude<ExtArgs> | null
    where?: ServicePackageWhereInput
  }

  /**
   * CommissionInquiry.repliedBy
   */
  export type CommissionInquiry$repliedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    where?: AccountUserWhereInput
  }

  /**
   * CommissionInquiry without action
   */
  export type CommissionInquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionInquiry
     */
    select?: CommissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionInquiry
     */
    omit?: CommissionInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInquiryInclude<ExtArgs> | null
  }


  /**
   * Model ExhibitionRecord
   */

  export type AggregateExhibitionRecord = {
    _count: ExhibitionRecordCountAggregateOutputType | null
    _avg: ExhibitionRecordAvgAggregateOutputType | null
    _sum: ExhibitionRecordSumAggregateOutputType | null
    _min: ExhibitionRecordMinAggregateOutputType | null
    _max: ExhibitionRecordMaxAggregateOutputType | null
  }

  export type ExhibitionRecordAvgAggregateOutputType = {
    year: number | null
    sortOrder: number | null
  }

  export type ExhibitionRecordSumAggregateOutputType = {
    year: number | null
    sortOrder: number | null
  }

  export type ExhibitionRecordMinAggregateOutputType = {
    id: string | null
    title: string | null
    institution: string | null
    city: string | null
    year: number | null
    exhibitionType: $Enums.ExhibitionType | null
    pressMention: string | null
    externalUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitionRecordMaxAggregateOutputType = {
    id: string | null
    title: string | null
    institution: string | null
    city: string | null
    year: number | null
    exhibitionType: $Enums.ExhibitionType | null
    pressMention: string | null
    externalUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitionRecordCountAggregateOutputType = {
    id: number
    title: number
    institution: number
    city: number
    year: number
    exhibitionType: number
    pressMention: number
    externalUrl: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExhibitionRecordAvgAggregateInputType = {
    year?: true
    sortOrder?: true
  }

  export type ExhibitionRecordSumAggregateInputType = {
    year?: true
    sortOrder?: true
  }

  export type ExhibitionRecordMinAggregateInputType = {
    id?: true
    title?: true
    institution?: true
    city?: true
    year?: true
    exhibitionType?: true
    pressMention?: true
    externalUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitionRecordMaxAggregateInputType = {
    id?: true
    title?: true
    institution?: true
    city?: true
    year?: true
    exhibitionType?: true
    pressMention?: true
    externalUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitionRecordCountAggregateInputType = {
    id?: true
    title?: true
    institution?: true
    city?: true
    year?: true
    exhibitionType?: true
    pressMention?: true
    externalUrl?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExhibitionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExhibitionRecord to aggregate.
     */
    where?: ExhibitionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionRecords to fetch.
     */
    orderBy?: ExhibitionRecordOrderByWithRelationInput | ExhibitionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExhibitionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExhibitionRecords
    **/
    _count?: true | ExhibitionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExhibitionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExhibitionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExhibitionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExhibitionRecordMaxAggregateInputType
  }

  export type GetExhibitionRecordAggregateType<T extends ExhibitionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateExhibitionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExhibitionRecord[P]>
      : GetScalarType<T[P], AggregateExhibitionRecord[P]>
  }




  export type ExhibitionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExhibitionRecordWhereInput
    orderBy?: ExhibitionRecordOrderByWithAggregationInput | ExhibitionRecordOrderByWithAggregationInput[]
    by: ExhibitionRecordScalarFieldEnum[] | ExhibitionRecordScalarFieldEnum
    having?: ExhibitionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExhibitionRecordCountAggregateInputType | true
    _avg?: ExhibitionRecordAvgAggregateInputType
    _sum?: ExhibitionRecordSumAggregateInputType
    _min?: ExhibitionRecordMinAggregateInputType
    _max?: ExhibitionRecordMaxAggregateInputType
  }

  export type ExhibitionRecordGroupByOutputType = {
    id: string
    title: string
    institution: string
    city: string
    year: number
    exhibitionType: $Enums.ExhibitionType
    pressMention: string
    externalUrl: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ExhibitionRecordCountAggregateOutputType | null
    _avg: ExhibitionRecordAvgAggregateOutputType | null
    _sum: ExhibitionRecordSumAggregateOutputType | null
    _min: ExhibitionRecordMinAggregateOutputType | null
    _max: ExhibitionRecordMaxAggregateOutputType | null
  }

  type GetExhibitionRecordGroupByPayload<T extends ExhibitionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExhibitionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExhibitionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExhibitionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ExhibitionRecordGroupByOutputType[P]>
        }
      >
    >


  export type ExhibitionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    institution?: boolean
    city?: boolean
    year?: boolean
    exhibitionType?: boolean
    pressMention?: boolean
    externalUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exhibitionRecord"]>



  export type ExhibitionRecordSelectScalar = {
    id?: boolean
    title?: boolean
    institution?: boolean
    city?: boolean
    year?: boolean
    exhibitionType?: boolean
    pressMention?: boolean
    externalUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExhibitionRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "institution" | "city" | "year" | "exhibitionType" | "pressMention" | "externalUrl" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["exhibitionRecord"]>

  export type $ExhibitionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExhibitionRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      institution: string
      city: string
      year: number
      exhibitionType: $Enums.ExhibitionType
      pressMention: string
      externalUrl: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exhibitionRecord"]>
    composites: {}
  }

  type ExhibitionRecordGetPayload<S extends boolean | null | undefined | ExhibitionRecordDefaultArgs> = $Result.GetResult<Prisma.$ExhibitionRecordPayload, S>

  type ExhibitionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExhibitionRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExhibitionRecordCountAggregateInputType | true
    }

  export interface ExhibitionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExhibitionRecord'], meta: { name: 'ExhibitionRecord' } }
    /**
     * Find zero or one ExhibitionRecord that matches the filter.
     * @param {ExhibitionRecordFindUniqueArgs} args - Arguments to find a ExhibitionRecord
     * @example
     * // Get one ExhibitionRecord
     * const exhibitionRecord = await prisma.exhibitionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExhibitionRecordFindUniqueArgs>(args: SelectSubset<T, ExhibitionRecordFindUniqueArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExhibitionRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExhibitionRecordFindUniqueOrThrowArgs} args - Arguments to find a ExhibitionRecord
     * @example
     * // Get one ExhibitionRecord
     * const exhibitionRecord = await prisma.exhibitionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExhibitionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ExhibitionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExhibitionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordFindFirstArgs} args - Arguments to find a ExhibitionRecord
     * @example
     * // Get one ExhibitionRecord
     * const exhibitionRecord = await prisma.exhibitionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExhibitionRecordFindFirstArgs>(args?: SelectSubset<T, ExhibitionRecordFindFirstArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExhibitionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordFindFirstOrThrowArgs} args - Arguments to find a ExhibitionRecord
     * @example
     * // Get one ExhibitionRecord
     * const exhibitionRecord = await prisma.exhibitionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExhibitionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ExhibitionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExhibitionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExhibitionRecords
     * const exhibitionRecords = await prisma.exhibitionRecord.findMany()
     * 
     * // Get first 10 ExhibitionRecords
     * const exhibitionRecords = await prisma.exhibitionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exhibitionRecordWithIdOnly = await prisma.exhibitionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExhibitionRecordFindManyArgs>(args?: SelectSubset<T, ExhibitionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExhibitionRecord.
     * @param {ExhibitionRecordCreateArgs} args - Arguments to create a ExhibitionRecord.
     * @example
     * // Create one ExhibitionRecord
     * const ExhibitionRecord = await prisma.exhibitionRecord.create({
     *   data: {
     *     // ... data to create a ExhibitionRecord
     *   }
     * })
     * 
     */
    create<T extends ExhibitionRecordCreateArgs>(args: SelectSubset<T, ExhibitionRecordCreateArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExhibitionRecords.
     * @param {ExhibitionRecordCreateManyArgs} args - Arguments to create many ExhibitionRecords.
     * @example
     * // Create many ExhibitionRecords
     * const exhibitionRecord = await prisma.exhibitionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExhibitionRecordCreateManyArgs>(args?: SelectSubset<T, ExhibitionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExhibitionRecord.
     * @param {ExhibitionRecordDeleteArgs} args - Arguments to delete one ExhibitionRecord.
     * @example
     * // Delete one ExhibitionRecord
     * const ExhibitionRecord = await prisma.exhibitionRecord.delete({
     *   where: {
     *     // ... filter to delete one ExhibitionRecord
     *   }
     * })
     * 
     */
    delete<T extends ExhibitionRecordDeleteArgs>(args: SelectSubset<T, ExhibitionRecordDeleteArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExhibitionRecord.
     * @param {ExhibitionRecordUpdateArgs} args - Arguments to update one ExhibitionRecord.
     * @example
     * // Update one ExhibitionRecord
     * const exhibitionRecord = await prisma.exhibitionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExhibitionRecordUpdateArgs>(args: SelectSubset<T, ExhibitionRecordUpdateArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExhibitionRecords.
     * @param {ExhibitionRecordDeleteManyArgs} args - Arguments to filter ExhibitionRecords to delete.
     * @example
     * // Delete a few ExhibitionRecords
     * const { count } = await prisma.exhibitionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExhibitionRecordDeleteManyArgs>(args?: SelectSubset<T, ExhibitionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExhibitionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExhibitionRecords
     * const exhibitionRecord = await prisma.exhibitionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExhibitionRecordUpdateManyArgs>(args: SelectSubset<T, ExhibitionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExhibitionRecord.
     * @param {ExhibitionRecordUpsertArgs} args - Arguments to update or create a ExhibitionRecord.
     * @example
     * // Update or create a ExhibitionRecord
     * const exhibitionRecord = await prisma.exhibitionRecord.upsert({
     *   create: {
     *     // ... data to create a ExhibitionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExhibitionRecord we want to update
     *   }
     * })
     */
    upsert<T extends ExhibitionRecordUpsertArgs>(args: SelectSubset<T, ExhibitionRecordUpsertArgs<ExtArgs>>): Prisma__ExhibitionRecordClient<$Result.GetResult<Prisma.$ExhibitionRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExhibitionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordCountArgs} args - Arguments to filter ExhibitionRecords to count.
     * @example
     * // Count the number of ExhibitionRecords
     * const count = await prisma.exhibitionRecord.count({
     *   where: {
     *     // ... the filter for the ExhibitionRecords we want to count
     *   }
     * })
    **/
    count<T extends ExhibitionRecordCountArgs>(
      args?: Subset<T, ExhibitionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExhibitionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExhibitionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExhibitionRecordAggregateArgs>(args: Subset<T, ExhibitionRecordAggregateArgs>): Prisma.PrismaPromise<GetExhibitionRecordAggregateType<T>>

    /**
     * Group by ExhibitionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExhibitionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExhibitionRecordGroupByArgs['orderBy'] }
        : { orderBy?: ExhibitionRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExhibitionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExhibitionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExhibitionRecord model
   */
  readonly fields: ExhibitionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExhibitionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExhibitionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExhibitionRecord model
   */
  interface ExhibitionRecordFieldRefs {
    readonly id: FieldRef<"ExhibitionRecord", 'String'>
    readonly title: FieldRef<"ExhibitionRecord", 'String'>
    readonly institution: FieldRef<"ExhibitionRecord", 'String'>
    readonly city: FieldRef<"ExhibitionRecord", 'String'>
    readonly year: FieldRef<"ExhibitionRecord", 'Int'>
    readonly exhibitionType: FieldRef<"ExhibitionRecord", 'ExhibitionType'>
    readonly pressMention: FieldRef<"ExhibitionRecord", 'String'>
    readonly externalUrl: FieldRef<"ExhibitionRecord", 'String'>
    readonly sortOrder: FieldRef<"ExhibitionRecord", 'Int'>
    readonly createdAt: FieldRef<"ExhibitionRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ExhibitionRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExhibitionRecord findUnique
   */
  export type ExhibitionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionRecord to fetch.
     */
    where: ExhibitionRecordWhereUniqueInput
  }

  /**
   * ExhibitionRecord findUniqueOrThrow
   */
  export type ExhibitionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionRecord to fetch.
     */
    where: ExhibitionRecordWhereUniqueInput
  }

  /**
   * ExhibitionRecord findFirst
   */
  export type ExhibitionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionRecord to fetch.
     */
    where?: ExhibitionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionRecords to fetch.
     */
    orderBy?: ExhibitionRecordOrderByWithRelationInput | ExhibitionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExhibitionRecords.
     */
    cursor?: ExhibitionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExhibitionRecords.
     */
    distinct?: ExhibitionRecordScalarFieldEnum | ExhibitionRecordScalarFieldEnum[]
  }

  /**
   * ExhibitionRecord findFirstOrThrow
   */
  export type ExhibitionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionRecord to fetch.
     */
    where?: ExhibitionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionRecords to fetch.
     */
    orderBy?: ExhibitionRecordOrderByWithRelationInput | ExhibitionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExhibitionRecords.
     */
    cursor?: ExhibitionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExhibitionRecords.
     */
    distinct?: ExhibitionRecordScalarFieldEnum | ExhibitionRecordScalarFieldEnum[]
  }

  /**
   * ExhibitionRecord findMany
   */
  export type ExhibitionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionRecords to fetch.
     */
    where?: ExhibitionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionRecords to fetch.
     */
    orderBy?: ExhibitionRecordOrderByWithRelationInput | ExhibitionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExhibitionRecords.
     */
    cursor?: ExhibitionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionRecords.
     */
    skip?: number
    distinct?: ExhibitionRecordScalarFieldEnum | ExhibitionRecordScalarFieldEnum[]
  }

  /**
   * ExhibitionRecord create
   */
  export type ExhibitionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a ExhibitionRecord.
     */
    data: XOR<ExhibitionRecordCreateInput, ExhibitionRecordUncheckedCreateInput>
  }

  /**
   * ExhibitionRecord createMany
   */
  export type ExhibitionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExhibitionRecords.
     */
    data: ExhibitionRecordCreateManyInput | ExhibitionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExhibitionRecord update
   */
  export type ExhibitionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a ExhibitionRecord.
     */
    data: XOR<ExhibitionRecordUpdateInput, ExhibitionRecordUncheckedUpdateInput>
    /**
     * Choose, which ExhibitionRecord to update.
     */
    where: ExhibitionRecordWhereUniqueInput
  }

  /**
   * ExhibitionRecord updateMany
   */
  export type ExhibitionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExhibitionRecords.
     */
    data: XOR<ExhibitionRecordUpdateManyMutationInput, ExhibitionRecordUncheckedUpdateManyInput>
    /**
     * Filter which ExhibitionRecords to update
     */
    where?: ExhibitionRecordWhereInput
    /**
     * Limit how many ExhibitionRecords to update.
     */
    limit?: number
  }

  /**
   * ExhibitionRecord upsert
   */
  export type ExhibitionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the ExhibitionRecord to update in case it exists.
     */
    where: ExhibitionRecordWhereUniqueInput
    /**
     * In case the ExhibitionRecord found by the `where` argument doesn't exist, create a new ExhibitionRecord with this data.
     */
    create: XOR<ExhibitionRecordCreateInput, ExhibitionRecordUncheckedCreateInput>
    /**
     * In case the ExhibitionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExhibitionRecordUpdateInput, ExhibitionRecordUncheckedUpdateInput>
  }

  /**
   * ExhibitionRecord delete
   */
  export type ExhibitionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
    /**
     * Filter which ExhibitionRecord to delete.
     */
    where: ExhibitionRecordWhereUniqueInput
  }

  /**
   * ExhibitionRecord deleteMany
   */
  export type ExhibitionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExhibitionRecords to delete
     */
    where?: ExhibitionRecordWhereInput
    /**
     * Limit how many ExhibitionRecords to delete.
     */
    limit?: number
  }

  /**
   * ExhibitionRecord without action
   */
  export type ExhibitionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionRecord
     */
    select?: ExhibitionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionRecord
     */
    omit?: ExhibitionRecordOmit<ExtArgs> | null
  }


  /**
   * Model ClientTestimonial
   */

  export type AggregateClientTestimonial = {
    _count: ClientTestimonialCountAggregateOutputType | null
    _avg: ClientTestimonialAvgAggregateOutputType | null
    _sum: ClientTestimonialSumAggregateOutputType | null
    _min: ClientTestimonialMinAggregateOutputType | null
    _max: ClientTestimonialMaxAggregateOutputType | null
  }

  export type ClientTestimonialAvgAggregateOutputType = {
    rating: number | null
    sortOrder: number | null
  }

  export type ClientTestimonialSumAggregateOutputType = {
    rating: number | null
    sortOrder: number | null
  }

  export type ClientTestimonialMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientName: string | null
    clientTitle: string | null
    organization: string | null
    quote: string | null
    serviceType: $Enums.ProjectType | null
    rating: number | null
    avatarImage: string | null
    isFeatured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientTestimonialMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientName: string | null
    clientTitle: string | null
    organization: string | null
    quote: string | null
    serviceType: $Enums.ProjectType | null
    rating: number | null
    avatarImage: string | null
    isFeatured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientTestimonialCountAggregateOutputType = {
    id: number
    clientId: number
    clientName: number
    clientTitle: number
    organization: number
    quote: number
    serviceType: number
    rating: number
    avatarImage: number
    isFeatured: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientTestimonialAvgAggregateInputType = {
    rating?: true
    sortOrder?: true
  }

  export type ClientTestimonialSumAggregateInputType = {
    rating?: true
    sortOrder?: true
  }

  export type ClientTestimonialMinAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientTitle?: true
    organization?: true
    quote?: true
    serviceType?: true
    rating?: true
    avatarImage?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientTestimonialMaxAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientTitle?: true
    organization?: true
    quote?: true
    serviceType?: true
    rating?: true
    avatarImage?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientTestimonialCountAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientTitle?: true
    organization?: true
    quote?: true
    serviceType?: true
    rating?: true
    avatarImage?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientTestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTestimonial to aggregate.
     */
    where?: ClientTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestimonials to fetch.
     */
    orderBy?: ClientTestimonialOrderByWithRelationInput | ClientTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientTestimonials
    **/
    _count?: true | ClientTestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientTestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientTestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientTestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientTestimonialMaxAggregateInputType
  }

  export type GetClientTestimonialAggregateType<T extends ClientTestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateClientTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientTestimonial[P]>
      : GetScalarType<T[P], AggregateClientTestimonial[P]>
  }




  export type ClientTestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTestimonialWhereInput
    orderBy?: ClientTestimonialOrderByWithAggregationInput | ClientTestimonialOrderByWithAggregationInput[]
    by: ClientTestimonialScalarFieldEnum[] | ClientTestimonialScalarFieldEnum
    having?: ClientTestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientTestimonialCountAggregateInputType | true
    _avg?: ClientTestimonialAvgAggregateInputType
    _sum?: ClientTestimonialSumAggregateInputType
    _min?: ClientTestimonialMinAggregateInputType
    _max?: ClientTestimonialMaxAggregateInputType
  }

  export type ClientTestimonialGroupByOutputType = {
    id: string
    clientId: string | null
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating: number
    avatarImage: string | null
    isFeatured: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ClientTestimonialCountAggregateOutputType | null
    _avg: ClientTestimonialAvgAggregateOutputType | null
    _sum: ClientTestimonialSumAggregateOutputType | null
    _min: ClientTestimonialMinAggregateOutputType | null
    _max: ClientTestimonialMaxAggregateOutputType | null
  }

  type GetClientTestimonialGroupByPayload<T extends ClientTestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientTestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientTestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientTestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], ClientTestimonialGroupByOutputType[P]>
        }
      >
    >


  export type ClientTestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientTitle?: boolean
    organization?: boolean
    quote?: boolean
    serviceType?: boolean
    rating?: boolean
    avatarImage?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientTestimonial$clientArgs<ExtArgs>
  }, ExtArgs["result"]["clientTestimonial"]>



  export type ClientTestimonialSelectScalar = {
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientTitle?: boolean
    organization?: boolean
    quote?: boolean
    serviceType?: boolean
    rating?: boolean
    avatarImage?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientTestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "clientName" | "clientTitle" | "organization" | "quote" | "serviceType" | "rating" | "avatarImage" | "isFeatured" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["clientTestimonial"]>
  export type ClientTestimonialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientTestimonial$clientArgs<ExtArgs>
  }

  export type $ClientTestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientTestimonial"
    objects: {
      client: Prisma.$AccountUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      clientName: string
      clientTitle: string
      organization: string
      quote: string
      serviceType: $Enums.ProjectType
      rating: number
      avatarImage: string | null
      isFeatured: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clientTestimonial"]>
    composites: {}
  }

  type ClientTestimonialGetPayload<S extends boolean | null | undefined | ClientTestimonialDefaultArgs> = $Result.GetResult<Prisma.$ClientTestimonialPayload, S>

  type ClientTestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientTestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientTestimonialCountAggregateInputType | true
    }

  export interface ClientTestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientTestimonial'], meta: { name: 'ClientTestimonial' } }
    /**
     * Find zero or one ClientTestimonial that matches the filter.
     * @param {ClientTestimonialFindUniqueArgs} args - Arguments to find a ClientTestimonial
     * @example
     * // Get one ClientTestimonial
     * const clientTestimonial = await prisma.clientTestimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientTestimonialFindUniqueArgs>(args: SelectSubset<T, ClientTestimonialFindUniqueArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientTestimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientTestimonialFindUniqueOrThrowArgs} args - Arguments to find a ClientTestimonial
     * @example
     * // Get one ClientTestimonial
     * const clientTestimonial = await prisma.clientTestimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientTestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientTestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientTestimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialFindFirstArgs} args - Arguments to find a ClientTestimonial
     * @example
     * // Get one ClientTestimonial
     * const clientTestimonial = await prisma.clientTestimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientTestimonialFindFirstArgs>(args?: SelectSubset<T, ClientTestimonialFindFirstArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientTestimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialFindFirstOrThrowArgs} args - Arguments to find a ClientTestimonial
     * @example
     * // Get one ClientTestimonial
     * const clientTestimonial = await prisma.clientTestimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientTestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientTestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientTestimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientTestimonials
     * const clientTestimonials = await prisma.clientTestimonial.findMany()
     * 
     * // Get first 10 ClientTestimonials
     * const clientTestimonials = await prisma.clientTestimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientTestimonialWithIdOnly = await prisma.clientTestimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientTestimonialFindManyArgs>(args?: SelectSubset<T, ClientTestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientTestimonial.
     * @param {ClientTestimonialCreateArgs} args - Arguments to create a ClientTestimonial.
     * @example
     * // Create one ClientTestimonial
     * const ClientTestimonial = await prisma.clientTestimonial.create({
     *   data: {
     *     // ... data to create a ClientTestimonial
     *   }
     * })
     * 
     */
    create<T extends ClientTestimonialCreateArgs>(args: SelectSubset<T, ClientTestimonialCreateArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientTestimonials.
     * @param {ClientTestimonialCreateManyArgs} args - Arguments to create many ClientTestimonials.
     * @example
     * // Create many ClientTestimonials
     * const clientTestimonial = await prisma.clientTestimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientTestimonialCreateManyArgs>(args?: SelectSubset<T, ClientTestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientTestimonial.
     * @param {ClientTestimonialDeleteArgs} args - Arguments to delete one ClientTestimonial.
     * @example
     * // Delete one ClientTestimonial
     * const ClientTestimonial = await prisma.clientTestimonial.delete({
     *   where: {
     *     // ... filter to delete one ClientTestimonial
     *   }
     * })
     * 
     */
    delete<T extends ClientTestimonialDeleteArgs>(args: SelectSubset<T, ClientTestimonialDeleteArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientTestimonial.
     * @param {ClientTestimonialUpdateArgs} args - Arguments to update one ClientTestimonial.
     * @example
     * // Update one ClientTestimonial
     * const clientTestimonial = await prisma.clientTestimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientTestimonialUpdateArgs>(args: SelectSubset<T, ClientTestimonialUpdateArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientTestimonials.
     * @param {ClientTestimonialDeleteManyArgs} args - Arguments to filter ClientTestimonials to delete.
     * @example
     * // Delete a few ClientTestimonials
     * const { count } = await prisma.clientTestimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientTestimonialDeleteManyArgs>(args?: SelectSubset<T, ClientTestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientTestimonials
     * const clientTestimonial = await prisma.clientTestimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientTestimonialUpdateManyArgs>(args: SelectSubset<T, ClientTestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientTestimonial.
     * @param {ClientTestimonialUpsertArgs} args - Arguments to update or create a ClientTestimonial.
     * @example
     * // Update or create a ClientTestimonial
     * const clientTestimonial = await prisma.clientTestimonial.upsert({
     *   create: {
     *     // ... data to create a ClientTestimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientTestimonial we want to update
     *   }
     * })
     */
    upsert<T extends ClientTestimonialUpsertArgs>(args: SelectSubset<T, ClientTestimonialUpsertArgs<ExtArgs>>): Prisma__ClientTestimonialClient<$Result.GetResult<Prisma.$ClientTestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialCountArgs} args - Arguments to filter ClientTestimonials to count.
     * @example
     * // Count the number of ClientTestimonials
     * const count = await prisma.clientTestimonial.count({
     *   where: {
     *     // ... the filter for the ClientTestimonials we want to count
     *   }
     * })
    **/
    count<T extends ClientTestimonialCountArgs>(
      args?: Subset<T, ClientTestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientTestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientTestimonialAggregateArgs>(args: Subset<T, ClientTestimonialAggregateArgs>): Prisma.PrismaPromise<GetClientTestimonialAggregateType<T>>

    /**
     * Group by ClientTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTestimonialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientTestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientTestimonialGroupByArgs['orderBy'] }
        : { orderBy?: ClientTestimonialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientTestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientTestimonial model
   */
  readonly fields: ClientTestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientTestimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientTestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientTestimonial$clientArgs<ExtArgs> = {}>(args?: Subset<T, ClientTestimonial$clientArgs<ExtArgs>>): Prisma__AccountUserClient<$Result.GetResult<Prisma.$AccountUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientTestimonial model
   */
  interface ClientTestimonialFieldRefs {
    readonly id: FieldRef<"ClientTestimonial", 'String'>
    readonly clientId: FieldRef<"ClientTestimonial", 'String'>
    readonly clientName: FieldRef<"ClientTestimonial", 'String'>
    readonly clientTitle: FieldRef<"ClientTestimonial", 'String'>
    readonly organization: FieldRef<"ClientTestimonial", 'String'>
    readonly quote: FieldRef<"ClientTestimonial", 'String'>
    readonly serviceType: FieldRef<"ClientTestimonial", 'ProjectType'>
    readonly rating: FieldRef<"ClientTestimonial", 'Int'>
    readonly avatarImage: FieldRef<"ClientTestimonial", 'String'>
    readonly isFeatured: FieldRef<"ClientTestimonial", 'Boolean'>
    readonly sortOrder: FieldRef<"ClientTestimonial", 'Int'>
    readonly createdAt: FieldRef<"ClientTestimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"ClientTestimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientTestimonial findUnique
   */
  export type ClientTestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestimonial to fetch.
     */
    where: ClientTestimonialWhereUniqueInput
  }

  /**
   * ClientTestimonial findUniqueOrThrow
   */
  export type ClientTestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestimonial to fetch.
     */
    where: ClientTestimonialWhereUniqueInput
  }

  /**
   * ClientTestimonial findFirst
   */
  export type ClientTestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestimonial to fetch.
     */
    where?: ClientTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestimonials to fetch.
     */
    orderBy?: ClientTestimonialOrderByWithRelationInput | ClientTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTestimonials.
     */
    cursor?: ClientTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTestimonials.
     */
    distinct?: ClientTestimonialScalarFieldEnum | ClientTestimonialScalarFieldEnum[]
  }

  /**
   * ClientTestimonial findFirstOrThrow
   */
  export type ClientTestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestimonial to fetch.
     */
    where?: ClientTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestimonials to fetch.
     */
    orderBy?: ClientTestimonialOrderByWithRelationInput | ClientTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTestimonials.
     */
    cursor?: ClientTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTestimonials.
     */
    distinct?: ClientTestimonialScalarFieldEnum | ClientTestimonialScalarFieldEnum[]
  }

  /**
   * ClientTestimonial findMany
   */
  export type ClientTestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ClientTestimonials to fetch.
     */
    where?: ClientTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTestimonials to fetch.
     */
    orderBy?: ClientTestimonialOrderByWithRelationInput | ClientTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientTestimonials.
     */
    cursor?: ClientTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTestimonials.
     */
    skip?: number
    distinct?: ClientTestimonialScalarFieldEnum | ClientTestimonialScalarFieldEnum[]
  }

  /**
   * ClientTestimonial create
   */
  export type ClientTestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientTestimonial.
     */
    data: XOR<ClientTestimonialCreateInput, ClientTestimonialUncheckedCreateInput>
  }

  /**
   * ClientTestimonial createMany
   */
  export type ClientTestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientTestimonials.
     */
    data: ClientTestimonialCreateManyInput | ClientTestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientTestimonial update
   */
  export type ClientTestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientTestimonial.
     */
    data: XOR<ClientTestimonialUpdateInput, ClientTestimonialUncheckedUpdateInput>
    /**
     * Choose, which ClientTestimonial to update.
     */
    where: ClientTestimonialWhereUniqueInput
  }

  /**
   * ClientTestimonial updateMany
   */
  export type ClientTestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientTestimonials.
     */
    data: XOR<ClientTestimonialUpdateManyMutationInput, ClientTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which ClientTestimonials to update
     */
    where?: ClientTestimonialWhereInput
    /**
     * Limit how many ClientTestimonials to update.
     */
    limit?: number
  }

  /**
   * ClientTestimonial upsert
   */
  export type ClientTestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientTestimonial to update in case it exists.
     */
    where: ClientTestimonialWhereUniqueInput
    /**
     * In case the ClientTestimonial found by the `where` argument doesn't exist, create a new ClientTestimonial with this data.
     */
    create: XOR<ClientTestimonialCreateInput, ClientTestimonialUncheckedCreateInput>
    /**
     * In case the ClientTestimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientTestimonialUpdateInput, ClientTestimonialUncheckedUpdateInput>
  }

  /**
   * ClientTestimonial delete
   */
  export type ClientTestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
    /**
     * Filter which ClientTestimonial to delete.
     */
    where: ClientTestimonialWhereUniqueInput
  }

  /**
   * ClientTestimonial deleteMany
   */
  export type ClientTestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTestimonials to delete
     */
    where?: ClientTestimonialWhereInput
    /**
     * Limit how many ClientTestimonials to delete.
     */
    limit?: number
  }

  /**
   * ClientTestimonial.client
   */
  export type ClientTestimonial$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountUser
     */
    select?: AccountUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountUser
     */
    omit?: AccountUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountUserInclude<ExtArgs> | null
    where?: AccountUserWhereInput
  }

  /**
   * ClientTestimonial without action
   */
  export type ClientTestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTestimonial
     */
    select?: ClientTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTestimonial
     */
    omit?: ClientTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTestimonialInclude<ExtArgs> | null
  }


  /**
   * Model StudioBio
   */

  export type AggregateStudioBio = {
    _count: StudioBioCountAggregateOutputType | null
    _min: StudioBioMinAggregateOutputType | null
    _max: StudioBioMaxAggregateOutputType | null
  }

  export type StudioBioMinAggregateOutputType = {
    id: string | null
    artistName: string | null
    studioName: string | null
    philosophyQuote: string | null
    bioStatement: string | null
    portraitImage: string | null
    atelierLocation: string | null
    activeRepresentation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudioBioMaxAggregateOutputType = {
    id: string | null
    artistName: string | null
    studioName: string | null
    philosophyQuote: string | null
    bioStatement: string | null
    portraitImage: string | null
    atelierLocation: string | null
    activeRepresentation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudioBioCountAggregateOutputType = {
    id: number
    artistName: number
    studioName: number
    philosophyQuote: number
    bioStatement: number
    portraitImage: number
    atelierLocation: number
    activeRepresentation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudioBioMinAggregateInputType = {
    id?: true
    artistName?: true
    studioName?: true
    philosophyQuote?: true
    bioStatement?: true
    portraitImage?: true
    atelierLocation?: true
    activeRepresentation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudioBioMaxAggregateInputType = {
    id?: true
    artistName?: true
    studioName?: true
    philosophyQuote?: true
    bioStatement?: true
    portraitImage?: true
    atelierLocation?: true
    activeRepresentation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudioBioCountAggregateInputType = {
    id?: true
    artistName?: true
    studioName?: true
    philosophyQuote?: true
    bioStatement?: true
    portraitImage?: true
    atelierLocation?: true
    activeRepresentation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudioBioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudioBio to aggregate.
     */
    where?: StudioBioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioBios to fetch.
     */
    orderBy?: StudioBioOrderByWithRelationInput | StudioBioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudioBioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioBios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioBios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudioBios
    **/
    _count?: true | StudioBioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioBioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioBioMaxAggregateInputType
  }

  export type GetStudioBioAggregateType<T extends StudioBioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudioBio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudioBio[P]>
      : GetScalarType<T[P], AggregateStudioBio[P]>
  }




  export type StudioBioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioBioWhereInput
    orderBy?: StudioBioOrderByWithAggregationInput | StudioBioOrderByWithAggregationInput[]
    by: StudioBioScalarFieldEnum[] | StudioBioScalarFieldEnum
    having?: StudioBioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioBioCountAggregateInputType | true
    _min?: StudioBioMinAggregateInputType
    _max?: StudioBioMaxAggregateInputType
  }

  export type StudioBioGroupByOutputType = {
    id: string
    artistName: string
    studioName: string
    philosophyQuote: string
    bioStatement: string
    portraitImage: string | null
    atelierLocation: string
    activeRepresentation: string
    createdAt: Date
    updatedAt: Date
    _count: StudioBioCountAggregateOutputType | null
    _min: StudioBioMinAggregateOutputType | null
    _max: StudioBioMaxAggregateOutputType | null
  }

  type GetStudioBioGroupByPayload<T extends StudioBioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudioBioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioBioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioBioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioBioGroupByOutputType[P]>
        }
      >
    >


  export type StudioBioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistName?: boolean
    studioName?: boolean
    philosophyQuote?: boolean
    bioStatement?: boolean
    portraitImage?: boolean
    atelierLocation?: boolean
    activeRepresentation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studioBio"]>



  export type StudioBioSelectScalar = {
    id?: boolean
    artistName?: boolean
    studioName?: boolean
    philosophyQuote?: boolean
    bioStatement?: boolean
    portraitImage?: boolean
    atelierLocation?: boolean
    activeRepresentation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudioBioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artistName" | "studioName" | "philosophyQuote" | "bioStatement" | "portraitImage" | "atelierLocation" | "activeRepresentation" | "createdAt" | "updatedAt", ExtArgs["result"]["studioBio"]>

  export type $StudioBioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudioBio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      artistName: string
      studioName: string
      philosophyQuote: string
      bioStatement: string
      portraitImage: string | null
      atelierLocation: string
      activeRepresentation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studioBio"]>
    composites: {}
  }

  type StudioBioGetPayload<S extends boolean | null | undefined | StudioBioDefaultArgs> = $Result.GetResult<Prisma.$StudioBioPayload, S>

  type StudioBioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudioBioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudioBioCountAggregateInputType | true
    }

  export interface StudioBioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudioBio'], meta: { name: 'StudioBio' } }
    /**
     * Find zero or one StudioBio that matches the filter.
     * @param {StudioBioFindUniqueArgs} args - Arguments to find a StudioBio
     * @example
     * // Get one StudioBio
     * const studioBio = await prisma.studioBio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudioBioFindUniqueArgs>(args: SelectSubset<T, StudioBioFindUniqueArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudioBio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudioBioFindUniqueOrThrowArgs} args - Arguments to find a StudioBio
     * @example
     * // Get one StudioBio
     * const studioBio = await prisma.studioBio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudioBioFindUniqueOrThrowArgs>(args: SelectSubset<T, StudioBioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudioBio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioFindFirstArgs} args - Arguments to find a StudioBio
     * @example
     * // Get one StudioBio
     * const studioBio = await prisma.studioBio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudioBioFindFirstArgs>(args?: SelectSubset<T, StudioBioFindFirstArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudioBio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioFindFirstOrThrowArgs} args - Arguments to find a StudioBio
     * @example
     * // Get one StudioBio
     * const studioBio = await prisma.studioBio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudioBioFindFirstOrThrowArgs>(args?: SelectSubset<T, StudioBioFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudioBios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudioBios
     * const studioBios = await prisma.studioBio.findMany()
     * 
     * // Get first 10 StudioBios
     * const studioBios = await prisma.studioBio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studioBioWithIdOnly = await prisma.studioBio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudioBioFindManyArgs>(args?: SelectSubset<T, StudioBioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudioBio.
     * @param {StudioBioCreateArgs} args - Arguments to create a StudioBio.
     * @example
     * // Create one StudioBio
     * const StudioBio = await prisma.studioBio.create({
     *   data: {
     *     // ... data to create a StudioBio
     *   }
     * })
     * 
     */
    create<T extends StudioBioCreateArgs>(args: SelectSubset<T, StudioBioCreateArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudioBios.
     * @param {StudioBioCreateManyArgs} args - Arguments to create many StudioBios.
     * @example
     * // Create many StudioBios
     * const studioBio = await prisma.studioBio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudioBioCreateManyArgs>(args?: SelectSubset<T, StudioBioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudioBio.
     * @param {StudioBioDeleteArgs} args - Arguments to delete one StudioBio.
     * @example
     * // Delete one StudioBio
     * const StudioBio = await prisma.studioBio.delete({
     *   where: {
     *     // ... filter to delete one StudioBio
     *   }
     * })
     * 
     */
    delete<T extends StudioBioDeleteArgs>(args: SelectSubset<T, StudioBioDeleteArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudioBio.
     * @param {StudioBioUpdateArgs} args - Arguments to update one StudioBio.
     * @example
     * // Update one StudioBio
     * const studioBio = await prisma.studioBio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudioBioUpdateArgs>(args: SelectSubset<T, StudioBioUpdateArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudioBios.
     * @param {StudioBioDeleteManyArgs} args - Arguments to filter StudioBios to delete.
     * @example
     * // Delete a few StudioBios
     * const { count } = await prisma.studioBio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudioBioDeleteManyArgs>(args?: SelectSubset<T, StudioBioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudioBios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudioBios
     * const studioBio = await prisma.studioBio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudioBioUpdateManyArgs>(args: SelectSubset<T, StudioBioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudioBio.
     * @param {StudioBioUpsertArgs} args - Arguments to update or create a StudioBio.
     * @example
     * // Update or create a StudioBio
     * const studioBio = await prisma.studioBio.upsert({
     *   create: {
     *     // ... data to create a StudioBio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudioBio we want to update
     *   }
     * })
     */
    upsert<T extends StudioBioUpsertArgs>(args: SelectSubset<T, StudioBioUpsertArgs<ExtArgs>>): Prisma__StudioBioClient<$Result.GetResult<Prisma.$StudioBioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudioBios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioCountArgs} args - Arguments to filter StudioBios to count.
     * @example
     * // Count the number of StudioBios
     * const count = await prisma.studioBio.count({
     *   where: {
     *     // ... the filter for the StudioBios we want to count
     *   }
     * })
    **/
    count<T extends StudioBioCountArgs>(
      args?: Subset<T, StudioBioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioBioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudioBio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudioBioAggregateArgs>(args: Subset<T, StudioBioAggregateArgs>): Prisma.PrismaPromise<GetStudioBioAggregateType<T>>

    /**
     * Group by StudioBio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioBioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudioBioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioBioGroupByArgs['orderBy'] }
        : { orderBy?: StudioBioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudioBioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioBioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudioBio model
   */
  readonly fields: StudioBioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudioBio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudioBioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudioBio model
   */
  interface StudioBioFieldRefs {
    readonly id: FieldRef<"StudioBio", 'String'>
    readonly artistName: FieldRef<"StudioBio", 'String'>
    readonly studioName: FieldRef<"StudioBio", 'String'>
    readonly philosophyQuote: FieldRef<"StudioBio", 'String'>
    readonly bioStatement: FieldRef<"StudioBio", 'String'>
    readonly portraitImage: FieldRef<"StudioBio", 'String'>
    readonly atelierLocation: FieldRef<"StudioBio", 'String'>
    readonly activeRepresentation: FieldRef<"StudioBio", 'String'>
    readonly createdAt: FieldRef<"StudioBio", 'DateTime'>
    readonly updatedAt: FieldRef<"StudioBio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudioBio findUnique
   */
  export type StudioBioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * Filter, which StudioBio to fetch.
     */
    where: StudioBioWhereUniqueInput
  }

  /**
   * StudioBio findUniqueOrThrow
   */
  export type StudioBioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * Filter, which StudioBio to fetch.
     */
    where: StudioBioWhereUniqueInput
  }

  /**
   * StudioBio findFirst
   */
  export type StudioBioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * Filter, which StudioBio to fetch.
     */
    where?: StudioBioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioBios to fetch.
     */
    orderBy?: StudioBioOrderByWithRelationInput | StudioBioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudioBios.
     */
    cursor?: StudioBioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioBios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioBios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudioBios.
     */
    distinct?: StudioBioScalarFieldEnum | StudioBioScalarFieldEnum[]
  }

  /**
   * StudioBio findFirstOrThrow
   */
  export type StudioBioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * Filter, which StudioBio to fetch.
     */
    where?: StudioBioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioBios to fetch.
     */
    orderBy?: StudioBioOrderByWithRelationInput | StudioBioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudioBios.
     */
    cursor?: StudioBioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioBios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioBios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudioBios.
     */
    distinct?: StudioBioScalarFieldEnum | StudioBioScalarFieldEnum[]
  }

  /**
   * StudioBio findMany
   */
  export type StudioBioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * Filter, which StudioBios to fetch.
     */
    where?: StudioBioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudioBios to fetch.
     */
    orderBy?: StudioBioOrderByWithRelationInput | StudioBioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudioBios.
     */
    cursor?: StudioBioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudioBios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudioBios.
     */
    skip?: number
    distinct?: StudioBioScalarFieldEnum | StudioBioScalarFieldEnum[]
  }

  /**
   * StudioBio create
   */
  export type StudioBioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * The data needed to create a StudioBio.
     */
    data: XOR<StudioBioCreateInput, StudioBioUncheckedCreateInput>
  }

  /**
   * StudioBio createMany
   */
  export type StudioBioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudioBios.
     */
    data: StudioBioCreateManyInput | StudioBioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudioBio update
   */
  export type StudioBioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * The data needed to update a StudioBio.
     */
    data: XOR<StudioBioUpdateInput, StudioBioUncheckedUpdateInput>
    /**
     * Choose, which StudioBio to update.
     */
    where: StudioBioWhereUniqueInput
  }

  /**
   * StudioBio updateMany
   */
  export type StudioBioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudioBios.
     */
    data: XOR<StudioBioUpdateManyMutationInput, StudioBioUncheckedUpdateManyInput>
    /**
     * Filter which StudioBios to update
     */
    where?: StudioBioWhereInput
    /**
     * Limit how many StudioBios to update.
     */
    limit?: number
  }

  /**
   * StudioBio upsert
   */
  export type StudioBioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * The filter to search for the StudioBio to update in case it exists.
     */
    where: StudioBioWhereUniqueInput
    /**
     * In case the StudioBio found by the `where` argument doesn't exist, create a new StudioBio with this data.
     */
    create: XOR<StudioBioCreateInput, StudioBioUncheckedCreateInput>
    /**
     * In case the StudioBio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudioBioUpdateInput, StudioBioUncheckedUpdateInput>
  }

  /**
   * StudioBio delete
   */
  export type StudioBioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
    /**
     * Filter which StudioBio to delete.
     */
    where: StudioBioWhereUniqueInput
  }

  /**
   * StudioBio deleteMany
   */
  export type StudioBioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudioBios to delete
     */
    where?: StudioBioWhereInput
    /**
     * Limit how many StudioBios to delete.
     */
    limit?: number
  }

  /**
   * StudioBio without action
   */
  export type StudioBioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioBio
     */
    select?: StudioBioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudioBio
     */
    omit?: StudioBioOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    role: 'role',
    avatarUrl: 'avatarUrl',
    phone: 'phone',
    organization: 'organization',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountUserScalarFieldEnum = (typeof AccountUserScalarFieldEnum)[keyof typeof AccountUserScalarFieldEnum]


  export const PhotoCategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotoCategoryScalarFieldEnum = (typeof PhotoCategoryScalarFieldEnum)[keyof typeof PhotoCategoryScalarFieldEnum]


  export const PhotoCollectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    rollNumber: 'rollNumber',
    medium: 'medium',
    curatorNote: 'curatorNote',
    aspect: 'aspect',
    aspectRatioClass: 'aspectRatioClass',
    coverImage: 'coverImage',
    imageCount: 'imageCount',
    isVisible: 'isVisible',
    featuredOnHome: 'featuredOnHome',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotoCollectionScalarFieldEnum = (typeof PhotoCollectionScalarFieldEnum)[keyof typeof PhotoCollectionScalarFieldEnum]


  export const ServicePackageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    serviceType: 'serviceType',
    basePrice: 'basePrice',
    priceDisplay: 'priceDisplay',
    durationEstimate: 'durationEstimate',
    deliverables: 'deliverables',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicePackageScalarFieldEnum = (typeof ServicePackageScalarFieldEnum)[keyof typeof ServicePackageScalarFieldEnum]


  export const PhotographyWorkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categoryId: 'categoryId',
    collectionId: 'collectionId',
    seriesName: 'seriesName',
    location: 'location',
    year: 'year',
    medium: 'medium',
    edition: 'edition',
    aspectRatio: 'aspectRatio',
    statement: 'statement',
    imageUrl: 'imageUrl',
    isFeatured: 'isFeatured',
    isArchived: 'isArchived',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotographyWorkScalarFieldEnum = (typeof PhotographyWorkScalarFieldEnum)[keyof typeof PhotographyWorkScalarFieldEnum]


  export const CommissionInquiryScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    servicePackageId: 'servicePackageId',
    clientName: 'clientName',
    clientEmail: 'clientEmail',
    organization: 'organization',
    projectType: 'projectType',
    budgetTier: 'budgetTier',
    projectBrief: 'projectBrief',
    clientMessage: 'clientMessage',
    targetTimeline: 'targetTimeline',
    location: 'location',
    status: 'status',
    curatorReply: 'curatorReply',
    repliedAt: 'repliedAt',
    repliedById: 'repliedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommissionInquiryScalarFieldEnum = (typeof CommissionInquiryScalarFieldEnum)[keyof typeof CommissionInquiryScalarFieldEnum]


  export const ExhibitionRecordScalarFieldEnum: {
    id: 'id',
    title: 'title',
    institution: 'institution',
    city: 'city',
    year: 'year',
    exhibitionType: 'exhibitionType',
    pressMention: 'pressMention',
    externalUrl: 'externalUrl',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExhibitionRecordScalarFieldEnum = (typeof ExhibitionRecordScalarFieldEnum)[keyof typeof ExhibitionRecordScalarFieldEnum]


  export const ClientTestimonialScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    clientName: 'clientName',
    clientTitle: 'clientTitle',
    organization: 'organization',
    quote: 'quote',
    serviceType: 'serviceType',
    rating: 'rating',
    avatarImage: 'avatarImage',
    isFeatured: 'isFeatured',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientTestimonialScalarFieldEnum = (typeof ClientTestimonialScalarFieldEnum)[keyof typeof ClientTestimonialScalarFieldEnum]


  export const StudioBioScalarFieldEnum: {
    id: 'id',
    artistName: 'artistName',
    studioName: 'studioName',
    philosophyQuote: 'philosophyQuote',
    bioStatement: 'bioStatement',
    portraitImage: 'portraitImage',
    atelierLocation: 'atelierLocation',
    activeRepresentation: 'activeRepresentation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudioBioScalarFieldEnum = (typeof StudioBioScalarFieldEnum)[keyof typeof StudioBioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountUserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    avatarUrl: 'avatarUrl',
    phone: 'phone',
    organization: 'organization'
  };

  export type AccountUserOrderByRelevanceFieldEnum = (typeof AccountUserOrderByRelevanceFieldEnum)[keyof typeof AccountUserOrderByRelevanceFieldEnum]


  export const PhotoCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description'
  };

  export type PhotoCategoryOrderByRelevanceFieldEnum = (typeof PhotoCategoryOrderByRelevanceFieldEnum)[keyof typeof PhotoCategoryOrderByRelevanceFieldEnum]


  export const PhotoCollectionOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    rollNumber: 'rollNumber',
    medium: 'medium',
    curatorNote: 'curatorNote',
    aspectRatioClass: 'aspectRatioClass',
    coverImage: 'coverImage'
  };

  export type PhotoCollectionOrderByRelevanceFieldEnum = (typeof PhotoCollectionOrderByRelevanceFieldEnum)[keyof typeof PhotoCollectionOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServicePackageOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    priceDisplay: 'priceDisplay',
    durationEstimate: 'durationEstimate'
  };

  export type ServicePackageOrderByRelevanceFieldEnum = (typeof ServicePackageOrderByRelevanceFieldEnum)[keyof typeof ServicePackageOrderByRelevanceFieldEnum]


  export const PhotographyWorkOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    categoryId: 'categoryId',
    collectionId: 'collectionId',
    seriesName: 'seriesName',
    location: 'location',
    medium: 'medium',
    edition: 'edition',
    statement: 'statement',
    imageUrl: 'imageUrl'
  };

  export type PhotographyWorkOrderByRelevanceFieldEnum = (typeof PhotographyWorkOrderByRelevanceFieldEnum)[keyof typeof PhotographyWorkOrderByRelevanceFieldEnum]


  export const CommissionInquiryOrderByRelevanceFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    servicePackageId: 'servicePackageId',
    clientName: 'clientName',
    clientEmail: 'clientEmail',
    organization: 'organization',
    budgetTier: 'budgetTier',
    projectBrief: 'projectBrief',
    clientMessage: 'clientMessage',
    targetTimeline: 'targetTimeline',
    location: 'location',
    curatorReply: 'curatorReply',
    repliedAt: 'repliedAt',
    repliedById: 'repliedById'
  };

  export type CommissionInquiryOrderByRelevanceFieldEnum = (typeof CommissionInquiryOrderByRelevanceFieldEnum)[keyof typeof CommissionInquiryOrderByRelevanceFieldEnum]


  export const ExhibitionRecordOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    institution: 'institution',
    city: 'city',
    pressMention: 'pressMention',
    externalUrl: 'externalUrl'
  };

  export type ExhibitionRecordOrderByRelevanceFieldEnum = (typeof ExhibitionRecordOrderByRelevanceFieldEnum)[keyof typeof ExhibitionRecordOrderByRelevanceFieldEnum]


  export const ClientTestimonialOrderByRelevanceFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    clientName: 'clientName',
    clientTitle: 'clientTitle',
    organization: 'organization',
    quote: 'quote',
    avatarImage: 'avatarImage'
  };

  export type ClientTestimonialOrderByRelevanceFieldEnum = (typeof ClientTestimonialOrderByRelevanceFieldEnum)[keyof typeof ClientTestimonialOrderByRelevanceFieldEnum]


  export const StudioBioOrderByRelevanceFieldEnum: {
    id: 'id',
    artistName: 'artistName',
    studioName: 'studioName',
    philosophyQuote: 'philosophyQuote',
    bioStatement: 'bioStatement',
    portraitImage: 'portraitImage',
    atelierLocation: 'atelierLocation',
    activeRepresentation: 'activeRepresentation'
  };

  export type StudioBioOrderByRelevanceFieldEnum = (typeof StudioBioOrderByRelevanceFieldEnum)[keyof typeof StudioBioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'AccountRole'
   */
  export type EnumAccountRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'AspectOrientation'
   */
  export type EnumAspectOrientationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AspectOrientation'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'InquiryStatus'
   */
  export type EnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus'>
    


  /**
   * Reference to a field of type 'ExhibitionType'
   */
  export type EnumExhibitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExhibitionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountUserWhereInput = {
    AND?: AccountUserWhereInput | AccountUserWhereInput[]
    OR?: AccountUserWhereInput[]
    NOT?: AccountUserWhereInput | AccountUserWhereInput[]
    id?: StringFilter<"AccountUser"> | string
    username?: StringFilter<"AccountUser"> | string
    email?: StringFilter<"AccountUser"> | string
    passwordHash?: StringFilter<"AccountUser"> | string
    fullName?: StringFilter<"AccountUser"> | string
    role?: EnumAccountRoleFilter<"AccountUser"> | $Enums.AccountRole
    avatarUrl?: StringNullableFilter<"AccountUser"> | string | null
    phone?: StringNullableFilter<"AccountUser"> | string | null
    organization?: StringNullableFilter<"AccountUser"> | string | null
    createdAt?: DateTimeFilter<"AccountUser"> | Date | string
    updatedAt?: DateTimeFilter<"AccountUser"> | Date | string
    clientInquiries?: CommissionInquiryListRelationFilter
    curatorReplies?: CommissionInquiryListRelationFilter
    testimonials?: ClientTestimonialListRelationFilter
  }

  export type AccountUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientInquiries?: CommissionInquiryOrderByRelationAggregateInput
    curatorReplies?: CommissionInquiryOrderByRelationAggregateInput
    testimonials?: ClientTestimonialOrderByRelationAggregateInput
    _relevance?: AccountUserOrderByRelevanceInput
  }

  export type AccountUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: AccountUserWhereInput | AccountUserWhereInput[]
    OR?: AccountUserWhereInput[]
    NOT?: AccountUserWhereInput | AccountUserWhereInput[]
    passwordHash?: StringFilter<"AccountUser"> | string
    fullName?: StringFilter<"AccountUser"> | string
    role?: EnumAccountRoleFilter<"AccountUser"> | $Enums.AccountRole
    avatarUrl?: StringNullableFilter<"AccountUser"> | string | null
    phone?: StringNullableFilter<"AccountUser"> | string | null
    organization?: StringNullableFilter<"AccountUser"> | string | null
    createdAt?: DateTimeFilter<"AccountUser"> | Date | string
    updatedAt?: DateTimeFilter<"AccountUser"> | Date | string
    clientInquiries?: CommissionInquiryListRelationFilter
    curatorReplies?: CommissionInquiryListRelationFilter
    testimonials?: ClientTestimonialListRelationFilter
  }, "id" | "username" | "email">

  export type AccountUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountUserCountOrderByAggregateInput
    _max?: AccountUserMaxOrderByAggregateInput
    _min?: AccountUserMinOrderByAggregateInput
  }

  export type AccountUserScalarWhereWithAggregatesInput = {
    AND?: AccountUserScalarWhereWithAggregatesInput | AccountUserScalarWhereWithAggregatesInput[]
    OR?: AccountUserScalarWhereWithAggregatesInput[]
    NOT?: AccountUserScalarWhereWithAggregatesInput | AccountUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountUser"> | string
    username?: StringWithAggregatesFilter<"AccountUser"> | string
    email?: StringWithAggregatesFilter<"AccountUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AccountUser"> | string
    fullName?: StringWithAggregatesFilter<"AccountUser"> | string
    role?: EnumAccountRoleWithAggregatesFilter<"AccountUser"> | $Enums.AccountRole
    avatarUrl?: StringNullableWithAggregatesFilter<"AccountUser"> | string | null
    phone?: StringNullableWithAggregatesFilter<"AccountUser"> | string | null
    organization?: StringNullableWithAggregatesFilter<"AccountUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccountUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountUser"> | Date | string
  }

  export type PhotoCategoryWhereInput = {
    AND?: PhotoCategoryWhereInput | PhotoCategoryWhereInput[]
    OR?: PhotoCategoryWhereInput[]
    NOT?: PhotoCategoryWhereInput | PhotoCategoryWhereInput[]
    id?: StringFilter<"PhotoCategory"> | string
    slug?: StringFilter<"PhotoCategory"> | string
    name?: StringFilter<"PhotoCategory"> | string
    description?: StringNullableFilter<"PhotoCategory"> | string | null
    sortOrder?: IntFilter<"PhotoCategory"> | number
    createdAt?: DateTimeFilter<"PhotoCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoCategory"> | Date | string
    works?: PhotographyWorkListRelationFilter
  }

  export type PhotoCategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    works?: PhotographyWorkOrderByRelationAggregateInput
    _relevance?: PhotoCategoryOrderByRelevanceInput
  }

  export type PhotoCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PhotoCategoryWhereInput | PhotoCategoryWhereInput[]
    OR?: PhotoCategoryWhereInput[]
    NOT?: PhotoCategoryWhereInput | PhotoCategoryWhereInput[]
    name?: StringFilter<"PhotoCategory"> | string
    description?: StringNullableFilter<"PhotoCategory"> | string | null
    sortOrder?: IntFilter<"PhotoCategory"> | number
    createdAt?: DateTimeFilter<"PhotoCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoCategory"> | Date | string
    works?: PhotographyWorkListRelationFilter
  }, "id" | "slug">

  export type PhotoCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotoCategoryCountOrderByAggregateInput
    _avg?: PhotoCategoryAvgOrderByAggregateInput
    _max?: PhotoCategoryMaxOrderByAggregateInput
    _min?: PhotoCategoryMinOrderByAggregateInput
    _sum?: PhotoCategorySumOrderByAggregateInput
  }

  export type PhotoCategoryScalarWhereWithAggregatesInput = {
    AND?: PhotoCategoryScalarWhereWithAggregatesInput | PhotoCategoryScalarWhereWithAggregatesInput[]
    OR?: PhotoCategoryScalarWhereWithAggregatesInput[]
    NOT?: PhotoCategoryScalarWhereWithAggregatesInput | PhotoCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoCategory"> | string
    slug?: StringWithAggregatesFilter<"PhotoCategory"> | string
    name?: StringWithAggregatesFilter<"PhotoCategory"> | string
    description?: StringNullableWithAggregatesFilter<"PhotoCategory"> | string | null
    sortOrder?: IntWithAggregatesFilter<"PhotoCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PhotoCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotoCategory"> | Date | string
  }

  export type PhotoCollectionWhereInput = {
    AND?: PhotoCollectionWhereInput | PhotoCollectionWhereInput[]
    OR?: PhotoCollectionWhereInput[]
    NOT?: PhotoCollectionWhereInput | PhotoCollectionWhereInput[]
    id?: StringFilter<"PhotoCollection"> | string
    title?: StringFilter<"PhotoCollection"> | string
    rollNumber?: StringFilter<"PhotoCollection"> | string
    medium?: StringFilter<"PhotoCollection"> | string
    curatorNote?: StringFilter<"PhotoCollection"> | string
    aspect?: EnumAspectOrientationFilter<"PhotoCollection"> | $Enums.AspectOrientation
    aspectRatioClass?: StringFilter<"PhotoCollection"> | string
    coverImage?: StringNullableFilter<"PhotoCollection"> | string | null
    imageCount?: IntFilter<"PhotoCollection"> | number
    isVisible?: BoolFilter<"PhotoCollection"> | boolean
    featuredOnHome?: BoolFilter<"PhotoCollection"> | boolean
    sortOrder?: IntFilter<"PhotoCollection"> | number
    createdAt?: DateTimeFilter<"PhotoCollection"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoCollection"> | Date | string
    works?: PhotographyWorkListRelationFilter
  }

  export type PhotoCollectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    rollNumber?: SortOrder
    medium?: SortOrder
    curatorNote?: SortOrder
    aspect?: SortOrder
    aspectRatioClass?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    imageCount?: SortOrder
    isVisible?: SortOrder
    featuredOnHome?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    works?: PhotographyWorkOrderByRelationAggregateInput
    _relevance?: PhotoCollectionOrderByRelevanceInput
  }

  export type PhotoCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoCollectionWhereInput | PhotoCollectionWhereInput[]
    OR?: PhotoCollectionWhereInput[]
    NOT?: PhotoCollectionWhereInput | PhotoCollectionWhereInput[]
    title?: StringFilter<"PhotoCollection"> | string
    rollNumber?: StringFilter<"PhotoCollection"> | string
    medium?: StringFilter<"PhotoCollection"> | string
    curatorNote?: StringFilter<"PhotoCollection"> | string
    aspect?: EnumAspectOrientationFilter<"PhotoCollection"> | $Enums.AspectOrientation
    aspectRatioClass?: StringFilter<"PhotoCollection"> | string
    coverImage?: StringNullableFilter<"PhotoCollection"> | string | null
    imageCount?: IntFilter<"PhotoCollection"> | number
    isVisible?: BoolFilter<"PhotoCollection"> | boolean
    featuredOnHome?: BoolFilter<"PhotoCollection"> | boolean
    sortOrder?: IntFilter<"PhotoCollection"> | number
    createdAt?: DateTimeFilter<"PhotoCollection"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoCollection"> | Date | string
    works?: PhotographyWorkListRelationFilter
  }, "id">

  export type PhotoCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    rollNumber?: SortOrder
    medium?: SortOrder
    curatorNote?: SortOrder
    aspect?: SortOrder
    aspectRatioClass?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    imageCount?: SortOrder
    isVisible?: SortOrder
    featuredOnHome?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotoCollectionCountOrderByAggregateInput
    _avg?: PhotoCollectionAvgOrderByAggregateInput
    _max?: PhotoCollectionMaxOrderByAggregateInput
    _min?: PhotoCollectionMinOrderByAggregateInput
    _sum?: PhotoCollectionSumOrderByAggregateInput
  }

  export type PhotoCollectionScalarWhereWithAggregatesInput = {
    AND?: PhotoCollectionScalarWhereWithAggregatesInput | PhotoCollectionScalarWhereWithAggregatesInput[]
    OR?: PhotoCollectionScalarWhereWithAggregatesInput[]
    NOT?: PhotoCollectionScalarWhereWithAggregatesInput | PhotoCollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoCollection"> | string
    title?: StringWithAggregatesFilter<"PhotoCollection"> | string
    rollNumber?: StringWithAggregatesFilter<"PhotoCollection"> | string
    medium?: StringWithAggregatesFilter<"PhotoCollection"> | string
    curatorNote?: StringWithAggregatesFilter<"PhotoCollection"> | string
    aspect?: EnumAspectOrientationWithAggregatesFilter<"PhotoCollection"> | $Enums.AspectOrientation
    aspectRatioClass?: StringWithAggregatesFilter<"PhotoCollection"> | string
    coverImage?: StringNullableWithAggregatesFilter<"PhotoCollection"> | string | null
    imageCount?: IntWithAggregatesFilter<"PhotoCollection"> | number
    isVisible?: BoolWithAggregatesFilter<"PhotoCollection"> | boolean
    featuredOnHome?: BoolWithAggregatesFilter<"PhotoCollection"> | boolean
    sortOrder?: IntWithAggregatesFilter<"PhotoCollection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PhotoCollection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotoCollection"> | Date | string
  }

  export type ServicePackageWhereInput = {
    AND?: ServicePackageWhereInput | ServicePackageWhereInput[]
    OR?: ServicePackageWhereInput[]
    NOT?: ServicePackageWhereInput | ServicePackageWhereInput[]
    id?: StringFilter<"ServicePackage"> | string
    title?: StringFilter<"ServicePackage"> | string
    serviceType?: EnumServiceTypeFilter<"ServicePackage"> | $Enums.ServiceType
    basePrice?: DecimalFilter<"ServicePackage"> | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFilter<"ServicePackage"> | string
    durationEstimate?: StringFilter<"ServicePackage"> | string
    deliverables?: JsonFilter<"ServicePackage">
    isActive?: BoolFilter<"ServicePackage"> | boolean
    sortOrder?: IntFilter<"ServicePackage"> | number
    createdAt?: DateTimeFilter<"ServicePackage"> | Date | string
    updatedAt?: DateTimeFilter<"ServicePackage"> | Date | string
    inquiries?: CommissionInquiryListRelationFilter
  }

  export type ServicePackageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    priceDisplay?: SortOrder
    durationEstimate?: SortOrder
    deliverables?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inquiries?: CommissionInquiryOrderByRelationAggregateInput
    _relevance?: ServicePackageOrderByRelevanceInput
  }

  export type ServicePackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicePackageWhereInput | ServicePackageWhereInput[]
    OR?: ServicePackageWhereInput[]
    NOT?: ServicePackageWhereInput | ServicePackageWhereInput[]
    title?: StringFilter<"ServicePackage"> | string
    serviceType?: EnumServiceTypeFilter<"ServicePackage"> | $Enums.ServiceType
    basePrice?: DecimalFilter<"ServicePackage"> | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFilter<"ServicePackage"> | string
    durationEstimate?: StringFilter<"ServicePackage"> | string
    deliverables?: JsonFilter<"ServicePackage">
    isActive?: BoolFilter<"ServicePackage"> | boolean
    sortOrder?: IntFilter<"ServicePackage"> | number
    createdAt?: DateTimeFilter<"ServicePackage"> | Date | string
    updatedAt?: DateTimeFilter<"ServicePackage"> | Date | string
    inquiries?: CommissionInquiryListRelationFilter
  }, "id">

  export type ServicePackageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    priceDisplay?: SortOrder
    durationEstimate?: SortOrder
    deliverables?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServicePackageCountOrderByAggregateInput
    _avg?: ServicePackageAvgOrderByAggregateInput
    _max?: ServicePackageMaxOrderByAggregateInput
    _min?: ServicePackageMinOrderByAggregateInput
    _sum?: ServicePackageSumOrderByAggregateInput
  }

  export type ServicePackageScalarWhereWithAggregatesInput = {
    AND?: ServicePackageScalarWhereWithAggregatesInput | ServicePackageScalarWhereWithAggregatesInput[]
    OR?: ServicePackageScalarWhereWithAggregatesInput[]
    NOT?: ServicePackageScalarWhereWithAggregatesInput | ServicePackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServicePackage"> | string
    title?: StringWithAggregatesFilter<"ServicePackage"> | string
    serviceType?: EnumServiceTypeWithAggregatesFilter<"ServicePackage"> | $Enums.ServiceType
    basePrice?: DecimalWithAggregatesFilter<"ServicePackage"> | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringWithAggregatesFilter<"ServicePackage"> | string
    durationEstimate?: StringWithAggregatesFilter<"ServicePackage"> | string
    deliverables?: JsonWithAggregatesFilter<"ServicePackage">
    isActive?: BoolWithAggregatesFilter<"ServicePackage"> | boolean
    sortOrder?: IntWithAggregatesFilter<"ServicePackage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ServicePackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServicePackage"> | Date | string
  }

  export type PhotographyWorkWhereInput = {
    AND?: PhotographyWorkWhereInput | PhotographyWorkWhereInput[]
    OR?: PhotographyWorkWhereInput[]
    NOT?: PhotographyWorkWhereInput | PhotographyWorkWhereInput[]
    id?: StringFilter<"PhotographyWork"> | string
    title?: StringFilter<"PhotographyWork"> | string
    categoryId?: StringFilter<"PhotographyWork"> | string
    collectionId?: StringNullableFilter<"PhotographyWork"> | string | null
    seriesName?: StringFilter<"PhotographyWork"> | string
    location?: StringFilter<"PhotographyWork"> | string
    year?: IntFilter<"PhotographyWork"> | number
    medium?: StringFilter<"PhotographyWork"> | string
    edition?: StringFilter<"PhotographyWork"> | string
    aspectRatio?: EnumAspectOrientationFilter<"PhotographyWork"> | $Enums.AspectOrientation
    statement?: StringFilter<"PhotographyWork"> | string
    imageUrl?: StringFilter<"PhotographyWork"> | string
    isFeatured?: BoolFilter<"PhotographyWork"> | boolean
    isArchived?: BoolFilter<"PhotographyWork"> | boolean
    sortOrder?: IntFilter<"PhotographyWork"> | number
    createdAt?: DateTimeFilter<"PhotographyWork"> | Date | string
    updatedAt?: DateTimeFilter<"PhotographyWork"> | Date | string
    category?: XOR<PhotoCategoryScalarRelationFilter, PhotoCategoryWhereInput>
    collection?: XOR<PhotoCollectionNullableScalarRelationFilter, PhotoCollectionWhereInput> | null
  }

  export type PhotographyWorkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrderInput | SortOrder
    seriesName?: SortOrder
    location?: SortOrder
    year?: SortOrder
    medium?: SortOrder
    edition?: SortOrder
    aspectRatio?: SortOrder
    statement?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: PhotoCategoryOrderByWithRelationInput
    collection?: PhotoCollectionOrderByWithRelationInput
    _relevance?: PhotographyWorkOrderByRelevanceInput
  }

  export type PhotographyWorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotographyWorkWhereInput | PhotographyWorkWhereInput[]
    OR?: PhotographyWorkWhereInput[]
    NOT?: PhotographyWorkWhereInput | PhotographyWorkWhereInput[]
    title?: StringFilter<"PhotographyWork"> | string
    categoryId?: StringFilter<"PhotographyWork"> | string
    collectionId?: StringNullableFilter<"PhotographyWork"> | string | null
    seriesName?: StringFilter<"PhotographyWork"> | string
    location?: StringFilter<"PhotographyWork"> | string
    year?: IntFilter<"PhotographyWork"> | number
    medium?: StringFilter<"PhotographyWork"> | string
    edition?: StringFilter<"PhotographyWork"> | string
    aspectRatio?: EnumAspectOrientationFilter<"PhotographyWork"> | $Enums.AspectOrientation
    statement?: StringFilter<"PhotographyWork"> | string
    imageUrl?: StringFilter<"PhotographyWork"> | string
    isFeatured?: BoolFilter<"PhotographyWork"> | boolean
    isArchived?: BoolFilter<"PhotographyWork"> | boolean
    sortOrder?: IntFilter<"PhotographyWork"> | number
    createdAt?: DateTimeFilter<"PhotographyWork"> | Date | string
    updatedAt?: DateTimeFilter<"PhotographyWork"> | Date | string
    category?: XOR<PhotoCategoryScalarRelationFilter, PhotoCategoryWhereInput>
    collection?: XOR<PhotoCollectionNullableScalarRelationFilter, PhotoCollectionWhereInput> | null
  }, "id">

  export type PhotographyWorkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrderInput | SortOrder
    seriesName?: SortOrder
    location?: SortOrder
    year?: SortOrder
    medium?: SortOrder
    edition?: SortOrder
    aspectRatio?: SortOrder
    statement?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotographyWorkCountOrderByAggregateInput
    _avg?: PhotographyWorkAvgOrderByAggregateInput
    _max?: PhotographyWorkMaxOrderByAggregateInput
    _min?: PhotographyWorkMinOrderByAggregateInput
    _sum?: PhotographyWorkSumOrderByAggregateInput
  }

  export type PhotographyWorkScalarWhereWithAggregatesInput = {
    AND?: PhotographyWorkScalarWhereWithAggregatesInput | PhotographyWorkScalarWhereWithAggregatesInput[]
    OR?: PhotographyWorkScalarWhereWithAggregatesInput[]
    NOT?: PhotographyWorkScalarWhereWithAggregatesInput | PhotographyWorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotographyWork"> | string
    title?: StringWithAggregatesFilter<"PhotographyWork"> | string
    categoryId?: StringWithAggregatesFilter<"PhotographyWork"> | string
    collectionId?: StringNullableWithAggregatesFilter<"PhotographyWork"> | string | null
    seriesName?: StringWithAggregatesFilter<"PhotographyWork"> | string
    location?: StringWithAggregatesFilter<"PhotographyWork"> | string
    year?: IntWithAggregatesFilter<"PhotographyWork"> | number
    medium?: StringWithAggregatesFilter<"PhotographyWork"> | string
    edition?: StringWithAggregatesFilter<"PhotographyWork"> | string
    aspectRatio?: EnumAspectOrientationWithAggregatesFilter<"PhotographyWork"> | $Enums.AspectOrientation
    statement?: StringWithAggregatesFilter<"PhotographyWork"> | string
    imageUrl?: StringWithAggregatesFilter<"PhotographyWork"> | string
    isFeatured?: BoolWithAggregatesFilter<"PhotographyWork"> | boolean
    isArchived?: BoolWithAggregatesFilter<"PhotographyWork"> | boolean
    sortOrder?: IntWithAggregatesFilter<"PhotographyWork"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PhotographyWork"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotographyWork"> | Date | string
  }

  export type CommissionInquiryWhereInput = {
    AND?: CommissionInquiryWhereInput | CommissionInquiryWhereInput[]
    OR?: CommissionInquiryWhereInput[]
    NOT?: CommissionInquiryWhereInput | CommissionInquiryWhereInput[]
    id?: StringFilter<"CommissionInquiry"> | string
    clientId?: StringFilter<"CommissionInquiry"> | string
    servicePackageId?: StringNullableFilter<"CommissionInquiry"> | string | null
    clientName?: StringFilter<"CommissionInquiry"> | string
    clientEmail?: StringFilter<"CommissionInquiry"> | string
    organization?: StringNullableFilter<"CommissionInquiry"> | string | null
    projectType?: EnumProjectTypeFilter<"CommissionInquiry"> | $Enums.ProjectType
    budgetTier?: StringFilter<"CommissionInquiry"> | string
    projectBrief?: StringFilter<"CommissionInquiry"> | string
    clientMessage?: StringNullableFilter<"CommissionInquiry"> | string | null
    targetTimeline?: StringFilter<"CommissionInquiry"> | string
    location?: StringNullableFilter<"CommissionInquiry"> | string | null
    status?: EnumInquiryStatusFilter<"CommissionInquiry"> | $Enums.InquiryStatus
    curatorReply?: StringNullableFilter<"CommissionInquiry"> | string | null
    repliedAt?: StringNullableFilter<"CommissionInquiry"> | string | null
    repliedById?: StringNullableFilter<"CommissionInquiry"> | string | null
    createdAt?: DateTimeFilter<"CommissionInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionInquiry"> | Date | string
    client?: XOR<AccountUserScalarRelationFilter, AccountUserWhereInput>
    servicePackage?: XOR<ServicePackageNullableScalarRelationFilter, ServicePackageWhereInput> | null
    repliedBy?: XOR<AccountUserNullableScalarRelationFilter, AccountUserWhereInput> | null
  }

  export type CommissionInquiryOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicePackageId?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    organization?: SortOrderInput | SortOrder
    projectType?: SortOrder
    budgetTier?: SortOrder
    projectBrief?: SortOrder
    clientMessage?: SortOrderInput | SortOrder
    targetTimeline?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    curatorReply?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    repliedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: AccountUserOrderByWithRelationInput
    servicePackage?: ServicePackageOrderByWithRelationInput
    repliedBy?: AccountUserOrderByWithRelationInput
    _relevance?: CommissionInquiryOrderByRelevanceInput
  }

  export type CommissionInquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommissionInquiryWhereInput | CommissionInquiryWhereInput[]
    OR?: CommissionInquiryWhereInput[]
    NOT?: CommissionInquiryWhereInput | CommissionInquiryWhereInput[]
    clientId?: StringFilter<"CommissionInquiry"> | string
    servicePackageId?: StringNullableFilter<"CommissionInquiry"> | string | null
    clientName?: StringFilter<"CommissionInquiry"> | string
    clientEmail?: StringFilter<"CommissionInquiry"> | string
    organization?: StringNullableFilter<"CommissionInquiry"> | string | null
    projectType?: EnumProjectTypeFilter<"CommissionInquiry"> | $Enums.ProjectType
    budgetTier?: StringFilter<"CommissionInquiry"> | string
    projectBrief?: StringFilter<"CommissionInquiry"> | string
    clientMessage?: StringNullableFilter<"CommissionInquiry"> | string | null
    targetTimeline?: StringFilter<"CommissionInquiry"> | string
    location?: StringNullableFilter<"CommissionInquiry"> | string | null
    status?: EnumInquiryStatusFilter<"CommissionInquiry"> | $Enums.InquiryStatus
    curatorReply?: StringNullableFilter<"CommissionInquiry"> | string | null
    repliedAt?: StringNullableFilter<"CommissionInquiry"> | string | null
    repliedById?: StringNullableFilter<"CommissionInquiry"> | string | null
    createdAt?: DateTimeFilter<"CommissionInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionInquiry"> | Date | string
    client?: XOR<AccountUserScalarRelationFilter, AccountUserWhereInput>
    servicePackage?: XOR<ServicePackageNullableScalarRelationFilter, ServicePackageWhereInput> | null
    repliedBy?: XOR<AccountUserNullableScalarRelationFilter, AccountUserWhereInput> | null
  }, "id">

  export type CommissionInquiryOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicePackageId?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    organization?: SortOrderInput | SortOrder
    projectType?: SortOrder
    budgetTier?: SortOrder
    projectBrief?: SortOrder
    clientMessage?: SortOrderInput | SortOrder
    targetTimeline?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    curatorReply?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    repliedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommissionInquiryCountOrderByAggregateInput
    _max?: CommissionInquiryMaxOrderByAggregateInput
    _min?: CommissionInquiryMinOrderByAggregateInput
  }

  export type CommissionInquiryScalarWhereWithAggregatesInput = {
    AND?: CommissionInquiryScalarWhereWithAggregatesInput | CommissionInquiryScalarWhereWithAggregatesInput[]
    OR?: CommissionInquiryScalarWhereWithAggregatesInput[]
    NOT?: CommissionInquiryScalarWhereWithAggregatesInput | CommissionInquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    clientId?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    servicePackageId?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    clientName?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    clientEmail?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    organization?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    projectType?: EnumProjectTypeWithAggregatesFilter<"CommissionInquiry"> | $Enums.ProjectType
    budgetTier?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    projectBrief?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    clientMessage?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    targetTimeline?: StringWithAggregatesFilter<"CommissionInquiry"> | string
    location?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    status?: EnumInquiryStatusWithAggregatesFilter<"CommissionInquiry"> | $Enums.InquiryStatus
    curatorReply?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    repliedAt?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    repliedById?: StringNullableWithAggregatesFilter<"CommissionInquiry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommissionInquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommissionInquiry"> | Date | string
  }

  export type ExhibitionRecordWhereInput = {
    AND?: ExhibitionRecordWhereInput | ExhibitionRecordWhereInput[]
    OR?: ExhibitionRecordWhereInput[]
    NOT?: ExhibitionRecordWhereInput | ExhibitionRecordWhereInput[]
    id?: StringFilter<"ExhibitionRecord"> | string
    title?: StringFilter<"ExhibitionRecord"> | string
    institution?: StringFilter<"ExhibitionRecord"> | string
    city?: StringFilter<"ExhibitionRecord"> | string
    year?: IntFilter<"ExhibitionRecord"> | number
    exhibitionType?: EnumExhibitionTypeFilter<"ExhibitionRecord"> | $Enums.ExhibitionType
    pressMention?: StringFilter<"ExhibitionRecord"> | string
    externalUrl?: StringNullableFilter<"ExhibitionRecord"> | string | null
    sortOrder?: IntFilter<"ExhibitionRecord"> | number
    createdAt?: DateTimeFilter<"ExhibitionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ExhibitionRecord"> | Date | string
  }

  export type ExhibitionRecordOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    city?: SortOrder
    year?: SortOrder
    exhibitionType?: SortOrder
    pressMention?: SortOrder
    externalUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ExhibitionRecordOrderByRelevanceInput
  }

  export type ExhibitionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExhibitionRecordWhereInput | ExhibitionRecordWhereInput[]
    OR?: ExhibitionRecordWhereInput[]
    NOT?: ExhibitionRecordWhereInput | ExhibitionRecordWhereInput[]
    title?: StringFilter<"ExhibitionRecord"> | string
    institution?: StringFilter<"ExhibitionRecord"> | string
    city?: StringFilter<"ExhibitionRecord"> | string
    year?: IntFilter<"ExhibitionRecord"> | number
    exhibitionType?: EnumExhibitionTypeFilter<"ExhibitionRecord"> | $Enums.ExhibitionType
    pressMention?: StringFilter<"ExhibitionRecord"> | string
    externalUrl?: StringNullableFilter<"ExhibitionRecord"> | string | null
    sortOrder?: IntFilter<"ExhibitionRecord"> | number
    createdAt?: DateTimeFilter<"ExhibitionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ExhibitionRecord"> | Date | string
  }, "id">

  export type ExhibitionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    city?: SortOrder
    year?: SortOrder
    exhibitionType?: SortOrder
    pressMention?: SortOrder
    externalUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExhibitionRecordCountOrderByAggregateInput
    _avg?: ExhibitionRecordAvgOrderByAggregateInput
    _max?: ExhibitionRecordMaxOrderByAggregateInput
    _min?: ExhibitionRecordMinOrderByAggregateInput
    _sum?: ExhibitionRecordSumOrderByAggregateInput
  }

  export type ExhibitionRecordScalarWhereWithAggregatesInput = {
    AND?: ExhibitionRecordScalarWhereWithAggregatesInput | ExhibitionRecordScalarWhereWithAggregatesInput[]
    OR?: ExhibitionRecordScalarWhereWithAggregatesInput[]
    NOT?: ExhibitionRecordScalarWhereWithAggregatesInput | ExhibitionRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExhibitionRecord"> | string
    title?: StringWithAggregatesFilter<"ExhibitionRecord"> | string
    institution?: StringWithAggregatesFilter<"ExhibitionRecord"> | string
    city?: StringWithAggregatesFilter<"ExhibitionRecord"> | string
    year?: IntWithAggregatesFilter<"ExhibitionRecord"> | number
    exhibitionType?: EnumExhibitionTypeWithAggregatesFilter<"ExhibitionRecord"> | $Enums.ExhibitionType
    pressMention?: StringWithAggregatesFilter<"ExhibitionRecord"> | string
    externalUrl?: StringNullableWithAggregatesFilter<"ExhibitionRecord"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ExhibitionRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExhibitionRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExhibitionRecord"> | Date | string
  }

  export type ClientTestimonialWhereInput = {
    AND?: ClientTestimonialWhereInput | ClientTestimonialWhereInput[]
    OR?: ClientTestimonialWhereInput[]
    NOT?: ClientTestimonialWhereInput | ClientTestimonialWhereInput[]
    id?: StringFilter<"ClientTestimonial"> | string
    clientId?: StringNullableFilter<"ClientTestimonial"> | string | null
    clientName?: StringFilter<"ClientTestimonial"> | string
    clientTitle?: StringFilter<"ClientTestimonial"> | string
    organization?: StringFilter<"ClientTestimonial"> | string
    quote?: StringFilter<"ClientTestimonial"> | string
    serviceType?: EnumProjectTypeFilter<"ClientTestimonial"> | $Enums.ProjectType
    rating?: IntFilter<"ClientTestimonial"> | number
    avatarImage?: StringNullableFilter<"ClientTestimonial"> | string | null
    isFeatured?: BoolFilter<"ClientTestimonial"> | boolean
    sortOrder?: IntFilter<"ClientTestimonial"> | number
    createdAt?: DateTimeFilter<"ClientTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"ClientTestimonial"> | Date | string
    client?: XOR<AccountUserNullableScalarRelationFilter, AccountUserWhereInput> | null
  }

  export type ClientTestimonialOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientTitle?: SortOrder
    organization?: SortOrder
    quote?: SortOrder
    serviceType?: SortOrder
    rating?: SortOrder
    avatarImage?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: AccountUserOrderByWithRelationInput
    _relevance?: ClientTestimonialOrderByRelevanceInput
  }

  export type ClientTestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientTestimonialWhereInput | ClientTestimonialWhereInput[]
    OR?: ClientTestimonialWhereInput[]
    NOT?: ClientTestimonialWhereInput | ClientTestimonialWhereInput[]
    clientId?: StringNullableFilter<"ClientTestimonial"> | string | null
    clientName?: StringFilter<"ClientTestimonial"> | string
    clientTitle?: StringFilter<"ClientTestimonial"> | string
    organization?: StringFilter<"ClientTestimonial"> | string
    quote?: StringFilter<"ClientTestimonial"> | string
    serviceType?: EnumProjectTypeFilter<"ClientTestimonial"> | $Enums.ProjectType
    rating?: IntFilter<"ClientTestimonial"> | number
    avatarImage?: StringNullableFilter<"ClientTestimonial"> | string | null
    isFeatured?: BoolFilter<"ClientTestimonial"> | boolean
    sortOrder?: IntFilter<"ClientTestimonial"> | number
    createdAt?: DateTimeFilter<"ClientTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"ClientTestimonial"> | Date | string
    client?: XOR<AccountUserNullableScalarRelationFilter, AccountUserWhereInput> | null
  }, "id">

  export type ClientTestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientTitle?: SortOrder
    organization?: SortOrder
    quote?: SortOrder
    serviceType?: SortOrder
    rating?: SortOrder
    avatarImage?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientTestimonialCountOrderByAggregateInput
    _avg?: ClientTestimonialAvgOrderByAggregateInput
    _max?: ClientTestimonialMaxOrderByAggregateInput
    _min?: ClientTestimonialMinOrderByAggregateInput
    _sum?: ClientTestimonialSumOrderByAggregateInput
  }

  export type ClientTestimonialScalarWhereWithAggregatesInput = {
    AND?: ClientTestimonialScalarWhereWithAggregatesInput | ClientTestimonialScalarWhereWithAggregatesInput[]
    OR?: ClientTestimonialScalarWhereWithAggregatesInput[]
    NOT?: ClientTestimonialScalarWhereWithAggregatesInput | ClientTestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientTestimonial"> | string
    clientId?: StringNullableWithAggregatesFilter<"ClientTestimonial"> | string | null
    clientName?: StringWithAggregatesFilter<"ClientTestimonial"> | string
    clientTitle?: StringWithAggregatesFilter<"ClientTestimonial"> | string
    organization?: StringWithAggregatesFilter<"ClientTestimonial"> | string
    quote?: StringWithAggregatesFilter<"ClientTestimonial"> | string
    serviceType?: EnumProjectTypeWithAggregatesFilter<"ClientTestimonial"> | $Enums.ProjectType
    rating?: IntWithAggregatesFilter<"ClientTestimonial"> | number
    avatarImage?: StringNullableWithAggregatesFilter<"ClientTestimonial"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"ClientTestimonial"> | boolean
    sortOrder?: IntWithAggregatesFilter<"ClientTestimonial"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ClientTestimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClientTestimonial"> | Date | string
  }

  export type StudioBioWhereInput = {
    AND?: StudioBioWhereInput | StudioBioWhereInput[]
    OR?: StudioBioWhereInput[]
    NOT?: StudioBioWhereInput | StudioBioWhereInput[]
    id?: StringFilter<"StudioBio"> | string
    artistName?: StringFilter<"StudioBio"> | string
    studioName?: StringFilter<"StudioBio"> | string
    philosophyQuote?: StringFilter<"StudioBio"> | string
    bioStatement?: StringFilter<"StudioBio"> | string
    portraitImage?: StringNullableFilter<"StudioBio"> | string | null
    atelierLocation?: StringFilter<"StudioBio"> | string
    activeRepresentation?: StringFilter<"StudioBio"> | string
    createdAt?: DateTimeFilter<"StudioBio"> | Date | string
    updatedAt?: DateTimeFilter<"StudioBio"> | Date | string
  }

  export type StudioBioOrderByWithRelationInput = {
    id?: SortOrder
    artistName?: SortOrder
    studioName?: SortOrder
    philosophyQuote?: SortOrder
    bioStatement?: SortOrder
    portraitImage?: SortOrderInput | SortOrder
    atelierLocation?: SortOrder
    activeRepresentation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: StudioBioOrderByRelevanceInput
  }

  export type StudioBioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudioBioWhereInput | StudioBioWhereInput[]
    OR?: StudioBioWhereInput[]
    NOT?: StudioBioWhereInput | StudioBioWhereInput[]
    artistName?: StringFilter<"StudioBio"> | string
    studioName?: StringFilter<"StudioBio"> | string
    philosophyQuote?: StringFilter<"StudioBio"> | string
    bioStatement?: StringFilter<"StudioBio"> | string
    portraitImage?: StringNullableFilter<"StudioBio"> | string | null
    atelierLocation?: StringFilter<"StudioBio"> | string
    activeRepresentation?: StringFilter<"StudioBio"> | string
    createdAt?: DateTimeFilter<"StudioBio"> | Date | string
    updatedAt?: DateTimeFilter<"StudioBio"> | Date | string
  }, "id">

  export type StudioBioOrderByWithAggregationInput = {
    id?: SortOrder
    artistName?: SortOrder
    studioName?: SortOrder
    philosophyQuote?: SortOrder
    bioStatement?: SortOrder
    portraitImage?: SortOrderInput | SortOrder
    atelierLocation?: SortOrder
    activeRepresentation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudioBioCountOrderByAggregateInput
    _max?: StudioBioMaxOrderByAggregateInput
    _min?: StudioBioMinOrderByAggregateInput
  }

  export type StudioBioScalarWhereWithAggregatesInput = {
    AND?: StudioBioScalarWhereWithAggregatesInput | StudioBioScalarWhereWithAggregatesInput[]
    OR?: StudioBioScalarWhereWithAggregatesInput[]
    NOT?: StudioBioScalarWhereWithAggregatesInput | StudioBioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudioBio"> | string
    artistName?: StringWithAggregatesFilter<"StudioBio"> | string
    studioName?: StringWithAggregatesFilter<"StudioBio"> | string
    philosophyQuote?: StringWithAggregatesFilter<"StudioBio"> | string
    bioStatement?: StringWithAggregatesFilter<"StudioBio"> | string
    portraitImage?: StringNullableWithAggregatesFilter<"StudioBio"> | string | null
    atelierLocation?: StringWithAggregatesFilter<"StudioBio"> | string
    activeRepresentation?: StringWithAggregatesFilter<"StudioBio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudioBio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudioBio"> | Date | string
  }

  export type AccountUserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientInquiries?: CommissionInquiryCreateNestedManyWithoutClientInput
    curatorReplies?: CommissionInquiryCreateNestedManyWithoutRepliedByInput
    testimonials?: ClientTestimonialCreateNestedManyWithoutClientInput
  }

  export type AccountUserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientInquiries?: CommissionInquiryUncheckedCreateNestedManyWithoutClientInput
    curatorReplies?: CommissionInquiryUncheckedCreateNestedManyWithoutRepliedByInput
    testimonials?: ClientTestimonialUncheckedCreateNestedManyWithoutClientInput
  }

  export type AccountUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientInquiries?: CommissionInquiryUpdateManyWithoutClientNestedInput
    curatorReplies?: CommissionInquiryUpdateManyWithoutRepliedByNestedInput
    testimonials?: ClientTestimonialUpdateManyWithoutClientNestedInput
  }

  export type AccountUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientInquiries?: CommissionInquiryUncheckedUpdateManyWithoutClientNestedInput
    curatorReplies?: CommissionInquiryUncheckedUpdateManyWithoutRepliedByNestedInput
    testimonials?: ClientTestimonialUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AccountUserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCategoryCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: PhotographyWorkCreateNestedManyWithoutCategoryInput
  }

  export type PhotoCategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: PhotographyWorkUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PhotoCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: PhotographyWorkUpdateManyWithoutCategoryNestedInput
  }

  export type PhotoCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: PhotographyWorkUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PhotoCategoryCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCollectionCreateInput = {
    id?: string
    title: string
    rollNumber: string
    medium: string
    curatorNote: string
    aspect?: $Enums.AspectOrientation
    aspectRatioClass?: string
    coverImage?: string | null
    imageCount?: number
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: PhotographyWorkCreateNestedManyWithoutCollectionInput
  }

  export type PhotoCollectionUncheckedCreateInput = {
    id?: string
    title: string
    rollNumber: string
    medium: string
    curatorNote: string
    aspect?: $Enums.AspectOrientation
    aspectRatioClass?: string
    coverImage?: string | null
    imageCount?: number
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: PhotographyWorkUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type PhotoCollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rollNumber?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    curatorNote?: StringFieldUpdateOperationsInput | string
    aspect?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    aspectRatioClass?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    imageCount?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    featuredOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: PhotographyWorkUpdateManyWithoutCollectionNestedInput
  }

  export type PhotoCollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rollNumber?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    curatorNote?: StringFieldUpdateOperationsInput | string
    aspect?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    aspectRatioClass?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    imageCount?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    featuredOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: PhotographyWorkUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type PhotoCollectionCreateManyInput = {
    id?: string
    title: string
    rollNumber: string
    medium: string
    curatorNote: string
    aspect?: $Enums.AspectOrientation
    aspectRatioClass?: string
    coverImage?: string | null
    imageCount?: number
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rollNumber?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    curatorNote?: StringFieldUpdateOperationsInput | string
    aspect?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    aspectRatioClass?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    imageCount?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    featuredOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rollNumber?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    curatorNote?: StringFieldUpdateOperationsInput | string
    aspect?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    aspectRatioClass?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    imageCount?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    featuredOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageCreateInput = {
    id?: string
    title: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    priceDisplay: string
    durationEstimate: string
    deliverables:(Array<string>)
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inquiries?: CommissionInquiryCreateNestedManyWithoutServicePackageInput
  }

  export type ServicePackageUncheckedCreateInput = {
    id?: string
    title: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    priceDisplay: string
    durationEstimate: string
    deliverables:(Array<string>)
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inquiries?: CommissionInquiryUncheckedCreateNestedManyWithoutServicePackageInput
  }

  export type ServicePackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFieldUpdateOperationsInput | string
    durationEstimate?: StringFieldUpdateOperationsInput | string
    deliverables?:(Array<string>)
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inquiries?: CommissionInquiryUpdateManyWithoutServicePackageNestedInput
  }

  export type ServicePackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFieldUpdateOperationsInput | string
    durationEstimate?: StringFieldUpdateOperationsInput | string
    deliverables?:(Array<string>)
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inquiries?: CommissionInquiryUncheckedUpdateManyWithoutServicePackageNestedInput
  }

  export type ServicePackageCreateManyInput = {
    id?: string
    title: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    priceDisplay: string
    durationEstimate: string
    deliverables:(Array<string>)
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicePackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFieldUpdateOperationsInput | string
    durationEstimate?: StringFieldUpdateOperationsInput | string
    deliverables?:(Array<string>)
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFieldUpdateOperationsInput | string
    durationEstimate?: StringFieldUpdateOperationsInput | string
    deliverables?:(Array<string>)
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkCreateInput = {
    id?: string
    title: string
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PhotoCategoryCreateNestedOneWithoutWorksInput
    collection?: PhotoCollectionCreateNestedOneWithoutWorksInput
  }

  export type PhotographyWorkUncheckedCreateInput = {
    id?: string
    title: string
    categoryId: string
    collectionId?: string | null
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotographyWorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PhotoCategoryUpdateOneRequiredWithoutWorksNestedInput
    collection?: PhotoCollectionUpdateOneWithoutWorksNestedInput
  }

  export type PhotographyWorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkCreateManyInput = {
    id?: string
    title: string
    categoryId: string
    collectionId?: string | null
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotographyWorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryCreateInput = {
    id?: string
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: AccountUserCreateNestedOneWithoutClientInquiriesInput
    servicePackage?: ServicePackageCreateNestedOneWithoutInquiriesInput
    repliedBy?: AccountUserCreateNestedOneWithoutCuratorRepliesInput
  }

  export type CommissionInquiryUncheckedCreateInput = {
    id?: string
    clientId: string
    servicePackageId?: string | null
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: AccountUserUpdateOneRequiredWithoutClientInquiriesNestedInput
    servicePackage?: ServicePackageUpdateOneWithoutInquiriesNestedInput
    repliedBy?: AccountUserUpdateOneWithoutCuratorRepliesNestedInput
  }

  export type CommissionInquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    servicePackageId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryCreateManyInput = {
    id?: string
    clientId: string
    servicePackageId?: string | null
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    servicePackageId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionRecordCreateInput = {
    id?: string
    title: string
    institution: string
    city: string
    year: number
    exhibitionType: $Enums.ExhibitionType
    pressMention: string
    externalUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionRecordUncheckedCreateInput = {
    id?: string
    title: string
    institution: string
    city: string
    year: number
    exhibitionType: $Enums.ExhibitionType
    pressMention: string
    externalUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    exhibitionType?: EnumExhibitionTypeFieldUpdateOperationsInput | $Enums.ExhibitionType
    pressMention?: StringFieldUpdateOperationsInput | string
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    exhibitionType?: EnumExhibitionTypeFieldUpdateOperationsInput | $Enums.ExhibitionType
    pressMention?: StringFieldUpdateOperationsInput | string
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionRecordCreateManyInput = {
    id?: string
    title: string
    institution: string
    city: string
    year: number
    exhibitionType: $Enums.ExhibitionType
    pressMention: string
    externalUrl?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    exhibitionType?: EnumExhibitionTypeFieldUpdateOperationsInput | $Enums.ExhibitionType
    pressMention?: StringFieldUpdateOperationsInput | string
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    exhibitionType?: EnumExhibitionTypeFieldUpdateOperationsInput | $Enums.ExhibitionType
    pressMention?: StringFieldUpdateOperationsInput | string
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestimonialCreateInput = {
    id?: string
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating?: number
    avatarImage?: string | null
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: AccountUserCreateNestedOneWithoutTestimonialsInput
  }

  export type ClientTestimonialUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating?: number
    avatarImage?: string | null
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientTestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: AccountUserUpdateOneWithoutTestimonialsNestedInput
  }

  export type ClientTestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestimonialCreateManyInput = {
    id?: string
    clientId?: string | null
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating?: number
    avatarImage?: string | null
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientTestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioBioCreateInput = {
    id?: string
    artistName: string
    studioName: string
    philosophyQuote: string
    bioStatement: string
    portraitImage?: string | null
    atelierLocation: string
    activeRepresentation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudioBioUncheckedCreateInput = {
    id?: string
    artistName: string
    studioName: string
    philosophyQuote: string
    bioStatement: string
    portraitImage?: string | null
    atelierLocation: string
    activeRepresentation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudioBioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    studioName?: StringFieldUpdateOperationsInput | string
    philosophyQuote?: StringFieldUpdateOperationsInput | string
    bioStatement?: StringFieldUpdateOperationsInput | string
    portraitImage?: NullableStringFieldUpdateOperationsInput | string | null
    atelierLocation?: StringFieldUpdateOperationsInput | string
    activeRepresentation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioBioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    studioName?: StringFieldUpdateOperationsInput | string
    philosophyQuote?: StringFieldUpdateOperationsInput | string
    bioStatement?: StringFieldUpdateOperationsInput | string
    portraitImage?: NullableStringFieldUpdateOperationsInput | string | null
    atelierLocation?: StringFieldUpdateOperationsInput | string
    activeRepresentation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioBioCreateManyInput = {
    id?: string
    artistName: string
    studioName: string
    philosophyQuote: string
    bioStatement: string
    portraitImage?: string | null
    atelierLocation: string
    activeRepresentation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudioBioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    studioName?: StringFieldUpdateOperationsInput | string
    philosophyQuote?: StringFieldUpdateOperationsInput | string
    bioStatement?: StringFieldUpdateOperationsInput | string
    portraitImage?: NullableStringFieldUpdateOperationsInput | string | null
    atelierLocation?: StringFieldUpdateOperationsInput | string
    activeRepresentation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioBioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    studioName?: StringFieldUpdateOperationsInput | string
    philosophyQuote?: StringFieldUpdateOperationsInput | string
    bioStatement?: StringFieldUpdateOperationsInput | string
    portraitImage?: NullableStringFieldUpdateOperationsInput | string | null
    atelierLocation?: StringFieldUpdateOperationsInput | string
    activeRepresentation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAccountRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[]
    notIn?: $Enums.AccountRole[]
    not?: NestedEnumAccountRoleFilter<$PrismaModel> | $Enums.AccountRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommissionInquiryListRelationFilter = {
    every?: CommissionInquiryWhereInput
    some?: CommissionInquiryWhereInput
    none?: CommissionInquiryWhereInput
  }

  export type ClientTestimonialListRelationFilter = {
    every?: ClientTestimonialWhereInput
    some?: ClientTestimonialWhereInput
    none?: ClientTestimonialWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommissionInquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientTestimonialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountUserOrderByRelevanceInput = {
    fields: AccountUserOrderByRelevanceFieldEnum | AccountUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAccountRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[]
    notIn?: $Enums.AccountRole[]
    not?: NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel> | $Enums.AccountRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountRoleFilter<$PrismaModel>
    _max?: NestedEnumAccountRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PhotographyWorkListRelationFilter = {
    every?: PhotographyWorkWhereInput
    some?: PhotographyWorkWhereInput
    none?: PhotographyWorkWhereInput
  }

  export type PhotographyWorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCategoryOrderByRelevanceInput = {
    fields: PhotoCategoryOrderByRelevanceFieldEnum | PhotoCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PhotoCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAspectOrientationFilter<$PrismaModel = never> = {
    equals?: $Enums.AspectOrientation | EnumAspectOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.AspectOrientation[]
    notIn?: $Enums.AspectOrientation[]
    not?: NestedEnumAspectOrientationFilter<$PrismaModel> | $Enums.AspectOrientation
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PhotoCollectionOrderByRelevanceInput = {
    fields: PhotoCollectionOrderByRelevanceFieldEnum | PhotoCollectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    rollNumber?: SortOrder
    medium?: SortOrder
    curatorNote?: SortOrder
    aspect?: SortOrder
    aspectRatioClass?: SortOrder
    coverImage?: SortOrder
    imageCount?: SortOrder
    isVisible?: SortOrder
    featuredOnHome?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCollectionAvgOrderByAggregateInput = {
    imageCount?: SortOrder
    sortOrder?: SortOrder
  }

  export type PhotoCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    rollNumber?: SortOrder
    medium?: SortOrder
    curatorNote?: SortOrder
    aspect?: SortOrder
    aspectRatioClass?: SortOrder
    coverImage?: SortOrder
    imageCount?: SortOrder
    isVisible?: SortOrder
    featuredOnHome?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    rollNumber?: SortOrder
    medium?: SortOrder
    curatorNote?: SortOrder
    aspect?: SortOrder
    aspectRatioClass?: SortOrder
    coverImage?: SortOrder
    imageCount?: SortOrder
    isVisible?: SortOrder
    featuredOnHome?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoCollectionSumOrderByAggregateInput = {
    imageCount?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumAspectOrientationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AspectOrientation | EnumAspectOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.AspectOrientation[]
    notIn?: $Enums.AspectOrientation[]
    not?: NestedEnumAspectOrientationWithAggregatesFilter<$PrismaModel> | $Enums.AspectOrientation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAspectOrientationFilter<$PrismaModel>
    _max?: NestedEnumAspectOrientationFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ServicePackageOrderByRelevanceInput = {
    fields: ServicePackageOrderByRelevanceFieldEnum | ServicePackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServicePackageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    priceDisplay?: SortOrder
    durationEstimate?: SortOrder
    deliverables?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicePackageAvgOrderByAggregateInput = {
    basePrice?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServicePackageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    priceDisplay?: SortOrder
    durationEstimate?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicePackageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    priceDisplay?: SortOrder
    durationEstimate?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicePackageSumOrderByAggregateInput = {
    basePrice?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PhotoCategoryScalarRelationFilter = {
    is?: PhotoCategoryWhereInput
    isNot?: PhotoCategoryWhereInput
  }

  export type PhotoCollectionNullableScalarRelationFilter = {
    is?: PhotoCollectionWhereInput | null
    isNot?: PhotoCollectionWhereInput | null
  }

  export type PhotographyWorkOrderByRelevanceInput = {
    fields: PhotographyWorkOrderByRelevanceFieldEnum | PhotographyWorkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotographyWorkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrder
    seriesName?: SortOrder
    location?: SortOrder
    year?: SortOrder
    medium?: SortOrder
    edition?: SortOrder
    aspectRatio?: SortOrder
    statement?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotographyWorkAvgOrderByAggregateInput = {
    year?: SortOrder
    sortOrder?: SortOrder
  }

  export type PhotographyWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrder
    seriesName?: SortOrder
    location?: SortOrder
    year?: SortOrder
    medium?: SortOrder
    edition?: SortOrder
    aspectRatio?: SortOrder
    statement?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotographyWorkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    collectionId?: SortOrder
    seriesName?: SortOrder
    location?: SortOrder
    year?: SortOrder
    medium?: SortOrder
    edition?: SortOrder
    aspectRatio?: SortOrder
    statement?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotographyWorkSumOrderByAggregateInput = {
    year?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type EnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type AccountUserScalarRelationFilter = {
    is?: AccountUserWhereInput
    isNot?: AccountUserWhereInput
  }

  export type ServicePackageNullableScalarRelationFilter = {
    is?: ServicePackageWhereInput | null
    isNot?: ServicePackageWhereInput | null
  }

  export type AccountUserNullableScalarRelationFilter = {
    is?: AccountUserWhereInput | null
    isNot?: AccountUserWhereInput | null
  }

  export type CommissionInquiryOrderByRelevanceInput = {
    fields: CommissionInquiryOrderByRelevanceFieldEnum | CommissionInquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommissionInquiryCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicePackageId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    organization?: SortOrder
    projectType?: SortOrder
    budgetTier?: SortOrder
    projectBrief?: SortOrder
    clientMessage?: SortOrder
    targetTimeline?: SortOrder
    location?: SortOrder
    status?: SortOrder
    curatorReply?: SortOrder
    repliedAt?: SortOrder
    repliedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionInquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicePackageId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    organization?: SortOrder
    projectType?: SortOrder
    budgetTier?: SortOrder
    projectBrief?: SortOrder
    clientMessage?: SortOrder
    targetTimeline?: SortOrder
    location?: SortOrder
    status?: SortOrder
    curatorReply?: SortOrder
    repliedAt?: SortOrder
    repliedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionInquiryMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicePackageId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    organization?: SortOrder
    projectType?: SortOrder
    budgetTier?: SortOrder
    projectBrief?: SortOrder
    clientMessage?: SortOrder
    targetTimeline?: SortOrder
    location?: SortOrder
    status?: SortOrder
    curatorReply?: SortOrder
    repliedAt?: SortOrder
    repliedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type EnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type EnumExhibitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExhibitionType | EnumExhibitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExhibitionType[]
    notIn?: $Enums.ExhibitionType[]
    not?: NestedEnumExhibitionTypeFilter<$PrismaModel> | $Enums.ExhibitionType
  }

  export type ExhibitionRecordOrderByRelevanceInput = {
    fields: ExhibitionRecordOrderByRelevanceFieldEnum | ExhibitionRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExhibitionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    city?: SortOrder
    year?: SortOrder
    exhibitionType?: SortOrder
    pressMention?: SortOrder
    externalUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionRecordAvgOrderByAggregateInput = {
    year?: SortOrder
    sortOrder?: SortOrder
  }

  export type ExhibitionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    city?: SortOrder
    year?: SortOrder
    exhibitionType?: SortOrder
    pressMention?: SortOrder
    externalUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    city?: SortOrder
    year?: SortOrder
    exhibitionType?: SortOrder
    pressMention?: SortOrder
    externalUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionRecordSumOrderByAggregateInput = {
    year?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumExhibitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExhibitionType | EnumExhibitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExhibitionType[]
    notIn?: $Enums.ExhibitionType[]
    not?: NestedEnumExhibitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExhibitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExhibitionTypeFilter<$PrismaModel>
    _max?: NestedEnumExhibitionTypeFilter<$PrismaModel>
  }

  export type ClientTestimonialOrderByRelevanceInput = {
    fields: ClientTestimonialOrderByRelevanceFieldEnum | ClientTestimonialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientTestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientTitle?: SortOrder
    organization?: SortOrder
    quote?: SortOrder
    serviceType?: SortOrder
    rating?: SortOrder
    avatarImage?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientTestimonialAvgOrderByAggregateInput = {
    rating?: SortOrder
    sortOrder?: SortOrder
  }

  export type ClientTestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientTitle?: SortOrder
    organization?: SortOrder
    quote?: SortOrder
    serviceType?: SortOrder
    rating?: SortOrder
    avatarImage?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientTestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientTitle?: SortOrder
    organization?: SortOrder
    quote?: SortOrder
    serviceType?: SortOrder
    rating?: SortOrder
    avatarImage?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientTestimonialSumOrderByAggregateInput = {
    rating?: SortOrder
    sortOrder?: SortOrder
  }

  export type StudioBioOrderByRelevanceInput = {
    fields: StudioBioOrderByRelevanceFieldEnum | StudioBioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudioBioCountOrderByAggregateInput = {
    id?: SortOrder
    artistName?: SortOrder
    studioName?: SortOrder
    philosophyQuote?: SortOrder
    bioStatement?: SortOrder
    portraitImage?: SortOrder
    atelierLocation?: SortOrder
    activeRepresentation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudioBioMaxOrderByAggregateInput = {
    id?: SortOrder
    artistName?: SortOrder
    studioName?: SortOrder
    philosophyQuote?: SortOrder
    bioStatement?: SortOrder
    portraitImage?: SortOrder
    atelierLocation?: SortOrder
    activeRepresentation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudioBioMinOrderByAggregateInput = {
    id?: SortOrder
    artistName?: SortOrder
    studioName?: SortOrder
    philosophyQuote?: SortOrder
    bioStatement?: SortOrder
    portraitImage?: SortOrder
    atelierLocation?: SortOrder
    activeRepresentation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionInquiryCreateNestedManyWithoutClientInput = {
    create?: XOR<CommissionInquiryCreateWithoutClientInput, CommissionInquiryUncheckedCreateWithoutClientInput> | CommissionInquiryCreateWithoutClientInput[] | CommissionInquiryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutClientInput | CommissionInquiryCreateOrConnectWithoutClientInput[]
    createMany?: CommissionInquiryCreateManyClientInputEnvelope
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
  }

  export type CommissionInquiryCreateNestedManyWithoutRepliedByInput = {
    create?: XOR<CommissionInquiryCreateWithoutRepliedByInput, CommissionInquiryUncheckedCreateWithoutRepliedByInput> | CommissionInquiryCreateWithoutRepliedByInput[] | CommissionInquiryUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutRepliedByInput | CommissionInquiryCreateOrConnectWithoutRepliedByInput[]
    createMany?: CommissionInquiryCreateManyRepliedByInputEnvelope
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
  }

  export type ClientTestimonialCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientTestimonialCreateWithoutClientInput, ClientTestimonialUncheckedCreateWithoutClientInput> | ClientTestimonialCreateWithoutClientInput[] | ClientTestimonialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTestimonialCreateOrConnectWithoutClientInput | ClientTestimonialCreateOrConnectWithoutClientInput[]
    createMany?: ClientTestimonialCreateManyClientInputEnvelope
    connect?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
  }

  export type CommissionInquiryUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CommissionInquiryCreateWithoutClientInput, CommissionInquiryUncheckedCreateWithoutClientInput> | CommissionInquiryCreateWithoutClientInput[] | CommissionInquiryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutClientInput | CommissionInquiryCreateOrConnectWithoutClientInput[]
    createMany?: CommissionInquiryCreateManyClientInputEnvelope
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
  }

  export type CommissionInquiryUncheckedCreateNestedManyWithoutRepliedByInput = {
    create?: XOR<CommissionInquiryCreateWithoutRepliedByInput, CommissionInquiryUncheckedCreateWithoutRepliedByInput> | CommissionInquiryCreateWithoutRepliedByInput[] | CommissionInquiryUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutRepliedByInput | CommissionInquiryCreateOrConnectWithoutRepliedByInput[]
    createMany?: CommissionInquiryCreateManyRepliedByInputEnvelope
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
  }

  export type ClientTestimonialUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientTestimonialCreateWithoutClientInput, ClientTestimonialUncheckedCreateWithoutClientInput> | ClientTestimonialCreateWithoutClientInput[] | ClientTestimonialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTestimonialCreateOrConnectWithoutClientInput | ClientTestimonialCreateOrConnectWithoutClientInput[]
    createMany?: ClientTestimonialCreateManyClientInputEnvelope
    connect?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountRoleFieldUpdateOperationsInput = {
    set?: $Enums.AccountRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommissionInquiryUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommissionInquiryCreateWithoutClientInput, CommissionInquiryUncheckedCreateWithoutClientInput> | CommissionInquiryCreateWithoutClientInput[] | CommissionInquiryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutClientInput | CommissionInquiryCreateOrConnectWithoutClientInput[]
    upsert?: CommissionInquiryUpsertWithWhereUniqueWithoutClientInput | CommissionInquiryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommissionInquiryCreateManyClientInputEnvelope
    set?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    disconnect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    delete?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    update?: CommissionInquiryUpdateWithWhereUniqueWithoutClientInput | CommissionInquiryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommissionInquiryUpdateManyWithWhereWithoutClientInput | CommissionInquiryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
  }

  export type CommissionInquiryUpdateManyWithoutRepliedByNestedInput = {
    create?: XOR<CommissionInquiryCreateWithoutRepliedByInput, CommissionInquiryUncheckedCreateWithoutRepliedByInput> | CommissionInquiryCreateWithoutRepliedByInput[] | CommissionInquiryUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutRepliedByInput | CommissionInquiryCreateOrConnectWithoutRepliedByInput[]
    upsert?: CommissionInquiryUpsertWithWhereUniqueWithoutRepliedByInput | CommissionInquiryUpsertWithWhereUniqueWithoutRepliedByInput[]
    createMany?: CommissionInquiryCreateManyRepliedByInputEnvelope
    set?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    disconnect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    delete?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    update?: CommissionInquiryUpdateWithWhereUniqueWithoutRepliedByInput | CommissionInquiryUpdateWithWhereUniqueWithoutRepliedByInput[]
    updateMany?: CommissionInquiryUpdateManyWithWhereWithoutRepliedByInput | CommissionInquiryUpdateManyWithWhereWithoutRepliedByInput[]
    deleteMany?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
  }

  export type ClientTestimonialUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientTestimonialCreateWithoutClientInput, ClientTestimonialUncheckedCreateWithoutClientInput> | ClientTestimonialCreateWithoutClientInput[] | ClientTestimonialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTestimonialCreateOrConnectWithoutClientInput | ClientTestimonialCreateOrConnectWithoutClientInput[]
    upsert?: ClientTestimonialUpsertWithWhereUniqueWithoutClientInput | ClientTestimonialUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientTestimonialCreateManyClientInputEnvelope
    set?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    disconnect?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    delete?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    connect?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    update?: ClientTestimonialUpdateWithWhereUniqueWithoutClientInput | ClientTestimonialUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientTestimonialUpdateManyWithWhereWithoutClientInput | ClientTestimonialUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientTestimonialScalarWhereInput | ClientTestimonialScalarWhereInput[]
  }

  export type CommissionInquiryUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommissionInquiryCreateWithoutClientInput, CommissionInquiryUncheckedCreateWithoutClientInput> | CommissionInquiryCreateWithoutClientInput[] | CommissionInquiryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutClientInput | CommissionInquiryCreateOrConnectWithoutClientInput[]
    upsert?: CommissionInquiryUpsertWithWhereUniqueWithoutClientInput | CommissionInquiryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommissionInquiryCreateManyClientInputEnvelope
    set?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    disconnect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    delete?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    update?: CommissionInquiryUpdateWithWhereUniqueWithoutClientInput | CommissionInquiryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommissionInquiryUpdateManyWithWhereWithoutClientInput | CommissionInquiryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
  }

  export type CommissionInquiryUncheckedUpdateManyWithoutRepliedByNestedInput = {
    create?: XOR<CommissionInquiryCreateWithoutRepliedByInput, CommissionInquiryUncheckedCreateWithoutRepliedByInput> | CommissionInquiryCreateWithoutRepliedByInput[] | CommissionInquiryUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutRepliedByInput | CommissionInquiryCreateOrConnectWithoutRepliedByInput[]
    upsert?: CommissionInquiryUpsertWithWhereUniqueWithoutRepliedByInput | CommissionInquiryUpsertWithWhereUniqueWithoutRepliedByInput[]
    createMany?: CommissionInquiryCreateManyRepliedByInputEnvelope
    set?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    disconnect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    delete?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    update?: CommissionInquiryUpdateWithWhereUniqueWithoutRepliedByInput | CommissionInquiryUpdateWithWhereUniqueWithoutRepliedByInput[]
    updateMany?: CommissionInquiryUpdateManyWithWhereWithoutRepliedByInput | CommissionInquiryUpdateManyWithWhereWithoutRepliedByInput[]
    deleteMany?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
  }

  export type ClientTestimonialUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientTestimonialCreateWithoutClientInput, ClientTestimonialUncheckedCreateWithoutClientInput> | ClientTestimonialCreateWithoutClientInput[] | ClientTestimonialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTestimonialCreateOrConnectWithoutClientInput | ClientTestimonialCreateOrConnectWithoutClientInput[]
    upsert?: ClientTestimonialUpsertWithWhereUniqueWithoutClientInput | ClientTestimonialUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientTestimonialCreateManyClientInputEnvelope
    set?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    disconnect?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    delete?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    connect?: ClientTestimonialWhereUniqueInput | ClientTestimonialWhereUniqueInput[]
    update?: ClientTestimonialUpdateWithWhereUniqueWithoutClientInput | ClientTestimonialUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientTestimonialUpdateManyWithWhereWithoutClientInput | ClientTestimonialUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientTestimonialScalarWhereInput | ClientTestimonialScalarWhereInput[]
  }

  export type PhotographyWorkCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PhotographyWorkCreateWithoutCategoryInput, PhotographyWorkUncheckedCreateWithoutCategoryInput> | PhotographyWorkCreateWithoutCategoryInput[] | PhotographyWorkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCategoryInput | PhotographyWorkCreateOrConnectWithoutCategoryInput[]
    createMany?: PhotographyWorkCreateManyCategoryInputEnvelope
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
  }

  export type PhotographyWorkUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PhotographyWorkCreateWithoutCategoryInput, PhotographyWorkUncheckedCreateWithoutCategoryInput> | PhotographyWorkCreateWithoutCategoryInput[] | PhotographyWorkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCategoryInput | PhotographyWorkCreateOrConnectWithoutCategoryInput[]
    createMany?: PhotographyWorkCreateManyCategoryInputEnvelope
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhotographyWorkUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PhotographyWorkCreateWithoutCategoryInput, PhotographyWorkUncheckedCreateWithoutCategoryInput> | PhotographyWorkCreateWithoutCategoryInput[] | PhotographyWorkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCategoryInput | PhotographyWorkCreateOrConnectWithoutCategoryInput[]
    upsert?: PhotographyWorkUpsertWithWhereUniqueWithoutCategoryInput | PhotographyWorkUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PhotographyWorkCreateManyCategoryInputEnvelope
    set?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    disconnect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    delete?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    update?: PhotographyWorkUpdateWithWhereUniqueWithoutCategoryInput | PhotographyWorkUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PhotographyWorkUpdateManyWithWhereWithoutCategoryInput | PhotographyWorkUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PhotographyWorkScalarWhereInput | PhotographyWorkScalarWhereInput[]
  }

  export type PhotographyWorkUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PhotographyWorkCreateWithoutCategoryInput, PhotographyWorkUncheckedCreateWithoutCategoryInput> | PhotographyWorkCreateWithoutCategoryInput[] | PhotographyWorkUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCategoryInput | PhotographyWorkCreateOrConnectWithoutCategoryInput[]
    upsert?: PhotographyWorkUpsertWithWhereUniqueWithoutCategoryInput | PhotographyWorkUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PhotographyWorkCreateManyCategoryInputEnvelope
    set?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    disconnect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    delete?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    update?: PhotographyWorkUpdateWithWhereUniqueWithoutCategoryInput | PhotographyWorkUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PhotographyWorkUpdateManyWithWhereWithoutCategoryInput | PhotographyWorkUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PhotographyWorkScalarWhereInput | PhotographyWorkScalarWhereInput[]
  }

  export type PhotographyWorkCreateNestedManyWithoutCollectionInput = {
    create?: XOR<PhotographyWorkCreateWithoutCollectionInput, PhotographyWorkUncheckedCreateWithoutCollectionInput> | PhotographyWorkCreateWithoutCollectionInput[] | PhotographyWorkUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCollectionInput | PhotographyWorkCreateOrConnectWithoutCollectionInput[]
    createMany?: PhotographyWorkCreateManyCollectionInputEnvelope
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
  }

  export type PhotographyWorkUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<PhotographyWorkCreateWithoutCollectionInput, PhotographyWorkUncheckedCreateWithoutCollectionInput> | PhotographyWorkCreateWithoutCollectionInput[] | PhotographyWorkUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCollectionInput | PhotographyWorkCreateOrConnectWithoutCollectionInput[]
    createMany?: PhotographyWorkCreateManyCollectionInputEnvelope
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
  }

  export type EnumAspectOrientationFieldUpdateOperationsInput = {
    set?: $Enums.AspectOrientation
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PhotographyWorkUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<PhotographyWorkCreateWithoutCollectionInput, PhotographyWorkUncheckedCreateWithoutCollectionInput> | PhotographyWorkCreateWithoutCollectionInput[] | PhotographyWorkUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCollectionInput | PhotographyWorkCreateOrConnectWithoutCollectionInput[]
    upsert?: PhotographyWorkUpsertWithWhereUniqueWithoutCollectionInput | PhotographyWorkUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: PhotographyWorkCreateManyCollectionInputEnvelope
    set?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    disconnect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    delete?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    update?: PhotographyWorkUpdateWithWhereUniqueWithoutCollectionInput | PhotographyWorkUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: PhotographyWorkUpdateManyWithWhereWithoutCollectionInput | PhotographyWorkUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: PhotographyWorkScalarWhereInput | PhotographyWorkScalarWhereInput[]
  }

  export type PhotographyWorkUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<PhotographyWorkCreateWithoutCollectionInput, PhotographyWorkUncheckedCreateWithoutCollectionInput> | PhotographyWorkCreateWithoutCollectionInput[] | PhotographyWorkUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: PhotographyWorkCreateOrConnectWithoutCollectionInput | PhotographyWorkCreateOrConnectWithoutCollectionInput[]
    upsert?: PhotographyWorkUpsertWithWhereUniqueWithoutCollectionInput | PhotographyWorkUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: PhotographyWorkCreateManyCollectionInputEnvelope
    set?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    disconnect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    delete?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    connect?: PhotographyWorkWhereUniqueInput | PhotographyWorkWhereUniqueInput[]
    update?: PhotographyWorkUpdateWithWhereUniqueWithoutCollectionInput | PhotographyWorkUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: PhotographyWorkUpdateManyWithWhereWithoutCollectionInput | PhotographyWorkUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: PhotographyWorkScalarWhereInput | PhotographyWorkScalarWhereInput[]
  }

  export type CommissionInquiryCreateNestedManyWithoutServicePackageInput = {
    create?: XOR<CommissionInquiryCreateWithoutServicePackageInput, CommissionInquiryUncheckedCreateWithoutServicePackageInput> | CommissionInquiryCreateWithoutServicePackageInput[] | CommissionInquiryUncheckedCreateWithoutServicePackageInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutServicePackageInput | CommissionInquiryCreateOrConnectWithoutServicePackageInput[]
    createMany?: CommissionInquiryCreateManyServicePackageInputEnvelope
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
  }

  export type CommissionInquiryUncheckedCreateNestedManyWithoutServicePackageInput = {
    create?: XOR<CommissionInquiryCreateWithoutServicePackageInput, CommissionInquiryUncheckedCreateWithoutServicePackageInput> | CommissionInquiryCreateWithoutServicePackageInput[] | CommissionInquiryUncheckedCreateWithoutServicePackageInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutServicePackageInput | CommissionInquiryCreateOrConnectWithoutServicePackageInput[]
    createMany?: CommissionInquiryCreateManyServicePackageInputEnvelope
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CommissionInquiryUpdateManyWithoutServicePackageNestedInput = {
    create?: XOR<CommissionInquiryCreateWithoutServicePackageInput, CommissionInquiryUncheckedCreateWithoutServicePackageInput> | CommissionInquiryCreateWithoutServicePackageInput[] | CommissionInquiryUncheckedCreateWithoutServicePackageInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutServicePackageInput | CommissionInquiryCreateOrConnectWithoutServicePackageInput[]
    upsert?: CommissionInquiryUpsertWithWhereUniqueWithoutServicePackageInput | CommissionInquiryUpsertWithWhereUniqueWithoutServicePackageInput[]
    createMany?: CommissionInquiryCreateManyServicePackageInputEnvelope
    set?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    disconnect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    delete?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    update?: CommissionInquiryUpdateWithWhereUniqueWithoutServicePackageInput | CommissionInquiryUpdateWithWhereUniqueWithoutServicePackageInput[]
    updateMany?: CommissionInquiryUpdateManyWithWhereWithoutServicePackageInput | CommissionInquiryUpdateManyWithWhereWithoutServicePackageInput[]
    deleteMany?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
  }

  export type CommissionInquiryUncheckedUpdateManyWithoutServicePackageNestedInput = {
    create?: XOR<CommissionInquiryCreateWithoutServicePackageInput, CommissionInquiryUncheckedCreateWithoutServicePackageInput> | CommissionInquiryCreateWithoutServicePackageInput[] | CommissionInquiryUncheckedCreateWithoutServicePackageInput[]
    connectOrCreate?: CommissionInquiryCreateOrConnectWithoutServicePackageInput | CommissionInquiryCreateOrConnectWithoutServicePackageInput[]
    upsert?: CommissionInquiryUpsertWithWhereUniqueWithoutServicePackageInput | CommissionInquiryUpsertWithWhereUniqueWithoutServicePackageInput[]
    createMany?: CommissionInquiryCreateManyServicePackageInputEnvelope
    set?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    disconnect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    delete?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    connect?: CommissionInquiryWhereUniqueInput | CommissionInquiryWhereUniqueInput[]
    update?: CommissionInquiryUpdateWithWhereUniqueWithoutServicePackageInput | CommissionInquiryUpdateWithWhereUniqueWithoutServicePackageInput[]
    updateMany?: CommissionInquiryUpdateManyWithWhereWithoutServicePackageInput | CommissionInquiryUpdateManyWithWhereWithoutServicePackageInput[]
    deleteMany?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
  }

  export type PhotoCategoryCreateNestedOneWithoutWorksInput = {
    create?: XOR<PhotoCategoryCreateWithoutWorksInput, PhotoCategoryUncheckedCreateWithoutWorksInput>
    connectOrCreate?: PhotoCategoryCreateOrConnectWithoutWorksInput
    connect?: PhotoCategoryWhereUniqueInput
  }

  export type PhotoCollectionCreateNestedOneWithoutWorksInput = {
    create?: XOR<PhotoCollectionCreateWithoutWorksInput, PhotoCollectionUncheckedCreateWithoutWorksInput>
    connectOrCreate?: PhotoCollectionCreateOrConnectWithoutWorksInput
    connect?: PhotoCollectionWhereUniqueInput
  }

  export type PhotoCategoryUpdateOneRequiredWithoutWorksNestedInput = {
    create?: XOR<PhotoCategoryCreateWithoutWorksInput, PhotoCategoryUncheckedCreateWithoutWorksInput>
    connectOrCreate?: PhotoCategoryCreateOrConnectWithoutWorksInput
    upsert?: PhotoCategoryUpsertWithoutWorksInput
    connect?: PhotoCategoryWhereUniqueInput
    update?: XOR<XOR<PhotoCategoryUpdateToOneWithWhereWithoutWorksInput, PhotoCategoryUpdateWithoutWorksInput>, PhotoCategoryUncheckedUpdateWithoutWorksInput>
  }

  export type PhotoCollectionUpdateOneWithoutWorksNestedInput = {
    create?: XOR<PhotoCollectionCreateWithoutWorksInput, PhotoCollectionUncheckedCreateWithoutWorksInput>
    connectOrCreate?: PhotoCollectionCreateOrConnectWithoutWorksInput
    upsert?: PhotoCollectionUpsertWithoutWorksInput
    disconnect?: PhotoCollectionWhereInput | boolean
    delete?: PhotoCollectionWhereInput | boolean
    connect?: PhotoCollectionWhereUniqueInput
    update?: XOR<XOR<PhotoCollectionUpdateToOneWithWhereWithoutWorksInput, PhotoCollectionUpdateWithoutWorksInput>, PhotoCollectionUncheckedUpdateWithoutWorksInput>
  }

  export type AccountUserCreateNestedOneWithoutClientInquiriesInput = {
    create?: XOR<AccountUserCreateWithoutClientInquiriesInput, AccountUserUncheckedCreateWithoutClientInquiriesInput>
    connectOrCreate?: AccountUserCreateOrConnectWithoutClientInquiriesInput
    connect?: AccountUserWhereUniqueInput
  }

  export type ServicePackageCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<ServicePackageCreateWithoutInquiriesInput, ServicePackageUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: ServicePackageCreateOrConnectWithoutInquiriesInput
    connect?: ServicePackageWhereUniqueInput
  }

  export type AccountUserCreateNestedOneWithoutCuratorRepliesInput = {
    create?: XOR<AccountUserCreateWithoutCuratorRepliesInput, AccountUserUncheckedCreateWithoutCuratorRepliesInput>
    connectOrCreate?: AccountUserCreateOrConnectWithoutCuratorRepliesInput
    connect?: AccountUserWhereUniqueInput
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type EnumInquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InquiryStatus
  }

  export type AccountUserUpdateOneRequiredWithoutClientInquiriesNestedInput = {
    create?: XOR<AccountUserCreateWithoutClientInquiriesInput, AccountUserUncheckedCreateWithoutClientInquiriesInput>
    connectOrCreate?: AccountUserCreateOrConnectWithoutClientInquiriesInput
    upsert?: AccountUserUpsertWithoutClientInquiriesInput
    connect?: AccountUserWhereUniqueInput
    update?: XOR<XOR<AccountUserUpdateToOneWithWhereWithoutClientInquiriesInput, AccountUserUpdateWithoutClientInquiriesInput>, AccountUserUncheckedUpdateWithoutClientInquiriesInput>
  }

  export type ServicePackageUpdateOneWithoutInquiriesNestedInput = {
    create?: XOR<ServicePackageCreateWithoutInquiriesInput, ServicePackageUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: ServicePackageCreateOrConnectWithoutInquiriesInput
    upsert?: ServicePackageUpsertWithoutInquiriesInput
    disconnect?: ServicePackageWhereInput | boolean
    delete?: ServicePackageWhereInput | boolean
    connect?: ServicePackageWhereUniqueInput
    update?: XOR<XOR<ServicePackageUpdateToOneWithWhereWithoutInquiriesInput, ServicePackageUpdateWithoutInquiriesInput>, ServicePackageUncheckedUpdateWithoutInquiriesInput>
  }

  export type AccountUserUpdateOneWithoutCuratorRepliesNestedInput = {
    create?: XOR<AccountUserCreateWithoutCuratorRepliesInput, AccountUserUncheckedCreateWithoutCuratorRepliesInput>
    connectOrCreate?: AccountUserCreateOrConnectWithoutCuratorRepliesInput
    upsert?: AccountUserUpsertWithoutCuratorRepliesInput
    disconnect?: AccountUserWhereInput | boolean
    delete?: AccountUserWhereInput | boolean
    connect?: AccountUserWhereUniqueInput
    update?: XOR<XOR<AccountUserUpdateToOneWithWhereWithoutCuratorRepliesInput, AccountUserUpdateWithoutCuratorRepliesInput>, AccountUserUncheckedUpdateWithoutCuratorRepliesInput>
  }

  export type EnumExhibitionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExhibitionType
  }

  export type AccountUserCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<AccountUserCreateWithoutTestimonialsInput, AccountUserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: AccountUserCreateOrConnectWithoutTestimonialsInput
    connect?: AccountUserWhereUniqueInput
  }

  export type AccountUserUpdateOneWithoutTestimonialsNestedInput = {
    create?: XOR<AccountUserCreateWithoutTestimonialsInput, AccountUserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: AccountUserCreateOrConnectWithoutTestimonialsInput
    upsert?: AccountUserUpsertWithoutTestimonialsInput
    disconnect?: AccountUserWhereInput | boolean
    delete?: AccountUserWhereInput | boolean
    connect?: AccountUserWhereUniqueInput
    update?: XOR<XOR<AccountUserUpdateToOneWithWhereWithoutTestimonialsInput, AccountUserUpdateWithoutTestimonialsInput>, AccountUserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAccountRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[]
    notIn?: $Enums.AccountRole[]
    not?: NestedEnumAccountRoleFilter<$PrismaModel> | $Enums.AccountRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[]
    notIn?: $Enums.AccountRole[]
    not?: NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel> | $Enums.AccountRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountRoleFilter<$PrismaModel>
    _max?: NestedEnumAccountRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAspectOrientationFilter<$PrismaModel = never> = {
    equals?: $Enums.AspectOrientation | EnumAspectOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.AspectOrientation[]
    notIn?: $Enums.AspectOrientation[]
    not?: NestedEnumAspectOrientationFilter<$PrismaModel> | $Enums.AspectOrientation
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAspectOrientationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AspectOrientation | EnumAspectOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.AspectOrientation[]
    notIn?: $Enums.AspectOrientation[]
    not?: NestedEnumAspectOrientationWithAggregatesFilter<$PrismaModel> | $Enums.AspectOrientation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAspectOrientationFilter<$PrismaModel>
    _max?: NestedEnumAspectOrientationFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type NestedEnumExhibitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExhibitionType | EnumExhibitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExhibitionType[]
    notIn?: $Enums.ExhibitionType[]
    not?: NestedEnumExhibitionTypeFilter<$PrismaModel> | $Enums.ExhibitionType
  }

  export type NestedEnumExhibitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExhibitionType | EnumExhibitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExhibitionType[]
    notIn?: $Enums.ExhibitionType[]
    not?: NestedEnumExhibitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExhibitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExhibitionTypeFilter<$PrismaModel>
    _max?: NestedEnumExhibitionTypeFilter<$PrismaModel>
  }

  export type CommissionInquiryCreateWithoutClientInput = {
    id?: string
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servicePackage?: ServicePackageCreateNestedOneWithoutInquiriesInput
    repliedBy?: AccountUserCreateNestedOneWithoutCuratorRepliesInput
  }

  export type CommissionInquiryUncheckedCreateWithoutClientInput = {
    id?: string
    servicePackageId?: string | null
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryCreateOrConnectWithoutClientInput = {
    where: CommissionInquiryWhereUniqueInput
    create: XOR<CommissionInquiryCreateWithoutClientInput, CommissionInquiryUncheckedCreateWithoutClientInput>
  }

  export type CommissionInquiryCreateManyClientInputEnvelope = {
    data: CommissionInquiryCreateManyClientInput | CommissionInquiryCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CommissionInquiryCreateWithoutRepliedByInput = {
    id?: string
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: AccountUserCreateNestedOneWithoutClientInquiriesInput
    servicePackage?: ServicePackageCreateNestedOneWithoutInquiriesInput
  }

  export type CommissionInquiryUncheckedCreateWithoutRepliedByInput = {
    id?: string
    clientId: string
    servicePackageId?: string | null
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryCreateOrConnectWithoutRepliedByInput = {
    where: CommissionInquiryWhereUniqueInput
    create: XOR<CommissionInquiryCreateWithoutRepliedByInput, CommissionInquiryUncheckedCreateWithoutRepliedByInput>
  }

  export type CommissionInquiryCreateManyRepliedByInputEnvelope = {
    data: CommissionInquiryCreateManyRepliedByInput | CommissionInquiryCreateManyRepliedByInput[]
    skipDuplicates?: boolean
  }

  export type ClientTestimonialCreateWithoutClientInput = {
    id?: string
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating?: number
    avatarImage?: string | null
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientTestimonialUncheckedCreateWithoutClientInput = {
    id?: string
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating?: number
    avatarImage?: string | null
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientTestimonialCreateOrConnectWithoutClientInput = {
    where: ClientTestimonialWhereUniqueInput
    create: XOR<ClientTestimonialCreateWithoutClientInput, ClientTestimonialUncheckedCreateWithoutClientInput>
  }

  export type ClientTestimonialCreateManyClientInputEnvelope = {
    data: ClientTestimonialCreateManyClientInput | ClientTestimonialCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CommissionInquiryUpsertWithWhereUniqueWithoutClientInput = {
    where: CommissionInquiryWhereUniqueInput
    update: XOR<CommissionInquiryUpdateWithoutClientInput, CommissionInquiryUncheckedUpdateWithoutClientInput>
    create: XOR<CommissionInquiryCreateWithoutClientInput, CommissionInquiryUncheckedCreateWithoutClientInput>
  }

  export type CommissionInquiryUpdateWithWhereUniqueWithoutClientInput = {
    where: CommissionInquiryWhereUniqueInput
    data: XOR<CommissionInquiryUpdateWithoutClientInput, CommissionInquiryUncheckedUpdateWithoutClientInput>
  }

  export type CommissionInquiryUpdateManyWithWhereWithoutClientInput = {
    where: CommissionInquiryScalarWhereInput
    data: XOR<CommissionInquiryUpdateManyMutationInput, CommissionInquiryUncheckedUpdateManyWithoutClientInput>
  }

  export type CommissionInquiryScalarWhereInput = {
    AND?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
    OR?: CommissionInquiryScalarWhereInput[]
    NOT?: CommissionInquiryScalarWhereInput | CommissionInquiryScalarWhereInput[]
    id?: StringFilter<"CommissionInquiry"> | string
    clientId?: StringFilter<"CommissionInquiry"> | string
    servicePackageId?: StringNullableFilter<"CommissionInquiry"> | string | null
    clientName?: StringFilter<"CommissionInquiry"> | string
    clientEmail?: StringFilter<"CommissionInquiry"> | string
    organization?: StringNullableFilter<"CommissionInquiry"> | string | null
    projectType?: EnumProjectTypeFilter<"CommissionInquiry"> | $Enums.ProjectType
    budgetTier?: StringFilter<"CommissionInquiry"> | string
    projectBrief?: StringFilter<"CommissionInquiry"> | string
    clientMessage?: StringNullableFilter<"CommissionInquiry"> | string | null
    targetTimeline?: StringFilter<"CommissionInquiry"> | string
    location?: StringNullableFilter<"CommissionInquiry"> | string | null
    status?: EnumInquiryStatusFilter<"CommissionInquiry"> | $Enums.InquiryStatus
    curatorReply?: StringNullableFilter<"CommissionInquiry"> | string | null
    repliedAt?: StringNullableFilter<"CommissionInquiry"> | string | null
    repliedById?: StringNullableFilter<"CommissionInquiry"> | string | null
    createdAt?: DateTimeFilter<"CommissionInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionInquiry"> | Date | string
  }

  export type CommissionInquiryUpsertWithWhereUniqueWithoutRepliedByInput = {
    where: CommissionInquiryWhereUniqueInput
    update: XOR<CommissionInquiryUpdateWithoutRepliedByInput, CommissionInquiryUncheckedUpdateWithoutRepliedByInput>
    create: XOR<CommissionInquiryCreateWithoutRepliedByInput, CommissionInquiryUncheckedCreateWithoutRepliedByInput>
  }

  export type CommissionInquiryUpdateWithWhereUniqueWithoutRepliedByInput = {
    where: CommissionInquiryWhereUniqueInput
    data: XOR<CommissionInquiryUpdateWithoutRepliedByInput, CommissionInquiryUncheckedUpdateWithoutRepliedByInput>
  }

  export type CommissionInquiryUpdateManyWithWhereWithoutRepliedByInput = {
    where: CommissionInquiryScalarWhereInput
    data: XOR<CommissionInquiryUpdateManyMutationInput, CommissionInquiryUncheckedUpdateManyWithoutRepliedByInput>
  }

  export type ClientTestimonialUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientTestimonialWhereUniqueInput
    update: XOR<ClientTestimonialUpdateWithoutClientInput, ClientTestimonialUncheckedUpdateWithoutClientInput>
    create: XOR<ClientTestimonialCreateWithoutClientInput, ClientTestimonialUncheckedCreateWithoutClientInput>
  }

  export type ClientTestimonialUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientTestimonialWhereUniqueInput
    data: XOR<ClientTestimonialUpdateWithoutClientInput, ClientTestimonialUncheckedUpdateWithoutClientInput>
  }

  export type ClientTestimonialUpdateManyWithWhereWithoutClientInput = {
    where: ClientTestimonialScalarWhereInput
    data: XOR<ClientTestimonialUpdateManyMutationInput, ClientTestimonialUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientTestimonialScalarWhereInput = {
    AND?: ClientTestimonialScalarWhereInput | ClientTestimonialScalarWhereInput[]
    OR?: ClientTestimonialScalarWhereInput[]
    NOT?: ClientTestimonialScalarWhereInput | ClientTestimonialScalarWhereInput[]
    id?: StringFilter<"ClientTestimonial"> | string
    clientId?: StringNullableFilter<"ClientTestimonial"> | string | null
    clientName?: StringFilter<"ClientTestimonial"> | string
    clientTitle?: StringFilter<"ClientTestimonial"> | string
    organization?: StringFilter<"ClientTestimonial"> | string
    quote?: StringFilter<"ClientTestimonial"> | string
    serviceType?: EnumProjectTypeFilter<"ClientTestimonial"> | $Enums.ProjectType
    rating?: IntFilter<"ClientTestimonial"> | number
    avatarImage?: StringNullableFilter<"ClientTestimonial"> | string | null
    isFeatured?: BoolFilter<"ClientTestimonial"> | boolean
    sortOrder?: IntFilter<"ClientTestimonial"> | number
    createdAt?: DateTimeFilter<"ClientTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"ClientTestimonial"> | Date | string
  }

  export type PhotographyWorkCreateWithoutCategoryInput = {
    id?: string
    title: string
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    collection?: PhotoCollectionCreateNestedOneWithoutWorksInput
  }

  export type PhotographyWorkUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    collectionId?: string | null
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotographyWorkCreateOrConnectWithoutCategoryInput = {
    where: PhotographyWorkWhereUniqueInput
    create: XOR<PhotographyWorkCreateWithoutCategoryInput, PhotographyWorkUncheckedCreateWithoutCategoryInput>
  }

  export type PhotographyWorkCreateManyCategoryInputEnvelope = {
    data: PhotographyWorkCreateManyCategoryInput | PhotographyWorkCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PhotographyWorkUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PhotographyWorkWhereUniqueInput
    update: XOR<PhotographyWorkUpdateWithoutCategoryInput, PhotographyWorkUncheckedUpdateWithoutCategoryInput>
    create: XOR<PhotographyWorkCreateWithoutCategoryInput, PhotographyWorkUncheckedCreateWithoutCategoryInput>
  }

  export type PhotographyWorkUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PhotographyWorkWhereUniqueInput
    data: XOR<PhotographyWorkUpdateWithoutCategoryInput, PhotographyWorkUncheckedUpdateWithoutCategoryInput>
  }

  export type PhotographyWorkUpdateManyWithWhereWithoutCategoryInput = {
    where: PhotographyWorkScalarWhereInput
    data: XOR<PhotographyWorkUpdateManyMutationInput, PhotographyWorkUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PhotographyWorkScalarWhereInput = {
    AND?: PhotographyWorkScalarWhereInput | PhotographyWorkScalarWhereInput[]
    OR?: PhotographyWorkScalarWhereInput[]
    NOT?: PhotographyWorkScalarWhereInput | PhotographyWorkScalarWhereInput[]
    id?: StringFilter<"PhotographyWork"> | string
    title?: StringFilter<"PhotographyWork"> | string
    categoryId?: StringFilter<"PhotographyWork"> | string
    collectionId?: StringNullableFilter<"PhotographyWork"> | string | null
    seriesName?: StringFilter<"PhotographyWork"> | string
    location?: StringFilter<"PhotographyWork"> | string
    year?: IntFilter<"PhotographyWork"> | number
    medium?: StringFilter<"PhotographyWork"> | string
    edition?: StringFilter<"PhotographyWork"> | string
    aspectRatio?: EnumAspectOrientationFilter<"PhotographyWork"> | $Enums.AspectOrientation
    statement?: StringFilter<"PhotographyWork"> | string
    imageUrl?: StringFilter<"PhotographyWork"> | string
    isFeatured?: BoolFilter<"PhotographyWork"> | boolean
    isArchived?: BoolFilter<"PhotographyWork"> | boolean
    sortOrder?: IntFilter<"PhotographyWork"> | number
    createdAt?: DateTimeFilter<"PhotographyWork"> | Date | string
    updatedAt?: DateTimeFilter<"PhotographyWork"> | Date | string
  }

  export type PhotographyWorkCreateWithoutCollectionInput = {
    id?: string
    title: string
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PhotoCategoryCreateNestedOneWithoutWorksInput
  }

  export type PhotographyWorkUncheckedCreateWithoutCollectionInput = {
    id?: string
    title: string
    categoryId: string
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotographyWorkCreateOrConnectWithoutCollectionInput = {
    where: PhotographyWorkWhereUniqueInput
    create: XOR<PhotographyWorkCreateWithoutCollectionInput, PhotographyWorkUncheckedCreateWithoutCollectionInput>
  }

  export type PhotographyWorkCreateManyCollectionInputEnvelope = {
    data: PhotographyWorkCreateManyCollectionInput | PhotographyWorkCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type PhotographyWorkUpsertWithWhereUniqueWithoutCollectionInput = {
    where: PhotographyWorkWhereUniqueInput
    update: XOR<PhotographyWorkUpdateWithoutCollectionInput, PhotographyWorkUncheckedUpdateWithoutCollectionInput>
    create: XOR<PhotographyWorkCreateWithoutCollectionInput, PhotographyWorkUncheckedCreateWithoutCollectionInput>
  }

  export type PhotographyWorkUpdateWithWhereUniqueWithoutCollectionInput = {
    where: PhotographyWorkWhereUniqueInput
    data: XOR<PhotographyWorkUpdateWithoutCollectionInput, PhotographyWorkUncheckedUpdateWithoutCollectionInput>
  }

  export type PhotographyWorkUpdateManyWithWhereWithoutCollectionInput = {
    where: PhotographyWorkScalarWhereInput
    data: XOR<PhotographyWorkUpdateManyMutationInput, PhotographyWorkUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CommissionInquiryCreateWithoutServicePackageInput = {
    id?: string
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: AccountUserCreateNestedOneWithoutClientInquiriesInput
    repliedBy?: AccountUserCreateNestedOneWithoutCuratorRepliesInput
  }

  export type CommissionInquiryUncheckedCreateWithoutServicePackageInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryCreateOrConnectWithoutServicePackageInput = {
    where: CommissionInquiryWhereUniqueInput
    create: XOR<CommissionInquiryCreateWithoutServicePackageInput, CommissionInquiryUncheckedCreateWithoutServicePackageInput>
  }

  export type CommissionInquiryCreateManyServicePackageInputEnvelope = {
    data: CommissionInquiryCreateManyServicePackageInput | CommissionInquiryCreateManyServicePackageInput[]
    skipDuplicates?: boolean
  }

  export type CommissionInquiryUpsertWithWhereUniqueWithoutServicePackageInput = {
    where: CommissionInquiryWhereUniqueInput
    update: XOR<CommissionInquiryUpdateWithoutServicePackageInput, CommissionInquiryUncheckedUpdateWithoutServicePackageInput>
    create: XOR<CommissionInquiryCreateWithoutServicePackageInput, CommissionInquiryUncheckedCreateWithoutServicePackageInput>
  }

  export type CommissionInquiryUpdateWithWhereUniqueWithoutServicePackageInput = {
    where: CommissionInquiryWhereUniqueInput
    data: XOR<CommissionInquiryUpdateWithoutServicePackageInput, CommissionInquiryUncheckedUpdateWithoutServicePackageInput>
  }

  export type CommissionInquiryUpdateManyWithWhereWithoutServicePackageInput = {
    where: CommissionInquiryScalarWhereInput
    data: XOR<CommissionInquiryUpdateManyMutationInput, CommissionInquiryUncheckedUpdateManyWithoutServicePackageInput>
  }

  export type PhotoCategoryCreateWithoutWorksInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCategoryUncheckedCreateWithoutWorksInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCategoryCreateOrConnectWithoutWorksInput = {
    where: PhotoCategoryWhereUniqueInput
    create: XOR<PhotoCategoryCreateWithoutWorksInput, PhotoCategoryUncheckedCreateWithoutWorksInput>
  }

  export type PhotoCollectionCreateWithoutWorksInput = {
    id?: string
    title: string
    rollNumber: string
    medium: string
    curatorNote: string
    aspect?: $Enums.AspectOrientation
    aspectRatioClass?: string
    coverImage?: string | null
    imageCount?: number
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCollectionUncheckedCreateWithoutWorksInput = {
    id?: string
    title: string
    rollNumber: string
    medium: string
    curatorNote: string
    aspect?: $Enums.AspectOrientation
    aspectRatioClass?: string
    coverImage?: string | null
    imageCount?: number
    isVisible?: boolean
    featuredOnHome?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCollectionCreateOrConnectWithoutWorksInput = {
    where: PhotoCollectionWhereUniqueInput
    create: XOR<PhotoCollectionCreateWithoutWorksInput, PhotoCollectionUncheckedCreateWithoutWorksInput>
  }

  export type PhotoCategoryUpsertWithoutWorksInput = {
    update: XOR<PhotoCategoryUpdateWithoutWorksInput, PhotoCategoryUncheckedUpdateWithoutWorksInput>
    create: XOR<PhotoCategoryCreateWithoutWorksInput, PhotoCategoryUncheckedCreateWithoutWorksInput>
    where?: PhotoCategoryWhereInput
  }

  export type PhotoCategoryUpdateToOneWithWhereWithoutWorksInput = {
    where?: PhotoCategoryWhereInput
    data: XOR<PhotoCategoryUpdateWithoutWorksInput, PhotoCategoryUncheckedUpdateWithoutWorksInput>
  }

  export type PhotoCategoryUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCategoryUncheckedUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCollectionUpsertWithoutWorksInput = {
    update: XOR<PhotoCollectionUpdateWithoutWorksInput, PhotoCollectionUncheckedUpdateWithoutWorksInput>
    create: XOR<PhotoCollectionCreateWithoutWorksInput, PhotoCollectionUncheckedCreateWithoutWorksInput>
    where?: PhotoCollectionWhereInput
  }

  export type PhotoCollectionUpdateToOneWithWhereWithoutWorksInput = {
    where?: PhotoCollectionWhereInput
    data: XOR<PhotoCollectionUpdateWithoutWorksInput, PhotoCollectionUncheckedUpdateWithoutWorksInput>
  }

  export type PhotoCollectionUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rollNumber?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    curatorNote?: StringFieldUpdateOperationsInput | string
    aspect?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    aspectRatioClass?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    imageCount?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    featuredOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCollectionUncheckedUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rollNumber?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    curatorNote?: StringFieldUpdateOperationsInput | string
    aspect?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    aspectRatioClass?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    imageCount?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    featuredOnHome?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUserCreateWithoutClientInquiriesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curatorReplies?: CommissionInquiryCreateNestedManyWithoutRepliedByInput
    testimonials?: ClientTestimonialCreateNestedManyWithoutClientInput
  }

  export type AccountUserUncheckedCreateWithoutClientInquiriesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curatorReplies?: CommissionInquiryUncheckedCreateNestedManyWithoutRepliedByInput
    testimonials?: ClientTestimonialUncheckedCreateNestedManyWithoutClientInput
  }

  export type AccountUserCreateOrConnectWithoutClientInquiriesInput = {
    where: AccountUserWhereUniqueInput
    create: XOR<AccountUserCreateWithoutClientInquiriesInput, AccountUserUncheckedCreateWithoutClientInquiriesInput>
  }

  export type ServicePackageCreateWithoutInquiriesInput = {
    id?: string
    title: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    priceDisplay: string
    durationEstimate: string
    deliverables:(Array<string>)
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicePackageUncheckedCreateWithoutInquiriesInput = {
    id?: string
    title: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    priceDisplay: string
    durationEstimate: string
    deliverables:(Array<string>)
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicePackageCreateOrConnectWithoutInquiriesInput = {
    where: ServicePackageWhereUniqueInput
    create: XOR<ServicePackageCreateWithoutInquiriesInput, ServicePackageUncheckedCreateWithoutInquiriesInput>
  }

  export type AccountUserCreateWithoutCuratorRepliesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientInquiries?: CommissionInquiryCreateNestedManyWithoutClientInput
    testimonials?: ClientTestimonialCreateNestedManyWithoutClientInput
  }

  export type AccountUserUncheckedCreateWithoutCuratorRepliesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientInquiries?: CommissionInquiryUncheckedCreateNestedManyWithoutClientInput
    testimonials?: ClientTestimonialUncheckedCreateNestedManyWithoutClientInput
  }

  export type AccountUserCreateOrConnectWithoutCuratorRepliesInput = {
    where: AccountUserWhereUniqueInput
    create: XOR<AccountUserCreateWithoutCuratorRepliesInput, AccountUserUncheckedCreateWithoutCuratorRepliesInput>
  }

  export type AccountUserUpsertWithoutClientInquiriesInput = {
    update: XOR<AccountUserUpdateWithoutClientInquiriesInput, AccountUserUncheckedUpdateWithoutClientInquiriesInput>
    create: XOR<AccountUserCreateWithoutClientInquiriesInput, AccountUserUncheckedCreateWithoutClientInquiriesInput>
    where?: AccountUserWhereInput
  }

  export type AccountUserUpdateToOneWithWhereWithoutClientInquiriesInput = {
    where?: AccountUserWhereInput
    data: XOR<AccountUserUpdateWithoutClientInquiriesInput, AccountUserUncheckedUpdateWithoutClientInquiriesInput>
  }

  export type AccountUserUpdateWithoutClientInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curatorReplies?: CommissionInquiryUpdateManyWithoutRepliedByNestedInput
    testimonials?: ClientTestimonialUpdateManyWithoutClientNestedInput
  }

  export type AccountUserUncheckedUpdateWithoutClientInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curatorReplies?: CommissionInquiryUncheckedUpdateManyWithoutRepliedByNestedInput
    testimonials?: ClientTestimonialUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ServicePackageUpsertWithoutInquiriesInput = {
    update: XOR<ServicePackageUpdateWithoutInquiriesInput, ServicePackageUncheckedUpdateWithoutInquiriesInput>
    create: XOR<ServicePackageCreateWithoutInquiriesInput, ServicePackageUncheckedCreateWithoutInquiriesInput>
    where?: ServicePackageWhereInput
  }

  export type ServicePackageUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: ServicePackageWhereInput
    data: XOR<ServicePackageUpdateWithoutInquiriesInput, ServicePackageUncheckedUpdateWithoutInquiriesInput>
  }

  export type ServicePackageUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFieldUpdateOperationsInput | string
    durationEstimate?: StringFieldUpdateOperationsInput | string
    deliverables?:(Array<string>)
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePackageUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDisplay?: StringFieldUpdateOperationsInput | string
    durationEstimate?: StringFieldUpdateOperationsInput | string
    deliverables?:(Array<string>)
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUserUpsertWithoutCuratorRepliesInput = {
    update: XOR<AccountUserUpdateWithoutCuratorRepliesInput, AccountUserUncheckedUpdateWithoutCuratorRepliesInput>
    create: XOR<AccountUserCreateWithoutCuratorRepliesInput, AccountUserUncheckedCreateWithoutCuratorRepliesInput>
    where?: AccountUserWhereInput
  }

  export type AccountUserUpdateToOneWithWhereWithoutCuratorRepliesInput = {
    where?: AccountUserWhereInput
    data: XOR<AccountUserUpdateWithoutCuratorRepliesInput, AccountUserUncheckedUpdateWithoutCuratorRepliesInput>
  }

  export type AccountUserUpdateWithoutCuratorRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientInquiries?: CommissionInquiryUpdateManyWithoutClientNestedInput
    testimonials?: ClientTestimonialUpdateManyWithoutClientNestedInput
  }

  export type AccountUserUncheckedUpdateWithoutCuratorRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientInquiries?: CommissionInquiryUncheckedUpdateManyWithoutClientNestedInput
    testimonials?: ClientTestimonialUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AccountUserCreateWithoutTestimonialsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientInquiries?: CommissionInquiryCreateNestedManyWithoutClientInput
    curatorReplies?: CommissionInquiryCreateNestedManyWithoutRepliedByInput
  }

  export type AccountUserUncheckedCreateWithoutTestimonialsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.AccountRole
    avatarUrl?: string | null
    phone?: string | null
    organization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientInquiries?: CommissionInquiryUncheckedCreateNestedManyWithoutClientInput
    curatorReplies?: CommissionInquiryUncheckedCreateNestedManyWithoutRepliedByInput
  }

  export type AccountUserCreateOrConnectWithoutTestimonialsInput = {
    where: AccountUserWhereUniqueInput
    create: XOR<AccountUserCreateWithoutTestimonialsInput, AccountUserUncheckedCreateWithoutTestimonialsInput>
  }

  export type AccountUserUpsertWithoutTestimonialsInput = {
    update: XOR<AccountUserUpdateWithoutTestimonialsInput, AccountUserUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<AccountUserCreateWithoutTestimonialsInput, AccountUserUncheckedCreateWithoutTestimonialsInput>
    where?: AccountUserWhereInput
  }

  export type AccountUserUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: AccountUserWhereInput
    data: XOR<AccountUserUpdateWithoutTestimonialsInput, AccountUserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type AccountUserUpdateWithoutTestimonialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientInquiries?: CommissionInquiryUpdateManyWithoutClientNestedInput
    curatorReplies?: CommissionInquiryUpdateManyWithoutRepliedByNestedInput
  }

  export type AccountUserUncheckedUpdateWithoutTestimonialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientInquiries?: CommissionInquiryUncheckedUpdateManyWithoutClientNestedInput
    curatorReplies?: CommissionInquiryUncheckedUpdateManyWithoutRepliedByNestedInput
  }

  export type CommissionInquiryCreateManyClientInput = {
    id?: string
    servicePackageId?: string | null
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryCreateManyRepliedByInput = {
    id?: string
    clientId: string
    servicePackageId?: string | null
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientTestimonialCreateManyClientInput = {
    id?: string
    clientName: string
    clientTitle: string
    organization: string
    quote: string
    serviceType: $Enums.ProjectType
    rating?: number
    avatarImage?: string | null
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicePackage?: ServicePackageUpdateOneWithoutInquiriesNestedInput
    repliedBy?: AccountUserUpdateOneWithoutCuratorRepliesNestedInput
  }

  export type CommissionInquiryUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePackageId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePackageId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryUpdateWithoutRepliedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: AccountUserUpdateOneRequiredWithoutClientInquiriesNestedInput
    servicePackage?: ServicePackageUpdateOneWithoutInquiriesNestedInput
  }

  export type CommissionInquiryUncheckedUpdateWithoutRepliedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    servicePackageId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryUncheckedUpdateManyWithoutRepliedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    servicePackageId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestimonialUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestimonialUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTestimonialUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientTitle?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    rating?: IntFieldUpdateOperationsInput | number
    avatarImage?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkCreateManyCategoryInput = {
    id?: string
    title: string
    collectionId?: string | null
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotographyWorkUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: PhotoCollectionUpdateOneWithoutWorksNestedInput
  }

  export type PhotographyWorkUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkCreateManyCollectionInput = {
    id?: string
    title: string
    categoryId: string
    seriesName: string
    location: string
    year: number
    medium: string
    edition: string
    aspectRatio?: $Enums.AspectOrientation
    statement: string
    imageUrl: string
    isFeatured?: boolean
    isArchived?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotographyWorkUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PhotoCategoryUpdateOneRequiredWithoutWorksNestedInput
  }

  export type PhotographyWorkUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotographyWorkUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    seriesName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    medium?: StringFieldUpdateOperationsInput | string
    edition?: StringFieldUpdateOperationsInput | string
    aspectRatio?: EnumAspectOrientationFieldUpdateOperationsInput | $Enums.AspectOrientation
    statement?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryCreateManyServicePackageInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail: string
    organization?: string | null
    projectType: $Enums.ProjectType
    budgetTier: string
    projectBrief: string
    clientMessage?: string | null
    targetTimeline: string
    location?: string | null
    status?: $Enums.InquiryStatus
    curatorReply?: string | null
    repliedAt?: string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionInquiryUpdateWithoutServicePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: AccountUserUpdateOneRequiredWithoutClientInquiriesNestedInput
    repliedBy?: AccountUserUpdateOneWithoutCuratorRepliesNestedInput
  }

  export type CommissionInquiryUncheckedUpdateWithoutServicePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionInquiryUncheckedUpdateManyWithoutServicePackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    budgetTier?: StringFieldUpdateOperationsInput | string
    projectBrief?: StringFieldUpdateOperationsInput | string
    clientMessage?: NullableStringFieldUpdateOperationsInput | string | null
    targetTimeline?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    curatorReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableStringFieldUpdateOperationsInput | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}