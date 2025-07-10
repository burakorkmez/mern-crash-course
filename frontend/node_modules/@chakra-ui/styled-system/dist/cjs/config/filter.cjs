'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const filter = {
  filter: { transform: transformFunctions.transformFunctions.filter },
  blur: index.t.blur("--chakra-blur"),
  brightness: index.t.propT("--chakra-brightness", transformFunctions.transformFunctions.brightness),
  contrast: index.t.propT("--chakra-contrast", transformFunctions.transformFunctions.contrast),
  hueRotate: index.t.propT("--chakra-hue-rotate", transformFunctions.transformFunctions.hueRotate),
  invert: index.t.propT("--chakra-invert", transformFunctions.transformFunctions.invert),
  saturate: index.t.propT("--chakra-saturate", transformFunctions.transformFunctions.saturate),
  dropShadow: index.t.propT("--chakra-drop-shadow", transformFunctions.transformFunctions.dropShadow),
  backdropFilter: { transform: transformFunctions.transformFunctions.backdropFilter },
  backdropBlur: index.t.blur("--chakra-backdrop-blur"),
  backdropBrightness: index.t.propT(
    "--chakra-backdrop-brightness",
    transformFunctions.transformFunctions.brightness
  ),
  backdropContrast: index.t.propT("--chakra-backdrop-contrast", transformFunctions.transformFunctions.contrast),
  backdropHueRotate: index.t.propT(
    "--chakra-backdrop-hue-rotate",
    transformFunctions.transformFunctions.hueRotate
  ),
  backdropInvert: index.t.propT("--chakra-backdrop-invert", transformFunctions.transformFunctions.invert),
  backdropSaturate: index.t.propT("--chakra-backdrop-saturate", transformFunctions.transformFunctions.saturate)
};

exports.filter = filter;
