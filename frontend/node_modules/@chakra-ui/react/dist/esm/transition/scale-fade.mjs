'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { withDelay, TRANSITION_DEFAULTS } from './transition-utils.mjs';

const variants = {
  exit: ({ reverse, initialScale, transition, transitionEnd, delay }) => ({
    opacity: 0,
    ...reverse ? { scale: initialScale, transitionEnd: transitionEnd?.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd?.exit } },
    transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
  }),
  enter: ({ transitionEnd, transition, delay }) => ({
    opacity: 1,
    scale: 1,
    transition: transition?.enter ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd?.enter
  })
};
const scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants
};
const ScaleFade = forwardRef(
  function ScaleFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      initialScale = 0.95,
      className,
      transition,
      transitionEnd,
      delay,
      animatePresenceProps,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { initialScale, reverse, transition, transitionEnd, delay };
    return /* @__PURE__ */ jsx(AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";

export { ScaleFade, scaleFadeConfig };
