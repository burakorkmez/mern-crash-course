import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { ButtonGroupOptions } from "./button-types";
export interface ButtonGroupProps extends HTMLChakraProps<"div">, ThemingProps<"Button">, ButtonGroupOptions {
}
export declare const ButtonGroup: import("../system").ComponentWithAs<"div", ButtonGroupProps>;
