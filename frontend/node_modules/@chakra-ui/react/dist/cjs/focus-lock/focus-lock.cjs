'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ReactFocusLock = require('react-focus-lock');
var utils = require('@chakra-ui/utils');
var React = require('react');

const FocusTrap = ReactFocusLock.default ?? ReactFocusLock;
const FocusLock = (props) => {
  const {
    initialFocusRef,
    finalFocusRef,
    contentRef,
    restoreFocus,
    children,
    isDisabled,
    autoFocus,
    persistentFocus,
    lockFocusAcrossFrames
  } = props;
  const onActivation = React.useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else if (contentRef?.current) {
      const focusables = utils.getAllFocusable(contentRef.current);
      if (focusables.length === 0) {
        requestAnimationFrame(() => {
          contentRef.current?.focus();
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  const onDeactivation = React.useCallback(() => {
    finalFocusRef?.current?.focus();
  }, [finalFocusRef]);
  const returnFocus = restoreFocus && !finalFocusRef;
  return /* @__PURE__ */ jsxRuntime.jsx(
    FocusTrap,
    {
      crossFrame: lockFocusAcrossFrames,
      persistentFocus,
      autoFocus,
      disabled: isDisabled,
      onActivation,
      onDeactivation,
      returnFocus,
      children
    }
  );
};
FocusLock.displayName = "FocusLock";

exports.FocusLock = FocusLock;
