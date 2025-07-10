'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var useDescendant = require('../descendant/use-descendant.cjs');

const [AccordionStylesProvider, useAccordionStyles] = utils.createContext({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
});
const [AccordionItemProvider, useAccordionItemContext] = utils.createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
});
const [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant
] = useDescendant.createDescendantContext();

exports.AccordionDescendantsProvider = AccordionDescendantsProvider;
exports.AccordionItemProvider = AccordionItemProvider;
exports.AccordionStylesProvider = AccordionStylesProvider;
exports.useAccordionDescendant = useAccordionDescendant;
exports.useAccordionDescendants = useAccordionDescendants;
exports.useAccordionDescendantsContext = useAccordionDescendantsContext;
exports.useAccordionItemContext = useAccordionItemContext;
exports.useAccordionStyles = useAccordionStyles;
