'use strict';

var index = require('../utils/index.cjs');

const scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  // scroll margin
  scrollMargin: index.t.spaceT("scrollMargin"),
  scrollMarginTop: index.t.spaceT("scrollMarginTop"),
  scrollMarginBottom: index.t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: index.t.spaceT("scrollMarginLeft"),
  scrollMarginRight: index.t.spaceT("scrollMarginRight"),
  scrollMarginX: index.t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: index.t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: index.t.spaceT("scrollPadding"),
  scrollPaddingTop: index.t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: index.t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: index.t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: index.t.spaceT("scrollPaddingRight"),
  scrollPaddingX: index.t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: index.t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};

exports.scroll = scroll;
