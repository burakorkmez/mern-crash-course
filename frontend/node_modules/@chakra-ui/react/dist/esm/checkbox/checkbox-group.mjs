'use client';
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { CheckboxGroupProvider } from './checkbox-context.mjs';
import { useCheckboxGroup } from './use-checkbox-group.mjs';

function CheckboxGroup(props) {
  const { colorScheme, size, variant, children, isDisabled } = props;
  const { value, onChange } = useCheckboxGroup(props);
  const group = useMemo(
    () => ({
      size,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled
    }),
    [size, onChange, colorScheme, value, variant, isDisabled]
  );
  return /* @__PURE__ */ jsx(CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup };
