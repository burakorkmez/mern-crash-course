'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions.transformFunctions.flexDirection },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: index.t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: index.t.space("gap"),
  rowGap: index.t.space("rowGap"),
  columnGap: index.t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});

exports.flexbox = flexbox;
