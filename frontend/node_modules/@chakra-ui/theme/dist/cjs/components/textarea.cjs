'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var input = require('./input.cjs');

const baseStyle = styledSystem.defineStyle({
  ...input.inputTheme.baseStyle?.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
const variants = {
  outline: styledSystem.defineStyle(
    (props) => input.inputTheme.variants?.outline(props).field ?? {}
  ),
  flushed: styledSystem.defineStyle(
    (props) => input.inputTheme.variants?.flushed(props).field ?? {}
  ),
  filled: styledSystem.defineStyle(
    (props) => input.inputTheme.variants?.filled(props).field ?? {}
  ),
  unstyled: input.inputTheme.variants?.unstyled.field ?? {}
};
const sizes = {
  xs: input.inputTheme.sizes?.xs.field ?? {},
  sm: input.inputTheme.sizes?.sm.field ?? {},
  md: input.inputTheme.sizes?.md.field ?? {},
  lg: input.inputTheme.sizes?.lg.field ?? {}
};
const textareaTheme = styledSystem.defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

exports.textareaTheme = textareaTheme;
