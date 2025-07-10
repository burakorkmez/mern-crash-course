import { ThemingProps } from "@chakra-ui/styled-system";
import { HTMLChakraProps } from "../system";
export interface CloseButtonProps extends HTMLChakraProps<"button">, ThemingProps<"CloseButton"> {
    /**
     * If `true`, the close button will be disabled.
     * @default false
     */
    isDisabled?: boolean;
}
/**
 * A button with a close icon.
 *
 * It is used to handle the close functionality in feedback and overlay components
 * like Alerts, Toasts, Drawers and Modals.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/close-button
 */
export declare const CloseButton: import("../system").ComponentWithAs<"button", CloseButtonProps>;
