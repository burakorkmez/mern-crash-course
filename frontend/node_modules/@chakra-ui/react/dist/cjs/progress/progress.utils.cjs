'use client';
'use strict';

var react = require('@emotion/react');

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
const spin = react.keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
const rotate = react.keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
const progress = react.keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
const stripe = react.keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min,
    max,
    valueText,
    getValueText,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent = valueToPercent(value, min, max);
  const getAriaValueText = () => {
    if (value == null)
      return void 0;
    return typeof getValueText === "function" ? getValueText(value, percent) : valueText;
  };
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent,
    value
  };
}

exports.getProgressProps = getProgressProps;
exports.progress = progress;
exports.rotate = rotate;
exports.spin = spin;
exports.stripe = stripe;
