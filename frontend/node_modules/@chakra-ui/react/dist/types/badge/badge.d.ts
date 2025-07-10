import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface BadgeProps extends HTMLChakraProps<"span">, ThemingProps<"Badge"> {
}
/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://chakra-ui.com/badge
 */
export declare const Badge: import("../system").ComponentWithAs<"span", BadgeProps>;
