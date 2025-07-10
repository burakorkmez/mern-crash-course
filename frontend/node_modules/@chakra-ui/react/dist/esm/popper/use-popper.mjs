'use client';
import { mergeRefs } from '@chakra-ui/hooks';
import { createPopper } from '@popperjs/core';
import { useRef, useCallback, useEffect } from 'react';
import { innerArrow, positionArrow, transformOrigin, matchWidth } from './modifiers.mjs';
import { getPopperPlacement } from './popper.placement.mjs';
import { getEventListenerOptions, cssVars } from './utils.mjs';

function usePopper(props = {}) {
  const {
    enabled = true,
    modifiers,
    placement: placementProp = "bottom",
    strategy = "absolute",
    arrowPadding = 8,
    eventListeners = true,
    offset,
    gutter = 8,
    flip = true,
    boundary = "clippingParents",
    preventOverflow = true,
    matchWidth: matchWidth$1,
    direction = "ltr"
  } = props;
  const reference = useRef(null);
  const popper = useRef(null);
  const instance = useRef(null);
  const placement = getPopperPlacement(placementProp, direction);
  const cleanup = useRef(() => {
  });
  const setupPopper = useCallback(() => {
    if (!enabled || !reference.current || !popper.current)
      return;
    cleanup.current?.();
    instance.current = createPopper(reference.current, popper.current, {
      placement,
      modifiers: [
        innerArrow,
        positionArrow,
        transformOrigin,
        {
          ...matchWidth,
          enabled: !!matchWidth$1
        },
        {
          name: "eventListeners",
          ...getEventListenerOptions(eventListeners)
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
        ...modifiers ?? []
      ],
      strategy
    });
    instance.current.forceUpdate();
    cleanup.current = instance.current.destroy;
  }, [
    placement,
    enabled,
    modifiers,
    matchWidth$1,
    eventListeners,
    arrowPadding,
    offset,
    gutter,
    flip,
    preventOverflow,
    boundary,
    strategy
  ]);
  useEffect(() => {
    return () => {
      if (!reference.current && !popper.current) {
        instance.current?.destroy();
        instance.current = null;
      }
    };
  }, []);
  const referenceRef = useCallback(
    (node) => {
      reference.current = node;
      setupPopper();
    },
    [setupPopper]
  );
  const getReferenceProps = useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(referenceRef, ref)
    }),
    [referenceRef]
  );
  const popperRef = useCallback(
    (node) => {
      popper.current = node;
      setupPopper();
    },
    [setupPopper]
  );
  const getPopperProps = useCallback(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(popperRef, ref),
      style: {
        ...props2.style,
        position: strategy,
        minWidth: matchWidth$1 ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [strategy, popperRef, matchWidth$1]
  );
  const getArrowProps = useCallback((props2 = {}, ref = null) => {
    const { size, shadowColor, bg, style, ...rest } = props2;
    return {
      ...rest,
      ref,
      "data-popper-arrow": "",
      style: getArrowStyle(props2)
    };
  }, []);
  const getArrowInnerProps = useCallback(
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
    transformOrigin: cssVars.transformOrigin.varRef,
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

export { usePopper };
