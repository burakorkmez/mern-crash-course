'use client';
'use strict';

var react = require('react');
var useCallbackRef = require('./use-callback-ref.cjs');

function useEventListener(target, event, handler, options) {
  const listener = useCallbackRef.useCallbackRef(handler);
  react.useEffect(() => {
    const node = typeof target === "function" ? target() : target ?? document;
    if (!handler || !node)
      return;
    node.addEventListener(event, listener, options);
    return () => {
      node.removeEventListener(event, listener, options);
    };
  }, [event, target, options, listener, handler]);
  return () => {
    const node = typeof target === "function" ? target() : target ?? document;
    node?.removeEventListener(event, listener, options);
  };
}

exports.useEventListener = useEventListener;
