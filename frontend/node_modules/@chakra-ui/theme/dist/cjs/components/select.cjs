'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var input = require('./input.cjs');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.selectAnatomy.keys);
const $bg = styledSystem.cssVar("select-bg");
const baseStyleField = styledSystem.defineStyle({
  ...input.inputTheme.baseStyle?.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg.reference,
  [$bg.variable]: "colors.white",
  _dark: {
    [$bg.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg.reference
  }
});
const baseStyleIcon = styledSystem.defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
const baseStyle = definePartsStyle({
  field: baseStyleField,
  icon: baseStyleIcon
});
const iconSpacing = styledSystem.defineStyle({
  paddingInlineEnd: "8"
});
const sizes = {
  lg: {
    ...input.inputTheme.sizes?.lg,
    field: {
      ...input.inputTheme.sizes?.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...input.inputTheme.sizes?.md,
    field: {
      ...input.inputTheme.sizes?.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...input.inputTheme.sizes?.sm,
    field: {
      ...input.inputTheme.sizes?.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...input.inputTheme.sizes?.xs,
    field: {
      ...input.inputTheme.sizes?.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
const selectTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: input.inputTheme.variants,
  defaultProps: input.inputTheme.defaultProps
});

exports.selectTheme = selectTheme;
