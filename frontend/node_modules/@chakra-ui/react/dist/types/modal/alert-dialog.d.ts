import { ModalProps } from "./modal";
import { ModalContentProps } from "./modal-content";
export interface AlertDialogProps extends Omit<ModalProps, "initialFocusRef"> {
    leastDestructiveRef: NonNullable<ModalProps["initialFocusRef"]>;
}
/**
 * `AlertDialog` component is used interrupt the user with a mandatory confirmation or action.
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/alert-dialog
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/
 */
export declare function AlertDialog(props: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
export declare const AlertDialogContent: import("../system").ComponentWithAs<"section", ModalContentProps>;
export { ModalBody as AlertDialogBody } from "./modal-body";
export { ModalCloseButton as AlertDialogCloseButton } from "./modal-close-button";
export { ModalFooter as AlertDialogFooter } from "./modal-footer";
export { ModalHeader as AlertDialogHeader } from "./modal-header";
export { ModalOverlay as AlertDialogOverlay } from "./modal-overlay";
