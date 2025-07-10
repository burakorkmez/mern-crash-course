import { ThemingProps } from "@chakra-ui/styled-system";
import { FormControlOptions } from "../form-control";
import { HTMLChakraProps } from "../system";
interface TextareaOptions {
    /**
     * The border color when the textarea is focused. Use color keys in `theme.colors`
     * @example
     * focusBorderColor = "blue.500"
     */
    focusBorderColor?: string;
    /**
     * The border color when the textarea is invalid. Use color keys in `theme.colors`
     * @example
     * errorBorderColor = "red.500"
     */
    errorBorderColor?: string;
}
type Omitted = "disabled" | "required" | "readOnly";
export interface TextareaProps extends Omit<HTMLChakraProps<"textarea">, Omitted>, TextareaOptions, FormControlOptions, ThemingProps<"Textarea"> {
}
/**
 * Textarea is used to enter an amount of text that's longer than a single line
 * @see Docs https://chakra-ui.com/textarea
 */
export declare const Textarea: import("../system").ComponentWithAs<"textarea", TextareaProps>;
export {};
