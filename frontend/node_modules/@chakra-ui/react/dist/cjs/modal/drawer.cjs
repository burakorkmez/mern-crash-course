'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var modal = require('./modal.cjs');
var modalBody = require('./modal-body.cjs');
var modalCloseButton = require('./modal-close-button.cjs');
var modalFooter = require('./modal-footer.cjs');
var modalHeader = require('./modal-header.cjs');
var modalOverlay = require('./modal-overlay.cjs');
var useTheme = require('../system/use-theme.cjs');

const [DrawerContextProvider, useDrawerContext] = utils.createContext();
const placementMap = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function getDrawerPlacement(placement, dir) {
  if (!placement)
    return;
  return placementMap[placement]?.[dir] ?? placement;
}
function Drawer(props) {
  const {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children,
    ...rest
  } = props;
  const theme = useTheme.useTheme();
  const drawerStyleConfig = theme.components?.Drawer;
  const placement = getDrawerPlacement(placementProp, theme.direction);
  return /* @__PURE__ */ jsxRuntime.jsx(DrawerContextProvider, { value: { placement }, children: /* @__PURE__ */ jsxRuntime.jsx(
    modal.Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}

exports.DrawerBody = modalBody.ModalBody;
exports.DrawerCloseButton = modalCloseButton.ModalCloseButton;
exports.DrawerFooter = modalFooter.ModalFooter;
exports.DrawerHeader = modalHeader.ModalHeader;
exports.DrawerOverlay = modalOverlay.ModalOverlay;
exports.Drawer = Drawer;
exports.useDrawerContext = useDrawerContext;
