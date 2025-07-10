'use client';
import { jsx } from 'react/jsx-runtime';
import { chakra } from '../system/factory.mjs';

const StackItem = (props) => /* @__PURE__ */ jsx(
  chakra.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";

export { StackItem };
