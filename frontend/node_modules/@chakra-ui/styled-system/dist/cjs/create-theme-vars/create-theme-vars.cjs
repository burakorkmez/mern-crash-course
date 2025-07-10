'use strict';

var utils = require('@chakra-ui/utils');
var calc = require('./calc.cjs');
var cssVar = require('./css-var.cjs');
var flattenTokens = require('./flatten-tokens.cjs');
var pseudos = require('../pseudos.cjs');

function tokenToCssVar(token, prefix) {
  return cssVar.cssVar(String(token).replace(/\./g, "-"), void 0, prefix);
}
function createThemeVars(theme) {
  const flatTokens = flattenTokens.flattenTokens(theme);
  const cssVarPrefix = theme.config?.cssVarPrefix;
  let cssVars = {};
  const cssMap = {};
  function lookupToken(token, maybeToken) {
    const scale = String(token).split(".")[0];
    const withScale = [scale, maybeToken].join(".");
    const resolvedTokenValue = flatTokens[withScale];
    if (!resolvedTokenValue)
      return maybeToken;
    const { reference } = tokenToCssVar(withScale, cssVarPrefix);
    return reference;
  }
  for (const [token, tokenValue] of Object.entries(flatTokens)) {
    const { isSemantic, value } = tokenValue;
    const { variable, reference } = tokenToCssVar(token, cssVarPrefix);
    if (!isSemantic) {
      if (token.startsWith("space")) {
        const keys = token.split(".");
        const [firstKey, ...referenceKeys] = keys;
        const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`;
        const negativeValue = calc.calc.negate(value);
        const negatedReference = calc.calc.negate(reference);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          var: variable,
          varRef: negatedReference
        };
      }
      cssVars[variable] = value;
      cssMap[token] = {
        value,
        var: variable,
        varRef: reference
      };
      continue;
    }
    const normalizedValue = utils.isObject(value) ? value : { default: value };
    cssVars = utils.mergeWith(
      cssVars,
      Object.entries(normalizedValue).reduce(
        (acc, [conditionAlias, conditionValue]) => {
          if (!conditionValue)
            return acc;
          const tokenReference = lookupToken(token, `${conditionValue}`);
          if (conditionAlias === "default") {
            acc[variable] = tokenReference;
            return acc;
          }
          const conditionSelector = pseudos.pseudoSelectors?.[conditionAlias] ?? conditionAlias;
          acc[conditionSelector] = { [variable]: tokenReference };
          return acc;
        },
        {}
      )
    );
    cssMap[token] = {
      value: reference,
      var: variable,
      varRef: reference
    };
  }
  return {
    cssVars,
    cssMap
  };
}

exports.createThemeVars = createThemeVars;
