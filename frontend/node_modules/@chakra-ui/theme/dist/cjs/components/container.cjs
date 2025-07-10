'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const baseStyle = styledSystem.defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
const containerTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.containerTheme = containerTheme;
