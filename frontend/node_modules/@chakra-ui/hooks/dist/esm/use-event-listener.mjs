'use client';
import { useEffect } from 'react';
import { useCallbackRef } from './use-callback-ref.mjs';

function useEventListener(target, event, handler, options) {
  const listener = useCallbackRef(handler);
  useEffect(() => {
    const node = typeof target === "function" ? target() : target ?? document;
    if (!handler || !node)
      return;
    node.addEventListener(event, listener, options);
    return () => {
      node.removeEventListener(event, listener, options);
    };
  }, [event, target, options, listener, handler]);
  return () => {
    const node = typeof target === "function" ? target() : target ?? document;
    node?.removeEventListener(event, listener, options);
  };
}

export { useEventListener };
