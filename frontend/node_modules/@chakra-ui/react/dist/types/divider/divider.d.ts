import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
/**
 * Layout component used to visually separate content in a list or group.
 * It displays a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://chakra-ui.com/divider
 */
export declare const Divider: import("../system").ComponentWithAs<"hr", DividerProps>;
export interface DividerProps extends HTMLChakraProps<"div">, ThemingProps<"Divider"> {
    orientation?: "horizontal" | "vertical";
}
