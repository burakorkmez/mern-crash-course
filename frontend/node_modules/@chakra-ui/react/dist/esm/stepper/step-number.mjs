'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const StepNumber = forwardRef(
  function StepNumber2(props, ref) {
    const { children, ...restProps } = props;
    const { status, index } = useStepContext();
    const styles = useStepperStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        "data-status": status,
        __css: styles.number,
        ...restProps,
        className: cx("chakra-step__number", props.className),
        children: children || index + 1
      }
    );
  }
);

export { StepNumber };
