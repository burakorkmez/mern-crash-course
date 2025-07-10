'use strict';

var styledSystem = require('@chakra-ui/styled-system');

const baseStyle = styledSystem.defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
const sizes = {
  "4xl": styledSystem.defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": styledSystem.defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": styledSystem.defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: styledSystem.defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: styledSystem.defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: styledSystem.defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: styledSystem.defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: styledSystem.defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
const headingTheme = styledSystem.defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xl"
  }
});

exports.headingTheme = headingTheme;
