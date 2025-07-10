'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var factory = require('../system/factory.cjs');

const StackItem = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  factory.chakra.div,
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

exports.StackItem = StackItem;
