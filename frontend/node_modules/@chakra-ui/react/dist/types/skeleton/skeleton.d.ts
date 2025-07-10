import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface SkeletonOptions {
    /**
     * The color at the animation start
     */
    startColor?: string;
    /**
     * The color at the animation end
     */
    endColor?: string;
    /**
     * If `true`, it'll render its children with a nice fade transition
     *
     * @default false
     */
    isLoaded?: boolean;
    /**
     * The animation speed in seconds
     *
     * @default 0.8
     */
    speed?: number;
    /**
     * The fadeIn duration in seconds. Requires `isLoaded` toggled to `true` in order to see the transition.
     *
     * @default 0.4
     */
    fadeDuration?: number;
    /**
     * If `true`, the skeleton will take the width of it's children
     * @default false
     */
    fitContent?: boolean;
}
export type ISkeleton = SkeletonOptions;
export interface SkeletonProps extends HTMLChakraProps<"div">, SkeletonOptions, ThemingProps<"Skeleton"> {
}
/**
 * `Skeleton` is used to display the loading state of some component.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/skeleton
 */
export declare const Skeleton: import("../system").ComponentWithAs<"div", SkeletonProps>;
