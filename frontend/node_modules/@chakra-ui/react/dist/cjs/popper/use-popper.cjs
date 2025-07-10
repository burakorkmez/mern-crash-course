'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var core = require('@popperjs/core');
var React = require('react');
var modifiers = require('./modifiers.cjs');
var popper_placement = require('./popper.placement.cjs');
var utils = require('./utils.cjs');

function usePopper(props = {}) {
  const {
    enabled = true,
    modifiers: modifiers$1,
    placement: placementProp = "bottom",
    strategy = "absolute",
    arrowPadding = 8,
    eventListeners = true,
    offset,
    gutter = 8,
    flip = true,
    boundary = "clippingParents",
    preventOverflow = true,
    matchWidth,
    direction = "ltr"
  } = props;
  const reference = React.useRef(null);
  const popper = React.useRef(null);
  const instance = React.useRef(null);
  const placement = popper_placement.getPopperPlacement(placementProp, direction);
  const cleanup = React.useRef(() => {
  });
  const setupPopper = React.useCallback(() => {
    if (!enabled || !reference.current || !popper.current)
      return;
    cleanup.current?.();
    instance.current = core.createPopper(reference.current, popper.current, {
      placement,
      modifiers: [
        modifiers.innerArrow,
        modifiers.positionArrow,
        modifiers.transformOrigin,
        {
          ...modifiers.matchWidth,
          enabled: !!matchWidth
        },
        {
          name: "eventListeners",
          ...utils.getEventListenerOptions(eventListeners)
        },
        {
          name: "arrow",
          options: { padding: arrowPadding }
        },
        {
          name: "offset",
          options: {
            offset: offset ?? [0, gutter]
          }
        },
        {
          name: "flip",
          enabled: !!flip,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!preventOverflow,
          options: { boundary }
        },
        // allow users override internal modifiers
        ...modifiers$1 ?? []
      ],
      strategy
    });
    instance.current.forceUpdate();
    cleanup.current = instance.current.destroy;
  }, [
    placement,
    enabled,
    modifiers$1,
    matchWidth,
    eventListeners,
    arrowPadding,
    offset,
    gutter,
    flip,
    preventOverflow,
    boundary,
    strategy
  ]);
  React.useEffect(() => {
    return () => {
      if (!reference.current && !popper.current) {
        instance.current?.destroy();
        instance.current = null;
      }
    };
  }, []);
  const referenceRef = React.useCallback(
    (node) => {
      reference.current = node;
      setupPopper();
    },
    [setupPopper]
  );
  const getReferenceProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: hooks.mergeRefs(referenceRef, ref)
    }),
    [referenceRef]
  );
  const popperRef = React.useCallback(
    (node) => {
      popper.current = node;
      setupPopper();
    },
    [setupPopper]
  );
  const getPopperProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: hooks.mergeRefs(popperRef, ref),
      style: {
        ...props2.style,
        position: strategy,
        minWidth: matchWidth ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [strategy, popperRef, matchWidth]
  );
  const getArrowProps = React.useCallback((props2 = {}, ref = null) => {
    const { size, shadowColor, bg, style, ...rest } = props2;
    return {
      ...rest,
      ref,
      "data-popper-arrow": "",
      style: getArrowStyle(props2)
    };
  }, []);
  const getArrowInnerProps = React.useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      instance.current?.update();
    },
    forceUpdate() {
      instance.current?.forceUpdate();
    },
    transformOrigin: utils.cssVars.transformOrigin.varRef,
    referenceRef,
    popperRef,
    getPopperProps,
    getArrowProps,
    getArrowInnerProps,
    getReferenceProps
  };
}
function getArrowStyle(props) {
  const { size, shadowColor, bg, style } = props;
  const computedStyle = { ...style, position: "absolute" };
  if (size) {
    computedStyle["--popper-arrow-size"] = size;
  }
  if (shadowColor) {
    computedStyle["--popper-arrow-shadow-color"] = shadowColor;
  }
  if (bg) {
    computedStyle["--popper-arrow-bg"] = bg;
  }
  return computedStyle;
}

exports.usePopper = usePopper;
