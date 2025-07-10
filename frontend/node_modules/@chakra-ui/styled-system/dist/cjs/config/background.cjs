'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const background = {
  background: index.t.colors("background"),
  backgroundColor: index.t.colors("backgroundColor"),
  backgroundImage: index.t.gradients("backgroundImage"),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions.transformFunctions.bgClip },
  bgSize: index.t.prop("backgroundSize"),
  bgPosition: index.t.prop("backgroundPosition"),
  bg: index.t.colors("background"),
  bgColor: index.t.colors("backgroundColor"),
  bgPos: index.t.prop("backgroundPosition"),
  bgRepeat: index.t.prop("backgroundRepeat"),
  bgAttachment: index.t.prop("backgroundAttachment"),
  bgGradient: index.t.gradients("backgroundImage"),
  bgClip: { transform: transformFunctions.transformFunctions.bgClip }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});

exports.background = background;
