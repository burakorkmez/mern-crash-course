import { SystemProps, SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { IconProps } from "../icon";
import type { HTMLChakraProps } from "../system";
declare const useListStyles: () => Record<string, SystemStyleObject>;
export { useListStyles };
interface ListOptions {
    /**
     * Shorthand prop for `listStyleType`
     * @type SystemProps["listStyleType"]
     */
    styleType?: SystemProps["listStyleType"];
    /**
     * Shorthand prop for `listStylePosition`
     * @type SystemProps["listStylePosition"]
     */
    stylePosition?: SystemProps["listStylePosition"];
    /**
     * The space between each list item
     * @type SystemProps["margin"]
     */
    spacing?: SystemProps["margin"];
}
export interface ListProps extends HTMLChakraProps<"ul">, ThemingProps<"List">, ListOptions {
}
/**
 * List is used to display list items, it renders a `<ul>` by default.
 *
 * @see Docs https://chakra-ui.com/list
 */
export declare const List: import("../system").ComponentWithAs<"ul", ListProps>;
export declare const OrderedList: import("../system").ComponentWithAs<"ol", ListProps>;
export declare const UnorderedList: import("../system").ComponentWithAs<"ul", ListProps>;
export interface ListItemProps extends HTMLChakraProps<"li"> {
}
/**
 * ListItem
 *
 * Used to render a list item
 */
export declare const ListItem: import("../system").ComponentWithAs<"li", ListItemProps>;
/**
 * ListIcon
 *
 * Used to render an icon beside the list item text
 */
export declare const ListIcon: import("../system").ComponentWithAs<"svg", IconProps>;
