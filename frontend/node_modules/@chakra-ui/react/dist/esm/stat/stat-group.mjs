'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StatGroup = forwardRef(
  function StatGroup2(props, ref) {
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...props,
        ref,
        role: "group",
        className: cx("chakra-stat__group", props.className),
        __css: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "flex-start"
        }
      }
    );
  }
);
StatGroup.displayName = "StatGroup";

export { StatGroup };
