/// <reference types="react" />
import { ButtonProps } from "./button";
type OmittedProps = "leftIcon" | "rightIcon" | "loadingText" | "iconSpacing" | "spinnerPlacement";
interface BaseButtonProps extends Omit<ButtonProps, OmittedProps> {
}
export interface IconButtonProps extends BaseButtonProps {
    /**
     * The icon to be used in the button.
     * @type React.ReactElement
     */
    icon?: React.ReactElement;
    /**
     * If `true`, the button will be perfectly round. Else, it'll be slightly round
     *
     * @default false
     */
    isRound?: boolean;
    /**
     * A11y: A label that describes the button
     */
    "aria-label": string;
}
/**
 * Icon button renders an icon within a button.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/icon-button
 */
export declare const IconButton: import("../system").ComponentWithAs<"button", IconButtonProps>;
export {};
