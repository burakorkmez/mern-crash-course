'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');

function isInputEvent(value) {
  return value && utils.isObject(value) && utils.isObject(value.target);
}
function useCheckboxGroup(props = {}) {
  const {
    defaultValue,
    value: valueProp,
    onChange,
    isDisabled,
    isNative
  } = props;
  const onChangeProp = hooks.useCallbackRef(onChange);
  const [value, setValue] = hooks.useControllableState({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  const handleChange = React.useCallback(
    (eventOrValue) => {
      if (!value)
        return;
      const isChecked = isInputEvent(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
      const selectedValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      const nextValue = isChecked ? [...value, selectedValue] : value.filter((v) => String(v) !== String(selectedValue));
      setValue(nextValue);
    },
    [setValue, value]
  );
  const getCheckboxProps = React.useCallback(
    (props2 = {}) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        [checkedKey]: value.some((val) => String(props2.value) === String(val)),
        onChange: handleChange
      };
    },
    [handleChange, isNative, value]
  );
  return {
    value,
    isDisabled,
    onChange: handleChange,
    setValue,
    getCheckboxProps
  };
}

exports.useCheckboxGroup = useCheckboxGroup;
