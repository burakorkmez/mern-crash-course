/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { UseCheckboxGroupProps } from "./checkbox-types";
export interface CheckboxGroupProps extends UseCheckboxGroupProps, Omit<ThemingProps<"Checkbox">, "orientation"> {
    children?: React.ReactNode;
}
/**
 * Used for multiple checkboxes which are bound in one group,
 * and it indicates whether one or more options are selected.
 *
 * @see Docs https://chakra-ui.com/checkbox
 */
export declare function CheckboxGroup(props: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CheckboxGroup {
    var displayName: string;
}
