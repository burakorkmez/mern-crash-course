/// <reference types="react" />
import { ChakraProps } from "../system";
import { HTMLMotionProps } from "framer-motion";
export interface ModalOverlayProps extends Omit<HTMLMotionProps<"div">, "color" | "transition">, ChakraProps {
    children?: React.ReactNode;
    motionProps?: HTMLMotionProps<"div">;
}
/**
 * ModalOverlay renders a backdrop behind the modal. It is
 * also used as a wrapper for the modal content for better positioning.
 *
 * @see Docs https://chakra-ui.com/modal
 */
export declare const ModalOverlay: import("../system").ComponentWithAs<"div", ModalOverlayProps>;
