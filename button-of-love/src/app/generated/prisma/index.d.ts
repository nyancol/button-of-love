
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Relation
 * 
 */
export type Relation = $Result.DefaultSelection<Prisma.$RelationPayload>
/**
 * Model RelationMember
 * 
 */
export type RelationMember = $Result.DefaultSelection<Prisma.$RelationMemberPayload>
/**
 * Model RelationInvitation
 * 
 */
export type RelationInvitation = $Result.DefaultSelection<Prisma.$RelationInvitationPayload>
/**
 * Model LoveCounter
 * 
 */
export type LoveCounter = $Result.DefaultSelection<Prisma.$LoveCounterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relation`: Exposes CRUD operations for the **Relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relations
    * const relations = await prisma.relation.findMany()
    * ```
    */
  get relation(): Prisma.RelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationMember`: Exposes CRUD operations for the **RelationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelationMembers
    * const relationMembers = await prisma.relationMember.findMany()
    * ```
    */
  get relationMember(): Prisma.RelationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationInvitation`: Exposes CRUD operations for the **RelationInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelationInvitations
    * const relationInvitations = await prisma.relationInvitation.findMany()
    * ```
    */
  get relationInvitation(): Prisma.RelationInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loveCounter`: Exposes CRUD operations for the **LoveCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoveCounters
    * const loveCounters = await prisma.loveCounter.findMany()
    * ```
    */
  get loveCounter(): Prisma.LoveCounterDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Relation: 'Relation',
    RelationMember: 'RelationMember',
    RelationInvitation: 'RelationInvitation',
    LoveCounter: 'LoveCounter'
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
      modelProps: "user" | "relation" | "relationMember" | "relationInvitation" | "loveCounter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Relation: {
        payload: Prisma.$RelationPayload<ExtArgs>
        fields: Prisma.RelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findFirst: {
            args: Prisma.RelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findMany: {
            args: Prisma.RelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          create: {
            args: Prisma.RelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          createMany: {
            args: Prisma.RelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          delete: {
            args: Prisma.RelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          update: {
            args: Prisma.RelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          deleteMany: {
            args: Prisma.RelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          upsert: {
            args: Prisma.RelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          aggregate: {
            args: Prisma.RelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelation>
          }
          groupBy: {
            args: Prisma.RelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationCountArgs<ExtArgs>
            result: $Utils.Optional<RelationCountAggregateOutputType> | number
          }
        }
      }
      RelationMember: {
        payload: Prisma.$RelationMemberPayload<ExtArgs>
        fields: Prisma.RelationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>
          }
          findFirst: {
            args: Prisma.RelationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>
          }
          findMany: {
            args: Prisma.RelationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>[]
          }
          create: {
            args: Prisma.RelationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>
          }
          createMany: {
            args: Prisma.RelationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>[]
          }
          delete: {
            args: Prisma.RelationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>
          }
          update: {
            args: Prisma.RelationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>
          }
          deleteMany: {
            args: Prisma.RelationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>[]
          }
          upsert: {
            args: Prisma.RelationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationMemberPayload>
          }
          aggregate: {
            args: Prisma.RelationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationMember>
          }
          groupBy: {
            args: Prisma.RelationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<RelationMemberCountAggregateOutputType> | number
          }
        }
      }
      RelationInvitation: {
        payload: Prisma.$RelationInvitationPayload<ExtArgs>
        fields: Prisma.RelationInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>
          }
          findFirst: {
            args: Prisma.RelationInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>
          }
          findMany: {
            args: Prisma.RelationInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>[]
          }
          create: {
            args: Prisma.RelationInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>
          }
          createMany: {
            args: Prisma.RelationInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>[]
          }
          delete: {
            args: Prisma.RelationInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>
          }
          update: {
            args: Prisma.RelationInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>
          }
          deleteMany: {
            args: Prisma.RelationInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>[]
          }
          upsert: {
            args: Prisma.RelationInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationInvitationPayload>
          }
          aggregate: {
            args: Prisma.RelationInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationInvitation>
          }
          groupBy: {
            args: Prisma.RelationInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<RelationInvitationCountAggregateOutputType> | number
          }
        }
      }
      LoveCounter: {
        payload: Prisma.$LoveCounterPayload<ExtArgs>
        fields: Prisma.LoveCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoveCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoveCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>
          }
          findFirst: {
            args: Prisma.LoveCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoveCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>
          }
          findMany: {
            args: Prisma.LoveCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>[]
          }
          create: {
            args: Prisma.LoveCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>
          }
          createMany: {
            args: Prisma.LoveCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoveCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>[]
          }
          delete: {
            args: Prisma.LoveCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>
          }
          update: {
            args: Prisma.LoveCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>
          }
          deleteMany: {
            args: Prisma.LoveCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoveCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoveCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>[]
          }
          upsert: {
            args: Prisma.LoveCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoveCounterPayload>
          }
          aggregate: {
            args: Prisma.LoveCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoveCounter>
          }
          groupBy: {
            args: Prisma.LoveCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoveCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoveCounterCountArgs<ExtArgs>
            result: $Utils.Optional<LoveCounterCountAggregateOutputType> | number
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
    user?: UserOmit
    relation?: RelationOmit
    relationMember?: RelationMemberOmit
    relationInvitation?: RelationInvitationOmit
    loveCounter?: LoveCounterOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number
    love_counters: number
    sent_invitations: number
    received_invitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    love_counters?: boolean | UserCountOutputTypeCountLove_countersArgs
    sent_invitations?: boolean | UserCountOutputTypeCountSent_invitationsArgs
    received_invitations?: boolean | UserCountOutputTypeCountReceived_invitationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLove_countersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveCounterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSent_invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceived_invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationInvitationWhereInput
  }


  /**
   * Count Type RelationCountOutputType
   */

  export type RelationCountOutputType = {
    members: number
    love_counters: number
  }

  export type RelationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RelationCountOutputTypeCountMembersArgs
    love_counters?: boolean | RelationCountOutputTypeCountLove_countersArgs
  }

  // Custom InputTypes
  /**
   * RelationCountOutputType without action
   */
  export type RelationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationCountOutputType
     */
    select?: RelationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RelationCountOutputType without action
   */
  export type RelationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationMemberWhereInput
  }

  /**
   * RelationCountOutputType without action
   */
  export type RelationCountOutputTypeCountLove_countersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveCounterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    birthdate: Date | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    birthdate: Date | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    username: number
    email: number
    birthdate: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    username?: true
    email?: true
    birthdate?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    username?: true
    email?: true
    birthdate?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    username?: true
    email?: true
    birthdate?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    password?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    love_counters?: boolean | User$love_countersArgs<ExtArgs>
    sent_invitations?: boolean | User$sent_invitationsArgs<ExtArgs>
    received_invitations?: boolean | User$received_invitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "username" | "email" | "birthdate" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    love_counters?: boolean | User$love_countersArgs<ExtArgs>
    sent_invitations?: boolean | User$sent_invitationsArgs<ExtArgs>
    received_invitations?: boolean | User$received_invitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$RelationMemberPayload<ExtArgs>[]
      love_counters: Prisma.$LoveCounterPayload<ExtArgs>[]
      sent_invitations: Prisma.$RelationInvitationPayload<ExtArgs>[]
      received_invitations: Prisma.$RelationInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      username: string
      email: string
      birthdate: Date
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    love_counters<T extends User$love_countersArgs<ExtArgs> = {}>(args?: Subset<T, User$love_countersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sent_invitations<T extends User$sent_invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sent_invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    received_invitations<T extends User$received_invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$received_invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    where?: RelationMemberWhereInput
    orderBy?: RelationMemberOrderByWithRelationInput | RelationMemberOrderByWithRelationInput[]
    cursor?: RelationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationMemberScalarFieldEnum | RelationMemberScalarFieldEnum[]
  }

  /**
   * User.love_counters
   */
  export type User$love_countersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    where?: LoveCounterWhereInput
    orderBy?: LoveCounterOrderByWithRelationInput | LoveCounterOrderByWithRelationInput[]
    cursor?: LoveCounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoveCounterScalarFieldEnum | LoveCounterScalarFieldEnum[]
  }

  /**
   * User.sent_invitations
   */
  export type User$sent_invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    where?: RelationInvitationWhereInput
    orderBy?: RelationInvitationOrderByWithRelationInput | RelationInvitationOrderByWithRelationInput[]
    cursor?: RelationInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationInvitationScalarFieldEnum | RelationInvitationScalarFieldEnum[]
  }

  /**
   * User.received_invitations
   */
  export type User$received_invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    where?: RelationInvitationWhereInput
    orderBy?: RelationInvitationOrderByWithRelationInput | RelationInvitationOrderByWithRelationInput[]
    cursor?: RelationInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationInvitationScalarFieldEnum | RelationInvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Relation
   */

  export type AggregateRelation = {
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  export type RelationMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    relation_invitation_id: string | null
  }

  export type RelationMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    relation_invitation_id: string | null
  }

  export type RelationCountAggregateOutputType = {
    id: number
    created_at: number
    relation_invitation_id: number
    _all: number
  }


  export type RelationMinAggregateInputType = {
    id?: true
    created_at?: true
    relation_invitation_id?: true
  }

  export type RelationMaxAggregateInputType = {
    id?: true
    created_at?: true
    relation_invitation_id?: true
  }

  export type RelationCountAggregateInputType = {
    id?: true
    created_at?: true
    relation_invitation_id?: true
    _all?: true
  }

  export type RelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relation to aggregate.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relations
    **/
    _count?: true | RelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationMaxAggregateInputType
  }

  export type GetRelationAggregateType<T extends RelationAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation[P]>
      : GetScalarType<T[P], AggregateRelation[P]>
  }




  export type RelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithAggregationInput | RelationOrderByWithAggregationInput[]
    by: RelationScalarFieldEnum[] | RelationScalarFieldEnum
    having?: RelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationCountAggregateInputType | true
    _min?: RelationMinAggregateInputType
    _max?: RelationMaxAggregateInputType
  }

  export type RelationGroupByOutputType = {
    id: string
    created_at: Date
    relation_invitation_id: string | null
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  type GetRelationGroupByPayload<T extends RelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationGroupByOutputType[P]>
            : GetScalarType<T[P], RelationGroupByOutputType[P]>
        }
      >
    >


  export type RelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    relation_invitation_id?: boolean
    members?: boolean | Relation$membersArgs<ExtArgs>
    love_counters?: boolean | Relation$love_countersArgs<ExtArgs>
    relation_invitation?: boolean | Relation$relation_invitationArgs<ExtArgs>
    _count?: boolean | RelationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    relation_invitation_id?: boolean
    relation_invitation?: boolean | Relation$relation_invitationArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    relation_invitation_id?: boolean
    relation_invitation?: boolean | Relation$relation_invitationArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectScalar = {
    id?: boolean
    created_at?: boolean
    relation_invitation_id?: boolean
  }

  export type RelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "relation_invitation_id", ExtArgs["result"]["relation"]>
  export type RelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Relation$membersArgs<ExtArgs>
    love_counters?: boolean | Relation$love_countersArgs<ExtArgs>
    relation_invitation?: boolean | Relation$relation_invitationArgs<ExtArgs>
    _count?: boolean | RelationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation_invitation?: boolean | Relation$relation_invitationArgs<ExtArgs>
  }
  export type RelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation_invitation?: boolean | Relation$relation_invitationArgs<ExtArgs>
  }

  export type $RelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relation"
    objects: {
      members: Prisma.$RelationMemberPayload<ExtArgs>[]
      love_counters: Prisma.$LoveCounterPayload<ExtArgs>[]
      relation_invitation: Prisma.$RelationInvitationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      relation_invitation_id: string | null
    }, ExtArgs["result"]["relation"]>
    composites: {}
  }

  type RelationGetPayload<S extends boolean | null | undefined | RelationDefaultArgs> = $Result.GetResult<Prisma.$RelationPayload, S>

  type RelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationCountAggregateInputType | true
    }

  export interface RelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relation'], meta: { name: 'Relation' } }
    /**
     * Find zero or one Relation that matches the filter.
     * @param {RelationFindUniqueArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationFindUniqueArgs>(args: SelectSubset<T, RelationFindUniqueArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationFindUniqueOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationFindFirstArgs>(args?: SelectSubset<T, RelationFindFirstArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relations
     * const relations = await prisma.relation.findMany()
     * 
     * // Get first 10 Relations
     * const relations = await prisma.relation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationWithIdOnly = await prisma.relation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationFindManyArgs>(args?: SelectSubset<T, RelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relation.
     * @param {RelationCreateArgs} args - Arguments to create a Relation.
     * @example
     * // Create one Relation
     * const Relation = await prisma.relation.create({
     *   data: {
     *     // ... data to create a Relation
     *   }
     * })
     * 
     */
    create<T extends RelationCreateArgs>(args: SelectSubset<T, RelationCreateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relations.
     * @param {RelationCreateManyArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationCreateManyArgs>(args?: SelectSubset<T, RelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relations and returns the data saved in the database.
     * @param {RelationCreateManyAndReturnArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relations and only return the `id`
     * const relationWithIdOnly = await prisma.relation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relation.
     * @param {RelationDeleteArgs} args - Arguments to delete one Relation.
     * @example
     * // Delete one Relation
     * const Relation = await prisma.relation.delete({
     *   where: {
     *     // ... filter to delete one Relation
     *   }
     * })
     * 
     */
    delete<T extends RelationDeleteArgs>(args: SelectSubset<T, RelationDeleteArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relation.
     * @param {RelationUpdateArgs} args - Arguments to update one Relation.
     * @example
     * // Update one Relation
     * const relation = await prisma.relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationUpdateArgs>(args: SelectSubset<T, RelationUpdateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relations.
     * @param {RelationDeleteManyArgs} args - Arguments to filter Relations to delete.
     * @example
     * // Delete a few Relations
     * const { count } = await prisma.relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationDeleteManyArgs>(args?: SelectSubset<T, RelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationUpdateManyArgs>(args: SelectSubset<T, RelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations and returns the data updated in the database.
     * @param {RelationUpdateManyAndReturnArgs} args - Arguments to update many Relations.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relations and only return the `id`
     * const relationWithIdOnly = await prisma.relation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelationUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relation.
     * @param {RelationUpsertArgs} args - Arguments to update or create a Relation.
     * @example
     * // Update or create a Relation
     * const relation = await prisma.relation.upsert({
     *   create: {
     *     // ... data to create a Relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation we want to update
     *   }
     * })
     */
    upsert<T extends RelationUpsertArgs>(args: SelectSubset<T, RelationUpsertArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationCountArgs} args - Arguments to filter Relations to count.
     * @example
     * // Count the number of Relations
     * const count = await prisma.relation.count({
     *   where: {
     *     // ... the filter for the Relations we want to count
     *   }
     * })
    **/
    count<T extends RelationCountArgs>(
      args?: Subset<T, RelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationAggregateArgs>(args: Subset<T, RelationAggregateArgs>): Prisma.PrismaPromise<GetRelationAggregateType<T>>

    /**
     * Group by Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationGroupByArgs} args - Group by arguments.
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
      T extends RelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationGroupByArgs['orderBy'] }
        : { orderBy?: RelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relation model
   */
  readonly fields: RelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Relation$membersArgs<ExtArgs> = {}>(args?: Subset<T, Relation$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    love_counters<T extends Relation$love_countersArgs<ExtArgs> = {}>(args?: Subset<T, Relation$love_countersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relation_invitation<T extends Relation$relation_invitationArgs<ExtArgs> = {}>(args?: Subset<T, Relation$relation_invitationArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Relation model
   */
  interface RelationFieldRefs {
    readonly id: FieldRef<"Relation", 'String'>
    readonly created_at: FieldRef<"Relation", 'DateTime'>
    readonly relation_invitation_id: FieldRef<"Relation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Relation findUnique
   */
  export type RelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation findUniqueOrThrow
   */
  export type RelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation findFirst
   */
  export type RelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation findFirstOrThrow
   */
  export type RelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation findMany
   */
  export type RelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation create
   */
  export type RelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to create a Relation.
     */
    data?: XOR<RelationCreateInput, RelationUncheckedCreateInput>
  }

  /**
   * Relation createMany
   */
  export type RelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relation createManyAndReturn
   */
  export type RelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relation update
   */
  export type RelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to update a Relation.
     */
    data: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
    /**
     * Choose, which Relation to update.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation updateMany
   */
  export type RelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
  }

  /**
   * Relation updateManyAndReturn
   */
  export type RelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relation upsert
   */
  export type RelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The filter to search for the Relation to update in case it exists.
     */
    where: RelationWhereUniqueInput
    /**
     * In case the Relation found by the `where` argument doesn't exist, create a new Relation with this data.
     */
    create: XOR<RelationCreateInput, RelationUncheckedCreateInput>
    /**
     * In case the Relation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
  }

  /**
   * Relation delete
   */
  export type RelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter which Relation to delete.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation deleteMany
   */
  export type RelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relations to delete
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to delete.
     */
    limit?: number
  }

  /**
   * Relation.members
   */
  export type Relation$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    where?: RelationMemberWhereInput
    orderBy?: RelationMemberOrderByWithRelationInput | RelationMemberOrderByWithRelationInput[]
    cursor?: RelationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationMemberScalarFieldEnum | RelationMemberScalarFieldEnum[]
  }

  /**
   * Relation.love_counters
   */
  export type Relation$love_countersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    where?: LoveCounterWhereInput
    orderBy?: LoveCounterOrderByWithRelationInput | LoveCounterOrderByWithRelationInput[]
    cursor?: LoveCounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoveCounterScalarFieldEnum | LoveCounterScalarFieldEnum[]
  }

  /**
   * Relation.relation_invitation
   */
  export type Relation$relation_invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    where?: RelationInvitationWhereInput
  }

  /**
   * Relation without action
   */
  export type RelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
  }


  /**
   * Model RelationMember
   */

  export type AggregateRelationMember = {
    _count: RelationMemberCountAggregateOutputType | null
    _min: RelationMemberMinAggregateOutputType | null
    _max: RelationMemberMaxAggregateOutputType | null
  }

  export type RelationMemberMinAggregateOutputType = {
    relation_id: string | null
    user_id: string | null
  }

  export type RelationMemberMaxAggregateOutputType = {
    relation_id: string | null
    user_id: string | null
  }

  export type RelationMemberCountAggregateOutputType = {
    relation_id: number
    user_id: number
    _all: number
  }


  export type RelationMemberMinAggregateInputType = {
    relation_id?: true
    user_id?: true
  }

  export type RelationMemberMaxAggregateInputType = {
    relation_id?: true
    user_id?: true
  }

  export type RelationMemberCountAggregateInputType = {
    relation_id?: true
    user_id?: true
    _all?: true
  }

  export type RelationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelationMember to aggregate.
     */
    where?: RelationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationMembers to fetch.
     */
    orderBy?: RelationMemberOrderByWithRelationInput | RelationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelationMembers
    **/
    _count?: true | RelationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationMemberMaxAggregateInputType
  }

  export type GetRelationMemberAggregateType<T extends RelationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationMember[P]>
      : GetScalarType<T[P], AggregateRelationMember[P]>
  }




  export type RelationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationMemberWhereInput
    orderBy?: RelationMemberOrderByWithAggregationInput | RelationMemberOrderByWithAggregationInput[]
    by: RelationMemberScalarFieldEnum[] | RelationMemberScalarFieldEnum
    having?: RelationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationMemberCountAggregateInputType | true
    _min?: RelationMemberMinAggregateInputType
    _max?: RelationMemberMaxAggregateInputType
  }

  export type RelationMemberGroupByOutputType = {
    relation_id: string
    user_id: string
    _count: RelationMemberCountAggregateOutputType | null
    _min: RelationMemberMinAggregateOutputType | null
    _max: RelationMemberMaxAggregateOutputType | null
  }

  type GetRelationMemberGroupByPayload<T extends RelationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], RelationMemberGroupByOutputType[P]>
        }
      >
    >


  export type RelationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relation_id?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationMember"]>

  export type RelationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relation_id?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationMember"]>

  export type RelationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relation_id?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationMember"]>

  export type RelationMemberSelectScalar = {
    relation_id?: boolean
    user_id?: boolean
  }

  export type RelationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"relation_id" | "user_id", ExtArgs["result"]["relationMember"]>
  export type RelationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationDefaultArgs<ExtArgs>
  }
  export type RelationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationDefaultArgs<ExtArgs>
  }
  export type RelationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationDefaultArgs<ExtArgs>
  }

  export type $RelationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelationMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      relation: Prisma.$RelationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      relation_id: string
      user_id: string
    }, ExtArgs["result"]["relationMember"]>
    composites: {}
  }

  type RelationMemberGetPayload<S extends boolean | null | undefined | RelationMemberDefaultArgs> = $Result.GetResult<Prisma.$RelationMemberPayload, S>

  type RelationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationMemberCountAggregateInputType | true
    }

  export interface RelationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelationMember'], meta: { name: 'RelationMember' } }
    /**
     * Find zero or one RelationMember that matches the filter.
     * @param {RelationMemberFindUniqueArgs} args - Arguments to find a RelationMember
     * @example
     * // Get one RelationMember
     * const relationMember = await prisma.relationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationMemberFindUniqueArgs>(args: SelectSubset<T, RelationMemberFindUniqueArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationMemberFindUniqueOrThrowArgs} args - Arguments to find a RelationMember
     * @example
     * // Get one RelationMember
     * const relationMember = await prisma.relationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberFindFirstArgs} args - Arguments to find a RelationMember
     * @example
     * // Get one RelationMember
     * const relationMember = await prisma.relationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationMemberFindFirstArgs>(args?: SelectSubset<T, RelationMemberFindFirstArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberFindFirstOrThrowArgs} args - Arguments to find a RelationMember
     * @example
     * // Get one RelationMember
     * const relationMember = await prisma.relationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelationMembers
     * const relationMembers = await prisma.relationMember.findMany()
     * 
     * // Get first 10 RelationMembers
     * const relationMembers = await prisma.relationMember.findMany({ take: 10 })
     * 
     * // Only select the `relation_id`
     * const relationMemberWithRelation_idOnly = await prisma.relationMember.findMany({ select: { relation_id: true } })
     * 
     */
    findMany<T extends RelationMemberFindManyArgs>(args?: SelectSubset<T, RelationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelationMember.
     * @param {RelationMemberCreateArgs} args - Arguments to create a RelationMember.
     * @example
     * // Create one RelationMember
     * const RelationMember = await prisma.relationMember.create({
     *   data: {
     *     // ... data to create a RelationMember
     *   }
     * })
     * 
     */
    create<T extends RelationMemberCreateArgs>(args: SelectSubset<T, RelationMemberCreateArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelationMembers.
     * @param {RelationMemberCreateManyArgs} args - Arguments to create many RelationMembers.
     * @example
     * // Create many RelationMembers
     * const relationMember = await prisma.relationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationMemberCreateManyArgs>(args?: SelectSubset<T, RelationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelationMembers and returns the data saved in the database.
     * @param {RelationMemberCreateManyAndReturnArgs} args - Arguments to create many RelationMembers.
     * @example
     * // Create many RelationMembers
     * const relationMember = await prisma.relationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelationMembers and only return the `relation_id`
     * const relationMemberWithRelation_idOnly = await prisma.relationMember.createManyAndReturn({
     *   select: { relation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelationMember.
     * @param {RelationMemberDeleteArgs} args - Arguments to delete one RelationMember.
     * @example
     * // Delete one RelationMember
     * const RelationMember = await prisma.relationMember.delete({
     *   where: {
     *     // ... filter to delete one RelationMember
     *   }
     * })
     * 
     */
    delete<T extends RelationMemberDeleteArgs>(args: SelectSubset<T, RelationMemberDeleteArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelationMember.
     * @param {RelationMemberUpdateArgs} args - Arguments to update one RelationMember.
     * @example
     * // Update one RelationMember
     * const relationMember = await prisma.relationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationMemberUpdateArgs>(args: SelectSubset<T, RelationMemberUpdateArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelationMembers.
     * @param {RelationMemberDeleteManyArgs} args - Arguments to filter RelationMembers to delete.
     * @example
     * // Delete a few RelationMembers
     * const { count } = await prisma.relationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationMemberDeleteManyArgs>(args?: SelectSubset<T, RelationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelationMembers
     * const relationMember = await prisma.relationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationMemberUpdateManyArgs>(args: SelectSubset<T, RelationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelationMembers and returns the data updated in the database.
     * @param {RelationMemberUpdateManyAndReturnArgs} args - Arguments to update many RelationMembers.
     * @example
     * // Update many RelationMembers
     * const relationMember = await prisma.relationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelationMembers and only return the `relation_id`
     * const relationMemberWithRelation_idOnly = await prisma.relationMember.updateManyAndReturn({
     *   select: { relation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelationMember.
     * @param {RelationMemberUpsertArgs} args - Arguments to update or create a RelationMember.
     * @example
     * // Update or create a RelationMember
     * const relationMember = await prisma.relationMember.upsert({
     *   create: {
     *     // ... data to create a RelationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelationMember we want to update
     *   }
     * })
     */
    upsert<T extends RelationMemberUpsertArgs>(args: SelectSubset<T, RelationMemberUpsertArgs<ExtArgs>>): Prisma__RelationMemberClient<$Result.GetResult<Prisma.$RelationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberCountArgs} args - Arguments to filter RelationMembers to count.
     * @example
     * // Count the number of RelationMembers
     * const count = await prisma.relationMember.count({
     *   where: {
     *     // ... the filter for the RelationMembers we want to count
     *   }
     * })
    **/
    count<T extends RelationMemberCountArgs>(
      args?: Subset<T, RelationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationMemberAggregateArgs>(args: Subset<T, RelationMemberAggregateArgs>): Prisma.PrismaPromise<GetRelationMemberAggregateType<T>>

    /**
     * Group by RelationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationMemberGroupByArgs} args - Group by arguments.
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
      T extends RelationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationMemberGroupByArgs['orderBy'] }
        : { orderBy?: RelationMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelationMember model
   */
  readonly fields: RelationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relation<T extends RelationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RelationDefaultArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelationMember model
   */
  interface RelationMemberFieldRefs {
    readonly relation_id: FieldRef<"RelationMember", 'String'>
    readonly user_id: FieldRef<"RelationMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RelationMember findUnique
   */
  export type RelationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * Filter, which RelationMember to fetch.
     */
    where: RelationMemberWhereUniqueInput
  }

  /**
   * RelationMember findUniqueOrThrow
   */
  export type RelationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * Filter, which RelationMember to fetch.
     */
    where: RelationMemberWhereUniqueInput
  }

  /**
   * RelationMember findFirst
   */
  export type RelationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * Filter, which RelationMember to fetch.
     */
    where?: RelationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationMembers to fetch.
     */
    orderBy?: RelationMemberOrderByWithRelationInput | RelationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelationMembers.
     */
    cursor?: RelationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelationMembers.
     */
    distinct?: RelationMemberScalarFieldEnum | RelationMemberScalarFieldEnum[]
  }

  /**
   * RelationMember findFirstOrThrow
   */
  export type RelationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * Filter, which RelationMember to fetch.
     */
    where?: RelationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationMembers to fetch.
     */
    orderBy?: RelationMemberOrderByWithRelationInput | RelationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelationMembers.
     */
    cursor?: RelationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelationMembers.
     */
    distinct?: RelationMemberScalarFieldEnum | RelationMemberScalarFieldEnum[]
  }

  /**
   * RelationMember findMany
   */
  export type RelationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * Filter, which RelationMembers to fetch.
     */
    where?: RelationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationMembers to fetch.
     */
    orderBy?: RelationMemberOrderByWithRelationInput | RelationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelationMembers.
     */
    cursor?: RelationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationMembers.
     */
    skip?: number
    distinct?: RelationMemberScalarFieldEnum | RelationMemberScalarFieldEnum[]
  }

  /**
   * RelationMember create
   */
  export type RelationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a RelationMember.
     */
    data: XOR<RelationMemberCreateInput, RelationMemberUncheckedCreateInput>
  }

  /**
   * RelationMember createMany
   */
  export type RelationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelationMembers.
     */
    data: RelationMemberCreateManyInput | RelationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelationMember createManyAndReturn
   */
  export type RelationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many RelationMembers.
     */
    data: RelationMemberCreateManyInput | RelationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelationMember update
   */
  export type RelationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a RelationMember.
     */
    data: XOR<RelationMemberUpdateInput, RelationMemberUncheckedUpdateInput>
    /**
     * Choose, which RelationMember to update.
     */
    where: RelationMemberWhereUniqueInput
  }

  /**
   * RelationMember updateMany
   */
  export type RelationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelationMembers.
     */
    data: XOR<RelationMemberUpdateManyMutationInput, RelationMemberUncheckedUpdateManyInput>
    /**
     * Filter which RelationMembers to update
     */
    where?: RelationMemberWhereInput
    /**
     * Limit how many RelationMembers to update.
     */
    limit?: number
  }

  /**
   * RelationMember updateManyAndReturn
   */
  export type RelationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * The data used to update RelationMembers.
     */
    data: XOR<RelationMemberUpdateManyMutationInput, RelationMemberUncheckedUpdateManyInput>
    /**
     * Filter which RelationMembers to update
     */
    where?: RelationMemberWhereInput
    /**
     * Limit how many RelationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelationMember upsert
   */
  export type RelationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the RelationMember to update in case it exists.
     */
    where: RelationMemberWhereUniqueInput
    /**
     * In case the RelationMember found by the `where` argument doesn't exist, create a new RelationMember with this data.
     */
    create: XOR<RelationMemberCreateInput, RelationMemberUncheckedCreateInput>
    /**
     * In case the RelationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationMemberUpdateInput, RelationMemberUncheckedUpdateInput>
  }

  /**
   * RelationMember delete
   */
  export type RelationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
    /**
     * Filter which RelationMember to delete.
     */
    where: RelationMemberWhereUniqueInput
  }

  /**
   * RelationMember deleteMany
   */
  export type RelationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelationMembers to delete
     */
    where?: RelationMemberWhereInput
    /**
     * Limit how many RelationMembers to delete.
     */
    limit?: number
  }

  /**
   * RelationMember without action
   */
  export type RelationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationMember
     */
    select?: RelationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationMember
     */
    omit?: RelationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationMemberInclude<ExtArgs> | null
  }


  /**
   * Model RelationInvitation
   */

  export type AggregateRelationInvitation = {
    _count: RelationInvitationCountAggregateOutputType | null
    _min: RelationInvitationMinAggregateOutputType | null
    _max: RelationInvitationMaxAggregateOutputType | null
  }

  export type RelationInvitationMinAggregateOutputType = {
    id: string | null
    inviter_id: string | null
    invited_user_id: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RelationInvitationMaxAggregateOutputType = {
    id: string | null
    inviter_id: string | null
    invited_user_id: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RelationInvitationCountAggregateOutputType = {
    id: number
    inviter_id: number
    invited_user_id: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RelationInvitationMinAggregateInputType = {
    id?: true
    inviter_id?: true
    invited_user_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type RelationInvitationMaxAggregateInputType = {
    id?: true
    inviter_id?: true
    invited_user_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type RelationInvitationCountAggregateInputType = {
    id?: true
    inviter_id?: true
    invited_user_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RelationInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelationInvitation to aggregate.
     */
    where?: RelationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationInvitations to fetch.
     */
    orderBy?: RelationInvitationOrderByWithRelationInput | RelationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelationInvitations
    **/
    _count?: true | RelationInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationInvitationMaxAggregateInputType
  }

  export type GetRelationInvitationAggregateType<T extends RelationInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationInvitation[P]>
      : GetScalarType<T[P], AggregateRelationInvitation[P]>
  }




  export type RelationInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationInvitationWhereInput
    orderBy?: RelationInvitationOrderByWithAggregationInput | RelationInvitationOrderByWithAggregationInput[]
    by: RelationInvitationScalarFieldEnum[] | RelationInvitationScalarFieldEnum
    having?: RelationInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationInvitationCountAggregateInputType | true
    _min?: RelationInvitationMinAggregateInputType
    _max?: RelationInvitationMaxAggregateInputType
  }

  export type RelationInvitationGroupByOutputType = {
    id: string
    inviter_id: string
    invited_user_id: string
    status: string
    created_at: Date
    updated_at: Date
    _count: RelationInvitationCountAggregateOutputType | null
    _min: RelationInvitationMinAggregateOutputType | null
    _max: RelationInvitationMaxAggregateOutputType | null
  }

  type GetRelationInvitationGroupByPayload<T extends RelationInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], RelationInvitationGroupByOutputType[P]>
        }
      >
    >


  export type RelationInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviter_id?: boolean
    invited_user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationInvitation$relationArgs<ExtArgs>
  }, ExtArgs["result"]["relationInvitation"]>

  export type RelationInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviter_id?: boolean
    invited_user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationInvitation"]>

  export type RelationInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviter_id?: boolean
    invited_user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationInvitation"]>

  export type RelationInvitationSelectScalar = {
    id?: boolean
    inviter_id?: boolean
    invited_user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RelationInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inviter_id" | "invited_user_id" | "status" | "created_at" | "updated_at", ExtArgs["result"]["relationInvitation"]>
  export type RelationInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | RelationInvitation$relationArgs<ExtArgs>
  }
  export type RelationInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RelationInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RelationInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelationInvitation"
    objects: {
      inviter: Prisma.$UserPayload<ExtArgs>
      invited_user: Prisma.$UserPayload<ExtArgs>
      relation: Prisma.$RelationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inviter_id: string
      invited_user_id: string
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["relationInvitation"]>
    composites: {}
  }

  type RelationInvitationGetPayload<S extends boolean | null | undefined | RelationInvitationDefaultArgs> = $Result.GetResult<Prisma.$RelationInvitationPayload, S>

  type RelationInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationInvitationCountAggregateInputType | true
    }

  export interface RelationInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelationInvitation'], meta: { name: 'RelationInvitation' } }
    /**
     * Find zero or one RelationInvitation that matches the filter.
     * @param {RelationInvitationFindUniqueArgs} args - Arguments to find a RelationInvitation
     * @example
     * // Get one RelationInvitation
     * const relationInvitation = await prisma.relationInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationInvitationFindUniqueArgs>(args: SelectSubset<T, RelationInvitationFindUniqueArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelationInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationInvitationFindUniqueOrThrowArgs} args - Arguments to find a RelationInvitation
     * @example
     * // Get one RelationInvitation
     * const relationInvitation = await prisma.relationInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelationInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationFindFirstArgs} args - Arguments to find a RelationInvitation
     * @example
     * // Get one RelationInvitation
     * const relationInvitation = await prisma.relationInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationInvitationFindFirstArgs>(args?: SelectSubset<T, RelationInvitationFindFirstArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelationInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationFindFirstOrThrowArgs} args - Arguments to find a RelationInvitation
     * @example
     * // Get one RelationInvitation
     * const relationInvitation = await prisma.relationInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelationInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelationInvitations
     * const relationInvitations = await prisma.relationInvitation.findMany()
     * 
     * // Get first 10 RelationInvitations
     * const relationInvitations = await prisma.relationInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationInvitationWithIdOnly = await prisma.relationInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationInvitationFindManyArgs>(args?: SelectSubset<T, RelationInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelationInvitation.
     * @param {RelationInvitationCreateArgs} args - Arguments to create a RelationInvitation.
     * @example
     * // Create one RelationInvitation
     * const RelationInvitation = await prisma.relationInvitation.create({
     *   data: {
     *     // ... data to create a RelationInvitation
     *   }
     * })
     * 
     */
    create<T extends RelationInvitationCreateArgs>(args: SelectSubset<T, RelationInvitationCreateArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelationInvitations.
     * @param {RelationInvitationCreateManyArgs} args - Arguments to create many RelationInvitations.
     * @example
     * // Create many RelationInvitations
     * const relationInvitation = await prisma.relationInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationInvitationCreateManyArgs>(args?: SelectSubset<T, RelationInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelationInvitations and returns the data saved in the database.
     * @param {RelationInvitationCreateManyAndReturnArgs} args - Arguments to create many RelationInvitations.
     * @example
     * // Create many RelationInvitations
     * const relationInvitation = await prisma.relationInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelationInvitations and only return the `id`
     * const relationInvitationWithIdOnly = await prisma.relationInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelationInvitation.
     * @param {RelationInvitationDeleteArgs} args - Arguments to delete one RelationInvitation.
     * @example
     * // Delete one RelationInvitation
     * const RelationInvitation = await prisma.relationInvitation.delete({
     *   where: {
     *     // ... filter to delete one RelationInvitation
     *   }
     * })
     * 
     */
    delete<T extends RelationInvitationDeleteArgs>(args: SelectSubset<T, RelationInvitationDeleteArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelationInvitation.
     * @param {RelationInvitationUpdateArgs} args - Arguments to update one RelationInvitation.
     * @example
     * // Update one RelationInvitation
     * const relationInvitation = await prisma.relationInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationInvitationUpdateArgs>(args: SelectSubset<T, RelationInvitationUpdateArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelationInvitations.
     * @param {RelationInvitationDeleteManyArgs} args - Arguments to filter RelationInvitations to delete.
     * @example
     * // Delete a few RelationInvitations
     * const { count } = await prisma.relationInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationInvitationDeleteManyArgs>(args?: SelectSubset<T, RelationInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelationInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelationInvitations
     * const relationInvitation = await prisma.relationInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationInvitationUpdateManyArgs>(args: SelectSubset<T, RelationInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelationInvitations and returns the data updated in the database.
     * @param {RelationInvitationUpdateManyAndReturnArgs} args - Arguments to update many RelationInvitations.
     * @example
     * // Update many RelationInvitations
     * const relationInvitation = await prisma.relationInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelationInvitations and only return the `id`
     * const relationInvitationWithIdOnly = await prisma.relationInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelationInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelationInvitation.
     * @param {RelationInvitationUpsertArgs} args - Arguments to update or create a RelationInvitation.
     * @example
     * // Update or create a RelationInvitation
     * const relationInvitation = await prisma.relationInvitation.upsert({
     *   create: {
     *     // ... data to create a RelationInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelationInvitation we want to update
     *   }
     * })
     */
    upsert<T extends RelationInvitationUpsertArgs>(args: SelectSubset<T, RelationInvitationUpsertArgs<ExtArgs>>): Prisma__RelationInvitationClient<$Result.GetResult<Prisma.$RelationInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelationInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationCountArgs} args - Arguments to filter RelationInvitations to count.
     * @example
     * // Count the number of RelationInvitations
     * const count = await prisma.relationInvitation.count({
     *   where: {
     *     // ... the filter for the RelationInvitations we want to count
     *   }
     * })
    **/
    count<T extends RelationInvitationCountArgs>(
      args?: Subset<T, RelationInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelationInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationInvitationAggregateArgs>(args: Subset<T, RelationInvitationAggregateArgs>): Prisma.PrismaPromise<GetRelationInvitationAggregateType<T>>

    /**
     * Group by RelationInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationInvitationGroupByArgs} args - Group by arguments.
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
      T extends RelationInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationInvitationGroupByArgs['orderBy'] }
        : { orderBy?: RelationInvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelationInvitation model
   */
  readonly fields: RelationInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelationInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invited_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relation<T extends RelationInvitation$relationArgs<ExtArgs> = {}>(args?: Subset<T, RelationInvitation$relationArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelationInvitation model
   */
  interface RelationInvitationFieldRefs {
    readonly id: FieldRef<"RelationInvitation", 'String'>
    readonly inviter_id: FieldRef<"RelationInvitation", 'String'>
    readonly invited_user_id: FieldRef<"RelationInvitation", 'String'>
    readonly status: FieldRef<"RelationInvitation", 'String'>
    readonly created_at: FieldRef<"RelationInvitation", 'DateTime'>
    readonly updated_at: FieldRef<"RelationInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RelationInvitation findUnique
   */
  export type RelationInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which RelationInvitation to fetch.
     */
    where: RelationInvitationWhereUniqueInput
  }

  /**
   * RelationInvitation findUniqueOrThrow
   */
  export type RelationInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which RelationInvitation to fetch.
     */
    where: RelationInvitationWhereUniqueInput
  }

  /**
   * RelationInvitation findFirst
   */
  export type RelationInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which RelationInvitation to fetch.
     */
    where?: RelationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationInvitations to fetch.
     */
    orderBy?: RelationInvitationOrderByWithRelationInput | RelationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelationInvitations.
     */
    cursor?: RelationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelationInvitations.
     */
    distinct?: RelationInvitationScalarFieldEnum | RelationInvitationScalarFieldEnum[]
  }

  /**
   * RelationInvitation findFirstOrThrow
   */
  export type RelationInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which RelationInvitation to fetch.
     */
    where?: RelationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationInvitations to fetch.
     */
    orderBy?: RelationInvitationOrderByWithRelationInput | RelationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelationInvitations.
     */
    cursor?: RelationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelationInvitations.
     */
    distinct?: RelationInvitationScalarFieldEnum | RelationInvitationScalarFieldEnum[]
  }

  /**
   * RelationInvitation findMany
   */
  export type RelationInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * Filter, which RelationInvitations to fetch.
     */
    where?: RelationInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelationInvitations to fetch.
     */
    orderBy?: RelationInvitationOrderByWithRelationInput | RelationInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelationInvitations.
     */
    cursor?: RelationInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelationInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelationInvitations.
     */
    skip?: number
    distinct?: RelationInvitationScalarFieldEnum | RelationInvitationScalarFieldEnum[]
  }

  /**
   * RelationInvitation create
   */
  export type RelationInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a RelationInvitation.
     */
    data: XOR<RelationInvitationCreateInput, RelationInvitationUncheckedCreateInput>
  }

  /**
   * RelationInvitation createMany
   */
  export type RelationInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelationInvitations.
     */
    data: RelationInvitationCreateManyInput | RelationInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelationInvitation createManyAndReturn
   */
  export type RelationInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many RelationInvitations.
     */
    data: RelationInvitationCreateManyInput | RelationInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelationInvitation update
   */
  export type RelationInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a RelationInvitation.
     */
    data: XOR<RelationInvitationUpdateInput, RelationInvitationUncheckedUpdateInput>
    /**
     * Choose, which RelationInvitation to update.
     */
    where: RelationInvitationWhereUniqueInput
  }

  /**
   * RelationInvitation updateMany
   */
  export type RelationInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelationInvitations.
     */
    data: XOR<RelationInvitationUpdateManyMutationInput, RelationInvitationUncheckedUpdateManyInput>
    /**
     * Filter which RelationInvitations to update
     */
    where?: RelationInvitationWhereInput
    /**
     * Limit how many RelationInvitations to update.
     */
    limit?: number
  }

  /**
   * RelationInvitation updateManyAndReturn
   */
  export type RelationInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * The data used to update RelationInvitations.
     */
    data: XOR<RelationInvitationUpdateManyMutationInput, RelationInvitationUncheckedUpdateManyInput>
    /**
     * Filter which RelationInvitations to update
     */
    where?: RelationInvitationWhereInput
    /**
     * Limit how many RelationInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelationInvitation upsert
   */
  export type RelationInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the RelationInvitation to update in case it exists.
     */
    where: RelationInvitationWhereUniqueInput
    /**
     * In case the RelationInvitation found by the `where` argument doesn't exist, create a new RelationInvitation with this data.
     */
    create: XOR<RelationInvitationCreateInput, RelationInvitationUncheckedCreateInput>
    /**
     * In case the RelationInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationInvitationUpdateInput, RelationInvitationUncheckedUpdateInput>
  }

  /**
   * RelationInvitation delete
   */
  export type RelationInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
    /**
     * Filter which RelationInvitation to delete.
     */
    where: RelationInvitationWhereUniqueInput
  }

  /**
   * RelationInvitation deleteMany
   */
  export type RelationInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelationInvitations to delete
     */
    where?: RelationInvitationWhereInput
    /**
     * Limit how many RelationInvitations to delete.
     */
    limit?: number
  }

  /**
   * RelationInvitation.relation
   */
  export type RelationInvitation$relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
  }

  /**
   * RelationInvitation without action
   */
  export type RelationInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelationInvitation
     */
    select?: RelationInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelationInvitation
     */
    omit?: RelationInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInvitationInclude<ExtArgs> | null
  }


  /**
   * Model LoveCounter
   */

  export type AggregateLoveCounter = {
    _count: LoveCounterCountAggregateOutputType | null
    _avg: LoveCounterAvgAggregateOutputType | null
    _sum: LoveCounterSumAggregateOutputType | null
    _min: LoveCounterMinAggregateOutputType | null
    _max: LoveCounterMaxAggregateOutputType | null
  }

  export type LoveCounterAvgAggregateOutputType = {
    count: number | null
  }

  export type LoveCounterSumAggregateOutputType = {
    count: number | null
  }

  export type LoveCounterMinAggregateOutputType = {
    relation_id: string | null
    from_user_id: string | null
    count: number | null
    last_loveu_sent: Date | null
  }

  export type LoveCounterMaxAggregateOutputType = {
    relation_id: string | null
    from_user_id: string | null
    count: number | null
    last_loveu_sent: Date | null
  }

  export type LoveCounterCountAggregateOutputType = {
    relation_id: number
    from_user_id: number
    count: number
    last_loveu_sent: number
    _all: number
  }


  export type LoveCounterAvgAggregateInputType = {
    count?: true
  }

  export type LoveCounterSumAggregateInputType = {
    count?: true
  }

  export type LoveCounterMinAggregateInputType = {
    relation_id?: true
    from_user_id?: true
    count?: true
    last_loveu_sent?: true
  }

  export type LoveCounterMaxAggregateInputType = {
    relation_id?: true
    from_user_id?: true
    count?: true
    last_loveu_sent?: true
  }

  export type LoveCounterCountAggregateInputType = {
    relation_id?: true
    from_user_id?: true
    count?: true
    last_loveu_sent?: true
    _all?: true
  }

  export type LoveCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoveCounter to aggregate.
     */
    where?: LoveCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCounters to fetch.
     */
    orderBy?: LoveCounterOrderByWithRelationInput | LoveCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoveCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoveCounters
    **/
    _count?: true | LoveCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoveCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoveCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoveCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoveCounterMaxAggregateInputType
  }

  export type GetLoveCounterAggregateType<T extends LoveCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateLoveCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoveCounter[P]>
      : GetScalarType<T[P], AggregateLoveCounter[P]>
  }




  export type LoveCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveCounterWhereInput
    orderBy?: LoveCounterOrderByWithAggregationInput | LoveCounterOrderByWithAggregationInput[]
    by: LoveCounterScalarFieldEnum[] | LoveCounterScalarFieldEnum
    having?: LoveCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoveCounterCountAggregateInputType | true
    _avg?: LoveCounterAvgAggregateInputType
    _sum?: LoveCounterSumAggregateInputType
    _min?: LoveCounterMinAggregateInputType
    _max?: LoveCounterMaxAggregateInputType
  }

  export type LoveCounterGroupByOutputType = {
    relation_id: string
    from_user_id: string
    count: number
    last_loveu_sent: Date
    _count: LoveCounterCountAggregateOutputType | null
    _avg: LoveCounterAvgAggregateOutputType | null
    _sum: LoveCounterSumAggregateOutputType | null
    _min: LoveCounterMinAggregateOutputType | null
    _max: LoveCounterMaxAggregateOutputType | null
  }

  type GetLoveCounterGroupByPayload<T extends LoveCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoveCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoveCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoveCounterGroupByOutputType[P]>
            : GetScalarType<T[P], LoveCounterGroupByOutputType[P]>
        }
      >
    >


  export type LoveCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relation_id?: boolean
    from_user_id?: boolean
    count?: boolean
    last_loveu_sent?: boolean
    relation?: boolean | RelationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loveCounter"]>

  export type LoveCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relation_id?: boolean
    from_user_id?: boolean
    count?: boolean
    last_loveu_sent?: boolean
    relation?: boolean | RelationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loveCounter"]>

  export type LoveCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    relation_id?: boolean
    from_user_id?: boolean
    count?: boolean
    last_loveu_sent?: boolean
    relation?: boolean | RelationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loveCounter"]>

  export type LoveCounterSelectScalar = {
    relation_id?: boolean
    from_user_id?: boolean
    count?: boolean
    last_loveu_sent?: boolean
  }

  export type LoveCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"relation_id" | "from_user_id" | "count" | "last_loveu_sent", ExtArgs["result"]["loveCounter"]>
  export type LoveCounterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | RelationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoveCounterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | RelationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoveCounterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation?: boolean | RelationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoveCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoveCounter"
    objects: {
      relation: Prisma.$RelationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      relation_id: string
      from_user_id: string
      count: number
      last_loveu_sent: Date
    }, ExtArgs["result"]["loveCounter"]>
    composites: {}
  }

  type LoveCounterGetPayload<S extends boolean | null | undefined | LoveCounterDefaultArgs> = $Result.GetResult<Prisma.$LoveCounterPayload, S>

  type LoveCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoveCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoveCounterCountAggregateInputType | true
    }

  export interface LoveCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoveCounter'], meta: { name: 'LoveCounter' } }
    /**
     * Find zero or one LoveCounter that matches the filter.
     * @param {LoveCounterFindUniqueArgs} args - Arguments to find a LoveCounter
     * @example
     * // Get one LoveCounter
     * const loveCounter = await prisma.loveCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoveCounterFindUniqueArgs>(args: SelectSubset<T, LoveCounterFindUniqueArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoveCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoveCounterFindUniqueOrThrowArgs} args - Arguments to find a LoveCounter
     * @example
     * // Get one LoveCounter
     * const loveCounter = await prisma.loveCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoveCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, LoveCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoveCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterFindFirstArgs} args - Arguments to find a LoveCounter
     * @example
     * // Get one LoveCounter
     * const loveCounter = await prisma.loveCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoveCounterFindFirstArgs>(args?: SelectSubset<T, LoveCounterFindFirstArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoveCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterFindFirstOrThrowArgs} args - Arguments to find a LoveCounter
     * @example
     * // Get one LoveCounter
     * const loveCounter = await prisma.loveCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoveCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, LoveCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoveCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoveCounters
     * const loveCounters = await prisma.loveCounter.findMany()
     * 
     * // Get first 10 LoveCounters
     * const loveCounters = await prisma.loveCounter.findMany({ take: 10 })
     * 
     * // Only select the `relation_id`
     * const loveCounterWithRelation_idOnly = await prisma.loveCounter.findMany({ select: { relation_id: true } })
     * 
     */
    findMany<T extends LoveCounterFindManyArgs>(args?: SelectSubset<T, LoveCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoveCounter.
     * @param {LoveCounterCreateArgs} args - Arguments to create a LoveCounter.
     * @example
     * // Create one LoveCounter
     * const LoveCounter = await prisma.loveCounter.create({
     *   data: {
     *     // ... data to create a LoveCounter
     *   }
     * })
     * 
     */
    create<T extends LoveCounterCreateArgs>(args: SelectSubset<T, LoveCounterCreateArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoveCounters.
     * @param {LoveCounterCreateManyArgs} args - Arguments to create many LoveCounters.
     * @example
     * // Create many LoveCounters
     * const loveCounter = await prisma.loveCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoveCounterCreateManyArgs>(args?: SelectSubset<T, LoveCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoveCounters and returns the data saved in the database.
     * @param {LoveCounterCreateManyAndReturnArgs} args - Arguments to create many LoveCounters.
     * @example
     * // Create many LoveCounters
     * const loveCounter = await prisma.loveCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoveCounters and only return the `relation_id`
     * const loveCounterWithRelation_idOnly = await prisma.loveCounter.createManyAndReturn({
     *   select: { relation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoveCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, LoveCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoveCounter.
     * @param {LoveCounterDeleteArgs} args - Arguments to delete one LoveCounter.
     * @example
     * // Delete one LoveCounter
     * const LoveCounter = await prisma.loveCounter.delete({
     *   where: {
     *     // ... filter to delete one LoveCounter
     *   }
     * })
     * 
     */
    delete<T extends LoveCounterDeleteArgs>(args: SelectSubset<T, LoveCounterDeleteArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoveCounter.
     * @param {LoveCounterUpdateArgs} args - Arguments to update one LoveCounter.
     * @example
     * // Update one LoveCounter
     * const loveCounter = await prisma.loveCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoveCounterUpdateArgs>(args: SelectSubset<T, LoveCounterUpdateArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoveCounters.
     * @param {LoveCounterDeleteManyArgs} args - Arguments to filter LoveCounters to delete.
     * @example
     * // Delete a few LoveCounters
     * const { count } = await prisma.loveCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoveCounterDeleteManyArgs>(args?: SelectSubset<T, LoveCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoveCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoveCounters
     * const loveCounter = await prisma.loveCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoveCounterUpdateManyArgs>(args: SelectSubset<T, LoveCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoveCounters and returns the data updated in the database.
     * @param {LoveCounterUpdateManyAndReturnArgs} args - Arguments to update many LoveCounters.
     * @example
     * // Update many LoveCounters
     * const loveCounter = await prisma.loveCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoveCounters and only return the `relation_id`
     * const loveCounterWithRelation_idOnly = await prisma.loveCounter.updateManyAndReturn({
     *   select: { relation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoveCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, LoveCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoveCounter.
     * @param {LoveCounterUpsertArgs} args - Arguments to update or create a LoveCounter.
     * @example
     * // Update or create a LoveCounter
     * const loveCounter = await prisma.loveCounter.upsert({
     *   create: {
     *     // ... data to create a LoveCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoveCounter we want to update
     *   }
     * })
     */
    upsert<T extends LoveCounterUpsertArgs>(args: SelectSubset<T, LoveCounterUpsertArgs<ExtArgs>>): Prisma__LoveCounterClient<$Result.GetResult<Prisma.$LoveCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoveCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterCountArgs} args - Arguments to filter LoveCounters to count.
     * @example
     * // Count the number of LoveCounters
     * const count = await prisma.loveCounter.count({
     *   where: {
     *     // ... the filter for the LoveCounters we want to count
     *   }
     * })
    **/
    count<T extends LoveCounterCountArgs>(
      args?: Subset<T, LoveCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoveCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoveCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoveCounterAggregateArgs>(args: Subset<T, LoveCounterAggregateArgs>): Prisma.PrismaPromise<GetLoveCounterAggregateType<T>>

    /**
     * Group by LoveCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCounterGroupByArgs} args - Group by arguments.
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
      T extends LoveCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoveCounterGroupByArgs['orderBy'] }
        : { orderBy?: LoveCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoveCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoveCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoveCounter model
   */
  readonly fields: LoveCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoveCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoveCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relation<T extends RelationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RelationDefaultArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LoveCounter model
   */
  interface LoveCounterFieldRefs {
    readonly relation_id: FieldRef<"LoveCounter", 'String'>
    readonly from_user_id: FieldRef<"LoveCounter", 'String'>
    readonly count: FieldRef<"LoveCounter", 'Int'>
    readonly last_loveu_sent: FieldRef<"LoveCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoveCounter findUnique
   */
  export type LoveCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * Filter, which LoveCounter to fetch.
     */
    where: LoveCounterWhereUniqueInput
  }

  /**
   * LoveCounter findUniqueOrThrow
   */
  export type LoveCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * Filter, which LoveCounter to fetch.
     */
    where: LoveCounterWhereUniqueInput
  }

  /**
   * LoveCounter findFirst
   */
  export type LoveCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * Filter, which LoveCounter to fetch.
     */
    where?: LoveCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCounters to fetch.
     */
    orderBy?: LoveCounterOrderByWithRelationInput | LoveCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoveCounters.
     */
    cursor?: LoveCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoveCounters.
     */
    distinct?: LoveCounterScalarFieldEnum | LoveCounterScalarFieldEnum[]
  }

  /**
   * LoveCounter findFirstOrThrow
   */
  export type LoveCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * Filter, which LoveCounter to fetch.
     */
    where?: LoveCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCounters to fetch.
     */
    orderBy?: LoveCounterOrderByWithRelationInput | LoveCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoveCounters.
     */
    cursor?: LoveCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoveCounters.
     */
    distinct?: LoveCounterScalarFieldEnum | LoveCounterScalarFieldEnum[]
  }

  /**
   * LoveCounter findMany
   */
  export type LoveCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * Filter, which LoveCounters to fetch.
     */
    where?: LoveCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoveCounters to fetch.
     */
    orderBy?: LoveCounterOrderByWithRelationInput | LoveCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoveCounters.
     */
    cursor?: LoveCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoveCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoveCounters.
     */
    skip?: number
    distinct?: LoveCounterScalarFieldEnum | LoveCounterScalarFieldEnum[]
  }

  /**
   * LoveCounter create
   */
  export type LoveCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * The data needed to create a LoveCounter.
     */
    data: XOR<LoveCounterCreateInput, LoveCounterUncheckedCreateInput>
  }

  /**
   * LoveCounter createMany
   */
  export type LoveCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoveCounters.
     */
    data: LoveCounterCreateManyInput | LoveCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoveCounter createManyAndReturn
   */
  export type LoveCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * The data used to create many LoveCounters.
     */
    data: LoveCounterCreateManyInput | LoveCounterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoveCounter update
   */
  export type LoveCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * The data needed to update a LoveCounter.
     */
    data: XOR<LoveCounterUpdateInput, LoveCounterUncheckedUpdateInput>
    /**
     * Choose, which LoveCounter to update.
     */
    where: LoveCounterWhereUniqueInput
  }

  /**
   * LoveCounter updateMany
   */
  export type LoveCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoveCounters.
     */
    data: XOR<LoveCounterUpdateManyMutationInput, LoveCounterUncheckedUpdateManyInput>
    /**
     * Filter which LoveCounters to update
     */
    where?: LoveCounterWhereInput
    /**
     * Limit how many LoveCounters to update.
     */
    limit?: number
  }

  /**
   * LoveCounter updateManyAndReturn
   */
  export type LoveCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * The data used to update LoveCounters.
     */
    data: XOR<LoveCounterUpdateManyMutationInput, LoveCounterUncheckedUpdateManyInput>
    /**
     * Filter which LoveCounters to update
     */
    where?: LoveCounterWhereInput
    /**
     * Limit how many LoveCounters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoveCounter upsert
   */
  export type LoveCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * The filter to search for the LoveCounter to update in case it exists.
     */
    where: LoveCounterWhereUniqueInput
    /**
     * In case the LoveCounter found by the `where` argument doesn't exist, create a new LoveCounter with this data.
     */
    create: XOR<LoveCounterCreateInput, LoveCounterUncheckedCreateInput>
    /**
     * In case the LoveCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoveCounterUpdateInput, LoveCounterUncheckedUpdateInput>
  }

  /**
   * LoveCounter delete
   */
  export type LoveCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
    /**
     * Filter which LoveCounter to delete.
     */
    where: LoveCounterWhereUniqueInput
  }

  /**
   * LoveCounter deleteMany
   */
  export type LoveCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoveCounters to delete
     */
    where?: LoveCounterWhereInput
    /**
     * Limit how many LoveCounters to delete.
     */
    limit?: number
  }

  /**
   * LoveCounter without action
   */
  export type LoveCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoveCounter
     */
    select?: LoveCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoveCounter
     */
    omit?: LoveCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveCounterInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    email: 'email',
    birthdate: 'birthdate',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    relation_invitation_id: 'relation_invitation_id'
  };

  export type RelationScalarFieldEnum = (typeof RelationScalarFieldEnum)[keyof typeof RelationScalarFieldEnum]


  export const RelationMemberScalarFieldEnum: {
    relation_id: 'relation_id',
    user_id: 'user_id'
  };

  export type RelationMemberScalarFieldEnum = (typeof RelationMemberScalarFieldEnum)[keyof typeof RelationMemberScalarFieldEnum]


  export const RelationInvitationScalarFieldEnum: {
    id: 'id',
    inviter_id: 'inviter_id',
    invited_user_id: 'invited_user_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RelationInvitationScalarFieldEnum = (typeof RelationInvitationScalarFieldEnum)[keyof typeof RelationInvitationScalarFieldEnum]


  export const LoveCounterScalarFieldEnum: {
    relation_id: 'relation_id',
    from_user_id: 'from_user_id',
    count: 'count',
    last_loveu_sent: 'last_loveu_sent'
  };

  export type LoveCounterScalarFieldEnum = (typeof LoveCounterScalarFieldEnum)[keyof typeof LoveCounterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    memberships?: RelationMemberListRelationFilter
    love_counters?: LoveCounterListRelationFilter
    sent_invitations?: RelationInvitationListRelationFilter
    received_invitations?: RelationInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    memberships?: RelationMemberOrderByRelationAggregateInput
    love_counters?: LoveCounterOrderByRelationAggregateInput
    sent_invitations?: RelationInvitationOrderByRelationAggregateInput
    received_invitations?: RelationInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    memberships?: RelationMemberListRelationFilter
    love_counters?: LoveCounterListRelationFilter
    sent_invitations?: RelationInvitationListRelationFilter
    received_invitations?: RelationInvitationListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    birthdate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type RelationWhereInput = {
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    id?: StringFilter<"Relation"> | string
    created_at?: DateTimeFilter<"Relation"> | Date | string
    relation_invitation_id?: StringNullableFilter<"Relation"> | string | null
    members?: RelationMemberListRelationFilter
    love_counters?: LoveCounterListRelationFilter
    relation_invitation?: XOR<RelationInvitationNullableScalarRelationFilter, RelationInvitationWhereInput> | null
  }

  export type RelationOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    relation_invitation_id?: SortOrderInput | SortOrder
    members?: RelationMemberOrderByRelationAggregateInput
    love_counters?: LoveCounterOrderByRelationAggregateInput
    relation_invitation?: RelationInvitationOrderByWithRelationInput
  }

  export type RelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    relation_invitation_id?: string
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    created_at?: DateTimeFilter<"Relation"> | Date | string
    members?: RelationMemberListRelationFilter
    love_counters?: LoveCounterListRelationFilter
    relation_invitation?: XOR<RelationInvitationNullableScalarRelationFilter, RelationInvitationWhereInput> | null
  }, "id" | "relation_invitation_id">

  export type RelationOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    relation_invitation_id?: SortOrderInput | SortOrder
    _count?: RelationCountOrderByAggregateInput
    _max?: RelationMaxOrderByAggregateInput
    _min?: RelationMinOrderByAggregateInput
  }

  export type RelationScalarWhereWithAggregatesInput = {
    AND?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    OR?: RelationScalarWhereWithAggregatesInput[]
    NOT?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Relation"> | string
    created_at?: DateTimeWithAggregatesFilter<"Relation"> | Date | string
    relation_invitation_id?: StringNullableWithAggregatesFilter<"Relation"> | string | null
  }

  export type RelationMemberWhereInput = {
    AND?: RelationMemberWhereInput | RelationMemberWhereInput[]
    OR?: RelationMemberWhereInput[]
    NOT?: RelationMemberWhereInput | RelationMemberWhereInput[]
    relation_id?: StringFilter<"RelationMember"> | string
    user_id?: StringFilter<"RelationMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relation?: XOR<RelationScalarRelationFilter, RelationWhereInput>
  }

  export type RelationMemberOrderByWithRelationInput = {
    relation_id?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    relation?: RelationOrderByWithRelationInput
  }

  export type RelationMemberWhereUniqueInput = Prisma.AtLeast<{
    relation_id_user_id?: RelationMemberRelation_idUser_idCompoundUniqueInput
    AND?: RelationMemberWhereInput | RelationMemberWhereInput[]
    OR?: RelationMemberWhereInput[]
    NOT?: RelationMemberWhereInput | RelationMemberWhereInput[]
    relation_id?: StringFilter<"RelationMember"> | string
    user_id?: StringFilter<"RelationMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relation?: XOR<RelationScalarRelationFilter, RelationWhereInput>
  }, "relation_id_user_id">

  export type RelationMemberOrderByWithAggregationInput = {
    relation_id?: SortOrder
    user_id?: SortOrder
    _count?: RelationMemberCountOrderByAggregateInput
    _max?: RelationMemberMaxOrderByAggregateInput
    _min?: RelationMemberMinOrderByAggregateInput
  }

  export type RelationMemberScalarWhereWithAggregatesInput = {
    AND?: RelationMemberScalarWhereWithAggregatesInput | RelationMemberScalarWhereWithAggregatesInput[]
    OR?: RelationMemberScalarWhereWithAggregatesInput[]
    NOT?: RelationMemberScalarWhereWithAggregatesInput | RelationMemberScalarWhereWithAggregatesInput[]
    relation_id?: StringWithAggregatesFilter<"RelationMember"> | string
    user_id?: StringWithAggregatesFilter<"RelationMember"> | string
  }

  export type RelationInvitationWhereInput = {
    AND?: RelationInvitationWhereInput | RelationInvitationWhereInput[]
    OR?: RelationInvitationWhereInput[]
    NOT?: RelationInvitationWhereInput | RelationInvitationWhereInput[]
    id?: StringFilter<"RelationInvitation"> | string
    inviter_id?: StringFilter<"RelationInvitation"> | string
    invited_user_id?: StringFilter<"RelationInvitation"> | string
    status?: StringFilter<"RelationInvitation"> | string
    created_at?: DateTimeFilter<"RelationInvitation"> | Date | string
    updated_at?: DateTimeFilter<"RelationInvitation"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invited_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relation?: XOR<RelationNullableScalarRelationFilter, RelationWhereInput> | null
  }

  export type RelationInvitationOrderByWithRelationInput = {
    id?: SortOrder
    inviter_id?: SortOrder
    invited_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    inviter?: UserOrderByWithRelationInput
    invited_user?: UserOrderByWithRelationInput
    relation?: RelationOrderByWithRelationInput
  }

  export type RelationInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviter_id_invited_user_id?: RelationInvitationInviter_idInvited_user_idCompoundUniqueInput
    AND?: RelationInvitationWhereInput | RelationInvitationWhereInput[]
    OR?: RelationInvitationWhereInput[]
    NOT?: RelationInvitationWhereInput | RelationInvitationWhereInput[]
    inviter_id?: StringFilter<"RelationInvitation"> | string
    invited_user_id?: StringFilter<"RelationInvitation"> | string
    status?: StringFilter<"RelationInvitation"> | string
    created_at?: DateTimeFilter<"RelationInvitation"> | Date | string
    updated_at?: DateTimeFilter<"RelationInvitation"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invited_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relation?: XOR<RelationNullableScalarRelationFilter, RelationWhereInput> | null
  }, "id" | "inviter_id_invited_user_id">

  export type RelationInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    inviter_id?: SortOrder
    invited_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RelationInvitationCountOrderByAggregateInput
    _max?: RelationInvitationMaxOrderByAggregateInput
    _min?: RelationInvitationMinOrderByAggregateInput
  }

  export type RelationInvitationScalarWhereWithAggregatesInput = {
    AND?: RelationInvitationScalarWhereWithAggregatesInput | RelationInvitationScalarWhereWithAggregatesInput[]
    OR?: RelationInvitationScalarWhereWithAggregatesInput[]
    NOT?: RelationInvitationScalarWhereWithAggregatesInput | RelationInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelationInvitation"> | string
    inviter_id?: StringWithAggregatesFilter<"RelationInvitation"> | string
    invited_user_id?: StringWithAggregatesFilter<"RelationInvitation"> | string
    status?: StringWithAggregatesFilter<"RelationInvitation"> | string
    created_at?: DateTimeWithAggregatesFilter<"RelationInvitation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RelationInvitation"> | Date | string
  }

  export type LoveCounterWhereInput = {
    AND?: LoveCounterWhereInput | LoveCounterWhereInput[]
    OR?: LoveCounterWhereInput[]
    NOT?: LoveCounterWhereInput | LoveCounterWhereInput[]
    relation_id?: StringFilter<"LoveCounter"> | string
    from_user_id?: StringFilter<"LoveCounter"> | string
    count?: IntFilter<"LoveCounter"> | number
    last_loveu_sent?: DateTimeFilter<"LoveCounter"> | Date | string
    relation?: XOR<RelationScalarRelationFilter, RelationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LoveCounterOrderByWithRelationInput = {
    relation_id?: SortOrder
    from_user_id?: SortOrder
    count?: SortOrder
    last_loveu_sent?: SortOrder
    relation?: RelationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LoveCounterWhereUniqueInput = Prisma.AtLeast<{
    relation_id_from_user_id?: LoveCounterRelation_idFrom_user_idCompoundUniqueInput
    AND?: LoveCounterWhereInput | LoveCounterWhereInput[]
    OR?: LoveCounterWhereInput[]
    NOT?: LoveCounterWhereInput | LoveCounterWhereInput[]
    relation_id?: StringFilter<"LoveCounter"> | string
    from_user_id?: StringFilter<"LoveCounter"> | string
    count?: IntFilter<"LoveCounter"> | number
    last_loveu_sent?: DateTimeFilter<"LoveCounter"> | Date | string
    relation?: XOR<RelationScalarRelationFilter, RelationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "relation_id_from_user_id">

  export type LoveCounterOrderByWithAggregationInput = {
    relation_id?: SortOrder
    from_user_id?: SortOrder
    count?: SortOrder
    last_loveu_sent?: SortOrder
    _count?: LoveCounterCountOrderByAggregateInput
    _avg?: LoveCounterAvgOrderByAggregateInput
    _max?: LoveCounterMaxOrderByAggregateInput
    _min?: LoveCounterMinOrderByAggregateInput
    _sum?: LoveCounterSumOrderByAggregateInput
  }

  export type LoveCounterScalarWhereWithAggregatesInput = {
    AND?: LoveCounterScalarWhereWithAggregatesInput | LoveCounterScalarWhereWithAggregatesInput[]
    OR?: LoveCounterScalarWhereWithAggregatesInput[]
    NOT?: LoveCounterScalarWhereWithAggregatesInput | LoveCounterScalarWhereWithAggregatesInput[]
    relation_id?: StringWithAggregatesFilter<"LoveCounter"> | string
    from_user_id?: StringWithAggregatesFilter<"LoveCounter"> | string
    count?: IntWithAggregatesFilter<"LoveCounter"> | number
    last_loveu_sent?: DateTimeWithAggregatesFilter<"LoveCounter"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberCreateNestedManyWithoutUserInput
    love_counters?: LoveCounterCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationCreateNestedManyWithoutInviterInput
    received_invitations?: RelationInvitationCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberUncheckedCreateNestedManyWithoutUserInput
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInviterInput
    received_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUpdateManyWithoutUserNestedInput
    love_counters?: LoveCounterUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUpdateManyWithoutInviterNestedInput
    received_invitations?: RelationInvitationUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUncheckedUpdateManyWithoutUserNestedInput
    love_counters?: LoveCounterUncheckedUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUncheckedUpdateManyWithoutInviterNestedInput
    received_invitations?: RelationInvitationUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RelationCreateInput = {
    id?: string
    created_at?: Date | string
    members?: RelationMemberCreateNestedManyWithoutRelationInput
    love_counters?: LoveCounterCreateNestedManyWithoutRelationInput
    relation_invitation?: RelationInvitationCreateNestedOneWithoutRelationInput
  }

  export type RelationUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    relation_invitation_id?: string | null
    members?: RelationMemberUncheckedCreateNestedManyWithoutRelationInput
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RelationMemberUpdateManyWithoutRelationNestedInput
    love_counters?: LoveCounterUpdateManyWithoutRelationNestedInput
    relation_invitation?: RelationInvitationUpdateOneWithoutRelationNestedInput
  }

  export type RelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_invitation_id?: NullableStringFieldUpdateOperationsInput | string | null
    members?: RelationMemberUncheckedUpdateManyWithoutRelationNestedInput
    love_counters?: LoveCounterUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type RelationCreateManyInput = {
    id?: string
    created_at?: Date | string
    relation_invitation_id?: string | null
  }

  export type RelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_invitation_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationMemberCreateInput = {
    user: UserCreateNestedOneWithoutMembershipsInput
    relation: RelationCreateNestedOneWithoutMembersInput
  }

  export type RelationMemberUncheckedCreateInput = {
    relation_id: string
    user_id: string
  }

  export type RelationMemberUpdateInput = {
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    relation?: RelationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type RelationMemberUncheckedUpdateInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelationMemberCreateManyInput = {
    relation_id: string
    user_id: string
  }

  export type RelationMemberUpdateManyMutationInput = {

  }

  export type RelationMemberUncheckedUpdateManyInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelationInvitationCreateInput = {
    id?: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    inviter: UserCreateNestedOneWithoutSent_invitationsInput
    invited_user: UserCreateNestedOneWithoutReceived_invitationsInput
    relation?: RelationCreateNestedOneWithoutRelation_invitationInput
  }

  export type RelationInvitationUncheckedCreateInput = {
    id?: string
    inviter_id: string
    invited_user_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    relation?: RelationUncheckedCreateNestedOneWithoutRelation_invitationInput
  }

  export type RelationInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutSent_invitationsNestedInput
    invited_user?: UserUpdateOneRequiredWithoutReceived_invitationsNestedInput
    relation?: RelationUpdateOneWithoutRelation_invitationNestedInput
  }

  export type RelationInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviter_id?: StringFieldUpdateOperationsInput | string
    invited_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUncheckedUpdateOneWithoutRelation_invitationNestedInput
  }

  export type RelationInvitationCreateManyInput = {
    id?: string
    inviter_id: string
    invited_user_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RelationInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviter_id?: StringFieldUpdateOperationsInput | string
    invited_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCounterCreateInput = {
    count?: number
    last_loveu_sent: Date | string
    relation: RelationCreateNestedOneWithoutLove_countersInput
    user: UserCreateNestedOneWithoutLove_countersInput
  }

  export type LoveCounterUncheckedCreateInput = {
    relation_id: string
    from_user_id: string
    count?: number
    last_loveu_sent: Date | string
  }

  export type LoveCounterUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUpdateOneRequiredWithoutLove_countersNestedInput
    user?: UserUpdateOneRequiredWithoutLove_countersNestedInput
  }

  export type LoveCounterUncheckedUpdateInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCounterCreateManyInput = {
    relation_id: string
    from_user_id: string
    count?: number
    last_loveu_sent: Date | string
  }

  export type LoveCounterUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCounterUncheckedUpdateManyInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RelationMemberListRelationFilter = {
    every?: RelationMemberWhereInput
    some?: RelationMemberWhereInput
    none?: RelationMemberWhereInput
  }

  export type LoveCounterListRelationFilter = {
    every?: LoveCounterWhereInput
    some?: LoveCounterWhereInput
    none?: LoveCounterWhereInput
  }

  export type RelationInvitationListRelationFilter = {
    every?: RelationInvitationWhereInput
    some?: RelationInvitationWhereInput
    none?: RelationInvitationWhereInput
  }

  export type RelationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoveCounterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RelationInvitationNullableScalarRelationFilter = {
    is?: RelationInvitationWhereInput | null
    isNot?: RelationInvitationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RelationCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    relation_invitation_id?: SortOrder
  }

  export type RelationMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    relation_invitation_id?: SortOrder
  }

  export type RelationMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    relation_invitation_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RelationScalarRelationFilter = {
    is?: RelationWhereInput
    isNot?: RelationWhereInput
  }

  export type RelationMemberRelation_idUser_idCompoundUniqueInput = {
    relation_id: string
    user_id: string
  }

  export type RelationMemberCountOrderByAggregateInput = {
    relation_id?: SortOrder
    user_id?: SortOrder
  }

  export type RelationMemberMaxOrderByAggregateInput = {
    relation_id?: SortOrder
    user_id?: SortOrder
  }

  export type RelationMemberMinOrderByAggregateInput = {
    relation_id?: SortOrder
    user_id?: SortOrder
  }

  export type RelationNullableScalarRelationFilter = {
    is?: RelationWhereInput | null
    isNot?: RelationWhereInput | null
  }

  export type RelationInvitationInviter_idInvited_user_idCompoundUniqueInput = {
    inviter_id: string
    invited_user_id: string
  }

  export type RelationInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    inviter_id?: SortOrder
    invited_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RelationInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    inviter_id?: SortOrder
    invited_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RelationInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    inviter_id?: SortOrder
    invited_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LoveCounterRelation_idFrom_user_idCompoundUniqueInput = {
    relation_id: string
    from_user_id: string
  }

  export type LoveCounterCountOrderByAggregateInput = {
    relation_id?: SortOrder
    from_user_id?: SortOrder
    count?: SortOrder
    last_loveu_sent?: SortOrder
  }

  export type LoveCounterAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type LoveCounterMaxOrderByAggregateInput = {
    relation_id?: SortOrder
    from_user_id?: SortOrder
    count?: SortOrder
    last_loveu_sent?: SortOrder
  }

  export type LoveCounterMinOrderByAggregateInput = {
    relation_id?: SortOrder
    from_user_id?: SortOrder
    count?: SortOrder
    last_loveu_sent?: SortOrder
  }

  export type LoveCounterSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type RelationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<RelationMemberCreateWithoutUserInput, RelationMemberUncheckedCreateWithoutUserInput> | RelationMemberCreateWithoutUserInput[] | RelationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutUserInput | RelationMemberCreateOrConnectWithoutUserInput[]
    createMany?: RelationMemberCreateManyUserInputEnvelope
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
  }

  export type LoveCounterCreateNestedManyWithoutUserInput = {
    create?: XOR<LoveCounterCreateWithoutUserInput, LoveCounterUncheckedCreateWithoutUserInput> | LoveCounterCreateWithoutUserInput[] | LoveCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutUserInput | LoveCounterCreateOrConnectWithoutUserInput[]
    createMany?: LoveCounterCreateManyUserInputEnvelope
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
  }

  export type RelationInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<RelationInvitationCreateWithoutInviterInput, RelationInvitationUncheckedCreateWithoutInviterInput> | RelationInvitationCreateWithoutInviterInput[] | RelationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInviterInput | RelationInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: RelationInvitationCreateManyInviterInputEnvelope
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
  }

  export type RelationInvitationCreateNestedManyWithoutInvited_userInput = {
    create?: XOR<RelationInvitationCreateWithoutInvited_userInput, RelationInvitationUncheckedCreateWithoutInvited_userInput> | RelationInvitationCreateWithoutInvited_userInput[] | RelationInvitationUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInvited_userInput | RelationInvitationCreateOrConnectWithoutInvited_userInput[]
    createMany?: RelationInvitationCreateManyInvited_userInputEnvelope
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
  }

  export type RelationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RelationMemberCreateWithoutUserInput, RelationMemberUncheckedCreateWithoutUserInput> | RelationMemberCreateWithoutUserInput[] | RelationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutUserInput | RelationMemberCreateOrConnectWithoutUserInput[]
    createMany?: RelationMemberCreateManyUserInputEnvelope
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
  }

  export type LoveCounterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoveCounterCreateWithoutUserInput, LoveCounterUncheckedCreateWithoutUserInput> | LoveCounterCreateWithoutUserInput[] | LoveCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutUserInput | LoveCounterCreateOrConnectWithoutUserInput[]
    createMany?: LoveCounterCreateManyUserInputEnvelope
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
  }

  export type RelationInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<RelationInvitationCreateWithoutInviterInput, RelationInvitationUncheckedCreateWithoutInviterInput> | RelationInvitationCreateWithoutInviterInput[] | RelationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInviterInput | RelationInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: RelationInvitationCreateManyInviterInputEnvelope
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
  }

  export type RelationInvitationUncheckedCreateNestedManyWithoutInvited_userInput = {
    create?: XOR<RelationInvitationCreateWithoutInvited_userInput, RelationInvitationUncheckedCreateWithoutInvited_userInput> | RelationInvitationCreateWithoutInvited_userInput[] | RelationInvitationUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInvited_userInput | RelationInvitationCreateOrConnectWithoutInvited_userInput[]
    createMany?: RelationInvitationCreateManyInvited_userInputEnvelope
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RelationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<RelationMemberCreateWithoutUserInput, RelationMemberUncheckedCreateWithoutUserInput> | RelationMemberCreateWithoutUserInput[] | RelationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutUserInput | RelationMemberCreateOrConnectWithoutUserInput[]
    upsert?: RelationMemberUpsertWithWhereUniqueWithoutUserInput | RelationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RelationMemberCreateManyUserInputEnvelope
    set?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    disconnect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    delete?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    update?: RelationMemberUpdateWithWhereUniqueWithoutUserInput | RelationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RelationMemberUpdateManyWithWhereWithoutUserInput | RelationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RelationMemberScalarWhereInput | RelationMemberScalarWhereInput[]
  }

  export type LoveCounterUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoveCounterCreateWithoutUserInput, LoveCounterUncheckedCreateWithoutUserInput> | LoveCounterCreateWithoutUserInput[] | LoveCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutUserInput | LoveCounterCreateOrConnectWithoutUserInput[]
    upsert?: LoveCounterUpsertWithWhereUniqueWithoutUserInput | LoveCounterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoveCounterCreateManyUserInputEnvelope
    set?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    disconnect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    delete?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    update?: LoveCounterUpdateWithWhereUniqueWithoutUserInput | LoveCounterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoveCounterUpdateManyWithWhereWithoutUserInput | LoveCounterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoveCounterScalarWhereInput | LoveCounterScalarWhereInput[]
  }

  export type RelationInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<RelationInvitationCreateWithoutInviterInput, RelationInvitationUncheckedCreateWithoutInviterInput> | RelationInvitationCreateWithoutInviterInput[] | RelationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInviterInput | RelationInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: RelationInvitationUpsertWithWhereUniqueWithoutInviterInput | RelationInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: RelationInvitationCreateManyInviterInputEnvelope
    set?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    disconnect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    delete?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    update?: RelationInvitationUpdateWithWhereUniqueWithoutInviterInput | RelationInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: RelationInvitationUpdateManyWithWhereWithoutInviterInput | RelationInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: RelationInvitationScalarWhereInput | RelationInvitationScalarWhereInput[]
  }

  export type RelationInvitationUpdateManyWithoutInvited_userNestedInput = {
    create?: XOR<RelationInvitationCreateWithoutInvited_userInput, RelationInvitationUncheckedCreateWithoutInvited_userInput> | RelationInvitationCreateWithoutInvited_userInput[] | RelationInvitationUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInvited_userInput | RelationInvitationCreateOrConnectWithoutInvited_userInput[]
    upsert?: RelationInvitationUpsertWithWhereUniqueWithoutInvited_userInput | RelationInvitationUpsertWithWhereUniqueWithoutInvited_userInput[]
    createMany?: RelationInvitationCreateManyInvited_userInputEnvelope
    set?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    disconnect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    delete?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    update?: RelationInvitationUpdateWithWhereUniqueWithoutInvited_userInput | RelationInvitationUpdateWithWhereUniqueWithoutInvited_userInput[]
    updateMany?: RelationInvitationUpdateManyWithWhereWithoutInvited_userInput | RelationInvitationUpdateManyWithWhereWithoutInvited_userInput[]
    deleteMany?: RelationInvitationScalarWhereInput | RelationInvitationScalarWhereInput[]
  }

  export type RelationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RelationMemberCreateWithoutUserInput, RelationMemberUncheckedCreateWithoutUserInput> | RelationMemberCreateWithoutUserInput[] | RelationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutUserInput | RelationMemberCreateOrConnectWithoutUserInput[]
    upsert?: RelationMemberUpsertWithWhereUniqueWithoutUserInput | RelationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RelationMemberCreateManyUserInputEnvelope
    set?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    disconnect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    delete?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    update?: RelationMemberUpdateWithWhereUniqueWithoutUserInput | RelationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RelationMemberUpdateManyWithWhereWithoutUserInput | RelationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RelationMemberScalarWhereInput | RelationMemberScalarWhereInput[]
  }

  export type LoveCounterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoveCounterCreateWithoutUserInput, LoveCounterUncheckedCreateWithoutUserInput> | LoveCounterCreateWithoutUserInput[] | LoveCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutUserInput | LoveCounterCreateOrConnectWithoutUserInput[]
    upsert?: LoveCounterUpsertWithWhereUniqueWithoutUserInput | LoveCounterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoveCounterCreateManyUserInputEnvelope
    set?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    disconnect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    delete?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    update?: LoveCounterUpdateWithWhereUniqueWithoutUserInput | LoveCounterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoveCounterUpdateManyWithWhereWithoutUserInput | LoveCounterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoveCounterScalarWhereInput | LoveCounterScalarWhereInput[]
  }

  export type RelationInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<RelationInvitationCreateWithoutInviterInput, RelationInvitationUncheckedCreateWithoutInviterInput> | RelationInvitationCreateWithoutInviterInput[] | RelationInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInviterInput | RelationInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: RelationInvitationUpsertWithWhereUniqueWithoutInviterInput | RelationInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: RelationInvitationCreateManyInviterInputEnvelope
    set?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    disconnect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    delete?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    update?: RelationInvitationUpdateWithWhereUniqueWithoutInviterInput | RelationInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: RelationInvitationUpdateManyWithWhereWithoutInviterInput | RelationInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: RelationInvitationScalarWhereInput | RelationInvitationScalarWhereInput[]
  }

  export type RelationInvitationUncheckedUpdateManyWithoutInvited_userNestedInput = {
    create?: XOR<RelationInvitationCreateWithoutInvited_userInput, RelationInvitationUncheckedCreateWithoutInvited_userInput> | RelationInvitationCreateWithoutInvited_userInput[] | RelationInvitationUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutInvited_userInput | RelationInvitationCreateOrConnectWithoutInvited_userInput[]
    upsert?: RelationInvitationUpsertWithWhereUniqueWithoutInvited_userInput | RelationInvitationUpsertWithWhereUniqueWithoutInvited_userInput[]
    createMany?: RelationInvitationCreateManyInvited_userInputEnvelope
    set?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    disconnect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    delete?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    connect?: RelationInvitationWhereUniqueInput | RelationInvitationWhereUniqueInput[]
    update?: RelationInvitationUpdateWithWhereUniqueWithoutInvited_userInput | RelationInvitationUpdateWithWhereUniqueWithoutInvited_userInput[]
    updateMany?: RelationInvitationUpdateManyWithWhereWithoutInvited_userInput | RelationInvitationUpdateManyWithWhereWithoutInvited_userInput[]
    deleteMany?: RelationInvitationScalarWhereInput | RelationInvitationScalarWhereInput[]
  }

  export type RelationMemberCreateNestedManyWithoutRelationInput = {
    create?: XOR<RelationMemberCreateWithoutRelationInput, RelationMemberUncheckedCreateWithoutRelationInput> | RelationMemberCreateWithoutRelationInput[] | RelationMemberUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutRelationInput | RelationMemberCreateOrConnectWithoutRelationInput[]
    createMany?: RelationMemberCreateManyRelationInputEnvelope
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
  }

  export type LoveCounterCreateNestedManyWithoutRelationInput = {
    create?: XOR<LoveCounterCreateWithoutRelationInput, LoveCounterUncheckedCreateWithoutRelationInput> | LoveCounterCreateWithoutRelationInput[] | LoveCounterUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutRelationInput | LoveCounterCreateOrConnectWithoutRelationInput[]
    createMany?: LoveCounterCreateManyRelationInputEnvelope
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
  }

  export type RelationInvitationCreateNestedOneWithoutRelationInput = {
    create?: XOR<RelationInvitationCreateWithoutRelationInput, RelationInvitationUncheckedCreateWithoutRelationInput>
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutRelationInput
    connect?: RelationInvitationWhereUniqueInput
  }

  export type RelationMemberUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<RelationMemberCreateWithoutRelationInput, RelationMemberUncheckedCreateWithoutRelationInput> | RelationMemberCreateWithoutRelationInput[] | RelationMemberUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutRelationInput | RelationMemberCreateOrConnectWithoutRelationInput[]
    createMany?: RelationMemberCreateManyRelationInputEnvelope
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
  }

  export type LoveCounterUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<LoveCounterCreateWithoutRelationInput, LoveCounterUncheckedCreateWithoutRelationInput> | LoveCounterCreateWithoutRelationInput[] | LoveCounterUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutRelationInput | LoveCounterCreateOrConnectWithoutRelationInput[]
    createMany?: LoveCounterCreateManyRelationInputEnvelope
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
  }

  export type RelationMemberUpdateManyWithoutRelationNestedInput = {
    create?: XOR<RelationMemberCreateWithoutRelationInput, RelationMemberUncheckedCreateWithoutRelationInput> | RelationMemberCreateWithoutRelationInput[] | RelationMemberUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutRelationInput | RelationMemberCreateOrConnectWithoutRelationInput[]
    upsert?: RelationMemberUpsertWithWhereUniqueWithoutRelationInput | RelationMemberUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: RelationMemberCreateManyRelationInputEnvelope
    set?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    disconnect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    delete?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    update?: RelationMemberUpdateWithWhereUniqueWithoutRelationInput | RelationMemberUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: RelationMemberUpdateManyWithWhereWithoutRelationInput | RelationMemberUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: RelationMemberScalarWhereInput | RelationMemberScalarWhereInput[]
  }

  export type LoveCounterUpdateManyWithoutRelationNestedInput = {
    create?: XOR<LoveCounterCreateWithoutRelationInput, LoveCounterUncheckedCreateWithoutRelationInput> | LoveCounterCreateWithoutRelationInput[] | LoveCounterUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutRelationInput | LoveCounterCreateOrConnectWithoutRelationInput[]
    upsert?: LoveCounterUpsertWithWhereUniqueWithoutRelationInput | LoveCounterUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: LoveCounterCreateManyRelationInputEnvelope
    set?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    disconnect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    delete?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    update?: LoveCounterUpdateWithWhereUniqueWithoutRelationInput | LoveCounterUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: LoveCounterUpdateManyWithWhereWithoutRelationInput | LoveCounterUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: LoveCounterScalarWhereInput | LoveCounterScalarWhereInput[]
  }

  export type RelationInvitationUpdateOneWithoutRelationNestedInput = {
    create?: XOR<RelationInvitationCreateWithoutRelationInput, RelationInvitationUncheckedCreateWithoutRelationInput>
    connectOrCreate?: RelationInvitationCreateOrConnectWithoutRelationInput
    upsert?: RelationInvitationUpsertWithoutRelationInput
    disconnect?: RelationInvitationWhereInput | boolean
    delete?: RelationInvitationWhereInput | boolean
    connect?: RelationInvitationWhereUniqueInput
    update?: XOR<XOR<RelationInvitationUpdateToOneWithWhereWithoutRelationInput, RelationInvitationUpdateWithoutRelationInput>, RelationInvitationUncheckedUpdateWithoutRelationInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RelationMemberUncheckedUpdateManyWithoutRelationNestedInput = {
    create?: XOR<RelationMemberCreateWithoutRelationInput, RelationMemberUncheckedCreateWithoutRelationInput> | RelationMemberCreateWithoutRelationInput[] | RelationMemberUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationMemberCreateOrConnectWithoutRelationInput | RelationMemberCreateOrConnectWithoutRelationInput[]
    upsert?: RelationMemberUpsertWithWhereUniqueWithoutRelationInput | RelationMemberUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: RelationMemberCreateManyRelationInputEnvelope
    set?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    disconnect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    delete?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    connect?: RelationMemberWhereUniqueInput | RelationMemberWhereUniqueInput[]
    update?: RelationMemberUpdateWithWhereUniqueWithoutRelationInput | RelationMemberUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: RelationMemberUpdateManyWithWhereWithoutRelationInput | RelationMemberUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: RelationMemberScalarWhereInput | RelationMemberScalarWhereInput[]
  }

  export type LoveCounterUncheckedUpdateManyWithoutRelationNestedInput = {
    create?: XOR<LoveCounterCreateWithoutRelationInput, LoveCounterUncheckedCreateWithoutRelationInput> | LoveCounterCreateWithoutRelationInput[] | LoveCounterUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: LoveCounterCreateOrConnectWithoutRelationInput | LoveCounterCreateOrConnectWithoutRelationInput[]
    upsert?: LoveCounterUpsertWithWhereUniqueWithoutRelationInput | LoveCounterUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: LoveCounterCreateManyRelationInputEnvelope
    set?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    disconnect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    delete?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    connect?: LoveCounterWhereUniqueInput | LoveCounterWhereUniqueInput[]
    update?: LoveCounterUpdateWithWhereUniqueWithoutRelationInput | LoveCounterUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: LoveCounterUpdateManyWithWhereWithoutRelationInput | LoveCounterUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: LoveCounterScalarWhereInput | LoveCounterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type RelationCreateNestedOneWithoutMembersInput = {
    create?: XOR<RelationCreateWithoutMembersInput, RelationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RelationCreateOrConnectWithoutMembersInput
    connect?: RelationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type RelationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<RelationCreateWithoutMembersInput, RelationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RelationCreateOrConnectWithoutMembersInput
    upsert?: RelationUpsertWithoutMembersInput
    connect?: RelationWhereUniqueInput
    update?: XOR<XOR<RelationUpdateToOneWithWhereWithoutMembersInput, RelationUpdateWithoutMembersInput>, RelationUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutSent_invitationsInput = {
    create?: XOR<UserCreateWithoutSent_invitationsInput, UserUncheckedCreateWithoutSent_invitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSent_invitationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceived_invitationsInput = {
    create?: XOR<UserCreateWithoutReceived_invitationsInput, UserUncheckedCreateWithoutReceived_invitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceived_invitationsInput
    connect?: UserWhereUniqueInput
  }

  export type RelationCreateNestedOneWithoutRelation_invitationInput = {
    create?: XOR<RelationCreateWithoutRelation_invitationInput, RelationUncheckedCreateWithoutRelation_invitationInput>
    connectOrCreate?: RelationCreateOrConnectWithoutRelation_invitationInput
    connect?: RelationWhereUniqueInput
  }

  export type RelationUncheckedCreateNestedOneWithoutRelation_invitationInput = {
    create?: XOR<RelationCreateWithoutRelation_invitationInput, RelationUncheckedCreateWithoutRelation_invitationInput>
    connectOrCreate?: RelationCreateOrConnectWithoutRelation_invitationInput
    connect?: RelationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSent_invitationsNestedInput = {
    create?: XOR<UserCreateWithoutSent_invitationsInput, UserUncheckedCreateWithoutSent_invitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSent_invitationsInput
    upsert?: UserUpsertWithoutSent_invitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSent_invitationsInput, UserUpdateWithoutSent_invitationsInput>, UserUncheckedUpdateWithoutSent_invitationsInput>
  }

  export type UserUpdateOneRequiredWithoutReceived_invitationsNestedInput = {
    create?: XOR<UserCreateWithoutReceived_invitationsInput, UserUncheckedCreateWithoutReceived_invitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceived_invitationsInput
    upsert?: UserUpsertWithoutReceived_invitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceived_invitationsInput, UserUpdateWithoutReceived_invitationsInput>, UserUncheckedUpdateWithoutReceived_invitationsInput>
  }

  export type RelationUpdateOneWithoutRelation_invitationNestedInput = {
    create?: XOR<RelationCreateWithoutRelation_invitationInput, RelationUncheckedCreateWithoutRelation_invitationInput>
    connectOrCreate?: RelationCreateOrConnectWithoutRelation_invitationInput
    upsert?: RelationUpsertWithoutRelation_invitationInput
    disconnect?: RelationWhereInput | boolean
    delete?: RelationWhereInput | boolean
    connect?: RelationWhereUniqueInput
    update?: XOR<XOR<RelationUpdateToOneWithWhereWithoutRelation_invitationInput, RelationUpdateWithoutRelation_invitationInput>, RelationUncheckedUpdateWithoutRelation_invitationInput>
  }

  export type RelationUncheckedUpdateOneWithoutRelation_invitationNestedInput = {
    create?: XOR<RelationCreateWithoutRelation_invitationInput, RelationUncheckedCreateWithoutRelation_invitationInput>
    connectOrCreate?: RelationCreateOrConnectWithoutRelation_invitationInput
    upsert?: RelationUpsertWithoutRelation_invitationInput
    disconnect?: RelationWhereInput | boolean
    delete?: RelationWhereInput | boolean
    connect?: RelationWhereUniqueInput
    update?: XOR<XOR<RelationUpdateToOneWithWhereWithoutRelation_invitationInput, RelationUpdateWithoutRelation_invitationInput>, RelationUncheckedUpdateWithoutRelation_invitationInput>
  }

  export type RelationCreateNestedOneWithoutLove_countersInput = {
    create?: XOR<RelationCreateWithoutLove_countersInput, RelationUncheckedCreateWithoutLove_countersInput>
    connectOrCreate?: RelationCreateOrConnectWithoutLove_countersInput
    connect?: RelationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLove_countersInput = {
    create?: XOR<UserCreateWithoutLove_countersInput, UserUncheckedCreateWithoutLove_countersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLove_countersInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RelationUpdateOneRequiredWithoutLove_countersNestedInput = {
    create?: XOR<RelationCreateWithoutLove_countersInput, RelationUncheckedCreateWithoutLove_countersInput>
    connectOrCreate?: RelationCreateOrConnectWithoutLove_countersInput
    upsert?: RelationUpsertWithoutLove_countersInput
    connect?: RelationWhereUniqueInput
    update?: XOR<XOR<RelationUpdateToOneWithWhereWithoutLove_countersInput, RelationUpdateWithoutLove_countersInput>, RelationUncheckedUpdateWithoutLove_countersInput>
  }

  export type UserUpdateOneRequiredWithoutLove_countersNestedInput = {
    create?: XOR<UserCreateWithoutLove_countersInput, UserUncheckedCreateWithoutLove_countersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLove_countersInput
    upsert?: UserUpsertWithoutLove_countersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLove_countersInput, UserUpdateWithoutLove_countersInput>, UserUncheckedUpdateWithoutLove_countersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RelationMemberCreateWithoutUserInput = {
    relation: RelationCreateNestedOneWithoutMembersInput
  }

  export type RelationMemberUncheckedCreateWithoutUserInput = {
    relation_id: string
  }

  export type RelationMemberCreateOrConnectWithoutUserInput = {
    where: RelationMemberWhereUniqueInput
    create: XOR<RelationMemberCreateWithoutUserInput, RelationMemberUncheckedCreateWithoutUserInput>
  }

  export type RelationMemberCreateManyUserInputEnvelope = {
    data: RelationMemberCreateManyUserInput | RelationMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoveCounterCreateWithoutUserInput = {
    count?: number
    last_loveu_sent: Date | string
    relation: RelationCreateNestedOneWithoutLove_countersInput
  }

  export type LoveCounterUncheckedCreateWithoutUserInput = {
    relation_id: string
    count?: number
    last_loveu_sent: Date | string
  }

  export type LoveCounterCreateOrConnectWithoutUserInput = {
    where: LoveCounterWhereUniqueInput
    create: XOR<LoveCounterCreateWithoutUserInput, LoveCounterUncheckedCreateWithoutUserInput>
  }

  export type LoveCounterCreateManyUserInputEnvelope = {
    data: LoveCounterCreateManyUserInput | LoveCounterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationInvitationCreateWithoutInviterInput = {
    id?: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    invited_user: UserCreateNestedOneWithoutReceived_invitationsInput
    relation?: RelationCreateNestedOneWithoutRelation_invitationInput
  }

  export type RelationInvitationUncheckedCreateWithoutInviterInput = {
    id?: string
    invited_user_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    relation?: RelationUncheckedCreateNestedOneWithoutRelation_invitationInput
  }

  export type RelationInvitationCreateOrConnectWithoutInviterInput = {
    where: RelationInvitationWhereUniqueInput
    create: XOR<RelationInvitationCreateWithoutInviterInput, RelationInvitationUncheckedCreateWithoutInviterInput>
  }

  export type RelationInvitationCreateManyInviterInputEnvelope = {
    data: RelationInvitationCreateManyInviterInput | RelationInvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type RelationInvitationCreateWithoutInvited_userInput = {
    id?: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    inviter: UserCreateNestedOneWithoutSent_invitationsInput
    relation?: RelationCreateNestedOneWithoutRelation_invitationInput
  }

  export type RelationInvitationUncheckedCreateWithoutInvited_userInput = {
    id?: string
    inviter_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    relation?: RelationUncheckedCreateNestedOneWithoutRelation_invitationInput
  }

  export type RelationInvitationCreateOrConnectWithoutInvited_userInput = {
    where: RelationInvitationWhereUniqueInput
    create: XOR<RelationInvitationCreateWithoutInvited_userInput, RelationInvitationUncheckedCreateWithoutInvited_userInput>
  }

  export type RelationInvitationCreateManyInvited_userInputEnvelope = {
    data: RelationInvitationCreateManyInvited_userInput | RelationInvitationCreateManyInvited_userInput[]
    skipDuplicates?: boolean
  }

  export type RelationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: RelationMemberWhereUniqueInput
    update: XOR<RelationMemberUpdateWithoutUserInput, RelationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<RelationMemberCreateWithoutUserInput, RelationMemberUncheckedCreateWithoutUserInput>
  }

  export type RelationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: RelationMemberWhereUniqueInput
    data: XOR<RelationMemberUpdateWithoutUserInput, RelationMemberUncheckedUpdateWithoutUserInput>
  }

  export type RelationMemberUpdateManyWithWhereWithoutUserInput = {
    where: RelationMemberScalarWhereInput
    data: XOR<RelationMemberUpdateManyMutationInput, RelationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type RelationMemberScalarWhereInput = {
    AND?: RelationMemberScalarWhereInput | RelationMemberScalarWhereInput[]
    OR?: RelationMemberScalarWhereInput[]
    NOT?: RelationMemberScalarWhereInput | RelationMemberScalarWhereInput[]
    relation_id?: StringFilter<"RelationMember"> | string
    user_id?: StringFilter<"RelationMember"> | string
  }

  export type LoveCounterUpsertWithWhereUniqueWithoutUserInput = {
    where: LoveCounterWhereUniqueInput
    update: XOR<LoveCounterUpdateWithoutUserInput, LoveCounterUncheckedUpdateWithoutUserInput>
    create: XOR<LoveCounterCreateWithoutUserInput, LoveCounterUncheckedCreateWithoutUserInput>
  }

  export type LoveCounterUpdateWithWhereUniqueWithoutUserInput = {
    where: LoveCounterWhereUniqueInput
    data: XOR<LoveCounterUpdateWithoutUserInput, LoveCounterUncheckedUpdateWithoutUserInput>
  }

  export type LoveCounterUpdateManyWithWhereWithoutUserInput = {
    where: LoveCounterScalarWhereInput
    data: XOR<LoveCounterUpdateManyMutationInput, LoveCounterUncheckedUpdateManyWithoutUserInput>
  }

  export type LoveCounterScalarWhereInput = {
    AND?: LoveCounterScalarWhereInput | LoveCounterScalarWhereInput[]
    OR?: LoveCounterScalarWhereInput[]
    NOT?: LoveCounterScalarWhereInput | LoveCounterScalarWhereInput[]
    relation_id?: StringFilter<"LoveCounter"> | string
    from_user_id?: StringFilter<"LoveCounter"> | string
    count?: IntFilter<"LoveCounter"> | number
    last_loveu_sent?: DateTimeFilter<"LoveCounter"> | Date | string
  }

  export type RelationInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: RelationInvitationWhereUniqueInput
    update: XOR<RelationInvitationUpdateWithoutInviterInput, RelationInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<RelationInvitationCreateWithoutInviterInput, RelationInvitationUncheckedCreateWithoutInviterInput>
  }

  export type RelationInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: RelationInvitationWhereUniqueInput
    data: XOR<RelationInvitationUpdateWithoutInviterInput, RelationInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type RelationInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: RelationInvitationScalarWhereInput
    data: XOR<RelationInvitationUpdateManyMutationInput, RelationInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type RelationInvitationScalarWhereInput = {
    AND?: RelationInvitationScalarWhereInput | RelationInvitationScalarWhereInput[]
    OR?: RelationInvitationScalarWhereInput[]
    NOT?: RelationInvitationScalarWhereInput | RelationInvitationScalarWhereInput[]
    id?: StringFilter<"RelationInvitation"> | string
    inviter_id?: StringFilter<"RelationInvitation"> | string
    invited_user_id?: StringFilter<"RelationInvitation"> | string
    status?: StringFilter<"RelationInvitation"> | string
    created_at?: DateTimeFilter<"RelationInvitation"> | Date | string
    updated_at?: DateTimeFilter<"RelationInvitation"> | Date | string
  }

  export type RelationInvitationUpsertWithWhereUniqueWithoutInvited_userInput = {
    where: RelationInvitationWhereUniqueInput
    update: XOR<RelationInvitationUpdateWithoutInvited_userInput, RelationInvitationUncheckedUpdateWithoutInvited_userInput>
    create: XOR<RelationInvitationCreateWithoutInvited_userInput, RelationInvitationUncheckedCreateWithoutInvited_userInput>
  }

  export type RelationInvitationUpdateWithWhereUniqueWithoutInvited_userInput = {
    where: RelationInvitationWhereUniqueInput
    data: XOR<RelationInvitationUpdateWithoutInvited_userInput, RelationInvitationUncheckedUpdateWithoutInvited_userInput>
  }

  export type RelationInvitationUpdateManyWithWhereWithoutInvited_userInput = {
    where: RelationInvitationScalarWhereInput
    data: XOR<RelationInvitationUpdateManyMutationInput, RelationInvitationUncheckedUpdateManyWithoutInvited_userInput>
  }

  export type RelationMemberCreateWithoutRelationInput = {
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type RelationMemberUncheckedCreateWithoutRelationInput = {
    user_id: string
  }

  export type RelationMemberCreateOrConnectWithoutRelationInput = {
    where: RelationMemberWhereUniqueInput
    create: XOR<RelationMemberCreateWithoutRelationInput, RelationMemberUncheckedCreateWithoutRelationInput>
  }

  export type RelationMemberCreateManyRelationInputEnvelope = {
    data: RelationMemberCreateManyRelationInput | RelationMemberCreateManyRelationInput[]
    skipDuplicates?: boolean
  }

  export type LoveCounterCreateWithoutRelationInput = {
    count?: number
    last_loveu_sent: Date | string
    user: UserCreateNestedOneWithoutLove_countersInput
  }

  export type LoveCounterUncheckedCreateWithoutRelationInput = {
    from_user_id: string
    count?: number
    last_loveu_sent: Date | string
  }

  export type LoveCounterCreateOrConnectWithoutRelationInput = {
    where: LoveCounterWhereUniqueInput
    create: XOR<LoveCounterCreateWithoutRelationInput, LoveCounterUncheckedCreateWithoutRelationInput>
  }

  export type LoveCounterCreateManyRelationInputEnvelope = {
    data: LoveCounterCreateManyRelationInput | LoveCounterCreateManyRelationInput[]
    skipDuplicates?: boolean
  }

  export type RelationInvitationCreateWithoutRelationInput = {
    id?: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    inviter: UserCreateNestedOneWithoutSent_invitationsInput
    invited_user: UserCreateNestedOneWithoutReceived_invitationsInput
  }

  export type RelationInvitationUncheckedCreateWithoutRelationInput = {
    id?: string
    inviter_id: string
    invited_user_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RelationInvitationCreateOrConnectWithoutRelationInput = {
    where: RelationInvitationWhereUniqueInput
    create: XOR<RelationInvitationCreateWithoutRelationInput, RelationInvitationUncheckedCreateWithoutRelationInput>
  }

  export type RelationMemberUpsertWithWhereUniqueWithoutRelationInput = {
    where: RelationMemberWhereUniqueInput
    update: XOR<RelationMemberUpdateWithoutRelationInput, RelationMemberUncheckedUpdateWithoutRelationInput>
    create: XOR<RelationMemberCreateWithoutRelationInput, RelationMemberUncheckedCreateWithoutRelationInput>
  }

  export type RelationMemberUpdateWithWhereUniqueWithoutRelationInput = {
    where: RelationMemberWhereUniqueInput
    data: XOR<RelationMemberUpdateWithoutRelationInput, RelationMemberUncheckedUpdateWithoutRelationInput>
  }

  export type RelationMemberUpdateManyWithWhereWithoutRelationInput = {
    where: RelationMemberScalarWhereInput
    data: XOR<RelationMemberUpdateManyMutationInput, RelationMemberUncheckedUpdateManyWithoutRelationInput>
  }

  export type LoveCounterUpsertWithWhereUniqueWithoutRelationInput = {
    where: LoveCounterWhereUniqueInput
    update: XOR<LoveCounterUpdateWithoutRelationInput, LoveCounterUncheckedUpdateWithoutRelationInput>
    create: XOR<LoveCounterCreateWithoutRelationInput, LoveCounterUncheckedCreateWithoutRelationInput>
  }

  export type LoveCounterUpdateWithWhereUniqueWithoutRelationInput = {
    where: LoveCounterWhereUniqueInput
    data: XOR<LoveCounterUpdateWithoutRelationInput, LoveCounterUncheckedUpdateWithoutRelationInput>
  }

  export type LoveCounterUpdateManyWithWhereWithoutRelationInput = {
    where: LoveCounterScalarWhereInput
    data: XOR<LoveCounterUpdateManyMutationInput, LoveCounterUncheckedUpdateManyWithoutRelationInput>
  }

  export type RelationInvitationUpsertWithoutRelationInput = {
    update: XOR<RelationInvitationUpdateWithoutRelationInput, RelationInvitationUncheckedUpdateWithoutRelationInput>
    create: XOR<RelationInvitationCreateWithoutRelationInput, RelationInvitationUncheckedCreateWithoutRelationInput>
    where?: RelationInvitationWhereInput
  }

  export type RelationInvitationUpdateToOneWithWhereWithoutRelationInput = {
    where?: RelationInvitationWhereInput
    data: XOR<RelationInvitationUpdateWithoutRelationInput, RelationInvitationUncheckedUpdateWithoutRelationInput>
  }

  export type RelationInvitationUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutSent_invitationsNestedInput
    invited_user?: UserUpdateOneRequiredWithoutReceived_invitationsNestedInput
  }

  export type RelationInvitationUncheckedUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviter_id?: StringFieldUpdateOperationsInput | string
    invited_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    love_counters?: LoveCounterCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationCreateNestedManyWithoutInviterInput
    received_invitations?: RelationInvitationCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInviterInput
    received_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type RelationCreateWithoutMembersInput = {
    id?: string
    created_at?: Date | string
    love_counters?: LoveCounterCreateNestedManyWithoutRelationInput
    relation_invitation?: RelationInvitationCreateNestedOneWithoutRelationInput
  }

  export type RelationUncheckedCreateWithoutMembersInput = {
    id?: string
    created_at?: Date | string
    relation_invitation_id?: string | null
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationCreateOrConnectWithoutMembersInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutMembersInput, RelationUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    love_counters?: LoveCounterUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUpdateManyWithoutInviterNestedInput
    received_invitations?: RelationInvitationUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    love_counters?: LoveCounterUncheckedUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUncheckedUpdateManyWithoutInviterNestedInput
    received_invitations?: RelationInvitationUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type RelationUpsertWithoutMembersInput = {
    update: XOR<RelationUpdateWithoutMembersInput, RelationUncheckedUpdateWithoutMembersInput>
    create: XOR<RelationCreateWithoutMembersInput, RelationUncheckedCreateWithoutMembersInput>
    where?: RelationWhereInput
  }

  export type RelationUpdateToOneWithWhereWithoutMembersInput = {
    where?: RelationWhereInput
    data: XOR<RelationUpdateWithoutMembersInput, RelationUncheckedUpdateWithoutMembersInput>
  }

  export type RelationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    love_counters?: LoveCounterUpdateManyWithoutRelationNestedInput
    relation_invitation?: RelationInvitationUpdateOneWithoutRelationNestedInput
  }

  export type RelationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_invitation_id?: NullableStringFieldUpdateOperationsInput | string | null
    love_counters?: LoveCounterUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type UserCreateWithoutSent_invitationsInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberCreateNestedManyWithoutUserInput
    love_counters?: LoveCounterCreateNestedManyWithoutUserInput
    received_invitations?: RelationInvitationCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutSent_invitationsInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberUncheckedCreateNestedManyWithoutUserInput
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutUserInput
    received_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutSent_invitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSent_invitationsInput, UserUncheckedCreateWithoutSent_invitationsInput>
  }

  export type UserCreateWithoutReceived_invitationsInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberCreateNestedManyWithoutUserInput
    love_counters?: LoveCounterCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutReceived_invitationsInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberUncheckedCreateNestedManyWithoutUserInput
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutReceived_invitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceived_invitationsInput, UserUncheckedCreateWithoutReceived_invitationsInput>
  }

  export type RelationCreateWithoutRelation_invitationInput = {
    id?: string
    created_at?: Date | string
    members?: RelationMemberCreateNestedManyWithoutRelationInput
    love_counters?: LoveCounterCreateNestedManyWithoutRelationInput
  }

  export type RelationUncheckedCreateWithoutRelation_invitationInput = {
    id?: string
    created_at?: Date | string
    members?: RelationMemberUncheckedCreateNestedManyWithoutRelationInput
    love_counters?: LoveCounterUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationCreateOrConnectWithoutRelation_invitationInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutRelation_invitationInput, RelationUncheckedCreateWithoutRelation_invitationInput>
  }

  export type UserUpsertWithoutSent_invitationsInput = {
    update: XOR<UserUpdateWithoutSent_invitationsInput, UserUncheckedUpdateWithoutSent_invitationsInput>
    create: XOR<UserCreateWithoutSent_invitationsInput, UserUncheckedCreateWithoutSent_invitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSent_invitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSent_invitationsInput, UserUncheckedUpdateWithoutSent_invitationsInput>
  }

  export type UserUpdateWithoutSent_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUpdateManyWithoutUserNestedInput
    love_counters?: LoveCounterUpdateManyWithoutUserNestedInput
    received_invitations?: RelationInvitationUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutSent_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUncheckedUpdateManyWithoutUserNestedInput
    love_counters?: LoveCounterUncheckedUpdateManyWithoutUserNestedInput
    received_invitations?: RelationInvitationUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUpsertWithoutReceived_invitationsInput = {
    update: XOR<UserUpdateWithoutReceived_invitationsInput, UserUncheckedUpdateWithoutReceived_invitationsInput>
    create: XOR<UserCreateWithoutReceived_invitationsInput, UserUncheckedCreateWithoutReceived_invitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceived_invitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceived_invitationsInput, UserUncheckedUpdateWithoutReceived_invitationsInput>
  }

  export type UserUpdateWithoutReceived_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUpdateManyWithoutUserNestedInput
    love_counters?: LoveCounterUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutReceived_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUncheckedUpdateManyWithoutUserNestedInput
    love_counters?: LoveCounterUncheckedUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type RelationUpsertWithoutRelation_invitationInput = {
    update: XOR<RelationUpdateWithoutRelation_invitationInput, RelationUncheckedUpdateWithoutRelation_invitationInput>
    create: XOR<RelationCreateWithoutRelation_invitationInput, RelationUncheckedCreateWithoutRelation_invitationInput>
    where?: RelationWhereInput
  }

  export type RelationUpdateToOneWithWhereWithoutRelation_invitationInput = {
    where?: RelationWhereInput
    data: XOR<RelationUpdateWithoutRelation_invitationInput, RelationUncheckedUpdateWithoutRelation_invitationInput>
  }

  export type RelationUpdateWithoutRelation_invitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RelationMemberUpdateManyWithoutRelationNestedInput
    love_counters?: LoveCounterUpdateManyWithoutRelationNestedInput
  }

  export type RelationUncheckedUpdateWithoutRelation_invitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RelationMemberUncheckedUpdateManyWithoutRelationNestedInput
    love_counters?: LoveCounterUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type RelationCreateWithoutLove_countersInput = {
    id?: string
    created_at?: Date | string
    members?: RelationMemberCreateNestedManyWithoutRelationInput
    relation_invitation?: RelationInvitationCreateNestedOneWithoutRelationInput
  }

  export type RelationUncheckedCreateWithoutLove_countersInput = {
    id?: string
    created_at?: Date | string
    relation_invitation_id?: string | null
    members?: RelationMemberUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationCreateOrConnectWithoutLove_countersInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutLove_countersInput, RelationUncheckedCreateWithoutLove_countersInput>
  }

  export type UserCreateWithoutLove_countersInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationCreateNestedManyWithoutInviterInput
    received_invitations?: RelationInvitationCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutLove_countersInput = {
    id?: string
    first_name: string
    last_name: string
    username: string
    email: string
    birthdate: Date | string
    password: string
    memberships?: RelationMemberUncheckedCreateNestedManyWithoutUserInput
    sent_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInviterInput
    received_invitations?: RelationInvitationUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutLove_countersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLove_countersInput, UserUncheckedCreateWithoutLove_countersInput>
  }

  export type RelationUpsertWithoutLove_countersInput = {
    update: XOR<RelationUpdateWithoutLove_countersInput, RelationUncheckedUpdateWithoutLove_countersInput>
    create: XOR<RelationCreateWithoutLove_countersInput, RelationUncheckedCreateWithoutLove_countersInput>
    where?: RelationWhereInput
  }

  export type RelationUpdateToOneWithWhereWithoutLove_countersInput = {
    where?: RelationWhereInput
    data: XOR<RelationUpdateWithoutLove_countersInput, RelationUncheckedUpdateWithoutLove_countersInput>
  }

  export type RelationUpdateWithoutLove_countersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RelationMemberUpdateManyWithoutRelationNestedInput
    relation_invitation?: RelationInvitationUpdateOneWithoutRelationNestedInput
  }

  export type RelationUncheckedUpdateWithoutLove_countersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_invitation_id?: NullableStringFieldUpdateOperationsInput | string | null
    members?: RelationMemberUncheckedUpdateManyWithoutRelationNestedInput
  }

  export type UserUpsertWithoutLove_countersInput = {
    update: XOR<UserUpdateWithoutLove_countersInput, UserUncheckedUpdateWithoutLove_countersInput>
    create: XOR<UserCreateWithoutLove_countersInput, UserUncheckedCreateWithoutLove_countersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLove_countersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLove_countersInput, UserUncheckedUpdateWithoutLove_countersInput>
  }

  export type UserUpdateWithoutLove_countersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUpdateManyWithoutInviterNestedInput
    received_invitations?: RelationInvitationUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutLove_countersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    memberships?: RelationMemberUncheckedUpdateManyWithoutUserNestedInput
    sent_invitations?: RelationInvitationUncheckedUpdateManyWithoutInviterNestedInput
    received_invitations?: RelationInvitationUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type RelationMemberCreateManyUserInput = {
    relation_id: string
  }

  export type LoveCounterCreateManyUserInput = {
    relation_id: string
    count?: number
    last_loveu_sent: Date | string
  }

  export type RelationInvitationCreateManyInviterInput = {
    id?: string
    invited_user_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RelationInvitationCreateManyInvited_userInput = {
    id?: string
    inviter_id: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RelationMemberUpdateWithoutUserInput = {
    relation?: RelationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type RelationMemberUncheckedUpdateWithoutUserInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelationMemberUncheckedUpdateManyWithoutUserInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
  }

  export type LoveCounterUpdateWithoutUserInput = {
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUpdateOneRequiredWithoutLove_countersNestedInput
  }

  export type LoveCounterUncheckedUpdateWithoutUserInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCounterUncheckedUpdateManyWithoutUserInput = {
    relation_id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationInvitationUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_user?: UserUpdateOneRequiredWithoutReceived_invitationsNestedInput
    relation?: RelationUpdateOneWithoutRelation_invitationNestedInput
  }

  export type RelationInvitationUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUncheckedUpdateOneWithoutRelation_invitationNestedInput
  }

  export type RelationInvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationInvitationUpdateWithoutInvited_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutSent_invitationsNestedInput
    relation?: RelationUpdateOneWithoutRelation_invitationNestedInput
  }

  export type RelationInvitationUncheckedUpdateWithoutInvited_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviter_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUncheckedUpdateOneWithoutRelation_invitationNestedInput
  }

  export type RelationInvitationUncheckedUpdateManyWithoutInvited_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviter_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationMemberCreateManyRelationInput = {
    user_id: string
  }

  export type LoveCounterCreateManyRelationInput = {
    from_user_id: string
    count?: number
    last_loveu_sent: Date | string
  }

  export type RelationMemberUpdateWithoutRelationInput = {
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type RelationMemberUncheckedUpdateWithoutRelationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelationMemberUncheckedUpdateManyWithoutRelationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type LoveCounterUpdateWithoutRelationInput = {
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLove_countersNestedInput
  }

  export type LoveCounterUncheckedUpdateWithoutRelationInput = {
    from_user_id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCounterUncheckedUpdateManyWithoutRelationInput = {
    from_user_id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    last_loveu_sent?: DateTimeFieldUpdateOperationsInput | Date | string
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