'use client';
'use strict';

var utils = require('@chakra-ui/utils');

function isTag(target) {
  return utils.isString(target) && (process.env.NODE_ENV !== "production" ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}
function getDisplayName(primitive) {
  return isTag(primitive) ? `chakra.${primitive}` : getComponentName(primitive);
}
function getComponentName(primitive) {
  return (process.env.NODE_ENV !== "production" ? utils.isString(primitive) && primitive : false) || !utils.isString(primitive) && primitive.displayName || !utils.isString(primitive) && primitive.name || "ChakraComponent";
}

exports.getDisplayName = getDisplayName;
exports.isTag = isTag;
