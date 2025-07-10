'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var accordionContext = require('./accordion-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const AccordionButton = forwardRef.forwardRef(
  function AccordionButton2(props, ref) {
    const { getButtonProps } = accordionContext.useAccordionItemContext();
    const buttonProps = getButtonProps(props, ref);
    const styles = accordionContext.useAccordionStyles();
    const buttonStyles = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles.button
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.button,
      {
        ...buttonProps,
        className: utils.cx("chakra-accordion__button", props.className),
        __css: buttonStyles
      }
    );
  }
);
AccordionButton.displayName = "AccordionButton";

exports.AccordionButton = AccordionButton;
