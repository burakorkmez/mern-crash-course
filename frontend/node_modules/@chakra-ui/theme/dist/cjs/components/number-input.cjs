'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');
var typography = require('../foundations/typography.cjs');
var input = require('./input.cjs');
var runIfFn = require('../utils/run-if-fn.cjs');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.numberInputAnatomy.keys);
const $stepperWidth = themeTools.cssVar("number-input-stepper-width");
const $inputPadding = themeTools.cssVar("number-input-input-padding");
const inputPaddingValue = themeTools.calc($stepperWidth).add("0.5rem").toString();
const $bg = themeTools.cssVar("number-input-bg");
const $fg = themeTools.cssVar("number-input-color");
const $border = themeTools.cssVar("number-input-border-color");
const baseStyleRoot = styledSystem.defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
const baseStyleField = styledSystem.defineStyle(
  (props) => runIfFn.runIfFn(input.inputTheme.baseStyle, props)?.field ?? {}
);
const baseStyleStepperGroup = styledSystem.defineStyle({
  width: $stepperWidth.reference
});
const baseStyleStepper = styledSystem.defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border.reference,
  color: $fg.reference,
  bg: $bg.reference,
  [$fg.variable]: "colors.chakra-body-text",
  [$border.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg.variable]: "colors.whiteAlpha.800",
    [$border.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg.variable]: "colors.gray.200",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
const baseStyle = definePartsStyle((props) => ({
  root: baseStyleRoot,
  field: runIfFn.runIfFn(baseStyleField, props) ?? {},
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper
}));
function getSize(size) {
  const sizeStyle = input.inputTheme.sizes?.[size];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = sizeStyle.field?.fontSize ?? "md";
  const fontSize = typography.fontSizes[_fontSize];
  return definePartsStyle({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: themeTools.calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size]
      },
      _last: {
        borderBottomEndRadius: radius[size],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg")
};
const numberInputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: input.inputTheme.variants,
  defaultProps: input.inputTheme.defaultProps
});

exports.numberInputTheme = numberInputTheme;
