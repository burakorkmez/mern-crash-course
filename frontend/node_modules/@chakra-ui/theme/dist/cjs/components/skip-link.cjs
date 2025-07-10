'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const $bg = styledSystem.cssVar("skip-link-bg");
const baseStyle = styledSystem.defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg.variable]: "colors.white",
    _dark: {
      [$bg.variable]: "colors.gray.700"
    },
    bg: $bg.reference
  }
});
const skipLinkTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.skipLinkTheme = skipLinkTheme;
