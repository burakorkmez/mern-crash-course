'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { AccordionDescendantsProvider, AccordionStylesProvider } from './accordion-context.mjs';
import { useAccordion, AccordionProvider } from './use-accordion.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Accordion = forwardRef(function Accordion2({ children, reduceMotion, ...props }, ref) {
  const styles = useMultiStyleConfig("Accordion", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, descendants, ...context } = useAccordion(ownProps);
  const ctx = useMemo(
    () => ({ ...context, reduceMotion: !!reduceMotion }),
    [context, reduceMotion]
  );
  return /* @__PURE__ */ jsx(AccordionDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsx(AccordionProvider, { value: ctx, children: /* @__PURE__ */ jsx(AccordionStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: cx("chakra-accordion", props.className),
      __css: styles.root,
      children
    }
  ) }) }) });
});
Accordion.displayName = "Accordion";

export { Accordion };
