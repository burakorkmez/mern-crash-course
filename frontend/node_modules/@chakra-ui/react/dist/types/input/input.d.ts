import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { FormControlOptions } from "../form-control";
interface InputOptions {
    /**
     * The border color when the input is focused. Use color keys in `theme.colors`
     * @example
     * focusBorderColor = "blue.500"
     */
    focusBorderColor?: string;
    /**
     * The border color when the input is invalid. Use color keys in `theme.colors`
     * @example
     * errorBorderColor = "red.500"
     */
    errorBorderColor?: string;
    /**
     * The native HTML `size` attribute to be passed to the `input`
     */
    htmlSize?: number;
}
type Omitted = "disabled" | "required" | "readOnly" | "size";
export interface InputProps extends Omit<HTMLChakraProps<"input">, Omitted>, InputOptions, ThemingProps<"Input">, FormControlOptions {
}
/**
 * Input
 *
 * Element that allows users enter single valued data.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/input
 */
export declare const Input: import("../system").ComponentWithAs<"input", InputProps>;
export {};
