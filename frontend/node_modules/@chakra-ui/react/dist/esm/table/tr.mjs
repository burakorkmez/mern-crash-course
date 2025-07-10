'use client';
import { jsx } from 'react/jsx-runtime';
import { useTableStyles } from './table.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tr, { ...props, ref, __css: styles.tr });
});

export { Tr };
