'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useAccordionItemContext, useAccordionStyles } from './accordion-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const AccordionButton = forwardRef(
  function AccordionButton2(props, ref) {
    const { getButtonProps } = useAccordionItemContext();
    const buttonProps = getButtonProps(props, ref);
    const styles = useAccordionStyles();
    const buttonStyles = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles.button
    };
    return /* @__PURE__ */ jsx(
      chakra.button,
      {
        ...buttonProps,
        className: cx("chakra-accordion__button", props.className),
        __css: buttonStyles
      }
    );
  }
);
AccordionButton.displayName = "AccordionButton";

export { AccordionButton };
