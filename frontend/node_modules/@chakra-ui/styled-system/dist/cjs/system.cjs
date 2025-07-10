'use strict';

var utils = require('@chakra-ui/utils');
var pseudos = require('./pseudos.cjs');
var background = require('./config/background.cjs');
var border = require('./config/border.cjs');
var color = require('./config/color.cjs');
var flexbox = require('./config/flexbox.cjs');
var layout = require('./config/layout.cjs');
var filter = require('./config/filter.cjs');
var ring = require('./config/ring.cjs');
var interactivity = require('./config/interactivity.cjs');
var grid = require('./config/grid.cjs');
var others = require('./config/others.cjs');
var position = require('./config/position.cjs');
var effect = require('./config/effect.cjs');
var space = require('./config/space.cjs');
var scroll = require('./config/scroll.cjs');
var typography = require('./config/typography.cjs');
var textDecoration = require('./config/text-decoration.cjs');
var transform = require('./config/transform.cjs');
var list = require('./config/list.cjs');
var transition = require('./config/transition.cjs');

const systemProps = utils.mergeWith(
  {},
  background.background,
  border.border,
  color.color,
  flexbox.flexbox,
  layout.layout,
  filter.filter,
  ring.ring,
  interactivity.interactivity,
  grid.grid,
  others.others,
  position.position,
  effect.effect,
  space.space,
  scroll.scroll,
  typography.typography,
  textDecoration.textDecoration,
  transform.transform,
  list.list,
  transition.transition
);
const layoutSystem = Object.assign({}, space.space, layout.layout, flexbox.flexbox, grid.grid, position.position);
const layoutPropNames = Object.keys(
  layoutSystem
);
const propNames = [...Object.keys(systemProps), ...pseudos.pseudoPropNames];
const styleProps = { ...systemProps, ...pseudos.pseudoSelectors };
const isStyleProp = (prop) => prop in styleProps;

exports.isStyleProp = isStyleProp;
exports.layoutPropNames = layoutPropNames;
exports.propNames = propNames;
exports.systemProps = systemProps;
