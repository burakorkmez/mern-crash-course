import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { BreadcrumbOptions } from "./breadcrumb-types";
export interface BreadcrumbProps extends HTMLChakraProps<"nav">, BreadcrumbOptions, ThemingProps<"Breadcrumb"> {
    listProps?: HTMLChakraProps<"ol">;
}
/**
 * Breadcrumb is used to render a breadcrumb navigation landmark.
 * It renders a `nav` element with `aria-label` set to `Breadcrumb`
 *
 * @see Docs https://chakra-ui.com/breadcrumb
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
 */
export declare const Breadcrumb: import("../system").ComponentWithAs<"nav", BreadcrumbProps>;
