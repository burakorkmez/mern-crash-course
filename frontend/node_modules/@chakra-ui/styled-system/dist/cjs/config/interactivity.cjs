'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.transformFunctions.outline },
  outlineOffset: true,
  outlineColor: index.t.colors("outlineColor")
};

exports.interactivity = interactivity;
