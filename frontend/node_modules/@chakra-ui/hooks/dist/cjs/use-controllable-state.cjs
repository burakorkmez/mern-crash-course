'use client';
'use strict';

var react = require('react');
var useCallbackRef = require('./use-callback-ref.cjs');

function useControllableProp(prop, state) {
  const controlled = typeof prop !== "undefined";
  const value = controlled ? prop : state;
  return react.useMemo(() => [controlled, value], [controlled, value]);
}
function useControllableState(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;
  const onChangeProp = useCallbackRef.useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef.useCallbackRef(shouldUpdate);
  const [uncontrolledState, setUncontrolledState] = react.useState(defaultValue);
  const controlled = valueProp !== void 0;
  const value = controlled ? valueProp : uncontrolledState;
  const setValue = useCallbackRef.useCallbackRef(
    (next) => {
      const setter = next;
      const nextValue = typeof next === "function" ? setter(value) : next;
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!controlled) {
        setUncontrolledState(nextValue);
      }
      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, setValue];
}

exports.useControllableProp = useControllableProp;
exports.useControllableState = useControllableState;
