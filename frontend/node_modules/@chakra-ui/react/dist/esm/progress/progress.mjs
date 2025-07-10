'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext } from '@chakra-ui/utils';
import { getProgressProps, progress, stripe } from './progress.utils.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';

const [ProgressStylesProvider, useProgressStyles] = createContext({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
const ProgressFilledTrack = forwardRef(
  (props, ref) => {
    const { min, max, value, isIndeterminate, role, ...rest } = props;
    const progress2 = getProgressProps({
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
    return /* @__PURE__ */ jsx(
      chakra.div,
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
const Progress = forwardRef((props, ref) => {
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
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius ?? styles.track?.borderRadius;
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles.track
  };
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: /* @__PURE__ */ jsxs(ProgressStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsx(
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

export { Progress, useProgressStyles };
