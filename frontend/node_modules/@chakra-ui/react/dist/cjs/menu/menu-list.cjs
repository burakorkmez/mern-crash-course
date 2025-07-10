'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var menu = require('./menu.cjs');
var useMenu = require('./use-menu.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const motionVariants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
};
const MenuTransition = factory.chakra(framerMotion.motion.div);
const MenuList = forwardRef.forwardRef(
  function MenuList2(props, ref) {
    const { rootProps, motionProps, ...rest } = props;
    const {
      isOpen,
      onTransitionEnd,
      unstable__animationState: animated
    } = useMenu.useMenuContext();
    const listProps = useMenu.useMenuList(rest, ref);
    const positionerProps = useMenu.useMenuPositioner(rootProps);
    const styles = menu.useMenuStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...positionerProps,
        __css: { zIndex: props.zIndex ?? styles.list?.zIndex },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          MenuTransition,
          {
            variants: motionVariants,
            initial: false,
            animate: isOpen ? "enter" : "exit",
            __css: { outline: 0, ...styles.list },
            ...motionProps,
            ...listProps,
            className: utils.cx("chakra-menu__menu-list", listProps.className),
            onUpdate: onTransitionEnd,
            onAnimationComplete: utils.callAll(
              animated.onComplete,
              listProps.onAnimationComplete
            )
          }
        )
      }
    );
  }
);
MenuList.displayName = "MenuList";

exports.MenuList = MenuList;
