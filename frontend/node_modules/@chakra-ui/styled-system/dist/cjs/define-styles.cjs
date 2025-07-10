'use strict';

function defineStyle(styles) {
  return styles;
}
function defineStyleConfig(config) {
  return config;
}
function createMultiStyleConfigHelpers(parts) {
  return {
    definePartsStyle(config) {
      return config;
    },
    defineMultiStyleConfig(config) {
      return { parts, ...config };
    }
  };
}

exports.createMultiStyleConfigHelpers = createMultiStyleConfigHelpers;
exports.defineStyle = defineStyle;
exports.defineStyleConfig = defineStyleConfig;
