'use client';
import { jsx } from 'react/jsx-runtime';
import { chakra } from '../system/factory.mjs';

const Circle = (props) => /* @__PURE__ */ jsx(chakra.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...props });
Circle.displayName = "Circle";

export { Circle };
