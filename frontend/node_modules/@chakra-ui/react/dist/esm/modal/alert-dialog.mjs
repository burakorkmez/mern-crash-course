'use client';
import { jsx } from 'react/jsx-runtime';
import { Modal } from './modal.mjs';
import { ModalContent } from './modal-content.mjs';
export { ModalBody as AlertDialogBody } from './modal-body.mjs';
export { ModalCloseButton as AlertDialogCloseButton } from './modal-close-button.mjs';
export { ModalFooter as AlertDialogFooter } from './modal-footer.mjs';
export { ModalHeader as AlertDialogHeader } from './modal-header.mjs';
export { ModalOverlay as AlertDialogOverlay } from './modal-overlay.mjs';
import { forwardRef } from '../system/forward-ref.mjs';

function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return /* @__PURE__ */ jsx(Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
const AlertDialogContent = forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(ModalContent, { ref, role: "alertdialog", ...props })
);

export { AlertDialog, AlertDialogContent };
