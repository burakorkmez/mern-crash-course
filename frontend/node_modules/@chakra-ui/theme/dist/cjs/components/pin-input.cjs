'use strict';

var styledSystem = require('@chakra-ui/styled-system');
var input = require('./input.cjs');
var runIfFn = require('../utils/run-if-fn.cjs');

const baseStyle = styledSystem.defineStyle({
  ...input.inputTheme.baseStyle?.field,
  textAlign: "center"
});
const sizes = {
  lg: styledSystem.defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: styledSystem.defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: styledSystem.defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: styledSystem.defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
const variants = {
  outline: styledSystem.defineStyle(
    (props) => runIfFn.runIfFn(input.inputTheme.variants?.outline, props)?.field ?? {}
  ),
  flushed: styledSystem.defineStyle(
    (props) => runIfFn.runIfFn(input.inputTheme.variants?.flushed, props)?.field ?? {}
  ),
  filled: styledSystem.defineStyle(
    (props) => runIfFn.runIfFn(input.inputTheme.variants?.filled, props)?.field ?? {}
  ),
  unstyled: input.inputTheme.variants?.unstyled.field ?? {}
};
const pinInputTheme = styledSystem.defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: input.inputTheme.defaultProps
});

exports.pinInputTheme = pinInputTheme;
