'use client';
import { jsx } from 'react/jsx-runtime';
import { useSafeLayoutEffect } from '@chakra-ui/hooks';
import { createContext } from '@chakra-ui/utils';
import { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { usePortalManager } from './portal-manager.mjs';

const [PortalContextProvider, usePortalContext] = createContext({
  strict: false,
  name: "PortalContext"
});
const PORTAL_CLASSNAME = "chakra-portal";
const PORTAL_SELECTOR = `.chakra-portal`;
const Container = (props) => /* @__PURE__ */ jsx(
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
  const [tempNode, setTempNode] = useState(null);
  const portal = useRef(null);
  const [, forceUpdate] = useState({});
  useEffect(() => forceUpdate({}), []);
  const parentPortal = usePortalContext();
  const manager = usePortalManager();
  useSafeLayoutEffect(() => {
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
  const _children = manager?.zIndex ? /* @__PURE__ */ jsx(Container, { zIndex: manager?.zIndex, children }) : children;
  return portal.current ? createPortal(
    /* @__PURE__ */ jsx(PortalContextProvider, { value: portal.current, children: _children }),
    portal.current
  ) : /* @__PURE__ */ jsx(
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
  const portal = useMemo(() => {
    const node = containerEl?.ownerDocument.createElement("div");
    if (node)
      node.className = PORTAL_CLASSNAME;
    return node;
  }, [containerEl]);
  const [, forceUpdate] = useState({});
  useSafeLayoutEffect(() => forceUpdate({}), []);
  useSafeLayoutEffect(() => {
    if (!portal || !host)
      return;
    host.appendChild(portal);
    return () => {
      host.removeChild(portal);
    };
  }, [portal, host]);
  if (host && portal) {
    return createPortal(
      /* @__PURE__ */ jsx(PortalContextProvider, { value: appendToParentPortal ? portal : null, children }),
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
  return containerRef ? /* @__PURE__ */ jsx(ContainerPortal, { containerRef, ...rest }) : /* @__PURE__ */ jsx(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";

export { Portal };
