'use client';
'use strict';

var theme = require('@chakra-ui/theme');
var utils = require('@chakra-ui/utils');

function isFunction(value) {
  return typeof value === "function";
}
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
const createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if (theme.isChakraTheme(activeTheme) && // this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
const extendTheme = createExtendTheme(theme.theme);
const extendBaseTheme = createExtendTheme(theme.baseTheme);
function mergeThemeOverride(...overrides) {
  return utils.mergeWith({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction(source) ? source(...args) : source;
      const overrideValue = isFunction(override) ? override(...args) : override;
      return utils.mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  if (utils.isObject(source) && utils.isArray(override)) {
    return override;
  }
  if (utils.isArray(source) && utils.isObject(override)) {
    return override;
  }
  return void 0;
}

exports.createExtendTheme = createExtendTheme;
exports.extendBaseTheme = extendBaseTheme;
exports.extendTheme = extendTheme;
exports.mergeThemeOverride = mergeThemeOverride;
