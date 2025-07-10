'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');

const $size = themeTools.cssVar("close-button-size");
const $bg = themeTools.cssVar("close-button-bg");
const baseStyle = styledSystem.defineStyle({
  w: [$size.reference],
  h: [$size.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg.reference
});
const sizes = {
  lg: styledSystem.defineStyle({
    [$size.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: styledSystem.defineStyle({
    [$size.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: styledSystem.defineStyle({
    [$size.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
const closeButtonTheme = styledSystem.defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md"
  }
});

exports.closeButtonTheme = closeButtonTheme;
