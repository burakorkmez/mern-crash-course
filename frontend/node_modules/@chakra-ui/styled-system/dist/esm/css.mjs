import { runIfFn, isObject, mergeWith } from '@chakra-ui/utils';
import { pseudoSelectors } from './pseudos.mjs';
import { systemProps } from './system.mjs';
import { expandResponsive } from './utils/expand-responsive.mjs';
import { splitByComma } from './utils/split-by-comma.mjs';

function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
const isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar(value);
const resolveTokenValue = (theme, value) => {
  if (value == null)
    return value;
  const getVar = (val) => theme.__cssMap?.[val]?.varRef;
  const getValue = (val) => getVar(val) ?? val;
  const [tokenValue, fallbackValue] = splitByComma(value);
  value = getVar(tokenValue) ?? getValue(fallbackValue) ?? getValue(value);
  return value;
};
function getCss(options) {
  const { configs = {}, pseudos = {}, theme } = options;
  const css2 = (stylesOrFn, nested = false) => {
    const _styles = runIfFn(stylesOrFn, theme);
    const styles = expandResponsive(_styles)(theme);
    let computedStyles = {};
    for (let key in styles) {
      const valueOrFn = styles[key];
      let value = runIfFn(valueOrFn, theme);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme, value);
      }
      let config = configs[key];
      if (config === true) {
        config = { property: key };
      }
      if (isObject(value)) {
        computedStyles[key] = computedStyles[key] ?? {};
        computedStyles[key] = mergeWith(
          {},
          computedStyles[key],
          css2(value, true)
        );
        continue;
      }
      let rawValue = config?.transform?.(value, theme, _styles) ?? value;
      rawValue = config?.processResult ? css2(rawValue, true) : rawValue;
      const configProperty = runIfFn(config?.property, theme);
      if (!nested && config?.static) {
        const staticStyles = runIfFn(config.static, theme);
        computedStyles = mergeWith({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = mergeWith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = mergeWith({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css2;
}
const css = (styles) => (theme) => {
  const cssFn = getCss({
    theme,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles);
};

export { css, getCss };
