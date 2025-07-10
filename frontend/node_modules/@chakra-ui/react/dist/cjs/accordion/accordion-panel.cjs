'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var accordionContext = require('./accordion-context.cjs');
var useAccordion = require('./use-accordion.cjs');
var collapse = require('../transition/collapse.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const AccordionPanel = forwardRef.forwardRef(
  function AccordionPanel2(props, ref) {
    const { className, motionProps, ...rest } = props;
    const { reduceMotion } = useAccordion.useAccordionContext();
    const { getPanelProps, isOpen } = accordionContext.useAccordionItemContext();
    const panelProps = getPanelProps(rest, ref);
    const _className = utils.cx("chakra-accordion__panel", className);
    const styles = accordionContext.useAccordionStyles();
    if (!reduceMotion) {
      delete panelProps.hidden;
    }
    const child = /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ...panelProps, __css: styles.panel, className: _className });
    if (!reduceMotion) {
      return /* @__PURE__ */ jsxRuntime.jsx(collapse.Collapse, { in: isOpen, ...motionProps, children: child });
    }
    return child;
  }
);
AccordionPanel.displayName = "AccordionPanel";

exports.AccordionPanel = AccordionPanel;
