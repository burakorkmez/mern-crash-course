'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var drawer = require('./drawer.cjs');
var modal = require('./modal.cjs');
var modalFocus = require('./modal-focus.cjs');
var slide = require('../transition/slide.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const MotionDiv = factory.chakra(slide.Slide);
const DrawerContent = forwardRef.forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      motionProps,
      containerProps: rootProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps, isOpen } = modal.useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = utils.cx("chakra-modal__content", className);
    const styles = modal.useModalStyles();
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
    const { placement } = drawer.useDrawerContext();
    return /* @__PURE__ */ jsxRuntime.jsx(modalFocus.ModalFocusScope, { children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        __css: dialogContainerStyles,
        children: /* @__PURE__ */ jsxRuntime.jsx(
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

exports.DrawerContent = DrawerContent;
