'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var react = require('@emotion/react');
var React = require('react');
var colorModeContext = require('../color-mode/color-mode-context.cjs');

function ThemeProvider(props) {
  const { cssVarsRoot, theme, children } = props;
  const computedTheme = React.useMemo(() => styledSystem.toCSSVar(theme), [theme]);
  return /* @__PURE__ */ jsxRuntime.jsxs(react.ThemeProvider, { theme: computedTheme, children: [
    /* @__PURE__ */ jsxRuntime.jsx(CSSVars, { root: cssVarsRoot }),
    children
  ] });
}
function CSSVars({ root = ":host, :root" }) {
  const selector = [root, `[data-theme]`].join(",");
  return /* @__PURE__ */ jsxRuntime.jsx(react.Global, { styles: (theme) => ({ [selector]: theme.__cssVars }) });
}
const [StylesProvider, useStyles] = utils.createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function createStylesContext(componentName) {
  return utils.createContext({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `
  });
}
function GlobalStyle() {
  const { colorMode } = colorModeContext.useColorMode();
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.Global,
    {
      styles: (theme) => {
        const styleObjectOrFn = utils.memoizedGet(theme, "styles.global");
        const globalStyles = utils.runIfFn(styleObjectOrFn, { theme, colorMode });
        if (!globalStyles)
          return void 0;
        const styles = styledSystem.css(globalStyles)(theme);
        return styles;
      }
    }
  );
}

exports.CSSVars = CSSVars;
exports.GlobalStyle = GlobalStyle;
exports.StylesProvider = StylesProvider;
exports.ThemeProvider = ThemeProvider;
exports.createStylesContext = createStylesContext;
exports.useStyles = useStyles;
