import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
const formLabelTheme = defineStyleConfig({
  baseStyle
});

export { formLabelTheme };
