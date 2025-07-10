import { HTMLChakraProps } from "../system";
export interface BreadcrumbLinkProps extends HTMLChakraProps<"a"> {
    /**
     * @default false
     */
    isCurrentPage?: boolean;
}
/**
 * Breadcrumb link.
 *
 * It renders a `span` when it matches the current link. Otherwise,
 * it renders an anchor tag.
 */
export declare const BreadcrumbLink: import("../system").ComponentWithAs<"a", BreadcrumbLinkProps>;
