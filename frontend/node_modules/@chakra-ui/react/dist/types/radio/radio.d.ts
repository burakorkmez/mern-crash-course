/// <reference types="react" />
import { SystemProps, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseRadioProps } from "./use-radio";
type Omitted = "onChange" | "defaultChecked" | "checked";
interface BaseControlProps extends Omit<HTMLChakraProps<"div">, Omitted> {
}
export interface RadioProps extends UseRadioProps, ThemingProps<"Radio">, BaseControlProps {
    /**
     * The spacing between the checkbox and its label text
     * @default 0.5rem
     * @type SystemProps["marginLeft"]
     */
    spacing?: SystemProps["marginLeft"];
    /**
     * Additional props to be forwarded to the `input` element
     */
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
/**
 * Radio component is used in forms when a user needs to select a single value from
 * several options.
 *
 * @see Docs https://chakra-ui.com/radio
 */
export declare const Radio: import("../system").ComponentWithAs<"input", RadioProps>;
export {};
