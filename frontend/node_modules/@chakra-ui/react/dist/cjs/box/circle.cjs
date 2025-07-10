'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var square = require('./square.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const Circle = forwardRef.forwardRef(
  function Circle2(props, ref) {
    const { size, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(square.Square, { size, ref, borderRadius: "9999px", ...rest });
  }
);
Circle.displayName = "Circle";

exports.Circle = Circle;
