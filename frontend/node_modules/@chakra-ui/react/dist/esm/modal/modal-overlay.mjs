'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { motion } from 'framer-motion';
import { useModalStyles, useModalContext } from './modal.mjs';
import { fadeConfig } from '../transition/fade.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

const MotionDiv = chakra(motion.div);
const ModalOverlay = forwardRef(
  (props, ref) => {
    const { className, transition, motionProps: _motionProps, ...rest } = props;
    const _className = cx("chakra-modal__overlay", className);
    const styles = useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles.overlay
    };
    const { motionPreset } = useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return /* @__PURE__ */ jsx(
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

export { ModalOverlay };
