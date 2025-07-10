'use client';
import { useRef, useEffect } from 'react';
import { useCallbackRef } from './use-callback-ref.mjs';

function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);
  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state = stateRef.current;
  useEffect(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state.ignoreEmulatedMouseEvents = true;
      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state, enabled]);
}
function isValidEvent(event, ref) {
  const target = event.composedPath?.()[0] ?? event.target;
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target))
      return false;
  }
  return !ref.current?.contains(target);
}
function getOwnerDocument(node) {
  return node?.ownerDocument ?? document;
}

export { useOutsideClick };
