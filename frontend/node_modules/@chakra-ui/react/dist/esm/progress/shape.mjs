'use client';
import { jsx } from 'react/jsx-runtime';
import { rotate } from './progress.utils.mjs';
import { chakra } from '../system/factory.mjs';

const Shape = (props) => {
  const { size, isIndeterminate, ...rest } = props;
  return /* @__PURE__ */ jsx(
    chakra.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: size,
        height: size,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : void 0
      },
      ...rest
    }
  );
};
Shape.displayName = "Shape";

export { Shape };
