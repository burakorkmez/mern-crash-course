'use strict';

var index = require('../utils/index.cjs');

const effect = {
  boxShadow: index.t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: index.t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: index.t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});

exports.effect = effect;
