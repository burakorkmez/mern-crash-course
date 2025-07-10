'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var factory = require('../system/factory.cjs');

const Step = forwardRef.forwardRef(function Step2(props, ref) {
  const { orientation, status, showLastSeparator } = stepContext.useStepContext();
  const styles = stepContext.useStepperStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ref,
      "data-status": status,
      "data-orientation": orientation,
      "data-stretch": utils.dataAttr(showLastSeparator),
      __css: styles.step,
      ...props,
      className: utils.cx("chakra-step", props.className)
    }
  );
});

exports.Step = Step;
