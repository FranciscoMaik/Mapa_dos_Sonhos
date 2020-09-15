import Realm from 'realm';

import DreamSchema from '../schemas/DreamSchema';
import ObjectsDreamSchema from '../schemas/ObjectsDreamSchema';

export default function getRealm() {
  return Realm.open({
    schema: [DreamSchema, ObjectsDreamSchema],
  });
}
