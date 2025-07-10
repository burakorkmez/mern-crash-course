'use client';
import { createContext } from '@chakra-ui/utils';
import { createStylesContext } from '../system/providers.mjs';

const [StepContextProvider, useStepContext] = createContext(
  { name: "StepContext" }
);
const [StepperStylesProvider, useStepperStyles] = createStylesContext("Stepper");

export { StepContextProvider, StepperStylesProvider, useStepContext, useStepperStyles };
