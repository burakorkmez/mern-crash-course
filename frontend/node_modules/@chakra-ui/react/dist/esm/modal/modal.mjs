'use client';
import { jsx } from 'react/jsx-runtime';
import { createContext } from '@chakra-ui/utils';
import { AnimatePresence } from 'framer-motion';
import { useModal } from './use-modal.mjs';
import { Portal } from '../portal/portal.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';

const [ModalStylesProvider, useModalStyles] = createContext({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
const [ModalContextProvider, useModalContext] = createContext({
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
  const styles = useMultiStyleConfig("Modal", modalProps);
  const modal = useModal(modalProps);
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
  return /* @__PURE__ */ jsx(ModalContextProvider, { value: context, children: /* @__PURE__ */ jsx(ModalStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    AnimatePresence,
    {
      ...animatePresenceProps,
      onExitComplete: onCloseComplete,
      children: context.isOpen && /* @__PURE__ */ jsx(Portal, { ...portalProps, children })
    }
  ) }) });
};
Modal.displayName = "Modal";

export { Modal, ModalContextProvider, useModalContext, useModalStyles };
