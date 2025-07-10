'use client';
import { useTheme } from '../system/use-theme.mjs';

const getBreakpoint = (theme, value) => {
  return theme?.breakpoints?.[value] ?? value;
};
function useQuery(props) {
  const { breakpoint = "", below, above } = props;
  const theme = useTheme();
  const bpBelow = getBreakpoint(theme, below);
  const bpAbove = getBreakpoint(theme, above);
  let query = breakpoint;
  if (bpBelow) {
    query = `(max-width: ${bpBelow})`;
  } else if (bpAbove) {
    query = `(min-width: ${bpAbove})`;
  }
  return query;
}

export { useQuery };
