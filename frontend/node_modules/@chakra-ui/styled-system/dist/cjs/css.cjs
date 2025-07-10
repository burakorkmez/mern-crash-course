'use strict';

var utils = require('@chakra-ui/utils');
var pseudos = require('./pseudos.cjs');
var system = require('./system.cjs');
var expandResponsive = require('./utils/expand-responsive.cjs');
var splitByComma = require('./utils/split-by-comma.cjs');

function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
const isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar(value);
const resolveTokenValue = (theme, value) => {
  if (value == null)
    return value;
  const getVar = (val) => theme.__cssMap?.[val]?.varRef;
  const getValue = (val) => getVar(val) ?? val;
  const [tokenValue, fallbackValue] = splitByComma.splitByComma(value);
  value = getVar(tokenValue) ?? getValue(fallbackValue) ?? getValue(value);
  return value;
};
function getCss(options) {
  const { configs = {}, pseudos = {}, theme } = options;
  const css2 = (stylesOrFn, nested = false) => {
    const _styles = utils.runIfFn(stylesOrFn, theme);
    const styles = expandResponsive.expandResponsive(_styles)(theme);
    let computedStyles = {};
    for (let key in styles) {
      const valueOrFn = styles[key];
      let value = utils.runIfFn(valueOrFn, theme);
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
      if (utils.isObject(value)) {
        computedStyles[key] = computedStyles[key] ?? {};
        computedStyles[key] = utils.mergeWith(
          {},
          computedStyles[key],
          css2(value, true)
        );
        continue;
      }
      let rawValue = config?.transform?.(value, theme, _styles) ?? value;
      rawValue = config?.processResult ? css2(rawValue, true) : rawValue;
      const configProperty = utils.runIfFn(config?.property, theme);
      if (!nested && config?.static) {
        const staticStyles = utils.runIfFn(config.static, theme);
        computedStyles = utils.mergeWith({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && utils.isObject(rawValue)) {
          computedStyles = utils.mergeWith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (utils.isObject(rawValue)) {
        computedStyles = utils.mergeWith({}, computedStyles, rawValue);
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
    pseudos: pseudos.pseudoSelectors,
    configs: system.systemProps
  });
  return cssFn(styles);
};

exports.css = css;
exports.getCss = getCss;
