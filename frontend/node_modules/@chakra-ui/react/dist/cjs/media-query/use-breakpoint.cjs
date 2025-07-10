'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var useMediaQuery = require('./use-media-query.cjs');
var useTheme = require('../system/use-theme.cjs');

function useBreakpoint(arg) {
  const opts = utils.isObject(arg) ? arg : { fallback: arg ?? "base" };
  const theme = useTheme.useTheme();
  const breakpoints = theme.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery.useMediaQuery(
    breakpoints.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index = values.findIndex((value) => value == true);
  return breakpoints[index]?.breakpoint ?? opts.fallback;
}

exports.useBreakpoint = useBreakpoint;
