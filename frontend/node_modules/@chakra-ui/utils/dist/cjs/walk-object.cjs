'use strict';

var is = require('./is.cjs');

function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    if (is.isObject(value) || Array.isArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = getKey?.(prop) ?? prop;
        const childPath = [...path, key];
        if (stop?.(value, childPath)) {
          return predicate(value, path);
        }
        result[key] = inner(child, childPath);
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}

exports.walkObject = walkObject;
