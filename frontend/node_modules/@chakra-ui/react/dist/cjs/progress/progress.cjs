'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var progress_utils = require('./progress.utils.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const [ProgressStylesProvider, useProgressStyles] = utils.createContext({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
const ProgressFilledTrack = forwardRef.forwardRef(
  (props, ref) => {
    const { min, max, value, isIndeterminate, role, ...rest } = props;
    const progress2 = progress_utils.getProgressProps({
      value,
      min,
      max,
      isIndeterminate,
      role
    });
    const styles = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles.filledTrack
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        style: { width: `${progress2.percent}%`, ...rest.style },
        ...progress2.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
const Progress = forwardRef.forwardRef((props, ref) => {
  const {
    value,
    min = 0,
    max = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = styledSystem.omitThemingProps(props);
  const styles = useStyleConfig.useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius ?? styles.track?.borderRadius;
  const stripeAnimation = { animation: `${progress_utils.stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress_utils.progress} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles.track
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsxs(ProgressStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min,
            max,
            value,
            isIndeterminate,
            css,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";

exports.Progress = Progress;
exports.useProgressStyles = useProgressStyles;
