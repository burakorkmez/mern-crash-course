'use client';
import { isChakraTheme, theme, baseTheme } from '@chakra-ui/theme';
import { mergeWith, isObject, isArray } from '@chakra-ui/utils';

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
    if (isChakraTheme(activeTheme) && // this ensures backward compatibility
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
const extendTheme = createExtendTheme(theme);
const extendBaseTheme = createExtendTheme(baseTheme);
function mergeThemeOverride(...overrides) {
  return mergeWith({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction(source) ? source(...args) : source;
      const overrideValue = isFunction(override) ? override(...args) : override;
      return mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  if (isObject(source) && isArray(override)) {
    return override;
  }
  if (isArray(source) && isObject(override)) {
    return override;
  }
  return void 0;
}

export { createExtendTheme, extendBaseTheme, extendTheme, mergeThemeOverride };
