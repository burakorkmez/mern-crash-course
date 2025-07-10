'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var checkboxContext = require('./checkbox-context.cjs');
var useCheckboxGroup = require('./use-checkbox-group.cjs');

function CheckboxGroup(props) {
  const { colorScheme, size, variant, children, isDisabled } = props;
  const { value, onChange } = useCheckboxGroup.useCheckboxGroup(props);
  const group = React.useMemo(
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
  return /* @__PURE__ */ jsxRuntime.jsx(checkboxContext.CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

exports.CheckboxGroup = CheckboxGroup;
