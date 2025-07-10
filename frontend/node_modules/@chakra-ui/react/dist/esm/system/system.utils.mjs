'use client';
import { isString } from '@chakra-ui/utils';

function isTag(target) {
  return isString(target) && (process.env.NODE_ENV !== "production" ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}
function getDisplayName(primitive) {
  return isTag(primitive) ? `chakra.${primitive}` : getComponentName(primitive);
}
function getComponentName(primitive) {
  return (process.env.NODE_ENV !== "production" ? isString(primitive) && primitive : false) || !isString(primitive) && primitive.displayName || !isString(primitive) && primitive.name || "ChakraComponent";
}

export { getDisplayName, isTag };
