'use client';
import { jsx } from 'react/jsx-runtime';
import { Square } from './square.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const Circle = forwardRef(
  function Circle2(props, ref) {
    const { size, ...rest } = props;
    return /* @__PURE__ */ jsx(Square, { size, ref, borderRadius: "9999px", ...rest });
  }
);
Circle.displayName = "Circle";

export { Circle };
