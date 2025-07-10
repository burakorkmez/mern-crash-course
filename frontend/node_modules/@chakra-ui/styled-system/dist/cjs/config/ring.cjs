'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const ring = {
  ring: { transform: transformFunctions.transformFunctions.ring },
  ringColor: index.t.colors("--chakra-ring-color"),
  ringOffset: index.t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: index.t.colors("--chakra-ring-offset-color"),
  ringInset: index.t.prop("--chakra-ring-inset")
};

exports.ring = ring;
