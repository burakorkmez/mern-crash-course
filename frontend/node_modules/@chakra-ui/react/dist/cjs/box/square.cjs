'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var box = require('./box.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const Square = forwardRef.forwardRef(
  function Square2(props, ref) {
    const { size, centerContent = true, ...rest } = props;
    const styles = centerContent ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
    return /* @__PURE__ */ jsxRuntime.jsx(
      box.Box,
      {
        ref,
        boxSize: size,
        __css: {
          ...styles,
          flexShrink: 0,
          flexGrow: 0
        },
        ...rest
      }
    );
  }
);
Square.displayName = "Square";

exports.Square = Square;
