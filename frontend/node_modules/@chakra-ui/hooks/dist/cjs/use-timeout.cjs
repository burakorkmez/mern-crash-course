'use client';
'use strict';

var react = require('react');
var useCallbackRef = require('./use-callback-ref.cjs');

function useTimeout(callback, delay) {
  const fn = useCallbackRef.useCallbackRef(callback);
  react.useEffect(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn]);
}

exports.useTimeout = useTimeout;
