'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var colorModeProvider = require('../color-mode/color-mode-provider.cjs');
var cssReset = require('../css-reset/css-reset.cjs');
var providers = require('../system/providers.cjs');
var portalManager = require('../portal/portal-manager.cjs');
var env = require('../env/env.cjs');

const Provider = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot,
    disableEnvironment,
    disableGlobalStyle
  } = props;
  const _children = /* @__PURE__ */ jsxRuntime.jsx(
    env.EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsx(providers.ThemeProvider, { theme, cssVarsRoot, children: /* @__PURE__ */ jsxRuntime.jsxs(
    colorModeProvider.ColorModeProvider,
    {
      colorModeManager,
      options: theme.config,
      children: [
        resetCSS ? /* @__PURE__ */ jsxRuntime.jsx(cssReset.CSSReset, { scope: resetScope }) : /* @__PURE__ */ jsxRuntime.jsx(cssReset.CSSPolyfill, {}),
        !disableGlobalStyle && /* @__PURE__ */ jsxRuntime.jsx(providers.GlobalStyle, {}),
        portalZIndex ? /* @__PURE__ */ jsxRuntime.jsx(portalManager.PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

exports.Provider = Provider;
