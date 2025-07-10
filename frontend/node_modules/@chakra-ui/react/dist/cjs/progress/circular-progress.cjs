'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var circle = require('./circle.cjs');
var progress_utils = require('./progress.utils.cjs');
var shape = require('./shape.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const CircularProgress = forwardRef.forwardRef(
  (props, ref) => {
    const {
      size = "48px",
      max = 100,
      min = 0,
      valueText,
      getValueText,
      value,
      capIsRound,
      children,
      thickness = "10px",
      color = "#0078d4",
      trackColor = "#edebe9",
      isIndeterminate,
      ...rest
    } = props;
    const progress = progress_utils.getProgressProps({
      min,
      max,
      value,
      valueText,
      getValueText,
      isIndeterminate
    });
    const determinant = isIndeterminate ? void 0 : (progress.percent ?? 0) * 2.64;
    const strokeDasharray = determinant == null ? void 0 : `${determinant} ${264 - determinant}`;
    const indicatorProps = isIndeterminate ? {
      css: { animation: `${progress_utils.spin} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    };
    const rootStyles = styledSystem.defineStyle({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: size
    });
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.div,
      {
        ref,
        className: "chakra-progress",
        ...progress.bind,
        ...rest,
        __css: rootStyles,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(shape.Shape, { size, isIndeterminate, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              circle.Circle,
              {
                stroke: trackColor,
                strokeWidth: thickness,
                className: "chakra-progress__track"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              circle.Circle,
              {
                stroke: color,
                strokeWidth: thickness,
                className: "chakra-progress__indicator",
                strokeLinecap: capIsRound ? "round" : void 0,
                opacity: progress.value === 0 && !isIndeterminate ? 0 : void 0,
                ...indicatorProps
              }
            )
          ] }),
          children
        ]
      }
    );
  }
);
CircularProgress.displayName = "CircularProgress";

exports.CircularProgress = CircularProgress;
