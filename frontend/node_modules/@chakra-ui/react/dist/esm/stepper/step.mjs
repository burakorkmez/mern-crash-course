'use client';
import { jsx } from 'react/jsx-runtime';
import { dataAttr, cx } from '@chakra-ui/utils';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const Step = forwardRef(function Step2(props, ref) {
  const { orientation, status, showLastSeparator } = useStepContext();
  const styles = useStepperStyles();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      "data-status": status,
      "data-orientation": orientation,
      "data-stretch": dataAttr(showLastSeparator),
      __css: styles.step,
      ...props,
      className: cx("chakra-step", props.className)
    }
  );
});

export { Step };
