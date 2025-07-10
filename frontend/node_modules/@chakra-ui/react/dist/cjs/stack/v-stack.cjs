'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var stack = require('./stack.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const VStack = forwardRef.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(stack.Stack, { align: "center", ...props, direction: "column", ref }));
VStack.displayName = "VStack";

exports.VStack = VStack;
