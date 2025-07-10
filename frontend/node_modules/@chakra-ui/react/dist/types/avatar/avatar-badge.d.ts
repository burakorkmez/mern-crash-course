import { HTMLChakraProps } from "../system";
type BadgePlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end";
export interface AvatarBadgeProps extends HTMLChakraProps<"div"> {
    placement?: BadgePlacement;
}
/**
 * AvatarBadge used to show extra badge to the top-right
 * or bottom-right corner of an avatar.
 */
export declare const AvatarBadge: import("../system").ComponentWithAs<"div", AvatarBadgeProps>;
export {};
