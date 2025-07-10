'use strict';

var index = require('../utils/index.cjs');

const color = {
  color: index.t.colors("color"),
  textColor: index.t.colors("color"),
  fill: index.t.colors("fill"),
  stroke: index.t.colors("stroke"),
  accentColor: index.t.colors("accentColor"),
  textFillColor: index.t.colors("textFillColor")
};

exports.color = color;
