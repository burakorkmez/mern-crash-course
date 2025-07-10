'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const StepTitle = forwardRef.forwardRef(function StepTitle2(props, ref) {
  const { status } = stepContext.useStepContext();
  const styles = stepContext.useStepperStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.h3,
    {
      ref,
      "data-status": status,
      ...props,
      __css: styles.title,
      className: utils.cx("chakra-step__title", props.className)
    }
  );
});

exports.StepTitle = StepTitle;
