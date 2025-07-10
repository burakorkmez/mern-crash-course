import { isObject } from './is.mjs';
import { walkObject } from './walk-object.mjs';

function mapObject(obj, fn) {
  if (!isObject(obj))
    return fn(obj);
  return walkObject(obj, (value) => fn(value));
}

export { mapObject };
