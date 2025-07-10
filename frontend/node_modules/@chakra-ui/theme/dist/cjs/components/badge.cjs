'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');

const vars = styledSystem.defineCssVars("badge", ["bg", "color", "shadow"]);
const baseStyle = styledSystem.defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
const variantSolid = styledSystem.defineStyle((props) => {
  const { colorScheme: c, theme } = props;
  const dark = themeTools.transparentize(`${c}.500`, 0.6)(theme);
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    _dark: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`
    }
  };
});
const variantSubtle = styledSystem.defineStyle((props) => {
  const { colorScheme: c, theme } = props;
  const darkBg = themeTools.transparentize(`${c}.200`, 0.16)(theme);
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    _dark: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`
    }
  };
});
const variantOutline = styledSystem.defineStyle((props) => {
  const { colorScheme: c, theme } = props;
  const darkColor = themeTools.transparentize(`${c}.200`, 0.8)(theme);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline
};
const badgeTheme = styledSystem.defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});

exports.badgeTheme = badgeTheme;
exports.badgeVars = vars;
