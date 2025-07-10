'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var runIfFn = require('../utils/run-if-fn.cjs');
var checkbox = require('./checkbox.cjs');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.radioAnatomy.keys);
const baseStyleControl = styledSystem.defineStyle((props) => {
  const controlStyle = runIfFn.runIfFn(checkbox.checkboxTheme.baseStyle, props)?.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle?.["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
const baseStyle = definePartsStyle((props) => ({
  label: checkbox.checkboxTheme.baseStyle?.(props).label,
  container: checkbox.checkboxTheme.baseStyle?.(props).container,
  control: baseStyleControl(props)
}));
const sizes = {
  md: definePartsStyle({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

exports.radioTheme = radioTheme;
