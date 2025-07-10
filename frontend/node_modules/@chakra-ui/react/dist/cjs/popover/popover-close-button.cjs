'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var closeButton = require('../close-button/close-button.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const PopoverCloseButton = forwardRef.forwardRef(
  function PopoverCloseButton2(props, ref) {
    const { onClose } = popoverContext.usePopoverContext();
    const styles = popoverContext.usePopoverStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      closeButton.CloseButton,
      {
        size: "sm",
        onClick: onClose,
        className: utils.cx("chakra-popover__close-btn", props.className),
        __css: styles.closeButton,
        ref,
        ...props
      }
    );
  }
);
PopoverCloseButton.displayName = "PopoverCloseButton";

exports.PopoverCloseButton = PopoverCloseButton;
