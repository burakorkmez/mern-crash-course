'use client';
import { jsx } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { cx } from '@chakra-ui/utils';
import { Children } from 'react';
import { StepperStylesProvider, StepContextProvider } from './step-context.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const Stepper = forwardRef(function Stepper2(props, ref) {
  const styles = useMultiStyleConfig("Stepper", props);
  const {
    children,
    index,
    orientation = "horizontal",
    showLastSeparator = false,
    ...restProps
  } = omitThemingProps(props);
  const stepElements = Children.toArray(children);
  const stepCount = stepElements.length;
  function getStatus(step) {
    if (step < index)
      return "complete";
    if (step > index)
      return "incomplete";
    return "active";
  }
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      "aria-label": "Progress",
      "data-orientation": orientation,
      ...restProps,
      __css: styles.stepper,
      className: cx("chakra-stepper", props.className),
      children: /* @__PURE__ */ jsx(StepperStylesProvider, { value: styles, children: stepElements.map((child, index2) => /* @__PURE__ */ jsx(
        StepContextProvider,
        {
          value: {
            index: index2,
            status: getStatus(index2),
            orientation,
            showLastSeparator,
            count: stepCount,
            isFirst: index2 === 0,
            isLast: index2 === stepCount - 1
          },
          children: child
        },
        index2
      )) })
    }
  );
});

export { Stepper };
