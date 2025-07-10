'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');

const $size = themeTools.cssVar("spinner-size");
const baseStyle = styledSystem.defineStyle({
  width: [$size.reference],
  height: [$size.reference]
});
const sizes = {
  xs: styledSystem.defineStyle({
    [$size.variable]: "sizes.3"
  }),
  sm: styledSystem.defineStyle({
    [$size.variable]: "sizes.4"
  }),
  md: styledSystem.defineStyle({
    [$size.variable]: "sizes.6"
  }),
  lg: styledSystem.defineStyle({
    [$size.variable]: "sizes.8"
  }),
  xl: styledSystem.defineStyle({
    [$size.variable]: "sizes.12"
  })
};
const spinnerTheme = styledSystem.defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md"
  }
});

exports.spinnerTheme = spinnerTheme;
