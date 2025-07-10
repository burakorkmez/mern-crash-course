'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { StepIcon } from './step-icon.mjs';
import { StepNumber } from './step-number.mjs';
import { StepStatus } from './step-status.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StepIndicator = forwardRef(
  function StepIndicator2(props, ref) {
    const { status } = useStepContext();
    const styles = useStepperStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        __css: styles.indicator,
        className: cx("chakra-step__indicator", props.className)
      }
    );
  }
);
function StepIndicatorContent() {
  return /* @__PURE__ */ jsx(
    StepStatus,
    {
      complete: /* @__PURE__ */ jsx(StepIcon, {}),
      incomplete: /* @__PURE__ */ jsx(StepNumber, {}),
      active: /* @__PURE__ */ jsx(StepNumber, {})
    }
  );
}

export { StepIndicator, StepIndicatorContent };
