'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');
var React = require('react');
var reactRemoveScroll = require('react-remove-scroll');
var modal = require('./modal.cjs');
var modalManager = require('./modal-manager.cjs');
var focusLock = require('../focus-lock/focus-lock.cjs');

function ModalFocusScope(props) {
  const {
    autoFocus,
    trapFocus,
    dialogRef,
    initialFocusRef,
    blockScrollOnMount,
    allowPinchZoom,
    finalFocusRef,
    returnFocusOnClose,
    preserveScrollBarGap,
    lockFocusAcrossFrames,
    isOpen
  } = modal.useModalContext();
  const [isPresent, safeToRemove] = framerMotion.usePresence();
  React.useEffect(() => {
    if (!isPresent && safeToRemove) {
      setTimeout(safeToRemove);
    }
  }, [isPresent, safeToRemove]);
  const index = modalManager.useModalManager(dialogRef, isOpen);
  return /* @__PURE__ */ jsxRuntime.jsx(
    focusLock.FocusLock,
    {
      autoFocus,
      isDisabled: !trapFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus: returnFocusOnClose,
      contentRef: dialogRef,
      lockFocusAcrossFrames,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        reactRemoveScroll.RemoveScroll,
        {
          removeScrollBar: !preserveScrollBarGap,
          allowPinchZoom,
          enabled: index === 1 && blockScrollOnMount,
          forwardProps: true,
          children: props.children
        }
      )
    }
  );
}

exports.ModalFocusScope = ModalFocusScope;
