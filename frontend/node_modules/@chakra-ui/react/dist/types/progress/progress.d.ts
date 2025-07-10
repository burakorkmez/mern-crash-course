import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { GetProgressPropsOptions } from "./progress.utils";
declare const useProgressStyles: () => Record<string, SystemStyleObject>;
export { useProgressStyles };
export interface ProgressFilledTrackProps extends HTMLChakraProps<"div">, GetProgressPropsOptions {
}
export interface ProgressTrackProps extends HTMLChakraProps<"div"> {
}
interface ProgressOptions {
    /**
     * The `value` of the progress indicator.
     * If `undefined` the progress bar will be in `indeterminate` state
     */
    value?: number;
    /**
     * The minimum value of the progress
     * @default 0
     */
    min?: number;
    /**
     * The maximum value of the progress
     * @default 100
     */
    max?: number;
    /**
     * If `true`, the progress bar will show stripe
     *
     * @default false
     */
    hasStripe?: boolean;
    /**
     * If `true`, and hasStripe is `true`, the stripes will be animated
     *
     * @default false
     */
    isAnimated?: boolean;
    /**
     * If `true`, the progress will be indeterminate and the `value`
     * prop will be ignored
     *
     * @default false
     */
    isIndeterminate?: boolean;
}
export interface ProgressProps extends ProgressOptions, ThemingProps<"Progress">, HTMLChakraProps<"div"> {
}
/**
 * Progress (Linear)
 *
 * Progress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 *
 * @see Docs https://chakra-ui.com/progress
 */
export declare const Progress: import("../system").ComponentWithAs<"div", ProgressProps>;
