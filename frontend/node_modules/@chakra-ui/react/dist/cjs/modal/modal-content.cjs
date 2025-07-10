'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var modal = require('./modal.cjs');
var modalFocus = require('./modal-focus.cjs');
var modalTransition = require('./modal-transition.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const ModalContent = forwardRef.forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = modal.useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = utils.cx("chakra-modal__content", className);
    const styles = modal.useModalStyles();
    const dialogStyles = styledSystem.defineStyle({
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles.dialog
    });
    const dialogContainerStyles = styledSystem.defineStyle({
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles.dialogContainer
    });
    const { motionPreset } = modal.useModalContext();
    return /* @__PURE__ */ jsxRuntime.jsx(modalFocus.ModalFocusScope, { children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          modalTransition.ModalTransition,
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

exports.ModalContent = ModalContent;
