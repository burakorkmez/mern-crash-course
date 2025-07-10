'use client';
'use strict';

var useTheme = require('../system/use-theme.cjs');

const getBreakpoint = (theme, value) => {
  return theme?.breakpoints?.[value] ?? value;
};
function useQuery(props) {
  const { breakpoint = "", below, above } = props;
  const theme = useTheme.useTheme();
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

exports.useQuery = useQuery;
