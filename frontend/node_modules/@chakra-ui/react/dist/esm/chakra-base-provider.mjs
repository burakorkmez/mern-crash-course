'use client';
import { baseTheme } from '@chakra-ui/theme';
import { createProvider } from './provider/create-provider.mjs';

const ChakraBaseProvider = createProvider(baseTheme);

export { ChakraBaseProvider };
