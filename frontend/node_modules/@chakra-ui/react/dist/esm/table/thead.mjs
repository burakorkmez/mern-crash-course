'use client';
import { jsx } from 'react/jsx-runtime';
import { useTableStyles } from './table.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.thead, { ...props, ref, __css: styles.thead });
});

export { Thead };
