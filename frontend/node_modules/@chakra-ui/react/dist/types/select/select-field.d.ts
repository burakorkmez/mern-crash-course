import { HTMLChakraProps } from "../system";
type Omitted = "disabled" | "required" | "readOnly" | "size";
export interface SelectFieldProps extends Omit<HTMLChakraProps<"select">, Omitted> {
    /**
     * @default false
     */
    isDisabled?: boolean;
    /**
     * The placeholder text for the select field
     */
    placeholder?: string;
}
export declare const SelectField: import("../system").ComponentWithAs<"select", SelectFieldProps>;
export {};
