import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface CodeProps extends HTMLChakraProps<"code">, ThemingProps<"Code"> {
}
/**
 * React component to render inline code snippets.
 *
 * @see Docs https://chakra-ui.com/code
 */
export declare const Code: import("../system").ComponentWithAs<"code", CodeProps>;
