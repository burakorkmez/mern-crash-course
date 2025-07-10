'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var modal = require('./modal.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const ModalFooter = forwardRef.forwardRef(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = utils.cx("chakra-modal__footer", className);
    const styles = modal.useModalStyles();
    const footerStyles = styledSystem.defineStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles.footer
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.footer,
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

exports.ModalFooter = ModalFooter;
