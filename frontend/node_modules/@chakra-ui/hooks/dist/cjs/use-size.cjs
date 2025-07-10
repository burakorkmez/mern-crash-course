'use client';
'use strict';

var elementSize = require('@zag-js/element-size');
var react = require('react');

const useSafeLayoutEffect = Boolean(globalThis?.document) ? react.useLayoutEffect : react.useEffect;
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
  const [sizes, setSizes] = react.useState(fallback);
  const [count, setCount] = react.useState(0);
  useSafeLayoutEffect(() => {
    if (!enabled)
      return;
    const elements = getNodes();
    const cleanups = elements.map(
      (element, index) => elementSize.trackElementSize(element, (size) => {
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

exports.useSize = useSize;
exports.useSizes = useSizes;
