'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StepDescription = forwardRef(
  function StepDescription2(props, ref) {
    const { status } = useStepContext();
    const styles = useStepperStyles();
    return /* @__PURE__ */ jsx(
      chakra.p,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-step__description", props.className),
        __css: styles.description
      }
    );
  }
);

export { StepDescription };
