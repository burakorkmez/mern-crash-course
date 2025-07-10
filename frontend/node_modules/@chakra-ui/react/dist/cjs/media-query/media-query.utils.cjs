'use client';
'use strict';

var utils = require('@chakra-ui/utils');

function getClosestValue(values, breakpoint, breakpoints = utils.breakpoints) {
  let index = Object.keys(values).indexOf(breakpoint);
  if (index !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints[stopIndex];
    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index !== -1) {
    const key = breakpoints[index];
    return values[key];
  }
  return void 0;
}

exports.getClosestValue = getClosestValue;
