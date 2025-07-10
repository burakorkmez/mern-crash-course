'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var useModal = require('./use-modal.cjs');
var portal = require('../portal/portal.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const [ModalStylesProvider, useModalStyles] = utils.createContext({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
const [ModalContextProvider, useModalContext] = utils.createContext({
  strict: true,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
const Modal = (props) => {
  const modalProps = {
    scrollBehavior: "outside",
    autoFocus: true,
    trapFocus: true,
    returnFocusOnClose: true,
    blockScrollOnMount: true,
    allowPinchZoom: false,
    preserveScrollBarGap: true,
    motionPreset: "scale",
    ...props,
    lockFocusAcrossFrames: props.lockFocusAcrossFrames ?? true
  };
  const {
    portalProps,
    children,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames,
    animatePresenceProps,
    onCloseComplete
  } = modalProps;
  const styles = useStyleConfig.useMultiStyleConfig("Modal", modalProps);
  const modal = useModal.useModal(modalProps);
  const context = {
    ...modal,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames
  };
  return /* @__PURE__ */ jsxRuntime.jsx(ModalContextProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(ModalStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.AnimatePresence,
    {
      ...animatePresenceProps,
      onExitComplete: onCloseComplete,
      children: context.isOpen && /* @__PURE__ */ jsxRuntime.jsx(portal.Portal, { ...portalProps, children })
    }
  ) }) });
};
Modal.displayName = "Modal";

exports.Modal = Modal;
exports.ModalContextProvider = ModalContextProvider;
exports.useModalContext = useModalContext;
exports.useModalStyles = useModalStyles;
