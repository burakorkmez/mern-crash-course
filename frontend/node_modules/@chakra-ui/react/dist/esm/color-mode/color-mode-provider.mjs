'use client';
import { jsx } from 'react/jsx-runtime';
import { isBrowser } from '@chakra-ui/utils';
import { __unsafe_useEmotionCache } from '@emotion/react';
import { useLayoutEffect, useEffect, useState, useMemo, useCallback } from 'react';
import { ColorModeContext } from './color-mode-context.mjs';
import { getColorModeUtils } from './color-mode.utils.mjs';
import { localStorageManager } from './storage-manager.mjs';

const noop = () => {
};
const useSafeLayoutEffect = isBrowser() ? useLayoutEffect : useEffect;
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
    colorModeManager = localStorageManager
  } = props;
  const cache = __unsafe_useEmotionCache();
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = useState(
    () => getTheme(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = useState(
    () => getTheme(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = useMemo(
    () => getColorModeUtils({
      preventTransition: disableTransitionOnChange,
      nonce: cache?.nonce
    }),
    [disableTransitionOnChange, cache?.nonce]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = useCallback(
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
  useEffect(() => {
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
  const toggleColorMode = useCallback(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  useEffect(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = useMemo(
    () => ({
      colorMode: value ?? resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return /* @__PURE__ */ jsx(ColorModeContext.Provider, { value: context, children });
};
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
  const context = useMemo(
    () => ({
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return /* @__PURE__ */ jsx(ColorModeContext.Provider, { value: context, ...props });
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
  const context = useMemo(
    () => ({
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return /* @__PURE__ */ jsx(ColorModeContext.Provider, { value: context, ...props });
}
LightMode.displayName = "LightMode";

export { ColorModeProvider, DarkMode, LightMode };
