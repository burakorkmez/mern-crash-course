'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useAlertContext, useAlertStyles } from './alert-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const AlertDescription = forwardRef(
  function AlertDescription2(props, ref) {
    const { status } = useAlertContext();
    const styles = useAlertStyles();
    const descriptionStyles = defineStyle({
      display: "inline",
      ...styles.description
    });
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

export { AlertDescription };
