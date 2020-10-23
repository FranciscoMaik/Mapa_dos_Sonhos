export default class ObjectsDreamSchema {
  static schema = {
    name: 'ObjectDream',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      name: 'string',
      created: 'string',
      id_dream: 'string',
      id_object: 'int',
      selected: 'bool',
    },
  };
}
