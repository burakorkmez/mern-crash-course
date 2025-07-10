'use strict';

var index = require('../utils/index.cjs');

const position = {
  position: true,
  pos: index.t.prop("position"),
  zIndex: index.t.prop("zIndex", "zIndices"),
  inset: index.t.spaceT("inset"),
  insetX: index.t.spaceT(["left", "right"]),
  insetInline: index.t.spaceT("insetInline"),
  insetY: index.t.spaceT(["top", "bottom"]),
  insetBlock: index.t.spaceT("insetBlock"),
  top: index.t.spaceT("top"),
  insetBlockStart: index.t.spaceT("insetBlockStart"),
  bottom: index.t.spaceT("bottom"),
  insetBlockEnd: index.t.spaceT("insetBlockEnd"),
  left: index.t.spaceT("left"),
  insetInlineStart: index.t.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: index.t.spaceT("right"),
  insetInlineEnd: index.t.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});

exports.position = position;
