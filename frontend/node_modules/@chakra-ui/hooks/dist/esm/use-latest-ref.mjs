'use client';
import { useRef } from 'react';

function useLatestRef(value) {
  const ref = useRef(null);
  ref.current = value;
  return ref;
}

export { useLatestRef };
