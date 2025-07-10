'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var skeleton = require('./skeleton.cjs');
var useBreakpointValue = require('../media-query/use-breakpoint-value.cjs');
var factory = require('../system/factory.cjs');

function range(count) {
  return Array(count).fill(1).map((_, index) => index + 1);
}
const defaultNoOfLines = 3;
const SkeletonText = (props) => {
  const {
    noOfLines = defaultNoOfLines,
    spacing = "0.5rem",
    skeletonHeight = "0.5rem",
    className,
    startColor,
    endColor,
    isLoaded,
    fadeDuration,
    speed,
    variant,
    size,
    colorScheme,
    children,
    ...rest
  } = props;
  const noOfLinesValue = useBreakpointValue.useBreakpointValue(
    typeof noOfLines === "number" ? [noOfLines] : noOfLines
  ) || defaultNoOfLines;
  const numbers = range(noOfLinesValue);
  const getWidth = (index) => {
    if (noOfLinesValue > 1) {
      return index === numbers.length ? "80%" : "100%";
    }
    return "100%";
  };
  const _className = utils.cx("chakra-skeleton__group", className);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { className: _className, ...rest, children: numbers.map((number, index) => {
    if (isLoaded && index > 0) {
      return null;
    }
    const sizeProps = isLoaded ? null : {
      mb: number === numbers.length ? "0" : spacing,
      width: getWidth(number),
      height: skeletonHeight
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      skeleton.Skeleton,
      {
        startColor,
        endColor,
        isLoaded,
        fadeDuration,
        speed,
        variant,
        size,
        colorScheme,
        ...sizeProps,
        // allows animating the children
        children: index === 0 ? children : void 0
      },
      numbers.length.toString() + number
    );
  }) });
};
SkeletonText.displayName = "SkeletonText";

exports.SkeletonText = SkeletonText;
