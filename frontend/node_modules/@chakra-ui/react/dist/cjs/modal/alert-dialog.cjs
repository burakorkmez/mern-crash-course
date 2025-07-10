'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var modal = require('./modal.cjs');
var modalContent = require('./modal-content.cjs');
var modalBody = require('./modal-body.cjs');
var modalCloseButton = require('./modal-close-button.cjs');
var modalFooter = require('./modal-footer.cjs');
var modalHeader = require('./modal-header.cjs');
var modalOverlay = require('./modal-overlay.cjs');
var forwardRef = require('../system/forward-ref.cjs');

function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(modal.Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
const AlertDialogContent = forwardRef.forwardRef(
  (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(modalContent.ModalContent, { ref, role: "alertdialog", ...props })
);

exports.AlertDialogBody = modalBody.ModalBody;
exports.AlertDialogCloseButton = modalCloseButton.ModalCloseButton;
exports.AlertDialogFooter = modalFooter.ModalFooter;
exports.AlertDialogHeader = modalHeader.ModalHeader;
exports.AlertDialogOverlay = modalOverlay.ModalOverlay;
exports.AlertDialog = AlertDialog;
exports.AlertDialogContent = AlertDialogContent;
