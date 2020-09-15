export default class DreamSchema {
  static schema = {
    name: 'Dream',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      name: 'string',
      created: 'string',
    },
  };
}
