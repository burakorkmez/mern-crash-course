'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var icons = require('./icons.cjs');
var stepContext = require('./step-context.cjs');
var icon = require('../icon/icon.cjs');

function StepIcon(props) {
  const { status } = stepContext.useStepContext();
  const styles = stepContext.useStepperStyles();
  const icon$1 = status === "complete" ? icons.CheckIcon : void 0;
  return /* @__PURE__ */ jsxRuntime.jsx(
    icon.Icon,
    {
      as: icon$1,
      __css: styles.icon,
      ...props,
      className: utils.cx("chakra-step__icon", props.className)
    }
  );
}

exports.StepIcon = StepIcon;
