'use client';
'use strict';

var React = require('react');

function useEventListeners() {
  const listeners = React.useRef(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add = React.useCallback((el, type, listener, options) => {
    listeners.current.set(listener, { type, el, options });
    el.addEventListener(type, listener, options);
  }, []);
  const remove = React.useCallback(
    (el, type, listener, options) => {
      el.removeEventListener(type, listener, options);
      listeners.current.delete(listener);
    },
    []
  );
  React.useEffect(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add, remove };
}

exports.useEventListeners = useEventListeners;
