'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { useModalContext, useModalStyles } from './modal.mjs';
import { ModalFocusScope } from './modal-focus.mjs';
import { ModalTransition } from './modal-transition.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const ModalContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = defineStyle({
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    });
    const dialogContainerStyles = defineStyle({
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    });
    const { motionPreset } = useModalContext();
    return /* @__PURE__ */ jsx(ModalFocusScope, { children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: /* @__PURE__ */ jsx(
          ModalTransition,
          {
            preset: motionPreset,
            motionProps,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
ModalContent.displayName = "ModalContent";

export { ModalContent };
