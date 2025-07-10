'use client';
import { clampValue, toPrecision, countDecimalPlaces } from '@chakra-ui/utils';
import { useState, useCallback } from 'react';
import { useCallbackRef } from './use-callback-ref.mjs';

function useCounter(props = {}) {
  const {
    onChange,
    precision: precisionProp,
    defaultValue,
    value: valueProp,
    step: stepProp = 1,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    keepWithinRange = true
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [valueState, setValue] = useState(() => {
    if (defaultValue == null)
      return "";
    return cast(defaultValue, stepProp, precisionProp) ?? "";
  });
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const decimalPlaces = getDecimalPlaces(parse(value), stepProp);
  const precision = precisionProp ?? decimalPlaces;
  const update = useCallback(
    (next) => {
      if (next === value)
        return;
      if (!isControlled) {
        setValue(next.toString());
      }
      onChangeProp?.(next.toString(), parse(next));
    },
    [onChangeProp, isControlled, value]
  );
  const clamp = useCallback(
    (value2) => {
      let nextValue = value2;
      if (keepWithinRange) {
        nextValue = clampValue(nextValue, min, max);
      }
      return toPrecision(nextValue, precision);
    },
    [precision, keepWithinRange, max, min]
  );
  const increment = useCallback(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse(step);
      } else {
        next = parse(value) + step;
      }
      next = clamp(next);
      update(next);
    },
    [clamp, stepProp, update, value]
  );
  const decrement = useCallback(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse(-step);
      } else {
        next = parse(value) - step;
      }
      next = clamp(next);
      update(next);
    },
    [clamp, stepProp, update, value]
  );
  const reset = useCallback(() => {
    let next;
    if (defaultValue == null) {
      next = "";
    } else {
      next = cast(defaultValue, stepProp, precisionProp) ?? min;
    }
    update(next);
  }, [defaultValue, precisionProp, stepProp, update, min]);
  const castValue = useCallback(
    (value2) => {
      const nextValue = cast(value2, stepProp, precision) ?? min;
      update(nextValue);
    },
    [precision, stepProp, update, min]
  );
  const valueAsNumber = parse(value);
  const isOutOfRange = valueAsNumber > max || valueAsNumber < min;
  const isAtMax = valueAsNumber === max;
  const isAtMin = valueAsNumber === min;
  return {
    isOutOfRange,
    isAtMax,
    isAtMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp,
    cast: castValue,
    setValue
  };
}
function parse(value) {
  return parseFloat(value.toString().replace(/[^\w.-]+/g, ""));
}
function getDecimalPlaces(value, step) {
  return Math.max(countDecimalPlaces(step), countDecimalPlaces(value));
}
function cast(value, step, precision) {
  const parsedValue = parse(value);
  if (Number.isNaN(parsedValue))
    return void 0;
  const decimalPlaces = getDecimalPlaces(parsedValue, step);
  return toPrecision(parsedValue, precision ?? decimalPlaces);
}

export { useCounter };
