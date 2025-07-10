'use strict';

var index = require('../utils/index.cjs');
var transformFunctions = require('../utils/transform-functions.cjs');

const typography = {
  fontFamily: index.t.prop("fontFamily", "fonts"),
  fontSize: index.t.prop("fontSize", "fontSizes", transformFunctions.transformFunctions.px),
  fontWeight: index.t.prop("fontWeight", "fontWeights"),
  lineHeight: index.t.prop("lineHeight", "lineHeights"),
  letterSpacing: index.t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};

exports.typography = typography;
