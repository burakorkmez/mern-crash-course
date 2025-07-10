import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
import { AvatarOptions } from "./avatar-types";
export declare const baseStyle: {
    display: string;
    alignItems: string;
    justifyContent: string;
    textAlign: string;
    textTransform: string;
    fontWeight: string;
    position: string;
    flexShrink: number;
};
export interface AvatarProps extends Omit<HTMLChakraProps<"span">, "onError">, AvatarOptions, ThemingProps<"Avatar"> {
    crossOrigin?: HTMLChakraProps<"img">["crossOrigin"];
    iconLabel?: string;
    /**
     * If `true`, opt out of the avatar's `fallback` logic and
     * renders the `img` at all times.
     *
     * @default false
     */
    ignoreFallback?: boolean;
}
/**
 * Avatar component that renders an user avatar with
 * support for fallback avatar and name-only avatars
 */
export declare const Avatar: import("../system").ComponentWithAs<"span", AvatarProps>;
