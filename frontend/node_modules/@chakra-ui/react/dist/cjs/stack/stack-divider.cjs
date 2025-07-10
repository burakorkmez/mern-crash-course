'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var factory = require('../system/factory.cjs');

const StackDivider = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  factory.chakra.div,
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

exports.StackDivider = StackDivider;
