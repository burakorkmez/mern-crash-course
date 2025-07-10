'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Grid = forwardRef.forwardRef(function Grid2(props, ref) {
  const {
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    ...rest
  } = props;
  const styles = {
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, __css: styles, ...rest });
});
Grid.displayName = "Grid";

exports.Grid = Grid;
