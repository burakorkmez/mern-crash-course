/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UsePinInputProps } from "./use-pin-input";
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
}
export interface PinInputProps extends UsePinInputProps, ThemingProps<"PinInput">, InputOptions {
    /**
     * The children of the pin input component
     */
    children: React.ReactNode;
}
/**
 * The `PinInput` component is similar to the Input component, but is optimized for entering sequences of digits quickly.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/pin-input
 */
export declare function PinInput(props: PinInputProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PinInput {
    var displayName: string;
}
export interface PinInputFieldProps extends HTMLChakraProps<"input"> {
    index?: number;
}
export declare const PinInputField: import("../system").ComponentWithAs<"input", PinInputFieldProps>;
export {};
