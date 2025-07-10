'use strict';

var anatomy = require('@chakra-ui/anatomy');
var styledSystem = require('@chakra-ui/styled-system');
var runIfFn = require('../utils/run-if-fn.cjs');

const { definePartsStyle, defineMultiStyleConfig } = styledSystem.createMultiStyleConfigHelpers(anatomy.drawerAnatomy.keys);
const $bg = styledSystem.cssVar("drawer-bg");
const $bs = styledSystem.cssVar("drawer-box-shadow");
function getSize(value) {
  if (value === "full") {
    return definePartsStyle({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle({
    dialog: { maxW: value }
  });
}
const baseStyleOverlay = styledSystem.defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
const baseStyleDialogContainer = styledSystem.defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
const baseStyleDialog = styledSystem.defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg.reference,
    boxShadow: $bs.reference
  };
});
const baseStyleHeader = styledSystem.defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
const baseStyleCloseButton = styledSystem.defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
const baseStyleBody = styledSystem.defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
const baseStyleFooter = styledSystem.defineStyle({
  px: "6",
  py: "4"
});
const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn.runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
}));
const sizes = {
  xs: getSize("xs"),
  sm: getSize("md"),
  md: getSize("lg"),
  lg: getSize("2xl"),
  xl: getSize("4xl"),
  full: getSize("full")
};
const drawerTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "xs"
  }
});

exports.drawerTheme = drawerTheme;
