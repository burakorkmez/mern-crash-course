'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var menuGroup = require('./menu-group.cjs');
var useMenu = require('./use-menu.cjs');

const MenuOptionGroup = (props) => {
  const { className, title, ...rest } = props;
  const ownProps = useMenu.useMenuOptionGroup(rest);
  return /* @__PURE__ */ jsxRuntime.jsx(
    menuGroup.MenuGroup,
    {
      title,
      className: utils.cx("chakra-menu__option-group", className),
      ...ownProps
    }
  );
};
MenuOptionGroup.displayName = "MenuOptionGroup";

exports.MenuOptionGroup = MenuOptionGroup;
