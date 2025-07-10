import { SystemProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface CardFooterProps extends HTMLChakraProps<"div"> {
    justify?: SystemProps["justifyContent"];
}
export declare const CardFooter: import("../system").ComponentWithAs<"div", CardFooterProps>;
