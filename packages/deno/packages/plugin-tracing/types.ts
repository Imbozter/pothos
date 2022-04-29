// @ts-nocheck
import { GraphQLFieldResolver, GraphQLResolveInfo } from 'https://cdn.skypack.dev/graphql?dts';
import { PothosOutputFieldConfig, SchemaTypes } from '../core/index.ts';
export type TracingFieldWrapper<Types extends SchemaTypes> = (resolver: GraphQLFieldResolver<unknown, Types["Context"], Record<string, unknown>>, options: Exclude<Types["Tracing"], false | null>, fieldConfig: PothosOutputFieldConfig<Types>) => GraphQLFieldResolver<unknown, Types["Context"], Record<string, unknown>>;
export type TracingFieldOptions<Types extends SchemaTypes, ParentShape, Args extends object> = Types["Tracing"] | ((parent: ParentShape, Args: Args, context: Types["Context"], info: GraphQLResolveInfo) => Types["Tracing"]);
