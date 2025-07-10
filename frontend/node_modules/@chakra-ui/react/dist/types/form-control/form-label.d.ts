/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface FormLabelProps extends HTMLChakraProps<"label">, ThemingProps<"FormLabel"> {
    /**
     * @type React.ReactNode
     */
    requiredIndicator?: React.ReactNode;
    /**
     * @type React.ReactNode
     */
    optionalIndicator?: React.ReactNode;
}
/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export declare const FormLabel: import("../system").ComponentWithAs<"label", FormLabelProps>;
export interface RequiredIndicatorProps extends HTMLChakraProps<"span"> {
}
/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export declare const RequiredIndicator: import("../system").ComponentWithAs<"span", RequiredIndicatorProps>;
