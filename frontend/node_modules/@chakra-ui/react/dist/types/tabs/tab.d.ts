import { HTMLChakraProps } from "../system";
import { UseTabOptions } from "./use-tabs";
export interface TabProps extends UseTabOptions, HTMLChakraProps<"button"> {
}
/**
 * Tab button used to activate a specific tab panel. It renders a `button`,
 * and is responsible for automatic and manual selection modes.
 */
export declare const Tab: import("../system").ComponentWithAs<"button", TabProps>;
