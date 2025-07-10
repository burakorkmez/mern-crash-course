'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');

const [PortalManagerContextProvider, usePortalManager] = utils.createContext({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  const { children, zIndex } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(PortalManagerContextProvider, { value: { zIndex }, children });
}
PortalManager.displayName = "PortalManager";

exports.PortalManager = PortalManager;
exports.usePortalManager = usePortalManager;
