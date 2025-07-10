'use client';
import { jsx } from 'react/jsx-runtime';
import { cx, callAllHandlers } from '@chakra-ui/utils';
import { useModalContext, useModalStyles } from './modal.mjs';
import { CloseButton } from '../close-button/close-button.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const ModalCloseButton = forwardRef(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = useModalContext();
    const _className = cx("chakra-modal__close-btn", className);
    const styles = useModalStyles();
    return /* @__PURE__ */ jsx(
      CloseButton,
      {
        ref,
        __css: styles.closeButton,
        className: _className,
        onClick: callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

export { ModalCloseButton };
