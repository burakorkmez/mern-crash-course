'use client';
import { isObject, arrayToObjectNotation } from '@chakra-ui/utils';
import { getClosestValue } from './media-query.utils.mjs';
import { useBreakpoint } from './use-breakpoint.mjs';
import { useTheme } from '../system/use-theme.mjs';

function useBreakpointValue(values, arg) {
  const opts = isObject(arg) ? arg : { fallback: arg ?? "base" };
  const breakpoint = useBreakpoint(opts);
  const theme = useTheme();
  if (!breakpoint)
    return;
  const breakpoints = Array.from(theme.__breakpoints?.keys || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(arrayToObjectNotation(values, breakpoints)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return getClosestValue(obj, breakpoint, breakpoints);
}

export { useBreakpointValue };
