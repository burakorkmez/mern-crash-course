'use client';
import { createContext } from '@chakra-ui/utils/context';

const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext({
  name: "CheckboxGroupContext",
  strict: false
});

export { CheckboxGroupProvider, useCheckboxGroupContext };
