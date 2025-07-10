/// <reference types="react" />
import { type MenuGroupProps } from "./menu-group";
import { UseMenuOptionGroupProps } from "./use-menu";
export interface MenuOptionGroupProps extends UseMenuOptionGroupProps, Omit<MenuGroupProps, "value" | "defaultValue" | "onChange"> {
}
export declare const MenuOptionGroup: React.FC<MenuOptionGroupProps>;
