'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');
var React = require('react');
var slideFade = require('../transition/slide-fade.cjs');
var scaleFade = require('../transition/scale-fade.cjs');
var factory = require('../system/factory.cjs');

const transitions = {
  slideInBottom: {
    ...slideFade.slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFade.slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  slideInTop: {
    ...slideFade.slideFadeConfig,
    custom: { offsetY: -16, reverse: true }
  },
  slideInLeft: {
    ...slideFade.slideFadeConfig,
    custom: { offsetX: -16, reverse: true }
  },
  scale: {
    ...scaleFade.scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
const MotionSection = factory.chakra(framerMotion.motion.section);
const getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
const ModalTransition = React.forwardRef(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";

exports.ModalTransition = ModalTransition;
