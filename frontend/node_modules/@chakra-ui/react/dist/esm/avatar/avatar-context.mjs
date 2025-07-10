'use client';
import { createContext } from '@chakra-ui/utils';

const [AvatarStylesProvider, useAvatarStyles] = createContext({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>"
});

export { AvatarStylesProvider, useAvatarStyles };
