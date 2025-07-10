'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');

function isInputEvent(value) {
  return value && utils.isObject(value) && utils.isObject(value.target);
}
function useRadioGroup(props = {}) {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    name: nameProp,
    isDisabled,
    isFocusable,
    isNative,
    ...htmlProps
  } = props;
  const [valueState, setValue] = React.useState(defaultValue || "");
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const ref = React.useRef(null);
  const focus = React.useCallback(() => {
    const rootNode = ref.current;
    if (!rootNode)
      return;
    let query = `input:not(:disabled):checked`;
    const firstEnabledAndCheckedInput = rootNode.querySelector(
      query
    );
    if (firstEnabledAndCheckedInput) {
      firstEnabledAndCheckedInput.focus();
      return;
    }
    query = `input:not(:disabled)`;
    const firstEnabledInput = rootNode.querySelector(query);
    firstEnabledInput?.focus();
  }, []);
  const uuid = React.useId();
  const fallbackName = `radio-${uuid}`;
  const name = nameProp || fallbackName;
  const onChange = React.useCallback(
    (eventOrValue) => {
      const nextValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp?.(String(nextValue));
    },
    [onChangeProp, isControlled]
  );
  const getRootProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: hooks.mergeRefs(forwardedRef, ref),
      role: "radiogroup"
    }),
    []
  );
  const getRadioProps = React.useCallback(
    (props2 = {}, ref2 = null) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        ref: ref2,
        name,
        [checkedKey]: value != null ? props2.value === value : void 0,
        onChange(event) {
          onChange(event);
        },
        "data-radiogroup": true
      };
    },
    [isNative, name, onChange, value]
  );
  return {
    getRootProps,
    getRadioProps,
    name,
    ref,
    focus,
    setValue,
    value,
    onChange,
    isDisabled,
    isFocusable,
    htmlProps
  };
}

exports.useRadioGroup = useRadioGroup;
