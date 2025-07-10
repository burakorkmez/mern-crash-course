'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.statAnatomy.keys);
const baseStyleLabel = styledSystem.defineStyle({
  fontWeight: "medium"
});
const baseStyleHelpText = styledSystem.defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
const baseStyleNumber = styledSystem.defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
const baseStyleIcon = styledSystem.defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
const baseStyle = definePartsStyle({
  container: {},
  label: baseStyleLabel,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon
});
const sizes = {
  md: definePartsStyle({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
const statTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md"
  }
});

exports.statTheme = statTheme;
