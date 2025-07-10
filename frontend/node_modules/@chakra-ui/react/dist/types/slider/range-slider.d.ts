/// <reference types="react" />
import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseRangeSliderProps, UseRangeSliderReturn } from "./use-range-slider";
interface RangeSliderContext extends Omit<UseRangeSliderReturn, "getRootProps"> {
    name?: string | string[];
}
declare const RangeSliderProvider: import("react").Provider<RangeSliderContext>, useRangeSliderContext: () => RangeSliderContext;
declare const useRangeSliderStyles: () => Record<string, SystemStyleObject>;
export { useRangeSliderStyles };
export { RangeSliderProvider, useRangeSliderContext };
export interface RangeSliderProps extends UseRangeSliderProps, ThemingProps<"Slider">, Omit<HTMLChakraProps<"div">, keyof UseRangeSliderProps> {
}
/**
 * The Slider is used to allow users to make selections from a range of values.
 * It provides context and functionality for all slider components
 *
 * @see Docs     https://v2.chakra-ui.com/docs/form/slider
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/slidertwothumb/
 */
export declare const RangeSlider: import("../system").ComponentWithAs<"div", RangeSliderProps>;
export interface RangeSliderThumbProps extends HTMLChakraProps<"div"> {
    index: number;
}
/**
 * Slider component that acts as the handle used to select predefined
 * values by dragging its handle along the track
 */
export declare const RangeSliderThumb: import("../system").ComponentWithAs<"div", RangeSliderThumbProps>;
export interface RangeSliderTrackProps extends HTMLChakraProps<"div"> {
}
export declare const RangeSliderTrack: import("../system").ComponentWithAs<"div", RangeSliderTrackProps>;
export interface RangeSliderInnerTrackProps extends HTMLChakraProps<"div"> {
}
export declare const RangeSliderFilledTrack: import("../system").ComponentWithAs<"div", RangeSliderInnerTrackProps>;
export interface RangeSliderMarkProps extends HTMLChakraProps<"div"> {
    value: number;
}
/**
 * SliderMark is used to provide names for specific Slider
 * values by defining labels or markers along the track.
 *
 * @see Docs https://chakra-ui.com/slider
 */
export declare const RangeSliderMark: import("../system").ComponentWithAs<"div", RangeSliderMarkProps>;
