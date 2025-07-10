import { CloseButtonProps } from "../close-button";
export type ModalCloseButtonProps = CloseButtonProps;
/**
 * ModalCloseButton is used closes the modal.
 *
 * You don't need to pass the `onClick` to it, it reads the
 * `onClose` action from the modal context.
 */
export declare const ModalCloseButton: import("../system").ComponentWithAs<"button", CloseButtonProps>;
