'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var accordionContext = require('./accordion-context.cjs');
var useAccordion = require('./use-accordion.cjs');
var icon = require('../icon/icon.cjs');

function AccordionIcon(props) {
  const { isOpen, isDisabled } = accordionContext.useAccordionItemContext();
  const { reduceMotion } = useAccordion.useAccordionContext();
  const _className = utils.cx("chakra-accordion__icon", props.className);
  const styles = accordionContext.useAccordionStyles();
  const iconStyles = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : void 0,
    transition: reduceMotion ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...styles.icon
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    icon.Icon,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      className: _className,
      __css: iconStyles,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
AccordionIcon.displayName = "AccordionIcon";

exports.AccordionIcon = AccordionIcon;
