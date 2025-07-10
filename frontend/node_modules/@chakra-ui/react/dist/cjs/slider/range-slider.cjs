'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useRangeSlider = require('./use-range-slider.cjs');
var useTheme = require('../system/use-theme.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [RangeSliderProvider, useRangeSliderContext] = utils.createContext({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
});
const [RangeSliderStylesProvider, useRangeSliderStyles] = utils.createContext({
  name: `RangeSliderStylesContext`,
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
});
const RangeSlider = forwardRef.forwardRef(
  function RangeSlider2(props, ref) {
    const sliderProps = {
      orientation: "horizontal",
      ...props
    };
    const styles = useStyleConfig.useMultiStyleConfig("Slider", sliderProps);
    const ownProps = styledSystem.omitThemingProps(sliderProps);
    const { direction } = useTheme.useTheme();
    ownProps.direction = direction;
    const { getRootProps, ...context } = useRangeSlider.useRangeSlider(ownProps);
    const ctx = React.useMemo(
      () => ({ ...context, name: sliderProps.name }),
      [context, sliderProps.name]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(RangeSliderProvider, { value: ctx, children: /* @__PURE__ */ jsxRuntime.jsx(RangeSliderStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...getRootProps({}, ref),
        className: "chakra-slider",
        __css: styles.container,
        children: sliderProps.children
      }
    ) }) });
  }
);
RangeSlider.displayName = "RangeSlider";
const RangeSliderThumb = forwardRef.forwardRef(
  function RangeSliderThumb2(props, ref) {
    const { getThumbProps, getInputProps, name } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const thumbProps = getThumbProps(props, ref);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      factory.chakra.div,
      {
        ...thumbProps,
        className: utils.cx("chakra-slider__thumb", props.className),
        __css: styles.thumb,
        children: [
          thumbProps.children,
          name && /* @__PURE__ */ jsxRuntime.jsx("input", { ...getInputProps({ index: props.index }) })
        ]
      }
    );
  }
);
RangeSliderThumb.displayName = "RangeSliderThumb";
const RangeSliderTrack = forwardRef.forwardRef(
  function RangeSliderTrack2(props, ref) {
    const { getTrackProps } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const trackProps = getTrackProps(props, ref);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...trackProps,
        className: utils.cx("chakra-slider__track", props.className),
        __css: styles.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
RangeSliderTrack.displayName = "RangeSliderTrack";
const RangeSliderFilledTrack = forwardRef.forwardRef(function RangeSliderFilledTrack2(props, ref) {
  const { getInnerTrackProps } = useRangeSliderContext();
  const styles = useRangeSliderStyles();
  const trackProps = getInnerTrackProps(props, ref);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...trackProps,
      className: "chakra-slider__filled-track",
      __css: styles.filledTrack
    }
  );
});
RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
const RangeSliderMark = forwardRef.forwardRef(
  function RangeSliderMark2(props, ref) {
    const { getMarkerProps } = useRangeSliderContext();
    const styles = useRangeSliderStyles();
    const markProps = getMarkerProps(props, ref);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...markProps,
        className: utils.cx("chakra-slider__marker", props.className),
        __css: styles.mark
      }
    );
  }
);
RangeSliderMark.displayName = "RangeSliderMark";

exports.RangeSlider = RangeSlider;
exports.RangeSliderFilledTrack = RangeSliderFilledTrack;
exports.RangeSliderMark = RangeSliderMark;
exports.RangeSliderProvider = RangeSliderProvider;
exports.RangeSliderThumb = RangeSliderThumb;
exports.RangeSliderTrack = RangeSliderTrack;
exports.useRangeSliderContext = useRangeSliderContext;
exports.useRangeSliderStyles = useRangeSliderStyles;
