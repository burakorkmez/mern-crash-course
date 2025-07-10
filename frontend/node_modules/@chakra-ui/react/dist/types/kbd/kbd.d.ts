import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface KbdProps extends HTMLChakraProps<"kbd">, ThemingProps<"Kbd"> {
}
/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```jsx
 * <Kbd>⌘ + T</Kbd>
 * ```
 *
 * @see Docs https://chakra-ui.com/kbd
 */
export declare const Kbd: import("../system").ComponentWithAs<"kbd", KbdProps>;
