'use client';
import { createContext } from '@chakra-ui/utils';
import { createDescendantContext } from '../descendant/use-descendant.mjs';

const [AccordionStylesProvider, useAccordionStyles] = createContext({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
});
const [AccordionItemProvider, useAccordionItemContext] = createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
});
const [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant
] = createDescendantContext();

export { AccordionDescendantsProvider, AccordionItemProvider, AccordionStylesProvider, useAccordionDescendant, useAccordionDescendants, useAccordionDescendantsContext, useAccordionItemContext, useAccordionStyles };
