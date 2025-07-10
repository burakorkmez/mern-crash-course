/// <reference types="react" />
import { ChakraProps } from "../system";
type Orientation = "vertical" | "horizontal";
export interface IconProps extends Omit<React.SVGAttributes<SVGElement>, keyof ChakraProps>, ChakraProps {
    orientation?: Orientation;
}
/**
 * The Icon component renders as an svg element to help define your own custom components.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/icon#using-the-icon-component
 */
export declare const Icon: import("../system").ComponentWithAs<"svg", IconProps>;
export {};
