'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useModalStyles } from './modal.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const ModalFooter = forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = cx("chakra-modal__footer", className);
    const styles = useModalStyles();
    const footerStyles = defineStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles.footer
    });
    return /* @__PURE__ */ jsx(
      chakra.footer,
      {
        ref,
        ...rest,
        __css: footerStyles,
        className: _className
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";

export { ModalFooter };
