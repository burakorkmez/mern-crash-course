import { HTMLMotionProps } from "framer-motion";
import { HTMLChakraProps } from "../system";
import { PopoverTransitionProps } from "./popover-transition";
export interface PopoverContentProps extends PopoverTransitionProps {
    rootProps?: HTMLChakraProps<"div">;
    motionProps?: HTMLMotionProps<"section">;
}
export declare const PopoverContent: import("../system").ComponentWithAs<"section", PopoverContentProps>;
