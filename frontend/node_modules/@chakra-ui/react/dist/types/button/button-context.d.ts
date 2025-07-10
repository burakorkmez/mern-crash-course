/// <reference types="react" />
import { ThemingProps } from "@chakra-ui/styled-system";
export interface ButtonGroupContext extends ThemingProps<"Button"> {
    /**
     * @default false
     */
    isDisabled?: boolean;
}
export declare const ButtonGroupProvider: import("react").Provider<ButtonGroupContext>, useButtonGroup: () => ButtonGroupContext;
