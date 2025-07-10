'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var theme = require('@chakra-ui/theme');
var createToastFn = require('./create-toast-fn.cjs');
var toast_provider = require('./toast.provider.cjs');
var providers = require('../system/providers.cjs');
var colorModeContext = require('../color-mode/color-mode-context.cjs');

const defaults = {
  duration: 5e3,
  variant: "solid"
};
const defaultStandaloneParam = {
  theme: theme.theme,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: defaults,
  forced: false
};
function createStandaloneToast({
  theme = defaultStandaloneParam.theme,
  colorMode = defaultStandaloneParam.colorMode,
  toggleColorMode = defaultStandaloneParam.toggleColorMode,
  setColorMode = defaultStandaloneParam.setColorMode,
  defaultOptions = defaultStandaloneParam.defaultOptions,
  motionVariants,
  toastSpacing,
  component,
  forced
} = defaultStandaloneParam) {
  const colorModeContextValue = {
    colorMode,
    setColorMode,
    toggleColorMode,
    forced
  };
  const ToastContainer = () => /* @__PURE__ */ jsxRuntime.jsx(providers.ThemeProvider, { theme, children: /* @__PURE__ */ jsxRuntime.jsx(colorModeContext.ColorModeContext.Provider, { value: colorModeContextValue, children: /* @__PURE__ */ jsxRuntime.jsx(
    toast_provider.ToastProvider,
    {
      defaultOptions,
      motionVariants,
      toastSpacing,
      component
    }
  ) }) });
  return {
    ToastContainer,
    toast: createToastFn.createToastFn(theme.direction, defaultOptions)
  };
}

exports.createStandaloneToast = createStandaloneToast;
exports.defaultStandaloneParam = defaultStandaloneParam;
