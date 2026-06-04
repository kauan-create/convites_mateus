
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
 * Model Familia
 * 
 */
export type Familia = $Result.DefaultSelection<Prisma.$FamiliaPayload>
/**
 * Model Convidado
 * 
 */
export type Convidado = $Result.DefaultSelection<Prisma.$ConvidadoPayload>
/**
 * Model Convite
 * 
 */
export type Convite = $Result.DefaultSelection<Prisma.$ConvitePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Familias
 * const familias = await prisma.familia.findMany()
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
   * // Fetch zero or more Familias
   * const familias = await prisma.familia.findMany()
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
   * `prisma.familia`: Exposes CRUD operations for the **Familia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familias
    * const familias = await prisma.familia.findMany()
    * ```
    */
  get familia(): Prisma.FamiliaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.convidado`: Exposes CRUD operations for the **Convidado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Convidados
    * const convidados = await prisma.convidado.findMany()
    * ```
    */
  get convidado(): Prisma.ConvidadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.convite`: Exposes CRUD operations for the **Convite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Convites
    * const convites = await prisma.convite.findMany()
    * ```
    */
  get convite(): Prisma.ConviteDelegate<ExtArgs, ClientOptions>;
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
    Familia: 'Familia',
    Convidado: 'Convidado',
    Convite: 'Convite'
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
      modelProps: "familia" | "convidado" | "convite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Familia: {
        payload: Prisma.$FamiliaPayload<ExtArgs>
        fields: Prisma.FamiliaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamiliaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamiliaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          findFirst: {
            args: Prisma.FamiliaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamiliaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          findMany: {
            args: Prisma.FamiliaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          create: {
            args: Prisma.FamiliaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          createMany: {
            args: Prisma.FamiliaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamiliaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          delete: {
            args: Prisma.FamiliaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          update: {
            args: Prisma.FamiliaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          deleteMany: {
            args: Prisma.FamiliaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamiliaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FamiliaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          upsert: {
            args: Prisma.FamiliaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          aggregate: {
            args: Prisma.FamiliaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilia>
          }
          groupBy: {
            args: Prisma.FamiliaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamiliaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamiliaCountArgs<ExtArgs>
            result: $Utils.Optional<FamiliaCountAggregateOutputType> | number
          }
        }
      }
      Convidado: {
        payload: Prisma.$ConvidadoPayload<ExtArgs>
        fields: Prisma.ConvidadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConvidadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConvidadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          findFirst: {
            args: Prisma.ConvidadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConvidadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          findMany: {
            args: Prisma.ConvidadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>[]
          }
          create: {
            args: Prisma.ConvidadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          createMany: {
            args: Prisma.ConvidadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConvidadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>[]
          }
          delete: {
            args: Prisma.ConvidadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          update: {
            args: Prisma.ConvidadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          deleteMany: {
            args: Prisma.ConvidadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConvidadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConvidadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>[]
          }
          upsert: {
            args: Prisma.ConvidadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvidadoPayload>
          }
          aggregate: {
            args: Prisma.ConvidadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvidado>
          }
          groupBy: {
            args: Prisma.ConvidadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConvidadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConvidadoCountArgs<ExtArgs>
            result: $Utils.Optional<ConvidadoCountAggregateOutputType> | number
          }
        }
      }
      Convite: {
        payload: Prisma.$ConvitePayload<ExtArgs>
        fields: Prisma.ConviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          findFirst: {
            args: Prisma.ConviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          findMany: {
            args: Prisma.ConviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>[]
          }
          create: {
            args: Prisma.ConviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          createMany: {
            args: Prisma.ConviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>[]
          }
          delete: {
            args: Prisma.ConviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          update: {
            args: Prisma.ConviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          deleteMany: {
            args: Prisma.ConviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>[]
          }
          upsert: {
            args: Prisma.ConviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvitePayload>
          }
          aggregate: {
            args: Prisma.ConviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvite>
          }
          groupBy: {
            args: Prisma.ConviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConviteCountArgs<ExtArgs>
            result: $Utils.Optional<ConviteCountAggregateOutputType> | number
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
    familia?: FamiliaOmit
    convidado?: ConvidadoOmit
    convite?: ConviteOmit
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
   * Count Type FamiliaCountOutputType
   */

  export type FamiliaCountOutputType = {
    convidados: number
  }

  export type FamiliaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convidados?: boolean | FamiliaCountOutputTypeCountConvidadosArgs
  }

  // Custom InputTypes
  /**
   * FamiliaCountOutputType without action
   */
  export type FamiliaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamiliaCountOutputType
     */
    select?: FamiliaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamiliaCountOutputType without action
   */
  export type FamiliaCountOutputTypeCountConvidadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvidadoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Familia
   */

  export type AggregateFamilia = {
    _count: FamiliaCountAggregateOutputType | null
    _min: FamiliaMinAggregateOutputType | null
    _max: FamiliaMaxAggregateOutputType | null
  }

  export type FamiliaMinAggregateOutputType = {
    id: string | null
    nome_familia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamiliaMaxAggregateOutputType = {
    id: string | null
    nome_familia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamiliaCountAggregateOutputType = {
    id: number
    nome_familia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamiliaMinAggregateInputType = {
    id?: true
    nome_familia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamiliaMaxAggregateInputType = {
    id?: true
    nome_familia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamiliaCountAggregateInputType = {
    id?: true
    nome_familia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamiliaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familia to aggregate.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Familias
    **/
    _count?: true | FamiliaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamiliaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamiliaMaxAggregateInputType
  }

  export type GetFamiliaAggregateType<T extends FamiliaAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilia[P]>
      : GetScalarType<T[P], AggregateFamilia[P]>
  }




  export type FamiliaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamiliaWhereInput
    orderBy?: FamiliaOrderByWithAggregationInput | FamiliaOrderByWithAggregationInput[]
    by: FamiliaScalarFieldEnum[] | FamiliaScalarFieldEnum
    having?: FamiliaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamiliaCountAggregateInputType | true
    _min?: FamiliaMinAggregateInputType
    _max?: FamiliaMaxAggregateInputType
  }

  export type FamiliaGroupByOutputType = {
    id: string
    nome_familia: string
    createdAt: Date
    updatedAt: Date
    _count: FamiliaCountAggregateOutputType | null
    _min: FamiliaMinAggregateOutputType | null
    _max: FamiliaMaxAggregateOutputType | null
  }

  type GetFamiliaGroupByPayload<T extends FamiliaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamiliaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamiliaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamiliaGroupByOutputType[P]>
            : GetScalarType<T[P], FamiliaGroupByOutputType[P]>
        }
      >
    >


  export type FamiliaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_familia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convidados?: boolean | Familia$convidadosArgs<ExtArgs>
    _count?: boolean | FamiliaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_familia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_familia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectScalar = {
    id?: boolean
    nome_familia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamiliaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_familia" | "createdAt" | "updatedAt", ExtArgs["result"]["familia"]>
  export type FamiliaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convidados?: boolean | Familia$convidadosArgs<ExtArgs>
    _count?: boolean | FamiliaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamiliaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FamiliaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamiliaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Familia"
    objects: {
      convidados: Prisma.$ConvidadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome_familia: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["familia"]>
    composites: {}
  }

  type FamiliaGetPayload<S extends boolean | null | undefined | FamiliaDefaultArgs> = $Result.GetResult<Prisma.$FamiliaPayload, S>

  type FamiliaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamiliaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamiliaCountAggregateInputType | true
    }

  export interface FamiliaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Familia'], meta: { name: 'Familia' } }
    /**
     * Find zero or one Familia that matches the filter.
     * @param {FamiliaFindUniqueArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamiliaFindUniqueArgs>(args: SelectSubset<T, FamiliaFindUniqueArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Familia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamiliaFindUniqueOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamiliaFindUniqueOrThrowArgs>(args: SelectSubset<T, FamiliaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindFirstArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamiliaFindFirstArgs>(args?: SelectSubset<T, FamiliaFindFirstArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindFirstOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamiliaFindFirstOrThrowArgs>(args?: SelectSubset<T, FamiliaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Familias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familias
     * const familias = await prisma.familia.findMany()
     * 
     * // Get first 10 Familias
     * const familias = await prisma.familia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familiaWithIdOnly = await prisma.familia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamiliaFindManyArgs>(args?: SelectSubset<T, FamiliaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Familia.
     * @param {FamiliaCreateArgs} args - Arguments to create a Familia.
     * @example
     * // Create one Familia
     * const Familia = await prisma.familia.create({
     *   data: {
     *     // ... data to create a Familia
     *   }
     * })
     * 
     */
    create<T extends FamiliaCreateArgs>(args: SelectSubset<T, FamiliaCreateArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Familias.
     * @param {FamiliaCreateManyArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamiliaCreateManyArgs>(args?: SelectSubset<T, FamiliaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Familias and returns the data saved in the database.
     * @param {FamiliaCreateManyAndReturnArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Familias and only return the `id`
     * const familiaWithIdOnly = await prisma.familia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamiliaCreateManyAndReturnArgs>(args?: SelectSubset<T, FamiliaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Familia.
     * @param {FamiliaDeleteArgs} args - Arguments to delete one Familia.
     * @example
     * // Delete one Familia
     * const Familia = await prisma.familia.delete({
     *   where: {
     *     // ... filter to delete one Familia
     *   }
     * })
     * 
     */
    delete<T extends FamiliaDeleteArgs>(args: SelectSubset<T, FamiliaDeleteArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Familia.
     * @param {FamiliaUpdateArgs} args - Arguments to update one Familia.
     * @example
     * // Update one Familia
     * const familia = await prisma.familia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamiliaUpdateArgs>(args: SelectSubset<T, FamiliaUpdateArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Familias.
     * @param {FamiliaDeleteManyArgs} args - Arguments to filter Familias to delete.
     * @example
     * // Delete a few Familias
     * const { count } = await prisma.familia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamiliaDeleteManyArgs>(args?: SelectSubset<T, FamiliaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familias
     * const familia = await prisma.familia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamiliaUpdateManyArgs>(args: SelectSubset<T, FamiliaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familias and returns the data updated in the database.
     * @param {FamiliaUpdateManyAndReturnArgs} args - Arguments to update many Familias.
     * @example
     * // Update many Familias
     * const familia = await prisma.familia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Familias and only return the `id`
     * const familiaWithIdOnly = await prisma.familia.updateManyAndReturn({
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
    updateManyAndReturn<T extends FamiliaUpdateManyAndReturnArgs>(args: SelectSubset<T, FamiliaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Familia.
     * @param {FamiliaUpsertArgs} args - Arguments to update or create a Familia.
     * @example
     * // Update or create a Familia
     * const familia = await prisma.familia.upsert({
     *   create: {
     *     // ... data to create a Familia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Familia we want to update
     *   }
     * })
     */
    upsert<T extends FamiliaUpsertArgs>(args: SelectSubset<T, FamiliaUpsertArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaCountArgs} args - Arguments to filter Familias to count.
     * @example
     * // Count the number of Familias
     * const count = await prisma.familia.count({
     *   where: {
     *     // ... the filter for the Familias we want to count
     *   }
     * })
    **/
    count<T extends FamiliaCountArgs>(
      args?: Subset<T, FamiliaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamiliaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamiliaAggregateArgs>(args: Subset<T, FamiliaAggregateArgs>): Prisma.PrismaPromise<GetFamiliaAggregateType<T>>

    /**
     * Group by Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaGroupByArgs} args - Group by arguments.
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
      T extends FamiliaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamiliaGroupByArgs['orderBy'] }
        : { orderBy?: FamiliaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamiliaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamiliaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Familia model
   */
  readonly fields: FamiliaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Familia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamiliaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    convidados<T extends Familia$convidadosArgs<ExtArgs> = {}>(args?: Subset<T, Familia$convidadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Familia model
   */
  interface FamiliaFieldRefs {
    readonly id: FieldRef<"Familia", 'String'>
    readonly nome_familia: FieldRef<"Familia", 'String'>
    readonly createdAt: FieldRef<"Familia", 'DateTime'>
    readonly updatedAt: FieldRef<"Familia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Familia findUnique
   */
  export type FamiliaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia findUniqueOrThrow
   */
  export type FamiliaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia findFirst
   */
  export type FamiliaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familias.
     */
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia findFirstOrThrow
   */
  export type FamiliaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familias.
     */
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia findMany
   */
  export type FamiliaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familias to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia create
   */
  export type FamiliaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The data needed to create a Familia.
     */
    data: XOR<FamiliaCreateInput, FamiliaUncheckedCreateInput>
  }

  /**
   * Familia createMany
   */
  export type FamiliaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Familias.
     */
    data: FamiliaCreateManyInput | FamiliaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Familia createManyAndReturn
   */
  export type FamiliaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * The data used to create many Familias.
     */
    data: FamiliaCreateManyInput | FamiliaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Familia update
   */
  export type FamiliaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The data needed to update a Familia.
     */
    data: XOR<FamiliaUpdateInput, FamiliaUncheckedUpdateInput>
    /**
     * Choose, which Familia to update.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia updateMany
   */
  export type FamiliaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Familias.
     */
    data: XOR<FamiliaUpdateManyMutationInput, FamiliaUncheckedUpdateManyInput>
    /**
     * Filter which Familias to update
     */
    where?: FamiliaWhereInput
    /**
     * Limit how many Familias to update.
     */
    limit?: number
  }

  /**
   * Familia updateManyAndReturn
   */
  export type FamiliaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * The data used to update Familias.
     */
    data: XOR<FamiliaUpdateManyMutationInput, FamiliaUncheckedUpdateManyInput>
    /**
     * Filter which Familias to update
     */
    where?: FamiliaWhereInput
    /**
     * Limit how many Familias to update.
     */
    limit?: number
  }

  /**
   * Familia upsert
   */
  export type FamiliaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The filter to search for the Familia to update in case it exists.
     */
    where: FamiliaWhereUniqueInput
    /**
     * In case the Familia found by the `where` argument doesn't exist, create a new Familia with this data.
     */
    create: XOR<FamiliaCreateInput, FamiliaUncheckedCreateInput>
    /**
     * In case the Familia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamiliaUpdateInput, FamiliaUncheckedUpdateInput>
  }

  /**
   * Familia delete
   */
  export type FamiliaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter which Familia to delete.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia deleteMany
   */
  export type FamiliaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familias to delete
     */
    where?: FamiliaWhereInput
    /**
     * Limit how many Familias to delete.
     */
    limit?: number
  }

  /**
   * Familia.convidados
   */
  export type Familia$convidadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    where?: ConvidadoWhereInput
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    cursor?: ConvidadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Familia without action
   */
  export type FamiliaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
  }


  /**
   * Model Convidado
   */

  export type AggregateConvidado = {
    _count: ConvidadoCountAggregateOutputType | null
    _avg: ConvidadoAvgAggregateOutputType | null
    _sum: ConvidadoSumAggregateOutputType | null
    _min: ConvidadoMinAggregateOutputType | null
    _max: ConvidadoMaxAggregateOutputType | null
  }

  export type ConvidadoAvgAggregateOutputType = {
    acompanhantes: number | null
  }

  export type ConvidadoSumAggregateOutputType = {
    acompanhantes: number | null
  }

  export type ConvidadoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    telefone: string | null
    acompanhantes: number | null
    status_confirmacao: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    familiaId: string | null
  }

  export type ConvidadoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    telefone: string | null
    acompanhantes: number | null
    status_confirmacao: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    familiaId: string | null
  }

  export type ConvidadoCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    acompanhantes: number
    status_confirmacao: number
    observacoes: number
    createdAt: number
    updatedAt: number
    familiaId: number
    _all: number
  }


  export type ConvidadoAvgAggregateInputType = {
    acompanhantes?: true
  }

  export type ConvidadoSumAggregateInputType = {
    acompanhantes?: true
  }

  export type ConvidadoMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    acompanhantes?: true
    status_confirmacao?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    familiaId?: true
  }

  export type ConvidadoMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    acompanhantes?: true
    status_confirmacao?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    familiaId?: true
  }

  export type ConvidadoCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    acompanhantes?: true
    status_confirmacao?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    familiaId?: true
    _all?: true
  }

  export type ConvidadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convidado to aggregate.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Convidados
    **/
    _count?: true | ConvidadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConvidadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConvidadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConvidadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConvidadoMaxAggregateInputType
  }

  export type GetConvidadoAggregateType<T extends ConvidadoAggregateArgs> = {
        [P in keyof T & keyof AggregateConvidado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvidado[P]>
      : GetScalarType<T[P], AggregateConvidado[P]>
  }




  export type ConvidadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvidadoWhereInput
    orderBy?: ConvidadoOrderByWithAggregationInput | ConvidadoOrderByWithAggregationInput[]
    by: ConvidadoScalarFieldEnum[] | ConvidadoScalarFieldEnum
    having?: ConvidadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConvidadoCountAggregateInputType | true
    _avg?: ConvidadoAvgAggregateInputType
    _sum?: ConvidadoSumAggregateInputType
    _min?: ConvidadoMinAggregateInputType
    _max?: ConvidadoMaxAggregateInputType
  }

  export type ConvidadoGroupByOutputType = {
    id: string
    nome: string
    telefone: string | null
    acompanhantes: number
    status_confirmacao: string
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    familiaId: string | null
    _count: ConvidadoCountAggregateOutputType | null
    _avg: ConvidadoAvgAggregateOutputType | null
    _sum: ConvidadoSumAggregateOutputType | null
    _min: ConvidadoMinAggregateOutputType | null
    _max: ConvidadoMaxAggregateOutputType | null
  }

  type GetConvidadoGroupByPayload<T extends ConvidadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConvidadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConvidadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConvidadoGroupByOutputType[P]>
            : GetScalarType<T[P], ConvidadoGroupByOutputType[P]>
        }
      >
    >


  export type ConvidadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    acompanhantes?: boolean
    status_confirmacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familiaId?: boolean
    familia?: boolean | Convidado$familiaArgs<ExtArgs>
    convite?: boolean | Convidado$conviteArgs<ExtArgs>
  }, ExtArgs["result"]["convidado"]>

  export type ConvidadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    acompanhantes?: boolean
    status_confirmacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familiaId?: boolean
    familia?: boolean | Convidado$familiaArgs<ExtArgs>
  }, ExtArgs["result"]["convidado"]>

  export type ConvidadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    acompanhantes?: boolean
    status_confirmacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familiaId?: boolean
    familia?: boolean | Convidado$familiaArgs<ExtArgs>
  }, ExtArgs["result"]["convidado"]>

  export type ConvidadoSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    acompanhantes?: boolean
    status_confirmacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familiaId?: boolean
  }

  export type ConvidadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "acompanhantes" | "status_confirmacao" | "observacoes" | "createdAt" | "updatedAt" | "familiaId", ExtArgs["result"]["convidado"]>
  export type ConvidadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | Convidado$familiaArgs<ExtArgs>
    convite?: boolean | Convidado$conviteArgs<ExtArgs>
  }
  export type ConvidadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | Convidado$familiaArgs<ExtArgs>
  }
  export type ConvidadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | Convidado$familiaArgs<ExtArgs>
  }

  export type $ConvidadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convidado"
    objects: {
      familia: Prisma.$FamiliaPayload<ExtArgs> | null
      convite: Prisma.$ConvitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      telefone: string | null
      acompanhantes: number
      status_confirmacao: string
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
      familiaId: string | null
    }, ExtArgs["result"]["convidado"]>
    composites: {}
  }

  type ConvidadoGetPayload<S extends boolean | null | undefined | ConvidadoDefaultArgs> = $Result.GetResult<Prisma.$ConvidadoPayload, S>

  type ConvidadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConvidadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConvidadoCountAggregateInputType | true
    }

  export interface ConvidadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convidado'], meta: { name: 'Convidado' } }
    /**
     * Find zero or one Convidado that matches the filter.
     * @param {ConvidadoFindUniqueArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConvidadoFindUniqueArgs>(args: SelectSubset<T, ConvidadoFindUniqueArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Convidado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConvidadoFindUniqueOrThrowArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConvidadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConvidadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convidado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoFindFirstArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConvidadoFindFirstArgs>(args?: SelectSubset<T, ConvidadoFindFirstArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convidado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoFindFirstOrThrowArgs} args - Arguments to find a Convidado
     * @example
     * // Get one Convidado
     * const convidado = await prisma.convidado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConvidadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConvidadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Convidados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Convidados
     * const convidados = await prisma.convidado.findMany()
     * 
     * // Get first 10 Convidados
     * const convidados = await prisma.convidado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const convidadoWithIdOnly = await prisma.convidado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConvidadoFindManyArgs>(args?: SelectSubset<T, ConvidadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Convidado.
     * @param {ConvidadoCreateArgs} args - Arguments to create a Convidado.
     * @example
     * // Create one Convidado
     * const Convidado = await prisma.convidado.create({
     *   data: {
     *     // ... data to create a Convidado
     *   }
     * })
     * 
     */
    create<T extends ConvidadoCreateArgs>(args: SelectSubset<T, ConvidadoCreateArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Convidados.
     * @param {ConvidadoCreateManyArgs} args - Arguments to create many Convidados.
     * @example
     * // Create many Convidados
     * const convidado = await prisma.convidado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConvidadoCreateManyArgs>(args?: SelectSubset<T, ConvidadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Convidados and returns the data saved in the database.
     * @param {ConvidadoCreateManyAndReturnArgs} args - Arguments to create many Convidados.
     * @example
     * // Create many Convidados
     * const convidado = await prisma.convidado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Convidados and only return the `id`
     * const convidadoWithIdOnly = await prisma.convidado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConvidadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConvidadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Convidado.
     * @param {ConvidadoDeleteArgs} args - Arguments to delete one Convidado.
     * @example
     * // Delete one Convidado
     * const Convidado = await prisma.convidado.delete({
     *   where: {
     *     // ... filter to delete one Convidado
     *   }
     * })
     * 
     */
    delete<T extends ConvidadoDeleteArgs>(args: SelectSubset<T, ConvidadoDeleteArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Convidado.
     * @param {ConvidadoUpdateArgs} args - Arguments to update one Convidado.
     * @example
     * // Update one Convidado
     * const convidado = await prisma.convidado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConvidadoUpdateArgs>(args: SelectSubset<T, ConvidadoUpdateArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Convidados.
     * @param {ConvidadoDeleteManyArgs} args - Arguments to filter Convidados to delete.
     * @example
     * // Delete a few Convidados
     * const { count } = await prisma.convidado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConvidadoDeleteManyArgs>(args?: SelectSubset<T, ConvidadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convidados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Convidados
     * const convidado = await prisma.convidado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConvidadoUpdateManyArgs>(args: SelectSubset<T, ConvidadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convidados and returns the data updated in the database.
     * @param {ConvidadoUpdateManyAndReturnArgs} args - Arguments to update many Convidados.
     * @example
     * // Update many Convidados
     * const convidado = await prisma.convidado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Convidados and only return the `id`
     * const convidadoWithIdOnly = await prisma.convidado.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConvidadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConvidadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Convidado.
     * @param {ConvidadoUpsertArgs} args - Arguments to update or create a Convidado.
     * @example
     * // Update or create a Convidado
     * const convidado = await prisma.convidado.upsert({
     *   create: {
     *     // ... data to create a Convidado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convidado we want to update
     *   }
     * })
     */
    upsert<T extends ConvidadoUpsertArgs>(args: SelectSubset<T, ConvidadoUpsertArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Convidados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoCountArgs} args - Arguments to filter Convidados to count.
     * @example
     * // Count the number of Convidados
     * const count = await prisma.convidado.count({
     *   where: {
     *     // ... the filter for the Convidados we want to count
     *   }
     * })
    **/
    count<T extends ConvidadoCountArgs>(
      args?: Subset<T, ConvidadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConvidadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convidado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConvidadoAggregateArgs>(args: Subset<T, ConvidadoAggregateArgs>): Prisma.PrismaPromise<GetConvidadoAggregateType<T>>

    /**
     * Group by Convidado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvidadoGroupByArgs} args - Group by arguments.
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
      T extends ConvidadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConvidadoGroupByArgs['orderBy'] }
        : { orderBy?: ConvidadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConvidadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvidadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convidado model
   */
  readonly fields: ConvidadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convidado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConvidadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familia<T extends Convidado$familiaArgs<ExtArgs> = {}>(args?: Subset<T, Convidado$familiaArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    convite<T extends Convidado$conviteArgs<ExtArgs> = {}>(args?: Subset<T, Convidado$conviteArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Convidado model
   */
  interface ConvidadoFieldRefs {
    readonly id: FieldRef<"Convidado", 'String'>
    readonly nome: FieldRef<"Convidado", 'String'>
    readonly telefone: FieldRef<"Convidado", 'String'>
    readonly acompanhantes: FieldRef<"Convidado", 'Int'>
    readonly status_confirmacao: FieldRef<"Convidado", 'String'>
    readonly observacoes: FieldRef<"Convidado", 'String'>
    readonly createdAt: FieldRef<"Convidado", 'DateTime'>
    readonly updatedAt: FieldRef<"Convidado", 'DateTime'>
    readonly familiaId: FieldRef<"Convidado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Convidado findUnique
   */
  export type ConvidadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado findUniqueOrThrow
   */
  export type ConvidadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado findFirst
   */
  export type ConvidadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convidados.
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convidados.
     */
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Convidado findFirstOrThrow
   */
  export type ConvidadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidado to fetch.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convidados.
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convidados.
     */
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Convidado findMany
   */
  export type ConvidadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter, which Convidados to fetch.
     */
    where?: ConvidadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convidados to fetch.
     */
    orderBy?: ConvidadoOrderByWithRelationInput | ConvidadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Convidados.
     */
    cursor?: ConvidadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convidados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convidados.
     */
    skip?: number
    distinct?: ConvidadoScalarFieldEnum | ConvidadoScalarFieldEnum[]
  }

  /**
   * Convidado create
   */
  export type ConvidadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Convidado.
     */
    data: XOR<ConvidadoCreateInput, ConvidadoUncheckedCreateInput>
  }

  /**
   * Convidado createMany
   */
  export type ConvidadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Convidados.
     */
    data: ConvidadoCreateManyInput | ConvidadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convidado createManyAndReturn
   */
  export type ConvidadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * The data used to create many Convidados.
     */
    data: ConvidadoCreateManyInput | ConvidadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convidado update
   */
  export type ConvidadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Convidado.
     */
    data: XOR<ConvidadoUpdateInput, ConvidadoUncheckedUpdateInput>
    /**
     * Choose, which Convidado to update.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado updateMany
   */
  export type ConvidadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Convidados.
     */
    data: XOR<ConvidadoUpdateManyMutationInput, ConvidadoUncheckedUpdateManyInput>
    /**
     * Filter which Convidados to update
     */
    where?: ConvidadoWhereInput
    /**
     * Limit how many Convidados to update.
     */
    limit?: number
  }

  /**
   * Convidado updateManyAndReturn
   */
  export type ConvidadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * The data used to update Convidados.
     */
    data: XOR<ConvidadoUpdateManyMutationInput, ConvidadoUncheckedUpdateManyInput>
    /**
     * Filter which Convidados to update
     */
    where?: ConvidadoWhereInput
    /**
     * Limit how many Convidados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convidado upsert
   */
  export type ConvidadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Convidado to update in case it exists.
     */
    where: ConvidadoWhereUniqueInput
    /**
     * In case the Convidado found by the `where` argument doesn't exist, create a new Convidado with this data.
     */
    create: XOR<ConvidadoCreateInput, ConvidadoUncheckedCreateInput>
    /**
     * In case the Convidado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConvidadoUpdateInput, ConvidadoUncheckedUpdateInput>
  }

  /**
   * Convidado delete
   */
  export type ConvidadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
    /**
     * Filter which Convidado to delete.
     */
    where: ConvidadoWhereUniqueInput
  }

  /**
   * Convidado deleteMany
   */
  export type ConvidadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convidados to delete
     */
    where?: ConvidadoWhereInput
    /**
     * Limit how many Convidados to delete.
     */
    limit?: number
  }

  /**
   * Convidado.familia
   */
  export type Convidado$familiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Familia
     */
    omit?: FamiliaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    where?: FamiliaWhereInput
  }

  /**
   * Convidado.convite
   */
  export type Convidado$conviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    where?: ConviteWhereInput
  }

  /**
   * Convidado without action
   */
  export type ConvidadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convidado
     */
    select?: ConvidadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convidado
     */
    omit?: ConvidadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvidadoInclude<ExtArgs> | null
  }


  /**
   * Model Convite
   */

  export type AggregateConvite = {
    _count: ConviteCountAggregateOutputType | null
    _min: ConviteMinAggregateOutputType | null
    _max: ConviteMaxAggregateOutputType | null
  }

  export type ConviteMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    type: string | null
    title: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    convidadoId: string | null
  }

  export type ConviteMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    type: string | null
    title: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    convidadoId: string | null
  }

  export type ConviteCountAggregateOutputType = {
    id: number
    codigo: number
    type: number
    title: number
    link: number
    createdAt: number
    updatedAt: number
    status: number
    convidadoId: number
    _all: number
  }


  export type ConviteMinAggregateInputType = {
    id?: true
    codigo?: true
    type?: true
    title?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    convidadoId?: true
  }

  export type ConviteMaxAggregateInputType = {
    id?: true
    codigo?: true
    type?: true
    title?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    convidadoId?: true
  }

  export type ConviteCountAggregateInputType = {
    id?: true
    codigo?: true
    type?: true
    title?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    convidadoId?: true
    _all?: true
  }

  export type ConviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convite to aggregate.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Convites
    **/
    _count?: true | ConviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConviteMaxAggregateInputType
  }

  export type GetConviteAggregateType<T extends ConviteAggregateArgs> = {
        [P in keyof T & keyof AggregateConvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvite[P]>
      : GetScalarType<T[P], AggregateConvite[P]>
  }




  export type ConviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConviteWhereInput
    orderBy?: ConviteOrderByWithAggregationInput | ConviteOrderByWithAggregationInput[]
    by: ConviteScalarFieldEnum[] | ConviteScalarFieldEnum
    having?: ConviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConviteCountAggregateInputType | true
    _min?: ConviteMinAggregateInputType
    _max?: ConviteMaxAggregateInputType
  }

  export type ConviteGroupByOutputType = {
    id: string
    codigo: string
    type: string
    title: string
    link: string
    createdAt: Date
    updatedAt: Date
    status: string
    convidadoId: string
    _count: ConviteCountAggregateOutputType | null
    _min: ConviteMinAggregateOutputType | null
    _max: ConviteMaxAggregateOutputType | null
  }

  type GetConviteGroupByPayload<T extends ConviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConviteGroupByOutputType[P]>
            : GetScalarType<T[P], ConviteGroupByOutputType[P]>
        }
      >
    >


  export type ConviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    type?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    convidadoId?: boolean
    convidado?: boolean | ConvidadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convite"]>

  export type ConviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    type?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    convidadoId?: boolean
    convidado?: boolean | ConvidadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convite"]>

  export type ConviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    type?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    convidadoId?: boolean
    convidado?: boolean | ConvidadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convite"]>

  export type ConviteSelectScalar = {
    id?: boolean
    codigo?: boolean
    type?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    convidadoId?: boolean
  }

  export type ConviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "type" | "title" | "link" | "createdAt" | "updatedAt" | "status" | "convidadoId", ExtArgs["result"]["convite"]>
  export type ConviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convidado?: boolean | ConvidadoDefaultArgs<ExtArgs>
  }
  export type ConviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convidado?: boolean | ConvidadoDefaultArgs<ExtArgs>
  }
  export type ConviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convidado?: boolean | ConvidadoDefaultArgs<ExtArgs>
  }

  export type $ConvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convite"
    objects: {
      convidado: Prisma.$ConvidadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      type: string
      title: string
      link: string
      createdAt: Date
      updatedAt: Date
      status: string
      convidadoId: string
    }, ExtArgs["result"]["convite"]>
    composites: {}
  }

  type ConviteGetPayload<S extends boolean | null | undefined | ConviteDefaultArgs> = $Result.GetResult<Prisma.$ConvitePayload, S>

  type ConviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConviteCountAggregateInputType | true
    }

  export interface ConviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convite'], meta: { name: 'Convite' } }
    /**
     * Find zero or one Convite that matches the filter.
     * @param {ConviteFindUniqueArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConviteFindUniqueArgs>(args: SelectSubset<T, ConviteFindUniqueArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Convite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConviteFindUniqueOrThrowArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConviteFindUniqueOrThrowArgs>(args: SelectSubset<T, ConviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteFindFirstArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConviteFindFirstArgs>(args?: SelectSubset<T, ConviteFindFirstArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteFindFirstOrThrowArgs} args - Arguments to find a Convite
     * @example
     * // Get one Convite
     * const convite = await prisma.convite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConviteFindFirstOrThrowArgs>(args?: SelectSubset<T, ConviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Convites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Convites
     * const convites = await prisma.convite.findMany()
     * 
     * // Get first 10 Convites
     * const convites = await prisma.convite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conviteWithIdOnly = await prisma.convite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConviteFindManyArgs>(args?: SelectSubset<T, ConviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Convite.
     * @param {ConviteCreateArgs} args - Arguments to create a Convite.
     * @example
     * // Create one Convite
     * const Convite = await prisma.convite.create({
     *   data: {
     *     // ... data to create a Convite
     *   }
     * })
     * 
     */
    create<T extends ConviteCreateArgs>(args: SelectSubset<T, ConviteCreateArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Convites.
     * @param {ConviteCreateManyArgs} args - Arguments to create many Convites.
     * @example
     * // Create many Convites
     * const convite = await prisma.convite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConviteCreateManyArgs>(args?: SelectSubset<T, ConviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Convites and returns the data saved in the database.
     * @param {ConviteCreateManyAndReturnArgs} args - Arguments to create many Convites.
     * @example
     * // Create many Convites
     * const convite = await prisma.convite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Convites and only return the `id`
     * const conviteWithIdOnly = await prisma.convite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConviteCreateManyAndReturnArgs>(args?: SelectSubset<T, ConviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Convite.
     * @param {ConviteDeleteArgs} args - Arguments to delete one Convite.
     * @example
     * // Delete one Convite
     * const Convite = await prisma.convite.delete({
     *   where: {
     *     // ... filter to delete one Convite
     *   }
     * })
     * 
     */
    delete<T extends ConviteDeleteArgs>(args: SelectSubset<T, ConviteDeleteArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Convite.
     * @param {ConviteUpdateArgs} args - Arguments to update one Convite.
     * @example
     * // Update one Convite
     * const convite = await prisma.convite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConviteUpdateArgs>(args: SelectSubset<T, ConviteUpdateArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Convites.
     * @param {ConviteDeleteManyArgs} args - Arguments to filter Convites to delete.
     * @example
     * // Delete a few Convites
     * const { count } = await prisma.convite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConviteDeleteManyArgs>(args?: SelectSubset<T, ConviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Convites
     * const convite = await prisma.convite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConviteUpdateManyArgs>(args: SelectSubset<T, ConviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convites and returns the data updated in the database.
     * @param {ConviteUpdateManyAndReturnArgs} args - Arguments to update many Convites.
     * @example
     * // Update many Convites
     * const convite = await prisma.convite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Convites and only return the `id`
     * const conviteWithIdOnly = await prisma.convite.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConviteUpdateManyAndReturnArgs>(args: SelectSubset<T, ConviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Convite.
     * @param {ConviteUpsertArgs} args - Arguments to update or create a Convite.
     * @example
     * // Update or create a Convite
     * const convite = await prisma.convite.upsert({
     *   create: {
     *     // ... data to create a Convite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convite we want to update
     *   }
     * })
     */
    upsert<T extends ConviteUpsertArgs>(args: SelectSubset<T, ConviteUpsertArgs<ExtArgs>>): Prisma__ConviteClient<$Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Convites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteCountArgs} args - Arguments to filter Convites to count.
     * @example
     * // Count the number of Convites
     * const count = await prisma.convite.count({
     *   where: {
     *     // ... the filter for the Convites we want to count
     *   }
     * })
    **/
    count<T extends ConviteCountArgs>(
      args?: Subset<T, ConviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConviteAggregateArgs>(args: Subset<T, ConviteAggregateArgs>): Prisma.PrismaPromise<GetConviteAggregateType<T>>

    /**
     * Group by Convite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConviteGroupByArgs} args - Group by arguments.
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
      T extends ConviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConviteGroupByArgs['orderBy'] }
        : { orderBy?: ConviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convite model
   */
  readonly fields: ConviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    convidado<T extends ConvidadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConvidadoDefaultArgs<ExtArgs>>): Prisma__ConvidadoClient<$Result.GetResult<Prisma.$ConvidadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Convite model
   */
  interface ConviteFieldRefs {
    readonly id: FieldRef<"Convite", 'String'>
    readonly codigo: FieldRef<"Convite", 'String'>
    readonly type: FieldRef<"Convite", 'String'>
    readonly title: FieldRef<"Convite", 'String'>
    readonly link: FieldRef<"Convite", 'String'>
    readonly createdAt: FieldRef<"Convite", 'DateTime'>
    readonly updatedAt: FieldRef<"Convite", 'DateTime'>
    readonly status: FieldRef<"Convite", 'String'>
    readonly convidadoId: FieldRef<"Convite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Convite findUnique
   */
  export type ConviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite findUniqueOrThrow
   */
  export type ConviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite findFirst
   */
  export type ConviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convites.
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convites.
     */
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Convite findFirstOrThrow
   */
  export type ConviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convite to fetch.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convites.
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convites.
     */
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Convite findMany
   */
  export type ConviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter, which Convites to fetch.
     */
    where?: ConviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convites to fetch.
     */
    orderBy?: ConviteOrderByWithRelationInput | ConviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Convites.
     */
    cursor?: ConviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convites.
     */
    skip?: number
    distinct?: ConviteScalarFieldEnum | ConviteScalarFieldEnum[]
  }

  /**
   * Convite create
   */
  export type ConviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Convite.
     */
    data: XOR<ConviteCreateInput, ConviteUncheckedCreateInput>
  }

  /**
   * Convite createMany
   */
  export type ConviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Convites.
     */
    data: ConviteCreateManyInput | ConviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convite createManyAndReturn
   */
  export type ConviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * The data used to create many Convites.
     */
    data: ConviteCreateManyInput | ConviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convite update
   */
  export type ConviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Convite.
     */
    data: XOR<ConviteUpdateInput, ConviteUncheckedUpdateInput>
    /**
     * Choose, which Convite to update.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite updateMany
   */
  export type ConviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Convites.
     */
    data: XOR<ConviteUpdateManyMutationInput, ConviteUncheckedUpdateManyInput>
    /**
     * Filter which Convites to update
     */
    where?: ConviteWhereInput
    /**
     * Limit how many Convites to update.
     */
    limit?: number
  }

  /**
   * Convite updateManyAndReturn
   */
  export type ConviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * The data used to update Convites.
     */
    data: XOR<ConviteUpdateManyMutationInput, ConviteUncheckedUpdateManyInput>
    /**
     * Filter which Convites to update
     */
    where?: ConviteWhereInput
    /**
     * Limit how many Convites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convite upsert
   */
  export type ConviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Convite to update in case it exists.
     */
    where: ConviteWhereUniqueInput
    /**
     * In case the Convite found by the `where` argument doesn't exist, create a new Convite with this data.
     */
    create: XOR<ConviteCreateInput, ConviteUncheckedCreateInput>
    /**
     * In case the Convite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConviteUpdateInput, ConviteUncheckedUpdateInput>
  }

  /**
   * Convite delete
   */
  export type ConviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
    /**
     * Filter which Convite to delete.
     */
    where: ConviteWhereUniqueInput
  }

  /**
   * Convite deleteMany
   */
  export type ConviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convites to delete
     */
    where?: ConviteWhereInput
    /**
     * Limit how many Convites to delete.
     */
    limit?: number
  }

  /**
   * Convite without action
   */
  export type ConviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convite
     */
    select?: ConviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convite
     */
    omit?: ConviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConviteInclude<ExtArgs> | null
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


  export const FamiliaScalarFieldEnum: {
    id: 'id',
    nome_familia: 'nome_familia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamiliaScalarFieldEnum = (typeof FamiliaScalarFieldEnum)[keyof typeof FamiliaScalarFieldEnum]


  export const ConvidadoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    acompanhantes: 'acompanhantes',
    status_confirmacao: 'status_confirmacao',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    familiaId: 'familiaId'
  };

  export type ConvidadoScalarFieldEnum = (typeof ConvidadoScalarFieldEnum)[keyof typeof ConvidadoScalarFieldEnum]


  export const ConviteScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    type: 'type',
    title: 'title',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    convidadoId: 'convidadoId'
  };

  export type ConviteScalarFieldEnum = (typeof ConviteScalarFieldEnum)[keyof typeof ConviteScalarFieldEnum]


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


  export type FamiliaWhereInput = {
    AND?: FamiliaWhereInput | FamiliaWhereInput[]
    OR?: FamiliaWhereInput[]
    NOT?: FamiliaWhereInput | FamiliaWhereInput[]
    id?: StringFilter<"Familia"> | string
    nome_familia?: StringFilter<"Familia"> | string
    createdAt?: DateTimeFilter<"Familia"> | Date | string
    updatedAt?: DateTimeFilter<"Familia"> | Date | string
    convidados?: ConvidadoListRelationFilter
  }

  export type FamiliaOrderByWithRelationInput = {
    id?: SortOrder
    nome_familia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    convidados?: ConvidadoOrderByRelationAggregateInput
  }

  export type FamiliaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamiliaWhereInput | FamiliaWhereInput[]
    OR?: FamiliaWhereInput[]
    NOT?: FamiliaWhereInput | FamiliaWhereInput[]
    nome_familia?: StringFilter<"Familia"> | string
    createdAt?: DateTimeFilter<"Familia"> | Date | string
    updatedAt?: DateTimeFilter<"Familia"> | Date | string
    convidados?: ConvidadoListRelationFilter
  }, "id">

  export type FamiliaOrderByWithAggregationInput = {
    id?: SortOrder
    nome_familia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamiliaCountOrderByAggregateInput
    _max?: FamiliaMaxOrderByAggregateInput
    _min?: FamiliaMinOrderByAggregateInput
  }

  export type FamiliaScalarWhereWithAggregatesInput = {
    AND?: FamiliaScalarWhereWithAggregatesInput | FamiliaScalarWhereWithAggregatesInput[]
    OR?: FamiliaScalarWhereWithAggregatesInput[]
    NOT?: FamiliaScalarWhereWithAggregatesInput | FamiliaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Familia"> | string
    nome_familia?: StringWithAggregatesFilter<"Familia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Familia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Familia"> | Date | string
  }

  export type ConvidadoWhereInput = {
    AND?: ConvidadoWhereInput | ConvidadoWhereInput[]
    OR?: ConvidadoWhereInput[]
    NOT?: ConvidadoWhereInput | ConvidadoWhereInput[]
    id?: StringFilter<"Convidado"> | string
    nome?: StringFilter<"Convidado"> | string
    telefone?: StringNullableFilter<"Convidado"> | string | null
    acompanhantes?: IntFilter<"Convidado"> | number
    status_confirmacao?: StringFilter<"Convidado"> | string
    observacoes?: StringNullableFilter<"Convidado"> | string | null
    createdAt?: DateTimeFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeFilter<"Convidado"> | Date | string
    familiaId?: StringNullableFilter<"Convidado"> | string | null
    familia?: XOR<FamiliaNullableScalarRelationFilter, FamiliaWhereInput> | null
    convite?: XOR<ConviteNullableScalarRelationFilter, ConviteWhereInput> | null
  }

  export type ConvidadoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    acompanhantes?: SortOrder
    status_confirmacao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familiaId?: SortOrderInput | SortOrder
    familia?: FamiliaOrderByWithRelationInput
    convite?: ConviteOrderByWithRelationInput
  }

  export type ConvidadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConvidadoWhereInput | ConvidadoWhereInput[]
    OR?: ConvidadoWhereInput[]
    NOT?: ConvidadoWhereInput | ConvidadoWhereInput[]
    nome?: StringFilter<"Convidado"> | string
    telefone?: StringNullableFilter<"Convidado"> | string | null
    acompanhantes?: IntFilter<"Convidado"> | number
    status_confirmacao?: StringFilter<"Convidado"> | string
    observacoes?: StringNullableFilter<"Convidado"> | string | null
    createdAt?: DateTimeFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeFilter<"Convidado"> | Date | string
    familiaId?: StringNullableFilter<"Convidado"> | string | null
    familia?: XOR<FamiliaNullableScalarRelationFilter, FamiliaWhereInput> | null
    convite?: XOR<ConviteNullableScalarRelationFilter, ConviteWhereInput> | null
  }, "id">

  export type ConvidadoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    acompanhantes?: SortOrder
    status_confirmacao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familiaId?: SortOrderInput | SortOrder
    _count?: ConvidadoCountOrderByAggregateInput
    _avg?: ConvidadoAvgOrderByAggregateInput
    _max?: ConvidadoMaxOrderByAggregateInput
    _min?: ConvidadoMinOrderByAggregateInput
    _sum?: ConvidadoSumOrderByAggregateInput
  }

  export type ConvidadoScalarWhereWithAggregatesInput = {
    AND?: ConvidadoScalarWhereWithAggregatesInput | ConvidadoScalarWhereWithAggregatesInput[]
    OR?: ConvidadoScalarWhereWithAggregatesInput[]
    NOT?: ConvidadoScalarWhereWithAggregatesInput | ConvidadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Convidado"> | string
    nome?: StringWithAggregatesFilter<"Convidado"> | string
    telefone?: StringNullableWithAggregatesFilter<"Convidado"> | string | null
    acompanhantes?: IntWithAggregatesFilter<"Convidado"> | number
    status_confirmacao?: StringWithAggregatesFilter<"Convidado"> | string
    observacoes?: StringNullableWithAggregatesFilter<"Convidado"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Convidado"> | Date | string
    familiaId?: StringNullableWithAggregatesFilter<"Convidado"> | string | null
  }

  export type ConviteWhereInput = {
    AND?: ConviteWhereInput | ConviteWhereInput[]
    OR?: ConviteWhereInput[]
    NOT?: ConviteWhereInput | ConviteWhereInput[]
    id?: StringFilter<"Convite"> | string
    codigo?: StringFilter<"Convite"> | string
    type?: StringFilter<"Convite"> | string
    title?: StringFilter<"Convite"> | string
    link?: StringFilter<"Convite"> | string
    createdAt?: DateTimeFilter<"Convite"> | Date | string
    updatedAt?: DateTimeFilter<"Convite"> | Date | string
    status?: StringFilter<"Convite"> | string
    convidadoId?: StringFilter<"Convite"> | string
    convidado?: XOR<ConvidadoScalarRelationFilter, ConvidadoWhereInput>
  }

  export type ConviteOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    type?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    convidadoId?: SortOrder
    convidado?: ConvidadoOrderByWithRelationInput
  }

  export type ConviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    convidadoId?: string
    AND?: ConviteWhereInput | ConviteWhereInput[]
    OR?: ConviteWhereInput[]
    NOT?: ConviteWhereInput | ConviteWhereInput[]
    type?: StringFilter<"Convite"> | string
    title?: StringFilter<"Convite"> | string
    link?: StringFilter<"Convite"> | string
    createdAt?: DateTimeFilter<"Convite"> | Date | string
    updatedAt?: DateTimeFilter<"Convite"> | Date | string
    status?: StringFilter<"Convite"> | string
    convidado?: XOR<ConvidadoScalarRelationFilter, ConvidadoWhereInput>
  }, "id" | "codigo" | "convidadoId">

  export type ConviteOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    type?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    convidadoId?: SortOrder
    _count?: ConviteCountOrderByAggregateInput
    _max?: ConviteMaxOrderByAggregateInput
    _min?: ConviteMinOrderByAggregateInput
  }

  export type ConviteScalarWhereWithAggregatesInput = {
    AND?: ConviteScalarWhereWithAggregatesInput | ConviteScalarWhereWithAggregatesInput[]
    OR?: ConviteScalarWhereWithAggregatesInput[]
    NOT?: ConviteScalarWhereWithAggregatesInput | ConviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Convite"> | string
    codigo?: StringWithAggregatesFilter<"Convite"> | string
    type?: StringWithAggregatesFilter<"Convite"> | string
    title?: StringWithAggregatesFilter<"Convite"> | string
    link?: StringWithAggregatesFilter<"Convite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Convite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Convite"> | Date | string
    status?: StringWithAggregatesFilter<"Convite"> | string
    convidadoId?: StringWithAggregatesFilter<"Convite"> | string
  }

  export type FamiliaCreateInput = {
    id?: string
    nome_familia: string
    createdAt?: Date | string
    updatedAt?: Date | string
    convidados?: ConvidadoCreateNestedManyWithoutFamiliaInput
  }

  export type FamiliaUncheckedCreateInput = {
    id?: string
    nome_familia: string
    createdAt?: Date | string
    updatedAt?: Date | string
    convidados?: ConvidadoUncheckedCreateNestedManyWithoutFamiliaInput
  }

  export type FamiliaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_familia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convidados?: ConvidadoUpdateManyWithoutFamiliaNestedInput
  }

  export type FamiliaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_familia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convidados?: ConvidadoUncheckedUpdateManyWithoutFamiliaNestedInput
  }

  export type FamiliaCreateManyInput = {
    id?: string
    nome_familia: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamiliaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_familia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamiliaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_familia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvidadoCreateInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familia?: FamiliaCreateNestedOneWithoutConvidadosInput
    convite?: ConviteCreateNestedOneWithoutConvidadoInput
  }

  export type ConvidadoUncheckedCreateInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familiaId?: string | null
    convite?: ConviteUncheckedCreateNestedOneWithoutConvidadoInput
  }

  export type ConvidadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familia?: FamiliaUpdateOneWithoutConvidadosNestedInput
    convite?: ConviteUpdateOneWithoutConvidadoNestedInput
  }

  export type ConvidadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familiaId?: NullableStringFieldUpdateOperationsInput | string | null
    convite?: ConviteUncheckedUpdateOneWithoutConvidadoNestedInput
  }

  export type ConvidadoCreateManyInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familiaId?: string | null
  }

  export type ConvidadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvidadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConviteCreateInput = {
    id?: string
    codigo: string
    type?: string
    title: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    convidado: ConvidadoCreateNestedOneWithoutConviteInput
  }

  export type ConviteUncheckedCreateInput = {
    id?: string
    codigo: string
    type?: string
    title: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    convidadoId: string
  }

  export type ConviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    convidado?: ConvidadoUpdateOneRequiredWithoutConviteNestedInput
  }

  export type ConviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    convidadoId?: StringFieldUpdateOperationsInput | string
  }

  export type ConviteCreateManyInput = {
    id?: string
    codigo: string
    type?: string
    title: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    convidadoId: string
  }

  export type ConviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ConviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    convidadoId?: StringFieldUpdateOperationsInput | string
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

  export type ConvidadoListRelationFilter = {
    every?: ConvidadoWhereInput
    some?: ConvidadoWhereInput
    none?: ConvidadoWhereInput
  }

  export type ConvidadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamiliaCountOrderByAggregateInput = {
    id?: SortOrder
    nome_familia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamiliaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_familia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamiliaMinOrderByAggregateInput = {
    id?: SortOrder
    nome_familia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FamiliaNullableScalarRelationFilter = {
    is?: FamiliaWhereInput | null
    isNot?: FamiliaWhereInput | null
  }

  export type ConviteNullableScalarRelationFilter = {
    is?: ConviteWhereInput | null
    isNot?: ConviteWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConvidadoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    acompanhantes?: SortOrder
    status_confirmacao?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familiaId?: SortOrder
  }

  export type ConvidadoAvgOrderByAggregateInput = {
    acompanhantes?: SortOrder
  }

  export type ConvidadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    acompanhantes?: SortOrder
    status_confirmacao?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familiaId?: SortOrder
  }

  export type ConvidadoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    acompanhantes?: SortOrder
    status_confirmacao?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familiaId?: SortOrder
  }

  export type ConvidadoSumOrderByAggregateInput = {
    acompanhantes?: SortOrder
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

  export type ConvidadoScalarRelationFilter = {
    is?: ConvidadoWhereInput
    isNot?: ConvidadoWhereInput
  }

  export type ConviteCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    type?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    convidadoId?: SortOrder
  }

  export type ConviteMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    type?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    convidadoId?: SortOrder
  }

  export type ConviteMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    type?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    convidadoId?: SortOrder
  }

  export type ConvidadoCreateNestedManyWithoutFamiliaInput = {
    create?: XOR<ConvidadoCreateWithoutFamiliaInput, ConvidadoUncheckedCreateWithoutFamiliaInput> | ConvidadoCreateWithoutFamiliaInput[] | ConvidadoUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ConvidadoCreateOrConnectWithoutFamiliaInput | ConvidadoCreateOrConnectWithoutFamiliaInput[]
    createMany?: ConvidadoCreateManyFamiliaInputEnvelope
    connect?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
  }

  export type ConvidadoUncheckedCreateNestedManyWithoutFamiliaInput = {
    create?: XOR<ConvidadoCreateWithoutFamiliaInput, ConvidadoUncheckedCreateWithoutFamiliaInput> | ConvidadoCreateWithoutFamiliaInput[] | ConvidadoUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ConvidadoCreateOrConnectWithoutFamiliaInput | ConvidadoCreateOrConnectWithoutFamiliaInput[]
    createMany?: ConvidadoCreateManyFamiliaInputEnvelope
    connect?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConvidadoUpdateManyWithoutFamiliaNestedInput = {
    create?: XOR<ConvidadoCreateWithoutFamiliaInput, ConvidadoUncheckedCreateWithoutFamiliaInput> | ConvidadoCreateWithoutFamiliaInput[] | ConvidadoUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ConvidadoCreateOrConnectWithoutFamiliaInput | ConvidadoCreateOrConnectWithoutFamiliaInput[]
    upsert?: ConvidadoUpsertWithWhereUniqueWithoutFamiliaInput | ConvidadoUpsertWithWhereUniqueWithoutFamiliaInput[]
    createMany?: ConvidadoCreateManyFamiliaInputEnvelope
    set?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    disconnect?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    delete?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    connect?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    update?: ConvidadoUpdateWithWhereUniqueWithoutFamiliaInput | ConvidadoUpdateWithWhereUniqueWithoutFamiliaInput[]
    updateMany?: ConvidadoUpdateManyWithWhereWithoutFamiliaInput | ConvidadoUpdateManyWithWhereWithoutFamiliaInput[]
    deleteMany?: ConvidadoScalarWhereInput | ConvidadoScalarWhereInput[]
  }

  export type ConvidadoUncheckedUpdateManyWithoutFamiliaNestedInput = {
    create?: XOR<ConvidadoCreateWithoutFamiliaInput, ConvidadoUncheckedCreateWithoutFamiliaInput> | ConvidadoCreateWithoutFamiliaInput[] | ConvidadoUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ConvidadoCreateOrConnectWithoutFamiliaInput | ConvidadoCreateOrConnectWithoutFamiliaInput[]
    upsert?: ConvidadoUpsertWithWhereUniqueWithoutFamiliaInput | ConvidadoUpsertWithWhereUniqueWithoutFamiliaInput[]
    createMany?: ConvidadoCreateManyFamiliaInputEnvelope
    set?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    disconnect?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    delete?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    connect?: ConvidadoWhereUniqueInput | ConvidadoWhereUniqueInput[]
    update?: ConvidadoUpdateWithWhereUniqueWithoutFamiliaInput | ConvidadoUpdateWithWhereUniqueWithoutFamiliaInput[]
    updateMany?: ConvidadoUpdateManyWithWhereWithoutFamiliaInput | ConvidadoUpdateManyWithWhereWithoutFamiliaInput[]
    deleteMany?: ConvidadoScalarWhereInput | ConvidadoScalarWhereInput[]
  }

  export type FamiliaCreateNestedOneWithoutConvidadosInput = {
    create?: XOR<FamiliaCreateWithoutConvidadosInput, FamiliaUncheckedCreateWithoutConvidadosInput>
    connectOrCreate?: FamiliaCreateOrConnectWithoutConvidadosInput
    connect?: FamiliaWhereUniqueInput
  }

  export type ConviteCreateNestedOneWithoutConvidadoInput = {
    create?: XOR<ConviteCreateWithoutConvidadoInput, ConviteUncheckedCreateWithoutConvidadoInput>
    connectOrCreate?: ConviteCreateOrConnectWithoutConvidadoInput
    connect?: ConviteWhereUniqueInput
  }

  export type ConviteUncheckedCreateNestedOneWithoutConvidadoInput = {
    create?: XOR<ConviteCreateWithoutConvidadoInput, ConviteUncheckedCreateWithoutConvidadoInput>
    connectOrCreate?: ConviteCreateOrConnectWithoutConvidadoInput
    connect?: ConviteWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FamiliaUpdateOneWithoutConvidadosNestedInput = {
    create?: XOR<FamiliaCreateWithoutConvidadosInput, FamiliaUncheckedCreateWithoutConvidadosInput>
    connectOrCreate?: FamiliaCreateOrConnectWithoutConvidadosInput
    upsert?: FamiliaUpsertWithoutConvidadosInput
    disconnect?: FamiliaWhereInput | boolean
    delete?: FamiliaWhereInput | boolean
    connect?: FamiliaWhereUniqueInput
    update?: XOR<XOR<FamiliaUpdateToOneWithWhereWithoutConvidadosInput, FamiliaUpdateWithoutConvidadosInput>, FamiliaUncheckedUpdateWithoutConvidadosInput>
  }

  export type ConviteUpdateOneWithoutConvidadoNestedInput = {
    create?: XOR<ConviteCreateWithoutConvidadoInput, ConviteUncheckedCreateWithoutConvidadoInput>
    connectOrCreate?: ConviteCreateOrConnectWithoutConvidadoInput
    upsert?: ConviteUpsertWithoutConvidadoInput
    disconnect?: ConviteWhereInput | boolean
    delete?: ConviteWhereInput | boolean
    connect?: ConviteWhereUniqueInput
    update?: XOR<XOR<ConviteUpdateToOneWithWhereWithoutConvidadoInput, ConviteUpdateWithoutConvidadoInput>, ConviteUncheckedUpdateWithoutConvidadoInput>
  }

  export type ConviteUncheckedUpdateOneWithoutConvidadoNestedInput = {
    create?: XOR<ConviteCreateWithoutConvidadoInput, ConviteUncheckedCreateWithoutConvidadoInput>
    connectOrCreate?: ConviteCreateOrConnectWithoutConvidadoInput
    upsert?: ConviteUpsertWithoutConvidadoInput
    disconnect?: ConviteWhereInput | boolean
    delete?: ConviteWhereInput | boolean
    connect?: ConviteWhereUniqueInput
    update?: XOR<XOR<ConviteUpdateToOneWithWhereWithoutConvidadoInput, ConviteUpdateWithoutConvidadoInput>, ConviteUncheckedUpdateWithoutConvidadoInput>
  }

  export type ConvidadoCreateNestedOneWithoutConviteInput = {
    create?: XOR<ConvidadoCreateWithoutConviteInput, ConvidadoUncheckedCreateWithoutConviteInput>
    connectOrCreate?: ConvidadoCreateOrConnectWithoutConviteInput
    connect?: ConvidadoWhereUniqueInput
  }

  export type ConvidadoUpdateOneRequiredWithoutConviteNestedInput = {
    create?: XOR<ConvidadoCreateWithoutConviteInput, ConvidadoUncheckedCreateWithoutConviteInput>
    connectOrCreate?: ConvidadoCreateOrConnectWithoutConviteInput
    upsert?: ConvidadoUpsertWithoutConviteInput
    connect?: ConvidadoWhereUniqueInput
    update?: XOR<XOR<ConvidadoUpdateToOneWithWhereWithoutConviteInput, ConvidadoUpdateWithoutConviteInput>, ConvidadoUncheckedUpdateWithoutConviteInput>
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

  export type ConvidadoCreateWithoutFamiliaInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convite?: ConviteCreateNestedOneWithoutConvidadoInput
  }

  export type ConvidadoUncheckedCreateWithoutFamiliaInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convite?: ConviteUncheckedCreateNestedOneWithoutConvidadoInput
  }

  export type ConvidadoCreateOrConnectWithoutFamiliaInput = {
    where: ConvidadoWhereUniqueInput
    create: XOR<ConvidadoCreateWithoutFamiliaInput, ConvidadoUncheckedCreateWithoutFamiliaInput>
  }

  export type ConvidadoCreateManyFamiliaInputEnvelope = {
    data: ConvidadoCreateManyFamiliaInput | ConvidadoCreateManyFamiliaInput[]
    skipDuplicates?: boolean
  }

  export type ConvidadoUpsertWithWhereUniqueWithoutFamiliaInput = {
    where: ConvidadoWhereUniqueInput
    update: XOR<ConvidadoUpdateWithoutFamiliaInput, ConvidadoUncheckedUpdateWithoutFamiliaInput>
    create: XOR<ConvidadoCreateWithoutFamiliaInput, ConvidadoUncheckedCreateWithoutFamiliaInput>
  }

  export type ConvidadoUpdateWithWhereUniqueWithoutFamiliaInput = {
    where: ConvidadoWhereUniqueInput
    data: XOR<ConvidadoUpdateWithoutFamiliaInput, ConvidadoUncheckedUpdateWithoutFamiliaInput>
  }

  export type ConvidadoUpdateManyWithWhereWithoutFamiliaInput = {
    where: ConvidadoScalarWhereInput
    data: XOR<ConvidadoUpdateManyMutationInput, ConvidadoUncheckedUpdateManyWithoutFamiliaInput>
  }

  export type ConvidadoScalarWhereInput = {
    AND?: ConvidadoScalarWhereInput | ConvidadoScalarWhereInput[]
    OR?: ConvidadoScalarWhereInput[]
    NOT?: ConvidadoScalarWhereInput | ConvidadoScalarWhereInput[]
    id?: StringFilter<"Convidado"> | string
    nome?: StringFilter<"Convidado"> | string
    telefone?: StringNullableFilter<"Convidado"> | string | null
    acompanhantes?: IntFilter<"Convidado"> | number
    status_confirmacao?: StringFilter<"Convidado"> | string
    observacoes?: StringNullableFilter<"Convidado"> | string | null
    createdAt?: DateTimeFilter<"Convidado"> | Date | string
    updatedAt?: DateTimeFilter<"Convidado"> | Date | string
    familiaId?: StringNullableFilter<"Convidado"> | string | null
  }

  export type FamiliaCreateWithoutConvidadosInput = {
    id?: string
    nome_familia: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamiliaUncheckedCreateWithoutConvidadosInput = {
    id?: string
    nome_familia: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamiliaCreateOrConnectWithoutConvidadosInput = {
    where: FamiliaWhereUniqueInput
    create: XOR<FamiliaCreateWithoutConvidadosInput, FamiliaUncheckedCreateWithoutConvidadosInput>
  }

  export type ConviteCreateWithoutConvidadoInput = {
    id?: string
    codigo: string
    type?: string
    title: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ConviteUncheckedCreateWithoutConvidadoInput = {
    id?: string
    codigo: string
    type?: string
    title: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ConviteCreateOrConnectWithoutConvidadoInput = {
    where: ConviteWhereUniqueInput
    create: XOR<ConviteCreateWithoutConvidadoInput, ConviteUncheckedCreateWithoutConvidadoInput>
  }

  export type FamiliaUpsertWithoutConvidadosInput = {
    update: XOR<FamiliaUpdateWithoutConvidadosInput, FamiliaUncheckedUpdateWithoutConvidadosInput>
    create: XOR<FamiliaCreateWithoutConvidadosInput, FamiliaUncheckedCreateWithoutConvidadosInput>
    where?: FamiliaWhereInput
  }

  export type FamiliaUpdateToOneWithWhereWithoutConvidadosInput = {
    where?: FamiliaWhereInput
    data: XOR<FamiliaUpdateWithoutConvidadosInput, FamiliaUncheckedUpdateWithoutConvidadosInput>
  }

  export type FamiliaUpdateWithoutConvidadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_familia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamiliaUncheckedUpdateWithoutConvidadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome_familia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConviteUpsertWithoutConvidadoInput = {
    update: XOR<ConviteUpdateWithoutConvidadoInput, ConviteUncheckedUpdateWithoutConvidadoInput>
    create: XOR<ConviteCreateWithoutConvidadoInput, ConviteUncheckedCreateWithoutConvidadoInput>
    where?: ConviteWhereInput
  }

  export type ConviteUpdateToOneWithWhereWithoutConvidadoInput = {
    where?: ConviteWhereInput
    data: XOR<ConviteUpdateWithoutConvidadoInput, ConviteUncheckedUpdateWithoutConvidadoInput>
  }

  export type ConviteUpdateWithoutConvidadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ConviteUncheckedUpdateWithoutConvidadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ConvidadoCreateWithoutConviteInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familia?: FamiliaCreateNestedOneWithoutConvidadosInput
  }

  export type ConvidadoUncheckedCreateWithoutConviteInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familiaId?: string | null
  }

  export type ConvidadoCreateOrConnectWithoutConviteInput = {
    where: ConvidadoWhereUniqueInput
    create: XOR<ConvidadoCreateWithoutConviteInput, ConvidadoUncheckedCreateWithoutConviteInput>
  }

  export type ConvidadoUpsertWithoutConviteInput = {
    update: XOR<ConvidadoUpdateWithoutConviteInput, ConvidadoUncheckedUpdateWithoutConviteInput>
    create: XOR<ConvidadoCreateWithoutConviteInput, ConvidadoUncheckedCreateWithoutConviteInput>
    where?: ConvidadoWhereInput
  }

  export type ConvidadoUpdateToOneWithWhereWithoutConviteInput = {
    where?: ConvidadoWhereInput
    data: XOR<ConvidadoUpdateWithoutConviteInput, ConvidadoUncheckedUpdateWithoutConviteInput>
  }

  export type ConvidadoUpdateWithoutConviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familia?: FamiliaUpdateOneWithoutConvidadosNestedInput
  }

  export type ConvidadoUncheckedUpdateWithoutConviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConvidadoCreateManyFamiliaInput = {
    id?: string
    nome: string
    telefone?: string | null
    acompanhantes?: number
    status_confirmacao?: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvidadoUpdateWithoutFamiliaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convite?: ConviteUpdateOneWithoutConvidadoNestedInput
  }

  export type ConvidadoUncheckedUpdateWithoutFamiliaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convite?: ConviteUncheckedUpdateOneWithoutConvidadoNestedInput
  }

  export type ConvidadoUncheckedUpdateManyWithoutFamiliaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    acompanhantes?: IntFieldUpdateOperationsInput | number
    status_confirmacao?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
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