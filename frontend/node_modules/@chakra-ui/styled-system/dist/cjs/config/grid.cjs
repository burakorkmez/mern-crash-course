'use strict';

var index = require('../utils/index.cjs');

const grid = {
  gridGap: index.t.space("gridGap"),
  gridColumnGap: index.t.space("gridColumnGap"),
  gridRowGap: index.t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};

exports.grid = grid;
