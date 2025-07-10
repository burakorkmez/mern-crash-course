'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var usePopper = require('../popper/use-popper.cjs');
var utils$1 = require('../popper/utils.cjs');

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
  const { isOpen, onOpen, onClose } = hooks.useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp
  });
  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper.usePopper({
    enabled: isOpen,
    placement,
    arrowPadding,
    modifiers,
    gutter,
    offset,
    direction
  });
  const uuid = React.useId();
  const uid = id ?? uuid;
  const tooltipId = `tooltip-${uid}`;
  const ref = React.useRef(null);
  const enterTimeout = React.useRef(void 0);
  const clearEnterTimeout = React.useCallback(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = void 0;
    }
  }, []);
  const exitTimeout = React.useRef(void 0);
  const clearExitTimeout = React.useCallback(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = void 0;
    }
  }, []);
  const closeNow = React.useCallback(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);
  const dispatchCloseEvent = useCloseEvent(ref, closeNow);
  const openWithDelay = React.useCallback(() => {
    if (!isDisabled && !enterTimeout.current) {
      if (isOpen)
        dispatchCloseEvent();
      const win = getWin(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, isDisabled, isOpen, onOpen, openDelay]);
  const closeWithDelay = React.useCallback(() => {
    clearEnterTimeout();
    const win = getWin(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);
  const onClick = React.useCallback(() => {
    if (isOpen && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, isOpen]);
  const onPointerDown = React.useCallback(() => {
    if (isOpen && closeOnPointerDown) {
      closeWithDelay();
    }
  }, [closeOnPointerDown, closeWithDelay, isOpen]);
  const onKeyDown = React.useCallback(
    (event) => {
      if (isOpen && event.key === "Escape") {
        closeWithDelay();
      }
    },
    [isOpen, closeWithDelay]
  );
  hooks.useEventListener(
    () => getDoc(ref),
    "keydown",
    closeOnEsc ? onKeyDown : void 0
  );
  hooks.useEventListener(
    () => {
      if (!closeOnScroll)
        return null;
      const node = ref.current;
      if (!node)
        return null;
      const scrollParent = utils.getScrollParent(node);
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
  React.useEffect(() => {
    if (!isDisabled)
      return;
    clearEnterTimeout();
    if (isOpen)
      onClose();
  }, [isDisabled, isOpen, onClose, clearEnterTimeout]);
  React.useEffect(() => {
    return () => {
      clearEnterTimeout();
      clearExitTimeout();
    };
  }, [clearEnterTimeout, clearExitTimeout]);
  hooks.useEventListener(() => ref.current, "pointerleave", closeWithDelay);
  const getTriggerProps = React.useCallback(
    (props2 = {}, _ref = null) => {
      const triggerProps = {
        ...props2,
        ref: hooks.mergeRefs(ref, _ref, referenceRef),
        onPointerEnter: utils.callAllHandlers(props2.onPointerEnter, (e) => {
          if (e.pointerType === "touch")
            return;
          openWithDelay();
        }),
        onClick: utils.callAllHandlers(props2.onClick, onClick),
        onPointerDown: utils.callAllHandlers(props2.onPointerDown, onPointerDown),
        onFocus: utils.callAllHandlers(props2.onFocus, openWithDelay),
        onBlur: utils.callAllHandlers(props2.onBlur, closeWithDelay),
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
  const getTooltipPositionerProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          ...props2.style,
          [utils$1.cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [utils$1.cssVars.arrowShadowColor.var]: arrowShadowColor
        }
      },
      forwardedRef
    ),
    [getPopperProps, arrowSize, arrowShadowColor]
  );
  const getTooltipProps = React.useCallback(
    (props2 = {}, ref2 = null) => {
      const styles = {
        ...props2.style,
        position: "relative",
        transformOrigin: utils$1.cssVars.transformOrigin.varRef
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
  React.useEffect(() => {
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

exports.useTooltip = useTooltip;
