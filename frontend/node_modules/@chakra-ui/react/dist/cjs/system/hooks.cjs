'use client';
'use strict';

var useTheme = require('./use-theme.cjs');
var colorModeContext = require('../color-mode/color-mode-context.cjs');

function useChakra() {
  const colorModeResult = colorModeContext.useColorMode();
  const theme = useTheme.useTheme();
  return { ...colorModeResult, theme };
}
function getBreakpointValue(theme, value, fallback) {
  if (value == null)
    return value;
  const getValue = (val) => theme.__breakpoints?.asArray?.[val];
  return getValue(value) ?? getValue(fallback) ?? fallback;
}
function getTokenValue(theme, value, fallback) {
  if (value == null)
    return value;
  const getValue = (val) => theme.__cssMap?.[val]?.value;
  return getValue(value) ?? getValue(fallback) ?? fallback;
}
function useToken(scale, token, fallback) {
  const theme = useTheme.useTheme();
  return getToken(scale, token, fallback)(theme);
}
function getToken(scale, token, fallback) {
  const _token = Array.isArray(token) ? token : [token];
  const _fallback = Array.isArray(fallback) ? fallback : [fallback];
  return (theme) => {
    const fallbackArr = _fallback.filter(Boolean);
    const result = _token.map((token2, index) => {
      if (scale === "breakpoints") {
        return getBreakpointValue(theme, token2, fallbackArr[index] ?? token2);
      }
      const path = `${scale}.${token2}`;
      return getTokenValue(theme, path, fallbackArr[index] ?? token2);
    });
    return Array.isArray(token) ? result : result[0];
  };
}

exports.getToken = getToken;
exports.useChakra = useChakra;
exports.useToken = useToken;
