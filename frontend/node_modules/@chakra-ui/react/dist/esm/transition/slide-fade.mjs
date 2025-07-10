'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { withDelay, TRANSITION_DEFAULTS } from './transition-utils.mjs';

const variants = {
  initial: ({ offsetX, offsetY, transition, transitionEnd, delay }) => ({
    opacity: 0,
    x: offsetX,
    y: offsetY,
    transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
    transitionEnd: transitionEnd?.exit
  }),
  enter: ({ transition, transitionEnd, delay }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: transition?.enter ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd?.enter
  }),
  exit: ({ offsetY, offsetX, transition, transitionEnd, reverse, delay }) => {
    const offset = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      ...reverse ? { ...offset, transitionEnd: transitionEnd?.exit } : { transitionEnd: { ...offset, ...transitionEnd?.exit } }
    };
  }
};
const slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants
};
const SlideFade = forwardRef(
  function SlideFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      className,
      offsetX = 0,
      offsetY = 8,
      transition,
      transitionEnd,
      delay,
      animatePresenceProps,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = {
      offsetX,
      offsetY,
      reverse,
      transition,
      transitionEnd,
      delay
    };
    return /* @__PURE__ */ jsx(AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";

export { SlideFade, slideFadeConfig };
