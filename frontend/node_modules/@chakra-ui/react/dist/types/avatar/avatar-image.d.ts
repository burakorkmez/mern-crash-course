/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { ImageProps } from "../image";
type AvatarImageProps = ImageProps & {
    getInitials?: (name: string) => string;
    borderRadius?: SystemStyleObject["borderRadius"];
    icon: React.ReactElement;
    iconLabel?: string;
    name?: string;
};
export declare function AvatarImage(props: AvatarImageProps): import("react/jsx-runtime").JSX.Element;
export declare namespace AvatarImage {
    var displayName: string;
}
export {};
