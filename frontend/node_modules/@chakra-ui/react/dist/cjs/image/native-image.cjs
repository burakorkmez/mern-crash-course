'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var forwardRef = require('../system/forward-ref.cjs');

const NativeImage = forwardRef.forwardRef(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";

exports.NativeImage = NativeImage;
