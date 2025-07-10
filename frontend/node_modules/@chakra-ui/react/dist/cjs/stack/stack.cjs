'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var stackItem = require('./stack-item.cjs');
var stack_utils = require('./stack.utils.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Stack = forwardRef.forwardRef((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline ? "row" : directionProp ?? "column";
  const dividerStyle = React.useMemo(
    () => stack_utils.getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = React.useMemo(() => {
    const validChildren = utils.getValidChildren(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = /* @__PURE__ */ jsxRuntime.jsx(stackItem.StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = React.cloneElement(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = utils.cx("chakra-stack", className);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      flexWrap: wrap,
      gap: hasDivider ? void 0 : spacing,
      className: _className,
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";

exports.Stack = Stack;
