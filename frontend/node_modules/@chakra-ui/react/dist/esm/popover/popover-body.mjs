'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { usePopoverContext, usePopoverStyles } from './popover-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const PopoverBody = forwardRef(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...getBodyProps(props, ref),
        className: cx("chakra-popover__body", props.className),
        __css: styles.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";

export { PopoverBody };
