'use client';
import { jsx } from 'react/jsx-runtime';
import { useTableStyles } from './table.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Th = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsx(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric
      }
    );
  }
);

export { Th };
