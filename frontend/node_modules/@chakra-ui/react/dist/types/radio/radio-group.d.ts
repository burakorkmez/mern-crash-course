/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseRadioGroupProps, UseRadioGroupReturn } from "./use-radio-group";
export interface RadioGroupContext extends Pick<UseRadioGroupReturn, "onChange" | "value" | "name" | "isDisabled" | "isFocusable">, Omit<ThemingProps<"Radio">, "orientation"> {
}
declare const useRadioGroupContext: () => RadioGroupContext;
export { useRadioGroupContext };
type Omitted = "onChange" | "value" | "defaultValue" | "defaultChecked" | "children";
export interface RadioGroupProps extends UseRadioGroupProps, Omit<HTMLChakraProps<"div">, Omitted>, Omit<ThemingProps<"Radio">, "orientation"> {
    children: React.ReactNode;
}
/**
 * Used for multiple radios which are bound in one group,
 * and it indicates which option is selected.
 *
 * @see Docs https://chakra-ui.com/radio
 */
export declare const RadioGroup: import("../system").ComponentWithAs<"div", RadioGroupProps>;
