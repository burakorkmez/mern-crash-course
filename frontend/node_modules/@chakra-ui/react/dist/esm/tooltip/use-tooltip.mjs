'use client';
import { useDisclosure, useEventListener, mergeRefs } from '@chakra-ui/hooks';
import { getScrollParent, callAllHandlers } from '@chakra-ui/utils';
import { useId, useRef, useCallback, useEffect } from 'react';
import { usePopper } from '../popper/use-popper.mjs';
import { cssVars } from '../popper/utils.mjs';

const getDoc = (ref) => ref.current?.ownerDocument || document;
const getWin = (ref) => ref.current?.ownerDocument?.defaultView || window;
function useTooltip(props = {}) {
  const {
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    closeOnMouseDown,
    closeOnScroll,
    closeOnPointerDown = closeOnMouseDown,
    closeOnEsc = true,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    placement,
    id,
    isOpen: isOpenProp,
    defaultIsOpen,
    arrowSize = 10,
    arrowShadowColor,
    arrowPadding,
    modifiers,
    isDisabled,
    gutter,
    offset,
    direction,
    ...htmlProps
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp
  });
  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper({
    enabled: isOpen,
    placement,
    arrowPadding,
    modifiers,
    gutter,
    offset,
    direction
  });
  const uuid = useId();
  const uid = id ?? uuid;
  const tooltipId = `tooltip-${uid}`;
  const ref = useRef(null);
  const enterTimeout = useRef(void 0);
  const clearEnterTimeout = useCallback(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = void 0;
    }
  }, []);
  const exitTimeout = useRef(void 0);
  const clearExitTimeout = useCallback(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = void 0;
    }
  }, []);
  const closeNow = useCallback(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);
  const dispatchCloseEvent = useCloseEvent(ref, closeNow);
  const openWithDelay = useCallback(() => {
    if (!isDisabled && !enterTimeout.current) {
      if (isOpen)
        dispatchCloseEvent();
      const win = getWin(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, isDisabled, isOpen, onOpen, openDelay]);
  const closeWithDelay = useCallback(() => {
    clearEnterTimeout();
    const win = getWin(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);
  const onClick = useCallback(() => {
    if (isOpen && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, isOpen]);
  const onPointerDown = useCallback(() => {
    if (isOpen && closeOnPointerDown) {
      closeWithDelay();
    }
  }, [closeOnPointerDown, closeWithDelay, isOpen]);
  const onKeyDown = useCallback(
    (event) => {
      if (isOpen && event.key === "Escape") {
        closeWithDelay();
      }
    },
    [isOpen, closeWithDelay]
  );
  useEventListener(
    () => getDoc(ref),
    "keydown",
    closeOnEsc ? onKeyDown : void 0
  );
  useEventListener(
    () => {
      if (!closeOnScroll)
        return null;
      const node = ref.current;
      if (!node)
        return null;
      const scrollParent = getScrollParent(node);
      return scrollParent.localName === "body" ? getWin(ref) : scrollParent;
    },
    "scroll",
    () => {
      if (isOpen && closeOnScroll) {
        closeNow();
      }
    },
    { passive: true, capture: true }
  );
  useEffect(() => {
    if (!isDisabled)
      return;
    clearEnterTimeout();
    if (isOpen)
      onClose();
  }, [isDisabled, isOpen, onClose, clearEnterTimeout]);
  useEffect(() => {
    return () => {
      clearEnterTimeout();
      clearExitTimeout();
    };
  }, [clearEnterTimeout, clearExitTimeout]);
  useEventListener(() => ref.current, "pointerleave", closeWithDelay);
  const getTriggerProps = useCallback(
    (props2 = {}, _ref = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(ref, _ref, referenceRef),
        onPointerEnter: callAllHandlers(props2.onPointerEnter, (e) => {
          if (e.pointerType === "touch")
            return;
          openWithDelay();
        }),
        onClick: callAllHandlers(props2.onClick, onClick),
        onPointerDown: callAllHandlers(props2.onPointerDown, onPointerDown),
        onFocus: callAllHandlers(props2.onFocus, openWithDelay),
        onBlur: callAllHandlers(props2.onBlur, closeWithDelay),
        "aria-describedby": isOpen ? tooltipId : void 0
      };
      return triggerProps;
    },
    [
      openWithDelay,
      closeWithDelay,
      onPointerDown,
      isOpen,
      tooltipId,
      onClick,
      referenceRef
    ]
  );
  const getTooltipPositionerProps = useCallback(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          ...props2.style,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        }
      },
      forwardedRef
    ),
    [getPopperProps, arrowSize, arrowShadowColor]
  );
  const getTooltipProps = useCallback(
    (props2 = {}, ref2 = null) => {
      const styles = {
        ...props2.style,
        position: "relative",
        transformOrigin: cssVars.transformOrigin.varRef
      };
      return {
        ref: ref2,
        ...htmlProps,
        ...props2,
        id: tooltipId,
        role: "tooltip",
        style: styles
      };
    },
    [htmlProps, tooltipId]
  );
  return {
    isOpen,
    show: openWithDelay,
    hide: closeWithDelay,
    getTriggerProps,
    getTooltipProps,
    getTooltipPositionerProps,
    getArrowProps,
    getArrowInnerProps
  };
}
const closeEventName = "chakra-ui:close-tooltip";
function useCloseEvent(ref, close) {
  useEffect(() => {
    const doc = getDoc(ref);
    doc.addEventListener(closeEventName, close);
    return () => doc.removeEventListener(closeEventName, close);
  }, [close, ref]);
  return () => {
    const doc = getDoc(ref);
    const win = getWin(ref);
    doc.dispatchEvent(new win.CustomEvent(closeEventName));
  };
}

export { useTooltip };
