'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

function spanFn(span) {
  return utils.mapResponsive(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
const GridItem = forwardRef.forwardRef(
  function GridItem2(props, ref) {
    const {
      area,
      colSpan,
      colStart,
      colEnd,
      rowEnd,
      rowSpan,
      rowStart,
      ...rest
    } = props;
    const styles = utils.compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd
    });
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, __css: styles, ...rest });
  }
);
GridItem.displayName = "GridItem";

exports.GridItem = GridItem;
