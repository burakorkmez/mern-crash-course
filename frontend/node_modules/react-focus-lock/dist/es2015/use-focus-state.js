import { useCallback, useRef, useState, useEffect } from 'react';
import { createNanoEvents } from './nano-events';
var mainbus = createNanoEvents();
var subscribeCounter = 0;
var onFocusIn = function onFocusIn(event) {
  return mainbus.emit('assign', event.target);
};
var onFocusOut = function onFocusOut(event) {
  return mainbus.emit('reset', event.target);
};
var useDocumentFocusSubscribe = function useDocumentFocusSubscribe() {
  useEffect(function () {
    if (!subscribeCounter) {
      document.addEventListener('focusin', onFocusIn);
      document.addEventListener('focusout', onFocusOut);
    }
    subscribeCounter += 1;
    return function () {
      subscribeCounter -= 1;
      if (!subscribeCounter) {
        document.removeEventListener('focusin', onFocusIn);
        document.removeEventListener('focusout', onFocusOut);
      }
    };
  }, []);
};
var getFocusState = function getFocusState(target, current) {
  if (target === current) {
    return 'self';
  }
  if (current.contains(target)) {
    return 'within';
  }
  return 'within-boundary';
};
export var useFocusState = function useFocusState(callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }
  var _useState = useState(false),
    active = _useState[0],
    setActive = _useState[1];
  var _useState2 = useState(''),
    state = _useState2[0],
    setState = _useState2[1];
  var ref = useRef(null);
  var focusState = useRef({});
  var stateTracker = useRef(false);
  useEffect(function () {
    if (ref.current) {
      var isAlreadyFocused = ref.current === document.activeElement || ref.current.contains(document.activeElement);
      setActive(isAlreadyFocused);
      setState(getFocusState(document.activeElement, ref.current));
      if (isAlreadyFocused && callbacks.onFocus) {
        callbacks.onFocus();
      }
    }
  }, []);
  var onFocus = useCallback(function (e) {
    focusState.current = {
      focused: true,
      state: getFocusState(e.target, e.currentTarget)
    };
  }, []);
  useDocumentFocusSubscribe();
  useEffect(function () {
    var fout = mainbus.on('reset', function () {
      focusState.current = {};
    });
    var fin = mainbus.on('assign', function () {
      var newState = focusState.current.focused || false;
      setActive(newState);
      setState(focusState.current.state || '');
      if (newState !== stateTracker.current) {
        stateTracker.current = newState;
        if (newState) {
          callbacks.onFocus && callbacks.onFocus();
        } else {
          callbacks.onBlur && callbacks.onBlur();
        }
      }
    });
    return function () {
      fout();
      fin();
    };
  }, []);
  return {
    active: active,
    state: state,
    onFocus: onFocus,
    ref: ref
  };
};