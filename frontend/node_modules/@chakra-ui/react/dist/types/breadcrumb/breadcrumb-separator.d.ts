import { SystemStyleObject } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface BreadcrumbSeparatorProps extends HTMLChakraProps<"div"> {
    /**
     * @type SystemStyleObject["mx"]
     */
    spacing?: SystemStyleObject["mx"];
}
/**
 * React component that separates each breadcrumb link
 */
export declare const BreadcrumbSeparator: import("../system").ComponentWithAs<"span", BreadcrumbSeparatorProps>;
