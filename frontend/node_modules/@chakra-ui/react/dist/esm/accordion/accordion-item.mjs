'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { useAccordionStyles, AccordionItemProvider } from './accordion-context.mjs';
import { useAccordionItem } from './use-accordion.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const AccordionItem = forwardRef(
  function AccordionItem2(props, ref) {
    const { children, className } = props;
    const { htmlProps, ...context } = useAccordionItem(props);
    const styles = useAccordionStyles();
    const containerStyles = defineStyle({
      ...styles.container,
      overflowAnchor: "none"
    });
    const ctx = useMemo(() => context, [context]);
    return /* @__PURE__ */ jsx(AccordionItemProvider, { value: ctx, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: cx("chakra-accordion__item", className),
        __css: containerStyles,
        children: typeof children === "function" ? children({
          isExpanded: !!context.isOpen,
          isDisabled: !!context.isDisabled
        }) : children
      }
    ) });
  }
);
AccordionItem.displayName = "AccordionItem";

export { AccordionItem };
