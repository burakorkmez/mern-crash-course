'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');
var popoverContext = require('./popover-context.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

function mergeVariants(variants) {
  if (!variants)
    return;
  return {
    enter: {
      ...variants.enter,
      visibility: "visible"
    },
    exit: {
      ...variants.exit,
      transitionEnd: {
        visibility: "hidden"
      }
    }
  };
}
const scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
const MotionSection = factory.chakra(framerMotion.motion.section);
const PopoverTransition = forwardRef.forwardRef(function PopoverTransition2(props, ref) {
  const { variants = scaleFade, ...rest } = props;
  const { isOpen } = popoverContext.usePopoverContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    MotionSection,
    {
      ref,
      variants: mergeVariants(variants),
      initial: false,
      animate: isOpen ? "enter" : "exit",
      ...rest
    }
  );
});
PopoverTransition.displayName = "PopoverTransition";

exports.PopoverTransition = PopoverTransition;
