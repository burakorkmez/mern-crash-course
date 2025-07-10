'use client';
import { useCallbackRef, useCounter, useUpdateEffect, useSafeLayoutEffect, useEventListener, mergeRefs } from '@chakra-ui/hooks';
import { callAllHandlers, ariaAttr } from '@chakra-ui/utils';
import { useState, useRef, useCallback, useMemo } from 'react';
import { useAttributeObserver } from './use-attr-observer.mjs';
import { useSpinner } from './use-spinner.mjs';

const FLOATING_POINT_REGEX = /^[Ee0-9+\-.]$/;
function isFloatingPointNumericCharacter(character) {
  return FLOATING_POINT_REGEX.test(character);
}
function isValidNumericKeyboardEvent(event, isValid) {
  if (event.key == null)
    return true;
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  const isSingleCharacterKey = event.key.length === 1;
  if (!isSingleCharacterKey || isModifierKey)
    return true;
  return isValid(event.key);
}
function useNumberInput(props = {}) {
  const {
    focusInputOnChange = true,
    clampValueOnBlur = true,
    keepWithinRange = true,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step: stepProp = 1,
    isReadOnly,
    isDisabled,
    isRequired,
    isInvalid,
    pattern = "[0-9]*(.[0-9]+)?",
    inputMode = "decimal",
    allowMouseWheel,
    id,
    onChange: _,
    precision,
    name,
    "aria-describedby": ariaDescBy,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onInvalid: onInvalidProp,
    getAriaValueText: getAriaValueTextProp,
    isValidCharacter: isValidCharacterProp,
    format: formatValue,
    parse: parseValue,
    ...htmlProps
  } = props;
  const onFocus = useCallbackRef(onFocusProp);
  const onBlur = useCallbackRef(onBlurProp);
  const onInvalid = useCallbackRef(onInvalidProp);
  const isValidCharacter = useCallbackRef(
    isValidCharacterProp ?? isFloatingPointNumericCharacter
  );
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const counter = useCounter(props);
  const {
    update: updateFn,
    increment: incrementFn,
    decrement: decrementFn
  } = counter;
  const [isFocused, setFocused] = useState(false);
  const isInteractive = !(isReadOnly || isDisabled);
  const inputRef = useRef(null);
  const inputSelectionRef = useRef(null);
  const incrementButtonRef = useRef(null);
  const decrementButtonRef = useRef(null);
  const sanitize = useCallback(
    (value) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter]
  );
  const parse = useCallback(
    (value) => parseValue?.(value) ?? value,
    [parseValue]
  );
  const format = useCallback(
    (value) => (formatValue?.(value) ?? value).toString(),
    [formatValue]
  );
  useUpdateEffect(() => {
    if (counter.valueAsNumber > max) {
      onInvalid?.("rangeOverflow", format(counter.value), counter.valueAsNumber);
    } else if (counter.valueAsNumber < min) {
      onInvalid?.("rangeOverflow", format(counter.value), counter.valueAsNumber);
    }
  }, [counter.valueAsNumber, counter.value, format, onInvalid]);
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.value != counter.value;
    if (notInSync) {
      const parsedInput = parse(inputRef.current.value);
      counter.setValue(sanitize(parsedInput));
    }
  }, [parse, sanitize]);
  const increment = useCallback(
    (step = stepProp) => {
      if (isInteractive) {
        incrementFn(step);
      }
    },
    [incrementFn, isInteractive, stepProp]
  );
  const decrement = useCallback(
    (step = stepProp) => {
      if (isInteractive) {
        decrementFn(step);
      }
    },
    [decrementFn, isInteractive, stepProp]
  );
  const spinner = useSpinner(increment, decrement);
  useAttributeObserver(
    incrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  useAttributeObserver(
    decrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  const onChange = useCallback(
    (event) => {
      const evt = event.nativeEvent;
      if (evt.isComposing)
        return;
      const parsedInput = parse(event.currentTarget.value);
      updateFn(sanitize(parsedInput));
      inputSelectionRef.current = {
        start: event.currentTarget.selectionStart,
        end: event.currentTarget.selectionEnd
      };
    },
    [updateFn, sanitize, parse]
  );
  const _onFocus = useCallback(
    (event) => {
      onFocus?.(event);
      if (!inputSelectionRef.current)
        return;
      event.currentTarget.selectionStart = inputSelectionRef.current.start ?? event.currentTarget.value?.length;
      event.currentTarget.selectionEnd = inputSelectionRef.current.end ?? event.currentTarget.selectionStart;
    },
    [onFocus]
  );
  const onKeyDown = useCallback(
    (e) => {
      if (e.nativeEvent.isComposing)
        return;
      if (!isValidNumericKeyboardEvent(e, isValidCharacter)) {
        e.preventDefault();
      }
      const stepFactor = getStepFactor(e) * stepProp;
      const eventKey = e.key;
      const keyMap = {
        ArrowUp: () => increment(stepFactor),
        ArrowDown: () => decrement(stepFactor),
        Home: () => updateFn(min),
        End: () => updateFn(max)
      };
      const action = keyMap[eventKey];
      if (action) {
        e.preventDefault();
        action(e);
      }
    },
    [isValidCharacter, stepProp, increment, decrement, updateFn, min, max]
  );
  const getStepFactor = (event) => {
    let ratio = 1;
    if (event.metaKey || event.ctrlKey) {
      ratio = 0.1;
    }
    if (event.shiftKey) {
      ratio = 10;
    }
    return ratio;
  };
  const ariaValueText = useMemo(() => {
    const text = getAriaValueText?.(counter.value);
    if (text != null)
      return text;
    const defaultText = counter.value.toString();
    return !defaultText ? void 0 : defaultText;
  }, [counter.value, getAriaValueText]);
  const validateAndClamp = useCallback(() => {
    let next = counter.value;
    if (counter.value === "")
      return;
    const valueStartsWithE = /^[eE]/.test(counter.value.toString());
    if (valueStartsWithE) {
      counter.setValue("");
    } else {
      if (counter.valueAsNumber < min) {
        next = min;
      }
      if (counter.valueAsNumber > max) {
        next = max;
      }
      counter.cast(next);
    }
  }, [counter, max, min]);
  const onInputBlur = useCallback(() => {
    setFocused(false);
    if (clampValueOnBlur) {
      validateAndClamp();
    }
  }, [clampValueOnBlur, setFocused, validateAndClamp]);
  const focusInput = useCallback(() => {
    if (focusInputOnChange) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [focusInputOnChange]);
  const spinUp = useCallback(
    (event) => {
      event.preventDefault();
      spinner.up();
      focusInput();
    },
    [focusInput, spinner]
  );
  const spinDown = useCallback(
    (event) => {
      event.preventDefault();
      spinner.down();
      focusInput();
    },
    [focusInput, spinner]
  );
  useEventListener(
    () => inputRef.current,
    "wheel",
    (event) => {
      const doc = inputRef.current?.ownerDocument ?? document;
      const isInputFocused = doc.activeElement === inputRef.current;
      if (!allowMouseWheel || !isInputFocused)
        return;
      event.preventDefault();
      const stepFactor = getStepFactor(event) * stepProp;
      const direction = Math.sign(event.deltaY);
      if (direction === -1) {
        increment(stepFactor);
      } else if (direction === 1) {
        decrement(stepFactor);
      }
    },
    { passive: false }
  );
  const getIncrementButtonProps = useCallback(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled || keepWithinRange && counter.isAtMax;
      return {
        ...props2,
        ref: mergeRefs(ref, incrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinUp(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter.isAtMax, keepWithinRange, spinUp, spinner.stop, isDisabled]
  );
  const getDecrementButtonProps = useCallback(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled || keepWithinRange && counter.isAtMin;
      return {
        ...props2,
        ref: mergeRefs(ref, decrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinDown(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter.isAtMin, keepWithinRange, spinDown, spinner.stop, isDisabled]
  );
  const getInputProps = useCallback(
    (props2 = {}, ref = null) => ({
      name,
      inputMode,
      type: "text",
      pattern,
      "aria-labelledby": ariaLabelledBy,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescBy,
      id,
      disabled: isDisabled,
      role: "spinbutton",
      ...props2,
      readOnly: props2.readOnly ?? isReadOnly,
      "aria-readonly": props2.readOnly ?? isReadOnly,
      "aria-required": props2.required ?? isRequired,
      required: props2.required ?? isRequired,
      ref: mergeRefs(inputRef, ref),
      value: format(counter.value),
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": Number.isNaN(counter.valueAsNumber) ? void 0 : counter.valueAsNumber,
      "aria-invalid": ariaAttr(isInvalid ?? counter.isOutOfRange),
      "aria-valuetext": ariaValueText,
      autoComplete: "off",
      autoCorrect: "off",
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(
        props2.onFocus,
        _onFocus,
        () => setFocused(true)
      ),
      onBlur: callAllHandlers(props2.onBlur, onBlur, onInputBlur)
    }),
    [
      name,
      inputMode,
      pattern,
      ariaLabelledBy,
      ariaLabel,
      format,
      ariaDescBy,
      id,
      isDisabled,
      isRequired,
      isReadOnly,
      isInvalid,
      counter.value,
      counter.valueAsNumber,
      counter.isOutOfRange,
      min,
      max,
      ariaValueText,
      onChange,
      onKeyDown,
      _onFocus,
      onBlur,
      onInputBlur
    ]
  );
  return {
    value: format(counter.value),
    valueAsNumber: counter.valueAsNumber,
    isFocused,
    isDisabled,
    isReadOnly,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getInputProps,
    htmlProps
  };
}

export { useNumberInput };
