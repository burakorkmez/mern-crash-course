'use client';
import { jsx } from 'react/jsx-runtime';
import { createContext, cx } from '@chakra-ui/utils';
import { useMemo } from 'react';
import { useRadioGroup } from './use-radio-group.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { chakra } from '../system/factory.mjs';

const [RadioGroupProvider, useRadioGroupContext] = createContext({
  name: "RadioGroupContext",
  strict: false
});
const RadioGroup = forwardRef((props, ref) => {
  const {
    colorScheme,
    size,
    variant,
    children,
    className,
    isDisabled,
    isFocusable,
    ...rest
  } = props;
  const { value, onChange, getRootProps, name, htmlProps } = useRadioGroup(rest);
  const group = useMemo(
    () => ({
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable
    }),
    [
      name,
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable
    ]
  );
  return /* @__PURE__ */ jsx(RadioGroupProvider, { value: group, children: /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...getRootProps(htmlProps, ref),
      className: cx("chakra-radio-group", className),
      children
    }
  ) });
});
RadioGroup.displayName = "RadioGroup";

export { RadioGroup, useRadioGroupContext };
