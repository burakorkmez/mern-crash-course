import { SystemProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface PopoverArrowProps extends HTMLChakraProps<"div"> {
    /**
     * The color of the arrow's shadow
     */
    shadowColor?: SystemProps["color"];
}
export declare function PopoverArrow(props: PopoverArrowProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PopoverArrow {
    var displayName: string;
}
