/// <reference types="react" />
import { HTMLMotionProps } from "framer-motion";
import { WithTransitionConfig } from "./transition-utils";
export interface FadeProps extends WithTransitionConfig<HTMLMotionProps<"div">> {
}
export declare const fadeConfig: HTMLMotionProps<"div">;
export declare const Fade: import("react").ForwardRefExoticComponent<FadeProps & import("react").RefAttributes<HTMLDivElement>>;
