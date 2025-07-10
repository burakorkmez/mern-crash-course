'use client';
import { jsx } from 'react/jsx-runtime';
import { cx, callAll } from '@chakra-ui/utils';
import { motion } from 'framer-motion';
import { useMenuStyles } from './menu.mjs';
import { useMenuContext, useMenuList, useMenuPositioner } from './use-menu.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

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
const MenuTransition = chakra(motion.div);
const MenuList = forwardRef(
  function MenuList2(props, ref) {
    const { rootProps, motionProps, ...rest } = props;
    const {
      isOpen,
      onTransitionEnd,
      unstable__animationState: animated
    } = useMenuContext();
    const listProps = useMenuList(rest, ref);
    const positionerProps = useMenuPositioner(rootProps);
    const styles = useMenuStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...positionerProps,
        __css: { zIndex: props.zIndex ?? styles.list?.zIndex },
        children: /* @__PURE__ */ jsx(
          MenuTransition,
          {
            variants: motionVariants,
            initial: false,
            animate: isOpen ? "enter" : "exit",
            __css: { outline: 0, ...styles.list },
            ...motionProps,
            ...listProps,
            className: cx("chakra-menu__menu-list", listProps.className),
            onUpdate: onTransitionEnd,
            onAnimationComplete: callAll(
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

export { MenuList };
