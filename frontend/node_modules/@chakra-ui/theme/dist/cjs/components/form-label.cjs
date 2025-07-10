'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const baseStyle = styledSystem.defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
const formLabelTheme = styledSystem.defineStyleConfig({
  baseStyle
});

exports.formLabelTheme = formLabelTheme;
