import { HTMLChakraProps } from "../system";
export interface MenuButtonProps extends HTMLChakraProps<"button"> {
}
/**
 * The trigger for the menu list. Must be a direct child of `Menu`.
 *
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/
 */
export declare const MenuButton: import("../system").ComponentWithAs<"button", MenuButtonProps>;
