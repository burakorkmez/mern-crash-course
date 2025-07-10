'use strict';

var createTransform = require('./create-transform.cjs');

function toConfig(scale, transform) {
  return (property) => {
    const result = { property, scale };
    result.transform = createTransform.createTransform({
      scale,
      transform
    });
    return result;
  };
}
const getRtl = ({ rtl, ltr }) => (theme) => theme.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale, transform } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform.createTransform({
      scale,
      compose: transform
    }) : transform
  };
}

exports.logical = logical;
exports.toConfig = toConfig;
