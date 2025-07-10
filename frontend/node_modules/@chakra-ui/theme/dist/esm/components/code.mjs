import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { badgeVars as vars, badgeTheme } from './badge.mjs';

const { variants, defaultProps } = badgeTheme;
const baseStyle = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
const codeTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps
});

export { codeTheme };
