'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');
var runIfFn = require('../utils/run-if-fn.cjs');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.checkboxAnatomy.keys);
const $size = styledSystem.cssVar("checkbox-size");
const baseStyleControl = styledSystem.defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size.reference,
    h: $size.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: themeTools.mode(`${c}.500`, `${c}.200`)(props),
      borderColor: themeTools.mode(`${c}.500`, `${c}.200`)(props),
      color: themeTools.mode("white", "gray.900")(props),
      _hover: {
        bg: themeTools.mode(`${c}.600`, `${c}.300`)(props),
        borderColor: themeTools.mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: themeTools.mode("gray.200", "transparent")(props),
        bg: themeTools.mode("gray.200", "whiteAlpha.300")(props),
        color: themeTools.mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: themeTools.mode(`${c}.500`, `${c}.200`)(props),
      borderColor: themeTools.mode(`${c}.500`, `${c}.200`)(props),
      color: themeTools.mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: themeTools.mode("gray.100", "whiteAlpha.100")(props),
      borderColor: themeTools.mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: themeTools.mode("red.500", "red.300")(props)
    }
  };
});
const baseStyleContainer = styledSystem.defineStyle({
  _disabled: { cursor: "not-allowed" }
});
const baseStyleLabel = styledSystem.defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
const baseStyleIcon = styledSystem.defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
const baseStyle = definePartsStyle((props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: runIfFn.runIfFn(baseStyleControl, props),
  label: baseStyleLabel
}));
const sizes = {
  sm: definePartsStyle({
    control: { [$size.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle({
    control: { [$size.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle({
    control: { [$size.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

exports.checkboxTheme = checkboxTheme;
