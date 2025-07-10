'use client';
import { useLayoutEffect, useEffect } from 'react';

const useSafeLayoutEffect = Boolean(globalThis?.document) ? useLayoutEffect : useEffect;

export { useSafeLayoutEffect };
