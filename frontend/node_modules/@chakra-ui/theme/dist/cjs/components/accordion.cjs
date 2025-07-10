'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.accordionAnatomy.keys);
const baseStyleContainer = styledSystem.defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
const baseStyleButton = styledSystem.defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
const baseStylePanel = styledSystem.defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
const baseStyleIcon = styledSystem.defineStyle({
  fontSize: "1.25em"
});
const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
});
const accordionTheme = defineMultiStyleConfig({ baseStyle });

exports.accordionTheme = accordionTheme;
