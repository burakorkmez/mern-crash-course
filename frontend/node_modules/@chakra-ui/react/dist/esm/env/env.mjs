'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useSafeLayoutEffect } from '@chakra-ui/hooks';
import { createContext, useReducer, useContext, useRef, useMemo } from 'react';

const EnvironmentContext = createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function useEnvironment({ defer } = {}) {
  const [, forceUpdate] = useReducer((c) => c + 1, 0);
  useSafeLayoutEffect(() => {
    if (!defer)
      return;
    forceUpdate();
  }, [defer]);
  return useContext(EnvironmentContext);
}
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = useRef(null);
  const context = useMemo(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => ref.current?.ownerDocument ?? document,
      getWindow: () => ref.current?.ownerDocument.defaultView ?? window
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return /* @__PURE__ */ jsxs(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && /* @__PURE__ */ jsx("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";

export { EnvironmentProvider, useEnvironment };
