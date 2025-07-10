'use client';
import { jsx } from 'react/jsx-runtime';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
Center.displayName = "Center";
const centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
const AbsoluteCenter = forwardRef(
  function AbsoluteCenter2(props, ref) {
    const { axis = "both", ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        __css: centerStyles[axis],
        ...rest,
        position: "absolute"
      }
    );
  }
);

export { AbsoluteCenter, Center };
