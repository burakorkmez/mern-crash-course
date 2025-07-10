'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var transitionUtils = require('./transition-utils.cjs');

const defaultTransition = {
  exit: {
    duration: 0.15,
    ease: transitionUtils.TRANSITION_EASINGS.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
const variants = {
  exit: ({ direction, transition, transitionEnd, delay }) => {
    const { exit: exitStyles } = transitionUtils.getSlideTransition({ direction });
    return {
      ...exitStyles,
      transition: transition?.exit ?? transitionUtils.withDelay.exit(defaultTransition.exit, delay),
      transitionEnd: transitionEnd?.exit
    };
  },
  enter: ({ direction, transitionEnd, transition, delay }) => {
    const { enter: enterStyles } = transitionUtils.getSlideTransition({ direction });
    return {
      ...enterStyles,
      transition: transition?.enter ?? transitionUtils.withDelay.enter(defaultTransition.enter, delay),
      transitionEnd: transitionEnd?.enter
    };
  }
};
const Slide = React.forwardRef(
  function Slide2(props, ref) {
    const {
      direction = "right",
      style,
      unmountOnExit,
      in: isOpen,
      className,
      transition,
      transitionEnd,
      delay,
      motionProps,
      animatePresenceProps,
      ...rest
    } = props;
    const transitionStyles = transitionUtils.getSlideTransition({ direction });
    const computedStyle = Object.assign(
      { position: "fixed" },
      transitionStyles.position,
      style
    );
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { transitionEnd, transition, direction, delay };
    return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { ...animatePresenceProps, custom, children: show && /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        ...rest,
        ref,
        initial: "exit",
        className: utils.cx("chakra-slide", className),
        animate,
        exit: "exit",
        custom,
        variants,
        style: computedStyle,
        ...motionProps
      }
    ) });
  }
);
Slide.displayName = "Slide";

exports.Slide = Slide;
