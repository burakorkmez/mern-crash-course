'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var badge = require('./badge.cjs');

const { variants, defaultProps } = badge.badgeTheme;
const baseStyle = styledSystem.defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: badge.badgeVars.bg.reference,
  color: badge.badgeVars.color.reference,
  boxShadow: badge.badgeVars.shadow.reference
});
const codeTheme = styledSystem.defineStyleConfig({
  baseStyle,
  variants,
  defaultProps
});

exports.codeTheme = codeTheme;
