'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var badge = require('./badge.cjs');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.tagAnatomy.keys);
const $bg = styledSystem.cssVar("tag-bg");
const $color = styledSystem.cssVar("tag-color");
const $shadow = styledSystem.cssVar("tag-shadow");
const $minH = styledSystem.cssVar("tag-min-height");
const $minW = styledSystem.cssVar("tag-min-width");
const $fontSize = styledSystem.cssVar("tag-font-size");
const $paddingX = styledSystem.cssVar("tag-padding-inline");
const baseStyleContainer = styledSystem.defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [$color.variable]: badge.badgeVars.color.reference,
  [$bg.variable]: badge.badgeVars.bg.reference,
  [$shadow.variable]: badge.badgeVars.shadow.reference,
  color: $color.reference,
  bg: $bg.reference,
  boxShadow: $shadow.reference,
  borderRadius: "md",
  minH: $minH.reference,
  minW: $minW.reference,
  fontSize: $fontSize.reference,
  px: $paddingX.reference,
  _focusVisible: {
    [$shadow.variable]: "shadows.outline"
  }
});
const baseStyleLabel = styledSystem.defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
const baseStyleCloseButton = styledSystem.defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
});
const sizes = {
  sm: definePartsStyle({
    container: {
      [$minH.variable]: "sizes.5",
      [$minW.variable]: "sizes.5",
      [$fontSize.variable]: "fontSizes.xs",
      [$paddingX.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle({
    container: {
      [$minH.variable]: "sizes.6",
      [$minW.variable]: "sizes.6",
      [$fontSize.variable]: "fontSizes.sm",
      [$paddingX.variable]: "space.2"
    }
  }),
  lg: definePartsStyle({
    container: {
      [$minH.variable]: "sizes.8",
      [$minW.variable]: "sizes.8",
      [$fontSize.variable]: "fontSizes.md",
      [$paddingX.variable]: "space.3"
    }
  })
};
const variants = {
  subtle: definePartsStyle((props) => ({
    container: badge.badgeTheme.variants?.subtle(props)
  })),
  solid: definePartsStyle((props) => ({
    container: badge.badgeTheme.variants?.solid(props)
  })),
  outline: definePartsStyle((props) => ({
    container: badge.badgeTheme.variants?.outline(props)
  }))
};
const tagTheme = defineMultiStyleConfig({
  variants,
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

exports.tagTheme = tagTheme;
