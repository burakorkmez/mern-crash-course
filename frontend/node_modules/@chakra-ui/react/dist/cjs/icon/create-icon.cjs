'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var icon = require('./icon.cjs');
var forwardRef = require('../system/forward-ref.cjs');

function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {}
  } = options;
  const path = React.Children.toArray(options.path);
  const Comp = forwardRef.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(icon.Icon, { ref, viewBox, ...defaultProps, ...props, children: path.length ? path : /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "currentColor", d: pathDefinition }) }));
  Comp.displayName = displayName;
  return Comp;
}

exports.createIcon = createIcon;
