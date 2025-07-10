'use client';
import { jsx } from 'react/jsx-runtime';
import { theme } from '@chakra-ui/theme';
import { createToastFn } from './create-toast-fn.mjs';
import { ToastProvider } from './toast.provider.mjs';
import { ThemeProvider } from '../system/providers.mjs';
import { ColorModeContext } from '../color-mode/color-mode-context.mjs';

const defaults = {
  duration: 5e3,
  variant: "solid"
};
const defaultStandaloneParam = {
  theme: theme,
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
  const ToastContainer = () => /* @__PURE__ */ jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsx(ColorModeContext.Provider, { value: colorModeContextValue, children: /* @__PURE__ */ jsx(
    ToastProvider,
    {
      defaultOptions,
      motionVariants,
      toastSpacing,
      component
    }
  ) }) });
  return {
    ToastContainer,
    toast: createToastFn(theme.direction, defaultOptions)
  };
}

export { createStandaloneToast, defaultStandaloneParam };
