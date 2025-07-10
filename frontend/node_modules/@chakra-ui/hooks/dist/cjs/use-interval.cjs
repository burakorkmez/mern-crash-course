'use client';
'use strict';

var react = require('react');
var useCallbackRef = require('./use-callback-ref.cjs');

function useInterval(callback, delay) {
  const fn = useCallbackRef.useCallbackRef(callback);
  react.useEffect(() => {
    let intervalId = null;
    const tick = () => fn();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn]);
}

exports.useInterval = useInterval;
