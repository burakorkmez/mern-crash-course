'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var popoverContext = require('./popover-context.cjs');
var elementRef = require('../element-ref.cjs');

function PopoverTrigger(props) {
  const child = React.Children.only(props.children);
  const { getTriggerProps } = popoverContext.usePopoverContext();
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: React.cloneElement(child, getTriggerProps(child.props, elementRef.getElementRef(child))) });
}
PopoverTrigger.displayName = "PopoverTrigger";

exports.PopoverTrigger = PopoverTrigger;
