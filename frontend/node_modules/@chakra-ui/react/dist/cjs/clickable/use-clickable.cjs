'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useEventListeners = require('./use-event-listeners.cjs');

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
  const [isButton, setIsButton] = React.useState(true);
  const [isPressed, setIsPressed] = React.useState(false);
  const listeners = useEventListeners.useEventListeners();
  const refCallback = (node) => {
    if (!node)
      return;
    if (node.tagName !== "BUTTON") {
      setIsButton(false);
    }
  };
  const tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
  const trulyDisabled = isDisabled && !isFocusable;
  const handleClick = React.useCallback(
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
  const onDocumentKeyUp = React.useCallback(
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
  const handleKeyDown = React.useCallback(
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
  const handleKeyUp = React.useCallback(
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
  const onDocumentMouseUp = React.useCallback(
    (event) => {
      if (event.button !== 0)
        return;
      setIsPressed(false);
      listeners.remove(document, "mouseup", onDocumentMouseUp, false);
    },
    [listeners]
  );
  const handleMouseDown = React.useCallback(
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
  const handleMouseUp = React.useCallback(
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
  const handleMouseOver = React.useCallback(
    (event) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onMouseOver?.(event);
    },
    [isDisabled, onMouseOver]
  );
  const handleMouseLeave = React.useCallback(
    (event) => {
      if (isPressed) {
        event.preventDefault();
        setIsPressed(false);
      }
      onMouseLeave?.(event);
    },
    [isPressed, onMouseLeave]
  );
  const ref = hooks.mergeRefs(htmlRef, refCallback);
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
    "data-active": utils.dataAttr(isPressed),
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

exports.useClickable = useClickable;
