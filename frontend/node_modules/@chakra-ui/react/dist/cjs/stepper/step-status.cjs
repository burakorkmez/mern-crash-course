'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var stepContext = require('./step-context.cjs');

function StepStatus(props) {
  const { complete, incomplete, active } = props;
  const context = stepContext.useStepContext();
  let render = null;
  switch (context.status) {
    case "complete":
      render = utils.runIfFn(complete, context);
      break;
    case "incomplete":
      render = utils.runIfFn(incomplete, context);
      break;
    case "active":
      render = utils.runIfFn(active, context);
      break;
  }
  return render ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: render }) : null;
}

exports.StepStatus = StepStatus;
