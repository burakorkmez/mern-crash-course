import { isObject, mergeWith } from '@chakra-ui/utils';
import { calc } from './calc.mjs';
import { cssVar } from './css-var.mjs';
import { flattenTokens } from './flatten-tokens.mjs';
import { pseudoSelectors } from '../pseudos.mjs';

function tokenToCssVar(token, prefix) {
  return cssVar(String(token).replace(/\./g, "-"), void 0, prefix);
}
function createThemeVars(theme) {
  const flatTokens = flattenTokens(theme);
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
        const negativeValue = calc.negate(value);
        const negatedReference = calc.negate(reference);
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
    const normalizedValue = isObject(value) ? value : { default: value };
    cssVars = mergeWith(
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
          const conditionSelector = pseudoSelectors?.[conditionAlias] ?? conditionAlias;
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

export { createThemeVars };
