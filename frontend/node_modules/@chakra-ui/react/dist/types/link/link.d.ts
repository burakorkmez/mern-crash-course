import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface LinkProps extends HTMLChakraProps<"a">, ThemingProps<"Link"> {
    /**
     *  If `true`, the link will open in new tab
     *
     * @default false
     */
    isExternal?: boolean;
}
/**
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * React Router, Reach Router and Next.js Link.
 *
 * @example
 *
 * ```jsx
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 * @see Docs https://chakra-ui.com/link
 */
export declare const Link: import("../system").ComponentWithAs<"a", LinkProps>;
