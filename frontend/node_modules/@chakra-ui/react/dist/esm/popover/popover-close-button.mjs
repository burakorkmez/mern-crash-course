'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { usePopoverContext, usePopoverStyles } from './popover-context.mjs';
import { CloseButton } from '../close-button/close-button.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const PopoverCloseButton = forwardRef(
  function PopoverCloseButton2(props, ref) {
    const { onClose } = usePopoverContext();
    const styles = usePopoverStyles();
    return /* @__PURE__ */ jsx(
      CloseButton,
      {
        size: "sm",
        onClick: onClose,
        className: cx("chakra-popover__close-btn", props.className),
        __css: styles.closeButton,
        ref,
        ...props
      }
    );
  }
);
PopoverCloseButton.displayName = "PopoverCloseButton";

export { PopoverCloseButton };
