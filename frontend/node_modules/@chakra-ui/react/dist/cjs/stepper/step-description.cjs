'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StepDescription = forwardRef.forwardRef(
  function StepDescription2(props, ref) {
    const { status } = stepContext.useStepContext();
    const styles = stepContext.useStepperStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.p,
      {
        ref,
        "data-status": status,
        ...props,
        className: utils.cx("chakra-step__description", props.className),
        __css: styles.description
      }
    );
  }
);

exports.StepDescription = StepDescription;
