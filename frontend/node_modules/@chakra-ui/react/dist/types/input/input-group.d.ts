import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
declare const useInputGroupStyles: () => Record<string, SystemStyleObject>;
export { useInputGroupStyles };
export interface InputGroupProps extends HTMLChakraProps<"div">, ThemingProps<"Input"> {
}
export declare const InputGroup: import("../system").ComponentWithAs<"div", InputGroupProps>;
