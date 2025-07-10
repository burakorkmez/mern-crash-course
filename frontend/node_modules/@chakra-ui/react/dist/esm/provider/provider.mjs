'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ColorModeProvider } from '../color-mode/color-mode-provider.mjs';
import { CSSReset, CSSPolyfill } from '../css-reset/css-reset.mjs';
import { ThemeProvider, GlobalStyle } from '../system/providers.mjs';
import { PortalManager } from '../portal/portal-manager.mjs';
import { EnvironmentProvider } from '../env/env.mjs';

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
  const _children = /* @__PURE__ */ jsx(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return /* @__PURE__ */ jsx(ThemeProvider, { theme, cssVarsRoot, children: /* @__PURE__ */ jsxs(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme.config,
      children: [
        resetCSS ? /* @__PURE__ */ jsx(CSSReset, { scope: resetScope }) : /* @__PURE__ */ jsx(CSSPolyfill, {}),
        !disableGlobalStyle && /* @__PURE__ */ jsx(GlobalStyle, {}),
        portalZIndex ? /* @__PURE__ */ jsx(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

export { Provider };
