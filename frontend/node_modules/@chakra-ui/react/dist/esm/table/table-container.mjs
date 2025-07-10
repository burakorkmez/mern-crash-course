'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const TableContainer = forwardRef(
  (props, ref) => {
    const { overflow, overflowX, className, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: overflow ?? overflowX ?? "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

export { TableContainer };
