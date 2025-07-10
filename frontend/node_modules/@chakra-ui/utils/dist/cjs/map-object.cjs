'use strict';

var is = require('./is.cjs');
var walkObject = require('./walk-object.cjs');

function mapObject(obj, fn) {
  if (!is.isObject(obj))
    return fn(obj);
  return walkObject.walkObject(obj, (value) => fn(value));
}

exports.mapObject = mapObject;
