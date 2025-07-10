'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var button = require('./button.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const IconButton = forwardRef.forwardRef(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = React.isValidElement(element) ? React.cloneElement(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return /* @__PURE__ */ jsxRuntime.jsx(
      button.Button,
      {
        px: "0",
        py: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

exports.IconButton = IconButton;
