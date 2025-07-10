'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StepSeparator = forwardRef.forwardRef(
  function StepSeparator2(props, ref) {
    const { orientation, status, isLast, showLastSeparator } = stepContext.useStepContext();
    const styles = stepContext.useStepperStyles();
    if (isLast && !showLastSeparator)
      return null;
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        role: "separator",
        "data-orientation": orientation,
        "data-status": status,
        __css: styles.separator,
        ...props,
        className: utils.cx("chakra-step__separator", props.className)
      }
    );
  }
);

exports.StepSeparator = StepSeparator;
