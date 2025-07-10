import { HTMLChakraProps } from "../system";
import type { HTMLMotionProps } from "framer-motion";
export interface DrawerContentProps extends HTMLChakraProps<"section"> {
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
export declare const DrawerContent: import("../system").ComponentWithAs<"section", DrawerContentProps>;
