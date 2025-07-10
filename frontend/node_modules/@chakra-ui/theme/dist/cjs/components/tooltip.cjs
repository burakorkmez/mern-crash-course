'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');

const $bg = themeTools.cssVar("tooltip-bg");
const $fg = themeTools.cssVar("tooltip-fg");
const $arrowBg = themeTools.cssVar("popper-arrow-bg");
const baseStyle = styledSystem.defineStyle({
  bg: $bg.reference,
  color: $fg.reference,
  [$bg.variable]: "colors.gray.700",
  [$fg.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg.variable]: "colors.gray.300",
    [$fg.variable]: "colors.gray.900"
  },
  [$arrowBg.variable]: $bg.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
const tooltipTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.tooltipTheme = tooltipTheme;
