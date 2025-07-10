'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const baseStyle = styledSystem.defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
const linkTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.linkTheme = linkTheme;
