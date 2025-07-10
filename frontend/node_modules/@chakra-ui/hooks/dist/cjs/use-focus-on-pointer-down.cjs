'use client';
'use strict';

var useEventListener = require('./use-event-listener.cjs');

function isRefObject(val) {
  return "current" in val;
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const vn = (v) => isDom() && v.test(navigator.vendor);
const pt = (v) => isDom() && v.test(getPlatform());
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isSafari = () => isApple() && vn(/apple/i);
function useFocusOnPointerDown(props) {
  const { ref, elements, enabled } = props;
  const doc = () => ref.current?.ownerDocument ?? document;
  useEventListener.useEventListener(doc, "pointerdown", (event) => {
    if (!isSafari() || !enabled)
      return;
    const target = event.composedPath?.()?.[0] ?? event.target;
    const els = elements ?? [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
      return el?.contains(target) || el === target;
    });
    if (doc().activeElement !== target && isValidTarget) {
      event.preventDefault();
      target.focus();
    }
  });
}

exports.useFocusOnPointerDown = useFocusOnPointerDown;
