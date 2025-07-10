'use client';
import { jsx } from 'react/jsx-runtime';
import { mapResponsive } from '@chakra-ui/utils';
import { Grid } from './grid.mjs';
import { useTheme } from '../system/use-theme.mjs';
import { getToken } from '../system/hooks.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const SimpleGrid = forwardRef(
  function SimpleGrid2(props, ref) {
    const { columns, spacingX, spacingY, spacing, minChildWidth, ...rest } = props;
    const theme = useTheme();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, theme) : countToColumns(columns);
    return /* @__PURE__ */ jsx(
      Grid,
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
  return mapResponsive(width, (value) => {
    const _value = getToken("sizes", value, toPx(value))(theme);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return mapResponsive(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

export { SimpleGrid };
