import { HTMLChakraProps } from "../system";
import { AvatarOptions } from "./avatar-types";
export declare function initials(name: string): string;
interface AvatarNameProps extends HTMLChakraProps<"div">, Pick<AvatarOptions, "name" | "getInitials"> {
}
/**
 * The avatar name container
 */
export declare function AvatarName(props: AvatarNameProps): import("react/jsx-runtime").JSX.Element;
export declare namespace AvatarName {
    var displayName: string;
}
export {};
