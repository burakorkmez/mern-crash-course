'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.formErrorAnatomy.keys);
const $fg = styledSystem.cssVar("form-error-color");
const baseStyleText = styledSystem.defineStyle({
  [$fg.variable]: `colors.red.500`,
  _dark: {
    [$fg.variable]: `colors.red.300`
  },
  color: $fg.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
const baseStyleIcon = styledSystem.defineStyle({
  marginEnd: "0.5em",
  [$fg.variable]: `colors.red.500`,
  _dark: {
    [$fg.variable]: `colors.red.300`
  },
  color: $fg.reference
});
const baseStyle = definePartsStyle({
  text: baseStyleText,
  icon: baseStyleIcon
});
const formErrorTheme = defineMultiStyleConfig({
  baseStyle
});

exports.formErrorTheme = formErrorTheme;
