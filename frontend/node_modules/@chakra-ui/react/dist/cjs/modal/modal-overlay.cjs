'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var modal = require('./modal.cjs');
var fade = require('../transition/fade.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const MotionDiv = factory.chakra(framerMotion.motion.div);
const ModalOverlay = forwardRef.forwardRef(
  (props, ref) => {
    const { className, transition, motionProps: _motionProps, ...rest } = props;
    const _className = utils.cx("chakra-modal__overlay", className);
    const styles = modal.useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles.overlay
    };
    const { motionPreset } = modal.useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : fade.fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return /* @__PURE__ */ jsxRuntime.jsx(
      MotionDiv,
      {
        ...motionProps,
        __css: overlayStyle,
        ref,
        className: _className,
        ...rest
      }
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

exports.ModalOverlay = ModalOverlay;
