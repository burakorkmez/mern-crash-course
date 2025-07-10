'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var framerMotion = require('framer-motion');
var React = require('react');
var toast_utils = require('./toast.utils.cjs');
var factory = require('../system/factory.cjs');

const toastMotionVariants = {
  initial: (props) => {
    const { position } = props;
    const dir = ["top", "bottom"].includes(position) ? "y" : "x";
    let factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1;
    if (position === "bottom")
      factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
const ToastComponent = React.memo((props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position = "bottom",
    duration = 5e3,
    containerStyle,
    motionVariants = toastMotionVariants,
    toastSpacing = "0.5rem"
  } = props;
  const [delay, setDelay] = React.useState(duration);
  const isPresent = framerMotion.useIsPresent();
  hooks.useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete?.();
    }
  }, [isPresent]);
  hooks.useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);
  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);
  const close = () => {
    if (isPresent)
      onRequestRemove();
  };
  React.useEffect(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  hooks.useTimeout(close, delay);
  const containerStyles = React.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing,
      ...containerStyle
    }),
    [containerStyle, toastSpacing]
  );
  const toastStyle = React.useMemo(() => toast_utils.getToastStyle(position), [position]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      layout: true,
      className: "chakra-toast",
      variants: motionVariants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: onMouseEnter,
      onHoverEnd: onMouseLeave,
      custom: { position },
      style: toastStyle,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        factory.chakra.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: containerStyles,
          children: utils.runIfFn(message, { id, onClose: close })
        }
      )
    }
  );
});
ToastComponent.displayName = "ToastComponent";

exports.ToastComponent = ToastComponent;
