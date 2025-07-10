'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const $startColor = styledSystem.cssVar("skeleton-start-color");
const $endColor = styledSystem.cssVar("skeleton-end-color");
const baseStyle = styledSystem.defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
const skeletonTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.skeletonTheme = skeletonTheme;
