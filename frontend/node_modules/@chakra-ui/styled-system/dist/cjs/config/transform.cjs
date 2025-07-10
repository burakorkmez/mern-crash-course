'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const transform = {
  clipPath: true,
  transform: index.t.propT("transform", transformFunctions.transformFunctions.transform),
  transformOrigin: true,
  translateX: index.t.spaceT("--chakra-translate-x"),
  translateY: index.t.spaceT("--chakra-translate-y"),
  skewX: index.t.degreeT("--chakra-skew-x"),
  skewY: index.t.degreeT("--chakra-skew-y"),
  scaleX: index.t.prop("--chakra-scale-x"),
  scaleY: index.t.prop("--chakra-scale-y"),
  scale: index.t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: index.t.degreeT("--chakra-rotate")
};

exports.transform = transform;
