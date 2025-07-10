'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var popoverContext = require('./popover-context.cjs');
var popoverTransition = require('./popover-transition.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const PopoverContent = forwardRef.forwardRef(
  function PopoverContent2(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props;
    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = popoverContext.usePopoverContext();
    const styles = popoverContext.usePopoverStyles();
    const contentStyles = styledSystem.defineStyle({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles.content
    });
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...getPopoverPositionerProps(rootProps),
        __css: styles.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ jsxRuntime.jsx(
          popoverTransition.PopoverTransition,
          {
            ...motionProps,
            ...getPopoverProps(contentProps, ref),
            onAnimationComplete: utils.callAll(
              onAnimationComplete,
              contentProps.onAnimationComplete
            ),
            className: utils.cx("chakra-popover__content", props.className),
            __css: contentStyles
          }
        )
      }
    );
  }
);
PopoverContent.displayName = "PopoverContent";

exports.PopoverContent = PopoverContent;
