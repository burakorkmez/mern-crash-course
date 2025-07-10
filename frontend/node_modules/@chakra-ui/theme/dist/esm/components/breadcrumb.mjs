import { breadcrumbAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar, defineStyle } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
const $decor = cssVar("breadcrumb-link-decor");
const baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [$decor.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
});
const baseStyle = definePartsStyle({
  link: baseStyleLink
});
const breadcrumbTheme = defineMultiStyleConfig({
  baseStyle
});

export { breadcrumbTheme };
