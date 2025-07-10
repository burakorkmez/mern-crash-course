import { HTMLMotionProps } from "framer-motion";
import { HTMLChakraProps } from "../system";
export interface MenuListProps extends HTMLChakraProps<"div"> {
    /**
     * Props for the root element that positions the menu.
     */
    rootProps?: HTMLChakraProps<"div">;
    /**
     * The framer-motion props to animate the menu list
     */
    motionProps?: HTMLMotionProps<"div">;
}
export declare const MenuList: import("../system").ComponentWithAs<"div", MenuListProps>;
