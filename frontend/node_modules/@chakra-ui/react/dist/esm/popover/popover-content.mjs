'use client';
import { jsx } from 'react/jsx-runtime';
import { defineStyle } from '@chakra-ui/styled-system';
import { callAll, cx } from '@chakra-ui/utils';
import { usePopoverContext, usePopoverStyles } from './popover-context.mjs';
import { PopoverTransition } from './popover-transition.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const PopoverContent = forwardRef(
  function PopoverContent2(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props;
    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = usePopoverContext();
    const styles = usePopoverStyles();
    const contentStyles = defineStyle({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles.content
    });
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...getPopoverPositionerProps(rootProps),
        __css: styles.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ jsx(
          PopoverTransition,
          {
            ...motionProps,
            ...getPopoverProps(contentProps, ref),
            onAnimationComplete: callAll(
              onAnimationComplete,
              contentProps.onAnimationComplete
            ),
            className: cx("chakra-popover__content", props.className),
            __css: contentStyles
          }
        )
      }
    );
  }
);
PopoverContent.displayName = "PopoverContent";

export { PopoverContent };
