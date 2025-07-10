'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var react = require('react');
var useLatestRef = require('../use-latest-ref.cjs');
var panEvent = require('./pan-event.cjs');

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
  const panSession = react.useRef(null);
  const handlersRef = useLatestRef.useLatestRef({
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd?.(event, info);
    }
  });
  react.useEffect(() => {
    panSession.current?.updateHandlers(handlersRef.current);
  });
  react.useEffect(() => {
    const node = ref.current;
    if (!node || !hasPanEvents)
      return;
    function onPointerDown(event) {
      panSession.current = new panEvent.PanEvent(event, handlersRef.current, threshold);
    }
    return utils.addPointerEvent(node, "pointerdown", onPointerDown);
  }, [ref, hasPanEvents, handlersRef, threshold]);
  react.useEffect(() => {
    return () => {
      panSession.current?.end();
      panSession.current = null;
    };
  }, []);
}

exports.usePanEvent = usePanEvent;
