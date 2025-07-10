'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var react = require('react');
var useCallbackRef = require('./use-callback-ref.cjs');

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
  const onChangeProp = useCallbackRef.useCallbackRef(onChange);
  const [valueState, setValue] = react.useState(() => {
    if (defaultValue == null)
      return "";
    return cast(defaultValue, stepProp, precisionProp) ?? "";
  });
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const decimalPlaces = getDecimalPlaces(parse(value), stepProp);
  const precision = precisionProp ?? decimalPlaces;
  const update = react.useCallback(
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
  const clamp = react.useCallback(
    (value2) => {
      let nextValue = value2;
      if (keepWithinRange) {
        nextValue = utils.clampValue(nextValue, min, max);
      }
      return utils.toPrecision(nextValue, precision);
    },
    [precision, keepWithinRange, max, min]
  );
  const increment = react.useCallback(
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
  const decrement = react.useCallback(
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
  const reset = react.useCallback(() => {
    let next;
    if (defaultValue == null) {
      next = "";
    } else {
      next = cast(defaultValue, stepProp, precisionProp) ?? min;
    }
    update(next);
  }, [defaultValue, precisionProp, stepProp, update, min]);
  const castValue = react.useCallback(
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
  return Math.max(utils.countDecimalPlaces(step), utils.countDecimalPlaces(value));
}
function cast(value, step, precision) {
  const parsedValue = parse(value);
  if (Number.isNaN(parsedValue))
    return void 0;
  const decimalPlaces = getDecimalPlaces(parsedValue, step);
  return utils.toPrecision(parsedValue, precision ?? decimalPlaces);
}

exports.useCounter = useCounter;
