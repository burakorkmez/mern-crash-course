'use client';
import { trackElementSize } from '@zag-js/element-size';
import { useState, useLayoutEffect, useEffect } from 'react';

const useSafeLayoutEffect = Boolean(globalThis?.document) ? useLayoutEffect : useEffect;
function trackMutation(el, cb) {
  if (!el || !el.parentElement)
    return;
  const win = el.ownerDocument?.defaultView ?? window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
function useSizes(props) {
  const {
    getNodes,
    observeMutation = true,
    enabled = true,
    fallback = []
  } = props;
  const [sizes, setSizes] = useState(fallback);
  const [count, setCount] = useState(0);
  useSafeLayoutEffect(() => {
    if (!enabled)
      return;
    const elements = getNodes();
    const cleanups = elements.map(
      (element, index) => trackElementSize(element, (size) => {
        setSizes((sizes2) => {
          return [
            ...sizes2.slice(0, index),
            size,
            ...sizes2.slice(index + 1)
          ];
        });
      })
    );
    if (observeMutation) {
      const firstNode = elements[0];
      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count2) => count2 + 1);
        })
      );
    }
    return () => {
      cleanups.forEach((cleanup) => {
        cleanup?.();
      });
    };
  }, [count, enabled]);
  return sizes;
}
function isRef(ref) {
  return typeof ref === "object" && ref !== null && "current" in ref;
}
function useSize(subject, options) {
  const { observeMutation = false, enabled, fallback } = options ?? {};
  const [size] = useSizes({
    observeMutation,
    enabled,
    fallback: fallback ? [fallback] : void 0,
    getNodes() {
      const node = isRef(subject) ? subject.current : subject;
      return [node];
    }
  });
  return size;
}

export { useSize, useSizes };
