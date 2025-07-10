'use client';
import { useMemo } from 'react';
import { createToastFn } from './create-toast-fn.mjs';
import { useToastOptionContext } from './toast.provider.mjs';
import { useChakra } from '../system/hooks.mjs';

function useToast(options) {
  const { theme } = useChakra();
  const defaultOptions = useToastOptionContext();
  return useMemo(
    () => createToastFn(theme.direction, {
      ...defaultOptions,
      ...options
    }),
    [options, theme.direction, defaultOptions]
  );
}

export { useToast };
