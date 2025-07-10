'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var providers = require('../system/providers.cjs');

const [StepContextProvider, useStepContext] = utils.createContext(
  { name: "StepContext" }
);
const [StepperStylesProvider, useStepperStyles] = providers.createStylesContext("Stepper");

exports.StepContextProvider = StepContextProvider;
exports.StepperStylesProvider = StepperStylesProvider;
exports.useStepContext = useStepContext;
exports.useStepperStyles = useStepperStyles;
