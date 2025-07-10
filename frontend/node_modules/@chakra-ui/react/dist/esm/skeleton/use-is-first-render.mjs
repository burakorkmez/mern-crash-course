'use client';
import { useRef, useEffect } from 'react';

function useIsFirstRender() {
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

export { useIsFirstRender };
