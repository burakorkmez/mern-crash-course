import { HTMLChakraProps } from "../system";
import { BreadcrumbItemOptions } from "./breadcrumb-types";
export interface BreadcrumbItemProps extends BreadcrumbItemOptions, HTMLChakraProps<"li"> {
}
/**
 * BreadcrumbItem is used to group a breadcrumb link.
 * It renders a `li` element to denote it belongs to an order list of links.
 *
 * @see Docs https://chakra-ui.com/breadcrumb
 */
export declare const BreadcrumbItem: import("../system").ComponentWithAs<"li", BreadcrumbItemProps>;
