'use client';
import { theme } from '@chakra-ui/theme';
import { toCSSVar } from '@chakra-ui/styled-system';

function createTheme(theme$1) {
  return toCSSVar({
    ...theme$1,
    breakpoints: theme.breakpoints
  });
}

export { createTheme };
