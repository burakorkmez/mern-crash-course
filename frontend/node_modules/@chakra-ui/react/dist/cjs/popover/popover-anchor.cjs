'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var popoverContext = require('./popover-context.cjs');
var elementRef = require('../element-ref.cjs');

function PopoverAnchor(props) {
  const child = React.Children.only(props.children);
  const { getAnchorProps } = popoverContext.usePopoverContext();
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: React.cloneElement(child, getAnchorProps(child.props, elementRef.getElementRef(child))) });
}
PopoverAnchor.displayName = "PopoverAnchor";

exports.PopoverAnchor = PopoverAnchor;
