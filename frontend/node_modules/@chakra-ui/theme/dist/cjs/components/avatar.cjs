'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var themeTools = require('@chakra-ui/theme-tools');
var sizes$1 = require('../foundations/sizes.cjs');
var runIfFn = require('../utils/run-if-fn.cjs');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.avatarAnatomy.keys);
const $border = styledSystem.cssVar("avatar-border-color");
const $bg = styledSystem.cssVar("avatar-bg");
const $fs = styledSystem.cssVar("avatar-font-size");
const $size = styledSystem.cssVar("avatar-size");
const baseStyleBadge = styledSystem.defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: $border.reference,
  [$border.variable]: "white",
  _dark: {
    [$border.variable]: "colors.gray.800"
  }
});
const baseStyleExcessLabel = styledSystem.defineStyle({
  bg: $bg.reference,
  fontSize: $fs.reference,
  width: $size.reference,
  height: $size.reference,
  lineHeight: "1",
  [$bg.variable]: "colors.gray.200",
  _dark: {
    [$bg.variable]: "colors.whiteAlpha.400"
  }
});
const baseStyleContainer = styledSystem.defineStyle((props) => {
  const { name, theme } = props;
  const bg = name ? themeTools.randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = themeTools.isDark(bg)(theme);
  let color = "white";
  if (!isBgDark)
    color = "gray.800";
  return {
    bg: $bg.reference,
    fontSize: $fs.reference,
    color,
    borderColor: $border.reference,
    verticalAlign: "top",
    width: $size.reference,
    height: $size.reference,
    "&:not([data-loaded])": {
      [$bg.variable]: bg
    },
    [$border.variable]: "colors.white",
    _dark: {
      [$border.variable]: "colors.gray.800"
    }
  };
});
const baseStyleLabel = styledSystem.defineStyle({
  fontSize: $fs.reference,
  lineHeight: "1"
});
const baseStyle = definePartsStyle((props) => ({
  badge: runIfFn.runIfFn(baseStyleBadge, props),
  excessLabel: runIfFn.runIfFn(baseStyleExcessLabel, props),
  container: runIfFn.runIfFn(baseStyleContainer, props),
  label: baseStyleLabel
}));
function getSize(size) {
  const themeSize = size !== "100%" ? sizes$1[size] : void 0;
  return definePartsStyle({
    container: {
      [$size.variable]: themeSize ?? size,
      [$fs.variable]: `calc(${themeSize ?? size} / 2.5)`
    },
    excessLabel: {
      [$size.variable]: themeSize ?? size,
      [$fs.variable]: `calc(${themeSize ?? size} / 2.5)`
    }
  });
}
const sizes = {
  "2xs": getSize(4),
  xs: getSize(6),
  sm: getSize(8),
  md: getSize(12),
  lg: getSize(16),
  xl: getSize(24),
  "2xl": getSize(32),
  full: getSize("100%")
};
const avatarTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md"
  }
});

exports.avatarTheme = avatarTheme;
