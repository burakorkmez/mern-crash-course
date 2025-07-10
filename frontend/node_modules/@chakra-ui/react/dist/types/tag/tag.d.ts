import { SystemStyleObject, ThemingProps } from "@chakra-ui/styled-system";
import { IconProps } from "../icon";
import { HTMLChakraProps } from "../system";
declare const useTagStyles: () => Record<string, SystemStyleObject>;
export { useTagStyles };
export interface TagProps extends HTMLChakraProps<"span">, ThemingProps<"Tag"> {
}
/**
 * The tag component is used to label or categorize UI elements.
 * To style the tag globally, change the styles in `theme.components.Tag`
 * @see Docs https://chakra-ui.com/tag
 */
export declare const Tag: import("../system").ComponentWithAs<"span", TagProps>;
export interface TagLabelProps extends HTMLChakraProps<"span"> {
}
export declare const TagLabel: import("../system").ComponentWithAs<"span", TagLabelProps>;
export declare const TagLeftIcon: import("../system").ComponentWithAs<"svg", IconProps>;
export declare const TagRightIcon: import("../system").ComponentWithAs<"svg", IconProps>;
export interface TagCloseButtonProps extends Omit<HTMLChakraProps<"button">, "disabled"> {
    /**
     * @default false
     */
    isDisabled?: boolean;
}
/**
 * TagCloseButton is used to close "remove" the tag
 * @see Docs https://chakra-ui.com/tag
 */
export declare const TagCloseButton: import("../system").ComponentWithAs<"button", TagCloseButtonProps>;
