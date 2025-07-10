import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { cssVar, calc } from '@chakra-ui/theme-tools';
import typography from '../foundations/typography.mjs';
import { inputTheme } from './input.mjs';
import { runIfFn } from '../utils/run-if-fn.mjs';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
const $stepperWidth = cssVar("number-input-stepper-width");
const $inputPadding = cssVar("number-input-input-padding");
const inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
const $bg = cssVar("number-input-bg");
const $fg = cssVar("number-input-color");
const $border = cssVar("number-input-border-color");
const baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
const baseStyleField = defineStyle(
  (props) => runIfFn(inputTheme.baseStyle, props)?.field ?? {}
);
const baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
const baseStyleStepper = defineStyle({
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
  field: runIfFn(baseStyleField, props) ?? {},
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper
}));
function getSize(size) {
  const sizeStyle = inputTheme.sizes?.[size];
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
      fontSize: calc(fontSize).multiply(0.75).toString(),
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
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

export { numberInputTheme };
