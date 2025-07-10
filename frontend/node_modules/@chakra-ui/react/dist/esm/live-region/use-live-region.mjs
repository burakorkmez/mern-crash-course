'use client';
import { useState, useEffect } from 'react';
import { LiveRegion } from './live-region.mjs';

function useLiveRegion(options) {
  const [liveRegion] = useState(() => new LiveRegion(options));
  useEffect(
    () => () => {
      liveRegion.destroy();
    },
    [liveRegion]
  );
  return liveRegion;
}

export { useLiveRegion };
