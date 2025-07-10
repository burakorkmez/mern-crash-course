'use client';
import { jsx } from 'react/jsx-runtime';
import { cx } from '@chakra-ui/utils';
import { CheckIcon } from './icons.mjs';
import { useStepContext, useStepperStyles } from './step-context.mjs';
import { Icon } from '../icon/icon.mjs';

function StepIcon(props) {
  const { status } = useStepContext();
  const styles = useStepperStyles();
  const icon = status === "complete" ? CheckIcon : void 0;
  return /* @__PURE__ */ jsx(
    Icon,
    {
      as: icon,
      __css: styles.icon,
      ...props,
      className: cx("chakra-step__icon", props.className)
    }
  );
}

export { StepIcon };
