'use client';
import { jsx } from 'react/jsx-runtime';
import { chakra } from '../system/factory.mjs';

const StackDivider = (props) => /* @__PURE__ */ jsx(
  chakra.div,
  {
    className: "chakra-stack__divider",
    ...props,
    __css: {
      ...props["__css"],
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto"
    }
  }
);
StackDivider.displayName = "StackDivider";

export { StackDivider };
