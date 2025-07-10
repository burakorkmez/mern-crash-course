'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const layout = {
  width: index.t.sizesT("width"),
  inlineSize: index.t.sizesT("inlineSize"),
  height: index.t.sizes("height"),
  blockSize: index.t.sizes("blockSize"),
  boxSize: index.t.sizes(["width", "height"]),
  minWidth: index.t.sizes("minWidth"),
  minInlineSize: index.t.sizes("minInlineSize"),
  minHeight: index.t.sizes("minHeight"),
  minBlockSize: index.t.sizes("minBlockSize"),
  maxWidth: index.t.sizes("maxWidth"),
  maxInlineSize: index.t.sizes("maxInlineSize"),
  maxHeight: index.t.sizes("maxHeight"),
  maxBlockSize: index.t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  aspectRatio: true,
  hideFrom: {
    scale: "breakpoints",
    transform: (value, theme) => {
      const breakpoint = theme.__breakpoints?.get(value)?.minW ?? value;
      const mq = `@media screen and (min-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (value, theme) => {
      const breakpoint = theme.__breakpoints?.get(value)?._minW ?? value;
      const mq = `@media screen and (max-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: index.t.propT("float", transformFunctions.transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});

exports.layout = layout;
