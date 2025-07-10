'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var menuCommand = require('./menu-command.cjs');
var menuIcon = require('./menu-icon.cjs');
var styledMenuItem = require('./styled-menu-item.cjs');
var useMenu = require('./use-menu.cjs');
var forwardRef = require('../system/forward-ref.cjs');

const MenuItem = forwardRef.forwardRef((props, ref) => {
  const {
    icon,
    iconSpacing = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenu.useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    styledMenuItem.StyledMenuItem,
    {
      ...menuitemProps,
      className: utils.cx("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx(menuIcon.MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing, children: icon }),
        _children,
        command && /* @__PURE__ */ jsxRuntime.jsx(menuCommand.MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

exports.MenuItem = MenuItem;
