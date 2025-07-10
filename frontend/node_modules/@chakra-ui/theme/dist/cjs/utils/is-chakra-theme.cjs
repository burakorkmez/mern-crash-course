'use strict';

var utils = require('@chakra-ui/utils');

const requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!utils.isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}

exports.isChakraTheme = isChakraTheme;
exports.requiredChakraThemeKeys = requiredChakraThemeKeys;
