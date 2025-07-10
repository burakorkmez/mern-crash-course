'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var nativeImage = require('./native-image.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Img = forwardRef.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.img, { ref, as: nativeImage.NativeImage, className: "chakra-image", ...props }));

exports.Img = Img;
