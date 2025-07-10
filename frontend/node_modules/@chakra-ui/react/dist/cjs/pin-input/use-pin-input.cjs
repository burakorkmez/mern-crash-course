'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useDescendant = require('../descendant/use-descendant.cjs');

const [
  PinInputDescendantsProvider,
  usePinInputDescendantsContext,
  usePinInputDescendants,
  usePinInputDescendant
] = useDescendant.createDescendantContext();
const [PinInputProvider, usePinInputContext] = utils.createContext({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to place all pin input fields within `<PinInput />`"
});
const toArray = (value) => value?.split("");
function validate(value, type) {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
}
function usePinInput(props = {}) {
  const {
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = "\u25CB",
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled,
    isInvalid,
    type = "number",
    mask
  } = props;
  const uuid = React.useId();
  const id = idProp ?? `pin-input-${uuid}`;
  const descendants = usePinInputDescendants();
  const [moveFocus, setMoveFocus] = React.useState(true);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const [values, setValues] = hooks.useControllableState({
    defaultValue: toArray(defaultValue) || [],
    value: toArray(value),
    onChange: (values2) => onChange?.(values2.join(""))
  });
  React.useEffect(() => {
    if (autoFocus) {
      const first = descendants.first();
      if (first) {
        requestAnimationFrame(() => {
          first.node.focus();
        });
      }
    }
  }, [descendants]);
  const focusNext = React.useCallback(
    (index) => {
      if (!moveFocus || !manageFocus)
        return;
      const next = descendants.next(index, false);
      if (next) {
        requestAnimationFrame(() => {
          next.node.focus();
        });
      }
    },
    [descendants, moveFocus, manageFocus]
  );
  const setValue = React.useCallback(
    (value2, index, handleFocus = true) => {
      const nextValues = [...values];
      nextValues[index] = value2;
      setValues(nextValues);
      const isComplete = value2 !== "" && nextValues.length === descendants.count() && nextValues.every(
        (inputValue) => inputValue != null && inputValue !== ""
      );
      if (isComplete) {
        onComplete?.(nextValues.join(""));
      } else {
        if (handleFocus)
          focusNext(index);
      }
    },
    [values, setValues, focusNext, onComplete, descendants]
  );
  const clear = React.useCallback(() => {
    const values2 = Array(descendants.count()).fill("");
    setValues(values2);
    const first = descendants.first();
    first?.node?.focus();
  }, [descendants, setValues]);
  const getNextValue = React.useCallback((value2, eventValue) => {
    let nextValue = eventValue;
    if (value2?.length > 0) {
      if (value2[0] === eventValue.charAt(0)) {
        nextValue = eventValue.charAt(1);
      } else if (value2[0] === eventValue.charAt(1)) {
        nextValue = eventValue.charAt(0);
      }
    }
    return nextValue;
  }, []);
  const getInputProps = React.useCallback(
    (props2) => {
      const { index, ...rest } = props2;
      const onChange2 = (event) => {
        const eventValue = event.currentTarget.value;
        const currentValue = values[index];
        const nextValue = getNextValue(currentValue, eventValue);
        if (nextValue === "") {
          setValue("", index);
          return;
        }
        if (eventValue.length > 2) {
          if (validate(eventValue, type)) {
            const nextValue2 = eventValue.split("").filter((_, index2) => index2 < descendants.count());
            setValues(nextValue2);
            if (nextValue2.length === descendants.count()) {
              onComplete?.(nextValue2.join(""));
            }
          }
        } else {
          if (validate(nextValue, type)) {
            setValue(nextValue, index);
          }
          setMoveFocus(true);
        }
      };
      const onKeyDown = (event) => {
        if (event.key === "Backspace" && manageFocus) {
          if (event.currentTarget.value === "") {
            const prevInput = descendants.prev(index, false);
            if (prevInput) {
              setValue("", index - 1, false);
              prevInput.node?.focus();
              setMoveFocus(true);
            }
          } else {
            setMoveFocus(false);
          }
        }
      };
      const onFocus = () => {
        setFocusedIndex(index);
      };
      const onBlur = () => {
        setFocusedIndex(-1);
      };
      const hasFocus = focusedIndex === index;
      const inputType = type === "number" ? "tel" : "text";
      return {
        "aria-label": "Please enter your pin code",
        inputMode: type === "number" ? "numeric" : "text",
        type: mask ? "password" : inputType,
        ...rest,
        id: `${id}-${index}`,
        disabled: isDisabled,
        "aria-invalid": utils.ariaAttr(isInvalid),
        onChange: utils.callAllHandlers(rest.onChange, onChange2),
        onKeyDown: utils.callAllHandlers(rest.onKeyDown, onKeyDown),
        onFocus: utils.callAllHandlers(rest.onFocus, onFocus),
        onBlur: utils.callAllHandlers(rest.onBlur, onBlur),
        value: values[index] || "",
        autoComplete: otp ? "one-time-code" : "off",
        placeholder: hasFocus ? "" : placeholder
      };
    },
    [
      descendants,
      focusedIndex,
      getNextValue,
      id,
      isDisabled,
      mask,
      isInvalid,
      manageFocus,
      onComplete,
      otp,
      placeholder,
      setValue,
      setValues,
      type,
      values
    ]
  );
  return {
    // prop getter
    getInputProps,
    // state
    id,
    descendants,
    values,
    // actions
    setValue,
    setValues,
    clear
  };
}
function usePinInputField(props = {}, ref = null) {
  const { getInputProps } = usePinInputContext();
  const { index, register } = usePinInputDescendant();
  return getInputProps({
    ...props,
    ref: hooks.mergeRefs(register, ref),
    index: props.index ?? index
  });
}

exports.PinInputDescendantsProvider = PinInputDescendantsProvider;
exports.PinInputProvider = PinInputProvider;
exports.usePinInput = usePinInput;
exports.usePinInputContext = usePinInputContext;
exports.usePinInputDescendant = usePinInputDescendant;
exports.usePinInputDescendants = usePinInputDescendants;
exports.usePinInputDescendantsContext = usePinInputDescendantsContext;
exports.usePinInputField = usePinInputField;
