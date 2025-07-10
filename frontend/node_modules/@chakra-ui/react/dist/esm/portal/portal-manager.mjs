'use client';
import { jsx } from 'react/jsx-runtime';
import { createContext } from '@chakra-ui/utils';

const [PortalManagerContextProvider, usePortalManager] = createContext({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  const { children, zIndex } = props;
  return /* @__PURE__ */ jsx(PortalManagerContextProvider, { value: { zIndex }, children });
}
PortalManager.displayName = "PortalManager";

export { PortalManager, usePortalManager };
