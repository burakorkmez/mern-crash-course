'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var skeleton = require('./skeleton.cjs');

const SkeletonCircle = ({
  size = "2rem",
  ...rest
}) => /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { borderRadius: "full", boxSize: size, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

exports.SkeletonCircle = SkeletonCircle;
