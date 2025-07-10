'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.breadcrumbAnatomy.keys);
const $decor = styledSystem.cssVar("breadcrumb-link-decor");
const baseStyleLink = styledSystem.defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [$decor.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
});
const baseStyle = definePartsStyle({
  link: baseStyleLink
});
const breadcrumbTheme = defineMultiStyleConfig({
  baseStyle
});

exports.breadcrumbTheme = breadcrumbTheme;
