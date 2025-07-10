'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@chakra-ui/utils');
var menu = require('./menu.cjs');
var factory = require('../system/factory.cjs');

const MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles = menu.useMenuStyles();
  return /* @__PURE__ */ jsxRuntime.jsx(
    factory.chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: utils.cx("chakra-menu__divider", className),
      ...rest,
      __css: styles.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

exports.MenuDivider = MenuDivider;
