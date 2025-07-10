'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var factory = require('../system/factory.cjs');

function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = React.isValidElement(children) ? React.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = utils.cx("chakra-button__icon", className);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

exports.ButtonIcon = ButtonIcon;
