'use strict';

var index = require('../utils/index.cjs');

const textDecoration = {
  textDecorationColor: index.t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: index.t.shadows("textShadow")
};

exports.textDecoration = textDecoration;
