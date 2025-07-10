'use client';
'use strict';

var accordionContext = require('./accordion-context.cjs');

function useAccordionItemState() {
  const { isOpen, isDisabled, onClose, onOpen } = accordionContext.useAccordionItemContext();
  return { isOpen, onClose, isDisabled, onOpen };
}

exports.useAccordionItemState = useAccordionItemState;
