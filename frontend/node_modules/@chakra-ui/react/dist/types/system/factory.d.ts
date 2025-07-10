import { ElementType } from "react";
import { ChakraStyledOptions, HTMLChakraComponents } from "./system";
import { ChakraComponent } from "./system.types";
interface ChakraFactory {
    <T extends ElementType, P extends object = {}>(component: T, options?: ChakraStyledOptions): ChakraComponent<T, P>;
}
/**
 * The Chakra factory serves as an object of chakra enabled JSX elements,
 * and also a function that can be used to enable custom component receive chakra's style props.
 *
 * @see Docs https://v2.chakra-ui.com/docs/styled-system/chakra-factory
 */
export declare const chakra: ChakraFactory & HTMLChakraComponents;
export {};
