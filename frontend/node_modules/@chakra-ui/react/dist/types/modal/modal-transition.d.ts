/// <reference types="react" />
import { ChakraProps } from "../system";
import { HTMLMotionProps } from "framer-motion";
export interface ModalTransitionProps extends Omit<HTMLMotionProps<"section">, "color" | "transition">, ChakraProps {
    preset?: "slideInBottom" | "slideInRight" | "slideInTop" | "slideInLeft" | "scale" | "none";
    motionProps?: HTMLMotionProps<"section">;
}
export declare const ModalTransition: import("react").ForwardRefExoticComponent<ModalTransitionProps & import("react").RefAttributes<any>>;
