'use client';
import { useEffect } from 'react';
import { useCallbackRef } from './use-callback-ref.mjs';

function useInterval(callback, delay) {
  const fn = useCallbackRef(callback);
  useEffect(() => {
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

export { useInterval };
