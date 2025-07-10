'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var transitionUtils = require('./transition-utils.cjs');

const variants = {
  enter: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 1,
    transition: transition?.enter ?? transitionUtils.withDelay.enter(transitionUtils.TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd?.enter
  }),
  exit: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 0,
    transition: transition?.exit ?? transitionUtils.withDelay.exit(transitionUtils.TRANSITION_DEFAULTS.exit, delay),
    transitionEnd: transitionEnd?.exit
  })
};
const fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants
};
const Fade = React.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        ref,
        className: utils.cx("chakra-fade", className),
        custom,
        ...fadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
Fade.displayName = "Fade";

exports.Fade = Fade;
exports.fadeConfig = fadeConfig;
