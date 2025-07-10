'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StepSeparator = forwardRef(
  function StepSeparator2(props, ref) {
    const { orientation, status, isLast, showLastSeparator } = useStepContext();
    const styles = useStepperStyles();
    if (isLast && !showLastSeparator)
      return null;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        role: "separator",
        "data-orientation": orientation,
        "data-status": status,
        __css: styles.separator,
        ...props,
        className: cx("chakra-step__separator", props.className)
      }
    );
  }
);

export { StepSeparator };
