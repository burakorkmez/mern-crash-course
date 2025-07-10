import { SystemProps, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export type CardOptions = {
    /**
     * The flex direction of the card
     */
    direction?: SystemProps["flexDirection"];
    /**
     * The flex alignment of the card
     */
    align?: SystemProps["alignItems"];
    /**
     * The flex distribution of the card
     */
    justify?: SystemProps["justifyContent"];
};
export interface CardProps extends HTMLChakraProps<"div">, CardOptions, ThemingProps<"Card"> {
}
export declare const Card: import("../system").ComponentWithAs<"div", CardProps>;
