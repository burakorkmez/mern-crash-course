'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useDrawerContext } from './drawer.mjs';
import { useModalContext, useModalStyles } from './modal.mjs';
import { ModalFocusScope } from './modal-focus.mjs';
import { Slide } from '../transition/slide.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const MotionDiv = chakra(Slide);
const DrawerContent = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      motionProps,
      containerProps: rootProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps, isOpen } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    };
    const { placement } = useDrawerContext();
    return /* @__PURE__ */ jsx(ModalFocusScope, { children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        __css: dialogContainerStyles,
        children: /* @__PURE__ */ jsx(
          MotionDiv,
          {
            motionProps,
            direction: placement,
            in: isOpen,
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
DrawerContent.displayName = "DrawerContent";

export { DrawerContent };
