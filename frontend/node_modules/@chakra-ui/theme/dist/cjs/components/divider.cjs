'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const baseStyle = styledSystem.defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
const variantSolid = styledSystem.defineStyle({
  borderStyle: "solid"
});
const variantDashed = styledSystem.defineStyle({
  borderStyle: "dashed"
});
const variants = {
  solid: variantSolid,
  dashed: variantDashed
};
const dividerTheme = styledSystem.defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "solid"
  }
});

exports.dividerTheme = dividerTheme;
