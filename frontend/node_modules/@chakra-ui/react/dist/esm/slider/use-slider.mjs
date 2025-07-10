'use client';
import { useCallbackRef, useControllableState, useLatestRef, useUpdateEffect, usePanEvent, mergeRefs } from '@chakra-ui/hooks';
import { clampValue, valueToPercent, percentToValue, roundValueToStep, ariaAttr, dataAttr, callAllHandlers } from '@chakra-ui/utils';
import { useState, useRef, useId, useCallback, useMemo } from 'react';
import { getStyles, getIsReversed } from './slider-utils.mjs';

function useSlider(props) {
  const {
    min = 0,
    max = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  const [computedValue, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? getDefaultValue(min, max),
    onChange
  });
  const [isDragging, setDragging] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const isInteractive = !(isDisabled || isReadOnly);
  const tenSteps = (max - min) / 10;
  const oneStep = step || (max - min) / 100;
  const value = clampValue(computedValue, min, max);
  const reversedValue = max - value + min;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = valueToPercent(trackValue, min, max);
  const isVertical = orientation === "vertical";
  const stateRef = useLatestRef({
    min,
    max,
    step,
    isDisabled,
    value,
    isInteractive,
    isReversed,
    isVertical,
    eventSource: null,
    focusThumbOnChange,
    orientation
  });
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const rootRef = useRef(null);
  const reactId = useId();
  const uuid = idProp ?? reactId;
  const [thumbId, trackId] = [`slider-thumb-${uuid}`, `slider-track-${uuid}`];
  const getValueFromPointer = useCallback(
    (event) => {
      if (!trackRef.current)
        return;
      const state2 = stateRef.current;
      state2.eventSource = "pointer";
      const trackRect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = event.touches?.[0] ?? event;
      const diff = isVertical ? trackRect.bottom - clientY : clientX - trackRect.left;
      const length = isVertical ? trackRect.height : trackRect.width;
      let percent = diff / length;
      if (isReversed) {
        percent = 1 - percent;
      }
      let nextValue = percentToValue(percent, state2.min, state2.max);
      if (state2.step) {
        nextValue = parseFloat(
          roundValueToStep(nextValue, state2.min, state2.step)
        );
      }
      nextValue = clampValue(nextValue, state2.min, state2.max);
      return nextValue;
    },
    [isVertical, isReversed, stateRef]
  );
  const constrain = useCallback(
    (value2) => {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      value2 = parseFloat(roundValueToStep(value2, state2.min, oneStep));
      value2 = clampValue(value2, state2.min, state2.max);
      setValue(value2);
    },
    [oneStep, setValue, stateRef]
  );
  const actions = useMemo(
    () => ({
      stepUp(step2 = oneStep) {
        const next = isReversed ? value - step2 : value + step2;
        constrain(next);
      },
      stepDown(step2 = oneStep) {
        const next = isReversed ? value + step2 : value - step2;
        constrain(next);
      },
      reset() {
        constrain(defaultValue || 0);
      },
      stepTo(value2) {
        constrain(value2);
      }
    }),
    [constrain, isReversed, value, oneStep, defaultValue]
  );
  const onKeyDown = useCallback(
    (event) => {
      const state2 = stateRef.current;
      const keyMap = {
        ArrowRight: () => actions.stepUp(),
        ArrowUp: () => actions.stepUp(),
        ArrowLeft: () => actions.stepDown(),
        ArrowDown: () => actions.stepDown(),
        PageUp: () => actions.stepUp(tenSteps),
        PageDown: () => actions.stepDown(tenSteps),
        Home: () => constrain(state2.min),
        End: () => constrain(state2.max)
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        state2.eventSource = "keyboard";
      }
    },
    [actions, constrain, tenSteps, stateRef]
  );
  const valueText = getAriaValueText?.(value) ?? ariaValueText;
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = useMemo(() => {
    const state2 = stateRef.current;
    return getStyles({
      isReversed,
      orientation: state2.orientation,
      thumbPercents: [thumbPercent]
    });
  }, [isReversed, thumbPercent, stateRef]);
  const focusThumb = useCallback(() => {
    const state2 = stateRef.current;
    if (state2.focusThumbOnChange) {
      setTimeout(() => thumbRef.current?.focus());
    }
  }, [stateRef]);
  useUpdateEffect(() => {
    const state2 = stateRef.current;
    focusThumb();
    if (state2.eventSource === "keyboard") {
      onChangeEnd?.(state2.value);
    }
  }, [value, onChangeEnd]);
  function setValueFromPointer(event) {
    const nextValue = getValueFromPointer(event);
    if (nextValue != null && nextValue !== stateRef.current.value) {
      setValue(nextValue);
    }
  }
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setDragging(true);
      focusThumb();
      setValueFromPointer(event);
      onChangeStart?.(state2.value);
    },
    onPanSessionEnd() {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setDragging(false);
      onChangeEnd?.(state2.value);
    },
    onPan(event) {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      setValueFromPointer(event);
    }
  });
  const getRootProps = useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr(isDisabled),
        "data-focused": dataAttr(isFocused),
        style: {
          ...props2.style,
          ...rootStyle
        }
      };
    },
    [htmlProps, isDisabled, isFocused, rootStyle]
  );
  const getTrackProps = useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: trackId,
        "data-disabled": dataAttr(isDisabled),
        style: {
          ...props2.style,
          ...trackStyle
        }
      };
    },
    [isDisabled, trackId, trackStyle]
  );
  const getInnerTrackProps = useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle]
  );
  const getThumbProps = useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, thumbRef),
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: thumbId,
        "data-active": dataAttr(isDragging),
        "aria-valuetext": valueText,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr(isDisabled),
        "aria-readonly": ariaAttr(isReadOnly),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabel ? void 0 : ariaLabelledBy,
        style: {
          ...props2.style,
          ...getThumbStyle(0)
        },
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(props2.onFocus, () => setFocused(true)),
        onBlur: callAllHandlers(props2.onBlur, () => setFocused(false))
      };
    },
    [
      isInteractive,
      thumbId,
      isDragging,
      valueText,
      min,
      max,
      value,
      orientation,
      isDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown
    ]
  );
  const getMarkerProps = useCallback(
    (props2, ref = null) => {
      const isInRange = !(props2.value < min || props2.value > max);
      const isHighlighted = value >= props2.value;
      const markerPercent = valueToPercent(props2.value, min, max);
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient({
          orientation,
          vertical: {
            bottom: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          },
          horizontal: {
            left: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          }
        })
      };
      return {
        ...props2,
        ref,
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr(isDisabled),
        "data-invalid": dataAttr(!isInRange),
        "data-highlighted": dataAttr(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled, isReversed, max, min, orientation, value]
  );
  const getInputProps = useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        type: "hidden",
        value,
        name
      };
    },
    [name, value]
  );
  const state = { value, isFocused, isDragging };
  return {
    state,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps
  };
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
function getDefaultValue(min, max) {
  return max < min ? min : min + (max - min) / 2;
}

export { useSlider };
