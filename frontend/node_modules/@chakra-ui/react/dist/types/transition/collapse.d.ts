/// <reference types="react" />
import { HTMLMotionProps } from "framer-motion";
import { WithTransitionConfig } from "./transition-utils";
export interface CollapseOptions {
    /**
     * If `true`, the opacity of the content will be animated
     * @default true
     */
    animateOpacity?: boolean;
    /**
     * The height you want the content in its collapsed state.
     * @default 0
     */
    startingHeight?: number | string;
    /**
     * The height you want the content in its expanded state.
     * @default "auto"
     */
    endingHeight?: number | string;
}
export type ICollapse = CollapseProps;
export interface CollapseProps extends WithTransitionConfig<HTMLMotionProps<"div">>, CollapseOptions {
}
export declare const Collapse: import("react").ForwardRefExoticComponent<CollapseProps & import("react").RefAttributes<HTMLDivElement>>;
