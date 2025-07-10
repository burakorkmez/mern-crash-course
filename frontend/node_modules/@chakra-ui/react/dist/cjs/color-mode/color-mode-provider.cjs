'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var react = require('@emotion/react');
var React = require('react');
var colorModeContext = require('./color-mode-context.cjs');
var colorMode_utils = require('./color-mode.utils.cjs');
var storageManager = require('./storage-manager.cjs');

const noop = () => {
};
const useSafeLayoutEffect = utils.isBrowser() ? React.useLayoutEffect : React.useEffect;
function getTheme(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
const ColorModeProvider = function ColorModeProvider2(props) {
  const {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode,
      disableTransitionOnChange
    } = {},
    colorModeManager = storageManager.localStorageManager
  } = props;
  const cache = react.__unsafe_useEmotionCache();
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = React.useState(
    () => getTheme(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = React.useState(
    () => getTheme(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = React.useMemo(
    () => colorMode_utils.getColorModeUtils({
      preventTransition: disableTransitionOnChange,
      nonce: cache?.nonce
    }),
    [disableTransitionOnChange, cache?.nonce]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = React.useCallback(
    (value2) => {
      const resolved = value2 === "system" ? getSystemTheme() : value2;
      rawSetColorMode(resolved);
      setClassName(resolved === "dark");
      setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, getSystemTheme, setClassName, setDataset]
  );
  useSafeLayoutEffect(() => {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  React.useEffect(() => {
    const managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, setColorMode]);
  const toggleColorMode = React.useCallback(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  React.useEffect(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = React.useMemo(
    () => ({
      colorMode: value ?? resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(colorModeContext.ColorModeContext.Provider, { value: context, children });
};
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
  const context = React.useMemo(
    () => ({
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsx(colorModeContext.ColorModeContext.Provider, { value: context, ...props });
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
  const context = React.useMemo(
    () => ({
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsx(colorModeContext.ColorModeContext.Provider, { value: context, ...props });
}
LightMode.displayName = "LightMode";

exports.ColorModeProvider = ColorModeProvider;
exports.DarkMode = DarkMode;
exports.LightMode = LightMode;
