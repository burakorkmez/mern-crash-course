'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.listAnatomy.keys);
const baseStyleIcon = styledSystem.defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
const baseStyle = definePartsStyle({
  icon: baseStyleIcon
});
const listTheme = defineMultiStyleConfig({
  baseStyle
});

exports.listTheme = listTheme;
