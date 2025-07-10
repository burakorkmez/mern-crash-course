import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface HeadingProps extends HTMLChakraProps<"h2">, ThemingProps<"Heading"> {
}
/**
 * `Heading` is used to render semantic HTML heading elements.
 *
 * By default, renders as `h2` with themantic size `xl`
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/heading
 */
export declare const Heading: import("../system").ComponentWithAs<"h2", HeadingProps>;
