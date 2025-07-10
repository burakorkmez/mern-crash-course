'use client';
import { jsx } from 'react/jsx-runtime';
import ReactFocusLock from 'react-focus-lock';
import { getAllFocusable } from '@chakra-ui/utils';
import { useCallback } from 'react';

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
  const onActivation = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else if (contentRef?.current) {
      const focusables = getAllFocusable(contentRef.current);
      if (focusables.length === 0) {
        requestAnimationFrame(() => {
          contentRef.current?.focus();
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  const onDeactivation = useCallback(() => {
    finalFocusRef?.current?.focus();
  }, [finalFocusRef]);
  const returnFocus = restoreFocus && !finalFocusRef;
  return /* @__PURE__ */ jsx(
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

export { FocusLock };
