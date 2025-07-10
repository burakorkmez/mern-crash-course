'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Flex = forwardRef.forwardRef(function Flex2(props, ref) {
  const { direction, align, justify, wrap, basis, grow, shrink, ...rest } = props;
  const styles = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, __css: styles, ...rest });
});
Flex.displayName = "Flex";

exports.Flex = Flex;
