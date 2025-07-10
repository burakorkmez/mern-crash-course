'use client';
import { jsx } from 'react/jsx-runtime';
import { usePrevious } from '@chakra-ui/hooks';
import { cssVar, omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { keyframes } from '@emotion/react';
import { useIsFirstRender } from './use-is-first-render.mjs';
import { useToken } from '../system/hooks.mjs';
import { chakra } from '../system/factory.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useStyleConfig } from '../system/use-style-config.mjs';

const StyledSkeleton = chakra("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
});
const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");
const fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
const bgFade = keyframes({
  from: {
    borderColor: $startColor.reference,
    background: $startColor.reference
  },
  to: {
    borderColor: $endColor.reference,
    background: $endColor.reference
  }
});
const Skeleton = forwardRef((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles = useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender();
  const {
    startColor = "",
    endColor = "",
    isLoaded,
    fadeDuration,
    speed,
    className,
    fitContent,
    animation: animationProp,
    ...rest
  } = omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = usePrevious(isLoaded);
  const _className = cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor.variable]: startColorVar },
    ...endColorVar && { [$endColor.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : `${fade} ${fadeDuration}s`;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return /* @__PURE__ */ jsx(
    StyledSkeleton,
    {
      ref,
      className: _className,
      ...rest,
      __css: {
        width: fitContent ? "fit-content" : void 0,
        ...styles,
        ...cssVarStyles,
        _dark: { ...styles["_dark"], ...cssVarStyles },
        animation: animationProp || `${speed}s linear infinite alternate ${bgFade}`
      }
    }
  );
});
Skeleton.displayName = "Skeleton";

export { Skeleton };
