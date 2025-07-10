/// <reference types="react" />
import { SystemProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { UseMenuItemProps } from "./use-menu";
export interface StyledMenuItemProps extends HTMLChakraProps<"button"> {
}
interface MenuItemOptions extends Pick<UseMenuItemProps, "isDisabled" | "isFocusable" | "closeOnSelect"> {
    /**
     * The icon to render before the menu item's label.
     * @type React.ReactElement
     */
    icon?: React.ReactElement;
    /**
     * The spacing between the icon and menu item's label.
     * @type SystemProps["mr"]
     */
    iconSpacing?: SystemProps["mr"];
    /**
     * Right-aligned label text content, useful for displaying hotkeys.
     */
    command?: string;
    /**
     * The spacing between the command and menu item's label.
     * @type SystemProps["ml"]
     */
    commandSpacing?: SystemProps["ml"];
}
/**
 * Use prop `isDisabled` instead
 */
type IsDisabledProps = "disabled" | "aria-disabled";
export interface MenuItemProps extends Omit<HTMLChakraProps<"button">, IsDisabledProps>, MenuItemOptions {
}
export declare const MenuItem: import("../system").ComponentWithAs<"button", MenuItemProps>;
export {};
