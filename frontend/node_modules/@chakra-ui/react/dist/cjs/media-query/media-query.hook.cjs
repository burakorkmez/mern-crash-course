'use client';
'use strict';

var useMediaQuery = require('./use-media-query.cjs');

function usePrefersReducedMotion(options) {
  const [prefersReducedMotion] = useMediaQuery.useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    options
  );
  return prefersReducedMotion;
}
function useColorModePreference(options) {
  const [isLight, isDark] = useMediaQuery.useMediaQuery(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    options
  );
  if (isLight)
    return "light";
  if (isDark)
    return "dark";
  return void 0;
}

exports.useColorModePreference = useColorModePreference;
exports.usePrefersReducedMotion = usePrefersReducedMotion;
