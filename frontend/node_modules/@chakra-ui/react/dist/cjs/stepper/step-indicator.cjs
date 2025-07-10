'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');
var stepIcon = require('./step-icon.cjs');
var stepNumber = require('./step-number.cjs');
var stepStatus = require('./step-status.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StepIndicator = forwardRef.forwardRef(
  function StepIndicator2(props, ref) {
    const { status } = stepContext.useStepContext();
    const styles = stepContext.useStepperStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        __css: styles.indicator,
        className: utils.cx("chakra-step__indicator", props.className)
      }
    );
  }
);
function StepIndicatorContent() {
  return /* @__PURE__ */ jsxRuntime.jsx(
    stepStatus.StepStatus,
    {
      complete: /* @__PURE__ */ jsxRuntime.jsx(stepIcon.StepIcon, {}),
      incomplete: /* @__PURE__ */ jsxRuntime.jsx(stepNumber.StepNumber, {}),
      active: /* @__PURE__ */ jsxRuntime.jsx(stepNumber.StepNumber, {})
    }
  );
}

exports.StepIndicator = StepIndicator;
exports.StepIndicatorContent = StepIndicatorContent;
