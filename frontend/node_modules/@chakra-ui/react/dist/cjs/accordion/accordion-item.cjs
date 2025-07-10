'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var accordionContext = require('./accordion-context.cjs');
var useAccordion = require('./use-accordion.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const AccordionItem = forwardRef.forwardRef(
  function AccordionItem2(props, ref) {
    const { children, className } = props;
    const { htmlProps, ...context } = useAccordion.useAccordionItem(props);
    const styles = accordionContext.useAccordionStyles();
    const containerStyles = styledSystem.defineStyle({
      ...styles.container,
      overflowAnchor: "none"
    });
    const ctx = React.useMemo(() => context, [context]);
    return /* @__PURE__ */ jsxRuntime.jsx(accordionContext.AccordionItemProvider, { value: ctx, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        ...htmlProps,
        className: utils.cx("chakra-accordion__item", className),
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

exports.AccordionItem = AccordionItem;
