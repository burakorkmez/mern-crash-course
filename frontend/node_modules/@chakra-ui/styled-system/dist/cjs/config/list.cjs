'use strict';

var index = require('../utils/index.cjs');

const list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: index.t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: index.t.prop("listStyleImage")
};

exports.list = list;
