'use client';
import { isObject } from '@chakra-ui/utils';
import { useMediaQuery } from './use-media-query.mjs';
import { useTheme } from '../system/use-theme.mjs';

function useBreakpoint(arg) {
  const opts = isObject(arg) ? arg : { fallback: arg ?? "base" };
  const theme = useTheme();
  const breakpoints = theme.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    breakpoints.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index = values.findIndex((value) => value == true);
  return breakpoints[index]?.breakpoint ?? opts.fallback;
}

export { useBreakpoint };
