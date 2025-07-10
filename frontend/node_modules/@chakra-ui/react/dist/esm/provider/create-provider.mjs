'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Provider } from './provider.mjs';
import { ToastOptionProvider, ToastProvider } from '../toast/toast.provider.mjs';

const createProvider = (providerTheme) => {
  return function ChakraProvider({
    children,
    theme = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return /* @__PURE__ */ jsxs(Provider, { theme, ...restProps, children: [
      /* @__PURE__ */ jsx(ToastOptionProvider, { value: toastOptions?.defaultOptions, children }),
      /* @__PURE__ */ jsx(ToastProvider, { ...toastOptions })
    ] });
  };
};

export { createProvider };
