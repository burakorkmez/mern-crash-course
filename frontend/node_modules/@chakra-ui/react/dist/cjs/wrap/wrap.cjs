'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var React = require('react');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Wrap = forwardRef.forwardRef(function Wrap2(props, ref) {
  const {
    spacing = "0.5rem",
    spacingX,
    spacingY,
    children,
    justify,
    direction,
    align,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const _children = React.useMemo(
    () => shouldWrapChildren ? React.Children.map(children, (child, index) => /* @__PURE__ */ jsxRuntime.jsx(WrapItem, { children: child }, index)) : children,
    [children, shouldWrapChildren]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, className: utils.cx("chakra-wrap", className), ...rest, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        listStyleType: "none",
        gap: spacing,
        columnGap: spacingX,
        rowGap: spacingY,
        padding: "0"
      },
      children: _children
    }
  ) });
});
Wrap.displayName = "Wrap";
const WrapItem = forwardRef.forwardRef(
  function WrapItem2(props, ref) {
    const { className, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.li,
      {
        ref,
        __css: { display: "flex", alignItems: "flex-start" },
        className: utils.cx("chakra-wrap__listitem", className),
        ...rest
      }
    );
  }
);
WrapItem.displayName = "WrapItem";

exports.Wrap = Wrap;
exports.WrapItem = WrapItem;
