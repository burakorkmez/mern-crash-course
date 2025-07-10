'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hooks = require('@chakra-ui/hooks');
var utils = require('@chakra-ui/utils');
var React = require('react');
var reactDom = require('react-dom');
var portalManager = require('./portal-manager.cjs');

const [PortalContextProvider, usePortalContext] = utils.createContext({
  strict: false,
  name: "PortalContext"
});
const PORTAL_CLASSNAME = "chakra-portal";
const PORTAL_SELECTOR = `.chakra-portal`;
const Container = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: props.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: props.children
  }
);
const DefaultPortal = (props) => {
  const { appendToParentPortal, children } = props;
  const [tempNode, setTempNode] = React.useState(null);
  const portal = React.useRef(null);
  const [, forceUpdate] = React.useState({});
  React.useEffect(() => forceUpdate({}), []);
  const parentPortal = usePortalContext();
  const manager = portalManager.usePortalManager();
  hooks.useSafeLayoutEffect(() => {
    if (!tempNode)
      return;
    const doc = tempNode.ownerDocument;
    const host = appendToParentPortal ? parentPortal ?? doc.body : doc.body;
    if (!host)
      return;
    portal.current = doc.createElement("div");
    portal.current.className = PORTAL_CLASSNAME;
    host.appendChild(portal.current);
    forceUpdate({});
    const portalNode = portal.current;
    return () => {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, [tempNode]);
  const _children = manager?.zIndex ? /* @__PURE__ */ jsxRuntime.jsx(Container, { zIndex: manager?.zIndex, children }) : children;
  return portal.current ? reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(PortalContextProvider, { value: portal.current, children: _children }),
    portal.current
  ) : /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ref: (el) => {
        if (el)
          setTempNode(el);
      }
    }
  );
};
const ContainerPortal = (props) => {
  const { children, containerRef, appendToParentPortal } = props;
  const containerEl = containerRef.current;
  const host = containerEl ?? (typeof window !== "undefined" ? document.body : void 0);
  const portal = React.useMemo(() => {
    const node = containerEl?.ownerDocument.createElement("div");
    if (node)
      node.className = PORTAL_CLASSNAME;
    return node;
  }, [containerEl]);
  const [, forceUpdate] = React.useState({});
  hooks.useSafeLayoutEffect(() => forceUpdate({}), []);
  hooks.useSafeLayoutEffect(() => {
    if (!portal || !host)
      return;
    host.appendChild(portal);
    return () => {
      host.removeChild(portal);
    };
  }, [portal, host]);
  if (host && portal) {
    return reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx(PortalContextProvider, { value: appendToParentPortal ? portal : null, children }),
      portal
    );
  }
  return null;
};
function Portal(props) {
  const portalProps = {
    appendToParentPortal: true,
    ...props
  };
  const { containerRef, ...rest } = portalProps;
  return containerRef ? /* @__PURE__ */ jsxRuntime.jsx(ContainerPortal, { containerRef, ...rest }) : /* @__PURE__ */ jsxRuntime.jsx(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";

exports.Portal = Portal;
