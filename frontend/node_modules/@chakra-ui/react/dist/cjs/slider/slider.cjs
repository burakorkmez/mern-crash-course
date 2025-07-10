'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var useSlider = require('./use-slider.cjs');
var useTheme = require('../system/use-theme.cjs');
var forwardRef = require('../system/forward-ref.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');
var factory = require('../system/factory.cjs');

const [SliderProvider, useSliderContext] = utils.createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
});
const [SliderStylesProvider, useSliderStyles] = utils.createContext({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />"
});
const Slider = forwardRef.forwardRef((props, ref) => {
  const sliderProps = {
    ...props,
    orientation: props?.orientation ?? "horizontal"
  };
  const styles = useStyleConfig.useMultiStyleConfig("Slider", sliderProps);
  const ownProps = styledSystem.omitThemingProps(sliderProps);
  const { direction } = useTheme.useTheme();
  ownProps.direction = direction;
  const { getInputProps, getRootProps, ...context } = useSlider.useSlider(ownProps);
  const rootProps = getRootProps();
  const inputProps = getInputProps({}, ref);
  return /* @__PURE__ */ jsxRuntime.jsx(SliderProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(SliderStylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsxs(
    factory.chakra.div,
    {
      ...rootProps,
      className: utils.cx("chakra-slider", sliderProps.className),
      __css: styles.container,
      children: [
        sliderProps.children,
        /* @__PURE__ */ jsxRuntime.jsx("input", { ...inputProps })
      ]
    }
  ) }) });
});
Slider.displayName = "Slider";
const SliderThumb = forwardRef.forwardRef((props, ref) => {
  const { getThumbProps } = useSliderContext();
  const styles = useSliderStyles();
  const thumbProps = getThumbProps(props, ref);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...thumbProps,
      className: utils.cx("chakra-slider__thumb", props.className),
      __css: styles.thumb
    }
  );
});
SliderThumb.displayName = "SliderThumb";
const SliderTrack = forwardRef.forwardRef((props, ref) => {
  const { getTrackProps } = useSliderContext();
  const styles = useSliderStyles();
  const trackProps = getTrackProps(props, ref);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...trackProps,
      className: utils.cx("chakra-slider__track", props.className),
      __css: styles.track
    }
  );
});
SliderTrack.displayName = "SliderTrack";
const SliderFilledTrack = forwardRef.forwardRef(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext();
    const styles = useSliderStyles();
    const trackProps = getInnerTrackProps(props, ref);
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.div,
      {
        ...trackProps,
        className: utils.cx("chakra-slider__filled-track", props.className),
        __css: styles.filledTrack
      }
    );
  }
);
SliderFilledTrack.displayName = "SliderFilledTrack";
const SliderMark = forwardRef.forwardRef((props, ref) => {
  const { getMarkerProps } = useSliderContext();
  const styles = useSliderStyles();
  const markProps = getMarkerProps(props, ref);
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.div,
    {
      ...markProps,
      className: utils.cx("chakra-slider__marker", props.className),
      __css: styles.mark
    }
  );
});
SliderMark.displayName = "SliderMark";

exports.Slider = Slider;
exports.SliderFilledTrack = SliderFilledTrack;
exports.SliderMark = SliderMark;
exports.SliderProvider = SliderProvider;
exports.SliderThumb = SliderThumb;
exports.SliderTrack = SliderTrack;
exports.useSliderContext = useSliderContext;
exports.useSliderStyles = useSliderStyles;
