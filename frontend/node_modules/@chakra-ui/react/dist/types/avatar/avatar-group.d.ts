/// <reference types="react" />
import { SystemProps, ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
interface AvatarGroupOptions {
    /**
     * The children of the avatar group.
     *
     * Ideally should be `Avatar` and `MoreIndicator` components
     */
    children: React.ReactNode;
    /**
     * The space between the avatars in the group.
     * @default "-0.75rem"
     * @type SystemProps["margin"]
     */
    spacing?: SystemProps["margin"];
    /**
     * The maximum number of visible avatars
     */
    max?: number;
}
export interface AvatarGroupProps extends AvatarGroupOptions, Omit<HTMLChakraProps<"div">, "children">, ThemingProps<"Avatar"> {
}
/**
 * AvatarGroup displays a number of avatars grouped together in a stack.
 */
export declare const AvatarGroup: import("../system").ComponentWithAs<"div", AvatarGroupProps>;
export {};
