'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.popoverAnatomy.keys);
const $popperBg = themeTools.cssVar("popper-bg");
const $arrowBg = themeTools.cssVar("popper-arrow-bg");
const $arrowShadowColor = themeTools.cssVar("popper-arrow-shadow-color");
const baseStylePopper = styledSystem.defineStyle({
  zIndex: "popover"
});
const baseStyleContent = styledSystem.defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
const baseStyleHeader = styledSystem.defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
const baseStyleBody = styledSystem.defineStyle({
  px: 3,
  py: 2
});
const baseStyleFooter = styledSystem.defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
const baseStyleCloseButton = styledSystem.defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
const baseStyle = definePartsStyle({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  closeButton: baseStyleCloseButton
});
const popoverTheme = defineMultiStyleConfig({
  baseStyle
});

exports.popoverTheme = popoverTheme;
