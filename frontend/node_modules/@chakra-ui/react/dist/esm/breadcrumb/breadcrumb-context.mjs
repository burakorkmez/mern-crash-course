'use client';
import { createContext } from '@chakra-ui/utils';

const [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

export { BreadcrumbStylesProvider, useBreadcrumbStyles };
