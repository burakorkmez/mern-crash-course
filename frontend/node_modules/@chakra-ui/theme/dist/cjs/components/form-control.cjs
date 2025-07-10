'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.formAnatomy.keys);
const $fg = styledSystem.cssVar("form-control-color");
const baseStyleRequiredIndicator = styledSystem.defineStyle({
  marginStart: "1",
  [$fg.variable]: "colors.red.500",
  _dark: {
    [$fg.variable]: "colors.red.300"
  },
  color: $fg.reference
});
const baseStyleHelperText = styledSystem.defineStyle({
  mt: "2",
  [$fg.variable]: "colors.gray.600",
  _dark: {
    [$fg.variable]: "colors.whiteAlpha.600"
  },
  color: $fg.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
const baseStyle = definePartsStyle({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
const formTheme = defineMultiStyleConfig({
  baseStyle
});

exports.formTheme = formTheme;
