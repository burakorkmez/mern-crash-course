'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styledSystem = require('@chakra-ui/styled-system');
var utils = require('@chakra-ui/utils');
var React = require('react');
var useMenu = require('./use-menu.cjs');
var useTheme = require('../system/use-theme.cjs');
var useStyleConfig = require('../system/use-style-config.cjs');

const [MenuStylesProvider, useMenuStyles] = utils.createContext({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
const Menu = (props) => {
  const { children } = props;
  const styles = useStyleConfig.useMultiStyleConfig("Menu", props);
  const ownProps = styledSystem.omitThemingProps(props);
  const { direction } = useTheme.useTheme();
  const { descendants, ...ctx } = useMenu.useMenu({ ...ownProps, direction });
  const context = React.useMemo(() => ctx, [ctx]);
  const { isOpen, onClose, forceUpdate } = context;
  return /* @__PURE__ */ jsxRuntime.jsx(useMenu.MenuDescendantsProvider, { value: descendants, children: /* @__PURE__ */ jsxRuntime.jsx(useMenu.MenuProvider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(MenuStylesProvider, { value: styles, children: utils.runIfFn(children, { isOpen, onClose, forceUpdate }) }) }) });
};
Menu.displayName = "Menu";

exports.Menu = Menu;
exports.useMenuStyles = useMenuStyles;
