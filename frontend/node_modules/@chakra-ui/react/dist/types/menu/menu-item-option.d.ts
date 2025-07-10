import { SystemProps } from "@chakra-ui/styled-system";
import { ReactElement } from "react";
import { MenuItemProps } from "./menu-item";
import { UseMenuOptionOptions } from "./use-menu";
export interface MenuItemOptionProps extends UseMenuOptionOptions, Omit<MenuItemProps, keyof UseMenuOptionOptions | "icon"> {
    /**
     * @type React.ReactElement
     */
    icon?: ReactElement | null;
    /**
     * @type SystemProps["mr"]
     */
    iconSpacing?: SystemProps["mr"];
    /**
     * The placement of the icon in the option
     * @default start
     */
    iconPlacement?: "start" | "end";
}
export declare const MenuItemOption: import("../system").ComponentWithAs<"button", MenuItemOptionProps>;
