'use client';
import { mergeRefs } from '@chakra-ui/hooks';
import { dataAttr } from '@chakra-ui/utils';
import { useState, useCallback } from 'react';
import { useEventListeners } from './use-event-listeners.mjs';

function isValidElement(event) {
  const target = event.composedPath?.()?.[0] ?? event.target;
  const { tagName, isContentEditable } = target;
  return tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true;
}
function useClickable(props = {}) {
  const {
    ref: htmlRef,
    isDisabled,
    isFocusable,
    clickOnEnter = true,
    clickOnSpace = true,
    onMouseDown,
    onMouseUp,
    onClick,
    onKeyDown,
    onKeyUp,
    tabIndex: tabIndexProp,
    onMouseOver,
    onMouseLeave,
    ...htmlProps
  } = props;
  const [isButton, setIsButton] = useState(true);
  const [isPressed, setIsPressed] = useState(false);
  const listeners = useEventListeners();
  const refCallback = (node) => {
    if (!node)
      return;
    if (node.tagName !== "BUTTON") {
      setIsButton(false);
    }
  };
  const tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
  const trulyDisabled = isDisabled && !isFocusable;
  const handleClick = useCallback(
    (event) => {
      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      const self = event.currentTarget;
      self.focus();
      onClick?.(event);
    },
    [isDisabled, onClick]
  );
  const onDocumentKeyUp = useCallback(
    (e) => {
      if (isPressed && isValidElement(e)) {
        e.preventDefault();
        e.stopPropagation();
        setIsPressed(false);
        listeners.remove(document, "keyup", onDocumentKeyUp, false);
      }
    },
    [isPressed, listeners]
  );
  const handleKeyDown = useCallback(
    (event) => {
      onKeyDown?.(event);
      if (isDisabled || event.defaultPrevented || event.metaKey) {
        return;
      }
      if (!isValidElement(event.nativeEvent) || isButton)
        return;
      const shouldClickOnEnter = clickOnEnter && event.key === "Enter";
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(true);
      }
      if (shouldClickOnEnter) {
        event.preventDefault();
        const self = event.currentTarget;
        self.click();
      }
      listeners.add(document, "keyup", onDocumentKeyUp, false);
    },
    [
      isDisabled,
      isButton,
      onKeyDown,
      clickOnEnter,
      clickOnSpace,
      listeners,
      onDocumentKeyUp
    ]
  );
  const handleKeyUp = useCallback(
    (event) => {
      onKeyUp?.(event);
      if (isDisabled || event.defaultPrevented || event.metaKey)
        return;
      if (!isValidElement(event.nativeEvent) || isButton)
        return;
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(false);
        const self = event.currentTarget;
        self.click();
      }
    },
    [clickOnSpace, isButton, isDisabled, onKeyUp]
  );
  const onDocumentMouseUp = useCallback(
    (event) => {
      if (event.button !== 0)
        return;
      setIsPressed(false);
      listeners.remove(document, "mouseup", onDocumentMouseUp, false);
    },
    [listeners]
  );
  const handleMouseDown = useCallback(
    (event) => {
      if (event.button !== 0)
        return;
      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      if (!isButton) {
        setIsPressed(true);
      }
      const target = event.currentTarget;
      target.focus({ preventScroll: true });
      listeners.add(document, "mouseup", onDocumentMouseUp, false);
      onMouseDown?.(event);
    },
    [isDisabled, isButton, onMouseDown, listeners, onDocumentMouseUp]
  );
  const handleMouseUp = useCallback(
    (event) => {
      if (event.button !== 0)
        return;
      if (!isButton) {
        setIsPressed(false);
      }
      onMouseUp?.(event);
    },
    [onMouseUp, isButton]
  );
  const handleMouseOver = useCallback(
    (event) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onMouseOver?.(event);
    },
    [isDisabled, onMouseOver]
  );
  const handleMouseLeave = useCallback(
    (event) => {
      if (isPressed) {
        event.preventDefault();
        setIsPressed(false);
      }
      onMouseLeave?.(event);
    },
    [isPressed, onMouseLeave]
  );
  const ref = mergeRefs(htmlRef, refCallback);
  if (isButton) {
    return {
      ...htmlProps,
      ref,
      type: "button",
      "aria-disabled": trulyDisabled ? void 0 : isDisabled,
      disabled: trulyDisabled,
      onClick: handleClick,
      onMouseDown,
      onMouseUp,
      onKeyUp,
      onKeyDown,
      onMouseOver,
      onMouseLeave
    };
  }
  return {
    ...htmlProps,
    ref,
    role: "button",
    "data-active": dataAttr(isPressed),
    "aria-disabled": isDisabled ? "true" : void 0,
    tabIndex: trulyDisabled ? void 0 : tabIndex,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  };
}

export { useClickable };
