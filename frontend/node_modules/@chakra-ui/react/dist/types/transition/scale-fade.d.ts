/// <reference types="react" />
import { HTMLMotionProps } from "framer-motion";
import { WithTransitionConfig } from "./transition-utils";
interface ScaleFadeOptions {
    /**
     * The initial scale of the element
     * @default 0.95
     */
    initialScale?: number;
    /**
     * If `true`, the element will transition back to exit state
     * @default true
     */
    reverse?: boolean;
}
export declare const scaleFadeConfig: HTMLMotionProps<"div">;
export interface ScaleFadeProps extends ScaleFadeOptions, WithTransitionConfig<HTMLMotionProps<"div">> {
}
export declare const ScaleFade: import("react").ForwardRefExoticComponent<ScaleFadeProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
