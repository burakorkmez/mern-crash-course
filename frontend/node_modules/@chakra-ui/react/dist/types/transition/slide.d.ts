/// <reference types="react" />
import { HTMLMotionProps } from "framer-motion";
import { SlideDirection, WithTransitionConfig } from "./transition-utils";
export type { SlideDirection };
export interface SlideOptions {
    /**
     * The direction to slide from
     * @default "right"
     */
    direction?: SlideDirection;
}
export interface SlideProps extends WithTransitionConfig<HTMLMotionProps<"div">>, SlideOptions {
    motionProps?: HTMLMotionProps<"div">;
}
export declare const Slide: import("react").ForwardRefExoticComponent<SlideProps & import("react").RefAttributes<HTMLDivElement>>;
