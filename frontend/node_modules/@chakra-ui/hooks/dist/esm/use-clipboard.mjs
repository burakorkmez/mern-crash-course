'use client';
import { useState, useEffect, useCallback } from 'react';
import copy from 'copy-to-clipboard';

function useClipboard(value, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = useState(false);
  const [valueState, setValueState] = useState(value);
  useEffect(() => setValueState(value), [value]);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = useCallback(
    (valueToCopy) => {
      const value2 = typeof valueToCopy === "string" ? valueToCopy : valueState;
      if ("clipboard" in navigator) {
        navigator.clipboard.writeText(value2).then(() => setHasCopied(true)).catch(() => setHasCopied(copy(value2, copyOptions)));
      } else {
        setHasCopied(copy(value2, copyOptions));
      }
    },
    [valueState, copyOptions]
  );
  useEffect(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: valueState,
    setValue: setValueState,
    onCopy,
    hasCopied
  };
}

export { useClipboard };
