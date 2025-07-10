'use client';
import { jsx } from 'react/jsx-runtime';
import { createContext } from '@chakra-ui/utils';
import { Modal } from './modal.mjs';
export { ModalBody as DrawerBody } from './modal-body.mjs';
export { ModalCloseButton as DrawerCloseButton } from './modal-close-button.mjs';
export { ModalFooter as DrawerFooter } from './modal-footer.mjs';
export { ModalHeader as DrawerHeader } from './modal-header.mjs';
export { ModalOverlay as DrawerOverlay } from './modal-overlay.mjs';
import { useTheme } from '../system/use-theme.mjs';

const [DrawerContextProvider, useDrawerContext] = createContext();
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
  const theme = useTheme();
  const drawerStyleConfig = theme.components?.Drawer;
  const placement = getDrawerPlacement(placementProp, theme.direction);
  return /* @__PURE__ */ jsx(DrawerContextProvider, { value: { placement }, children: /* @__PURE__ */ jsx(
    Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}

export { Drawer, useDrawerContext };
