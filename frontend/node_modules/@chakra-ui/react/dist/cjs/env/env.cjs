'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hooks = require('@chakra-ui/hooks');
var React = require('react');

const EnvironmentContext = React.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function useEnvironment({ defer } = {}) {
  const [, forceUpdate] = React.useReducer((c) => c + 1, 0);
  hooks.useSafeLayoutEffect(() => {
    if (!defer)
      return;
    forceUpdate();
  }, [defer]);
  return React.useContext(EnvironmentContext);
}
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = React.useRef(null);
  const context = React.useMemo(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => ref.current?.ownerDocument ?? document,
      getWindow: () => ref.current?.ownerDocument.defaultView ?? window
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return /* @__PURE__ */ jsxRuntime.jsxs(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && /* @__PURE__ */ jsxRuntime.jsx("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";

exports.EnvironmentProvider = EnvironmentProvider;
exports.useEnvironment = useEnvironment;
