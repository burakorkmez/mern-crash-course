'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const Center = factory.chakra("div", {
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
const AbsoluteCenter = forwardRef.forwardRef(
  function AbsoluteCenter2(props, ref) {
    const { axis = "both", ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        __css: centerStyles[axis],
        ...rest,
        position: "absolute"
      }
    );
  }
);

exports.AbsoluteCenter = AbsoluteCenter;
exports.Center = Center;
