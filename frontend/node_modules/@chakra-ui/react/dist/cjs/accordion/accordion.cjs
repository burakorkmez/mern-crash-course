'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var accordionContext = require('./accordion-context.cjs');
var useAccordion = require('./use-accordion.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const Accordion = forwardRef.forwardRef(function Accordion2({ children, reduceMotion, ...props }, ref) {
  const styles = useStyleConfig.useMultiStyleConfig("Accordion", props);
  const ownProps = styledSystem.omitThemingProps(props);
  const { htmlProps, descendants, ...context } = useAccordion.useAccordion(ownProps);
  const ctx = React.useMemo(
    () => ({ ...context, reduceMotion: !!reduceMotion }),
    [context, reduceMotion]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(accordionContext.AccordionDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsxRuntime.jsx(useAccordion.AccordionProvider, { value: ctx, children: /* @__PURE__ */ jsxRuntime.jsx(accordionContext.AccordionStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      ...htmlProps,
      className: utils.cx("chakra-accordion", props.className),
      __css: styles.root,
      children
    }
  ) }) }) });
});
Accordion.displayName = "Accordion";

exports.Accordion = Accordion;
