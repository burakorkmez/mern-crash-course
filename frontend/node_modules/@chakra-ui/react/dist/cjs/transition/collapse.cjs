'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var transitionUtils = require('./transition-utils.cjs');

const isNumeric = (value) => value != null && parseInt(value.toString(), 10) > 0;
const defaultTransitions = {
  exit: {
    height: { duration: 0.2, ease: transitionUtils.TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: transitionUtils.TRANSITION_EASINGS.ease }
  },
  enter: {
    height: { duration: 0.3, ease: transitionUtils.TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: transitionUtils.TRANSITION_EASINGS.ease }
  }
};
const variants = {
  exit: ({
    animateOpacity,
    startingHeight,
    transition,
    transitionEnd,
    delay
  }) => ({
    ...animateOpacity && { opacity: isNumeric(startingHeight) ? 1 : 0 },
    height: startingHeight,
    transitionEnd: transitionEnd?.exit,
    transition: transition?.exit ?? transitionUtils.withDelay.exit(defaultTransitions.exit, delay)
  }),
  enter: ({
    animateOpacity,
    endingHeight,
    transition,
    transitionEnd,
    delay
  }) => ({
    ...animateOpacity && { opacity: 1 },
    height: endingHeight,
    transitionEnd: transitionEnd?.enter,
    transition: transition?.enter ?? transitionUtils.withDelay.enter(defaultTransitions.enter, delay)
  })
};
const Collapse = React.forwardRef(
  (props, ref) => {
    const {
      in: isOpen,
      unmountOnExit,
      animateOpacity = true,
      startingHeight = 0,
      endingHeight = "auto",
      style,
      className,
      transition,
      transitionEnd,
      animatePresenceProps,
      ...rest
    } = props;
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setMounted(true);
      });
      return () => clearTimeout(timeout);
    }, []);
    utils.warn({
      condition: Number(startingHeight) > 0 && !!unmountOnExit,
      message: `startingHeight and unmountOnExit are mutually exclusive. You can't use them together`
    });
    const hasStartingHeight = parseFloat(startingHeight.toString()) > 0;
    const custom = {
      startingHeight,
      endingHeight,
      animateOpacity,
      transition: !mounted ? { enter: { duration: 0 } } : transition,
      transitionEnd: {
        enter: transitionEnd?.enter,
        exit: unmountOnExit ? transitionEnd?.exit : {
          ...transitionEnd?.exit,
          display: hasStartingHeight ? "block" : "none"
        }
      }
    };
    const show = unmountOnExit ? isOpen : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    return /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.AnimatePresence,
      {
        ...animatePresenceProps,
        initial: false,
        custom,
        children: show && /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            ref,
            ...rest,
            className: utils.cx("chakra-collapse", className),
            style: {
              overflow: "hidden",
              display: "block",
              ...style
            },
            custom,
            variants,
            initial: unmountOnExit ? "exit" : false,
            animate,
            exit: "exit"
          }
        )
      }
    );
  }
);
Collapse.displayName = "Collapse";

exports.Collapse = Collapse;
