'use strict';

var index = require('../utils/index.cjs');

const space = {
  margin: index.t.spaceT("margin"),
  marginTop: index.t.spaceT("marginTop"),
  marginBlockStart: index.t.spaceT("marginBlockStart"),
  marginRight: index.t.spaceT("marginRight"),
  marginInlineEnd: index.t.spaceT("marginInlineEnd"),
  marginBottom: index.t.spaceT("marginBottom"),
  marginBlockEnd: index.t.spaceT("marginBlockEnd"),
  marginLeft: index.t.spaceT("marginLeft"),
  marginInlineStart: index.t.spaceT("marginInlineStart"),
  marginX: index.t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: index.t.spaceT("marginInline"),
  marginY: index.t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: index.t.spaceT("marginBlock"),
  padding: index.t.space("padding"),
  paddingTop: index.t.space("paddingTop"),
  paddingBlockStart: index.t.space("paddingBlockStart"),
  paddingRight: index.t.space("paddingRight"),
  paddingBottom: index.t.space("paddingBottom"),
  paddingBlockEnd: index.t.space("paddingBlockEnd"),
  paddingLeft: index.t.space("paddingLeft"),
  paddingInlineStart: index.t.space("paddingInlineStart"),
  paddingInlineEnd: index.t.space("paddingInlineEnd"),
  paddingX: index.t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: index.t.space("paddingInline"),
  paddingY: index.t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: index.t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});

exports.space = space;
