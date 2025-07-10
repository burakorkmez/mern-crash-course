'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useAccordionItemContext, useAccordionStyles } from './accordion-context.mjs';
import { useAccordionContext } from './use-accordion.mjs';
import { Icon } from '../icon/icon.mjs';

function AccordionIcon(props) {
  const { isOpen, isDisabled } = useAccordionItemContext();
  const { reduceMotion } = useAccordionContext();
  const _className = cx("chakra-accordion__icon", props.className);
  const styles = useAccordionStyles();
  const iconStyles = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : void 0,
    transition: reduceMotion ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...styles.icon
  };
  return /* @__PURE__ */ jsx(
    Icon,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      className: _className,
      __css: iconStyles,
      ...props,
      children: /* @__PURE__ */ jsx(
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

export { AccordionIcon };
