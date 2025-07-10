import { HTMLChakraProps } from "../system";
import { HTMLMotionProps, Variant } from "framer-motion";
import React from "react";
type HTMLMotionChakraProps<T extends keyof React.ReactHTML> = Omit<HTMLChakraProps<T>, keyof HTMLMotionProps<T>> & Omit<HTMLMotionProps<T>, "style" | "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "variants" | "transition" | "children"> & {
    variants?: MotionVariants;
};
type MotionVariants = Partial<Record<"enter" | "exit", Variant>>;
export interface PopoverTransitionProps extends HTMLMotionChakraProps<"section"> {
}
export declare const PopoverTransition: import("../system").ComponentWithAs<React.ElementType, PopoverTransitionProps>;
export {};
