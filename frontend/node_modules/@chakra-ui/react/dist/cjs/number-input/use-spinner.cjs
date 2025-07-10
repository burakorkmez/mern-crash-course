'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var React = require('react');

const CONTINUOUS_CHANGE_INTERVAL = 50;
const CONTINUOUS_CHANGE_DELAY = 300;
function useSpinner(increment, decrement) {
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [action, setAction] = React.useState(null);
  const [runOnce, setRunOnce] = React.useState(true);
  const timeoutRef = React.useRef(null);
  const removeTimeout = () => clearTimeout(timeoutRef.current);
  hooks.useInterval(
    () => {
      if (action === "increment") {
        increment();
      }
      if (action === "decrement") {
        decrement();
      }
    },
    isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null
  );
  const up = React.useCallback(() => {
    if (runOnce) {
      increment();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("increment");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [increment, runOnce]);
  const down = React.useCallback(() => {
    if (runOnce) {
      decrement();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("decrement");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [decrement, runOnce]);
  const stop = React.useCallback(() => {
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);
  React.useEffect(() => {
    return () => removeTimeout();
  }, []);
  return { up, down, stop, isSpinning };
}

exports.useSpinner = useSpinner;
