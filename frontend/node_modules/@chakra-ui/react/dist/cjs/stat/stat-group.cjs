'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StatGroup = forwardRef.forwardRef(
  function StatGroup2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...props,
        ref,
        role: "group",
        className: utils.cx("chakra-stat__group", props.className),
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

exports.StatGroup = StatGroup;
