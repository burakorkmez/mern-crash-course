import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { type IconProps } from "../icon";
import { HTMLChakraProps } from "../system";
declare const useFormErrorStyles: () => Record<string, SystemStyleObject>;
export { useFormErrorStyles };
export interface FormErrorMessageProps extends HTMLChakraProps<"div">, ThemingProps<"FormErrorMessage"> {
}
/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instructions on how to fix it.
 */
export declare const FormErrorMessage: import("../system").ComponentWithAs<"div", FormErrorMessageProps>;
/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */
export declare const FormErrorIcon: import("../system").ComponentWithAs<"svg", IconProps>;
