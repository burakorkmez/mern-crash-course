'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { omitThemingProps } from '@chakra-ui/styled-system';
import { createContext, cx } from '@chakra-ui/utils';
import { useSlider } from './use-slider.mjs';
import { useTheme } from '../system/use-theme.mjs';
import { forwardRef } from '../system/forward-ref.mjs';
import { useMultiStyleConfig } from '../system/use-style-config.mjs';
import { chakra } from '../system/factory.mjs';

const [SliderProvider, useSliderContext] = createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
});
const [SliderStylesProvider, useSliderStyles] = createContext({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />"
});
const Slider = forwardRef((props, ref) => {
  const sliderProps = {
    ...props,
    orientation: props?.orientation ?? "horizontal"
  };
  const styles = useMultiStyleConfig("Slider", sliderProps);
  const ownProps = omitThemingProps(sliderProps);
  const { direction } = useTheme();
  ownProps.direction = direction;
  const { getInputProps, getRootProps, ...context } = useSlider(ownProps);
  const rootProps = getRootProps();
  const inputProps = getInputProps({}, ref);
  return /* @__PURE__ */ jsx(SliderProvider, { value: context, children: /* @__PURE__ */ jsx(SliderStylesProvider, { value: styles, children: /* @__PURE__ */ jsxs(
    chakra.div,
    {
      ...rootProps,
      className: cx("chakra-slider", sliderProps.className),
      __css: styles.container,
      children: [
        sliderProps.children,
        /* @__PURE__ */ jsx("input", { ...inputProps })
      ]
    }
  ) }) });
});
Slider.displayName = "Slider";
const SliderThumb = forwardRef((props, ref) => {
  const { getThumbProps } = useSliderContext();
  const styles = useSliderStyles();
  const thumbProps = getThumbProps(props, ref);
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...thumbProps,
      className: cx("chakra-slider__thumb", props.className),
      __css: styles.thumb
    }
  );
});
SliderThumb.displayName = "SliderThumb";
const SliderTrack = forwardRef((props, ref) => {
  const { getTrackProps } = useSliderContext();
  const styles = useSliderStyles();
  const trackProps = getTrackProps(props, ref);
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...trackProps,
      className: cx("chakra-slider__track", props.className),
      __css: styles.track
    }
  );
});
SliderTrack.displayName = "SliderTrack";
const SliderFilledTrack = forwardRef(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext();
    const styles = useSliderStyles();
    const trackProps = getInnerTrackProps(props, ref);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...trackProps,
        className: cx("chakra-slider__filled-track", props.className),
        __css: styles.filledTrack
      }
    );
  }
);
SliderFilledTrack.displayName = "SliderFilledTrack";
const SliderMark = forwardRef((props, ref) => {
  const { getMarkerProps } = useSliderContext();
  const styles = useSliderStyles();
  const markProps = getMarkerProps(props, ref);
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ...markProps,
      className: cx("chakra-slider__marker", props.className),
      __css: styles.mark
    }
  );
});
SliderMark.displayName = "SliderMark";

export { Slider, SliderFilledTrack, SliderMark, SliderProvider, SliderThumb, SliderTrack, useSliderContext, useSliderStyles };
