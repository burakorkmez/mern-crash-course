'use client';
import { jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { slideFadeConfig } from '../transition/slide-fade.mjs';
import { scaleFadeConfig } from '../transition/scale-fade.mjs';
import { chakra } from '../system/factory.mjs';

const transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  slideInTop: {
    ...slideFadeConfig,
    custom: { offsetY: -16, reverse: true }
  },
  slideInLeft: {
    ...slideFadeConfig,
    custom: { offsetX: -16, reverse: true }
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
const MotionSection = chakra(motion.section);
const getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
const ModalTransition = forwardRef(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return /* @__PURE__ */ jsx(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";

export { ModalTransition };
