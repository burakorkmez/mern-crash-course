import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
const containerTheme = defineStyleConfig({
  baseStyle
});

export { containerTheme };
