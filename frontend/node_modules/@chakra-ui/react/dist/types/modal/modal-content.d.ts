import { HTMLChakraProps } from "../system";
import { HTMLMotionProps } from "framer-motion";
export interface ModalContentProps extends HTMLChakraProps<"section"> {
    /**
     * The props to forward to the modal's content wrapper
     */
    containerProps?: HTMLChakraProps<"div">;
    /**
     * The custom framer-motion transition to use for the modal
     */
    motionProps?: HTMLMotionProps<"section">;
}
/**
 * ModalContent is used to group modal's content. It has all the
 * necessary `aria-*` properties to indicate that it is a modal
 */
export declare const ModalContent: import("../system").ComponentWithAs<"section", ModalContentProps>;
