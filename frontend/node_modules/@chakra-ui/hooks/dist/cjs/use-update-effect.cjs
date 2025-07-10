'use client';
'use strict';

var react = require('react');

const useUpdateEffect = (effect, deps) => {
  const renderCycleRef = react.useRef(false);
  const effectCycleRef = react.useRef(false);
  react.useEffect(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect();
    }
    effectCycleRef.current = true;
  }, deps);
  react.useEffect(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
};

exports.useUpdateEffect = useUpdateEffect;
