'use client';
import { theme } from '@chakra-ui/theme';
import { createProvider } from './provider/create-provider.mjs';

const ChakraProvider = createProvider(theme);

export { ChakraProvider };
