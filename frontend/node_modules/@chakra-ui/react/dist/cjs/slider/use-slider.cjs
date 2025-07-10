'use client';
'use strict';

var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var sliderUtils = require('./slider-utils.cjs');

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
  const onChangeStart = hooks.useCallbackRef(onChangeStartProp);
  const onChangeEnd = hooks.useCallbackRef(onChangeEndProp);
  const getAriaValueText = hooks.useCallbackRef(getAriaValueTextProp);
  const isReversed = sliderUtils.getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  const [computedValue, setValue] = hooks.useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? getDefaultValue(min, max),
    onChange
  });
  const [isDragging, setDragging] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);
  const isInteractive = !(isDisabled || isReadOnly);
  const tenSteps = (max - min) / 10;
  const oneStep = step || (max - min) / 100;
  const value = utils.clampValue(computedValue, min, max);
  const reversedValue = max - value + min;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = utils.valueToPercent(trackValue, min, max);
  const isVertical = orientation === "vertical";
  const stateRef = hooks.useLatestRef({
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
  const trackRef = React.useRef(null);
  const thumbRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const reactId = React.useId();
  const uuid = idProp ?? reactId;
  const [thumbId, trackId] = [`slider-thumb-${uuid}`, `slider-track-${uuid}`];
  const getValueFromPointer = React.useCallback(
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
      let nextValue = utils.percentToValue(percent, state2.min, state2.max);
      if (state2.step) {
        nextValue = parseFloat(
          utils.roundValueToStep(nextValue, state2.min, state2.step)
        );
      }
      nextValue = utils.clampValue(nextValue, state2.min, state2.max);
      return nextValue;
    },
    [isVertical, isReversed, stateRef]
  );
  const constrain = React.useCallback(
    (value2) => {
      const state2 = stateRef.current;
      if (!state2.isInteractive)
        return;
      value2 = parseFloat(utils.roundValueToStep(value2, state2.min, oneStep));
      value2 = utils.clampValue(value2, state2.min, state2.max);
      setValue(value2);
    },
    [oneStep, setValue, stateRef]
  );
  const actions = React.useMemo(
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
  const onKeyDown = React.useCallback(
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
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = React.useMemo(() => {
    const state2 = stateRef.current;
    return sliderUtils.getStyles({
      isReversed,
      orientation: state2.orientation,
      thumbPercents: [thumbPercent]
    });
  }, [isReversed, thumbPercent, stateRef]);
  const focusThumb = React.useCallback(() => {
    const state2 = stateRef.current;
    if (state2.focusThumbOnChange) {
      setTimeout(() => thumbRef.current?.focus());
    }
  }, [stateRef]);
  hooks.useUpdateEffect(() => {
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
  hooks.usePanEvent(rootRef, {
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
  const getRootProps = React.useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        ref: hooks.mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": utils.ariaAttr(isDisabled),
        "data-focused": utils.dataAttr(isFocused),
        style: {
          ...props2.style,
          ...rootStyle
        }
      };
    },
    [htmlProps, isDisabled, isFocused, rootStyle]
  );
  const getTrackProps = React.useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: hooks.mergeRefs(ref, trackRef),
        id: trackId,
        "data-disabled": utils.dataAttr(isDisabled),
        style: {
          ...props2.style,
          ...trackStyle
        }
      };
    },
    [isDisabled, trackId, trackStyle]
  );
  const getInnerTrackProps = React.useCallback(
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
  const getThumbProps = React.useCallback(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: hooks.mergeRefs(ref, thumbRef),
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: thumbId,
        "data-active": utils.dataAttr(isDragging),
        "aria-valuetext": valueText,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-orientation": orientation,
        "aria-disabled": utils.ariaAttr(isDisabled),
        "aria-readonly": utils.ariaAttr(isReadOnly),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabel ? void 0 : ariaLabelledBy,
        style: {
          ...props2.style,
          ...getThumbStyle(0)
        },
        onKeyDown: utils.callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: utils.callAllHandlers(props2.onFocus, () => setFocused(true)),
        onBlur: utils.callAllHandlers(props2.onBlur, () => setFocused(false))
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
  const getMarkerProps = React.useCallback(
    (props2, ref = null) => {
      const isInRange = !(props2.value < min || props2.value > max);
      const isHighlighted = value >= props2.value;
      const markerPercent = utils.valueToPercent(props2.value, min, max);
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
        "data-disabled": utils.dataAttr(isDisabled),
        "data-invalid": utils.dataAttr(!isInRange),
        "data-highlighted": utils.dataAttr(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled, isReversed, max, min, orientation, value]
  );
  const getInputProps = React.useCallback(
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

exports.useSlider = useSlider;
