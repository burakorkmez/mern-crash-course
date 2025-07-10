'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var transitionUtils = require('./transition-utils.cjs');

const variants = {
  initial: ({ offsetX, offsetY, transition, transitionEnd, delay }) => ({
    opacity: 0,
    x: offsetX,
    y: offsetY,
    transition: transition?.exit ?? transitionUtils.withDelay.exit(transitionUtils.TRANSITION_DEFAULTS.exit, delay),
    transitionEnd: transitionEnd?.exit
  }),
  enter: ({ transition, transitionEnd, delay }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: transition?.enter ?? transitionUtils.withDelay.enter(transitionUtils.TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd?.enter
  }),
  exit: ({ offsetY, offsetX, transition, transitionEnd, reverse, delay }) => {
    const offset = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: transition?.exit ?? transitionUtils.withDelay.exit(transitionUtils.TRANSITION_DEFAULTS.exit, delay),
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
const SlideFade = React.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        ref,
        className: utils.cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";

exports.SlideFade = SlideFade;
exports.slideFadeConfig = slideFadeConfig;
