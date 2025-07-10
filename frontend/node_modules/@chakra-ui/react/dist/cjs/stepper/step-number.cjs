'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StepNumber = forwardRef.forwardRef(
  function StepNumber2(props, ref) {
    const { children, ...restProps } = props;
    const { status, index } = stepContext.useStepContext();
    const styles = stepContext.useStepperStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ref,
        "data-status": status,
        __css: styles.number,
        ...restProps,
        className: utils.cx("chakra-step__number", props.className),
        children: children || index + 1
      }
    );
  }
);

exports.StepNumber = StepNumber;
