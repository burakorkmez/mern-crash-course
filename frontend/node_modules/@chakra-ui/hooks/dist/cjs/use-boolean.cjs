'use client';
'use strict';

var react = require('react');

function useBoolean(initialState = false) {
  const [value, setValue] = react.useState(initialState);
  const callbacks = react.useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev)
    }),
    []
  );
  return [value, callbacks];
}

exports.useBoolean = useBoolean;
