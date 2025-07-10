'use client';
import { jsx } from 'react/jsx-runtime';
import { useTableStyles } from './table.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const TableCaption = forwardRef(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles = useTableStyles();
    return /* @__PURE__ */ jsx(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

export { TableCaption };
