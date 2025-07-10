'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { toCSSVar, css } from '@chakra-ui/styled-system';
import { createContext, memoizedGet, runIfFn } from '@chakra-ui/utils';
import { ThemeProvider as ThemeProvider$1, Global } from '@emotion/react';
import { useMemo } from 'react';
import { useColorMode } from '../color-mode/color-mode-context.mjs';

function ThemeProvider(props) {
  const { cssVarsRoot, theme, children } = props;
  const computedTheme = useMemo(() => toCSSVar(theme), [theme]);
  return /* @__PURE__ */ jsxs(ThemeProvider$1, { theme: computedTheme, children: [
    /* @__PURE__ */ jsx(CSSVars, { root: cssVarsRoot }),
    children
  ] });
}
function CSSVars({ root = ":host, :root" }) {
  const selector = [root, `[data-theme]`].join(",");
  return /* @__PURE__ */ jsx(Global, { styles: (theme) => ({ [selector]: theme.__cssVars }) });
}
const [StylesProvider, useStyles] = createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function createStylesContext(componentName) {
  return createContext({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `
  });
}
function GlobalStyle() {
  const { colorMode } = useColorMode();
  return /* @__PURE__ */ jsx(
    Global,
    {
      styles: (theme) => {
        const styleObjectOrFn = memoizedGet(theme, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode });
        if (!globalStyles)
          return void 0;
        const styles = css(globalStyles)(theme);
        return styles;
      }
    }
  );
}

export { CSSVars, GlobalStyle, StylesProvider, ThemeProvider, createStylesContext, useStyles };
