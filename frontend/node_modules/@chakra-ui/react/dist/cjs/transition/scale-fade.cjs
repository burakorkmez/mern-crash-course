'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var transitionUtils = require('./transition-utils.cjs');

const variants = {
  exit: ({ reverse, initialScale, transition, transitionEnd, delay }) => ({
    opacity: 0,
    ...reverse ? { scale: initialScale, transitionEnd: transitionEnd?.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd?.exit } },
    transition: transition?.exit ?? transitionUtils.withDelay.exit(transitionUtils.TRANSITION_DEFAULTS.exit, delay)
  }),
  enter: ({ transitionEnd, transition, delay }) => ({
    opacity: 1,
    scale: 1,
    transition: transition?.enter ?? transitionUtils.withDelay.enter(transitionUtils.TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd?.enter
  })
};
const scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants
};
const ScaleFade = React.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        ref,
        className: utils.cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";

exports.ScaleFade = ScaleFade;
exports.scaleFadeConfig = scaleFadeConfig;
