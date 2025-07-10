'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var progress_utils = require('./progress.utils.cjs');
var factory = require('../system/factory.cjs');

const Shape = (props) => {
  const { size, isIndeterminate, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: size,
        height: size,
        animation: isIndeterminate ? `${progress_utils.rotate} 2s linear infinite` : void 0
      },
      ...rest
    }
  );
};
Shape.displayName = "Shape";

exports.Shape = Shape;
