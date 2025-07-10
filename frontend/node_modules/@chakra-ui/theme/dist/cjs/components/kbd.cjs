'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const $bg = styledSystem.cssVar("kbd-bg");
const baseStyle = styledSystem.defineStyle({
  [$bg.variable]: "colors.gray.100",
  _dark: {
    [$bg.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
const kbdTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.kbdTheme = kbdTheme;
