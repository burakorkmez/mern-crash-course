'use client';
'use strict';

var utils = require('@chakra-ui/utils');
var react = require('react');
var useEventListener = require('./use-event-listener.cjs');
var useSafeLayoutEffect = require('./use-safe-layout-effect.cjs');
var useUpdateEffect = require('./use-update-effect.cjs');

function preventReturnFocus(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = utils.getActiveElement(el);
  if (!activeElement)
    return false;
  if (el.contains(activeElement))
    return false;
  if (utils.isTabbable(activeElement))
    return true;
  return false;
}
function useFocusOnHide(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect.useUpdateEffect(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus(containerRef)) {
      return;
    }
    const el = focusRef?.current || containerRef.current;
    let rafId;
    if (el) {
      rafId = requestAnimationFrame(() => {
        el.focus({ preventScroll: true });
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }
  }, [shouldFocus, containerRef, focusRef]);
}
const defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow(target, options = defaultOptions) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = react.useRef(autoFocusValue);
  const lastVisibleRef = react.useRef(visible);
  useSafeLayoutEffect.useSafeLayoutEffect(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus = react.useCallback(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (element.contains(document.activeElement))
      return;
    if (focusRef?.current) {
      requestAnimationFrame(() => {
        focusRef.current?.focus({ preventScroll });
      });
    } else {
      const tabbableEls = utils.getAllFocusable(element);
      if (tabbableEls.length > 0) {
        requestAnimationFrame(() => {
          tabbableEls[0].focus({ preventScroll });
        });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect.useUpdateEffect(() => {
    onFocus();
  }, [onFocus]);
  useEventListener.useEventListener(element, "transitionend", onFocus);
}
function isRefObject(val) {
  return "current" in val;
}

exports.useFocusOnHide = useFocusOnHide;
exports.useFocusOnShow = useFocusOnShow;
