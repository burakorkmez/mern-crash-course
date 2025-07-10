import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps, PropsOf } from "../system";
import { CheckboxOptions, UseCheckboxProps } from "./checkbox-types";
type CheckboxControlProps = Omit<HTMLChakraProps<"div">, keyof UseCheckboxProps>;
type BaseInputProps = Pick<PropsOf<"input">, "onBlur" | "checked" | "defaultChecked">;
export interface CheckboxProps extends CheckboxControlProps, BaseInputProps, ThemingProps<"Checkbox">, UseCheckboxProps, CheckboxOptions {
}
/**
 * Checkbox
 *
 * React component used in forms when a user needs to select
 * multiple values from several options.
 *
 * @see Docs https://chakra-ui.com/checkbox
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export declare const Checkbox: import("../system").ComponentWithAs<"input", CheckboxProps>;
export {};
