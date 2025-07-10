import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface SkipNavLinkProps extends HTMLChakraProps<"a">, ThemingProps<"SkipNavLink"> {
}
/**
 * Renders a link that remains hidden until focused to skip to the main content.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/skip-nav
 */
export declare const SkipNavLink: import("../system").ComponentWithAs<"a", SkipNavLinkProps>;
export interface SkipNavContentProps extends HTMLChakraProps<"div"> {
}
/**
 * Renders a div as the target for the `SkipNavLink`.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/skip-nav
 */
export declare const SkipNavContent: import("../system").ComponentWithAs<"div", SkipNavContentProps>;
