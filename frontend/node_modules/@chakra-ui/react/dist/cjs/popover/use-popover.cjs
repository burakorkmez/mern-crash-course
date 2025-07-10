'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var usePopper = require('../popper/use-popper.cjs');
var utils$1 = require('../popper/utils.cjs');

const TRIGGER = {
  click: "click",
  hover: "hover"
};
function usePopover(props = {}) {
  const {
    closeOnBlur = true,
    closeOnEsc = true,
    initialFocusRef,
    id,
    returnFocusOnClose = true,
    autoFocus = true,
    arrowSize,
    arrowShadowColor,
    trigger = TRIGGER.click,
    openDelay = 200,
    closeDelay = 200,
    isLazy,
    lazyBehavior = "unmount",
    computePositionOnMount,
    ...popperProps
  } = props;
  const { isOpen, onClose, onOpen, onToggle } = hooks.useDisclosure(props);
  const [restoreFocus, setRestoreFocus] = React.useState(returnFocusOnClose);
  React.useEffect(() => setRestoreFocus(returnFocusOnClose), [returnFocusOnClose]);
  const anchorRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const isHoveringRef = React.useRef(false);
  const hasBeenOpened = React.useRef(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const [hasHeader, setHasHeader] = React.useState(false);
  const [hasBody, setHasBody] = React.useState(false);
  const uuid = React.useId();
  const uid = id ?? uuid;
  const [triggerId, popoverId, headerId, bodyId] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((id2) => `${id2}-${uid}`);
  const {
    referenceRef,
    getArrowProps,
    getPopperProps,
    getArrowInnerProps,
    forceUpdate
  } = usePopper.usePopper({
    ...popperProps,
    enabled: isOpen || !!computePositionOnMount
  });
  const animated = hooks.useAnimationState({ isOpen, ref: popoverRef });
  hooks.useFocusOnPointerDown({
    enabled: isOpen,
    ref: triggerRef
  });
  hooks.useFocusOnHide(popoverRef, {
    focusRef: triggerRef,
    visible: isOpen,
    shouldFocus: restoreFocus && trigger === TRIGGER.click
  });
  hooks.useFocusOnShow(popoverRef, {
    focusRef: initialFocusRef,
    visible: isOpen,
    shouldFocus: autoFocus && trigger === TRIGGER.click
  });
  hooks.useOutsideClick({
    enabled: isOpen && closeOnBlur,
    ref: popoverRef,
    handler(event) {
      const relatedTarget = event.composedPath?.()[0] ?? [
        event.target
      ];
      if (contains(triggerRef.current, relatedTarget))
        return;
      if (relatedTarget) {
        setRestoreFocus(!utils.isFocusable(relatedTarget));
      }
      onClose();
    }
  });
  const shouldRenderChildren = utils.lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  const getPopoverProps = React.useCallback(
    (props2 = {}, _ref = null) => {
      const popoverProps = {
        ...props2,
        style: {
          ...props2.style,
          transformOrigin: utils$1.cssVars.transformOrigin.varRef,
          [utils$1.cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [utils$1.cssVars.arrowShadowColor.var]: arrowShadowColor
        },
        ref: hooks.mergeRefs(popoverRef, _ref),
        children: shouldRenderChildren ? props2.children : null,
        id: popoverId,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: utils.callAllHandlers(props2.onKeyDown, (event) => {
          if (event.nativeEvent.isComposing)
            return;
          if (closeOnEsc && event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            onClose();
          }
        }),
        onBlur: utils.callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const targetIsPopover = contains(popoverRef.current, relatedTarget);
          const targetIsTrigger = contains(triggerRef.current, relatedTarget);
          const isValidBlur = !targetIsPopover && !targetIsTrigger;
          if (relatedTarget) {
            setRestoreFocus(!utils.isFocusable(relatedTarget));
          }
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        }),
        "aria-labelledby": hasHeader ? headerId : void 0,
        "aria-describedby": hasBody ? bodyId : void 0
      };
      if (trigger === TRIGGER.hover) {
        popoverProps.role = "tooltip";
        popoverProps.onMouseEnter = utils.callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
        });
        popoverProps.onMouseLeave = utils.callAllHandlers(
          props2.onMouseLeave,
          (event) => {
            if (event.nativeEvent.relatedTarget === null) {
              return;
            }
            isHoveringRef.current = false;
            setTimeout(() => onClose(), closeDelay);
          }
        );
      }
      return popoverProps;
    },
    [
      shouldRenderChildren,
      popoverId,
      hasHeader,
      headerId,
      hasBody,
      bodyId,
      trigger,
      closeOnEsc,
      onClose,
      isOpen,
      closeOnBlur,
      closeDelay,
      arrowShadowColor,
      arrowSize
    ]
  );
  const getPopoverPositionerProps = React.useCallback(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          visibility: isOpen ? "visible" : "hidden",
          ...props2.style
        }
      },
      forwardedRef
    ),
    [isOpen, getPopperProps]
  );
  const getAnchorProps = React.useCallback(
    (props2, _ref = null) => {
      return {
        ...props2,
        // If anchor is rendered, it is used as reference.
        ref: hooks.mergeRefs(_ref, anchorRef, referenceRef)
      };
    },
    [anchorRef, referenceRef]
  );
  const openTimeout = React.useRef(void 0);
  const closeTimeout = React.useRef(void 0);
  const maybeReferenceRef = React.useCallback(
    (node) => {
      if (anchorRef.current == null) {
        referenceRef(node);
      }
    },
    [referenceRef]
  );
  const getTriggerProps = React.useCallback(
    (props2 = {}, _ref = null) => {
      const triggerProps = {
        ...props2,
        ref: hooks.mergeRefs(triggerRef, _ref, maybeReferenceRef),
        id: triggerId,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
      };
      if (trigger === TRIGGER.click) {
        triggerProps.onClick = utils.callAllHandlers(props2.onClick, onToggle);
      }
      if (trigger === TRIGGER.hover) {
        triggerProps.onFocus = utils.callAllHandlers(props2.onFocus, () => {
          if (openTimeout.current === void 0) {
            onOpen();
          }
        });
        triggerProps.onBlur = utils.callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const isValidBlur = !contains(popoverRef.current, relatedTarget);
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        });
        triggerProps.onKeyDown = utils.callAllHandlers(props2.onKeyDown, (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        });
        triggerProps.onMouseEnter = utils.callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
          openTimeout.current = window.setTimeout(() => onOpen(), openDelay);
        });
        triggerProps.onMouseLeave = utils.callAllHandlers(props2.onMouseLeave, () => {
          isHoveringRef.current = false;
          if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = void 0;
          }
          closeTimeout.current = window.setTimeout(() => {
            if (isHoveringRef.current === false) {
              onClose();
            }
          }, closeDelay);
        });
      }
      return triggerProps;
    },
    [
      triggerId,
      isOpen,
      popoverId,
      trigger,
      maybeReferenceRef,
      onToggle,
      onOpen,
      closeOnBlur,
      onClose,
      openDelay,
      closeDelay
    ]
  );
  React.useEffect(() => {
    return () => {
      if (openTimeout.current) {
        clearTimeout(openTimeout.current);
      }
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  const getHeaderProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: headerId,
      ref: hooks.mergeRefs(ref, (node) => {
        setHasHeader(!!node);
      })
    }),
    [headerId]
  );
  const getBodyProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: bodyId,
      ref: hooks.mergeRefs(ref, (node) => {
        setHasBody(!!node);
      })
    }),
    [bodyId]
  );
  return {
    forceUpdate,
    isOpen,
    onAnimationComplete: animated.onComplete,
    onClose,
    getAnchorProps,
    getArrowProps,
    getArrowInnerProps,
    getPopoverPositionerProps,
    getPopoverProps,
    getTriggerProps,
    getHeaderProps,
    getBodyProps
  };
}
function contains(parent, child) {
  return parent === child || parent?.contains(child);
}
function getRelatedTarget(event) {
  const activeEl = event.currentTarget.ownerDocument.activeElement;
  return event.relatedTarget ?? activeEl;
}

exports.usePopover = usePopover;
