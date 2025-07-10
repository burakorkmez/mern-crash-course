'use client';
import { useAccordionItemContext } from './accordion-context.mjs';

function useAccordionItemState() {
  const { isOpen, isDisabled, onClose, onOpen } = useAccordionItemContext();
  return { isOpen, onClose, isDisabled, onOpen };
}

export { useAccordionItemState };
