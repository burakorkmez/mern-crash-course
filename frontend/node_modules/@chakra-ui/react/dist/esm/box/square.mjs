'use client';
import { jsx } from 'react/jsx-runtime';
import { Box } from './box.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const Square = forwardRef(
  function Square2(props, ref) {
    const { size, centerContent = true, ...rest } = props;
    const styles = centerContent ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
    return /* @__PURE__ */ jsx(
      Box,
      {
        ref,
        boxSize: size,
        __css: {
          ...styles,
          flexShrink: 0,
          flexGrow: 0
        },
        ...rest
      }
    );
  }
);
Square.displayName = "Square";

export { Square };
