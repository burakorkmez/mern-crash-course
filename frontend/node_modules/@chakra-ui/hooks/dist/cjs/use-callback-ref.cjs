'use client';
'use strict';

var react = require('react');

function useCallbackRef(callback, deps = []) {
  const callbackRef = react.useRef(callback);
  react.useEffect(() => {
    callbackRef.current = callback;
  });
  return react.useCallback((...args) => callbackRef.current?.(...args), deps);
}

exports.useCallbackRef = useCallbackRef;
