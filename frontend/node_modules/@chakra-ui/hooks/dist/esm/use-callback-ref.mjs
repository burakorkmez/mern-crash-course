'use client';
import { useRef, useEffect, useCallback } from 'react';

function useCallbackRef(callback, deps = []) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return useCallback((...args) => callbackRef.current?.(...args), deps);
}

export { useCallbackRef };
