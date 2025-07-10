import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { ButtonOptions } from "./button-types";
export interface ButtonProps extends HTMLChakraProps<"button">, ButtonOptions, ThemingProps<"Button"> {
}
/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/button
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
export declare const Button: import("../system").ComponentWithAs<"button", ButtonProps>;
