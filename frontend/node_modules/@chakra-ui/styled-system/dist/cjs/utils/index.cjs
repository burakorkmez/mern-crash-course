'use strict';

var createTransform = require('./create-transform.cjs');
var pipe = require('./pipe.cjs');
var propConfig = require('./prop-config.cjs');
var transformFunctions = require('./transform-functions.cjs');

const t = {
  borderWidths: propConfig.toConfig("borderWidths"),
  borderStyles: propConfig.toConfig("borderStyles"),
  colors: propConfig.toConfig("colors"),
  borders: propConfig.toConfig("borders"),
  gradients: propConfig.toConfig("gradients", transformFunctions.transformFunctions.gradient),
  radii: propConfig.toConfig("radii", transformFunctions.transformFunctions.px),
  space: propConfig.toConfig("space", pipe.pipe(transformFunctions.transformFunctions.vh, transformFunctions.transformFunctions.px)),
  spaceT: propConfig.toConfig("space", pipe.pipe(transformFunctions.transformFunctions.vh, transformFunctions.transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.transformFunctions.degree };
  },
  prop(property, scale, transform) {
    return {
      property,
      scale,
      ...scale && {
        transform: createTransform.createTransform({ scale, transform })
      }
    };
  },
  propT(property, transform) {
    return { property, transform };
  },
  sizes: propConfig.toConfig("sizes", pipe.pipe(transformFunctions.transformFunctions.vh, transformFunctions.transformFunctions.px)),
  sizesT: propConfig.toConfig("sizes", pipe.pipe(transformFunctions.transformFunctions.vh, transformFunctions.transformFunctions.fraction)),
  shadows: propConfig.toConfig("shadows"),
  logical: propConfig.logical,
  blur: propConfig.toConfig("blur", transformFunctions.transformFunctions.blur)
};

exports.transforms = transformFunctions.transformFunctions;
exports.t = t;
