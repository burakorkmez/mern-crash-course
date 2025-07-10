'use client';
import { jsx } from 'react/jsx-runtime';
import { warn, cx } from '@chakra-ui/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useState, useEffect } from 'react';
import { TRANSITION_EASINGS, withDelay } from './transition-utils.mjs';

const isNumeric = (value) => value != null && parseInt(value.toString(), 10) > 0;
const defaultTransitions = {
  exit: {
    height: { duration: 0.2, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: TRANSITION_EASINGS.ease }
  },
  enter: {
    height: { duration: 0.3, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: TRANSITION_EASINGS.ease }
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
    transition: transition?.exit ?? withDelay.exit(defaultTransitions.exit, delay)
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
    transition: transition?.enter ?? withDelay.enter(defaultTransitions.enter, delay)
  })
};
const Collapse = forwardRef(
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
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setMounted(true);
      });
      return () => clearTimeout(timeout);
    }, []);
    warn({
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
    return /* @__PURE__ */ jsx(
      AnimatePresence,
      {
        ...animatePresenceProps,
        initial: false,
        custom,
        children: show && /* @__PURE__ */ jsx(
          motion.div,
          {
            ref,
            ...rest,
            className: cx("chakra-collapse", className),
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

export { Collapse };
