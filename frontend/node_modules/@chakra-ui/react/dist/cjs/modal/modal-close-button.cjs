'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var modal = require('./modal.cjs');
var closeButton = require('../close-button/close-button.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const ModalCloseButton = forwardRef.forwardRef(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = modal.useModalContext();
    const _className = utils.cx("chakra-modal__close-btn", className);
    const styles = modal.useModalStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      closeButton.CloseButton,
      {
        ref,
        __css: styles.closeButton,
        className: _className,
        onClick: utils.callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

exports.ModalCloseButton = ModalCloseButton;
