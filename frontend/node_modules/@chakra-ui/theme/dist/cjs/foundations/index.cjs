'use strict';

var borders = require('./borders.cjs');
var breakpoints = require('./breakpoints.cjs');
var colors = require('./colors.cjs');
var radius = require('./radius.cjs');
var shadows = require('./shadows.cjs');
var sizes = require('./sizes.cjs');
var spacing = require('./spacing.cjs');
var transition = require('./transition.cjs');
var typography = require('./typography.cjs');
var zIndex = require('./z-index.cjs');
var blur = require('./blur.cjs');

const foundations = {
  breakpoints,
  zIndices: zIndex,
  radii: radius,
  blur,
  colors,
  ...typography,
  sizes,
  shadows,
  space: spacing.spacing,
  borders,
  transition
};

exports.foundations = foundations;
