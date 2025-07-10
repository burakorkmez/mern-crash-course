'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var provider = require('./provider.cjs');
var toast_provider = require('../toast/toast.provider.cjs');

const createProvider = (providerTheme) => {
  return function ChakraProvider({
    children,
    theme = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return /* @__PURE__ */ jsxRuntime.jsxs(provider.Provider, { theme, ...restProps, children: [
      /* @__PURE__ */ jsxRuntime.jsx(toast_provider.ToastOptionProvider, { value: toastOptions?.defaultOptions, children }),
      /* @__PURE__ */ jsxRuntime.jsx(toast_provider.ToastProvider, { ...toastOptions })
    ] });
  };
};

exports.createProvider = createProvider;
