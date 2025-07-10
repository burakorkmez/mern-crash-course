'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StepTitle = forwardRef(function StepTitle2(props, ref) {
  const { status } = useStepContext();
  const styles = useStepperStyles();
  return /* @__PURE__ */ jsx(
    chakra.h3,
    {
      ref,
      "data-status": status,
      ...props,
      __css: styles.title,
      className: cx("chakra-step__title", props.className)
    }
  );
});

export { StepTitle };
