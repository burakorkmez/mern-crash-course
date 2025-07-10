'use client';
import { createContext } from '@chakra-ui/utils';

const [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

export { ButtonGroupProvider, useButtonGroup };
