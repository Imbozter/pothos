import './global-types';
import SchemaBuilder, {
  BasePlugin,
  FieldMap,
  InterfaceParam,
  InterfaceRef,
  Normalize,
  ObjectRef,
  ParentShape,
  SchemaTypes,
} from '@pothos/core';
import { OutputShapeFromFields } from './types';

const pluginName = 'simpleObjects' as const;

export default pluginName;

export class PothosSimpleObjectsPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {}

SchemaBuilder.registerPlugin(pluginName, PothosSimpleObjectsPlugin);

const proto: PothosSchemaTypes.SchemaBuilder<SchemaTypes> =
  SchemaBuilder.prototype as PothosSchemaTypes.SchemaBuilder<SchemaTypes>;

proto.simpleObject = function simpleObject<
  Interfaces extends InterfaceParam<SchemaTypes>[],
  Fields extends FieldMap,
  Shape extends Normalize<
    OutputShapeFromFields<Fields> & ParentShape<SchemaTypes, Interfaces[number]>
  >,
>(
  name: string,
  options: PothosSchemaTypes.SimpleObjectTypeOptions<SchemaTypes, Interfaces, Fields, Shape>,
) {
  const ref = new ObjectRef<SchemaTypes, Shape>(name);

  this.objectType(ref, options as PothosSchemaTypes.ObjectTypeOptions);

  return ref;
};

proto.simpleInterface = function simpleInterface<
  Fields extends FieldMap,
  Shape extends OutputShapeFromFields<Fields>,
  Interfaces extends InterfaceParam<SchemaTypes>[],
>(
  name: string,
  options: PothosSchemaTypes.SimpleInterfaceTypeOptions<SchemaTypes, Fields, Shape, Interfaces>,
) {
  const ref = new InterfaceRef<SchemaTypes, Shape>(name);

  this.interfaceType(ref, options as {});

  return ref;
};
