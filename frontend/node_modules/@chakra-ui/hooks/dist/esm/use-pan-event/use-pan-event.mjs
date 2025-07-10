'use client';
import { addPointerEvent } from '@chakra-ui/utils';
import { useRef, useEffect } from 'react';
import { useLatestRef } from '../use-latest-ref.mjs';
import { PanEvent } from './pan-event.mjs';

function usePanEvent(ref, options) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = options;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = useRef(null);
  const handlersRef = useLatestRef({
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd?.(event, info);
    }
  });
  useEffect(() => {
    panSession.current?.updateHandlers(handlersRef.current);
  });
  useEffect(() => {
    const node = ref.current;
    if (!node || !hasPanEvents)
      return;
    function onPointerDown(event) {
      panSession.current = new PanEvent(event, handlersRef.current, threshold);
    }
    return addPointerEvent(node, "pointerdown", onPointerDown);
  }, [ref, hasPanEvents, handlersRef, threshold]);
  useEffect(() => {
    return () => {
      panSession.current?.end();
      panSession.current = null;
    };
  }, []);
}

export { usePanEvent };
