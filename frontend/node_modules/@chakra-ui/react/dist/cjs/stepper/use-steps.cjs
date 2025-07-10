'use client';
'use strict';

var React = require('react');

function useSteps(props = {}) {
  const { index = 0, count } = props;
  const [activeStep, setActiveStep] = React.useState(index);
  const maxStep = typeof count === "number" ? count - 1 : 0;
  const activeStepPercent = activeStep / maxStep;
  return {
    activeStep,
    setActiveStep,
    activeStepPercent: Number.isNaN(activeStepPercent) ? 0 : activeStepPercent,
    isActiveStep(step) {
      return step === activeStep;
    },
    isCompleteStep(step) {
      return step < activeStep;
    },
    isIncompleteStep(step) {
      return step > activeStep;
    },
    getStatus(step) {
      if (step < activeStep)
        return "complete";
      if (step > activeStep)
        return "incomplete";
      return "active";
    },
    goToNext() {
      setActiveStep((step) => {
        return typeof count === "number" ? Math.min(count, step + 1) : step + 1;
      });
    },
    goToPrevious() {
      setActiveStep((step) => Math.max(0, step - 1));
    }
  };
}

exports.useSteps = useSteps;
