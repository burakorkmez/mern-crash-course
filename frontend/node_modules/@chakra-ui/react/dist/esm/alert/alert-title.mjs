'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useAlertStyles, useAlertContext } from './alert-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const AlertTitle = forwardRef(
  function AlertTitle2(props, ref) {
    const styles = useAlertStyles();
    const { status } = useAlertContext();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

export { AlertTitle };
