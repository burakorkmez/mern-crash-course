'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hooks$1 = require('@chakra-ui/hooks');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var react = require('@emotion/react');
var useIsFirstRender = require('./use-is-first-render.cjs');
var hooks = require('../system/hooks.cjs');
var factory = require('../system/factory.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const StyledSkeleton = factory.chakra("div", {
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
const $startColor = styledSystem.cssVar("skeleton-start-color");
const $endColor = styledSystem.cssVar("skeleton-end-color");
const fade = react.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
const bgFade = react.keyframes({
  from: {
    borderColor: $startColor.reference,
    background: $startColor.reference
  },
  to: {
    borderColor: $endColor.reference,
    background: $endColor.reference
  }
});
const Skeleton = forwardRef.forwardRef((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles = useStyleConfig.useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender.useIsFirstRender();
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
  } = styledSystem.omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = hooks.useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = hooks$1.usePrevious(isLoaded);
  const _className = utils.cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor.variable]: startColorVar },
    ...endColorVar && { [$endColor.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : `${fade} ${fadeDuration}s`;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Skeleton = Skeleton;
