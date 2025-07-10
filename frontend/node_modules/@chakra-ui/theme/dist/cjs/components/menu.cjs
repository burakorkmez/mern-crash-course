'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.menuAnatomy.keys);
const $bg = styledSystem.cssVar("menu-bg");
const $shadow = styledSystem.cssVar("menu-shadow");
const baseStyleList = styledSystem.defineStyle({
  [$bg.variable]: "#fff",
  [$shadow.variable]: "shadows.sm",
  _dark: {
    [$bg.variable]: "colors.gray.700",
    [$shadow.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: "dropdown",
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg.reference,
  boxShadow: $shadow.reference
});
const baseStyleItem = styledSystem.defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg.variable]: "colors.gray.100",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg.variable]: "colors.gray.200",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg.variable]: "colors.gray.100",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg.reference
});
const baseStyleGroupTitle = styledSystem.defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
const baseStyleIcon = styledSystem.defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
const baseStyleCommand = styledSystem.defineStyle({
  opacity: 0.6
});
const baseStyleDivider = styledSystem.defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
const baseStyleButton = styledSystem.defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
const baseStyle = definePartsStyle({
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  icon: baseStyleIcon,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
const menuTheme = defineMultiStyleConfig({
  baseStyle
});

exports.menuTheme = menuTheme;
