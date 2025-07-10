import { HTMLChakraProps } from "../system";
export interface LinkOverlayProps extends HTMLChakraProps<"a"> {
    /**
     *  If `true`, the link will open in new tab
     *
     * @default false
     */
    isExternal?: boolean;
}
export declare const LinkOverlay: import("../system").ComponentWithAs<"a", LinkOverlayProps>;
export interface LinkBoxProps extends HTMLChakraProps<"div"> {
}
/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs https://v2.chakra-ui.com/docs/navigation/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export declare const LinkBox: import("../system").ComponentWithAs<"div", LinkBoxProps>;
