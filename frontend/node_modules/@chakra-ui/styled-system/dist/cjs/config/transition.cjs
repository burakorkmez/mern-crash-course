'use strict';

var index = require('../utils/index.cjs');

const transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: index.t.prop("transitionDuration", "transition.duration"),
  transitionProperty: index.t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: index.t.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
};

exports.transition = transition;
