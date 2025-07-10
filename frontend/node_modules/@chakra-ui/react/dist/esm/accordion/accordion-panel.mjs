'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useAccordionItemContext, useAccordionStyles } from './accordion-context.mjs';
import { useAccordionContext } from './use-accordion.mjs';
import { Collapse } from '../transition/collapse.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const AccordionPanel = forwardRef(
  function AccordionPanel2(props, ref) {
    const { className, motionProps, ...rest } = props;
    const { reduceMotion } = useAccordionContext();
    const { getPanelProps, isOpen } = useAccordionItemContext();
    const panelProps = getPanelProps(rest, ref);
    const _className = cx("chakra-accordion__panel", className);
    const styles = useAccordionStyles();
    if (!reduceMotion) {
      delete panelProps.hidden;
    }
    const child = /* @__PURE__ */ jsx(chakra.div, { ...panelProps, __css: styles.panel, className: _className });
    if (!reduceMotion) {
      return /* @__PURE__ */ jsx(Collapse, { in: isOpen, ...motionProps, children: child });
    }
    return child;
  }
);
AccordionPanel.displayName = "AccordionPanel";

export { AccordionPanel };
