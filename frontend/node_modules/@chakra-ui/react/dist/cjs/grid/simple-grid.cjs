'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var grid = require('./grid.cjs');
var useTheme = require('../system/use-theme.cjs');
var hooks = require('../system/hooks.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const SimpleGrid = forwardRef.forwardRef(
  function SimpleGrid2(props, ref) {
    const { columns, spacingX, spacingY, spacing, minChildWidth, ...rest } = props;
    const theme = useTheme.useTheme();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, theme) : countToColumns(columns);
    return /* @__PURE__ */ jsxRuntime.jsx(
      grid.Grid,
      {
        ref,
        gap: spacing,
        columnGap: spacingX,
        rowGap: spacingY,
        templateColumns,
        ...rest
      }
    );
  }
);
SimpleGrid.displayName = "SimpleGrid";
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, theme) {
  return utils.mapResponsive(width, (value) => {
    const _value = hooks.getToken("sizes", value, toPx(value))(theme);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return utils.mapResponsive(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

exports.SimpleGrid = SimpleGrid;
