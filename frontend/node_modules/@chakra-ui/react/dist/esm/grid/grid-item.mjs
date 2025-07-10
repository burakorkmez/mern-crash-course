'use client';
import { jsx } from 'react/jsx-runtime';
import { compact, mapResponsive } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

function spanFn(span) {
  return mapResponsive(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
const GridItem = forwardRef(
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
    const styles = compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd
    });
    return /* @__PURE__ */ jsx(chakra.div, { ref, __css: styles, ...rest });
  }
);
GridItem.displayName = "GridItem";

export { GridItem };
