'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { withDelay, TRANSITION_DEFAULTS } from './transition-utils.mjs';

const variants = {
  enter: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 1,
    transition: transition?.enter ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd?.enter
  }),
  exit: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 0,
    transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
    transitionEnd: transitionEnd?.exit
  })
};
const fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants
};
const Fade = forwardRef(
  function Fade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      className,
      transition,
      transitionEnd,
      delay,
      animatePresenceProps,
      ...rest
    } = props;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const custom = { transition, transitionEnd, delay };
    return /* @__PURE__ */ jsx(AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        className: cx("chakra-fade", className),
        custom,
        ...fadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
Fade.displayName = "Fade";

export { Fade, fadeConfig };
