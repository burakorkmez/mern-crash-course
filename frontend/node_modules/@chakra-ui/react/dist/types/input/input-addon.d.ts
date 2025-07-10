import { HTMLChakraProps } from "../system";
type Placement = "left" | "right";
export interface InputAddonProps extends HTMLChakraProps<"div"> {
    placement?: Placement;
}
/**
 * InputAddon
 *
 * Element to append or prepend to an input
 */
export declare const InputAddon: import("../system").ComponentWithAs<"div", InputAddonProps>;
export type InputLeftAddonProps = InputAddonProps;
/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */
export declare const InputLeftAddon: import("../system").ComponentWithAs<"div", InputAddonProps>;
export type InputRightAddonProps = InputAddonProps;
/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */
export declare const InputRightAddon: import("../system").ComponentWithAs<"div", InputAddonProps>;
export {};
