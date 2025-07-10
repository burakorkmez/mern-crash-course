"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusState = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _nanoEvents = require("./nano-events");
var mainbus = (0, _nanoEvents.createNanoEvents)();
var subscribeCounter = 0;
var onFocusIn = function onFocusIn(event) {
  return mainbus.emit('assign', event.target);
};
var onFocusOut = function onFocusOut(event) {
  return mainbus.emit('reset', event.target);
};
var useDocumentFocusSubscribe = function useDocumentFocusSubscribe() {
  (0, _react.useEffect)(function () {
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
var useFocusState = exports.useFocusState = function useFocusState() {
  var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    state = _useState4[0],
    setState = _useState4[1];
  var ref = (0, _react.useRef)(null);
  var focusState = (0, _react.useRef)({});
  var stateTracker = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (ref.current) {
      var isAlreadyFocused = ref.current === document.activeElement || ref.current.contains(document.activeElement);
      setActive(isAlreadyFocused);
      setState(getFocusState(document.activeElement, ref.current));
      if (isAlreadyFocused && callbacks.onFocus) {
        callbacks.onFocus();
      }
    }
  }, []);
  var onFocus = (0, _react.useCallback)(function (e) {
    focusState.current = {
      focused: true,
      state: getFocusState(e.target, e.currentTarget)
    };
  }, []);
  useDocumentFocusSubscribe();
  (0, _react.useEffect)(function () {
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