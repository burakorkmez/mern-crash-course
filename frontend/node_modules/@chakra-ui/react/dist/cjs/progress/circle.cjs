'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var factory = require('../system/factory.cjs');

const Circle = (props) => /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...props });
Circle.displayName = "Circle";

exports.Circle = Circle;
