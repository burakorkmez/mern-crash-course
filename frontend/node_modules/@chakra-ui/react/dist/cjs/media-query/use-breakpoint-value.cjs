'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var mediaQuery_utils = require('./media-query.utils.cjs');
var useBreakpoint = require('./use-breakpoint.cjs');
var useTheme = require('../system/use-theme.cjs');

function useBreakpointValue(values, arg) {
  const opts = utils.isObject(arg) ? arg : { fallback: arg ?? "base" };
  const breakpoint = useBreakpoint.useBreakpoint(opts);
  const theme = useTheme.useTheme();
  if (!breakpoint)
    return;
  const breakpoints = Array.from(theme.__breakpoints?.keys || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(utils.arrayToObjectNotation(values, breakpoints)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return mediaQuery_utils.getClosestValue(obj, breakpoint, breakpoints);
}

exports.useBreakpointValue = useBreakpointValue;
